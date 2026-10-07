import { useMemo, useState } from "react";
import type { Tool } from "../types";
import type { Submission } from "../lib/submissions";
import { rankSubmissions, buildAlternativeLeaderboard, type RankedAlternative } from "../lib/leaderboard";
import { STAR_SNAPSHOT, formatStarCount } from "../lib/stars";

type Board = "alternatives" | "community";

function alternativeLabel(entry: RankedAlternative) {
  if (entry.toolNames.length === 1) return `Alternative to ${entry.toolNames[0]}`;
  return `Alternative to ${entry.toolNames[0]} + ${entry.toolNames.length - 1} more`;
}

export function LeaderboardView({
  tools,
  submissions,
  votedIds,
  onVote,
}: {
  tools: Tool[];
  submissions: Submission[];
  votedIds: string[];
  onVote: (id: string) => void;
}) {
  const [board, setBoard] = useState<Board>("alternatives");
  const alternatives = useMemo(() => buildAlternativeLeaderboard(tools), [tools]);
  const community = useMemo(() => rankSubmissions(submissions), [submissions]);

  return (
    <>
      <section className="hero compact leaderboard-hero">
        <p className="eyebrow">The signal desk</p>
        <h1 className="thesis">What people are choosing instead.</h1>
        <p className="lede">
          A measured view of open-source momentum: repository stars for the researched alternatives, and votes from
          people who find a submitted project useful.
        </p>
        <div className="leaderboard-stats" aria-label="Leaderboard statistics">
          <div><strong>{alternatives.length}</strong><span>ranked alternatives</span></div>
          <div><strong>{submissions.length}</strong><span>community submissions</span></div>
          <div><strong>{STAR_SNAPSHOT}</strong><span>star snapshot</span></div>
        </div>
      </section>

      <div className="board-switcher" role="tablist" aria-label="Leaderboard type">
        <button
          className="board-tab"
          role="tab"
          aria-selected={board === "alternatives"}
          onClick={() => setBoard("alternatives")}
        >
          Open alternatives <span>{alternatives.length}</span>
        </button>
        <button
          className="board-tab"
          role="tab"
          aria-selected={board === "community"}
          onClick={() => setBoard("community")}
        >
          Community picks <span>{submissions.length}</span>
        </button>
      </div>

      {board === "alternatives" ? (
        <section className="leaderboard" role="tabpanel" aria-label="Open alternatives leaderboard">
          <div className="leaderboard-heading">
            <div>
              <p className="area-label">Public repository signal</p>
              <h2>Open projects with the most momentum.</h2>
            </div>
            <p className="meta leaderboard-note">Stars are a popularity signal, not a quality verdict.</p>
          </div>
          <div className="leaderboard-list">
            {alternatives.slice(0, 24).map((entry, index) => (
              <article className="leaderboard-row" key={entry.alternative.href}>
                <span className="leaderboard-rank">{String(index + 1).padStart(2, "0")}</span>
                <div className="leaderboard-project">
                  <div className="leaderboard-title-line">
                    <h3><a href={entry.alternative.href} target="_blank" rel="noreferrer">{entry.alternative.name}</a></h3>
                    <span className="badge">{entry.alternative.license}</span>
                  </div>
                  <p>{alternativeLabel(entry)}</p>
                  <span className="meta">{entry.repo} · {entry.forge}</span>
                </div>
                <div className="leaderboard-signal">
                  <strong>{formatStarCount(entry.stars)}</strong>
                  <span>stars</span>
                </div>
              </article>
            ))}
          </div>
          <p className="leaderboard-footnote">
            Counts are a dated snapshot from {STAR_SNAPSHOT}. Read the alternative notes before treating popularity as fit.
          </p>
        </section>
      ) : (
        <section className="leaderboard" role="tabpanel" aria-label="Community leaderboard">
          <div className="leaderboard-heading">
            <div>
              <p className="area-label">Local community signal</p>
              <h2>Projects people are willing to back.</h2>
            </div>
            <a className="button" href="#/submit">List an alternative <span aria-hidden="true">→</span></a>
          </div>
          {community.length > 0 ? (
            <div className="leaderboard-list">
              {community.map((item, index) => {
                const voted = votedIds.includes(item.id);
                const tool = tools.find((candidate) => candidate.id === item.replacesId);
                return (
                  <article className="leaderboard-row community-row" key={item.id}>
                    <span className="leaderboard-rank">{String(index + 1).padStart(2, "0")}</span>
                    <div className="leaderboard-project">
                      <div className="leaderboard-title-line">
                        <h3><a href={item.website} target="_blank" rel="noreferrer">{item.project}</a></h3>
                        <span className="badge">{item.status}</span>
                      </div>
                      <p>{tool ? `Answers ${tool.name}` : "Independent open-source project"}</p>
                      <span className="meta">{item.maker} · {item.features.length} documented features · {item.license}</span>
                    </div>
                    <button className="vote-button" type="button" disabled={voted} onClick={() => onVote(item.id)}>
                      <strong>{item.votes ?? 0}</strong>
                      <span>{voted ? "Backed" : "Back this"}</span>
                    </button>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="empty-board">
              <p className="eyebrow">No local votes yet</p>
              <h3>Be the first useful signal.</h3>
              <p>Submit an open-source project, then share the browser export with a maintainer.</p>
              <a className="button" href="#/submit">Open the submission portal <span aria-hidden="true">→</span></a>
            </div>
          )}
          <p className="leaderboard-footnote">Community votes are stored only in this browser. One vote per project per browser.</p>
        </section>
      )}
    </>
  );
}

