CaseStudy summarizes a delivered project as hairline fact rows (client, problem, system delivered) beside one large measured-outcome figure on a quiet panel.

Origin: concept K in design-system/inspiration/ (`concept-k-case.png`), rebuilt with Aquemi tokens and set in the brand's hairline style (no fact boxes).

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

- One `<dl>` per case keeps term/description semantics; each `dt`/`dd` pair is wrapped in a `div` (valid inside `dl`) so it can be laid out as a row. Order: Client, Problem, System delivered, Measured outcome. Omit a fact rather than leave it empty.
- The title is an `h3` under the section's `h2`. CSS writes "Case 01" above it in the eyebrow style; don't type the number.
- **No figure yet:** replace the figure with `<span class="aq-case__figure is-empty"><span class="aq-ph">[headline figure, unit]</span></span>`. It shows as a dashed `caution` slot the size of the figure, so the gap is obvious in review. With `is-clean` it turns into a quiet `line` dashed slot.
- A bracketed value inside `aq-case__num` or `aq-case__unit` keeps the placeholder style at a readable size.

## Content fields (block type `case`)

The renderer `assets/src/blocks/case.js` reads each item of `items`:

| Field | Required | Shown as |
| --- | --- | --- |
| `t` | yes | Title |
| `client`, `problem`, `system` | each optional | Fact rows, in that order |
| `outcome` | yes | Sentence under the figure: what was measured, how and when |
| `figure` | optional | The large number, exactly as Aquemi supplies it, as a string (a value, a value with `<`, or a count); `[brackets]` render as a placeholder |
| `unit` | optional | Unit beside the figure (`"EU/mL"`, `"µS/cm"`, `"weeks"`) |
| `standard` | optional | "Standard met" fact row, after System delivered |
| `method` | optional | "How it was measured", full width under the facts |
| `profile` | optional | `[{v, l}]` KeyFacts strip under the title |
| `status` | optional | Caution label above the title |

On the block, `intro` adds a lead paragraph above the cases.

The figure comes only from `figure`. The renderer never pulls a number out of `outcome`, and an empty `figure` shows the placeholder slot. Never fill it with a guessed value.

## Layout

- **Desktop:** cases stack, each opened by a `line` hairline, with `space-16` between them. Fact rows (label above text, hairlines between) fill a 5-part left column; the outcome panel spans their full height in a 7-part right column, figure at the top, result sentence at the bottom.
- **Phone** (`@container (max-width: 860px)`): one column. The fact rows, then the outcome panel, then "How it was measured". The figure scales to 16% of the container width (48 to 80 px) and wraps rather than overflowing.

## Token rules

- No frames: a 1 px `line` hairline opens each case and separates the fact rows. `radius-0` throughout.
- Outcome panel: `surface-raised` with a 1 px `flow` top hairline, and the figure in `flow` mono 300. That is the case's only accent; never fill a box with `flow`. No shadows.
- Labels (`dt`) in the `eyebrow` style: mono 12/16, 500, 0.08em, uppercase, `ink-muted`. Units stay in their real case (`mS`, `µS/cm`) in mono; never uppercase them.

## Writing

- The outcome is a measured figure with its unit, the method and the time frame. Use real figures or don't publish the case; until then write placeholders in square brackets.
- Name the client only with written permission; otherwise describe it ("Mid-size biologics CDMO, Ontario").
- Optional rows: Standard met (`standard`) is a fourth fact row after System delivered, and the outcome panel grows to span it. How it was measured (`method`) is a full-width hairline row under the facts and outcome, text `ink-muted`: the test, the sampling point, the number of samples or the period, and the executed report the figure comes from.
- Project profile: an optional `<dl class="aq-key-facts aq-case__profile">` between the title and the facts, the KeyFacts markup with three or four headline KPIs (capacity, conductivity, TOC, timeline), drawn exactly as KeyFacts draws it (between `line` hairlines on the page ground). Same rules as KeyFacts: value with unit and standard, unconfirmed values in square brackets.
- Status: an optional `<span class="aq-case__status">` above the title, eyebrow type in `caution` on `caution-tint` (a draft flag, like a Placeholder), for a case that is a template or still awaiting client approval ("Template · awaiting a real project"). Remove it when the case is published.

