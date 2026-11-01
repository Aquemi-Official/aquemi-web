# Pass 9 build notes: ind-meddevice (blocks 0–3), round 2

Reader: a device team working back from the device limit to the water grade (a derivation). Blocks 4 (faq), 5
(related) untouched. No concept of their own (quota).

| # | Block | Look / component | Adapted from | Art direction |
| --- | --- | --- | --- | --- |
| 0 | grades (by step) | `derivation-sheet` / DerivationSheet | sys-pw.0 (numbers as heroes) on a calculation pad | engineering calc sheet, light |
| 1 | prose explainer (washer) | `washer-trace` / WasherTrace | compliance.3 (sticky drawing + rail), sys-pw.3 (hotspots) | navy plate, scroll story |
| 2 | grid (systems) | `standard-tiles` / StandardTiles | sys-pw.2 (Swiss tiles), home IndustryFeed (standard huge) | Swiss tiles |
| 3 | evidence (auditors) | `reader-split` / ReaderSplit | systems.2 (split seam), STYLE-ATLAS hybrid 4 | navy/limestone split |

## Notes
- DerivationSheet parses a "what sets it" cell that opens with a number + unit ("20.0 endotoxin units per device (USP <161>); tested to USP <85>") into hero number, unit, reference and rest; no new field, no words changed.
- WasherTrace: optional `figure.ratio` [w, h] (default the ind-meddevice drawing, 740 × 813). The water route between the three existing `at` points is drawn as piping (vertical, then across). Desktop: sticky drawing, points light as they pass mid-screen (ScrollTrigger), everything shown on phones, reduced motion and without JS.
- No copy cut. Decorative aria-hidden: title block "Aquemi · At the washer · 3 points", tile counts "01 / 04".

## Checks
- build, check: 0 problems in these components; `check --budgets ind-meddevice`: 0 overruns, 455 visible words.
- motioncheck 1280 and 375: 0 errors, 0 hidden. Scroll story checked step by step (step, hotspot and water stop per point). 1280, 375, dark reviewed.
