# Pass 9b build notes: svc-design (blocks 0–3)

Server 8769. Page file `aquemi-web/content/pages/11-svc-design.json` (unchanged this pass). FAQ, related and closing untouched.

| # | Block | Decision | Look / component | Concept idea built | Library port |
| --- | --- | --- | --- | --- | --- |
| 0 | table (failures) | upgrade | `redline-sheet` / RedlineSheet | svc-design.0: a navy P&ID band heads the sheet (PRE, RO, EDI, CIT, divert to drain, tank, pump, loop, three POUs; drawn inline, flat ISA-style), with each failure pinned where it happens (revision triangle + dashed ring: loop at the pump, the long branch, the divert valve). The three redline markups stay as the columns. | guided-inspection: pointing at a column zooms the band onto its pin with a spotlight; the entrance tour visits each pin as its markup draws, then pulls back |
| 1 | steps | keep | `fidelity-ladder` / FidelityLadder | Concept (five cards with mono doc codes beside an isometric plant) adds invented codes and a generic plant; the live six-sheet ladder of rising fidelity is the stronger idea and already the page's blueprint section. | none new |
| 2 | docs | keep | `issued-set` / IssuedSet | Concept is another drawing sheet (GA elevation + notes); with the redline sheet and the blueprint ladder above it, a third sheet would repeat. The tactile dealt-sheets look keeps the page varied. | none new |
| 3 | table (trace) | upgrade | `trace-lines` / TraceLines | svc-design.3: a flow readout tile beside the transit lines: "1.3 µS/cm" huge and light, tick scale with the limit tick, outlined "≤ 1.3" tag with "@ 25 °C", pipe ghosts behind. Parsed from each requirement's own header; URS-027 gives "2" (L/D). Keys under the tile and pointing at a line switch it. | quote-tick (figure swap) |

- Copy: none cut or added (tile text is parsed from the column headers; key labels are the URS codes).
- Wow moment: the redline band tour (camera visiting each failure's spot). Better moments: the readout tile switching with the lines.
- Phone: band shows its middle at double size above the stacked markups; the readout tile first, then the lines.
- Checks: build; check 0 problems from these components; budgets 0 overruns (557 words); motioncheck 1280/375 0 errors, 0 hidden (the band's spotlight path empties after it fades); light, dark, 375, keyboard (tile keys) and reduced motion checked.

## Still weak
- The band's pins (and camera) are mouse-driven after the entrance; keyboard users get the tour once and the columns carry everything.
- At 375 the band crops the pretreatment end; the tour still reaches every pin.
- Pipe ghosts behind the tile are faint and generic.
