ProcessDiagram draws a treatment train as numbered stage boxes joined by one double-line Flow pipe that snakes through them in reading order, with valve and instrument symbols on the pipe.

## Markup

```html
<div class="aq-diagram aq-diagram--base" role="img" aria-label="Treatment train, 6 stages in order: 1 Pretreated feed, 2 Heat exchanger, … Across all stages: Monitoring and controls · TOC, conductivity, ozone">
  <div class="aq-diagram__train">
    <div class="aq-diagram__row">                                   <!-- stages 1-3, left to right -->
      <div class="aq-diagram__stage"><span class="aq-diagram__num">01</span><svg class="aq-diagram__glyph" viewBox="0 0 72 56" aria-hidden="true"><path d="…"/></svg><span class="aq-diagram__label">Pretreated feed</span></div>
      <span class="aq-diagram__link"><svg class="aq-diagram__fitting" …>valve</svg></span>
      …
    </div>
    <div class="aq-diagram__row aq-diagram__row--turn aq-diagram__row--rev"><span class="aq-diagram__link aq-diagram__link--turn">…</span></div>
    <div class="aq-diagram__row aq-diagram__row--rev">…stages 4-6, right to left…</div>
  </div>
  <div class="aq-diagram__base"><svg class="aq-diagram__fitting" …/><span>Monitoring and controls · TOC, conductivity, ozone</span></div>
</div>
```

- The website builds it from a `diagram` block: `stages` (names, in order), optional `base`, optional `caption` (`AQ.wDiagram`). Write markup by hand only where the renderer is not available.
- **Rows of three.** Every second row carries `aq-diagram__row--rev`, which sets `direction: rtl` so its stages and arrows run right to left. A `--turn` row between them holds one vertical drop under the last stage of the row above. Nothing is measured at run time; it renders the same from the static string at any width.
- **Links** (`aq-diagram__link`) alternate a valve and an instrument bubble; `aq-diagram__link--alt` marks every second one, which the phone layout uses to swing the pipe from left to right.
- **Glyphs** are single-path line drawings on a 72 × 56 viewBox, picked from keywords in the stage name: heat exchanger, RO or membrane, EDI, UV, softener, carbon, filter, column or still, pump, steam, loop or points of use, tank or storage, instrument, PLC/HMI/SCADA, and a water drop for feeds and "From … / To …" ends. Anything else gets a generic process block.
- **Base:** `aq-diagram--base` draws a dashed control boundary round the whole train with the label at its foot, for what spans every stage (monitoring, controls, sanitisation). Leave `base` out when there is nothing to name.
- **Text alternative:** the outer element is `role="img"` with an `aria-label` that lists every stage with its number, then the base. The boxes inside are hidden from assistive technology by that role, so the label must carry everything.
- Put the caption in an `aq-small` paragraph under it.

## Token rules

- Pipe: `5px double var(--flow)`, the same pipe as WaterPath. Arrowheads are `flow`. `flow` stays a line, never a fill.
- Boxes: 1.5 px `line-strong` border on `surface`, `radius-sm`. Number in Geist Mono 300 in `flow`; name in Geist 500 in `ink`, sentence case as engineers write it ("RO pass 1", "Storage tank").
- Glyphs and fittings: 1.5 px `ink-muted` stroke; fittings fill with `surface` so the pipe breaks behind them as on a P&ID. This assumes a `surface` section, which all site sections are.
- Base boundary: 1 px dashed `line-strong`; label mono uppercase 11 px `ink-muted`.
- Spacing from `--space-*` only. Phone rules live in the component's `@container (max-width: 860px)` block: rows dissolve into one column and each link becomes a vertical drop, alternating `space-12` in from the left and right edge.

## When to use, when not

- Use it for one linear treatment train of **five to seven stages** on a system page.
- Fewer than four stages reads better as a sentence or a Steps list. More than seven: split the train (pretreatment, generation, storage) and link the pages.
- Not for branched flows, recirculation drawings or real P&IDs; the pipe only runs one way. Link to the drawing package instead.
- Not for project timelines or service steps; those are Steps.