## Project record (`aq-case--record`)

Origin: `inspiration/gemini/60-concept-project-record.png`. The same case told as a project record: the system's equipment drawing with what changed marked, three or four measured outcomes as large figures with their method, and the order-to-release milestones. The renderer uses it for any item with `art`, `outcomes` or `timeline`; other items keep the fact-row layout.

```html
<article class="aq-case aq-case--record">
  <span class="aq-case__status">Template · awaiting a real project</span>
  <h3 class="aq-h3 aq-case__title">Purified Water system and ozonated loop for [segment, province]</h3>
  <div class="aq-case__brief">
    <dl class="aq-case__entries"><div class="aq-case__entry"><dt>Client</dt><dd>…</dd></div>…</dl>
    <figure class="aq-case__drawing">
      <div class="aq-plate aq-plate--block aq-case__art"><div class="aq-case__plate">
        <span class="aq-illustration" role="img" aria-label="Purified Water skid: …" style="mask-image:url(assets/illustrations/sys-pw.png)"></span>
        <span class="aq-case__pin" style="left:14%;top:45%"><span class="aq-case__mark" aria-hidden="true">1</span></span>
      </div><div class="aq-plate__block" aria-hidden="true"><span>Fig. 01</span><span>What changed</span></div></div>
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
| `art` | A page id from `ART` in `parts/Hero.js` (`"sys-pw"`): that equipment drawing on a Plate (`wPlate`: a `line` frame on `surface-raised` with the caption "Fig. 01 · What changed"), beside the facts |
| `changed` | `[{t, at: [x%, y%]}]`, up to 4: numbered pins on the drawing (24 px squares, 1 px `flow` border, `flow` mono numeral, `radius-sm`) (positions are % of the square drawing) and the same numbers listed under it as "What changed" |
| `outcomes` | `[{v, unit, l, method}]`, 3-4, the hero of the record: the value large in mono 300 `ink` (a `[value]` placeholder keeps full size), the unit in mono beside it, what was measured (`l`) as an eyebrow caption, the method and report beneath in `ink-muted`. An empty `v` prints `[value]` |
| `timeline` | `[{t, when}]`: milestones from order to water release: small square `flow`-outlined stops on a 1 px `line-strong` hairline, sentence-case labels (Geist 500 14/20) and mono dates below, the last stop filled `flow` |
| `client`, `problem`, `system`, `standard`, `status`, `profile`, `outcome`, `method` | As above; facts become hairline rows, `outcome` a sentence above the figures, `method` the hairline row at the end |

- The pins and numbers are decoration (`aria-hidden`); the "What changed" list carries the text. Every value is real DOM text.
- Desktop: facts (5 parts) beside the drawing (7 parts); outcomes two per row on a hairline, numbers 48-64 px; timeline horizontal. Phones: drawing first, then the facts, outcomes one per row at 40-52 px, then a vertical timeline (stops on a rule at the left, date on the right).
- Never invent a figure, week or change: until a project is delivered, `v`, `when` and the change status stay `[placeholders]`. Mark only equipment the drawing really shows.

## Motion

`motion.js`, cause before effect. Fact-box case: facts drop in, the outcome box is cut in, the figure counts up and the result sentence lands last. Project record: facts rows enter; after the drawing prints, the change pins pop on one by one, each with its line under "What changed"; measured outcomes rise in turn, each figure counting up (a `[value]` placeholder is written in left to right) and the result sentence lands after them; the order-to-release line runs stop by stop (`--aq-run` on each `li::before`), each stop rings as the line reaches it and the release stop strikes last like a stamp. Phones: the same, the outcomes one by one as they scroll in and the timeline vertical.

## When not to use it

- Not for testimonials or quotes, and not for projects without a measured result.
- Not for spec lists of a product; use SpecTable.
