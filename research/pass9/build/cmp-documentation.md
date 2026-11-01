# Pass 9 build notes: cmp-documentation (blocks 0-3)

Builder: round 2, server 8770. Blocks 4-6 (form, faq, related) untouched. Character: the turnover package as an object
you can audit (an index that opens, the file growing stage by stage, revision control on one sheet).

| # | Block | Look / component | Concept adapted | Art direction |
| --- | --- | --- | --- | --- |
| 0 | docs "The turnover package, section by section" | `spine-shelf` / SpineShelf | 51-concept-turnover-binder | tactile object + editorial index |
| 1 | table evidence "What each stage issues" (ground dark) | `stage-stacks` / StageStacks | 60-concept-project-record (timeline) + 51 paper | data-viz on navy |
| 2 | steps "How each document reaches your file" | `revision-sheet` / RevisionSheet | 63-concept-notes-register + atlas hybrid 3 (sticky sheet) | pinned paper story (the page's one scroll story) |
| 3 | spec "Delivery and signatures" | `pdf-anatomy` / PdfAnatomy | atlas best pairing: line drawing + data on leaders (54, 77) | figure plate, line art |

No two neighbours share a direction; line art only in block 3 (and the paper drawing of block 2). IsoKit not used:
nothing here is equipment. Drawn inline: binder spines (CSS), the document sheet with its review marks (SVG), the PDF
viewer with bookmark pane and page stack (SVG).

## Per section
- **SpineShelf**: 12 binder spines on one shelf, width = documents in the section, key section ("Requirements and design
  basis") navy and pulled out; the index beside it is a `details` list (keyboard: summary) that opens to the section's
  documents (split from `d`). Open a section: its spine is pulled; hover a row or spine: its pair lifts; click a spine:
  its section opens. Shelf sticky on desktop. Motion: board draws, spines drop on in turn, rows wipe, key spine pulls as
  its documents deal in. Phone: short band of numbered spines over the index; fold 4 on phones only.
- **StageStacks**: six stages on one flow axis (navy band, as `ground: dark` asked), each stage's documents stacked as
  limestone sheets above its node (stack height = what it adds to the file), name + clause and "your step, and who
  approves" under the axis; column names label the bands once in the left margin. Motion: water runs the axis, at each
  node the sheets fall onto the stack, name and step wipe in. Phone: axis down the left, sheets wrap; fold 2 phones only.
- **RevisionSheet**: one paper sheet pinned beside the five steps; the step crossing mid-screen sets the sheet's state
  (cumulative layers): numbered comments + draft tag; comments answered + draft struck + revision triangle; signature in
  the "Your quality unit" box; data recorded + "Both parties" signatures; current-revision row + register tick. Hover a
  step shows its state. JS off / end state: every mark. Phone: sheet above the steps, plays its marks once.
- **PdfAnatomy**: the highlighted row drawn as a PDF in a viewer; "Searchable PDF", "Bookmarked", "Number and revision on
  every page" are callouts on leaders to the search hit, the current bookmark and the footer boxes of every page.
  Signatures as three signature lines (the third keeps its "or"); retention set large with its note. Hover a callout:
  leader in flow. Phone: viewer cropped, numbered pins, callouts as a list.

## Copy
No copy cut or added. Display-only changes: entries split from their sentences (index documents, stage documents,
callouts, signature choices) with the first letter capitalised; counts as decoration ("12 sections", aria-hidden);
"Hold · Signed by ..." from `hold` (the ProcessSteps wording); "Draft" on the sheet is step 1's first word (aria-hidden).

## Checks
build; check: 0 problems from these files. check --budgets: 0 overruns. motioncheck 1280 and 375: 0 errors, 0 hidden.
No horizontal scroll at 375 / 1280. Light and dark reviewed.

## Weak or open
- RevisionSheet's step list keeps tall rows on desktop (room for the scroll story); a fast scroll jumps through states.
- StageStacks' band labels hide between 860 and 1100 px container width.
- PdfAnatomy's navy logo bar on the page drawing nearly vanishes in the dark theme (decoration only).
