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
| `standard` | optional | "Standard met" fact box, after System delivered |
| `method` | optional | "How it was measured", full width under the boxes |
| `profile` | optional | `[{v, l}]` KeyFacts strip under the title |
| `status` | optional | Caution label above the title |

On the block, `intro` adds a lead paragraph above the cases.

The figure comes only from `figure`. The renderer never pulls a number out of `outcome`, and an empty `figure` shows the placeholder slot. Never fill it with a guessed value.

## Layout

- **Desktop:** cases stack, each in its own frame. Fact boxes fill a 5-part left column; the outcome box spans their full height in a 7-part right column, figure at the top, result sentence at the bottom.
- **Phone** (`@container (max-width: 860px)`): one column. Client, problem, system, standard and "How it was measured" become hairline rows (label above text) instead of boxes, so a case is not a stack of frames; the outcome keeps its `flow`-edged box after the facts. The figure scales to 20% of the container width (56 to 96 px) and wraps rather than overflowing.

## Token rules

- Frame: 1 px `line-strong` on `surface`; hairline `line` under the title. Boxes: `surface-raised`, 1 px `line-strong`, `radius-0`.
- Outcome box: `flow` border with a 2 px `flow` top edge, and the figure in `flow` mono 300. That is the case's only accent; never fill a box with `flow`.
- Labels (`dt`) mono 12 px uppercase `ink-muted`. Units stay in their real case (`mS`, `µS/cm`); never uppercase them.

## Writing

- The outcome is a measured figure with its unit, the method and the time frame. Use real figures or don't publish the case; until then write placeholders in square brackets.
- Name the client only with written permission; otherwise describe it ("Mid-size biologics CDMO, Ontario").
- Optional boxes: Standard met (`standard`) is a fourth fact box after System delivered, and the outcome box grows to span it. How it was measured (`method`) is a full-width box under the facts and outcome, dashed `line-strong`, text `ink-muted`: the test, the sampling point, the number of samples or the period, and the executed report the figure comes from.
- Project profile: an optional `<dl class="aq-key-facts aq-case__profile">` between the title and the facts, the KeyFacts markup with three or four headline KPIs (capacity, conductivity, TOC, timeline), on `surface-raised`. Same rules as KeyFacts: value with unit and standard, unconfirmed values in square brackets.
- Status: an optional `<span class="aq-case__status">` above the title, mono on `caution-tint`, for a case that is a template or still awaiting client approval ("Template · awaiting a real project"). Remove it when the case is published.

## Project record (`aq-case--record`)

Origin: `inspiration/gemini/60-concept-project-record.png`. The same case told as an engineering record: the system's equipment drawing with what changed marked, three or four measured outcomes as large figures with their method, and the order-to-release milestones. The renderer uses it for any item with `art`, `outcomes` or `timeline`; other items keep the fact-box layout.

```html
<article class="aq-case aq-case--record">
  <span class="aq-case__status">Template · awaiting a real project</span>
  <h3 class="aq-h3 aq-case__title">Purified Water system and ozonated loop for [segment, province]</h3>
  <div class="aq-case__brief">
    <dl class="aq-case__entries"><div class="aq-case__entry"><dt>Client</dt><dd>…</dd></div>…</dl>
    <figure class="aq-case__drawing">
      <div class="aq-case__art"><div class="aq-case__plate">
        <span class="aq-illustration" role="img" aria-label="Purified Water skid: …" style="mask-image:url(assets/illustrations/sys-pw.png)"></span>
        <span class="aq-case__pin" style="left:14%;top:45%"><span class="aq-case__mark" aria-hidden="true">1</span></span>
      </div></div>
      <figcaption class="aq-case__changes"><p class="aq-case__label">What changed</p><ol><li><span class="aq-case__mark" aria-hidden="true">1</span><span>Reverse osmosis (RO) vessels: [new or replaced]</span></li></ol></figcaption>
    </figure>
  </div>
  <div class="aq-case__outcomes"><p class="aq-case__label">Measured outcomes</p>
    <dl class="aq-case__figures" style="--n:4"><div class="aq-case__fig"><dt>Conductivity, loop return</dt><dd>
      <span class="aq-case__val"><span class="aq-case__num">[value]</span><span class="aq-case__unit">µS/cm @ 25 °C</span></span>
      <span class="aq-case__how">Online sensor; [OQ or PQ report number]</span></dd></div>…</dl></div>
  <div class="aq-case__timeline"><p class="aq-case__label">Order to release</p>
    <ol style="--n:6"><li><span class="aq-case__stop" aria-hidden="true"></span><span class="aq-case__mt">Order</span><span class="aq-case__when">[week 0]</span></li>…</ol></div>
</article>
```

| Field | Shown as |
| --- | --- |
| `art` | A page id from `ART` in `parts/Hero.js` (`"sys-pw"`): that equipment drawing on a `surface-raised` plate, beside the facts |
| `changed` | `[{t, at: [x%, y%]}]`, up to 4: numbered `flow` pins on the drawing (positions are % of the square drawing) and the same numbers listed under it as "What changed" |
| `outcomes` | `[{v, unit, l, method}]`, 3-4: the value large in mono `flow`, unit beside it, what was measured (`l`) as the label, the method and report beneath in `ink-muted`. An empty `v` prints `[value]` |
| `timeline` | `[{t, when}]`: milestones from order to water release on one line, the last stop filled |
| `client`, `problem`, `system`, `standard`, `status`, `profile`, `outcome`, `method` | As above; facts become hairline rows, `outcome` a sentence above the figures, `method` the dashed box at the end |

- The pins and numbers are decoration (`aria-hidden`); the "What changed" list carries the text. Every value is real DOM text.
- Desktop: facts (5 parts) beside the drawing (7 parts); outcomes in one row of up to four columns, each with a 2 px `flow` top edge; timeline horizontal. Phones: drawing first, then the facts, outcomes 2 × 2, then a vertical timeline (stops on a rule at the left, date on the right).
- Never invent a figure, week or change: until a project is delivered, `v`, `when` and the change status stay `[placeholders]`. Mark only equipment the drawing really shows.

## When not to use it

- Not for testimonials or quotes, and not for projects without a measured result.
- Not for spec lists of a product; use SpecTable.
