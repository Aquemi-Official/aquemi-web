RuleFigures sets a spec block of design rules as a Swiss rule sheet in which every rule is explained by a small engineering figure, the lead rule as a full-width band beside a pipe cut open to show turbulent flow.

- On the site: a `spec` block with `"look": "rule-figures"` (renderer `assets/src/blocks/look-rule-figures.js`), sys-storage "Loop design rules". Origin: no concept of its own; adapted from the pool's Swiss numbered tiles (`research/pass9/concepts/sys-pw.2.png`) and the bento of limit tiles (`compliance.0.png`), with the build brief's "turbulent flow visualised".
- Markup: `div.aq-rule-figures` > `p.__cap` (caption and count, aria-hidden), `div.__lead` (`div.__lead-text`: `p.__no`, `h3.__lead-p`, `p.__rule--lead`, `dl.__dl`; `div.__lead-art` with `svg.__pipe`: walls, `g.__streaks`, `g.__eddies`, `g.__prof` arrows and `path.__env`), then `ol.__grid` of `li.__card` (`div.__figbox` > `svg.__fig`, `p.__head` with `span.__n` and `span.__p`, `p.__rule`, `dl.__dl`).
- Fields: `h`, `caption`, `cols` (column names label the value and basis), `rows [{p, v, m, rule, hl, fig, link, link_label}]`, `fold`, `fold_noun`. The lead is the first `hl` row (else the first row). `fig` names the figure: `turbulent`, `slope`, `deadleg`, `sanitize`, `valve`, `vent`, `monitor`; a row without one has no figure.
- Figures are drawn in the renderer (flat explanatory line art, not IsoKit): `line-strong` strokes, `flow` water, `ink-subtle` dimensions, instrument bubbles with ISA letters (CE, TE, FE, a dashed AE for a TOC that may be an option). SVG text only for drawing letters (L, D, CE ...); every value is real text.
- Tokens: surface ground, `surface-sunken` figure panels (`surface` on an alt section), an `ink` rule above the lead, `flow` lead number. Fold: phones only (desktop shows every rule).
- Phones: lead text over the pipe (cropped to keep the velocity profile), cards in one column.

## Motion

Motion: the lead pipe's walls draw from the left, the turbulent streaks run through one after another and the eddies curl in, the velocity profile's arrows shoot out to their flat front and the envelope traces them; the streaks then flow as a moving dash for three seconds and stop. Each card lands with its figure drawing on (walls first, then the water) and its number decoding. Under 5 s; nothing under reduced motion.
