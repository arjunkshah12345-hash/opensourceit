import { useMemo, useState } from "react";
import type { Tool } from "../types";
import { go } from "../lib/route";
import { FeatureList } from "./FeatureList";

export function FeaturesView({ tools, toolId }: { tools: Tool[]; toolId?: string }) {
  const [query, setQuery] = useState("");
  const [listQuery, setListQuery] = useState("");
  const selected = tools.find((tool) => tool.id === toolId) ?? tools[0];
  const listed = useMemo(() => {
    const needle = listQuery.trim().toLowerCase();
    if (!needle) return tools;
    return tools.filter((tool) => `${tool.name} ${tool.vendor} ${tool.category}`.toLowerCase().includes(needle));
  }, [listQuery, tools]);

  return (
    <>
      <section className="hero compact">
        <p className="eyebrow">Capability library</p>
        <h1 className="thesis">Every documented feature, plainly described.</h1>
        <p className="lede">Pick a product to inspect its working feature catalog, grouped by area.</p>
      </section>
      <div className="product-layout">
        <div>
          <label className="sr" htmlFor="product-filter">
            Filter products
          </label>
          <input
            id="product-filter"
            className="search"
            value={listQuery}
            onChange={(event) => setListQuery(event.target.value)}
            placeholder="Find a product"
          />
          <ul className="product-list">
            {listed.map((tool) => (
              <li key={tool.id}>
                <button
                  className="product-item"
                  aria-current={tool.id === selected.id}
                  onClick={() => go(`#/features/${tool.id}`)}
                >
                  <strong>{tool.name}</strong>
                  <span>
                    {tool.features.length} features · {tool.category}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="meta-line">
            {selected.vendor} · {selected.licenseName}
          </p>
          <h2 className="entry-title">{selected.name}</h2>
          <p className="lede">{selected.summary}</p>
          <dl className="scale">
            <div>
              <dt>Users</dt>
              <dd>{selected.users}</dd>
            </div>
            <div>
              <dt>Revenue</dt>
              <dd>{selected.revenue}</dd>
            </div>
          </dl>
          <p className="meta">{selected.scaleNote}</p>
          <label className="sr" htmlFor="feature-filter">
            Filter features
          </label>
          <input
            id="feature-filter"
            className="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={`Filter all ${selected.features.length} features of ${selected.name}`}
          />
          <FeatureList tool={selected} query={query} />
          <p>
            <a href={`#/tool/${selected.id}/links`}>Links</a>
            {" · "}
            <a href={`#/tool/${selected.id}/alternatives`}>Open alternatives</a>
          </p>
        </div>
      </div>
    </>
  );
}
