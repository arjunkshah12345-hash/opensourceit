import { useState } from "react";
import type { Submission } from "../lib/submissions";
import type { Alternative, Tab, Tool } from "../types";
import { host } from "../lib/format";
import { go } from "../lib/route";
import { rankAlternatives, STAR_SNAPSHOT, starInfo, starLine } from "../lib/stars";
import { FeatureList } from "./FeatureList";

const TABS: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "links", label: "Links" },
  { id: "alternatives", label: "Alternatives" },
];

const MAX_ALTERNATIVES = 3;

function AlternativeRow({ alternative, rank }: { alternative: Alternative; rank: number }) {
  const stars = starInfo(alternative.href);
  return (
    <article className="alt">
      <div className="alt-heading">
        <span className="alt-rank" aria-label={`Rank ${rank}`}>
          {String(rank).padStart(2, "0")}
        </span>
        <div>
          <p className="badge">{alternative.license}</p>
          <h3>
            <a href={alternative.href} target="_blank" rel="noreferrer">
              {alternative.name}
            </a>
          </h3>
        </div>
      </div>
      <p>{alternative.note}</p>
      <p className="meta alt-stars">{stars ? starLine(alternative.href) : "Repository stars not available"}</p>
    </article>
  );
}

function Alternatives({ tool, community }: { tool: Tool; community: Submission[] }) {
  const ranked = rankAlternatives(tool.alternatives).slice(0, MAX_ALTERNATIVES);

  return (
    <div role="tabpanel">
      <div className="alternatives-intro">
        <p>
          A short list of open-source answers, ranked by public repository stars. Star counts are a popularity
          signal, not a quality verdict. Snapshot: {STAR_SNAPSHOT}.
        </p>
        <a className="button" href={`#/submit/${tool.id}`}>
          Submit your project
        </a>
      </div>

      <div className="alternatives-list">
        {ranked.map((alternative, index) => (
          <AlternativeRow key={alternative.href} alternative={alternative} rank={index + 1} />
        ))}
      </div>

      {community.length > 0 && (
        <section className="community-alternatives" aria-labelledby={`community-${tool.id}`}>
          <p className="area-label" id={`community-${tool.id}`}>
            Submitted in this browser
          </p>
          {community.map((item) => (
            <article className="alt" key={item.id}>
              <p className="badge">
                {item.license} · {item.status}
              </p>
              <h3>
                <a href={item.website} target="_blank" rel="noreferrer">
                  {item.project}
                </a>
              </h3>
              <p>{item.summary}</p>
              <p className="meta">
                Submitted by {item.maker} · {item.votes ?? 0} community votes · <a href={item.repo} target="_blank" rel="noreferrer">Source repository</a>
              </p>
            </article>
          ))}
        </section>
      )}

      <p className="alternative-cta">
        Building an open-source answer to {tool.name}? <a href={`#/submit/${tool.id}`}>Add it to the index.</a>
      </p>
    </div>
  );
}

export function ToolPanel({
  tool,
  tab,
  submissions,
}: {
  tool: Tool;
  tab: Tab;
  submissions: Submission[];
}) {
  const [featureQuery, setFeatureQuery] = useState("");
  const community = submissions.filter((item) => item.replacesId === tool.id);

  return (
    <div className="panel" id={`panel-${tool.id}`}>
      <div className="tabs" role="tablist" aria-label={`${tool.name} details`}>
        {TABS.map((item) => (
          <button
            key={item.id}
            className="tab"
            role="tab"
            id={`tab-${tool.id}-${item.id}`}
            aria-selected={tab === item.id}
            aria-controls={`panel-${tool.id}`}
            onClick={() => go(`#/tool/${tool.id}/${item.id}`)}
          >
            {item.label}
            {item.id === "features" ? ` (${tool.features.length})` : ""}
          </button>
        ))}
      </div>

      {tab === "overview" && (
        <div className="prose" role="tabpanel">
          <p>
            <span className={`stamp ${tool.licenseKind}`}>
              {tool.licenseKind === "proprietary" ? "Proprietary" : "Source-available"}
            </span>
            {tool.licenseName}
          </p>
          <p>{tool.summary}</p>
          <p className="area-label">Evidence at a glance</p>
          <dl className="scale scale-evidence">
            <div>
              <dt>Users</dt>
              <dd>{tool.users}</dd>
            </div>
            <div>
              <dt>Revenue</dt>
              <dd>{tool.revenue}</dd>
            </div>
          </dl>
          <p className="meta">{tool.scaleNote}</p>
          <p>{tool.reach}</p>
          <div className="callout">
            <p>{tool.licenseNote}</p>
          </div>
          <div className="callout moss">
            <p>{tool.gap}</p>
          </div>
          <p>
            <a href={`#/tool/${tool.id}/features`}>Open the full feature list</a>
            {" · "}
            <a href={`#/features/${tool.id}`}>Feature page</a>
            {" · "}
            <a href={`#/tool/${tool.id}/links`}>All links</a>
          </p>
        </div>
      )}

      {tab === "features" && (
        <div role="tabpanel">
          <p className="prose">
            Major capabilities of {tool.name}, with a description of what each one actually does. This is a
            working catalog of the product people use, not a claim that a suite this large has no further screens.
          </p>
          <label className="sr" htmlFor={`filter-${tool.id}`}>
            Filter features of {tool.name}
          </label>
          <input
            id={`filter-${tool.id}`}
            className="search"
            value={featureQuery}
            onChange={(event) => setFeatureQuery(event.target.value)}
            placeholder="Filter features by name or description"
          />
          <FeatureList tool={tool} query={featureQuery} />
        </div>
      )}

      {tab === "links" && (
        <ul className="link-list" role="tabpanel">
          {tool.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                <span>{link.label}</span>
                <span className="host">{host(link.href)}</span>
              </a>
            </li>
          ))}
        </ul>
      )}

      {tab === "alternatives" && (
        <Alternatives tool={tool} community={community} />
      )}
    </div>
  );
}
