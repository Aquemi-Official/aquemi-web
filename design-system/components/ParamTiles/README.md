ParamTiles sets a system's design parameters as a Swiss grid of numbered tiles with one blueprint cell of the skid, so each parameter reads as its own panel and the whole grid scans at a glance.

- On the site: a `spec` block with `"look": "param-tiles"` (renderer `assets/src/blocks/look-param-tiles.js`). Origin: pass 9 concept `research/pass9/concepts/sys-pw.2.png`.
- Markup: `<div class="aq-param-tiles">` (four columns on a `navy` field with 1 px gutters) holding `div.__fig` (an IsoKit skid, `aq-iso--navy`, over an iso sheet; two by two cells) and `ol.__list` (display: contents) of `li.__tile` → `div.__head` (`__n` huge number, `__slash`, `h3.__p` mono label), `p.__v` (the design value, mono), `p.__m` (basis, then the row link `a.__link`, as a spec row's).
- Fields: `h`, `caption` (eyebrow), `intro`, `rows [{p, v, m, hl, link, link_label}]`, `fold`, `fold_noun`, `note`. The first `hl` row is the wide navy lead tile (`is-lead`).
- Fold: phones only; desktop shows every tile so the grid stays whole (as DocList). An empty cell left by the count shows the navy field.
- Tokens: `limestone` tiles with `on-limestone` text, `navy` lead tile and field, Geist Light numbers, Geist Mono values, `flow` links. Hover: the tile number turns `flow`.
- Phones: one column, the lead tile first, the blueprint after it, the fold button back.

## Motion

Motion: the grid is assembled like a poster. Tiles wipe into their cells in reading order, each from a different edge in turn; the big number rolls up out of its cell while its digits decode; the slash cuts down; label, value and basis follow. The blueprint cell draws the skid through `AQiso.timeline` (sheet, frame, equipment, then water from RO to EDI). Under 5 s; folded tiles appear whole when opened; nothing under reduced motion.
