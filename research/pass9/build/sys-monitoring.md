# Pass 9 build notes: sys-monitoring (blocks 0–4)

Page file: `aquemi-web/content/pages/09-sys-monitoring.json`. Blocks 5 (faq) and the closing untouched. Server 8766.
No concepts of its own (Gemini quota): each section adapts an idea from the pool or the section's planned art direction
(`research/pass9/sections.json`, `dir`). Five new looks, one component each (README, style.css, preview.html with the
rendered section, motion.js). Neighbouring sections never share a direction; line art is in two sections (0 is a tonal
render with small equipment, 2 is the instrumented loop).

| # | Block | Look / component | Direction, concept adapted | Idea built |
| --- | --- | --- | --- | --- |
| 0 | diagram (architecture) | `layer-stack` / LayerStack | Soft render / exploded view; home.3 | Five machined plates exploded up and back (instruments bottom, plant network top), each carrying its equipment (analysers on a process pipe, PLC rack, operator panel, historian rack and drums, switch + firewall inside a dashed DMZ). The controller plate is navy (`key`: runs when every layer above fails). Data riser and per-plate traces; labels alternate right/left on leaders from plate corners. |
| 1 | table (alert, action, trend) | `hmi-trend` / HmiTrend | Live control-room HMI screen | The operator panel's own dark screen (`data-theme="dark"` in both themes): tab bar (Trends, Alarms, Sanitization), newest-alarm banner, lamp cluster; a trend plot with the specification, action and alert lines and one reading drifting up, flagged by the trend rule before any line; the alarm summary is the real table. One shape + colour + name per line. No values or units on the plot. |
| 2 | spec (sensors and signals) | `sensor-loop` / SensorLoop | Blueprint / P&ID instrument schedule; systems.3, sys-pw.3 | One instrumented loop in IsoKit (tank, pump, UV, TOC and conductivity analysers, divert with drain, two outlets, overhead return with flow meter, gauge, temperature wells), ISA balloons with the row number on every measuring point (temperature and flow on several), schedule cards above and below on leaders, dashed signal bus along the foot (data recording). |
| 3 | table as evidence (data integrity) | `clause-crosswalk` / ClauseCrosswalk | Editorial spread; industries.1, systems.3 | Requirements large down the middle; "21 CFR Part 11" and "EU GMP Annex 11 (2011)" set big and vertical as spines at the outer edges with every cited clause as a chip in clause order; a wire from each requirement to each clause on both sides. Hover a row or a clause. |
| 4 | options (modules) | `rail-modules` / RailModules | Macro detail with callouts (planned dir); tactile | Backplate close-up bleeding to both edges, a DIN rail across it, each option a large module clipped on (terminal screws, lamp, number, engraved Spot icon, name; Control panels is the link with an arrow), its line hanging on a leader under the plate; "Controls" as the nameplate. |

## Motion (one timeline each, once, < 5 s)
- LayerStack: plates arrive pressed together and lift apart lowest first; equipment settles; risers, axis, water in the instrument pipe; leaders draw, labels slide in; one packet rides the data route bottom to top, lighting each plate's leader and label as it passes.
- HmiTrend: screen opens from a centre line, tabs decode, lamps test; grid and limit lines run out with labels; the reading is written by a live pen; window shades, flag strikes, banner flashes twice, the trend row is flagged; live dot lands and pulses.
- SensorLoop: AQiso.timeline (equipment draws, water runs, stages light); balloons strike; leaders run card to balloon; cards print; bus and taps last.
- ClauseCrosswalk: regulation names slide along the edges, chips tick in; rows arrive one at a time and each one's wires run out to its clauses on both sides.
- RailModules: rail slides, nameplate decodes, modules drop and seat one by one, screws turn home, lamps test, leaders drop to the callouts.

## Content changes (page file)
- New optional fields only: `look` on blocks 0–4; block 0 `art` per stage (instruments, plc, hmi, historian, network) and `key: true` on the controller; block 1 `tabs` ["Trends", "Alarms", "Sanitization"] (the HMI stage's own words); block 2 `site` per row (toc, cond, temp, divert, flow, uv, data). Existing `at`, `as`, `icon` kept for the fallback renderers.
- Copy cut: none. Every row, link (compliance#limits, compliance#engineering), placeholder, fold and note kept. Block 2's caption stays the eyebrow, as SpecTable prints it.
- Folds: blocks 2 and 3 show every row on desktop (the drawing and the wires need them all); the fold applies on phones, as ParamTiles does.

## Drawn inline (not in IsoKit; candidates for the kit)
- LayerStack: plates, PLC I/O rack, HMI screen on a pedestal, server rack, database drums, network switch, firewall, DMZ boundary.
- SensorLoop: ISA instrument balloons, flow meter body, temperature wells, signal bus.

## Checks
- `check`: 0 problems from these five components (the remaining problems belong to other builders' in-progress components). `check --budgets sys-monitoring`: 0 overruns (550 visible words).
- motioncheck 1280 and 375: 0 errors, 0 hidden. No horizontal page scroll at 375 (LayerStack's svg is cropped inside its figure). Light and dark reviewed.

## Weak / open
- SensorLoop on phones: the whole loop at 343 px is small; balloons are enlarged but the equipment reads as texture. The cards carry everything.
- LayerStack label positions are computed from the plate corners for five stages of about this length; much longer copy would need the label width or plate step retuned.
- HmiTrend's plot is illustrative (no values): it shows the order of the lines and the drift being flagged, never a reading.
- Hover highlights are mouse-only decoration (focus lights HMI rows and links); all content is visible without them.
