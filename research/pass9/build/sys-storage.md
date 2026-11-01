# Pass 9 build notes: sys-storage (blocks 0–5)

Server 8769. Page file `aquemi-web/content/pages/07-sys-storage.json`; block 6 (faq) untouched (site-wide). No concepts
of its own (Gemini quota): every section adapts an idea from the pool, with the tank and loop as the page's hero
object. Six new looks, one component each (README, style.css, preview.html from the live section, motion.js); no
sys-pw look reused, so the page has its own character. Art directions down the page: Swiss rule sheet (light) → HMI
screen (dark) → bento (light) → blueprint (navy, the page's one blueprint) → tactile exploded sheets (light) →
isometric on limestone.

| # | Block | Look / component | Adapted from | What it became |
| --- | --- | --- | --- | --- |
| 0 | spec (rules) | `rule-figures` / RuleFigures | sys-pw.2 Swiss tiles, compliance.0 bento, brief "turbulent flow visualised" | Lead rule (Flow regime) as a full-width band: big number, name, rule in mono, beside a pipe cut lengthways with turbulent streaks, eddies and the flat 1/7-power velocity profile, bleeding off the page. Six rule cards, each with its own engineering figure: falling run to a low-point drain with slope triangle; branch with L and D dims; loop with thermometer at the coldest point; zero-static POU valve on the main; tank head with vent filter; return with CE/TE/FE bubbles and a dashed AE (TOC, standard or option). |
| 1 | diagram | `loop-circuit` / LoopCircuit | brief "loop drawn as a circuit", sys-pw.1 numbered stops, compliance.3 active part | The loop's own HMI screen on a dark navy band: tank in section (level, spray ball jets, vent filter), generation feed, pump and exchanger symbols, loop out and back past four POU valves and the return sensors, home through the spray ball; numbered tags; seven stage columns under the screen; hover a column lights its tag and part. |
| 2 | table (sanitization) | `method-bento` / MethodBento | compliance.0 bento | Hot water as the wide navy tile with a thermometer rail (solid to 65 °C, dashed to 80 °C, dotted past); chemical (dosing point, sanitant dispersing, residual test tube) and UV (chamber, sleeve, rays) as drawn paper tiles; ozone as an empty dashed tile with its name in outline and the intro sentence. |
| 3 | spec (callouts) | `tank-section` / TankSection | brief "cross-section of the tank", industries.3 callout plate | Navy blueprint of the tank cut in half: hatched PP wall, water, spray jets, nozzles, vent filter, outlet with butt joint, H and ID dims, details A (internal surface roughness) and B (fused joint, double bead); six balloons and leaders to labels on hairlines; the other four rows in a parts schedule (real table); title block. |
| 4 | docs | `sheet-stack` / SheetStack | compliance.2.v2 clipped sheets, brief "layers explode apart" | Four isometric drawing sheets stacked on a dashed axis, each a miniature of its document (calc bars past a limit line, register of tees, P&ID, certificate with seal) and its code in a title block; rows beside them; hover lifts a sheet. |
| 5 | options | `loop-dock` / LoopDock | industries.3 one machine, callouts per part | IsoKit loop on limestone: tank (base), module skid (pump, exchanger, analyser), UV on the supply, two outlets, a small exchanger as the POU cooler, overhead return; numbered markers on UV, cooler and module; three cards beside it, hover/focus lights the parts. |

## Motion (one timeline each, once, < 5 s; nothing under reduced motion)
- RuleFigures: walls draw, streaks run through, eddies curl in, profile arrows shoot out, envelope traces; streaks flow as a dash 3 s and stop. Cards land with figures drawing on, numbers decode.
- LoopCircuit: screen powers on, pipes and symbols draw, water runs feed → tank (level rises) → pump → exchanger → POUs → sensors → spray ball (jets open), a droplet on a MotionPath; tags and columns light on arrival; 1 s dash run, stops.
- MethodBento: navy tile wipes open, bulb fills, heat runs up the rail, marks drop as it reaches them; paper tiles rise and draw; sanitant dots disperse; UV rays flicker on; ozone outline slides in last.
- TankSection: drawn like a draughtsman: outlines, hatching, nozzles, level rises, jets open, details strike out, leaders run, balloons pop, labels slide in; schedule follows.
- SheetStack: one pile in the middle explodes apart to the rows, axis draws, miniatures draw, rows slide in, codes decode.
- LoopDock: AQiso.timeline; markers drop as the water reaches their part; cards slide in.

## Content (page file)
- New optional fields only: block 0 rows `fig`; block 2 `figs`, `scale {row, marks [{v, l}]}`, `absent`; block 3 rows `part`; block 5 items `part`; `look` on blocks 0–5. Existing fields (`at`, `fold`, `as`, links, anchors, nav) kept.
- Copy cut: none. Recast for drawing labels only (cells unchanged): scale marks "65 °C · Needs an engineer's review" (from "≥ 65 °C needs an engineer's review") and "80 °C · Not for routine use at loop pressure" (from "Not for routine 80 °C at loop pressure"). The sanitization intro moved from the head into the ozone tile (same sentence). Decorative aria-hidden furniture: screen bar ("Storage and distribution loops · 7 stages"), title block ("Aquemi · Fabrication · Polypropylene · Section A–A"), drawing letters (L, D, CE, TE, FE, AE, H, ID, A, B).
- Folds: all four looks with folds apply them on phones only (desktop shows every row); TankSection folds only the schedule rows.

## Drawn inline (not IsoKit)
RuleFigures' figures, LoopCircuit's HMI mimic, MethodBento's drawings, TankSection's section and SheetStack's miniatures are flat line art on purpose (schematic / section / explanatory views, not isometric equipment). LoopDock uses IsoKit only.

## Checks
- build + check: 0 problems from these six components; `check --budgets sys-storage`: 0 overruns (693 visible words).
- motioncheck 1280: 0 errors; the only hidden items are in the closing band (`aq-closing__doc`, `aq-closing__t`, not mine); 375: 0 errors, 0 hidden. No horizontal overflow at 375; my text ≥ 12 px. Light, dark, 1024 and 375 reviewed.

## Weak / open
- LoopDock's POU cooler is a small IsoKit exchanger behind the second outlet; it reads, but weakly.
- RuleFigures' lead pipe is cropped by width (`slice`); the velocity profile is placed to stay visible from 375 to 1280+.
- Hover highlights (LoopCircuit columns, LoopDock cards, SheetStack rows) are colour-only extras; everything is visible without them.
