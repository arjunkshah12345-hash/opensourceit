export function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function host(href: string) {
  try {
    return new URL(href).host.replace(/^www\./, "");
  } catch {
    return href;
  }
}

export function groupFeatures<T extends { area: string }>(features: T[]) {
  const groups: { area: string; items: T[] }[] = [];
  for (const feature of features) {
    const last = groups[groups.length - 1];
    if (!last || last.area !== feature.area) groups.push({ area: feature.area, items: [feature] });
    else last.items.push(feature);
  }
  return groups;
}
