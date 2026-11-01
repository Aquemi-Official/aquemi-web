MethodBento sets a short comparison of methods as a bento of drawn tiles, one per method, with the method that is not offered shown as an empty dashed tile.

- On the site: a `table` block with `"look": "method-bento"` (renderer `assets/src/blocks/look-method-bento.js`), sys-storage "Chemical, hot water or UV". Origin: no concept of its own; adapted from the bento of `research/pass9/concepts/compliance.0.png` (one tall visual tile among value tiles).
- Markup: `div.aq-method-bento` (three-column grid) > `div.__head` (section head), `ol.__tiles` (display: contents) of `li.__tile` (`p.__no`, `h3.__t`, a drawing `svg.__fig` or the scale `div.__scale`, `dl.__dl` with the other columns under their names); the scale tile is `li.__tile.is-hot` (navy, two columns wide); the gap tile `li.__gap` (`p.__ghost` outline name, aria-hidden, and `p.__gapt` the intro).
- Fields: `h`, `intro`, `cols`, `rows [[method, how, fit, trade-off]]`, `anchor`, `figs` (per row: `chemical`, `hot`, `uv`), `scale {row, marks [{v, l}]}` (temperature marks in degrees C on a 0-100 rail; with two marks the first label sits left of its line, the last right), `absent` (the missing method's name; the intro then moves from the head into the gap tile).
- Scale: a bulb and a rail, solid up to the first mark, dashed between marks, dotted past the last; the marks print their own values from the page copy, the ticks are a ruler only.
- Tokens: `surface-raised` tiles on `line`, one `navy` tile with a `limestone` rail, `flow` lines in drawings, a dashed `line-strong` gap.
- Phones: one column (tiles in row order), marks stacked under the rail.

## Motion

Motion: the navy tile wipes open from the left, the paper tiles rise, the gap tile's outline name slides in last. In the navy tile the bulb fills and the heat runs up the rail (solid, then dashed, then dotted), each mark dropping in as the heat reaches it. Drawings draw on, the sanitant disperses dot by dot along the pipe, the UV rays flicker on. Under 5 s; nothing under reduced motion.

Pass 9 polish: the ghost name is larger and stroked in `ink-subtle` so it reads in the dark theme too.

Pass 9b: the hot-water rail is also a probe (motion.js, ported from Subframe Motion "Snapping range slider", slider-detents). A flow needle (`div.__probe` > `div.__thumb[role=slider]`) can be dragged along the rail or moved with the arrow keys, Page Up/Down, Home and End; while dragging it snaps to the marks (within 4.5 °C) on a spring carriage (stiffness 520, damping 34, mass 0.45), and `p.__read[aria-live]` under the rail reads the temperature and its zone: `scale.base` below the first mark (new optional field, the row's own words), then each mark's label. The probe exists only when motion runs; the static scale is complete without it.
