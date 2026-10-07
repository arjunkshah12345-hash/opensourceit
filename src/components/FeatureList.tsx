import type { Tool } from "../types";
import { groupFeatures, slug } from "../lib/format";

export function FeatureList({ tool, query }: { tool: Tool; query: string }) {
  const needle = query.trim().toLowerCase();
  const features = needle
    ? tool.features.filter((feature) =>
        `${feature.area} ${feature.name} ${feature.description}`.toLowerCase().includes(needle),
      )
    : tool.features;
  const groups = groupFeatures(features);

  if (features.length === 0) {
    return <p className="empty">No features match that filter.</p>;
  }

  return (
    <div>
      <p className="meta-line">
        {features.length} of {tool.features.length} documented features
      </p>
      {!needle && (
        <div className="jump">
          {groups.map((group) => (
            <a key={group.area} href={`#area-${tool.id}-${slug(group.area)}`}>
              {group.area}
            </a>
          ))}
        </div>
      )}
      {groups.map((group) => (
        <section key={group.area} id={`area-${tool.id}-${slug(group.area)}`} className="feature-group">
          <h3>{group.area}</h3>
          {group.items.map((feature) => (
            <article key={feature.name} className="feature">
              <h4>{feature.name}</h4>
              <p>{feature.description}</p>
            </article>
          ))}
        </section>
      ))}
    </div>
  );
}
