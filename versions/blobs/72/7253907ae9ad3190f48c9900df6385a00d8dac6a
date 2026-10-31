Prose is running text in a SplitSection: the heading on the left, the first sentence set as a light lead, then plain paragraphs on the plain section ground.

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

- Lead: `font-sans` 300 at 24/32 (20/28 on phones) in `ink`. Paragraphs: `body` 16/26 in `ink-muted`, `space-4` apart.
- Reading text never sits on grid paper, in a frame or beside margin notes. Standards and figures stay inline in the sentence.

## Writing

- Two or three paragraphs, 120 words or fewer in total (content budget). Write the first sentence as the takeaway. Name standards in full and give numbers with units.
- Unknown facts go in `[square brackets]`.

## When not to use it

- Not for a list of titled items: use LinkGrid or OptionList. Not for an ordered sequence: use ProcessSteps.
- Don't put two Prose sections next to each other; merge them or alternate with a full-width section.
