# Pass 9b build notes: sys-monitoring (blocks 0–4)

Server 8769. Page file `aquemi-web/content/pages/09-sys-monitoring.json`. FAQ and closing untouched.

| # | Block | Decision | Look / component | Concept idea built | Library port |
| --- | --- | --- | --- | --- | --- |
| 0 | diagram | upgrade | `layer-stack` / LayerStack | sys-monitoring.0 (take 1): title huge and light on a navy field, cropped by a limestone sheet that runs off the right and bottom edges and holds the architecture with numbered callouts. Kept the exploded isometric stack (stronger than the concept's block diagram) as the sheet's figure. | exploded-camera: pointed callout or plate lifts its plate (600 ms) and lights both |
| 1 | table | keep (log: concept weak) | `hmi-trend` / HmiTrend | Unchanged; FxPhosphor placement and its pen-tied reveal untouched. Concept (table + leaders into a soft-3D skid) does not show the levels as lines; the HMI screen does. | (FxPhosphor, phosphor-trace, pass 9b shader builder) |
| 2 | spec | replace | `signal-dial` / SignalDial (new) | sys-monitoring.2: the instrument schedule as a real table beside one multi-channel transmitter dial: tick bezel with a numbered stop per signal, fixed index, channel number large and light, name, limit line, design value, basis on an outlined tag. No invented reading: the face shows the chosen row's own cells. | camera-wheel (dial = slider: drag, keys, snap; rows turn it), quote-tick (readout swap), sliding-number (channel roll on entrance) |
| 3 | table (evidence) | keep | `clause-crosswalk` / ClauseCrosswalk | Concept (clause table on navy with row leaders into a skid) would pin data-integrity controls to hardware they don't live on: contrived leaders. The live crosswalk already carries the 4-column content as a stronger picture. | none new |
| 4 | options | replace | `option-checker` / OptionChecker (new) | sys-monitoring.4: checkerboard field of navy/limestone/sunken squares with one navy blueprint tile (panel, PLC, screen, historian, DMZ with one-way exit, plant bus), "Options" large in the top cell, 2 + 3 cells under huge light slash numerals. Each option lights its part in the blueprint (new optional field `part`). | shutter-scene (squares open as a diagonal wave), sliding-number |

- Removed (no other page used them): SensorLoop and RailModules (renderers and component folders). Block 2's `site` fields dropped (only SensorLoop read them); `as`, `base` kept for the fallback renderers.
- Copy: no cut, no new text except the dial's aria-hidden hint "Turn the dial or pick a row" (UI instruction) and "CH" on the dial face.
- Wow moment: the signal dial (turn it, drag it, or run down the table). Other better moments: the editorial navy/limestone opener with lifting plates; the shutter-wave options grid with live blueprint.
- Phone: title on navy then full-width sheet; dial (320 px) above stacked rows (fold at 5 kept, phones only); checker field two rows over stacked cells.
- Checks: build; check 0 problems from these components (6 left belong to DocPipe, MembraneAtlas, TankTiles, LoopCircuit); budgets 0 overruns (555 words); motioncheck 1280/375 0 errors, 0 hidden; light, dark, 375, keyboard (dial keys, row focus, option link focus) and reduced motion (CSS transitions off) checked.

## Still weak
- OptionChecker's field tiles are not square at 1280 (they stretch to the body's height); the limestone tiles stay light in dark mode by design.
- LayerStack's headline overlap depends on the title breaking after "controls" (max-width 7.6 em); a much longer title would need the width retuned.
- ClauseCrosswalk still reads as spaghetti until hovered (unchanged from pass 9).
