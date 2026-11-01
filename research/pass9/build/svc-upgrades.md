# Pass 9 build notes: svc-upgrades (blocks 0 to 4)

Round 2, server 8768. Blocks 5 (faq) and 6 (related) untouched. No Gemini concept of its own: ideas taken from the
pool (named per block). Grounds: surface, navy, surface, limestone, surface. Line art: block 1 (navy blueprint sheet)
and block 3 (single parts as figure plates).

| Block | Look / component | Concept adapted | Art direction |
| --- | --- | --- | --- |
| 0 observation (table as roles) | `approval-merge` / ApprovalMerge | 48-concept-roles + industries.0 (rows routed into columns) | light editorial: requests large, a node per row on the preparer's lane (Aquemi / your side), every wire merging into one bus and one "Approved by You" stamp; the intro's 15 working days echoed as a 168 px light numeral (aria-hidden) |
| 1 upgrades (table as router) | `retrofit-plant` / RetrofitPlant | compliance.3 (highlighted part follows the active card) | navy blueprint (IsoKit, VisitPlan's plant): existing plant faint, the picked upgrade's stages lit; upgrades as a tab list, terms beside |
| 2 controls (table as failures) | `strike-gaps` / StrikeGaps | 43-concept-failures | kinetic editorial type: gap struck through like a revision, requirement in mono on an arrow, the fix set large |
| 3 assessment (grid as route) | `review-reticles` / ReviewReticles | industries.1 (view read through markers) + atlas Swiss grid | limestone figure plates: each area in an inspection viewfinder (brackets, crosshair, index) around an IsoKit part |
| 4 how it runs (steps with hold) | `cutover-schedule` / CutoverSchedule | services.1 (hold nodes on a line) as a Gantt | data viz schedule: equal bars (not to scale), hold diamond and stamp, your system's water line broken only at the planned shutdown |

## Motion
- ApprovalMerge: 15 counts up, lanes run down, rows rise, nodes land, wires run into the bus, the stamp strikes. ~3 s.
- RetrofitPlant: AQiso draws the plant and runs the water at full strength, then the plant drops to existing and the
  picked upgrade lights; tabs and panel rise. < 5 s. Tab click/arrow keys relight the sheet (CSS fade).
- StrikeGaps: per row: gap set, strike darkens through it, arrow runs, fix rises. ~1.3 s/row.
- ReviewReticles: per frame: brackets close in, drawing prints up, scan line sweeps once, text rises. ~1.5 s/row.
- CutoverSchedule: water line runs to the shutdown, the gap opens with its label, line runs on; bars grow in step,
  hold diamond and stamp strike. ~3.5 s.
- motioncheck 1280 and 375: 0 errors, 0 hidden.

## Copy
No copy cut. No fact added. New optional fields: block 1 `parts` (gen, pre, loop, toc, panel, "gen loop"); block 4
`lane` ("Your system", a drawing label). Drawing words added as aria-hidden UI labels only: "Existing" / "This upgrade"
legend, "Not to scale", the lane names "Aquemi" / "Your side" over the lanes. The "15 working days" figure repeats the
intro (aria-hidden). Hold wording as ProcessSteps ("Hold · Signed by your quality unit").

## Phone
ApprovalMerge: rows stack (request, party chip, "You" stamp); lanes/bus dropped. RetrofitPlant: no sheet or tabs;
every upgrade a card with its terms and its stage drawn small. StrikeGaps: struck gap, requirement on a down arrow, fix.
ReviewReticles: one column of 16:10 viewfinders. CutoverSchedule: step text over its track, water line on top.

## Kit / shared
- RetrofitPlant reuses `vpPlant()` from look-visit-plan.js (without the report binders).
- ReviewReticles sizes single IsoKit parts with its own solid boxes (`RR_BOX`): part ports alone undersize binders
  and the RO rack. Candidate for IsoKit: a `bounds` per part.
- No shared files edited, no shared requests.

## Weak still
- The retrofit sheet is wide and short; the existing/new contrast is clear but the lit stage is small at 1280.
- ApprovalMerge's bus line assumes the last row is at its minimum height (true for this content).
- CutoverSchedule bars are equal by design (no durations exist); the fixed "Not to scale" note says so.

## Polish (pass 9 round 3)
- RetrofitPlant: sheet 1080 × 430 with a camera (`__cam`, CSS transform per tab, zoom up to 2.3) that frames the picked upgrade; key plan inset (`<use>` of the plant + window). Motion: whole plant drawn and run (`keep: true`, which also fixes IsoKit's late unlight that left nothing lit at the end), then the camera moves in. Phone: "Start with" split off by a hairline (the margin had lost to `.aq-page p`).
- ReviewReticles phone: an inspection list (square viewfinder 2/5 beside name and line) instead of six tall 16:10 frames.
- ApprovalMerge: the hidden "Approved by" head (one approver) is `display: none` (was visibility hidden, flagged by motioncheck).
