FAQ answers the questions engineers and QA ask before they call, as hairline accordion rows: index, question and a +/− sign, with the answer opening under the question.

## Markup

```html
<div class="aq-faq">
  <details name="faq-1">
    <summary><span class="aq-index" aria-hidden="true">01</span><span class="aq-faq__q">How do we size generation against storage?</span><span class="aq-faq__sign" aria-hidden="true"></span></summary>
    <div class="aq-faq__a"><p>We start from your point-of-use demand profile over a full production day. …</p></div>
  </details>
  <details name="faq-1">…</details>
</div>
```

- Native `<details>`/`<summary>`: it opens, closes and is keyboard-operable with no JavaScript. All rows start closed, so the list of questions is the first read.
- Give every `<details>` in one FAQ the same `name` (unique per FAQ on the page) so only one answer is open at a time.
- The index is the shared `.aq-index` (`01`, mono, `ink-subtle`). `aq-faq__sign` stays empty; CSS writes `+` or `−`.
- The site renderer (`assets/src/blocks/faq.js`) puts it in a SplitSection: the standard section head on the left, the rows on the right (stacked on phones).

## Layout

- One grammar at every width: `line` hairline rows, an index column (`space-12` on desktop, `space-8` on phones), the question, the sign. No cards, no grid paper.
- A collapsed row is about 56 px on phones. The open row's sign turns `flow`; nothing else changes colour.

## Token rules

- Question `font-sans` 500 at 17/24 (16/24 on phones). Answer 15/24 in `ink-muted` within `text-max`, indented to the question column.
- Focus: 2 px `focus` ring with 2 px offset on the summary. The answer fades in over 400 ms; with reduced motion it only fades.

## Writing

- At most eight questions per page and answers of 60 words or fewer (content budgets): the direct answer first, then the standard or number.
- Unknown facts go in `[square brackets]`.

## When not to use it

- Don't hide anything a buyer needs to decide (scope, standards, deliverables): put it in the page body.
- Not for long answers with lists or tables; link to a page instead.
