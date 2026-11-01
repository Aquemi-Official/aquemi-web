# Pass 9 build notes: svc-service (blocks 0 to 5)

Round 2, server 8768. Blocks 6 (faq) and 7 (related) untouched. No Gemini concept of its own: ideas taken from the pool
(named per block). Grounds: navy, surface, sunken, limestone, surface, navy. Blueprint line art only in block 3.

| Block | Look / component | Concept adapted | Art direction |
| --- | --- | --- | --- |
| 0 plans (table as plans) | `plan-sheets` / PlanSheets | 47-concept-plan-tiers | navy + limestone: plans as calibration sheets side by side (ruled scale strip, sheet number 72 px light, "Suits" row as the sheet's headline), labels down the navy, row hover lights across sheets |
| 1 running cost (spec) | `cost-balance` / CostBalance | systems.2 (items pinned either side of a boundary) | flat Swiss diagram: a mass balance, costs wired into a dashed system boundary with the train as line glyphs, water to drain wired out |
| 2 calibration (spec) | `tolerance-scales` / ToleranceScales | sys-pw.2 + atlas "Swiss readout grid" | data viz: acceptance set large and light (± 2 %, 85 % to 115 %) over a ruler with nominal line and acceptance band; conductivity row leads on a raised panel |
| 3 visits (grid as route) | `visit-plan` / VisitPlan | 56-concept-visit-route | light blueprint sheet (IsoKit): the whole plant, the technician's walk as a dashed floor route with numbered stops, cards under the sheet |
| 4 like for like (table) | `spares-kit` / SparesKit | sys-pw.4 (objects laid out flat) | tactile: a spares tray / shadow board, each part drawn flat in its pocket, "=" / "≠" / "→" rules under it |
| 5 faults (steps) | `response-clock` / ResponseClock | services.1 (nodes on a line) bent round a dial | instrument: stopwatch dial with a station per step, running arc from triage, steps with huge light numbers |

## Motion
- PlanSheets: sheets dealt one after another (columns rise, fields print), scale strips run out, numbers decode. ~2 s.
- CostBalance: boundary, water down the train, glyphs seat; streams arrive one by one (wire runs, arrowhead lands); water leaves to drain. ~3 s.
- ToleranceScales: per row: ticks run out, nominal drops, band opens from nominal to limits, limits strike, figure rises. ~1.4 s/row.
- VisitPlan: AQiso builds the plant and runs the water; a flow dot walks the route (MotionPath), each stop strikes, its parts light, its card prints. < 5 s. Hover/focus a card lights its stop and parts.
- SparesKit: pockets show, each part drops into its pocket and settles, rules rise. ~2.5 s. Hover lifts a part.
- ResponseClock: case draws, ticks turn in, the hand sweeps through each station (station strikes, step rises), running arc appears at triage, hand rests on triage. ~3.5 s. Hover/focus a step turns the hand to it.
- motioncheck 1280 and 375: 0 errors, 0 hidden.

## Copy
No copy cut. No fact added. New optional fields (documented in the READMEs): block 1 row "Water to drain" `side: "out"`;
block 3 items `part` (panel toc, pre, gen, uv, loop tank, wear, report). Drawing furniture added as aria-hidden UI words
only: "Sheet 01 / 03" on the plan sheets, "Key" on the tray. Spot icons of block 3 are not drawn (the plant replaces them).

## Phone
PlanSheets: sheet tabs pick one plan, the sheet runs full width with mono labels over values. CostBalance: one rail,
streams in, boundary (train across), streams out; fold applies here only. ToleranceScales: name over readouts, rulers
full width. VisitPlan: no big sheet; dashed walk down the left, each stop a row with its stage drawn small. SparesKit:
one pocket per row (fold here only). ResponseClock: dial at 72 % above the list.

## Kit / shared
- The plant scene `vpPlant()` lives in look-visit-plan.js and is reused by look-retrofit-plant (svc-upgrades).
- Drawn inline (not in IsoKit): the walk and stop pins (VisitPlan); flat top-down spares (membrane element, probe and
  transmitter, memory card, gasket and diaphragm, EDI module, UV lamp, vent cartridge) in SparesKit.
- No shared files edited, no shared requests.

## Weak still
- The visit sheet is wide and short (1080 x ~300); at 1280 the equipment is small. Stops 05 and 06 sit close together
  (loop end and the return valve).
- SparesKit drawings are modest in size inside their wells.
- ResponseClock station spacing is even over 300° (no times exist, so it shows sequence, not durations).
