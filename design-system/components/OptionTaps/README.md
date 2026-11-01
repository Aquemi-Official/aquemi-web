OptionTaps shows options where they would join the system: the standard train drawn solid in isometric line on a blueprint sheet, and each option as a dashed part (the drawing convention for "optional") on its own dashed tee off the main line, with numbered cards under the sheet.

- On the site: an `options` block with `"look": "option-taps"` (renderer `assets/src/blocks/look-option-taps.js`), on sys-pretreatment "Options". No concept image of its own: adapted from systems.0 and industries.3 (one isometric run with markers on parts); the dashed-optional convention is this page's own idea. The page's one blueprint section.
- Markup: `div.aq-option-taps` → `div.__fig.aq-iso-figure.aq-iso-figure--navy` (IsoKit svg `aq-iso--navy __svg` on an `isoSheet` with iso grid and title block; train parts `data-iso-id="t0…"`; option parts `.__ghost` `data-iso-id="o0…"` and tees `.__tee` `data-iso-id="tee0…"`; HTML `__label` per train part and `__mark` per option, aria-hidden) and `ol.__cards` of `li.__card` (`__no` number and "Option", `svg.__mini` the dashed part for phones, `h3.__t`, `p.__d`).
- Fields: `h`, `items [{t, d, spot, at, part, row, r, h}]`, `train [{part, label, r, h, ly}]`, `fold`, `fold_noun`. New optional fields: `train`, the standard parts left to right (IsoKit kinds; `label` a short drawing label; `ly` its vertical offset in px); per item `at` (position along the train, fractions between parts), `part` (the IsoKit kind drawn dashed), `row` (`back` above the line, `front` below), `r` / `h` passed to the part.
- Hover on a card lights its part and tee (`is-lit`) and fills its marker (pointer only; the numbers carry the pairing for everyone).
- Tokens: `navy` ground, IsoKit navy lines, dashed cards in `on-navy-muted`, lit in `limestone`.
- Phones: the sheet stays as an overview strip (labels and markers off); each card carries its own dashed part.
- Use it for options that each attach at a known point of one system. For options without a place in a drawing, OptionTags or OptionModules.

## Motion

Motion: on scroll-in the standard train draws through `AQiso.timeline` (parts back to front, pipes, then the water once); the dashed options then fade up in turn on their tees as their markers drop on, and the cards slide up. Under 5 s; nothing under reduced motion.
