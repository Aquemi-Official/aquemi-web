# Pass 9b build notes: ind-pharma (blocks 0–4)

Reader: a QA head under inspection. Blocks 5 (faq) and 6 (related) untouched. Server 8768.

| # | Block | Before (pass 9) | Now | Concept followed |
| --- | --- | --- | --- | --- |
| 0 | router | `numeral-index` | **replaced** → `checker-router` / CheckerRouter | ind-pharma.0 in full: six-tile bands (navy "01/" numeral, situation, filler, need, filler, start tile), navy/paper fillers alternating into a checkerboard, two paper tiles carry tiny IsoKit drawings (outlet for "more points of use", RO rack for "first PW system"). |
| 1 | grades (dosage form) | `grade-mains` | **replaced** → `grade-ladder` / GradeLadder | ind-pharma.1: a sticky instrument beside the table: the row number huge and light, a fader up potable < PW < WFI with a minimum line at the row's minimum, alternatives as open marks. WFI is the top grade, drawn as an open dashed zone with the lane note "We do not supply WFI" (live copy); nothing implies Aquemi makes WFI. |
| 2 | evidence (inspectors) | `binder-spines` | **upgraded** (same look) | ind-pharma.2's one idea (log): the plant drawing bleeding off the right edge for scale. A large IsoKit PP package (RO skid, panel, tank, pump, UV, points of use, return) stands on the shelf's floor line and runs off the page; the binders keep the left two thirds. The concept's table was not taken (stock pattern). |
| 3 | options (decisions) | `urs-gate` | **replaced** → `decision-plant` / DecisionPlant | ind-pharma.3 in full: central hairline schematic (flat elevation drawn inline: IsoKit has no elevations), decisions as numbered callouts left and right with leaders into the part each sizes: headers (product mix), title block "URS" (USP / Ph. Eur.: a specification decision, not a part), loop return (sanitization), membrane train (feed water), second train dashed + isolation valve (shutdown windows). |
| 4 | grades (NHP) | `grade-switch` | **kept, polished** | ind-pharma.4 is the stock soft-3D skid + table; its useful cue (log) taken: the minimum water set as the accent (Geist Light 22/28 in `flow`). The soft-3D render was not built (no asset, one material moment at most). |

## Library ports
- mosaic-reveal → CheckerRouter: tiles blink on in scattered order (steps); the row in hand trades every tile for its inverse, tile by tile (CSS `--d` delays, instant under reduced motion).
- scroll-turntable → GradeLadder: the page's one scroll-linked story. The row on the reading line (45 %; phones under the sticky band) drives the sticky instrument stepwise; hover/focus/arrow keys take over.
- elastic-fader → GradeLadder: oversized level number + vertical fader, fill scaled from its foot, 380 ms glide (overshoot and overtravel stretch dropped: no bounce).
- process-choreography → DecisionPlant: schematic draws, water runs the route, then leaders draw from each part to its callout and the callout scales in as it arrives.
- BinderSpines: plant plays IsoKit's own choreography before the binders are filed. back.out eases removed here and in GradeSwitch (now aq-settle / power3.out).

## Deleted (used only by this page)
`assets/src/blocks/look-numeral-index.js`, `look-grade-mains.js`, `look-urs-gate.js`; `design-system/components/NumeralIndex/`, `GradeMains/`, `UrsGate/`. (CheckLedger's README still names NumeralIndex in a "not for" list; not my file.)

## Copy
No row text changed. Dropped (decorative, aria-hidden): grade-mains' caption "Aquemi · Grade by dosage form · 8 steps"; urs-gate's `gate_label` "Approved" (field removed). Added fields: block 0 `draws`; block 1 `lanes[].short` ("Potable", "PW", "WFI": the abbreviations the copy already uses); block 3 `items[].part/side/row` (`gate` "URS" kept, now the title block word).

## Checks
build; check 0 problems; `check --budgets ind-pharma` 0 overruns, 639 visible words; motioncheck 1280 and 375: 0 errors, 0 hidden. 1280 and 375 reviewed, dark (router hover, decision hover) reviewed, no horizontal scroll at 375 (ladder band clips its limit). Scroll story verified: rows 01–08 each shown as they cross the line.

## Still weak
- CheckerRouter in dark: paper tiles (surface-raised) sit close to navy; the checker reads softer than in light.
- GradeLadder phone: the WFI label is right-aligned at the track end, a little off its tick.
- DecisionPlant's right column reads 03, 01, 02 top to bottom (placed by part height to keep leaders from crossing).
