# Pass 9b build notes: svc-service (blocks 0–5)

Server 8769. Page file `aquemi-web/content/pages/15-svc-service.json`: looks changed on blocks 0–5, one new optional
field `part` on the running-cost rows (panel, gen, pre uv, drain, pump, soft). FAQ, related and closing untouched.
Removed (used only here): looks plan-sheets, cost-balance, tolerance-scales, spares-kit, response-clock (renderers and
component folders).

| # | Block | Decision | Look / component | Concept idea built | Motion / library port |
| --- | --- | --- | --- | --- | --- |
| 0 | table as plans | replace | `plan-checker` / PlanChecker | svc-service.0: limestone band, four plan columns as alternating navy/limestone tiles, head tile with a huge light "01/" numeral, name and who it suits; terms tile below (price largest, label in mono under each value), terms aligned across plans by subgrid; per-plan button kept | diagonal checker wave (clip-path tiles), numerals on the odometer (sliding-number); pointing at a term lights it in every plan |
| 1 | spec (running cost) | replace | `cost-skid` / CostSkid | svc-service.1: one PW skid in IsoKit (softener + brine, carbon, RO rack, EDI, pump, UV, panel on a base frame, reject line to drain) right of the title, numbered leaders from the parts; the three-column table under it led by the same numbers | IsoKit choreography, then each row is wired in (number strikes at its part, row prints, parts light); hover/focus a row lights parts, leader, number (AQiso.light) |
| 2 | spec (calibration) | replace by reuse | `signal-dial` / SignalDial (sys-monitoring's) | svc-service.2 is the same idea as sys-monitoring.2 (table beside a tick-ring dial with an outlined tag), so the existing look is reused unchanged; note kept | camera-wheel (already ported): rows turn the bezel, the dial is a slider |
| 3 | grid as route | upgrade | `visit-plan` / VisitPlan | svc-service.3: the band turns navy (IsoKit `aq-iso--navy`, no sheet frame), the checks become captions along the base of the band on hairlines, the signed report closes the band as one limestone line ("Signed report: As-found, …") | kept (plant builds, water runs, walker dot visits stops); back.out ease replaced by power3.out |
| 4 | table (like for like) | replace | `spare-sheet` / SpareSheet | svc-service.4: limestone drawing sheet (double border, title block "part · Part 01 / 07"), one spare drawn large and dimensioned (centre line, A and B dimensions, balloon); the four-column table restored under it with numbered column notes 1–4; choosing a row draws its part | first part inks in with its dimensions while rows print; choosing another row redraws it (0.7 s, repeats) |
| 5 | steps (faults) | replace | `fault-knot` / FaultKnot | svc-service.5: limestone section with a navy field at left; the huge light title crosses the split (on-navy twin clipped to the field); a knotted twin-wall pipe in a framed grid at right; five "01 / Call" steps across the foot, the call on the navy | shape-morph port: pointing at/focusing a step morphs the knot to that step's tension (CSS d transition); the page's one scroll-linked story: the knot loosens with scroll and runs straight at "water back within limits", water runs once |

- Wow moment: the knot untangling (scroll story + hover). Better moments: the checker wave, the skid wiring its cost
  rows, the drawing sheet redrawing parts, the calibration dial.
- Grounds: limestone band → surface → sunken (dial) → navy band → surface with a limestone sheet → limestone/navy split.
  Blueprint-like line art: blocks 1 (light) and 3 (navy), different directions; 4 is a flat part drawing.
- Copy: nothing cut, nothing added. Recast only: block 3's last item reads as one line (a colon after its name, CSS);
  aria-hidden drawing furniture: numbers on the skid, "A"/"B" dimension letters, the title block ("Part 01 / 07"),
  the step numbers "01 /". The calibration row highlight (`hl`) is no longer shown (SignalDial ignores it).
- FaultKnot claims its own heading (the core word reveal is rerun on heading and twin together, same timing) so words
  stay whole across the colour split.
- Phone: plans as numeral tabs (one plan's tiles full width); skid full width with numbers, rows stacked; dial above
  the rows; visit captions as a dashed walk with small stages, closing line last; sheet drawing over stacked rows;
  faults with the split running horizontally through the title's second line, knot under it, call step a navy row.
- Checks: build; check 0 problems; check --budgets svc-service 0 overruns (651 visible words); motioncheck 1280 and
  375: 0 errors, 0 hidden. Light, dark (cost skid and dial follow the theme; plan, sheet and faults are limestone in
  both), keyboard (plan tabs, cost rows, dial rows, captions, part buttons, steps focusable with visible focus),
  reduced motion (static knot; a pointed step changes it at once).
- Request filed: ResponseLanes and TimeCard READMEs name the removed PlanSheets (requests.md).

## Still weak
- The knot's crossings merge (one path, no over/under), so it reads as a tangle of fused pipe rather than a true knot.
- The scroll story finishes when the section top passes about 130 px above the viewport; on tall phones the reader
  may see it already straight.
- Spare drawings are the pass-9 flat art scaled up; the membrane is long and thin, so the dimensioned drawing is
  wide and low and leaves space on the sheet.
- Plan tabs on phones carry the long placeholder names in small mono chips.
- SignalDial prints "CH 01 / 04" (its own channel wording) on the calibration dial.
