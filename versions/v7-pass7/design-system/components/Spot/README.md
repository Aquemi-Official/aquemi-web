Spot is a larger line drawing of one piece of water-system equipment or one stage of the work (a still, an RO skid, a storage tank, a pump), painted with a colour token, that stands for a stop on a route or a zone of a plant map the way the concept drawings do.

- Markup: `<span class="aq-spot" aria-hidden="true" style="-webkit-mask-image:url(assets/spots/still.png);mask-image:url(assets/spots/still.png)"></span>`. On the site, `wSpot(name, size, cls)` in `assets/src/core.js` writes it (`size`: `"s"`, `"m"` or `"l"`); an unknown name renders nothing. The file goes in as an inline `mask-image` so its path resolves against the page.
- Sizes: `aq-spot--s` 96 px (`space-24`), default 128 px (`space-32`), `aq-spot--l` 160 px (`space-32` + `space-8`). Phones step down one size (160 to 128, 128 to 96); never below 96 px, where the drawings close up (use Icon there).
- Colour: `ink` by default, which reads on a cream plate (`wPlate(…, {light:true})`) and on a light sheet; `aq-spot--muted` (`ink-muted`), `aq-spot--flow`, `aq-spot--on-navy` (`on-navy-muted`) for the navy ground. One file works on every ground because the colour comes from the token.
- The set (9), `SPOTS` in `core.js`: `pretreatment`, `ro-skid`, `edi-stack`, `still`, `pure-steam-generator`, `storage-tank`, `pump`, `heat-exchanger`, `uv-ozone`.
- No fitting spot yet (a desk, a weld, a report): give the Icon name instead (`weld`, `binder`, `stamp`, `wrench`, `magnifier`, `calendar`, `gauge`, `conductivity`, `toc`, `pid`, `borescope` …). `wSpot` then draws that icon at 64 px (`space-16`; 56 px on phones) in the same place with `aq-spot--icon`, so a set mixing both still reads as one system. Replace it with a spot once one is drawn.
- Files: 256 px square transparent PNG masks (lines as alpha) in `assets/spots/`, cut from the sheet `design-system/inspiration/gemini/64-spots-generation.png` with `python tools/icon_sheet.py <sheet> assets/spots <names in sheet order>`. More spots (design desk, orbital welder, test bay, delivery truck, control panel, analyzer, filter service, signed report, binder) can be cut the same way from a new sheet drawn in the same isometric line style; add each name to `SPOTS`. Never ship a coloured raster.
- Used by: VisitRoute (item field `spot` on each stop), StandardsMap (zone field `spot`).
- Always decoration: `aria-hidden="true"`; the title beside it names the thing.

## When not to use it

- Not in list rows or at 32 px: use Icon.
- Not as a picture of a whole system or page: use Illustration (the large isometric drawings in `assets/illustrations/`).
- Not decoration for its own sake: one Spot per stop or zone, and every stop or zone of a set gets one or none.

## Motion

Motion: a standalone Spot wipes in bottom to top like a print (the motion core, `assets/src/motion/core.js`). Inside a ProcessDiagram station, an OptionModules box or the base skid, the owning component times that wipe itself (a station's vignette prints as the water reaches it).
