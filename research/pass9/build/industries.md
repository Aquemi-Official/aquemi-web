# Pass 9 build notes: industries (blocks 0–3)

Built 2026-11-01. Blocks 4 (faq) and 5 (related) untouched (site-wide components).

## Files (mine)
- `content/pages/17-industries.json`: `look` on blocks 0–3; new optional fields on blocks 2 and 3 (below).
- Looks: `assets/src/blocks/look-pid-routes.js`, `look-macro-leaders.js`, `look-grade-editorial.js`, `look-market-callouts.js`
  (each wrapped in a closure, no top-level names; hover listeners delegated on `document`).
- Components: `design-system/components/{PidRoutes,MacroLeaders,GradeEditorial,MarketCallouts}/` (style.css, README.md,
  preview.html generated from the live renderer with real page copy, motion.js).

## Sections
| # | Concept | Look | What it became |
| --- | --- | --- | --- |
| 0 | industries.0 (P&ID routing) | `pid-routes` | Navy blueprint plate: column heads + tick rulers, five double-framed "Path 0N" situation boxes piped through ISA-style valves (gate, globe, diaphragm, check, ball) to system boxes, then through a second valve to start boxes. Rows sharing a destination page are tied: rows 2–3 (sys-storage) by a cross-tie, rows 2/3/5 (svc-upgrades) by a header with junction dots and a line break where it crosses row 4. Instrument bubbles on rows 1 and 5. Hover/focus lights one route. |
| 1 | industries.1.v2 (macro + leaders) | `macro-leaders` | Macro drawing (tonal flat fills, no gradients): five RO membrane leaves (permeate-carrier hatch, feed-spacer mesh, water lines) fanned over a PP pipe with a double weld bead, bleeding off the left page edge; markers 01–06 on an arc, leaders into the rows of a real table. Row hover = flow-tint row + filled marker. |
| 2 | industries.2 (editorial) | `grade-editorial` | Limestone band with a full-bleed navy mast (heading up to 96 px light); Swiss pipe-collage (24 tiles, hollow navy pipe with the water through a tank and pump to an outlet drop); five asymmetric blocks: PW / Potable huge, scope as a drawn run, running cost on a spine, "2 weeks" huge with three dashed empty bars + placeholder, team on a navy panel. |
| 3 | industries.3 (render + callouts) | `market-callouts` | IsoKit PW package (skid, cartridge filter, RO rack, EDI, panel, feed riser, product outlet), limestone solids on navy (reads as a white object), mirrored so the feed drops on the right beside two faint rails; three callouts with leaders to outlet / RO / EDI and numbered markers on the parts. |

## New fields (documented in the component READMEs)
- Block 2 items: `big [{v, pre, l}]`, `span [from, to]`, `list`, `bars` + `bars_note`, `kicker`, `panel`. `d` kept unchanged (fallback renderer).
- Block 3 items: `part`, `scope`, `tags`, `note`. `d` kept unchanged.

## Copy recast (no new claims; `d` untouched in the JSON, the look shows the re-cut words)
- 2.0 "Non-sterile drugs need PW (Health Canada GUI-0001); natural health products, potable water at minimum (GUI-0158)." → "PW" / "Non-sterile drugs · Health Canada GUI-0001"; "Potable" / "Natural health products, at minimum · GUI-0158". Cut: "need", "water".
- 2.1 "Incoming water to every outlet, design to qualification; budget ranges by configuration." → "Incoming water" → (drawn run) → "Every outlet"; "Design to qualification"; "Budget ranges by configuration". Cut: "to" (the drawn run).
- 2.2 "Service plan, consumables, energy and water to drain." → four list lines.
- 2.3 "First use after at least 2 weeks of daily sampling, if your quality unit approves. [staff hours …]." → "At least" / "2 weeks" / "Of daily sampling before first use, if your quality unit approves" + bars Sampling, Logs, Sanitization + the placeholder. Recast "First use after" → "before first use".
- 2.4 "New Ontario company: a commercial lead, an automation engineer with pharmaceutical water experience and a modular manufacturing and design specialist." → kicker + three numbered lines. Cut: "a", "an", "and".
- 3.x `d` split into scope / tags / note; only separators dropped.
- Decorative aria-hidden labels added: "Path 01–05", "Column 01–03", "Aquemi · Where to start · P&ID", drawing labels "RO membrane", "PP weld".

## Drawn inline (not in IsoKit, by design)
- Flat ISA-5.1 valve and instrument symbols (P&ID stays flat per IsoKit README).
- The macro (membrane leaves, PP pipe, weld bead) and the geometric collage: non-isometric art directions on purpose.

## Checks
- `build`, `check`: 0 problems in my files (other builders' scaffolds still flag). `check --budgets industries`: 0 overruns, 666 visible words.
- `motioncheck industries` 1280 and 375: 0 errors, 0 hidden. Films reviewed for all four sections. Dark theme and 1024 / 900 / 375 widths reviewed.
- Mid widths (≤ 1180 px container): GradeEditorial stacks the collage above the blocks; MarketCallouts puts the callouts in a row under the machine (leaders off, markers keep the pairing); MacroLeaders narrows the drawing.

## Weak or open
- The macro is vector art, not a photographic render; a real macro photo of a PP weld and membrane would lift it further.
- MacroLeaders' marker arc is computed from row index, not measured row heights (rows of unequal height bend it slightly).
- MarketCallouts hover highlight is pointer-only (callouts are not controls); the numbers carry the pairing for everyone.
- GradeEditorial mast heading runs above the `display-xl` size (up to 96 px) on purpose (concept's oversized type).

## Polish (pass 9 round 3)
- MarketCallouts: the two faint rails removed (they crossed the machine and linked nothing).
- GradeEditorial: plain list in Geist (was mono caps body text); sampling bars square (were pills) and aligned on one subgrid; phone mast 44 px.
