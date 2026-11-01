# Pass 9 build notes: projects (round 2)

Built 2026-11-01 on port 8766. Page file: `content/pages/25-projects.json` (blocks 0 and 1: `look` only). FAQ untouched.
Two new looks, one component each (README, style.css, preview.html from the live section, motion.js).

| # | Block | Look / component | Concept adapted | Art direction |
| --- | --- | --- | --- | --- |
| 0 | Verify before a case study exists (table, router) | `check-ledger` / CheckLedger | `76-p9-systems-2` seam as a boundary (calm battery-limit hybrid) + `48-concept-roles` fill vs outline | Swiss split ledger on navy |
| 1 | What a case study proves (prose, explainer) | `record-anatomy` / RecordAnatomy | `60-concept-project-record` (the record sheet) + `54-concept-explainer-drawing` (plate + numbered points) | limestone figure plate with leaders |

## 0 · CheckLedger
The page's point (each check says what it proves and what it does not) became the layout: what you check on the left in
large light type (filled square key), what it does not prove on the right (outlined square key), the route as a limestone
button on a central seam with the time to arrange under it. Motion: sides slide in from opposite edges and meet at the
seam, buttons press in, then water runs down the seam row by row lighting each node. Phone: card per check, seam down
the left edge, column names shown as labels ("Time to arrange:", "What it does not prove"). Every link and intent kept.

## 1 · RecordAnatomy
A specimen record (what each published figure will carry) drawn in four zones on a limestone sheet: figure (an empty
bracketed value with a bar under a dashed limit), method (sampling points on a loop, sample ticks over a period),
report (a numbered document with a results table), approval (two signature lines and a stamp). Each zone's number is
led to its point. No values on the sheet. Motion: sheet unrolls, each zone draws in turn, leader runs out, point rises;
the stamp strikes once. Phone: zone above its point, leader drops down. Kit: flat drawings drawn in the renderer (not
isometric equipment, so no IsoKit part needed).

No copy cut. New optional fields: none used (RecordAnatomy supports `fig` per point; defaults by order).
