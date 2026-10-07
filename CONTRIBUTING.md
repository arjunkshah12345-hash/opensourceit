# Contributing to opensourceit

Thanks for helping make the index more useful and more trustworthy.

## Development

```bash
npm ci
npm run dev
```

Before opening a pull request, run both checks:

```bash
npm run check
npm run build
```

## Adding or correcting catalog data

For catalog entries, edit the appropriate `scripts/catalog*.txt` file. Each block follows this shape:

```text
@@ product-id | Product name | Vendor | Category
summary: A concise description of the product and the job it does.
users: Not disclosed
revenue: Not disclosed
scale: Explain the source or why a product-specific figure is unavailable.
reach: Who uses it and where it fits in a workflow.
license: Proprietary
note: Explain what is and is not open, including important exceptions.
gap: The material limitation a replacement should be expected to have.
url: https://example.com
docs: https://docs.example.com
alt: Alternative | https://example.com/alternative | AGPL-3.0 | Why it is a plausible replacement.
- Area | Capability | Describe the capability in a concrete, testable sentence.
```

Keep these standards:

- Link the product and documentation to primary sources.
- Name the period for every user or revenue figure.
- Distinguish company totals from product-specific figures.
- Use `Not disclosed` when a number cannot be supported.
- Describe meaningful capabilities, not marketing adjectives.
- Explain license scope and source-available exceptions precisely.
- Include the practical gap; an alternative is not a clone by default.
- Do not add placeholder text or duplicate feature names.

After editing the text inputs, regenerate the typed data:

```bash
python3 scripts/gen_bulk.py
npm run check
```

## UI changes

Keep the interface responsive, keyboard-usable, and accessible. Community data is intentionally browser-local, so changes to the submission model should include import/export compatibility and validation for older or malformed local data.

## Pull requests

Use a focused title and explain:

1. what changed;
2. which sources or methodology support the change; and
3. how you verified it.

Avoid bundling unrelated catalog additions with large visual refactors. Screenshots or a short reproduction path are useful for interaction changes.
