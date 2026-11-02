# Pass 9b build notes: ind-meddevice (blocks 0–3)

Reader: a device team working back from the device limit to the water grade. Blocks 4 (faq) and 5 (related) untouched.
Grounds down the page: surface (sheet) → limestone (drawing) → surface (tiles) → navy (manifold table).

| # | Block | Look / component | Concept | Decision | Library port |
| --- | --- | --- | --- | --- | --- |
| 0 | grades table | `derivation-sheet` / DerivationSheet | ind-meddevice.0 (weak-ish per log) | kept and polished: the bead mood plate does not encode the grades and adds nothing over the calculation pad | sliding-number (hero figures 20.0, 2.15 now roll on odometer wheels via `m.count`, replacing the hand count-up); hover re-runs a line's working (arrow, then implication, 0.2 s each) |
| 1 | prose explainer | `washer-trace` / WasherTrace (upgraded, same name) | ind-meddevice.1 followed | rebuilt to the concept: limestone sheet, one IsoKit drawing from the loop (pump, header, diaphragm valve, sample point drop) into the washer chamber; callouts 01 left, 02 and 03 right on leaders; navy readout top right with a route ruler, cursor, huge reached-point numeral and outlined tag (replaces the concept's invented 12.5 m3/h) | cue-scrubber: after the IsoKit build and one water run (stations light, readout ticks 01 → 03), pointing at or focusing a point seeks the water to it; the page's wow moment |
| 2 | grid (systems) | `standard-tiles` / StandardTiles (upgraded, same name) | ind-meddevice.2 followed | 3 + 3 grid: four slash-numbered navy/limestone link tiles with outlined tags, a navy blueprint tile, a flow-blue block | project-index: the pointed tile's system is drawn on the blueprint tile (IsoKit by icon) and its tag set large on the flow block; entrance diagonal wipe + odometer numerals |
| 3 | evidence table (auditors) | `audit-manifold` / AuditManifold (new; replaces reader-split) | ind-meddevice.3 followed | navy blueprint grid; twin-wall pipe headers as the two column joins, a branch with a diaphragm valve and flange into each row; fold (2 of 5) kept | process-choreography: one progress value fills header A, the branches, header B and lands each answer; hover/focus opens a row's valves and reruns its branches |

## Notes
- Deleted: `design-system/components/ReaderSplit/`, `assets/src/blocks/look-reader-split.js` (only this page used them).
- IsoKit has no washer part: the cabinet, chamber, baskets and spray arm are drawn inline in `look-washer-trace.js` from IsoKit primitives (`isoB`, `isoBoxD`, `isoPoly`), the chamber clipped to its opening. Candidate for the kit.
- WasherTrace no longer reads `figure` or the points' `at` (kept in the page file for the default renderer).
- StandardTiles drawings map from the existing `icon` field (ro-membrane, loop, conductivity, valve); no new fields.
- No copy cut, no new claim. Aria-hidden duplicates: the readout (point number and title), the blueprint tile and the flow block's tag. Polypropylene PW only: drawings show pump, header, valves, sample point, washer; no still, no WFI, no stainless.
- Readout and flow block show a repeated label, never a figure.

## Checks
- build, check: 0 problems; `check --budgets ind-meddevice`: 0 overruns, 455 visible words.
- motioncheck 1280 and 375: 0 errors, 0 hidden (blueprint layers clip rather than fade). No console warnings in film runs.
- Reviewed 1280 and 375, light and dark (sunken fills on the limestone band pinned to the limestone scale for dark), hover on all three ports, reduced motion (static: whole route, every callout, readout at the last point).

## Still weak
- Section 0 is the pass-9 look with motion polish only (concept weak).
- At 375 the manifold's gutter is narrow (valves small); the washer drawing is cropped to the equipment so the loop pipe runs off the left edge.
