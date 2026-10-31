Prose is running text set as a drawing sheet: the first sentence pulled out as a light lead, the rest in a narrow column with numbered margin notes that quote the standards and figures in the text.

Origin: concept O in design-system/inspiration/ (`concept-o-prose.png`), rebuilt with Aquemi tokens and voice for light and dark themes. The concept's capitals, condensed type and slogans are not part of it.

## Markup

```html
<div class="aq-prose aq-prose--sheet">
  <p class="aq-prose__lead">USP has long allowed WFI from any process equivalent or superior to distillation.</p>
  <div class="aq-prose__row">
    <p>The <span class="aq-prose__ref" data-n="01">European Pharmacopoeia</span> did not. …</p>
    <ol class="aq-prose__notes" aria-hidden="true">
      <li><span class="aq-prose__n">01</span><span class="aq-prose__q">European Pharmacopoeia</span></li>
    </ol>
  </div>
  <div class="aq-prose__row"><p>…</p></div>
</div>
```

- One `aq-prose__row` per paragraph. Its `ol.aq-prose__notes` is optional; leave it out when the paragraph has nothing to annotate.
- Every note repeats a term that is in its paragraph, wrapped in `aq-prose__ref` with the same `data-n`. CSS writes the number after the term as a superscript (hidden from screen readers), and the notes list is `aria-hidden` because it only repeats the text.
- **Plain form:** `<div class="aq-prose">` with bare `<p>` paragraphs still works, within `text-max` with `space-4` between paragraphs. Use it for captions and short notes; the site renderer always writes the sheet.

## Site renderer and data

`assets/src/blocks/prose.js` turns a `prose` block into the sheet inside a SplitSection (heading left, sheet right).

| Field | | |
| --- | --- | --- |
| `h` | required | Section heading. |
| `body` | required | Paragraphs. The first sentence of `body[0]` becomes the lead; the rest of that paragraph becomes the first row. |
| `notes` | optional | Strings to annotate, each copied exactly from `body` (not from the lead sentence). A string that isn't found, or only appears inside a `[placeholder]`, is dropped. `"notes": []` turns notes off. |

- Without `notes`, the renderer finds named standards (USP, USP <645>, Ph. Eur., Ph. Eur. monograph 0169, EU GMP Annex 1, GAMP 5, ISO 9001:2015, ASME BPE, 21 CFR Part 11, EN 285, ICH Q7 …) and figures with units (°C, µS/cm, L/h, m³/h, ppb, mg/L, EU/mL, CFU/mL, bar …): at most three per paragraph, each term once per block, never inside `[brackets]`.
- The first sentence ends at `.`, `!` or `?` outside brackets, before a capital, digit or bracket; abbreviations such as "Ph. Eur." and "e.g." don't end it. A one-sentence first paragraph is the lead on its own.
- Notes never invent: if a paragraph names no standard or figure, it has no notes. Add `notes` to a page file when a term deserves one.

## Layout

- **Desktop:** the sheet fills the SplitSection body: `surface` with a 1 px `line` border and a `line` grid every `space-12`, padding `space-8`. The lead runs up to 30 em. Each paragraph sits in a column of at most 60 characters with a notes margin (`space-32` + `space-16`) one `space-12` gap to its right. Each note has a `line-strong` leader line back across the gap, ending in a `flow` dot at the text column. Hovering a paragraph turns its leaders and underlines `flow`.
- **Phone** (`@container (max-width: 860px)`): one column, padding `space-6` / `space-4`. Notes follow their paragraph as ruled lines: dot, leader, number and term at the right. Nothing overflows at 375 px.

## Token rules

- Lead: Geist 300, 26/34 px (22/30 px on phones), `ink`. Body: 16/26 px, `ink-muted`. Quoted terms: `ink` with a dotted `line-strong` underline.
- Notes: Geist Mono 12/16 px, term in `ink-subtle`, number `01 /` in `flow` 500. Superscript numbers: Geist Mono 10 px, `flow`.
- `flow` appears only as numbers, dots and hover lines; never as a fill.

## Writing

- Two to four paragraphs. Write the first sentence as the takeaway: it is set large on its own. Then the evidence and the standard, one idea per paragraph.
- Name standards in full form and give numbers with units, so they can be annotated. Sentence case; no hype.
- Unknown facts go in `[square brackets]`; they render as placeholders and are never annotated.

## When not to use it

- Not for a list of titled items: use LinkGrid or OptionList. Not for an ordered sequence: use ProcessSteps.
- Past four paragraphs, split the content into a table or another section.
- Don't put two Prose sections next to each other; alternate with a full-width section.
