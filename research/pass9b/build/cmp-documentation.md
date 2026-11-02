# Pass 9b build notes: cmp-documentation (blocks 0-3)

Server 8770. Blocks 4-6 (form, faq, related) have no concept and were not touched. Page rhythm now: hero light, index
sheet on navy, stage stacks on navy (the sheet reads as lying on the same desk), review cycle light, delivery on a
limestone drawing sheet.

| # | Block | Look / component | Concept | Decision |
| --- | --- | --- | --- | --- |
| 0 | docs "The turnover package, section by section" | `index-sheet` / IndexSheet (new) | cmp-documentation.0 | replaced SpineShelf (deleted) |
| 1 | table "What each stage issues" | `stage-stacks` / StageStacks | cmp-documentation.1 (stock; stage rail only) | kept, upgraded with a stage rail |
| 2 | steps "How each document reaches your file" | `revision-sheet` / RevisionSheet | cmp-documentation.2 (numbered rhythm only) | kept, re-composed and polished |
| 3 | spec "Delivery and signatures" | `pdf-anatomy` / PdfAnatomy | cmp-documentation.3 (drawing-sheet frame) | kept, framed, page turner added |

## Per section
- **IndexSheet** (concept followed closely): limestone sheet on the navy band, the title set at 84 px light across its
  head, intro, then all 12 sections in a ruled, numbered two-column index (mono numbers and titles, every section's
  documents in view, the key section's number and rule in flow), and at the right a folded leaf with an IsoKit drawing:
  base frame, pipe-frame posts and rails, a flanged spool with a valve and a gauge (the concept's isometric pipe frame).
  Strip over the sheet: the block's `nav` and "12 sections" (aria-hidden). Fold 4 on phones only. Phone: navy margin,
  small drawing under the intro, one-column grid. The drawing is composed in the renderer from IsoKit parts and pipes
  (no new kit part). Port: **paper-fold** (leaf swings open on its crease, 720 ms, then the frame draws and water runs the
  spool). SpineShelf deleted (only this page used it); BinderSpines and RecordSlips READMEs updated.
- **StageStacks**: the concept's table and fusion-joint drawing are stock, so the live stacks stay; its stage rail idea
  became interaction: the axis nodes are now buttons (44 px target, "Show the file up to <stage>"). Pointing at a stage,
  focusing or pressing its node seeks the water to it (port **cue-scrubber**); stacks not yet reached go quiet, the
  sought stack lifts; pressed holds. Works as a jump under reduced motion. `back.out` node ease replaced (power3.out).
- **RevisionSheet**: concept's leaders into the skid are decorative and were not built; its numbered rhythm was: steps
  now lead at the left with large Geist Mono numbers, the pinned sheet stands at the right, rows shortened (was 1.75 ×
  space-32, now 1.3) so the scroll story reads at pace. No new port (the sheet already inks signatures on state).
- **PdfAnatomy**: the concept's drawing-sheet frame around the section (zone band 1-4 across, D-A down, title block with
  the section title over blank `No.` / `Rev.` fields). The concept's mono doc code (DS-001-A) was not built: it would be
  an invented document number; the blank title-block fields stand in. Port **compact-pagination**: a page turner under
  the drawn PDF (12 pages, one per bookmark): the number window slides, bookmark and search hit move, front page turns,
  footer number/revision boxes stay and light (the "on every page" point). `back.out` dot ease replaced.

## Copy
No copy cut or added. Display-only: the docs block's `nav` ("Index") and the section count in the sheet strip; the
section title repeated in the PDF title block (aria-hidden); "No.", "Rev.", page numbers and "3 / 12" are drawing labels.

## Checks
build; check 0 problems; check --budgets cmp-documentation: 0 overruns (538 of 1300 words). motioncheck 1280 and 375:
0 errors, 0 hidden. Light and dark at 1280, phone 375 reviewed; keyboard: rail nodes focus/press, pager arrows and
numbers (window keeps only visible numbers tabbable, ends disable).

## Weak or open
- IndexSheet's folded leaf back is a tinted limestone; the fold is quick (front-loaded ease) and reads best on a slow
  scroll. Under 1100 px container width the leaf sits over the grid and does not fold.
- IndexSheet's drawing column leaves empty sheet under the sticky drawing on desktop (the grid is taller).
- PdfAnatomy's "Bookmarked" leader keeps pointing at its original bookmark row while the current bookmark moves with
  the page turner.
- (fixed) Stage rail quiets later stacks as outlines with on-navy-muted text (no opacity drop), contrast stays at or above 4.5:1.
