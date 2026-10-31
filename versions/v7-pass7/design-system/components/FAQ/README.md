FAQ answers the questions engineers and QA ask before they call, as framed question cards hung from one junction spine: index, question in condensed capitals and a [ + ] sign, with the answer opening inside the card.

## Markup

```html
<div class="aq-faq">
  <details name="faq-1">
    <summary><span class="aq-index" aria-hidden="true">01</span><span class="aq-faq__q">How do we size generation against storage?</span><span class="aq-faq__sign" aria-hidden="true"><span class="aq-faq__glyph"></span></span></summary>
    <div class="aq-faq__a"><p>We start from your point-of-use demand profile over a full production day. …</p></div>
  </details>
  <details name="faq-1">…</details>
</div>
```

- Native `<details>`/`<summary>`: it opens, closes and is keyboard-operable with no JavaScript. All rows start closed, so the list of questions is the first read.
- Give every `<details>` in one FAQ the same `name` (unique per FAQ on the page) so only one answer is open at a time.
- The index is the shared `.aq-index` (`01`, mono, `ink-subtle`). `aq-faq__sign` holds one empty `<span class="aq-faq__glyph"></span>`; CSS draws the brackets and the plus, which turns into a minus when open.
- The site renderer (`assets/src/blocks/faq.js`) puts it in a SplitSection: the standard section head on the left, the rows on the right (stacked on phones).

## Layout (concept 15)

- Every question is a framed card (`line-strong`, `surface`) hung from one vertical spine on the left by a short connector with a round junction node (CSS only). The summary reads `01 /` (the shared index plus a CSS slash, `ink-subtle`), the question in condensed capitals (`font-display` 600, 22/24; 20/22 on phones, where the index and sign sit on a line above it) and a bracketed `[ + ]` / `[ − ]` sign in mono: brackets from CSS around a drawn glyph (`<span class="aq-faq__glyph">`).
- The open card turns `flow`: frame, a 3 px inner rule on the left, connector, a filled node, index and sign. Its answer sits under the question column below a dashed `line-strong` rule.

## Token rules

- Answer 16/26 (15/24 on phones) in `ink-muted` within `text-max`.
- Focus: 2 px `focus` ring with 2 px offset on the summary. The answer fades in over 400 ms; with reduced motion it only fades.

## Writing

- At most eight questions per page and answers of 60 words or fewer (content budgets): the direct answer first, then the standard or number.
- Unknown facts go in `[square brackets]`.

## Motion

`motion.js`: on scroll-in the spine draws down (`--aq-spine`) and each card is hung from it in turn: the junction node pops (`--aq-node`), the connector runs out (`--aq-link`) and the card slides off the spine. Open and close ease the answer's height with GSAP (`aq-settle` open, 340 ms close); a card that closes leaves its `name` group while it animates, so opening another never snaps it shut, and its frame turns back to `line-strong` at once (`is-closing`). The sign is `[ glyph ]`: a drawn plus (`aq-faq__glyph`) that turns half a turn as its upright lies flat into a minus (CSS transition). The click handler covers Enter and Space on the summary; without JS or under reduced motion `<details>` opens and closes natively.

## When not to use it

- Don't hide anything a buyer needs to decide (scope, standards, deliverables): put it in the page body.
- Not for long answers with lists or tables; link to a page instead.
