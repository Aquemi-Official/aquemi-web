StandardsGrid lists the standards Aquemi designs to as numbered cards joined by thin connector lines, as a section of its own under a large headline.

## Markup

```html
<ol class="aq-standards-grid">
  <li class="aq-standards-grid__item">
    <a class="aq-standards-grid__card" href="#compliance" data-wp="compliance">
      <span class="aq-standards-grid__code">USP &lt;645&gt;</span>
      <span class="aq-standards-grid__name">Water conductivity</span>
    </a>
  </li>
  <!-- code only: no name, so the code takes the large line -->
  <li class="aq-standards-grid__item aq-standards-grid__item--code">
    <a class="aq-standards-grid__card" href="#compliance" data-wp="compliance"><span class="aq-standards-grid__code">ASME BPE</span></a>
  </li>
</ol>
```

- A semantic ordered list. CSS writes the number (`01`, the shared index style) before the code; screen readers skip it where the browser supports alt text on `content`.
- `aq-standards-grid__card` is an `<a>` to the Compliance page when that page exists, otherwise a `<div>`. The whole card is the hit area.
- With a name: the code is the small mono line beside the number and the name is the large line below. Without one: add `aq-standards-grid__item--code` and the code itself takes the large line.
- Put it in a full-width section under the standard section head (the site uses `aq-band--sunken`; it counts as the page's one tinted band).

## On the site

Block type `tags` (`assets/src/blocks/tags.js`). `items` is a list of strings (the standard's code, e.g. `"USP <645>"`) or objects `{ "code": "USP <645>", "name": "Water conductivity" }`; `name` is optional and only shown when supplied. Optional `body` renders as `aq-small` below the grid.

## Layout

- **Desktop:** three cards to a row on a `line` dot grid. A horizontal connector joins each card to the next in its row at number height; a vertical connector drops from each card into the one below.
- **Phone** (`@container (max-width: 860px)`): compact hairline rows, index then code, two to a row when items are codes only and one to a row when they carry a plain-language name. No frame, cards, ruler or connectors.

## Token rules

- Cards: `surface-raised` on `surface`, 1 px `line-strong` border, `radius-0`. Connectors, ruler and ticks in `line-strong`; dot grid and frame in `line`.
- Number in `font-mono` 12 px `ink-subtle`; code line in `font-mono` 12 px `ink`; name (or code-only code) in `font-sans` 400 at 22 px (20 px on phones).
- Hover: `flow` border and a 2 px `flow` top edge, number turns `flow`. Focus: 2 px `focus` ring with 2 px offset.

## Writing

- Use the standard's own short name exactly as published (see StandardTag). Only list standards the systems genuinely meet.
- A name is a plain description of what the standard covers, in sentence case (`Total organic carbon`, not `TOTAL ORGANIC CARBON`). Leave it out rather than guess.
- Six to twelve items. Fewer than four reads better as StandardTag pills in the page body.

## When not to use it

- For a standard or two beside a system, a hero or a card, use StandardTag (`aq-tags`) inline.
- Not for clauses or test limits; use SpecTable.

Origin: concept M in `design-system/inspiration/`, generated in Gemini and rebuilt with Aquemi tokens.
