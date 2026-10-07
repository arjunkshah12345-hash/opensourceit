#!/usr/bin/env python3
"""Emit src/data/bulk.ts from the product tables in this file."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src" / "data" / "bulk.ts"

# (id, name, vendor, category, summary, users, revenue, scale_note, reach,
#  license_name, license_note, gap, product_url, docs_url,
#  alt_name, alt_url, alt_license, alt_note, features[(area, name, desc)*8])

def load():
    parts = []
    for path in sorted(Path(__file__).resolve().parent.glob("catalog*.txt")):
        parts.append(path.read_text())
    text = "\n".join(parts)
    items = []
    for raw in text.split("\n@@ "):
        block = raw.strip()
        if not block:
            continue
        if block.startswith("@@ "):
            block = block[3:]
        lines = [line.rstrip() for line in block.splitlines() if line.strip()]
        ident, name, vendor, category = [part.strip() for part in lines[0].split("|")]
        fields = {}
        features = []
        for line in lines[1:]:
            if line.startswith("- "):
                area, fname, desc = [part.strip() for part in line[2:].split("|")]
                features.append((area, fname, desc))
            else:
                key, value = line.split(": ", 1)
                fields[key] = value.strip()
        alt_name, alt_url, alt_license, alt_note = [part.strip() for part in fields["alt"].split("|")]
        items.append((
            ident, name, vendor, category, fields["summary"], fields["users"], fields["revenue"],
            fields["scale"], fields["reach"], fields["license"], fields["note"], fields["gap"],
            fields["url"], fields["docs"], alt_name, alt_url, alt_license, alt_note, features,
            fields.get("kind", ""),
        ))
    return items

def esc(value: str) -> str:
    return (
        value.replace("\\", "\\\\")
        .replace('"', '\\"')
        .replace("`", "\\`")
        .replace("${", "\\${")
    )

def main():
    items = load()
    ids = set()
    chunks = []
    for item in items:
        (
            id_, name, vendor, category, summary, users, revenue, scale_note, reach,
            license_name, license_note, gap, product_url, docs_url,
            alt_name, alt_url, alt_license, alt_note, features, kind,
        ) = item
        if id_ in ids:
            raise SystemExit(f"duplicate {id_}")
        ids.add(id_)
        if not id_.replace("-", "").isalnum() or id_ != id_.lower():
            raise SystemExit(f"bad id {id_}")
        for label, text in (
            ("summary", summary), ("reach", reach), ("gap", gap),
            ("license_note", license_note), ("scale_note", scale_note),
        ):
            if len(text) < 40:
                raise SystemExit(f"{id_} {label} is {len(text)}")
        if kind and kind not in ("proprietary", "source-available"):
            raise SystemExit(f"{id_} bad kind {kind}")
        if len(features) < 8:
            raise SystemExit(f"{id_} features {len(features)}")
        names = set()
        lines = []
        for area, fname, desc in features:
            if fname in names:
                raise SystemExit(f"{id_} dup feature {fname}")
            names.add(fname)
            if len(desc) < 40:
                raise SystemExit(f"{id_} {fname} desc {len(desc)}")
            if "|" in area + fname + desc:
                raise SystemExit(f"{id_} pipe in {fname}")
            lines.append(f"{area} | {fname} | {desc}")
        feature_block = "\n".join(lines)
        chunks.append(f"""  row({{
    id: "{esc(id_)}",
    name: "{esc(name)}",
    vendor: "{esc(vendor)}",
    category: "{esc(category)}",
    summary: "{esc(summary)}",
    users: "{esc(users)}",
    revenue: "{esc(revenue)}",
    scaleNote: "{esc(scale_note)}",
    reach: "{esc(reach)}",
    licenseName: "{esc(license_name)}",
    licenseNote: "{esc(license_note)}",{f'\n    licenseKind: "{esc(kind)}",' if kind else ''}
    gap: "{esc(gap)}",
    features: `{feature_block}`,
    links: [["Product", "{esc(product_url)}"], ["Docs", "{esc(docs_url)}"]],
    alts: [["{esc(alt_name)}", "{esc(alt_url)}", "{esc(alt_license)}", "{esc(alt_note)}"]],
  }}),""")
    body = "\n".join(chunks)
    OUT.write_text(
        "import type { Tool } from \"../types\";\n"
        "import { row } from \"./define\";\n\n"
        f"export const bulkTools: Tool[] = [\n{body}\n];\n"
    )
    print(f"wrote {len(items)} tools to {OUT}")

if __name__ == "__main__":
    main()
