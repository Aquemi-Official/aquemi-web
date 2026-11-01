SiteTiles sets a short grid of what changes for a site as a Swiss row of tiles, each opened by a small flat figure plate that draws the change instead of naming it, then the number large and light, the title, the line and its link.

- On the site: About, "What changes for a Canadian site" (`grid` block, `"look": "site-tiles"`; renderer `assets/src/blocks/look-site-tiles.js`). Origin: the Swiss tile grid of `80-p9-sys-pw-2` (numbered tiles, one picture cell) and the figure-plate pairing the style atlas recommends (line drawing plus text), kept flat and light so it sits apart from the isometric shop plan above it.
- Markup: `ol.aq-site-tiles` (`--n` columns, 1 px `line` gutters) of `li.__tile.is-<fig>` → `div.__plate` (aria-hidden flat `svg.__svg`, or a Spot), `span.__n` (number in a mask), `h3.__t`, `p.__d`, `p.__go` link.
- Figures (`fig`, default from the item's `icon`): `gauge` (a dial with its needle), `stamp` (a registration imprint), `season` (a year of feed temperature under a dashed design line, for `softener`), `route` (a dashed route from a base to the site, for `wrench`). Any other icon shows as a Spot. No figure carries a value.
- Fields (a `grid` block): `h`, `intro`, `items [{t, d, link, link_label, icon, fig}]`. Best for 3 to 4 items.
- Tokens: `surface` tiles with a `surface-raised` plate, `line` / `line-strong` drawing, `flow` for the one active line (needle, tick, curve, route), Geist Light 56 numbers, `flow` links. Hover: the number turns flow.
- Phones: one tile per row; the plate becomes a square figure beside the number and title, the line and link run full width under them; two columns below 1100 px.

## Motion

Motion: tiles wipe up into their cells in reading order, each number rolls up out of its cell, and each plate draws on and does its one thing: the needle sweeps, the imprint strikes, the year's line runs across, the route runs to the site. Once, under 3.5 s; nothing under reduced motion.
