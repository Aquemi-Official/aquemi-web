# Pass 9b build notes: svc-fat-sat

Files: `aquemi-web/content/pages/13-svc-fat-sat.json` (block 0 look and fields), `assets/src/blocks/look-versus-spread.js` (new),
`look-wet-run-hmi.js`, `look-test-sheet.js`, `look-witness-plan.js`, components `VersusSpread/` (new), `WetRunHmi/`, `TestSheet/`,
`WitnessPlan/`. Deleted: `look-twin-route.js` and `components/TwinRoute/` (no other page used `twin-route`).
Page rhythm: editorial spread (light, navy mast) / blueprint route (navy) / tactile paper (limestone) / flat plan (navy board).

## 0 "What FAT proves, what SAT proves": REPLACED twin-route with `versus-spread` (VersusSpread). Concept .0 followed.
- Navy mast bleeding off the left edge with the heading at display scale (light 300), nav label and "7 tests" on a hairline;
  the comparison as a numbered hairline table under it; one line drawing beside it (sticky): the installed system in
  elevation (skid with RO housings, pump, panel, outlet instrument, divert valve to drain, riser to the storage tank, loop
  with pump and two points of use, site utilities) with the test bay boundary (FAT) and the site boundary (SAT), tagged
  with the column labels. Drawn inline (flat elevation; IsoKit is isometric only).
- New field `row_parts` (parts each test covers). Pointing at / focusing a row lights its parts, the rest steps back;
  the conclusion row lights the FAT boundary; caption "03 / 07 Sanitization". Works under reduced motion.
- Motion: mast slides in, drawing draws, water runs skid piping, riser, loop; rows stagger. Then the page's one
  scroll-linked story: reading-lens port (focus line, strength falloff, spring band, position readout).
- Phone: mast full bleed, drawing (not sticky), rows stacked with FAT/SAT keys, fold at 3 (phones only).
- Copy cut: none. `route_labels` ("Route 1", "Route 2") dropped with the old look.

## 1 "Water finds faults a dry check misses": UPGRADED `wet-run-hmi` to concept .1.
- Navy blueprint: big light heading with the Dry check / With water switch beside it; one double-wall pipe across the
  section folding down and back up: feed, pump, RO, divert valve + drain (point 01), COND and TOC on the low run (02),
  the record logger on the last run (03). Points placed beside their stations; numbered markers on the stations.
- New optional fields `x`, `y` per point (text position). Up to a 1080 px container the route turns vertical (CSS pipe,
  numbers on it, water fills top down; empty when dry).
- Motion: walls and symbols draw, points rise, all dry; thumb springs to water (sliding-tabs port), water runs the
  route, markers light on arrival, readouts fill, trend draws. "With water" reruns it; "Dry" empties. Arrow keys switch.
- Copy cut: none.

## 2 "From protocol to release, then SAT": KEPT `test-sheet` (concept .2 and .2.v2 weak: an empty sheet with a
   meaningless routing diagram), polished.
- Signatures now ink over a faint pressed impression (signature-draw port); the SAT slip arrives attached at the
  perforation, is pulled and tears free (ticket-tear port); hover pulls it a little. Timeline 4.65 s.

## 3 "How you witness": KEPT `witness-plan` (no concept; quota), library motion and polish.
- Sliding indicator springs between the way cards (sliding-tabs); the board caption enters from the side of travel
  (transition-panel); arrow keys / Home / End move between the ways and choose.

## Checks
build + check: 0 problems. check --budgets svc-fat-sat: 0 overruns. motioncheck 1280 and 375: 0 errors, 0 hidden.
Reviewed 1280 and 375, light and dark, keyboard (rows, switch, cards), reduced motion (hover/focus states still work).

## Still weak
- The system drawing in section 0 is small next to the table at 1280 (4 of 12 columns); no drawing labels on parts
  (the caption names the test, not the part).
- Section 1 between 860 and 1080 px uses the vertical route (the horizontal composition needs width).
- Punch list still only in copy (step 4); signatures are generic scribbles.

## Requests
None filed.
