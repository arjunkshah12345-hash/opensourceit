export type SubmissionFeature = {
  name: string;
  description: string;
};

export type Submission = {
  id: string;
  createdAt: string;
  maker: string;
  project: string;
  website: string;
  repo: string;
  license: string;
  replacesId: string;
  summary: string;
  features: SubmissionFeature[];
  status: "prototype" | "beta" | "production";
  votes?: number;
};

const KEY = "opensourceit.submissions.v1";
const VOTES_KEY = "opensourceit.submission-votes.v1";

const STATUSES = new Set(["prototype", "beta", "production"]);

function isFeature(value: unknown): value is SubmissionFeature {
  if (!value || typeof value !== "object") return false;
  const row = value as SubmissionFeature;
  return typeof row.name === "string" && typeof row.description === "string";
}

function isSubmission(value: unknown): value is Submission {
  if (!value || typeof value !== "object") return false;
  const row = value as Submission;
  return (
    typeof row.id === "string" &&
    typeof row.createdAt === "string" &&
    typeof row.maker === "string" &&
    typeof row.project === "string" &&
    typeof row.website === "string" &&
    typeof row.repo === "string" &&
    typeof row.license === "string" &&
    typeof row.replacesId === "string" &&
    typeof row.summary === "string" &&
    (row.votes === undefined || (typeof row.votes === "number" && Number.isFinite(row.votes) && row.votes >= 0)) &&
    STATUSES.has(row.status) &&
    Array.isArray(row.features) &&
    row.features.every(isFeature)
  );
}

function normalize(item: Submission): Submission {
  return { ...item, votes: Math.max(0, Math.floor(item.votes ?? 0)) };
}

export function loadSubmissions(): Submission[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isSubmission).map(normalize);
  } catch {
    return [];
  }
}

export function parseSubmissionExport(value: unknown): Submission[] {
  if (!Array.isArray(value)) return [];
  return value.filter(isSubmission).map(normalize);
}

export function persistSubmissions(items: Submission[]) {
  localStorage.setItem(KEY, JSON.stringify(items.map(normalize)));
}

export function loadVotedSubmissionIds(): string[] {
  try {
    const raw = localStorage.getItem(VOTES_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((value): value is string => typeof value === "string");
  } catch {
    return [];
  }
}

export function persistVotedSubmissionIds(ids: string[]) {
  localStorage.setItem(VOTES_KEY, JSON.stringify([...new Set(ids)]));
}

export function parseFeatureLines(text: string): SubmissionFeature[] {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split(/\s+[—–-]\s+/, 2);
      if (parts.length === 2 && parts[0] && parts[1]) {
        return { name: parts[0], description: parts[1] };
      }
      return { name: line.slice(0, 60), description: line };
    });
}

export function submissionMarkdown(item: Submission, toolName: string) {
  const features = item.features.map((feature) => `- **${feature.name}.** ${feature.description}`);
  return [
    `### ${item.project}`,
    "",
    `- Maker: ${item.maker}`,
    `- Homepage: ${item.website}`,
    `- Repository: ${item.repo}`,
    `- License: ${item.license}`,
    `- Responds to: ${toolName}`,
    `- Status: ${item.status}`,
    "",
    item.summary,
    "",
    ...features,
    "",
  ].join("\n");
}
