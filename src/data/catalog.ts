import type { Tool } from "../types";
import { businessTools } from "./business";
import { collabTools } from "./collab";
import { designTools } from "./design";
import { devTools } from "./dev";
import { officeTools } from "./office";
import { platformTools } from "./platforms";
import { worldTools } from "./world";
import { bulkTools } from "./bulk";
import { directoryEntries } from "./scope";
import { aiTools } from "./ai";

/** Figures a company reported. A quarter is not rewritten as a year. */
const reported: Record<string, Pick<Tool, "users" | "revenue" | "scaleNote">> = {
  snowflake: {
    users: "790 Forbes Global 2000 customers (31 Jan 2026)",
    revenue: "FY2026 product revenue $4.47B",
    scaleNote:
      "Snowflake FY2026 results, year ended 31 January 2026. Product revenue was $4.47 billion. The release counts Forbes Global 2000 customers, not a single consumer-user total.",
  },
  datadog: {
    users: "About 33,400 customers (end of Q2 2026)",
    revenue: "Q2 2026 revenue $1.12B",
    scaleNote: "Datadog’s Q2 2026 quarter, reported in 2026 earnings coverage. This is one quarter, not a full-year total.",
  },
  servicenow: {
    users: "Not disclosed as a single user total",
    revenue: "Q2 2026 revenue $3.99B",
    scaleNote: "ServiceNow Q2 2026 total revenue was $3.987 billion. The release does not give one end-user count.",
  },
};

function finish(tool: Tool): Tool {
  const scale = reported[tool.id];
  return {
    ...tool,
    users: scale?.users || tool.users || "Not disclosed",
    revenue: scale?.revenue || tool.revenue || "Not disclosed",
    scaleNote: scale?.scaleNote || tool.scaleNote || "No audited user or revenue figure is cited for this product.",
  };
}

/** Research archive; only explicitly curated entries are exposed in the app. */
export const allTools = [
  ...platformTools,
  ...officeTools,
  ...collabTools,
  ...designTools,
  ...devTools,
  ...businessTools,
  ...worldTools,
  ...bulkTools,
  ...aiTools,
].map(finish);

/** Only curated products appear in browsing, features, and submission pickers. */
const featured = ["notion", "jira", "slack", "linear", "lovable", "grok", "muse", "instinct"];
const orderedEntries = [...directoryEntries].sort((a, b) => {
  const rank = (id: string) => featured.includes(id) ? featured.indexOf(id) : featured.length;
  return rank(a.id) - rank(b.id);
});
const byId = new Map(allTools.map((tool) => [tool.id, tool]));
export const tools: Tool[] = orderedEntries.map(({ id, category }) => {
  const tool = byId.get(id);
  if (!tool) throw new Error(`Curated product is missing research: ${id}`);
  return { ...tool, category };
});
