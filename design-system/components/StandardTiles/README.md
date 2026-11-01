StandardTiles sets a short grid of linked items as a Swiss row of tall tiles where each item's standard or control tag is the hero, large in Geist Mono Light, with the item's icon, title and line under it.

- On the site: a `grid` block with `"look": "standard-tiles"` (renderer `assets/src/blocks/look-standard-tiles.js`); used on ind-meddevice ("Systems for device plants"). Origin: no concept of its own (quota); adapted from sys-pw.2 (Swiss tiles, oversized values) and home's IndustryFeed (the standard set huge as the evidence).
- Markup: `ol.aq-standard-tiles` (1 px `line-strong` gutters) of `li.__tile` (`.is-lead` navy) → `a.__in` (or `div`) → `span.__top` (aria-hidden "01 / 04", `__ic` icon 64 px), `span.__tag` (Geist Mono Light 40/44), `div.__body` (`h3.__t`, `span.__d`), `span.__arrow`.
- Fields: `h`, `intro`, `items` [{t, d, icon, tag, link}].
- Hover/focus: the tile tints `flow-tint`, the tag turns `flow`, the icon rises, the arrow runs out (the lead tile lightens instead).
- Mid widths two by two; phones one column.

## Motion

Tiles wipe down into the row in turn, the tag decodes to its own text (ScrambleText), the icon prints up, title and line rise. Once on scroll-in, under 3 s; nothing under reduced motion.
