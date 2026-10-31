Icon is a small line-art spot of one piece of water-system equipment or one document, painted with a colour token, that lets a list row be recognised before it is read.

- Markup: `<span class="aq-icon" aria-hidden="true" style="-webkit-mask-image:url(assets/icons/still.png);mask-image:url(assets/icons/still.png)"></span>`. On the site, `wIcon(name)` in `assets/src/core.js` writes it. The file goes in as an inline `mask-image` so its path resolves against the page.
- Size: `space-8` (32 px) on desktop, 28 px (`space-6` + `space-1`) on phones; smaller and the drawings close up. Colour: `ink-muted`; `aq-icon--ink`, `--flow` or `--on-navy` for other grounds. Inside a linked row it turns `flow` on hover with the title. One file works on navy and on light sheets because the colour comes from the token.
- The set (24): `softener`, `carbon-filter`, `ro-membrane`, `edi`, `still`, `pure-steam`, `tank`, `loop`, `valve`, `heat-exchanger`, `uv`, `ozone`, `conductivity`, `toc`, `pump`, `weld`, `borescope`, `gauge`, `pid`, `binder`, `stamp`, `calendar`, `wrench`, `magnifier`. The list is `ICONS` in `core.js`; an unknown name renders nothing.
- Files: square transparent PNG masks (lines as alpha, no colour) in `assets/icons/`, cut from the specimen sheet `design-system/inspiration/gemini/57-icons-row-spots.png` with `python tools/icon_sheet.py <sheet> assets/icons <names in sheet order>` (drops the captions, thickens lines one pixel so they hold at 24 px). To add one, draw it on a sheet in the same style and run the tool; never ship a coloured raster.
- Always decoration: `aria-hidden="true"`, the row title next to it names the thing.

## In list rows

- Rows of the shared list grammar (blocks `grid`, `steps`, `options`) take an item field `"icon": "<name>"`. The icon replaces the mono index in the row's left column; in `steps` the number stays beside it (order matters there) and the column widens. Rows without `icon` render exactly as before.
- A `grid` row with an icon drops the linked page's drawing at the row end: at 48 px the drawing reads as texture and is hidden on phones, while the icon reads as the thing at both widths.
- Block field `"icons": "auto"` picks icons from item titles that name one piece of equipment (softener, carbon filter, RO, EDI, still or distillation, pure steam, storage tank, distribution loop, heat exchanger, UV, ozone, conductivity, TOC, pump, orbital weld, borescope, P&ID). It is opt-in per block and applies only when every row gets an icon; an explicit `icon` always wins. Prefer explicit icons for stages and documents, where a keyword says too little.
- Give every row in a list an icon or none: a half-iconed list reads as broken.

## When not to use it

- Not for buttons or navigation glyphs: those are single-path SVGs in their components.
- Not as a picture of a system: use Illustration (the large isometric drawings in `assets/illustrations/`).
- Not on rows whose items are not equipment, a stage or a document (reasons, questions, roles): keep the number.
