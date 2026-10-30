Explainer sets out one idea as a figure plus three or four short numbered callouts instead of paragraphs, for a mechanism a reader should see at a glance (endotoxin margin set by the feed, what an upgrade costs in requalification).

- Data: a `prose` block with `"as": "explainer"`, `points: [{t, d, at}]` (3–4; `d` 25 words or fewer) and an optional `figure`. Without `points` the block renders as plain Prose.
- Figures (no new artwork per page):
  - `{kind: "levels", limit: {v, unit, label}, bars: [{label, v, level, note, n}]}`: tubes filled against a dashed `fail` limit rule. A numeric `v` (in the limit's unit) sets the height and is printed on the plot; without `v`, `level` `"below"`, `"at"` or `"above"` draws the bar with no number. `n` puts that point's number on the bar. The plot is `aria-hidden`; each bar's `label` and `note` are the real text, so say the value in the note.
  - `{kind: "art", art: "<page id>"}`: that page's equipment drawing (Illustration, `ART` in `parts/Hero.js`), with each point's number pinned at its `at: [x%, y%]`.
  - No figure: the callouts alone, in two columns.
- Markup (`blocks/prose.js`): full-width section head, then `.aq-explainer` > `figure.aq-explainer__fig` (`.aq-levels` with `.aq-levels__plot`, `.aq-levels__limit`, `.aq-levels__tube`, `.aq-levels__fill.is-below|is-at|is-above`, `figcaption.aq-levels__keys`; or `.aq-explainer__fig--art` with `.aq-explainer__pin`) and `ol.aq-explainer__points` (`.aq-explainer__n`, `h3.aq-explainer__t`, `p.aq-explainer__d`).
- Tokens: figure in a `line-strong` frame; numbers in `flow` Geist Mono; markers `flow` discs with `surface` digits; fill `flow-tint` with a `flow` top rule, `fail` once it reaches the limit; limit label `ink-muted` on a `surface` chip. Desktop: figure left, callouts right; phones: figure first.
- Ground: the navy page (the shape is not in the light-sheet list); it also reads on a light sheet with `ground: "light"`.
- Numbers only from the page. Never invent a value to give a bar a height: use `level`. Not for a list of choices (LinkGrid) or a sequence (ProcessSteps).
