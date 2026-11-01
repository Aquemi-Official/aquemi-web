CoverageMap reads a coverage table by region off a tile map: the provinces and territories as squares on a limestone sheet held in view, the regions as rows beside it, and the row you point at, focus or read lighting its tiles.

Look `coverage-map` (`assets/src/blocks/look-coverage-map.js`), pass 9; from the "Where we are" service map of `62-concept-contact-routes`, drawn as a tile map so no place is invented.

- Data: a `table` block with `"look": "coverage-map"` (an `as: "router"` field may stay). `cols`: [region, then the columns that answer for it]; `rows` as the table; cells may be `{t, link, intent}`. Plus `map`: `[{c, n, x, y, r}]`, one tile per province or territory: code, full name (the tile button's accessible name), grid column and row, and `r`, the index of the row that covers it. Optional `base: {c, label}`: the home tile and its label, copy taken from the page ("Based in Ontario").
- Map (`__map`, sticky on desktop): `limestone` sheet (`data-theme="light"`) with an inner hairline frame and a mono title strip ("Aquemi · " and the block's `nav`); tiles on a grid of `--cols` × `--rows`, each a button (44 px or more) with its code in mono 20/24 and its row index; the home tile has a 3 px `navy` edge and a square mark, repeated in the legend line (`__base`). A lit tile (`is-on`) fills `flow` with `on-navy` text.
- Rows (`__rows`): index, the region in Geist 300 at 32/38, the codes it covers as small mono chips, then each column as a label / value pair on `line` hairlines; a lit row draws a `flow` rule along its top.
- Behaviour (in the look file): pointing at or focusing a row or a tile lights that row's tiles; pressing a tile also brings its row into view. Every row is always shown: the map only points.
- Phones: the map on top (not held), full width, codes only; rows below with labels over values.
- Not for site addresses (SitePlates) or for real geography: the tiles are a schematic.

## Motion

Motion (`motion.js`): the map is laid tile by tile from west to east (each square drops into its place), the base line follows and the rows rise in (one timeline under 2.5 s). On desktop the row crossing the middle of the screen lights its tiles (one ScrollTrigger per row), so the held map points at what you are reading.
