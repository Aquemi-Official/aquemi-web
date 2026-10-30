WaterPath shows the system families as numbered stops on one serpentine pipe, from city feed to point of use, so the reader sees how the systems connect before reading any description.

- Markup: `<div class="aq-water-path">` holding, in order: `<span class="aq-water-path__feed">City feed</span>`, `<div class="aq-water-path__pipe">`, stops 1 to 4, `<div class="aq-water-path__bend">`, `<div class="aq-water-path__pipe aq-water-path__pipe--return">`, stops 5 to 7, `<span class="aq-water-path__outlet">Point of use ←</span>`.
- Stop: `<article class="aq-water-path__stop" data-n="01">` with an optional `svg.aq-water-path__glyph` (72 × 56 line drawing, one `<path>`), `<span class="aq-water-path__num">`, `<span class="aq-h3">` holding the link, `<span class="aq-small">` one sentence, and `aq-tags` with the governing standard. `data-n` draws the large ghost number in `line`.
- The pipe is a 5 px `double` border in `flow`; the bend is the same border with `space-12` radius. Each stop has a valve node (15 px ring in `flow` on `surface`) on the pipe. Glyphs are `ink-muted` and turn `flow` on hover.
- Desktop: four stops left to right, the pipe bends down at the right, then stops 5 to 7 run right to left on the return pipe (water keeps flowing; numbers stay in order). Narrow containers: one column with the pipe running down the left edge.
- Order the stops in the order water travels: pretreatment, PW, WFI, pure steam, storage and loops, then monitoring, which watches the whole path.
- Seven stops at most. For a list that isn't a physical sequence use LinkGrid; for one system's treatment train use ProcessDiagram.
- On the site: block type `path` with `items` (`t`, `d`, `tag`, `link`) and optional `from` / `to` labels. Glyphs are keyed by the system page id in `GLYPH` in `assets/aquemi-site.js`.
- Origin: concept A in `design-system/inspiration/`, generated in Gemini and rebuilt with Aquemi tokens.
