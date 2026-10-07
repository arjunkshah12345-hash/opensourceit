# opensourceit

opensourceit is an evidence-first directory for comparing the SaaS and AI products people use with open-source and source-available paths that can replace them.

It is built for the moment after “what does this tool do?”: compare capability coverage, licensing, reach, disclosed scale, practical gaps, and the projects worth evaluating next.

## The current index

The checked-in data snapshot contains:

- 332 curated products across 26 categories
- 2,911 documented product capabilities
- 399 open alternatives
- company-reported users and revenue where a credible figure is available
- source notes and explicit “not disclosed” labels when it is not

Run `npm run check` to verify those counts and the quality invariants behind them. The catalog is deliberately static and reviewable in git; this makes changes auditable and keeps the site fast.

## Product surfaces

- **Index** — search and scan the catalog, then open a detail panel for license context, scale notes, feature coverage, links, and alternatives.
- **Features** — browse the capability vocabulary across products rather than starting with a vendor name.
- **Leaderboard** — rank repository-backed alternatives by a checked-in GitHub/forge star snapshot and rank community submissions by local votes, maturity, and feature depth.
- **Submit** — add a project with a quality checklist, structured feature parsing, validation feedback, and import/export support.
- **Community** — review, vote on, import, or remove submissions in the current browser.

## Important behavior

This release has no backend or account system. Submissions and votes are stored in `localStorage` in the browser that created them. Import/export makes the workflow portable, but it is not a shared moderation queue yet. That limitation is intentional and documented rather than hidden behind fake network behavior.

Repository stars are also a point-in-time data snapshot, not a live API read. Product users and revenue are labeled with their period and source context when reported; a company total is never presented as a product-specific number without saying so. The directory is a research aid, not legal, security, procurement, or financial advice. Check the linked license and current product documentation before making a decision.

## Run it locally

Requires Node.js 20 or newer.

```bash
npm ci
npm run dev
```

Useful verification commands:

```bash
npm run check   # validate catalog shape, quality, counts, and curation
npm run build   # type-check and create the production bundle
npm run preview # serve the production bundle locally
```

## Updating the catalog

The editable research inputs live in `scripts/catalog*.txt`. The generator reads those files and emits `src/data/bulk.ts`:

```bash
python3 scripts/gen_bulk.py
npm run check
npm run build
```

The curated set and ordering are maintained in `src/data/scope.ts`. Repository-star snapshots live in `src/data/stars.ts`; update them deliberately and record the date/source in the change description. Keep product-specific claims tied to a primary source, and prefer “not disclosed” over an estimate that cannot be defended.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the data format, quality bar, and pull request checklist. Small, well-sourced additions are more useful here than bulk listings with thin descriptions.

## License

The application code and original catalog content are available under the [MIT License](LICENSE). Third-party product names, logos, linked repositories, and source material remain the property of their respective owners.
