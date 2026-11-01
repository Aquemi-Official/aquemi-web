# Pass 9 build notes: sys-pw (sections 0–4)

Page file: `aquemi-web/content/pages/03-sys-pw.json`. Blocks 5 (faq) and 6 (related) untouched.
Five new looks, one component each (README, style.css, preview.html with the real rendered section, motion.js).

| # | Block | Look / component | Concept idea kept |
| --- | --- | --- | --- |
| 0 | spec (limits) | `limit-stack` / LimitStack | Editorial type stack: display-scale heading with the caption beside it, rows stepping down and in, limits huge in Geist Mono, references on hairlines running to the drawing; sculpted outlet pipe (IsoKit, r 15, one and a half coil turns) with a navy collar lettered "Guaranteed" (skewY 30° onto the iso face); the guaranteed outlet row is the boxed last step. Limestone sheet; drawing sticky beside the stack. |
| 1 | diagram (how it works) | `winding-route` / WindingRoute | Navy band, one limestone pipe winding high/low through seven stops, glyph on the far side of each curve, feed fan in and outlet fan out, gas bubbles over CO₂ removal, "01 / Feed" mono codes over columns. |
| 2 | spec (design parameters) | `param-tiles` / ParamTiles | Swiss grid on a navy field: huge 01–10 numbers with slash, mono values, basis under a hairline, capacity as the wide navy lead tile, one 2 × 2 blueprint cell (IsoKit skid, RO rack, EDI, panel on an iso sheet). |
| 3 | docs | `doc-hotspots` / DocHotspots | The page's skid drawing (limestone on navy) with hotspots on the parts each document covers, leaders out to limestone document cards ("01 / FAT & SAT" codes), hover lights hotspot and leader. |
| 4 | options | `option-tags` / OptionTags | Flat-lay on limestone: heading on a paper label card, options as shipping tags on strings with a glyph stamp and mono number, one round tag, two manila folders on a navy strip at the right, two sample vials. Hover picks a tag up. |

## Motion (one timeline each, once, < 5 s)
- LimitStack: rows step in (index decodes, limit rises out of its line, rule runs out); pipe draws; water runs the coil; on arrival at the collar the "Guaranteed" lettering wraps on, the guaranteed row flashes flow-tint, the note appears.
- WindingRoute: route wiped on left to right with a droplet riding the head (y read from the wave); each stop lights on arrival (node ring flash, glyph print, column rises, code decodes); bubbles rise at CO₂; outlet fan last. Phone: each vertical bend draws and lights its stop.
- ParamTiles: tiles wipe into their cells from alternating edges, numbers roll up and decode, slashes cut down; blueprint cell builds via AQiso.timeline.
- DocHotspots: skid develops (print wipe), each hotspot drops with a ripple, leader draws, card slides out along it, code decodes.
- OptionTags: tags drop onto the table turning to their tilt, strings pull out, stamps strike, folders slide onto the navy strip, vials roll in.

## Content changes (page file)
- New optional fields only: `look` on blocks 0–4; `label` per stage (Feed, Heat, RO 1, CO₂, RO 2, DI or EDI, Out) and `fx: "gas"` on CO₂ removal (block 1); `at: [x, y]` hotspot per document (block 3); `shape` round / folder on options 3–5 (block 4).
- Copy cut: none. The limits intro moved onto the drawing as its note; every row, link, fold, placeholder kept.
- Folds: ParamTiles and OptionTags apply their fold on phones only (desktop shows the whole grid / table), as DocList does.

## Drawn inline (not in IsoKit)
- LimitStack's collar and end flange are IsoKit primitives (isoCylD / isoRingD) in my renderer; the coil is isoPipe through 40 points on a helix. Vials in OptionTags are a small inline svg (not equipment).

## Checks
- build + check: 0 problems from these components (remaining problems belong to other builders' in-progress components); `check --budgets sys-pw`: 0 overruns (601 visible words).
- motioncheck 1280 and 375: 0 errors, 0 hidden. No horizontal overflow at 375.

## Weak / open
- DocHotspots uses the line illustration, not a solid "render"; the hotspot `at` values are hand-placed on the current drawing and must be re-placed if `assets/illustrations/sys-pw.png` changes.
- WindingRoute uses a clip wipe instead of DrawSVG (the stretched non-scaling stroke cannot be measured by DrawSVG).
- Hover highlights (route stops, document cards) are mouse-only decoration; all content is visible without them.
