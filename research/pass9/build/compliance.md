# Pass 9 build notes: compliance (blocks 0–4)

Builder: compliance section builder, server 8766. Blocks 5–6 (faq, related) untouched.

## Sections

| # | Block | Look / component | Concept | Art direction |
| --- | --- | --- | --- | --- |
| 0 | spec gauges "Purified Water limits" | `limit-bento` / LimitBento | compliance.0 | bento, data-viz (light ground, one navy tile) |
| 1 | standards-map | `standards-orbit` / StandardsOrbit | compliance.1 | navy blueprint, IsoKit plant |
| 2 | table evidence "Pharmacopoeias" | `proof-folders` / ProofFolders | compliance.2.v2 | tactile objects (manila folders, stamps) |
| 3 | table evidence "GMP" | `cutaway-rail` / CutawayRail | compliance.3 | navy, sticky IsoKit cutaway + card rail |
| 4 | table evidence "Engineering" | `pipe-collage` / PipeCollage | none (quota); adapted industries.2 | Swiss poster, flat geometric collage |

Blueprint line art: sections 1 and 3 only (as the brief allows). The three evidence tables read as folders /
sticky drawing + rail / poster.

### 0 LimitBento
- Concept idea kept: bento, one limit per tile with an oversized mono numeral, tall middle tile. The concept's decorative
  middle tile (weakest part per log) became the one data picture: a water column drawn to scale, filled to the USP limit
  (1.3 µS/cm) with Ph. Eur.'s 5.1 µS/cm dashed far above and a dimension line between them: "the stricter value" as distance.
- New optional row fields: `icon`, `alt {v, m}`.
- Motion: tiles slide in from their side, numerals count up, the column wipes up, water fills to the limit, surface swells
  twice and settles, Ph. Eur. mark drops in last.
- Phone: heading, column as a short band, tiles stacked.

### 1 StandardsOrbit
- Plant (IsoKit, navy): RO rack on skid, tank, loop to a point of use, control panel, binders. Two orbit rings + a far
  ring with ticks; each zone is a node on the outer ring, an arc runs in to its part (spot → part: ro-skid RO, storage-tank
  tank, gauge panel, weld skid frame, binder binders). Hover/focus on a zone lights arc, node and part.
- Chips keep `data-smap-code` / `data-smap-to`: verified every one of the 21 chips lands on its row in the right section
  (proof folders, cutaway cards, collage blocks), unfolding folded rows.
- Motion: rings draw, plant builds (AQiso.timeline), per zone: node lands, arc draws in, part lights, labels slide out.
- Below about 1180 px container width the labels no longer fit beside the rings: plant alone, zones in a 3-column grid;
  phones: plant, then zones strung on a vertical orbit line.

### 2 ProofFolders
- Each standard a manila folder (limestone, every second a shade deeper) with a tab stepping right row by row; the
  standard set large on the ground; "what we design to" typed on a slip; proof split on ";" into clipped sheets; a rubber
  stamp (standard code + column name "Proof", aria-hidden) struck on the sheets; "where we show it" as the navy index label.
- Fold 3 kept. Motion per folder: rises, slip drops and turns, sheets fan, stamp strikes with a jolt, label wipes in.
- Phone: standard over its folder, cells stacked with their column names.

### 3 CutawayRail
- Sticky IsoKit cutaway (cut-open product-contact pipe with fusion bead, tank and loop, point-of-use branch and valve,
  analyser, panel, binders + clipboard) beside a rail of limestone cards. The card crossing 45 % of the viewport (or
  hovered/focused) is active: its parts light, the "Active <code>" tag updates, a callout moves to the first part.
- New optional fields: `tag` ("Active"), `parts` (per row: mat / loop / pov / ana / ctl / docs). Mapping chosen from each
  row's own clauses (materials → pipe; WHO TRS 1033 → pipe, loop, point of use, docs; Annex 15 → docs; Annex 11 → panel;
  GAMP 5 → panel, analyser; ASTM E2500 → analyser, point of use; Annex 1 → point of use, loop).
- Fold 2 now applies on phones only (desktop shows all seven cards: the rail is the reading).
- Motion: drawing builds and the water runs once; cards slide in from the right, node first.
- Phone: drawing is a sticky band (≤ 30 vh) over the cards.

### 4 PipeCollage
- No concept; adapted industries.2 (geometric pipe collage + asymmetric editorial blocks). Board of flat tiles: pressure
  vessel with nameplate (CSA B51), panel with label plate, flanged elbow with a short branch (piping, dead legs), resin
  pellets (material), two pipe ends fused at a bead (joining), plus fillers. Blocks stepped on a 6-column field with
  hairline brackets. Hover/focus frames the block's piece.
- New optional field: `pieces`. Fold 2 applies on phones only. Board and thumbs are `data-theme="light"` paper.
- Motion: tiles slide in from their edge, pipe and flow lines draw, numbers drop; blocks wipe down their brackets.
- Phone: board hidden; each block led by its own piece.

## Copy changes
- Block 0 note: cut "Ph. Eur. conductivity: ≤ 5.1 µS/cm at 25 °C." and moved it into the conductivity row as
  `alt: {"v": "≤ 5.1 µS/cm at 25 °C", "m": "Ph. Eur."}` (shown in the water column as "≤ 5.1 µS/cm · Ph. Eur.").
- No other copy cut. Standard cells are split for display only (code on tabs/stamps, title under it); "Proof" on the
  stamp is the column name. "Active" (tag) is new UI wording, in the page file.

## Drawn inline (not in IsoKit)
- StandardsOrbit: none beyond IsoKit parts (orbit rings and arcs are plain svg).
- CutawayRail: the cut-open pipe section with its fusion bead (`isoCylD`, `isoRingD`, `isoBandD`), could join the kit
  as a `pipe-section` part.
- PipeCollage: flat (non-isometric) poster pieces, by design.

## Checks
- `build`, `check`: 0 problems from these files; `check --budgets compliance`: 0 overruns (538 visible words).
- motioncheck 1280, 1024 and 375: 0 errors, 0 hidden. No horizontal scroll at 375 / 1024 / 1280; no text under 12 px.
- Dark theme checked: limestone paper keeps `data-theme="light"`.

## Shared requests
- standardsmap.js `smapRow` `out()`: also skip `.aq-standards-orbit` (the orbit look's own zones), so a code that is
  missing from its target section never matches the map itself.
