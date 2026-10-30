ProcessDiagram draws the stages of a treatment train left to right: numbered boxes joined by Flow Blue arrows.

- Markup: `<div class="aq-diagram">` holding one inline `<svg role="img" aria-label="Stage 1 to Stage 2 to …">`. Each stage is a `rect.aq-diagram__box` with `text.aq-diagram__label` (up to two lines, about 15 characters each) and a `text.aq-diagram__num` ("01") above it. Arrows are `line.aq-diagram__arrow` with an arrowhead marker; a `line.aq-diagram__base` rule runs underneath.
- Geometry: 170 units per stage, boxes 136 × 52, viewBox height 110. The website builds it from a list of stage names (`AQ.wDiagram`).
- Four to seven stages. Name stages as engineers do: "Multimedia filter", "Softener", "RO", "EDI", "Storage tank", "Loop".
- It scrolls sideways below 560 px rather than shrinking the text. Put the caption in an `aq-small` paragraph under it.
