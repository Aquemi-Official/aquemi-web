OptionList shows the configuration choices for a system as numbered module tiles on a technical grid, joined by a thin flow line, like the modules of a configurator.

- Markup: `<ul class="aq-options" role="list">` with one `<li class="aq-options__item">` per option, holding `<span class="aq-options__tag" aria-hidden="true"><span class="aq-options__mark"></span></span>`, then `<h3 class="aq-h3">` (the option) and `<p class="aq-small">` (what decides it). The site renderer is `assets/src/blocks/options.js` (block type `options`, fields `h` and `items: [{t, d}]`).
- Layout: a full-width section (`aq-section` with `aq-in aq-stack-l`): the `aq-h1` heading, then the grid. Tiles sit in a `line` hairline frame over a `space-6` grid of `line` rules on `surface`; each tile is `surface-raised` with a `line-strong` border and square corners.
- Columns: at most 4 (4, 7 or 8 options) or 3 (5 or 6 options), never narrower than 240 px, so the grid steps down to 3 or 2 columns on its own at tablet width. Use 4 to 8 options.
- Numbering: `01`, `02` … come from a CSS counter in the tag row (Geist Mono, uppercase, tabular figures, `flow`). Don't type numbers into the copy.
- The flow line is a 2 px `flow` segment into each tile at the height of its number, plus an outlet after the last tile. It is this section's `flow` accent; add no other accent colour inside the tiles.
- The mark is a decorative, `aria-hidden` switch shape (a `line-strong` outline holding a `flow` square) meaning "available option". It is not a control: never make it clickable, focusable or toggled, and never show an "off" state. If a page needs real choices, use a form.
- Each description names the value or standard that decides the choice: "Hot water at 80 °C", "Ozone at 20–50 ppb", "254 nm UV". Titles in sentence case, one short line.
- Below 860 px container width the tiles stack in one column and the flow line turns vertical, dropping into each tile beside its number.
- Tokens only: colours `surface`, `surface-raised`, `line`, `line-strong`, `flow`, `ink`, `ink-muted`; spacing `space-*`; radii `radius-0` (tiles) and `radius-sm` (mark).
- When not to use it: page links (use LinkGrid), sequential steps (use ProcessSteps; the numbers here are labels, not an order), values to compare across systems (use SpecTable). Don't put it in a SplitSection: the grid needs the full measure.
