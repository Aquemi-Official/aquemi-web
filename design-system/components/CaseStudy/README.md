CaseStudy summarizes a delivered project as framed fact boxes (client, problem, system delivered) beside one large measured-outcome figure.

Origin: concept K in design-system/inspiration/ (`concept-k-case.png`), rebuilt with Aquemi tokens.

## Markup

```html
<div class="aq-cases">
  <article class="aq-case">
    <h3 class="aq-h3 aq-case__title">WFI loop for a fill-finish line</h3>
    <dl class="aq-case__facts">
      <div class="aq-case__fact"><dt>Client</dt><dd>Sterile injectables manufacturer, …</dd></div>
      <div class="aq-case__fact"><dt>Problem</dt><dd>…</dd></div>
      <div class="aq-case__fact"><dt>System delivered</dt><dd>…</dd></div>
      <div class="aq-case__outcome"><dt>Measured outcome</dt><dd>
        <span class="aq-case__figure"><span class="aq-case__num">[value]</span><span class="aq-case__unit">EU/mL</span></span>
        <span class="aq-case__result">Endotoxin at every point of use after [N] months.</span>
      </dd></div>
    </dl>
  </article>
</div>
```

- One `<dl>` per case keeps term/description semantics; each `dt`/`dd` pair is wrapped in a `div` (valid inside `dl`) so it can be a box. Order: Client, Problem, System delivered, Measured outcome. Omit a fact box rather than leave it empty.
- The title is an `h3` under the section's `h2`. CSS writes "Case 01 /" above it; don't type the number.
- **No figure yet:** replace the figure with `<span class="aq-case__figure is-empty"><span class="aq-ph">[headline figure, unit]</span></span>`. It shows as a dashed `caution` slot the size of the figure, so the gap is obvious in review. With `is-clean` it turns into a quiet `line-strong` dashed box.
- A bracketed value inside `aq-case__num` or `aq-case__unit` keeps the placeholder style at a readable size.

## Content fields (block type `case`)

The renderer `assets/src/blocks/case.js` reads each item of `items`:

| Field | Required | Shown as |
| --- | --- | --- |
| `t` | yes | Title |
| `client`, `problem`, `system` | each optional | Fact boxes, in that order |
| `outcome` | yes | Sentence under the figure: what was measured, how and when |
| `figure` | optional | The large number, exactly as Aquemi supplies it, as a string (a value, a value with `<`, or a count); `[brackets]` render as a placeholder |
| `unit` | optional | Unit beside the figure (`"EU/mL"`, `"µS/cm"`, `"weeks"`) |

The figure comes only from `figure`. The renderer never pulls a number out of `outcome`, and an empty `figure` shows the placeholder slot. Never fill it with a guessed value.

## Layout

- **Desktop:** cases stack, each in its own frame. Fact boxes fill a 5-part left column; the outcome box spans their full height in a 7-part right column, figure at the top, result sentence at the bottom.
- **Phone** (`@container (max-width: 860px)`): one column, outcome box last; the figure scales to 20% of the container width (56 to 96 px) and wraps rather than overflowing.

## Token rules

- Frame: 1 px `line-strong` on `surface`; hairline `line` under the title. Boxes: `surface-raised`, 1 px `line-strong`, `radius-0`.
- Outcome box: `flow` border with a 2 px `flow` top edge, and the figure in `flow` mono 300. That is the case's only accent; never fill a box with `flow`.
- Labels (`dt`) mono 12 px uppercase `ink-muted`. Units stay in their real case (`mS`, `µS/cm`); never uppercase them.

## Writing

- The outcome is a measured figure with its unit, the method and the time frame. Use real figures or don't publish the case; until then write placeholders in square brackets.
- Name the client only with written permission; otherwise describe it ("Mid-size biologics CDMO, Ontario").

## When not to use it

- Not for testimonials or quotes, and not for projects without a measured result.
- Not for spec lists of a product; use SpecTable.
