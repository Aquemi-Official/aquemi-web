FAQ answers the questions engineers and QA ask before they call, as numbered question cards on a technical grid where the open card widens to show its answer.

## Markup

```html
<div class="aq-faq">
  <details name="faq-1" open>
    <summary><span class="aq-faq__tag"></span><span class="aq-faq__q">How do we size generation against storage?</span></summary>
    <div class="aq-faq__a"><p>We start from your point-of-use demand profile over a full production day. …</p></div>
  </details>
  <details name="faq-1">…</details>
</div>
```

- Native `<details>`/`<summary>`: it opens, closes and is keyboard-operable with no JavaScript. Open the first item by default.
- Give every `<details>` in one FAQ the same `name` (unique per FAQ on the page) so only one answer is open at a time. Browsers without `name` support simply allow several open.
- `aq-faq__tag` stays empty: CSS writes the number (`01 /`) and the open/closed sign (`+`, `−`). Don't add a topic label unless the content supplies one.
- The site renderer (`assets/src/blocks/faq.js`) outputs this inside a full-width section with the block heading above it.

## Layout

- **Desktop:** all cards sit in one row on a `line` grid pattern, joined by thin junction lines at number height. The open card's column is twice as wide and shows the answer below the question, after a hairline. Closed cards are only their summary, so the whole card is the hit area. Six or more items wrap three to a row, with the open card spanning two.
- **Phone** (`@container (max-width: 860px)`): one vertical stack on a connecting line; the open card expands in place.

## Token rules

- Cards: `surface-raised` on `surface`, 1 px `line-strong` border, `radius-0`. Grid pattern and hairlines in `line`.
- Open card: `flow` border and a 2 px `flow` top edge; its number, sign and junction lines turn `flow`. That is the only accent; never fill a card with `flow`.
- Number and sign in `font-mono` at 12 px; question in `font-sans` 500; answer `ink-muted` within `text-max`.
- Focus: 2 px `focus` ring with 2 px offset on the summary. The answer fades in over 400 ms; with reduced motion it only fades.

## Writing

- Three to five items. Questions are full sentences in the reader's words; answers lead with the direct answer, then the standard or number, in about 100 to 230 characters.
- Unknown facts go in `[square brackets]`.

## When not to use it

- Don't hide anything a buyer needs to decide (scope, standards, deliverables): put it in the page body.
- Not for long answers with lists or tables; link to a page instead.
- Not for more than eight questions; split the topic or make a page.
