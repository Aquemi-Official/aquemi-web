TermsSheet sets commercial terms as a contract's terms sheet: one paper sheet with a ruled head, the terms as numbered clauses in two columns, each with its number large and light, the term, our side of it one value per line, and its note.

- On the site: a `spec` block with `"look": "terms-sheet"` (renderer `assets/src/blocks/look-terms-sheet.js`), cmp-quality "How buying from us works". Origin: no concept of its own; adapted from 41-concept-page-sheets (a page as a drawn sheet) as an editorial contract schedule.
- Markup: `<div class="aq-terms-sheet" data-theme="light">` > `__head` (aria-hidden: nav name, clause count) + (Fold) `ol.__list` (`--rows`) > `li.__cl` > `__n`, `__body` (`h3.__t`, `ul.__v`, `p.__m` > `__mk`, `__go`).
- Fields: `cols [term, ours, note]`, `rows [{p, v, m, link, link_label}]`, `nav`, `fold`, `fold_noun`. A value written "a · b" breaks into lines; the note is introduced by the third column's name.
- Tokens: paper `surface-raised` with a `limestone` offset, head rule `navy`, clause rules `line`, value dashes `flow`.
- Fold: phones only (desktop shows every clause).
- Phone: one column of clauses on the sheet.
- Motion (`motion.js`): the sheet rises and settles square, the head rule draws, clauses write in down each column (number rolls up, lines appear). Under 3 s.
- Not for: specifications with measured values (SpecTable).
