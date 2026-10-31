DocList names the documents delivered with a system as a grid of numbered tiles, each led by the short code a validation team files it under.

## Markup

```html
<ol class="aq-docs">
  <li>
    <span class="aq-docs__code" aria-hidden="true"><span class="aq-docs__n">01</span><span class="aq-docs__sep"> / </span>FS</span>
    <span class="aq-docs__name">Functional specification</span>
  </li>
  …
</ol>
```

- An ordered list, one `<li>` per document. The visible number and code are `aria-hidden`; screen readers get the list numbering and the full name.
- `aq-docs__name` holds the document name as QA would write it: "Material certificates (EN 10204 3.1)", "FAT and SAT protocols and reports". An optional `<span class="aq-docs__d">` inside it adds one line of detail.
- Add `aq-docs--plain` to the `<ol>` and leave out the separator and code when the items are not documents with recognised codes (a proposal checklist, for example). Tiles then show only the number.
- Place it full width under the standard section head on the default `surface` (the page allows one tinted band mid-page, and it is not this list). The site renderer (`assets/src/blocks/docs.js`, block type `docs`) builds all of this from `{h, items}`.

## Layout

- **Desktop:** three tiles per row on a 6-column grid, separated by `line` hairlines. Rows that would end short widen to two tiles: 10 items read 3, 3, 2, 2; 8 items read 3, 3, 2. Works for 4 to 12 items.
- **Phone** (container 860 px and below): a compact list, "01  FS  Functional specification", with the index and codes in aligned columns and a hairline between rows.

## Codes

The renderer derives each code from the document name with a lookup of common validation documents (FS, URS, DQ, RA, P&ID, GA, ISO, MAT, WLD, WPS & PQR, SRF, PAS, CAL, FAT & SAT, IQ & OQ, PQ, O&M, SOP, SPR, TM, DEV, CC …). A name the lookup misses uses the acronym it gives in brackets, else the initials of its first three words. If fewer than half the items match the lookup, the list renders plain, numbers only. Add new document types to `DOC_CODES` in the renderer rather than writing codes into page copy.

## Token rules

- Tiles: `surface` with `line` hairlines (the 1 px grid gap), spacing `space-*` only. The number is the shared `.aq-index`; the code is Geist Mono 20/24 in `ink` (14/22 on phones).
- Accent: a 2 px `flow` bar at the top of each tile, `space-12` wide. It is the section's only colour.
- Code: Geist Mono light (`--font-mono`), 28/34 px desktop, 15/22 px phone, `ink`; number and separator in `ink-subtle`.
- Name: Geist (`--font-sans`) 15/22 px in `ink`, sentence case. Detail in `ink-muted`.

## When not to use it

- Not for test results or specifications with values: use SpecTable.
- Not for steps in sequence: use ProcessSteps; the numbers here are an index, not an order of work.
- Not for fewer than four items; write them in a sentence instead. Above twelve, split the package into groups with their own headings.
