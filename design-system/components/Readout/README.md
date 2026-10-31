Readout sets the page's one highlighted figure: the number large in Geist Mono Light in `flow` with its unit, the method on a limit tag, and a short caption.

## Markup

```html
<div class="aq-readout aq-readout--limit">
  <div class="aq-readout__head">
    <p class="aq-readout__reading"><span class="aq-readout__figure"><span class="aq-readout__cmp">&lt; </span>0.25</span><span class="aq-readout__unit">&nbsp;EU/mL</span><span class="aq-readout__cond">&nbsp;@ 25 °C</span></p>
    <div class="aq-readout__ref"><span class="aq-readout__tag">Bacterial endotoxins · USP &lt;85&gt;</span></div>
  </div>
  <p class="aq-lead aq-readout__caption">What the figure means and how it is measured.</p>
</div>
```

- `aq-readout__reading` is one `<p>` holding comparator, figure, unit and optional condition in reading order, so a screen reader says "< 0.25 EU/mL" as one phrase. Unit and condition start with a no-break space (`&nbsp;`); keep it, it is what separates the words when read aloud.
- `aq-readout__cmp` (optional) holds `<`, `≤`, `>` or `≥` plus a trailing space. `aq-readout__cond` (optional) holds a measuring condition such as `@ 25 °C`.
- `aq-readout--limit` marks a figure that is a limit (it has a comparator). It adds a 1 px `flow` rule under the reading. Leave it off for counts and other non-limit figures.
- On the site: block type `readout` with `value`, `method`, `body`. The renderer (`assets/src/blocks/readout.js`) splits `value` without changing it: a leading comparator, the number, the unit, and anything from ` @ ` on as the condition. A value that does not start with a number, such as `[number]`, is shown whole as the figure and stays a Placeholder.

## Layout

- **Desktop:** a 7 : 5 grid with no frame. The reading on the left, bottom-aligned; on the right the limit tag above the caption.
- **Phone** (`@container (max-width: 860px)`): one column. Figure, the unit under it at 24/30 px, then the tag and the caption. The figure scales with `clamp(48px, 16cqi, 88px)` (desktop `clamp(64px, 10cqi, 128px)`) and may break as a last resort. Nothing overflows at 375 px.

## Token rules

- Figure: `font-mono` 300, `flow` (the page's one highlighted figure), tabular figures, line-height 1. Comparator at 0.45 em in `ink-muted`. Unit `font-mono` 400 28/34 in `ink`. Condition `font-mono` 14/22 in `ink-muted`.
- Tag: as StandardTag draws a standard: `font-mono` 500 12/16, 0.04em, sentence case, 1 px `line-strong` border, `radius-pill`.
- No frame, corner marks, reference line or tick scale.

## Writing

- One real, sourced figure with its unit, written as the standard writes it (`< 0.25 EU/mL`, `≤ 1.3 µS/cm @ 25 °C`). Until one exists, use a placeholder in square brackets so it can't ship by accident.
- Method: the test and its standard (`Bacterial endotoxins · USP <85>`).
- Caption: one or two sentences on what the figure means for the reader's plant.

## When not to use it

- At most one Readout per page; it is the page's one highlighted figure.
- Not for several values: use SpecTable. Not for a measured trend: there is no chart component for that yet.

Origin: concept N in `design-system/inspiration/`, rebuilt as the brand's plain "proof in numbers" readout (the concept's instrument frame, scale, trend trace and labels dropped).

## Motion

Motion (`motion.js`): the instrument powers up once on scroll-in: the tick scale runs out along the bottom, the figure counts up to its value (a placeholder is left alone), the unit and condition drop in, and the method tag strikes onto the reference line last. Under 3 s.
