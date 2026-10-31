Icon is a small line icon of one piece of water-system equipment, a document or a task, painted with a colour token, that lets a list row be recognised before it is read.

- Style: the brand book's interface icons, **Lucide** at a 1.5 px stroke with round caps and joins, 24 px, `ink-muted`. Icons support labels; they never replace them.
- Markup: `<span class="aq-icon" aria-hidden="true" style="-webkit-mask-image:url(assets/icons/still.svg);mask-image:url(assets/icons/still.svg)"></span>`. On the site, `wIcon(name)` in `assets/src/core.js` writes it. The file goes in as an inline `mask-image` so its path resolves against the page.
- Size: `space-6` (24 px) on desktop and phones. Colour: `ink-muted`; `aq-icon--ink` for emphasis, `--flow` only as a hover or water-path marker, `--on-navy` only inside a navy brand band. Inside a linked row it turns `flow` on hover with the title. One file works on every ground because the colour comes from the token.
- The set (24) in `assets/icons/`, listed as `ICONS` in `core.js`; an unknown name renders nothing:
  - From Lucide (lucide-static 0.460.0, ISC licence in `assets/icons/LICENSE-lucide.txt`): `calendar`, `wrench`, `magnifier` (Lucide `search`), `gauge`, `stamp`, `binder` (`notebook-text`), `pid` (`workflow`), `toc` (`flask-conical`).
  - Drawn for Aquemi on the Lucide grid (no library has them): `softener`, `carbon-filter`, `ro-membrane`, `edi`, `still`, `pure-steam`, `tank`, `loop`, `valve`, `heat-exchanger`, `uv`, `ozone`, `conductivity`, `pump`, `weld`, `borescope`.
- Files: plain SVG, 24 × 24 viewBox, `fill="none"`, `stroke="currentColor"`, `stroke-width="1.5"`, round caps and joins, and a non-scaling stroke so the line stays 1.5 px when a component draws the icon larger. Keep 2 px of padding inside the 24 px box, as Lucide does.
- To add one: take it from Lucide (same pinned version) when it exists, keeping its licence comment and setting the stroke to 1.5; otherwise draw it on the same grid with the same attributes. Never ship a raster or a filled icon.
- Always decoration: `aria-hidden="true"`; the row title next to it names the thing.

## In list rows

- Rows of the shared list grammar (blocks `grid` and `options`) take an item field `"icon": "<name>"`. The icon replaces the mono index in the row's left column. Rows without `icon` render exactly as before.
- A `grid` row with an icon drops the linked page's drawing at the row end.
- Block field `"icons": "auto"` picks icons from item titles that name one piece of equipment (softener, carbon filter, RO, EDI, still or distillation, pure steam, storage tank, distribution loop, heat exchanger, UV, ozone, conductivity, TOC, pump, orbital weld, borescope, P&ID). It is opt-in per block and applies only when every row gets one; an explicit `icon` always wins.
- Give every row in a list an icon or none: a half-iconed list reads as broken.
- Steps (ProcessSteps) carry no icons: in a sequence the number is the information.

## When not to use it

- Not for buttons or navigation glyphs: those are single-path SVGs in their components.
- Not as a picture of a system: use Illustration (the large isometric drawings in `assets/illustrations/`).
- Not on rows whose items are not equipment, a document or a task (reasons, questions, roles): keep the number.
