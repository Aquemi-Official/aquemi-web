# Pass 9 build notes: svc-design (blocks 0–3)

Round 2 builder, server 8770. Blocks 4 (faq) and 5 (related) untouched (site-wide). No concepts of its own (Gemini
quota): each section adapts an idea from the pool, recast around the page's subject: the URS turned into drawings.

| # | Block | Look / component | Adapted from | Art direction | Ground |
| --- | --- | --- | --- | --- | --- |
| 0 | table failures | `redline-sheet` / RedlineSheet | compliance.2.v2 (paper, stamps) + home.3 (light sheet) | editorial design-review markup on a limestone drawing sheet | surface |
| 1 | steps (2 holds) | `fidelity-ladder` / FidelityLadder | home.2 (a drawing per step on one run), navy of sys-pw.1 | navy blueprint (the page's only blueprint) | navy band |
| 2 | docs | `issued-set` / IssuedSet | sys-pw.4 (flat-lay of objects) | tactile: sheets dealt onto a desk | surface + sunken desk |
| 3 | table traceability | `trace-lines` / TraceLines | industries.0 (routes through columns) | data-viz transit map | sunken (alt) |

## Sections
- 0 RedlineSheet: one limestone sheet (zone numbers, title block "Aquemi · Why design · 3 markups"), a column per failure:
  revision triangle + "Fails at qualification" + the failure (fail ink, with its words), a small figure of the design with
  the mistake ringed by a revision cloud (peak: demand bars with the average line, peaks clouded, the peak line drawn in
  flow; dead leg: branch with "L = ?" clouded, then L and D dimensioned in flow; setpoint: spec sentence with a blank,
  then "SP" written in, divert valve to drain), the mistake struck through, the fix as the flow markup note. Subgrid keeps
  the rows aligned. Figure picked from the row's words (optional `figs`).
- 1 FidelityLadder: six blueprint sheets of the same package at rising detail: matrix (one gap crossed), block route with
  its dashed alternative and Q marks, P&ID (pump, valves, tank, CIT/PI bubbles, loop), dimensioned IsoKit spool, the same
  spool frozen under a "DQ" stamp with a revision block ticked, the spool with joints J1–J4 and their beads. A run under
  the sheets with a node per stage; a closed valve before each hold and a limestone "Hold point · Signed by you / your
  quality unit" stamp. Optional `sheet` per item.
- 2 IssuedSet: four light sheets dealt on a sunken desk at small turns: code large (CM, P&ID, FDS, TM from docCode), a
  miniature of the document (matrix; P&ID; spec lines with setpoint boxes; report with traceability lines), name, text,
  title block; a round flow stamp of the step that uses it. New optional field `use` on items 2–4: "IQ", "OQ", "DQ",
  each taken from the item's own sentence ("IQ verifies against them", "OQ tests against them", "approves DQ on it").
- 3 TraceLines: URS-012 (flow) and URS-027 (ink) as transit lines from their code, set large, down four stations
  (documents as the station names on the left, hairline interchange per row). "Met." becomes a pass chip with the word;
  "Not applicable" passes dashed with no stop; verification branches into test-step chips (FAT; SAT and OQ; IQ).
  Pointing at a line dims the other.

## Motion (one timeline each, once)
- RedlineSheet ~4 s: sheet unrolls; per markup the figure draws, the cloud is drawn round the mistake, triangle strikes,
  mistake struck (wipe), correction draws in flow, note wipes in.
- FidelityLadder ~4.5 s: run extends stage by stage; each sheet lights and draws on, number decodes, text rises; at a hold
  the valve turns open and the stamp strikes; the DQ stamp strikes on sheet 5.
- IssuedSet ~3.5 s: sheets dealt from above, settling to their turn (aq-settle); miniatures draw, codes decode, stamps strike.
- TraceLines ~3.5 s: station names slide in; codes decode; each rail wipes down stop by stop, chips branch out; line 2 a beat later.

## Copy
No copy cut or recast. Only `look` per block and `use` on three docs items added. The title block and sheet labels
("Sheet 01", "Matrix", "Route", "P&ID", "Isometric", "Frozen", "Spools", "markups", figure labels avg/peak/L/D/SP/drain,
PRE/RO/EDI/TANK, CIT/PI, J1–J4, DQ) are aria-hidden drawing labels.

## Drawn inline / IsoKit
IsoKit for the isometric spool (isoPipe, isoDim, isoRingD) on sheets 4–6. Flat figures (markups, matrix, route, P&ID
with ISA-style symbols, document miniatures) drawn inline in the same 1.5 px stroke family.

## Checks
build + check: 0 problems from these components (remaining ones belong to other builders' in-progress components).
check --budgets svc-design: 0 overruns, 557 visible words. motioncheck 1280 and 375: 0 errors, 0 hidden. Light, dark
and 375 reviewed.

## Weak or open
- FidelityLadder sheets 4 and 5 differ only by the stamp and revision block (by content: the frozen design is the same
  drawing); the isometric spool is small inside its sheet.
- Before their turn the later ladder sheets show their pipe fills faintly (the strokes draw on when the run arrives).
- RedlineSheet's struck-through mistake costs a little legibility (by design; the column label names it).

## Pass 9 polish
- FidelityLadder: spool pipes thicker on sheets 4-6 (r 8 / 6.5) so the isometric reads at sheet size.
