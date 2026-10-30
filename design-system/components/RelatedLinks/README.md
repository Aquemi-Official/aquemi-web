RelatedLinks closes a page with three to five linked cards hung off one pipe, staggered and numbered with large ghost numbers, so the reader sees where to go next at a glance.

## Markup

```html
<ol class="aq-related-links">
  <li><a class="aq-related-links__card" href="#cmp-documentation" data-wp="cmp-documentation">
    <span class="aq-illustration aq-related-links__art" aria-hidden="true" style="mask-image:url(assets/illustrations/sys-pw.png)"></span> <!-- optional -->
    <span class="aq-eyebrow">Compliance</span>
    <span class="aq-h3 aq-related-links__title">Documentation package</span>
    <span class="aq-small">We write the documentation package as we design and build, not after shipment.</span> <!-- optional -->
  </a></li>
  …
</ol>
```

- An ordered list of links. Each card is one `<a>`: the whole card is the hit area and the focus target. Put the block heading (`aq-h1`) above the list.
- Numbers (`01`, `02` …) come from a CSS counter; don't write them in the markup. The title's arrow is also CSS.
- The drawing is optional: use it only for pages with an equipment drawing (the `ART` list in `assets/src/parts/Hero.js`, inline mask via `artMask(id)`). It is decorative (`aria-hidden`).
- On the site: block type `related` with `items` (page ids), rendered by `assets/src/blocks/related.js`. It writes the page's section as eyebrow, its `nav_label` as title, and the first sentence of its `lead` only when that sentence is 130 characters or fewer; otherwise the card is eyebrow and title only.

## Layout

- **Desktop:** one row, equal columns. A 2 px `line-strong` pipe runs across the top; each card hangs from it on a 1 px riser with a valve node at the card edge. Even cards drop by `space-16`, so the row reads as a staggered pipeline. The ghost number sits above each card, right of its riser.
- **Phone** (`@container (max-width: 860px)`): one column; the pipe runs down the left edge and a short stub feeds each card. Numbers shrink to 40 px.

## Token rules

- Cards: `surface-raised`, 1 px `line-strong` border, `radius-0`, padding `space-6` (`space-4` on phones). Eyebrow, `aq-h3` title in `ink`, sentence in `ink-muted`.
- Ghost numbers: `font-mono` 300 at 64 px in `line`, so they read as structure, not content.
- Hover and focus: card border and a 2 px top edge in `flow`; the number, riser and node turn `flow`; the drawing turns `flow` on hover. Focus adds a 2 px `focus` ring with 2 px offset. With reduced motion the colour changes are instant.
- `flow` is the only accent; never fill a card with it.

## Writing

- Three to five links, in the order a reader would most likely go next. Eyebrow, title and at most one short sentence.

## When not to use it

- Not for a list of every page in a section: use LinkGrid.
- Not for a physical sequence of systems: use WaterPath. The numbers here are reading order, not a process.

Origin: concept I in `design-system/inspiration/` (`concept-i-related.png`), generated in Gemini and rebuilt with Aquemi tokens.
