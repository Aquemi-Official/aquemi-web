LinkGrid lists system families, services or related pages in a hairline grid: three columns on desktop, one on phones.

- Markup: `<div class="aq-linkgrid">` with one `<a>` per item (or `<div>` when it does not link). Each item holds `<span class="aq-h3">` name, `<span class="aq-small">` one-line description, and optionally `<span class="aq-tags"><span class="aq-tag">` with the governing standard.
- Hairlines separate items. Never turn items into cards with fills, shadows or rounded corners.
- Keep descriptions to one sentence, with a number or standard in it where possible.
- Linked items show a Flow arrow after the name, which nudges right on hover; items that do not link show none, so the arrow tells readers what is clickable.
- The consumer provides the items. Prefer rows of three. If one item is left on the last row, it spans the full width (description capped at text width) instead of sitting alone in a column.
