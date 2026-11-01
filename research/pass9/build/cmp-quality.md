# Pass 9 build notes: cmp-quality (blocks 0-4)

Builder: round 2, server 8770. Blocks 5-7 (form, faq, related) untouched. Character: how the company itself works (the
record each process leaves, a defect loop that closes, supplier control from the auditor's chair).

| # | Block | Look / component | Concept adapted | Art direction |
| --- | --- | --- | --- | --- |
| 0 | table evidence "Each process, and the record it leaves" | `record-slips` / RecordSlips | 45-concept-evidence (item to proof) | editorial light type + tactile slips |
| 1 | steps "How a defect is held and closed" | `capa-ring` / CapaRing | 84-p9-services-1 (hold nodes on a line) + 91 orbit rings | navy kinetic diagram (the page's loud section) |
| 2 | table "What we require from suppliers" | `marking-match` / MarkingMatch | 77-p9-systems-3 (wired to the part) + 45 | line art + table |
| 3 | grid "Certification status" | `cert-seals` / CertSeals | 80-p9-sys-pw-2 (Swiss tiles) + 93 stamp | Swiss tiles |
| 4 | spec "How buying from us works" | `terms-sheet` / TermsSheet | 41-concept-page-sheets | editorial paper schedule |

Line art in block 2 only. IsoKit not used: MarkingMatch draws flat elevations of the arriving parts inline (PP pipe with
elbow and print line, gasket with compound tag, PVC pipe with socket, membrane element with serial plate, vessel with
nameplate + panel with label); small isometric parts read worse at 200 px.

## Per section
- **RecordSlips**: process name large and light, what it controls under it, a navy slot at its edge and the record
  printed out of it as a paper slip with tick boxes per record. Column names once on desktop, per row on phones.
  Motion: name rises, slot drops, slip feeds out clipped at the slot, records tick in. Phone: slot under the process,
  slip hangs below; fold 3 on phones only.
- **CapaRing**: six steps clockwise round one ring (1-3 down the right, 4-6 up the left), leaders to nodes, "NCR" in the
  centre (taken from step 1's text), the hold step (Disposition, signed by you) a closed valve. Motion: water runs the
  ring, each node seats and its step slides in, it waits at the hold, then the loop closes and swells once. Hover/focus
  a step lights its node. Phone: ring over a numbered list.
- **MarkingMatch**: per supply, the part with its marking ringed in flow, a double-ended check line with the tick and how
  we verify it, the requirement on a certificate. Motion: part draws, marking pulses in, check line closes on the tick,
  certificate slides in. Phone: part, check line turned down, certificate; fold 2 on phones only.
- **CertSeals**: four certificate tiles (navy first, limestone after) with a seal of ticks round the item icon, the tag
  large and light (placeholders set smaller), title, status; linked tiles are links. Motion: tiles rise, ring draws,
  icon strikes like a stamp. Phone: 2 then 1 per row.
- **TermsSheet**: one paper sheet, clauses 01-08 in two columns reading down, values one per line (split at " · "),
  note under a hairline. Motion: sheet settles, head rule draws, clauses write in. Fold 4 on phones only.

## Copy
No copy cut or added. Display-only: records, values and supplies split at ";" / " · " with first letters capitalised;
the column names "What it controls" (RecordSlips, desktop) and "Term", "Ours" (TermsSheet) are not printed as labels;
"NCR" in the ring centre and "8 terms" in the sheet head are aria-hidden duplicates; "Hold · Signed by you" from `hold`.

## Checks
build; check: 0 problems from these files. check --budgets cmp-quality: 0 overruns (550 visible words). motioncheck
1280 and 375: 0 errors, 0 hidden. No horizontal scroll. Light and dark reviewed.

## Weak or open
- Almost every value on CertSeals and TermsSheet is still a placeholder, so both read as chips until Aquemi fills them.
- RecordSlips is long on desktop (seven full rows, about 1400 px).
