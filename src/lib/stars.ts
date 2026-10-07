import type { Alternative } from "../types";
import { STAR_SNAPSHOT, starsByHref, type StarCount } from "../data/stars";

export { STAR_SNAPSHOT };

export function starInfo(href: string): StarCount | undefined {
  const direct = starsByHref[href];
  if (direct) return direct;
  const trimmed = href.replace(/\/+$/, "");
  return starsByHref[trimmed] ?? starsByHref[`${trimmed}/`];
}

export function rankAlternatives<T extends Pick<Alternative, "href">>(items: T[]): T[] {
  return items
    .map((item, index) => ({ item, index, stars: starInfo(item.href)?.stars }))
    .sort((a, b) => {
      if (a.stars == null && b.stars == null) return a.index - b.index;
      if (a.stars == null) return 1;
      if (b.stars == null) return -1;
      if (a.stars !== b.stars) return b.stars - a.stars;
      return a.index - b.index;
    })
    .map((row) => row.item);
}

export function formatStarCount(count: number): string {
  return count.toLocaleString("en-US");
}

export function starLine(href: string): string {
  const info = starInfo(href);
  if (!info) return "Stars not counted";
  return `${formatStarCount(info.stars)} stars on ${info.repo} · ${info.forge} · ${STAR_SNAPSHOT}`;
}
