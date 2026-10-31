FAQ answers the questions engineers and QA ask before they call, as hairline accordion rows: index, question and a + sign, with the answer opening under the question.

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

## One link per answer

DR-009's "one line and a link": an answer whose full version lives on another page says one line and links there. The link is a field of the item, never markup inside the answer (the answer stays plain text, so nothing in page content is parsed as HTML):

```json
{"q": "Which limits apply to Purified Water?", "a": "The stricter of USP and Ph. Eur. on each attribute.", "link": "compliance#limits"}
{"q": "We do not have a URS yet. Is it too early to ask?", "a": "No. Tell us what you make and ask for a water scope review.",
 "link": "contact-proposal", "link_label": "Request a water scope review", "intent": "I know my product, not my water spec"}
```

- `link`: a page id or `page#anchor` (opens that page at the block with that `anchor`). A link to a page that does not exist renders nothing, and `check` warns on it and on a missing anchor.
- `link_label` (optional): the link's words, five or fewer (`check` counts them with the buttons). Without it a `page#anchor` link reads the target block's heading ("Purified Water limits") and a page link the page's name.
- `intent` (optional): option labels the linked page's form ticks on arrival, as on a button (`check` warns on labels that tick nothing).
- Markup: after the answer's paragraph, `<p class="aq-faq__more">` holding the Button link variant (`aq-btn aq-btn--link`, `flow`, with its arrow), `space-3` under the answer. One link per item; the link sits inside the answer, so it counts with the answer (not in the page's visible words).

## Layout

- Each question is a row between 1 px `line` hairlines, no frame. The summary reads the shared index (`01`, `ink-subtle`), the question in Geist 500 20/28 `ink`, sentence case (18/26 on phones), and a plain `+` / `−` sign in Geist Mono `ink-subtle` at the right. The summary is at least 44 px tall.
- Hover turns the question `flow`. The open row's sign turns `flow`; its answer sits under the question column. Nothing else changes colour.

## Token rules

- Answer 16/26 (15/24 on phones) in `ink-muted` within `text-max`.
- Focus: 2 px `focus` ring with 2 px offset on the summary. The answer fades in and rises 8 px over 400 ms; with reduced motion it only fades.
- No boxes, shadows, spines or bracketed signs.

## Writing

- At most eight questions per page and answers of 60 words or fewer (content budgets): the direct answer first, then the standard or number.
- Unknown facts go in `[square brackets]`.

## When not to use it

- Don't hide anything a buyer needs to decide (scope, standards, deliverables): put it in the page body.
- Not for long answers with lists or tables; link to a page instead.

## Motion

<summary><span class="aq-index" aria-hidden="true">01</span><span class="aq-faq__q">How do we size generation against storage?</span><span class="aq-faq__sign" aria-hidden="true"><span class="aq-faq__glyph"></span></span></summary>
- The index is the shared `.aq-index` (`01`, mono, `ink-subtle`). `aq-faq__sign` holds one empty `<span class="aq-faq__glyph"></span>`; CSS draws the brackets and the plus, which turns into a minus when open.
- Every question is a framed card (`line-strong`, `surface`) hung from one vertical spine on the left by a short connector with a round junction node (CSS only). The summary reads `01 /` (the shared index plus a CSS slash, `ink-subtle`), the question in condensed capitals (`font-display` 600, 22/24; 20/22 on phones, where the index and sign sit on a line above it) and a bracketed `[ + ]` / `[ − ]` sign in mono: brackets from CSS around a drawn glyph (`<span class="aq-faq__glyph">`).
## Motion

`motion.js`: on scroll-in the spine draws down (`--aq-spine`) and each card is hung from it in turn: the junction node pops (`--aq-node`), the connector runs out (`--aq-link`) and the card slides off the spine. Open and close ease the answer's height with GSAP (`aq-settle` open, 340 ms close); a card that closes leaves its `name` group while it animates, so opening another never snaps it shut, and its frame turns back to `line-strong` at once (`is-closing`). The sign is `[ glyph ]`: a drawn plus (`aq-faq__glyph`) that turns half a turn as its upright lies flat into a minus (CSS transition). The click handler covers Enter and Space on the summary; without JS or under reduced motion `<details>` opens and closes natively.
