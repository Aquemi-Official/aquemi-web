Prose is running text in a SplitSection: the heading on the left, the first sentence as a large lead, then paragraphs tagged [01], [02] in the margin on a faint drawing grid.

## Markup

```html
<div class="aq-prose aq-prose--sheet">
  <p class="aq-prose__lead">USP has long allowed WFI from any process equivalent or superior to distillation.</p>
  <p>The European Pharmacopoeia did not. In April 2017 the revised Ph. Eur. monograph 0169 began to allow WFI by reverse osmosis …</p>
</div>
```

- Block `prose` (`assets/src/blocks/prose.js`): `h`, `body` (paragraphs). The renderer splits the first sentence of `body[0]` off as the lead. An old `notes` field is ignored.
- Plain `aq-prose` (without `--sheet`) is a few paragraphs within `text-max`, also used for captions.

## Token rules

- Concept 27: the sheet has a `line-strong` rule on its left and a faint `line` grid at `space-8` pitch (60 % strength; none on phones). Lead: `font-sans` 400 at 28/36 (22/30 on phones) in `ink`. Paragraphs: 17/28 (16/26) in `ink-muted`, `space-6` apart.
- Every paragraph after the lead carries a reference tag, `[01]`, in 12 px mono `flow` in the margin, joined to the text by a dashed `flow` leader ending in a node (CSS counter, silent to screen readers). Phones: the tag sits at the right end of a `flow` rule above its paragraph.
- Standards and figures stay inline in the sentence.

## Writing

- Two or three paragraphs, 120 words or fewer in total (content budget). Write the first sentence as the takeaway. Name standards in full and give numbers with units.
- Unknown facts go in `[square brackets]`.

## When not to use it

- Not for a list of titled items: use LinkGrid or OptionList. Not for an ordered sequence: use ProcessSteps.
- Don't put two Prose sections next to each other; merge them or alternate with a full-width section.
