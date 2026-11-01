Colophon sets a spec block of company facts as a measured editorial colophon: the one highlighted fact as a display-size statement, every other fact as a line on a measuring rule with its evidence as a margin note, so a company's facts read like the masthead of a well-made publication rather than a table.

- On the site: About, "Company facts" (`spec` block, `"look": "colophon"`; renderer `assets/src/blocks/look-colophon.js`). Origin: `design-system/inspiration/gemini/32-concept-band.png` (one statement at editorial scale) and `78-p9-sys-pw-0` (facts stepping down as set type), calmed to light type.
- Markup: `div.aq-colophon` → `div.__lead` (`p.__lk` label with a flow `span.__tick`, `p.__lv` statement, `p.__lz` the following sentence, `p.__lm` evidence and link) then the fold with `ol.__rows` of `li.__row` → `span.__n` (aria-hidden number), `h3.__p` (label, mono caps), `p.__v` (the fact, Geist Light 24), `p.__m` (`span.__ev` evidence note, `a.__go` link), then the block note (`wSpecNote`).
- Fields: `h`, `caption`, `intro`, `rows [{p, v, m, hl, link, link_label, intent}]`, `note`, `fold`, `fold_noun`. The first `hl` row is the statement; its `v` is split at its first full stop (words unchanged): the first sentence large, the rest smaller behind a rule. `fold` counts the statement, so the list folds one row earlier.
- Tokens: `ink` statement and facts on the page ground, `ink-muted` labels and notes, `line` / `line-strong` hairlines, `flow` only for the tick, the hover rule and links. No boxes or fills; placeholders stay chips.
- Phones: the statement stays large (32/38); each fact is number + label, then the fact, then the note.
- Not for limits or design values with units (LimitStack, ParamTiles) or for terms a reader compares across options (TermsSheet, CompareTable).

## Motion

Motion: the statement rises line by line out of a mask (SplitText) while its tick extends; the following sentence and evidence slide in. Then each fact line follows in order: number, label, the fact wiping in left to right, the margin note. Once, under 3 s; folded rows appear whole when opened; nothing under reduced motion. Hover: a flow rule runs under the row.
