MembraneAtlas reads a feed-water table as an atlas of membrane failures: one plate per condition, a round micrograph of the membrane surface showing what that condition does to it, then the condition, its effect and what we design for.

- On the site: a `table` block with `"look": "membrane-atlas"` (renderer `assets/src/blocks/look-membrane-atlas.js`), on sys-pretreatment "Canadian feed water and what it does". No concept image of its own: adapted from industries.1.v2 (macro membrane imagery with numbered leaders) in a scientific-plate art direction: failures shown as what happens to a membrane.
- Markup: `<div class="aq-membrane-atlas">` (four-column grid) → `__head` (the section head in the first cell), `ol.__plates` (display: contents, `role="list"`) of `li.__plate` → `__scope` (`__fig` "Fig. 01", aria-hidden; `svg.__svg`: the field, the clean polyamide texture `__tex`, the damage `g.__dmg`, rim and reticle), `h3.__t`, `dl.__dl` with `__row` (effect) and `__row--ours` (what we design for, on a `flow` rule).
- Fields: `h`, `cols` (labels for the second and third cells), `rows [[condition, effect, design]]` (cells may be `{t, link}`), `fold`, `fold_noun`. New optional field: `marks`, one micrograph per row in row order: `oxidize` (pits and cracks), `cold` (a split field: sparse permeate on the cold side, bacteria on the warm), `foul` (particle cake), `scale` (carbonate crystals), `silica` (glassy plates), `coat` (iron coating), `biofilm` (colonies in slime); anything else draws the clean membrane.
- Micrographs are seeded, so every render draws the same plate. They are decoration (`aria-hidden`): the condition and its effect are the text.
- Fold: desktop shows every plate; phones keep the block's `fold` and its button.
- Tokens: plates on the section ground with `line` hairlines, damage in `ink` / `ink-muted`, crystals on `surface-sunken`, the design-for rule and label in `flow`.
- Phones: one plate per row, the micrograph (112 px) beside the text.
- Use it for conditions or failure modes that do something visible to one surface. Not for compliance evidence (ProofFolders) or plain comparisons (CompareTable).

## Motion

Motion: plates play row by row as the grid scrolls in (phones: each as it arrives). The scope opens like an iris on the clean texture while the reticle turns into place, then the condition's damage spreads across the field from the centre out and the text slides in beside it. Under 2 s per plate; hover turns the rim `flow` (CSS). Nothing under reduced motion.
