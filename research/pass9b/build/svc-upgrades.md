# Pass 9b build notes: svc-upgrades (blocks 0 to 4)

Server 8770. Blocks 5 (faq) and 6 (related) untouched. Grounds: surface, navy, surface, limestone, navy.

| Block | Concept | Decision | Look / component |
| --- | --- | --- | --- |
| 0 observation | .0 split: roles table left, navy half with a dimensioned PP weld macro | kept the live look: the weld macro is a mood plate with no link to the content; ApprovalMerge already says "every request ends in your approval". Polished: banned `back.out` ease replaced; hover route trace added | `approval-merge` / ApprovalMerge |
| 1 upgrades | .1 navy header drawing over a 5-column table; idea: the drawing lights the part each row replaces | already built in pass 9 (tabs relight and frame the stages on the navy plant); kept as is | `retrofit-plant` / RetrofitPlant |
| 2 controls | .2 mono side note beside the headline for the discontinued PLCs (table + skid is stock) | upgraded: the intro is a mono side note on a flow hairline beside the headline's last line; rows unchanged | `strike-gaps` / StrikeGaps |
| 3 assessment | .3 (take 2): drawing register with mono area codes, large light labels, zone border, title block | upgraded: limestone drawing sheet (outer frame, zone strip 1–6 / A–C, inner frame); register of numbered rows with mono codes and 32 px light names; one viewfinder (pass 9's reticle) whose reel slides to the pointed area's IsoKit drawing; title block bottom right (Aquemi, Assessment, area, 03 / 06) | `review-reticles` / ReviewReticles |
| 4 how it runs | .4 horizontal double-line pipe, valves as stage gates, one hairline icon per stage | replaced: GateLine on navy. Each step owns a run of pipe, a gate valve on every joint, icon above, number/name/line below; hold gate tagged "Hold"; the cutover run is dry (dashed bore, "Planned shutdown") so pass 9's "your system's water breaks only at the shutdown" survives. CutoverSchedule deleted (only this page used it) | `gate-line` / GateLine (new) |

## Library ports
- animated-beam → ApprovalMerge: hover traces the request's route in ink (wire, then the bus to the stamp), stamp presses 0.97, trace fades a third faster.
- sentence-diff-motion → StrikeGaps: after the strike, the fix is inserted word by word (12 px, 260 ms, cubic-bezier(.22,.72,.15,1)), split reverted on landing.
- project-index → ReviewReticles: mouse pointing, focus or click on a register row slides the viewfinder reel (240 ms .2/.85/.25/1; instant for keyboard and reduced motion). Wired in the renderer, so it works under reduced motion.
- cue-scrubber → GateLine: hover seeks the water to the pointed step (runs ahead drain, their gates shut, nearest first). Wow moment = GateLine entrance: every gate starts shut and opens as the water reaches it, the water waits at the hold gate while the hold stamp strikes, the cutover run stays dry while its dashed bore prints. About 4 s, once; phones per step.
- Rows added to the "Ported so far" table in the motion-library SKILL.md.

## Fields and copy
- New optional fields: block 3 `code` per item (REC, WQD, GEN, S&D, SAN, CTL: drawing labels, aria-hidden); block 4 `icon` per item (magnifier, binder, pid, wrench, gauge). Block 4 `ground: "light"` removed (navy band now).
- Drawing words added as aria-hidden labels only: zone numbers/letters, title block "Aquemi" (+ nav name, area, index), gate tag "Hold", run label "Planned shutdown" (taken from the step's own line).
- No copy cut. No fact added.

## Phone
- StrikeGaps: side note under the headline. ReviewReticles: register alone, square viewfinder beside each row (zones and viewer dropped). GateLine: pipe runs down the left, valves turned with it, icon/number/name/line on the right; run label and gate tag dropped (the text says both).

## Checks
build; check: 0 problems in my components (9 remaining belong to other builders' in-progress components: FaultKnot, VisitPlan, CostSkid, PlanChecker, SpareSheet); check --budgets svc-upgrades: 0 overruns, 661 of 1300 words; motioncheck 1280 and 375: 0 errors, 0 hidden. Hover, focus and keyboard states verified with a Playwright script; GateLine filmed.

## Weak still / risks
- RetrofitPlant reuses `vpPlant()` from look-visit-plan.js (svc-service's look). If that builder renames or removes it, block 1 breaks: keep `vpPlant` or tell me.
- ApprovalMerge's trace and GateLine's seek are mouse only (decorative; all content is in the text).
- ReviewReticles renders each drawing twice (reel + phone viewfinder); preview.html is 74 KB.
