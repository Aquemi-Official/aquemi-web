SitePlates sets a table of sites (site, what happens here, address, contact and hours) as figure plates, two to a row, each with an isometric drawing of what stands there, the kind of site set large and light, and its address and contact lines.

Look `site-plates` (`assets/src/blocks/look-site-plates.js`), pass 9; the style atlas's line art plus data pairing, set as Swiss plates (pool: sys-pw.2 tiles with one drawn cell).

- Data: a `table` block with `"look": "site-plates"`. `cols`: [site, what happens here, address, contact and hours] (the labels name the fields). `rows`: the first cell is split at its first ", " into the kind ("Shop and test bay") and the place ("[shop location, city and province]"); a `{t, link, intent}` first cell links the kind. Other cells: each " · " part on its own line; an empty cell is left out. `fold`, `fold_noun` as everywhere.
- Optional `art`: one drawing key per row: `office` (building), `shop` (skid with RO rack and panel), `service` (truck, no load), `parts` (crates drawn with IsoKit's box primitive, a pump and a valve). Any other key draws no figure.
- Plate (`__plate`): `line-strong` top rule; the figure (`__fig`: `limestone` panel with an inner hairline frame, `data-theme="light"`, IsoKit `aq-iso--limestone`) at 5 / 7 beside the text: mono index in `flow` and the place, the kind in Geist 300 at 32/38, the fields as mono labels over values on `line` hairlines.
- Phones: one plate per row, the drawing (16 : 9) above the words.
- Not for the coverage of regions (CoverageMap) or for a list of contacts without places.

## Motion

Motion (`motion.js`): each plate is printed: the drawing's panel wipes up, its line work draws on (DrawSVG), then the index, the kind and the fields rise in, plate after plate. One timeline under 3 s. Hover or focus on a plate lifts its drawing.
