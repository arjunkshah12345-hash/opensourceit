import { allTools, tools } from "../src/data/catalog";
import { directoryEntries } from "../src/data/scope";

const ids = new Set<string>();
const errors: string[] = [];

for (const tool of tools) {
  if (ids.has(tool.id)) errors.push(`duplicate id ${tool.id}`);
  ids.add(tool.id);
  if (!/^[a-z0-9-]+$/.test(tool.id)) errors.push(`bad id ${tool.id}`);
  if (tool.features.length < 4) errors.push(`${tool.id} has ${tool.features.length} features`);
  const names = new Set<string>();
  for (const feature of tool.features) {
    if (feature.description.length < 40) {
      errors.push(`${tool.id} / ${feature.name} description is ${feature.description.length} chars`);
    }
    if (names.has(feature.name)) errors.push(`${tool.id} duplicate feature ${feature.name}`);
    names.add(feature.name);
    if (/\b(lorem ipsum|\btodo\b|\btbd\b)/i.test(`${feature.name} ${feature.description}`)) {
      errors.push(`${tool.id} placeholder in ${feature.name}`);
    }
  }
  if (tool.links.length < 2) errors.push(`${tool.id} needs links`);
  for (const link of [...tool.links, ...tool.alternatives.map((alt) => ({ href: alt.href }))]) {
    if (!link.href.startsWith("https://")) errors.push(`${tool.id} bad link ${link.href}`);
  }
  if (tool.alternatives.length < 1) errors.push(`${tool.id} needs an alternative`);
  if (tool.alternatives.length > 3) errors.push(`${tool.id} has too many alternatives (${tool.alternatives.length}; max 3)`);
  if (tool.gap.length < 40) errors.push(`${tool.id} gap is thin`);
  if (tool.summary.length < 40) errors.push(`${tool.id} summary is thin`);
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

const features = tools.reduce((sum, tool) => sum + tool.features.length, 0);
const alternatives = tools.reduce((sum, tool) => sum + tool.alternatives.length, 0);
// The directory is deliberate, and must stay large enough to be useful.
const known = new Set(allTools.map((tool) => tool.id));
for (const { id } of directoryEntries) {
  if (!known.has(id)) errors.push(`curated product is unknown: ${id}`);
}
for (const id of ["notion", "jira", "slack", "linear", "lovable", "grok", "muse", "instinct"]) {
  if (!ids.has(id)) errors.push(`missing core SaaS/AI product: ${id}`);
}
if (tools.length < 300) errors.push(`directory has ${tools.length} tools; expected at least 300`);
if (tools.length !== directoryEntries.length) errors.push("directory does not match curation");
if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(
  `${tools.length} tools, ${features} features, ${alternatives} alternatives ` +
    `(${allTools.length - tools.length} research entries outside the directory)`,
);

// Categories that survive with a single entry read as leftovers in the filter.
const byCategory = new Map<string, number>();
for (const tool of tools) byCategory.set(tool.category, (byCategory.get(tool.category) ?? 0) + 1);
const thin = [...byCategory].filter(([, n]) => n < 2).map(([name]) => name);
if (thin.length > 0) console.warn(`thin categories: ${thin.join(", ")}`);
console.log(`${byCategory.size} categories`);
