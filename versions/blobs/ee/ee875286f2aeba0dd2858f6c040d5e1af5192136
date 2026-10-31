Readout sets one figure on a precision instrument face: the number very large, its unit vertical beside it, the method in a boxed tag on a reference line, a short caption, and a schematic tick scale along the bottom.

## Markup

```html
<div class="aq-readout aq-readout--limit">
  <div class="aq-readout__head">
    <p class="aq-readout__reading"><span class="aq-readout__figure"><span class="aq-readout__cmp">&lt; </span>0.25</span><span class="aq-readout__unit">&nbsp;EU/mL</span><span class="aq-readout__cond">&nbsp;@ 25 °C</span></p>
    <div class="aq-readout__ref"><span class="aq-readout__tag">Bacterial endotoxins · USP &lt;85&gt;</span></div>
  </div>
  <p class="aq-lead aq-readout__caption">What the figure means and how it is measured.</p>
  <div class="aq-readout__scale" aria-hidden="true"></div>
</div>
```

- `aq-readout__reading` is one `<p>` holding comparator, figure, unit and optional condition in reading order, so a screen reader says "< 0.25 EU/mL" as one phrase. Unit and condition start with a no-break space (`&nbsp;`); keep it, it is what separates the words when read aloud. The vertical unit is CSS only.
- `aq-readout__cmp` (optional) holds `<`, `≤`, `>` or `≥` plus a trailing space. `aq-readout__cond` (optional) holds a measuring condition such as `@ 25 °C`.
- `aq-readout--limit` marks a figure that is a limit (it has a comparator). It adds a flat reference band and a marker to the scale. Leave it off for counts and other non-limit figures.
- `aq-readout__scale` is decoration: `aria-hidden`, drawn with CSS gradients, plotting nothing. The marker sits at a fixed 75 % of the width for every readout; it is not proportional to the value. Never replace it with a trend line or chart of measurements.
- On the site: block type `readout` with `value`, `method`, `body`. The renderer (`assets/src/blocks/readout.js`) splits `value` without changing it: a leading comparator, the number, the unit, and anything from ` @ ` on as the condition. A value that does not start with a number, such as `[number]`, is shown whole as the figure and stays a Placeholder.

## Layout

- **Desktop:** frame with `space-12` padding. Head and caption share a 7 : 5 grid; figure on the left, method tag on the right sitting on a dashed reference line at the figure's mid-height, which runs edge to edge across the frame. Caption under the tag. Scale across the full width.
- **Phone** (`@container (max-width: 860px)`): one column. Figure, then the unit horizontal at 28/34 px, then the tag, caption and a shorter scale. The reference line is dropped. Nothing overflows at 375 px; the figure scales with `clamp(48px, 18cqi, 112px)` (desktop `clamp(64px, 12cqi, 160px)`) and may break as a last resort.

## Token rules

- Frame: 1 px `line`, `surface` ground, square corners, with 2 px `line-strong` corner marks (`space-6` long, `space-4` on phones).
- Figure: `font-mono` 300, `flow`, tabular figures, line-height 1. Comparator at 0.4 em in `ink-muted`. Unit `font-mono` 400 in `ink`, at least 16 px. Condition `font-mono` 14/22 in `ink-muted`.
- Reference line: 1 px dashed `line-strong`. Tag: eyebrow type (`font-mono` 12/16, uppercase, 0.08em) in `ink`, 1 px `flow` border, `radius-0`, `surface` ground so the line stops at its edges.
- Scale: `line` hairline, minor ticks every `space-2` and major ticks every `space-16` in `line-strong`. Limit band `flow-tint`, marker 2 px `flow`.

## Writing

- One real, sourced figure with its unit, written as the standard writes it (`< 0.25 EU/mL`, `≤ 1.3 µS/cm @ 25 °C`). Until one exists, use a placeholder in square brackets so it can't ship by accident.
- Method: the test and its standard (`Bacterial endotoxins · USP <85>`).
- Caption: one or two sentences on what the figure means for the reader's plant. No invented measurements, dates or instrument tags on the face.

## When not to use it

- At most one Readout per page; it is the page's one highlighted figure.
- Not for several values: use SpecTable. Not for a measured trend: there is no chart component for that yet, and the scale here must stay a schematic.

Origin: concept N in `design-system/inspiration/`, generated in Gemini and rebuilt with Aquemi tokens (Geist Mono Light in place of the concept's condensed figures; the concept's trend trace, timestamps and "SYS_OUT" labels dropped as invented data).
