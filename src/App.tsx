import { useEffect, useState } from "react";
import { tools } from "./data/catalog";
import { CatalogView } from "./components/CatalogView";
import { CommunityView } from "./components/CommunityView";
import { FeaturesView } from "./components/FeaturesView";
import { LeaderboardView } from "./components/LeaderboardView";
import { SubmitView } from "./components/SubmitView";
import {
  loadSubmissions,
  loadVotedSubmissionIds,
  parseSubmissionExport,
  persistSubmissions,
  persistVotedSubmissionIds,
  type Submission,
} from "./lib/submissions";
import { go, useRoute } from "./lib/route";

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return target.matches("input, textarea, select, [contenteditable='true']");
}

export function App() {
  const route = useRoute();
  const [submissions, setSubmissions] = useState<Submission[]>(() => loadSubmissions());
  const [votedIds, setVotedIds] = useState<string[]>(() => loadVotedSubmissionIds());

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && route.page === "catalog" && route.toolId) go("#/");
      if (event.key === "/" && !isTypingTarget(event.target)) {
        event.preventDefault();
        document.getElementById("catalog-search")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [route]);

  useEffect(() => {
    if (route.page === "features") document.title = "Features — opensourceit";
    else if (route.page === "submit") document.title = "List a project — opensourceit";
    else if (route.page === "community") document.title = "Community — opensourceit";
    else if (route.page === "leaderboard") document.title = "Leaderboard — opensourceit";
    else if (route.page === "catalog" && route.toolId) {
      const tool = tools.find((item) => item.id === route.toolId);
      document.title = tool ? `${tool.name} — opensourceit` : "opensourceit";
    } else document.title = "opensourceit — SaaS & AI alternatives";
  }, [route]);

  useEffect(() => {
    if (route.page !== "catalog" || !route.toolId) return;
    document.getElementById(`tool-${route.toolId}`)?.scrollIntoView({ block: "start" });
  }, [route]);

  function save(next: Submission[]) {
    setSubmissions(next);
    persistSubmissions(next);
  }

  function voteFor(id: string) {
    if (votedIds.includes(id)) return;
    const next = submissions.map((item) =>
      item.id === id ? { ...item, votes: (item.votes ?? 0) + 1 } : item,
    );
    save(next);
    const nextVoted = [...votedIds, id];
    setVotedIds(nextVoted);
    persistVotedSubmissionIds(nextVoted);
  }

  const page =
    route.page === "catalog"
      ? "catalog"
      : route.page === "features"
        ? "features"
        : route.page;

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="masthead">
        <div className="mast-inner">
          <a className="wordmark" href="#/" aria-label="opensourceit home">
            opensourceit<span aria-hidden="true">.</span>
          </a>
          <nav className="nav" aria-label="Primary">
          <div className="nav-links">
            <a className="nav-link" href="#/" aria-current={page === "catalog" ? "page" : undefined}>
              Index
            </a>
            <a className="nav-link" href="#/features" aria-current={page === "features" ? "page" : undefined}>
              Features
            </a>
            <a className="nav-link" href="#/submit" aria-current={page === "submit" ? "page" : undefined}>
              Submit
            </a>
            <a className="nav-link" href="#/community" aria-current={page === "community" ? "page" : undefined}>
              Community
            </a>
            <a className="nav-link" href="#/leaderboard" aria-current={page === "leaderboard" ? "page" : undefined}>
              Leaderboard
            </a>
          </div>
          </nav>
        </div>
      </header>
      <main id="main" className="sheet">
        {route.page === "catalog" && <CatalogView tools={tools} route={route} submissions={submissions} />}
        {route.page === "features" && <FeaturesView tools={tools} toolId={route.toolId} />}
        {route.page === "leaderboard" && (
          <LeaderboardView tools={tools} submissions={submissions} votedIds={votedIds} onVote={voteFor} />
        )}
        {route.page === "submit" && (
          <SubmitView
            key={route.toolId ?? "unselected"}
            tools={tools}
            selectedToolId={route.toolId}
            onCreate={(item) => save([item, ...submissions])}
          />
        )}
        {route.page === "community" && (
          <CommunityView
            tools={tools}
            submissions={submissions}
            onDelete={(id) => save(submissions.filter((item) => item.id !== id))}
            onImport={(items) => {
              const incoming = parseSubmissionExport(items);
              const ids = new Set(submissions.map((item) => item.id));
              save([...submissions, ...incoming.filter((item) => !ids.has(item.id))]);
            }}
            onVote={voteFor}
            votedIds={votedIds}
            onClear={() => save([])}
          />
        )}
      </main>
      <footer className="footer">
        <span>opensourceit is a working index, not a foundation.</span>
        <span>Check the current license before relying on a listing.</span>
      </footer>
    </>
  );
}
