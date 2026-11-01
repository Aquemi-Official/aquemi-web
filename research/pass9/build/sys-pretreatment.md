# Pass 9 build notes: sys-pretreatment (blocks 0–5)

Round 2, server 8768. Page file `aquemi-web/content/pages/08-sys-pretreatment.json`; blocks 6 (faq) and related untouched.
No concept images for this page: each section adapts an idea from the pool (named below) around the page's story,
protection: what would kill the RO membranes is caught stage by stage. Six new looks, one component each (README,
style.css, preview.html generated from the live renderer, motion.js). No round-1 look reused: none matched without
making the page a copy of sys-pw or compliance.

| # | Block | Look / component | Art direction | Adapted from |
| --- | --- | --- | --- | --- |
| 0 | spec (RO inlet targets) | `membrane-face` / MembraneFace | Bento, data | compliance.0 (bento, central visual tile), industries.3 (one object, callouts) |
| 1 | diagram (the train) | `section-train` / SectionTrain | Sectional technical illustration on limestone | compliance.3 (cutaway), systems.0 (one run, a column per stage) |
| 2 | table (feed water) | `membrane-atlas` / MembraneAtlas | Scientific atlas plates | industries.1.v2 (macro membrane, numbered) |
| 3 | table router (chlorine/chloramine) | `decision-valve` / DecisionValve | Tactile object on navy | home.4 (branches off one junction) |
| 4 | docs | `sheet-previews` / SheetPreviews | Swiss print | sys-pw.2 (huge numerals), compliance.2 (paper) |
| 5 | options | `option-taps` / OptionTaps | Blueprint isometric (the page's one) | systems.0 / industries.3 (iso run, markers on parts) |

## Sections
- 0 MembraneFace: four-column bento; heading top left, the feed end of a spiral-wound RO element large on navy in the
  middle (vessel wall, anti-telescoping ring and spokes, six membrane leaves winding out of the permeate tube, numbered rim
  marks towards their tiles), the block note as its caption; six target tiles round it with the target in 56 px Geist
  Mono, `[confirm]` placeholders kept, the chlorine row `hl` tinted. Hover/focus on a tile lights its rim mark.
- 1 SectionTrain: one flat sectional elevation, every vessel cut (hatched walls): break tank with air gap and the
  backflow preventer on the run, media filter (sand, coarse sand, gravel, underdrain), duplex softener (one bed running,
  one regenerating), carbon granules, pleated 5 µm cartridge; one pipe down through each vessel, under, up the gap; a
  lens at the feed shows particles, hardness and chlorine; each bed holds what it caught; the outlet lens is clean; the
  monitoring bus with instrument bubbles under the pipe and the base line under it. Columns: number, name, line, a
  "catches" chip with the glyph. "To RO" stays the link to sys-pw.
- 2 MembraneAtlas: seven plates, each a round micrograph under a reticle (oxidation pits and cracks; cold side sparse
  permeate / warm side bacteria; fouling cake; carbonate crystals; silica glass; iron coating; biofilm colonies), then
  condition, effect, and "what we design for" on a flow rule. Heading in the first cell.
- 3 DecisionValve: supplies as buttons on the left (aria-pressed), a multiport valve in the middle (position plate 01–04,
  lever), lines out to four route cards (all readable, the chosen one on limestone). A click on a supply or card turns
  the lever (CSS) and lights its lines; motion re-runs the water along them.
- 4 SheetPreviews: Swiss row: huge numerals (key documents in ink, others line-strong), limestone sheets with a thumbnail
  per kind (basis month grid, two projection curves, logic sequence, certificate with seal and lot strip), code (key in
  flow, DocList's rule), name, line; "Full index" link beside the heading.
- 5 OptionTaps: IsoKit train (media filter, softener, carbon, cartridge, RO) on a navy sheet; each option a dashed part on
  a dashed tee at the stage it serves (Fe/Mn filter ahead of the softener, UF at the media filter, analyser at the
  softener outlet, dosing pump and heat exchanger at the RO feed), numbered markers, numbered dashed cards; card hover
  lights its part.

## Motion (one timeline each, once, under 5 s; 0 hidden)
- MembraneFace: element wipes down, rings draw, leaves wind out while the face turns, rim marks strike, tiles rise in.
- SectionTrain: vessels rise like a print, pipe draws, feed lens opens; water runs the route with a cluster of glyphs
  riding it; at each bed its kind leaves the cluster and settles in, the stage number turns flow, the chip strikes; the
  outlet lens opens clean (~4 s). Phones: each frame rises and its glyphs settle.
- MembraneAtlas: per row, scope opens like an iris, reticle turns, damage spreads from the centre, text slides in.
- DecisionValve: supplies slide in, lines run, dial turns, lever swings to 01, cards slide in; each choice re-runs the lines.
- SheetPreviews: sheets dealt from one stack (top first), numerals rise, thumbnails draw, codes decode.
- OptionTaps: AQiso.timeline draws the train and runs the water; dashed options fade up in turn, markers drop, cards rise.

## Content changes (page file): new optional fields only
- Block 0: `look`. Block 1: `look`; per stage `cut` (feed, tank, media, softener, carbon, cartridge, out) and `catch`
  `{g, t}` on four stages ("Particles", "Hardness", "Chlorine and chloramine", "Fines", each from that stage's own line).
- Block 2: `look`, `marks` (oxidize, cold, foul, scale, silica, coat, biofilm). Block 3: `look`.
- Block 4: `look`, `sheet` per item (basis, curves, logic, certificate).
- Block 5: `look`, `train` (five parts with labels from the diagram's stage names; `ly` on the RO label), per item `at`,
  `part`, `row`, and `r`/`h` on ultrafiltration.
- Copy cut: none. Decorative aria-hidden labels added: "RO element · feed end", "Fig. 01–07", "Position 01–04",
  "Option", drawing labels on the option sheet.
- Fold 3 on the feed-water block kept, applied on phones only (desktop shows all seven plates).

## Drawn inline (not in IsoKit)
- SectionTrain is a flat section (not isometric): vessels, beds, lenses, backflow preventer, bus drawn in the renderer.
- MembraneFace's spiral element end view, MembraneAtlas's micrographs, DecisionValve's valve (front view), SheetPreviews'
  thumbnails: flat drawings in the same stroke family. OptionTaps uses IsoKit parts only (UF is a slim `filter`).

## Checks
- build + check: 0 problems from these six components (remaining problems are other builders' scaffolds).
- `check --budgets sys-pretreatment`: 0 overruns, 735 visible words.
- motioncheck 1280 and 375: 0 errors, 0 hidden. No horizontal scroll at 375. Light, dark, 1024 and 375 reviewed.

## Weak / open
- OptionTaps' part positions (`at`, `row`) are hand-placed; on the 375 overview strip markers and labels are off and each
  card carries its own dashed part instead. Card hover is pointer-only (the numbers carry the pairing).
- SectionTrain's phone frames show each vessel alone on a CSS rail (the pipe between frames is the rail, not drawn).
- The valve's interaction is a highlight only: all four routes stay visible, so nothing depends on clicking.
- MembraneAtlas micrographs are drawn line art, not photographs.

## Shared requests
None.
