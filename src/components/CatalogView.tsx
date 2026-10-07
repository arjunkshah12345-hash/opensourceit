import { useMemo, useState } from "react";
import type { Submission } from "../lib/submissions";
import type { LicenseKind, Tool } from "../types";
import type { Route } from "../lib/route";
import { go } from "../lib/route";
import { ToolPanel } from "./ToolPanel";

export function CatalogView({
  tools,
  route,
  submissions,
}: {
  tools: Tool[];
  route: Extract<Route, { page: "catalog" }>;
  submissions: Submission[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [license, setLicense] = useState<"all" | LicenseKind>("all");
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(tools.map((tool) => tool.category)))],
    [tools],
  );
  const needle = query.trim().toLowerCase();
  const visible = tools.filter((tool) => {
    if (category !== "All" && tool.category !== category) return false;
    if (license !== "all" && tool.licenseKind !== license) return false;
    if (!needle) return true;
    const featureText = tool.features.map((feature) => `${feature.name} ${feature.description}`).join(" ");
    return `${tool.name} ${tool.vendor} ${tool.category} ${tool.summary} ${tool.users ?? ""} ${tool.revenue ?? ""} ${featureText}`
      .toLowerCase()
      .includes(needle);
  });

  const featureCount = tools.reduce((sum, tool) => sum + tool.features.length, 0);
  const altCount = tools.reduce((sum, tool) => sum + tool.alternatives.length, 0);

  return (
    <>
      <section className="hero">
        <p className="eyebrow">A maintained reference for software choices</p>
        <h1 className="thesis">Compare what software does.<br />Then choose who owns it.</h1>
        <p className="lede">
          Discover the software people use to work, build, and run a business, then find open alternatives.
        </p>
        <div className="hero-actions">
          <a className="button" href="#/leaderboard">See the leaderboard <span aria-hidden="true">→</span></a>
          <a className="button secondary" href="#/submit">List an alternative</a>
        </div>
        <dl className="catalog-stats">
          <div><dt>{tools.length}</dt><dd>products mapped</dd></div>
          <div><dt>{featureCount.toLocaleString()}</dt><dd>documented capabilities</dd></div>
          <div><dt>{altCount}</dt><dd>open alternatives</dd></div>
        </dl>
      </section>

      <div className="toolbar" id="catalog">
        <label className="sr" htmlFor="catalog-search">
          Search the index
        </label>
        <input
          id="catalog-search"
          className="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search tools or features…"
        />
        <select className="category-select" aria-label="Category" value={category} onChange={(event) => setCategory(event.target.value)}>
          {categories.map((item) => <option key={item} value={item}>{item === "All" ? "All categories" : item}</option>)}
        </select>
        {new Set(tools.map((tool) => tool.licenseKind)).size > 1 && <div className="filters" role="toolbar" aria-label="License kind">
          {(
            [
              ["all", "All licenses"],
              ["proprietary", "Proprietary"],
              ["source-available", "Source-available"],
            ] as const
          ).map(([id, label]) => (
            <button key={id} className="chip" aria-pressed={license === id} onClick={() => setLicense(id)}>
              {label}
            </button>
          ))}
        </div>}
      </div>

      <p className="meta-line">
        {visible.length} tools <span>Explore features and alternatives</span>
      </p>

      {visible.length === 0 && <p className="empty">Nothing in the index matches that filter.</p>}

      <div className="grid">
        {visible.map((tool) => {
          const open = route.toolId === tool.id;
          return (
            <article key={tool.id} id={`tool-${tool.id}`} className={open ? "tile open" : "tile"}>
              <button
                className="tile-hit"
                aria-expanded={open}
                aria-controls={open ? `panel-${tool.id}` : undefined}
                onClick={() => go(open ? "#/" : `#/tool/${tool.id}/overview`)}
              >
                <span className="entry-title">{tool.name}</span>
                <span className="meta">
                  {tool.category} · {tool.licenseKind === "proprietary" ? "Proprietary" : "Source-available"}
                </span>
                <span className="summary">{tool.summary}</span>
                <dl className="scale tile-scale">
                  <div>
                    <dt>Users</dt>
                    <dd>{tool.users}</dd>
                  </div>
                  <div>
                    <dt>Revenue</dt>
                    <dd>{tool.revenue}</dd>
                  </div>
                </dl>
              </button>
              <a className="count" href={`#/tool/${tool.id}/features`} aria-label={`Read ${tool.features.length} documented features for ${tool.name}`}>
                {tool.features.length} documented features <span aria-hidden="true">↗</span>
              </a>
              {open && <ToolPanel tool={tool} tab={route.tab} submissions={submissions} />}
            </article>
          );
        })}
      </div>

      <details className="method">
        <summary>How a tool gets on this list</summary>
        <p>
          A curated index of 300+ software products: workspaces, project trackers, team chat,
          app builders, developer tools, design software, infrastructure, and business systems.
          Think Notion, Jira, Slack, Linear, and Lovable.
        </p>
        <p>
          The catalog is intentionally broad, but not indiscriminate. Products are included when
          they represent a real workflow or a meaningful category, and each one is selected
          individually from the reviewed research archive.
        </p>
        <p>
          AI listings describe the application you use, not a claim that its underlying model
          can be reproduced. An open alternative may need a separately hosted model or paid API.
          Each listing explains what the alternative covers and where it falls short.
        </p>
        <p>
          Proprietary services and source-available products are labeled separately.
          Features come from product documentation and linked sources. Product access and
          capabilities can vary by plan. Check the current license before relying on a listing.
        </p>
        <p>
          Community submissions stay in this browser until a maintainer merges them.
          Listing an alternative does not mean it replaces every feature of the original.
        </p>
      </details>
    </>
  );
}
