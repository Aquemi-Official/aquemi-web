# Pass 9b build notes: svc-cq

Files: `aquemi-web/content/pages/14-svc-cq.json` (blocks 0, 2, 4), `assets/src/blocks/look-stage-tiles.js` (new),
`look-cut-band.js` (new), `look-signature-blocks.js`, `look-walkdown-pins.js`, `look-pq-calendar.js`, components
`StageTiles/` (new), `CutBand/` (new), `SignatureBlocks/`, `WalkdownPins/`, `PqCalendar/`. Deleted (no other page used
them): `look-binder-tabs.js` + `components/BinderTabs/`, `look-instrument-limits.js` + `components/InstrumentLimits/`.
Page rhythm: Swiss tiles (navy/limestone) / navy forms / light sheet + table / limestone readout / light ground with a
navy band.

## 0 "What each stage proves": REPLACED binder-tabs with `stage-tiles` (StageTiles). Concept .0 followed.
- Heading in a navy band over four tiles, 05 beside it and 06 under it (five-column subgrid); tiles limestone, navy,
  navy; huge light mono "01/" numerals with a muted slash; IQ tile carries a blueprint pipe run (twin walls, fusion
  joints at the bends, flow arrows, title block) because IQ checks the drawing.
- New field `art: "piping"` on the IQ item. `label` shows only where the name does not contain it (only "FAT · SAT").
- Motion: tiles wipe up in reading order, numerals roll in glyph by glyph (text-roll port), pipes draw, water creeps;
  hover/focus rolls a numeral again. Phone: one column, numeral beside the words; under 1080 px a 3-column grid.
- Copy cut: none.

## 1 "Who writes, who reviews": KEPT `signature-blocks`, polished (concept .1 / .1.v2 table-only, log says weak; its
  zone border and invented doc code add nothing).
- Reviewer's signature line now carries a signature inked over a faint impression (signature-draw port); taller line.

## 2 "IQ and OQ on site": UPGRADED `walkdown-pins` to concept .2.
- Table left (column head from `cols`; number, IQ/OQ tag + check, what we verify, basis), IsoKit sheet right (sticky).
  Navy map pins became small ruled number markers; four parts carry leader callouts with their names.
- New field `labels` {joint: "Loop joint", analyzer: "Conductivity", coldest: "Coldest point", skid: "PP modules"}.
- Pointing/focusing a row lights part, marker and callout. back.out bounce removed (markers strike, power3.in).
- Under 1080 px sheet above table; phones drop column head and callouts. Not followed: the concept's navy mat around
  the sheet (it would merge with the navy section 1 above).

## 3 "PQ in three phases": UPGRADED `pq-calendar` to concept .3.
- Phases as a "01 /" numbered stack; readout panel with 336 as the one giant light numeral (168 px), unit and sum,
  the 12 x 28 sampling grid (hold line), and the year as a tick scale (52 week ticks) with the "12 months" tag.
- Pointing/focusing a phase shows a region marker with edge handles over its days and weeks (region-splice port);
  arrows/Home/End step phases. Count rolls on the odometer (m.count), grid fills, ticks rise. back.out removed.
- Dropped from pass 9: the zoom wedge and the hatched year bars (the tick scale replaces them).

## 4 "Alert levels come from your data": REPLACED instrument-limits with `cut-band` (CutBand). Concept .4 followed.
- Light ground, heading top left, a hairline elevation at right (panel, RO rack, tank, header, loop, points of use
  with sample valves); a full-bleed navy band crosses its middle carrying the two-level table (≤ 100 CFU/mL as a mono
  figure, basis lines, compliance#limits link kept, CFU note kept).
- Motion: drawing draws and water runs; then a navy occluder crosses the page and the band switches on under full
  cover (foreground-occlusion-wipe port); the figure rolls. Phone: drawing under the heading, band rises over its foot.
- Removes pass 9's weak spot (illustrative recorder points that could read as data).

## Checks
build + check: 0 problems from these files (others' components in progress report 7). check --budgets svc-cq: 0
overruns (574 visible words). motioncheck 1280 and 375: 0 errors, 0 hidden. Reviewed 1280 / 375, light and dark.

## Still weak
- Stage tiles: tile 01 has a large empty middle (as in the concept); the pipe drawing is small at 1280.
- Walkdown callout names sit on the sheet margin and can touch the zone furniture; markers 06/09 sit side by side.
- CutBand: the drawing is decorative (its sample valves are the only meaning); on phones the band hides its lower half.

## Requests
None filed.
