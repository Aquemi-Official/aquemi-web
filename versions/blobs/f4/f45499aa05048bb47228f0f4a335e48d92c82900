Prose is running text in a SplitSection: the heading on the left, the first sentence as a large light lead, then the paragraphs in body size, with white space and nothing else around them.

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

- Lead: Geist 300 at 28/36 (22/30 on phones) in `ink`, tracked -0.01em, `space-2` extra space under it. Paragraphs: `body` 16/26 in `ink-muted`, `space-4` apart, within `text-max`.
- No grid, frame, rule, reference tags or leaders: white space separates the lead from the body.
- Standards and figures stay inline in the sentence.

## Writing

- Two or three paragraphs, 120 words or fewer in total (content budget). Write the first sentence as the takeaway. Name standards in full and give numbers with units.
- Unknown facts go in `[square brackets]`.

## When not to use it

- Not for a list of titled items: use LinkGrid or OptionList. Not for an ordered sequence: use ProcessSteps.
- Don't put two Prose sections next to each other; merge them or alternate with a full-width section.

## Motion

`motion.js` (plain sheet only): the lead sentence rises line by line out of a mask (SplitText, accessible text kept), then each annotated paragraph follows in reading order. The explainer path has its own motion (Explainer).
