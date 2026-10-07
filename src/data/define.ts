import type { Alternative, Feature, LicenseKind, Tool } from "../types";

export function feats(block: string): Feature[] {
  return block
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith("#"))
    .map((line) => {
      const parts = line.split("|");
      if (parts.length !== 3) {
        throw new Error(`Feature rows need area | name | description: ${line}`);
      }
      const [area, name, description] = parts.map((part) => part.trim());
      return { area, name, description };
    });
}

export function alts(rows: [string, string, string, string][]): Alternative[] {
  return rows.map(([name, href, license, note]) => ({ name, href, license, note }));
}

const UNDISCLOSED = "Not disclosed";

export function row(draft: {
  id: string;
  name: string;
  vendor: string;
  category: string;
  summary: string;
  users?: string;
  revenue?: string;
  scaleNote?: string;
  reach: string;
  licenseKind?: LicenseKind;
  licenseName: string;
  licenseNote: string;
  gap: string;
  features: string;
  links: [string, string][];
  alts: [string, string, string, string][];
}): Tool {
  return {
    id: draft.id,
    name: draft.name,
    vendor: draft.vendor,
    category: draft.category,
    summary: draft.summary,
    users: draft.users?.trim() || UNDISCLOSED,
    revenue: draft.revenue?.trim() || UNDISCLOSED,
    scaleNote: draft.scaleNote?.trim() || "No audited user or revenue figure is cited for this product.",
    reach: draft.reach,
    licenseKind: draft.licenseKind ?? "proprietary",
    licenseName: draft.licenseName,
    licenseNote: draft.licenseNote,
    gap: draft.gap,
    features: feats(draft.features),
    links: draft.links.map(([label, href]) => ({ label, href })),
    alternatives: alts(draft.alts),
  };
}
