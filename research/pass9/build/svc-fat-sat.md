# Pass 9 build notes: svc-fat-sat (round 2, no concepts of its own)

Builder files: `aquemi-web/content/pages/13-svc-fat-sat.json` (blocks 0-3; faq and related untouched),
`assets/src/blocks/look-twin-route.js`, `look-wet-run-hmi.js`, `look-test-sheet.js`, `look-witness-plan.js`,
`design-system/components/TwinRoute/`, `WetRunHmi/`, `TestSheet/`, `WitnessPlan/` (style.css, README.md, preview.html, motion.js).
Page character: the test bay. Art directions alternate: iso line art (light) / HMI screen (dark) / tactile paper (limestone) / flat plan (navy).

## 0 "What FAT proves, what SAT proves": look `twin-route` (TwinRoute)
- Adapted from systems.2 (our side vs your side) and home.0 (one water line through real equipment).
- FAT and SAT as two routes: IsoKit scenes on top (test bay: feed tank, skid with RO rack and panel, outlet analyser to drain;
  your site: clean-room wall, skid, storage tank, loop to a point of use), the truck in the centre column. Under each scene its
  route runs down as a twin-wall pipe; each test is a station on both pipes, test name large in the middle. "Not possible: …"
  breaks the FAT pipe (dashed, no water, open node with a cross). Conclusion: both routes turn in to a navy "Reuse in IQ/OQ".
- New field: `route_labels` ["Route 1", "Route 2"] (eyebrows). Fold: phones only.
- Motion: test bay draws and water runs, truck drives across, site draws and water runs; each row's water runs FAT then SAT
  pipe to its nodes as it scrolls in; turns draw and the reuse label strikes. Hover swells a row's nodes.
- Phone: scenes side by side, two thin rails down the left, each result keyed "FAT, our test bay" / "SAT, your site".
- Copy cut: none.

## 1 "Water finds faults a dry check misses": look `wet-run-hmi` (WetRunHmi)
- HMI-screen direction; sys-pw.3's hotspots-to-cards idea. The test bay's operator screen: flat mimic (feed, pump, RO, COND and
  TOC elements, three-way divert to outlet or drain, the data record with trend). A two-position switch (Dry check / With water,
  real buttons, aria-pressed): dry = empty lines, blank readouts, unlit findings; with water = water runs, readouts trace,
  findings light. The three points are the alarm list; each has a marker on its part (divert, outlet, record).
- New fields: `modes` ["Dry check", "With water"], `part` per point. `at` and `figure` kept for the fallback renderer.
- Motion: screen wipes on dry, then flips to water: the water runs the pipe in order, readouts fill, trend draws, markers light
  in turn. Ends wet (as without script). Hover/focus on a point swells its marker.
- Phone: heading, screen, list; drawing labels hidden, HTML markers kept. The illustration (svc-fat-sat.webp) is no longer
  used in this section (it stays in the hero).
- Copy cut: none.

## 2 "From protocol to release, then SAT": look `test-sheet` (TestSheet)
- 53-concept-hold-points (stamped hold boxes, sign lines), recast as a tactile protocol sheet on a limestone table so it
  does not repeat services' hold-timeline. Ruled rows, 40 px mono step numbers, a tick box per step; hold steps carry a flow
  signature, "Signed by …" and a struck HOLD stamp; the SAT step is torn off below a perforation (it happens on site); title
  block "Aquemi · Process · 6 steps".
- New fields (optional, unused here): `cols`, `hold_label`, `tear`.
- Motion: paper slides on; rows run in turn (number decodes, text rises, tick draws); at hold points the signature writes and
  the stamp strikes; the torn slip drops last. Phones: per row.
- Copy cut: none. "Hold" became "Hold point · Signed by …" (as services).

## 3 "How you witness": look `witness-plan` (WitnessPlan)
- Flat top-down plan of the test bay on navy (walls, door, skid with four membrane housings, panel with its door open, remote
  strip outside the wall). Each way is a button card; choosing (press or point) puts its actors on the plan: you at the panel,
  your delegate at the skid, cameras with fields of view, the remote screen, the raw data and video package leaving by the door.
- New fields: `zones` ["Our test bay", "Remote"], `scene` per item (you / camera screen / you camera screen / delegate / record).
- Motion: walls draw from the door, equipment draws, the plan steps through the five ways (0.55 s each) and rests on the first.
- Phone: plan on top, cards below; zone labels hidden.
- Copy cut: none. Intro placeholders kept.

## Checks
- build + check: 0 problems from these files (others' remain). check --budgets svc-fat-sat: 0 overruns.
- motioncheck 1280 and 375: 0 errors, 0 hidden. Light, dark, 375 reviewed.

## Weak spots
- TwinRoute scenes do not physically connect to the rails below (the route pipes start under the labels); the FAT cap rail
  starts a little higher than the SAT one.
- WetRunHmi mimic is small on phones (markers close together); its trend is a flat illustrative line.
- Punch list closing (from the page brief) only appears as copy in step 4; no punch-list visual.
- Test sheet signatures are generic scribbles.

## Shared requests
None. IsoKit lacks a plan-view vocabulary (WitnessPlan drew its plan inline) and an HMI mimic set (WetRunHmi drew flat symbols inline).
