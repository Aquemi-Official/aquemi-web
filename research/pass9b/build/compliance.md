# Pass 9b build notes: compliance, section 4 only

Builder: pass 9b compliance.4, server 8769. Sections 0–3 (LimitBento, StandardsOrbit, ProofFolders, CutawayRail) and 5–6
untouched.

## 4 "Engineering, materials and pressure equipment": replaced PipeCollage with SkidTags (look `skid-tags`)

- Concept `research/pass9b/concepts/compliance.4.png` followed closely: limestone sheet, heading left in light type,
  skid elevation right with five numbered square navy tags on leaders, the four-column standards table full width
  below with the same numbers in its first column. PipeCollage (pass 9's stand-in adapted from industries.2, used only
  here) is deleted: renderer `assets/src/blocks/look-pipe-collage.js` and `design-system/components/PipeCollage/`.
- Drawing: elevation drawn inline in the renderer (IsoKit is isometric; no elevation parts): base frame with feet and
  floor line, pressure vessel with nameplate and gauge, centrifugal pump, two vertical pressure housings, polypropylene
  pipe runs as fitted pieces (straight lengths + elbow fittings, joints visible) with the water as one flow centre line,
  a branch to a diaphragm valve with its length dimensioned "L", a broken-out length of product-contact pipe showing
  the wall, a fusion bead on a joint, the control panel with HMI and a label plate, product line out to the loop.
  No stainless finish, no still, no WFI.
- Row → part, only where the row's own copy ties it (new field `parts`): CSA B51 → vessel ("vessel data reports"),
  [panel standard] → panel label plate ("Panels built and marked"), [PP piping standard] → valve branch / dead leg
  ("PP pipe, fittings and valves; dead legs ≤ [L/D]"), [PP material standard] → product-contact pipe wall
  ("Unpigmented product-contact PP"), [PP joining standard] → fusion joint ("Joints by [PP joining method]").
  New field `tag` ("On the drawing"): UI wording, names the number column (visually hidden) and the tag group.
- Library port: atlas-hotspots ("Inside the image"). Tags, row numbers and rows share one selection: a tag or number
  press, row hover or focus (also a StandardsOrbit chip landing on the row) presses tag and number (112 %, 180 ms),
  turns the part and its leader flow, edges the row in flow, and glides a crosshair ring to the part (full-size layer
  translated, 250 ms cubic-bezier(.2,.8,.2,1)). Arrows / Home / End step through tags or numbers. Lives in the
  renderer + CSS, so it works under reduced motion (instant). Phones: an aria-live readout under the drawing names the
  chosen row (number, standard, what we design to), since the table and its fold are far below.
- Entrance (SkidTags/motion.js): the elevation is plotted stroke by stroke in drawing order, the water runs the three
  runs in flow order, then tags 01–05 in turn (dot, leader draws out, tag set), ring last; table rows rise 80 ms apart.
  Both once, under 3 s.
- Phone: heading, drawing (tags stay 44 px targets, ≥ 45 px apart), readout, rows as cards led by their number, column
  names in mono; fold 2 applies on phones only (desktop shows all five rows).
- Copy: no cuts, no new claims. Table cells verbatim.

## Checks
- `build`; `check`: 0 problems from my files (the 7 reported belong to the parallel ind-cdmo build: TieInRun tokens,
  AuditSkid / DuplexTrains / IndexSheet / TieInRun previews). `check --budgets compliance`: 0 overruns, 541 words.
- motioncheck compliance 1280 and 375: 0 errors, 0 hidden. No horizontal scroll at 375 / 1280 (the ring layer is
  clipped by `__crossbox`), no text under 12 px. Keyboard: tags and numbers reachable, arrows/Home/End verified;
  chip from StandardsOrbit lands on the row and lights its tag. Dark theme: band keeps `data-theme="light"`.

## Still weak
- The drawing is small on phones (343 px wide); tags 03 and 04 sit close (45 px apart).
- The broken-out pipe wall (04) reads as a darker pipe length rather than a hatched section at this scale.
- Elevation parts could join IsoKit as an elevation set if more sections need front views.
