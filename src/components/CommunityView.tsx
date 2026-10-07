import { useState } from "react";
import type { Tool } from "../types";
import { parseSubmissionExport, submissionMarkdown, type Submission } from "../lib/submissions";
import { rankSubmissions } from "../lib/leaderboard";

export function CommunityView({
  tools,
  submissions,
  onDelete,
  onImport,
  onClear,
  onVote,
  votedIds,
}: {
  tools: Tool[];
  submissions: Submission[];
  onDelete: (id: string) => void;
  onImport: (items: Submission[]) => void;
  onClear: () => void;
  onVote: (id: string) => void;
  votedIds: string[];
}) {
  const [pendingClear, setPendingClear] = useState(false);
  const [message, setMessage] = useState("");

  async function copyAll() {
    try {
      const text = submissions
        .map((item) => submissionMarkdown(item, tools.find((tool) => tool.id === item.replacesId)?.name ?? item.replacesId))
        .join("\n");
      await navigator.clipboard.writeText(text);
      setMessage("Markdown copied.");
    } catch {
      setMessage("Clipboard access was blocked. Export JSON instead.");
    }
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(submissions, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "opensourceit-submissions.json";
    link.click();
    URL.revokeObjectURL(url);
  }

  async function onFile(file: File | undefined) {
    if (!file) return;
    try {
      const parsed: unknown = JSON.parse(await file.text());
      if (!Array.isArray(parsed)) throw new Error("Expected a JSON array.");
      const incoming = parseSubmissionExport(parsed);
      onImport(incoming);
      setMessage(`${incoming.length} project${incoming.length === 1 ? "" : "s"} imported. Invalid rows were skipped.`);
    } catch {
      setMessage("That file could not be read as a submission export.");
    }
  }

  return (
    <>
      <section className="hero compact community-hero">
        <p className="eyebrow">Community desk</p>
        <h1 className="thesis">Projects people are putting forward.</h1>
        <p className="lede">
          Local submissions are a working queue for the index. Back projects you would actually try, then export the
          strongest entries for a maintainer review.
        </p>
        <div className="community-stats" aria-label="Community statistics">
          <div><strong>{submissions.length}</strong><span>submitted here</span></div>
          <div><strong>{submissions.reduce((sum, item) => sum + (item.votes ?? 0), 0)}</strong><span>community votes</span></div>
          <div><strong>{submissions.filter((item) => item.status === "production").length}</strong><span>production-ready</span></div>
        </div>
      </section>
      <div className="actions">
        <button className="button" type="button" onClick={exportJson} disabled={submissions.length === 0}>
          Export JSON
        </button>
        <button className="button secondary" type="button" onClick={() => void copyAll()} disabled={submissions.length === 0}>
          Copy Markdown
        </button>
        <label className="button secondary">
          Import JSON
          <input
            className="sr"
            type="file"
            accept="application/json"
            onChange={(event) => void onFile(event.target.files?.[0])}
          />
        </label>
      </div>
      {message && <p className="meta-line">{message}</p>}
      {submissions.length === 0 && (
        <p className="empty">
          No projects listed in this browser yet. <a href="#/submit">List one</a>.
        </p>
      )}
      {rankSubmissions(submissions).map((item, index) => {
        const tool = tools.find((candidate) => candidate.id === item.replacesId);
        const voted = votedIds.includes(item.id);
        return (
          <article key={item.id} className="card submission-card">
            <span className="submission-rank">{String(index + 1).padStart(2, "0")}</span>
            <p className="badge">
              {item.license} · {item.status}
            </p>
            <h2>{item.project}</h2>
            <p className="meta">
              {item.maker} · {new Date(item.createdAt).toLocaleDateString()} ·{" "}
              {tool ? <a href={`#/tool/${tool.id}/alternatives`}>{tool.name}</a> : "Not tied to one listed tool"}
            </p>
            <p>{item.summary}</p>
            <div className="submission-features">
            {item.features.map((feature) => (
              <div key={feature.name} className="feature">
                <h4>{feature.name}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
            </div>
            <p className="actions">
              <a href={item.website} target="_blank" rel="noreferrer">
                Homepage
              </a>
              <a href={item.repo} target="_blank" rel="noreferrer">
                Repository
              </a>
              <button className="vote-button compact-vote" type="button" disabled={voted} onClick={() => onVote(item.id)}>
                <strong>{item.votes ?? 0}</strong> {voted ? "Backed" : "Back this project"}
              </button>
              <button className="button secondary" type="button" onClick={() => onDelete(item.id)}>
                Remove from this browser
              </button>
            </p>
          </article>
        );
      })}
      {submissions.length > 0 && (
        <p>
          {pendingClear ? (
            <>
              Remove every listing stored in this browser?{" "}
              <button className="button" type="button" onClick={() => { onClear(); setPendingClear(false); }}>
                Remove them
              </button>{" "}
              <button className="button secondary" type="button" onClick={() => setPendingClear(false)}>
                Keep them
              </button>
            </>
          ) : (
            <button className="button secondary" type="button" onClick={() => setPendingClear(true)}>
              Clear all listings in this browser
            </button>
          )}
        </p>
      )}
    </>
  );
}
