MarkingMatch shows supplier control as the receiving check an auditor would watch: each supply drawn as the part that arrives with its marking ringed in flow, the requirement on a certificate paper, and between them a double-ended check line carrying how we verify it.

- On the site: a `table` block with `"look": "marking-match"` (renderer `assets/src/blocks/look-marking-match.js`), cmp-quality "What we require from suppliers". Origin: no concept of its own; adapted from 77-p9-systems-3 (each standard wired to the equipment that answers it) and 45-concept-evidence, read across one row at a time.
- Markup: `<div class="aq-marking-match">` > `__cols` (aria-hidden) + (Fold) `ol.__list` > `li.__row` > `__sup` (`svg.__fig`, `h3.__name`), `__req` (`__k`, `__paper[data-theme="light"]` > `__seal`, `__head`, `p.__rq`), `__ver` (`__k`, `__line` > `__ok`, `p.__how`). Grid areas put the check line between part and paper.
- Fields: `cols [supply, what we require, how we verify it]`, `rows` (strings or `{t, link}`), `figs` (optional per row: `pipe`, `gasket`, `pvc`, `membrane`, `vessel`; default from the supply's words), `fold`, `fold_noun`.
- Drawings: flat line art drawn in the renderer (not IsoKit: small elevations read better than isometric parts at this size), `line-strong` 1.5 px, marking `flow` on `flow-tint`.
- Tokens: paper `surface-raised` with a `limestone` offset, check line and tick `flow`.
- Fold: phones only.
- Phone: part, then the check line turned down beside how we verify it, then the paper.
- Motion (`motion.js`): per row, the part draws on, its marking rings in, the check line runs out from both ends and the tick seats, the certificate slides in, the method fades up. Under 2.2 s a row.
- Not for: standards and their proof (ProofFolders, EvidenceMap).
