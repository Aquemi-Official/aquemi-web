# Pass 9b build notes: cmp-quality (blocks 0-4)

Builder: pass 9b, server 8769. Blocks 5-7 (form, faq, related) untouched. Every section got its own concept this pass;
all five were followed. Art directions down the page: limestone drawing sheet (0), navy/limestone bento with one
isometric plate (1), editorial facts + clean schedule (2), navy instrument readout (3), ruled table + bleed-off
isometric (4). Line art: blocks 1 and 4 only (both IsoKit).

| # | Block | Look / component | Concept | Decision | Library port |
| --- | --- | --- | --- | --- | --- |
| 0 | table "Each process, and the record it leaves" | `record-sheet` / RecordSheet (new) | cmp-quality.0 (not .v2) | replace record-slips | signature-draw |
| 1 | steps "How a defect is held and closed" | `ncr-tiles` / NcrTiles (new) | cmp-quality.1 | replace capa-ring | type-press (+ own repair choreography, the page's wow) |
| 2 | table "What we require from suppliers" | `marking-match` / MarkingMatch (upgraded) | cmp-quality.2 | upgrade | chart-crosshair |
| 3 | grid "Certification status" | `cert-readout` / CertReadout (new) | cmp-quality.3 | replace cert-seals | quote-tick (+ FxGuilloche kept, moved here) |
| 4 | spec "How buying from us works" | `terms-sheet` / TermsSheet (upgraded) | cmp-quality.4 | upgrade | none (IsoKit's own build) |

Deleted (only this page used them): RecordSlips, CapaRing, CertSeals (component folders and `look-record-slips.js`,
`look-capa-ring.js`, `look-cert-seals.js`). FxGuilloche and FxShader READMEs now name CertReadout.

## Per section
- **RecordSheet**: a drawing sheet (sunken ground, border and inner frame): three ruled columns between vertical
  hairlines, a numbered-notes margin carrying the row numbers, a title block at the foot (nav name, "07 processes",
  "15 records", counted). Each record ends in a hairline glyph of its kind, picked from its words (register, log,
  report/NCR, certificate, list, request/assessment, minutes, CAPA/check, records, else a sheet), ink in line-strong,
  accent in flow, over a faint offset impression. Motion: per row the name and cells rise 8 px, each glyph inks over
  its impression (signature-draw values); hover tints the row and re-inks its glyphs. Phone: stacked rows with column
  labels, title block full width, fold 3. Desktop 1220 px (was 1400).
- **NcrTiles**: 12-column bento, 01 oversized navy (176 px "01/"), 02 limestone with the hold tag (closed valve, "Hold ·
  Signed by you"), the repair drawing tile, then 03-06 alternating navy/limestone. Drawing (IsoKit pipes, fusion beads,
  dimension, leaders): a PP run whose rejected length is lifted clear (dashed, crossed) above the gap, the remade length
  fused in with its two new joints in flow; labels "Rejected joint", "Cut out", "New number", "Remade to [PP joint
  repair rule]" (new optional `drawing` field, aria-hidden duplicates of step 3; dimension carries no figure). Motion:
  tiles rise, numerals press up from slivers (type-press); the drawing draws, the rejected length lifts out, the new
  one drops in, beads strike, labels follow (~3.6 s); hover/focus on the drawing or step 3 replays the repair.
  Phone: one column, the drawing right after step 03.
- **MarkingMatch**: the intro's two rules promoted to headline facts ("Reviewed every [supplier review interval,
  months]" with the placeholder as the hero; "An open CAPA stops new orders." with a gate glyph: water stopping at a
  closed valve). Table: numbered supplies, requirement, verification led by a flow tick, vertical hairlines; the
  concept's inline gauge dropped. Pass 9's part drawings and certificate papers removed (line art budget). Motion:
  facts rise, gate pipe draws, water runs to the valve, gate drops shut; rows rise, ticks draw; chart-crosshair band
  and column bar on hover (CSS row tint without the script). Phone: stacked cells with labels, fold 2.
- **CertReadout**: navy readout box framed by rulers (top, foot, side scale with a "01 / 04" marker), the selected tag
  giant and light, title and status under it, index top right, guilloche rosette faint behind. Right: four mono readout
  lines two by two; each title is a button (aria-pressed) and pointing, focus or click puts the line on the readout
  (look-level handler, works without GSAP and under reduced motion). Quote-tick entry (8 px from the side of travel,
  220 ms, flow-tint fade 800 ms) as CSS; entrance wipes rulers and runs one tour 2→4→1 (stops if touched). Long
  placeholder tags set in mono at body size. Phone: readout over one-column lines.
- **TermsSheet**: clean ruled table (01 mono | term light | ours, values split at " · ", flow dashes; the one note
  sits under its values because fewer than half the rows have notes) beside an IsoKit skid (frame, RO rack, panel,
  tank, pipe) at 150 % of its column, bleeding off the right edge (section clips; no sideways scroll). Motion: head
  rule wipes, rows rise, AQiso timeline builds the skid and runs the water once. Phone: drawing as a cropped strip
  above the table, fold 4.

## Copy
- Block 2: `intro` "Reviewed every [supplier review interval, months]; an open CAPA stops new orders." moved into a
  new `facts` field as two facts, same words ("Reviewed every [supplier review interval, months]" / "An open CAPA
  stops new orders."), with the short labels "Supplier review" and "Open CAPA". The intro field itself is removed.
- Block 1: new `drawing` labels (aria-hidden, restating step 3): "Rejected joint", "Cut out", "New number", "Remade to
  [PP joint repair rule]".
- Display-only, aria-hidden: RecordSheet title block counts; NcrTiles "03 / Repair" plate tag; CertReadout readout
  mirror and "01 / 04" marker. No fact, number or standard added; no copy cut otherwise.

## Checks
build; check: 0 problems from these files (remaining problems belong to CheckLedger, RecordAnatomy, RoleLoop,
SourceSkid, other builders' work in progress). check --budgets cmp-quality: 0 overruns (567 visible words of 1300).
motioncheck 1280 and 375: 0 errors, 0 hidden. No horizontal scroll at 375 or 1280. Dark theme reviewed (NcrTiles,
CertReadout); keyboard: focusing a readout line selects it, visible focus ring. Film of the repair: ends static, exploded.

## Weak or open
- Almost every CertReadout and TermsSheet value is still a placeholder, so the readout often shows a mono chip
  instead of a giant reading (ISO 9001 and CSA B51 read well).
- RecordSheet glyph kinds are keyword-matched from the record text; a new record type falls back to a plain sheet.
- The NcrTiles drawing is the page's only illustrated step; steps 04-06 are text tiles by design (concept).
