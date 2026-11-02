# Pass 9b build notes: projects

Built 2026-11-01 on port 8768. Page file `content/pages/25-projects.json` (block 0 gained `fits`). FAQ untouched.
Both looks upgraded in place (same look names; only projects uses them).

| # | Block | Look / component | Concept | Decision |
| --- | --- | --- | --- | --- |
| 0 | Verify before a case study exists (table, router) | `check-ledger` / CheckLedger | projects.0 followed | upgrade: seam ledger on navy -> ledger of tiles |
| 1 | What a case study proves (prose, explainer) | `record-anatomy` / RecordAnatomy | projects.1 followed | upgrade: zone plate with leaders -> drawing sheet with title block |

## 0 · CheckLedger (Swiss tile ledger)
Concept idea kept: each check is a row of square tiles headed by a navy slash-numeral tile ("01/", Geist Light 64), then
route (the link, set as the row's action with a flow arrow), what you check, what it does not prove, and the time to
arrange in mono at the right edge; "01 / Route … 04 / Time to arrange" header over the grid; each tile also names its
column. Two navy blueprint fitting tiles (IsoKit PP cross and tee, aria-hidden) sit in the shop-visit row as the
concept's texture (new optional field `fits`). The concept's invented times and city ignored; placeholders stay.
Section moved off the navy band to the page ground (the tiles carry navy), so the page alternates: hero, light tiles,
limestone sheet, FAQ, navy closing. Phone: one card per check, numeral tile beside the route, the rest stacked.
Motion: column names decode; numeral tiles wipe in and each numeral turns over on split-flap leaves (departure-board);
tiles rise left to right. Hover re-flips a row's numeral; pointing at a tile lays a chart-crosshair (row + column rule,
column name lights, tile tints); focus on a route snaps the row rule.

## 1 · RecordAnatomy (limestone drawing sheet)
Concept idea kept: a sparse limestone sheet (frame, inner frame, zone numbers across and letters down), the title large
in the open left half, the drawing field top right, and the four proof fields as the sheet's title block in the lower
right corner (01 FIGURE / METHOD / REPORT / APPROVAL, mono field names, the point's text) so each figure reads as
signed off like a drawing. The concept's abstract diagram became the four specimen drawings from pass 9 (kept: they
explain each field), set as a 2 x 2 plate with dashed centre lines. Phone: title, then title-block rows each with its
own drawing.
Motion: sheet unrolls; a guided-inspection lit window tours the drawings as each title-block row is read (drawing
draws, field name decodes, text rises); the approval's signatures ink over faint impressions (signature-draw).
Pointing at or focusing a row glides the window to its drawing (CSS, works under reduced motion).

## Copy
No copy cut, no new copy. Column names, link labels and intents unchanged.

## Checks
build; check 0 problems in these files (2 other builders' scaffolds were failing at the time); budgets 378 / 1300
words; motioncheck 1280 and 375: 0 errors, 0 hidden. Light, dark and 375 viewed.

## Still weak
- The phone ledger is long (six cards, about 2.7k px); the tiles are already tight.
- Title-block rows are focusable list items (tabindex) for the lit window; they are not controls.
