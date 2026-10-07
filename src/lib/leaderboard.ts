import type { Alternative, Tool } from "../types";
import type { Submission } from "./submissions";
import { starInfo } from "./stars";

export type RankedAlternative = {
  alternative: Alternative;
  stars: number;
  repo: string;
  forge: string;
  toolIds: string[];
  toolNames: string[];
};

export function buildAlternativeLeaderboard(tools: Tool[]): RankedAlternative[] {
  const byHref = new Map<string, RankedAlternative>();

  for (const tool of tools) {
    for (const alternative of tool.alternatives) {
      const info = starInfo(alternative.href);
      if (!info) continue;
      const existing = byHref.get(alternative.href);
      if (existing) {
        if (!existing.toolIds.includes(tool.id)) existing.toolIds.push(tool.id);
        if (!existing.toolNames.includes(tool.name)) existing.toolNames.push(tool.name);
        continue;
      }
      byHref.set(alternative.href, {
        alternative,
        stars: info.stars,
        repo: info.repo,
        forge: info.forge,
        toolIds: [tool.id],
        toolNames: [tool.name],
      });
    }
  }

  return [...byHref.values()].sort((a, b) => {
    if (a.stars !== b.stars) return b.stars - a.stars;
    return a.alternative.name.localeCompare(b.alternative.name);
  });
}

const STATUS_WEIGHT: Record<Submission["status"], number> = {
  production: 3,
  beta: 2,
  prototype: 1,
};

export function rankSubmissions(items: Submission[]): Submission[] {
  return [...items].sort((a, b) => {
    const votes = (b.votes ?? 0) - (a.votes ?? 0);
    if (votes !== 0) return votes;
    const maturity = STATUS_WEIGHT[b.status] - STATUS_WEIGHT[a.status];
    if (maturity !== 0) return maturity;
    if (b.features.length !== a.features.length) return b.features.length - a.features.length;
    return b.createdAt.localeCompare(a.createdAt);
  });
}

