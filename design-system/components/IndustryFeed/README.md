IndustryFeed sets a few destinations of the same water as editorial type: one twin-wall pipe enters from the page edge and tees down into each column, where the destination's evidence (its standard) is the hero type.

- Look: `"look": "industry-feed"` on a `grid` block (renderer `assets/src/blocks/look-industry-feed.js`). Fields: `h`, `items [{t, d, tag, link}]`. `tag` is shown large (a short standard code); an item without one shows its name large. Best for 2 to 4 items.
- Markup: `.aq-industry-feed[style="--n;--len"]` › `__trunk` (pipe with `__water`), `__drip`, `ol.__list` › `li.__item` › `a.__card` (`__drop` with `__water`, `__node`, `__code`, `p.__ev`, `h3.__t`, `__d`). `--len` (the longest evidence, in characters) sizes the evidence type so the longest fits its column on one line.
- Tokens: pipe walls `line-strong` over the section ground, water `flow`, evidence in Geist Mono Light in `ink`, names Geist 26/32, lines `ink-muted`. Square tees, no curves. Hovering a card steps the others back and lights its node.
- Phone: the pipe runs down the left edge and each item tees off it.
- Motion: the water runs the trunk from the page edge with a droplet at its head; as it passes each column the drop fills, the node seats with a ring, the evidence decodes like a readout and the name and line rise. Phones: the items light one after another. Once, under 3 s.
