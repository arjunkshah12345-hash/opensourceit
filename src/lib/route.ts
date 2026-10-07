import { useEffect, useState } from "react";
import type { Tab } from "../types";

export type Route =
  | { page: "catalog"; toolId?: string; tab: Tab }
  | { page: "features"; toolId?: string }
  | { page: "submit"; toolId?: string }
  | { page: "community" }
  | { page: "leaderboard" };

const TABS: Tab[] = ["overview", "features", "links", "alternatives"];

export function parseRoute(hash: string): Route {
  const parts = hash.replace(/^#/, "").split("/").filter(Boolean);
  if (parts[0] === "features") return { page: "features", toolId: parts[1] };
  if (parts[0] === "submit") return { page: "submit", toolId: parts[1] };
  if (parts[0] === "community") return { page: "community" };
  if (parts[0] === "leaderboard") return { page: "leaderboard" };
  if (parts[0] === "tool" && parts[1]) {
    const tab = TABS.includes(parts[2] as Tab) ? (parts[2] as Tab) : "overview";
    return { page: "catalog", toolId: parts[1], tab };
  }
  return { page: "catalog", tab: "overview" };
}

export function useRoute(): Route {
  const [route, setRoute] = useState(() => parseRoute(window.location.hash));
  useEffect(() => {
    const sync = () => setRoute(parseRoute(window.location.hash));
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  return route;
}

export function go(hash: string) {
  const next = hash.startsWith("#") ? hash : `#${hash}`;
  if (window.location.hash === next) return;
  window.location.hash = next;
}
