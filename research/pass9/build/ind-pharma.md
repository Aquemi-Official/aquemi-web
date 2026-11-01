# Pass 9 build notes: ind-pharma (blocks 0–4), round 2

Reader: a QA head under inspection. Character: grades per dosage form and the evidence they hand an inspector.
Blocks 5 (faq) and 6 (related) untouched. No concept of their own (quota): adapted from the pool as named below.

| # | Block | Look / component | Adapted from | Art direction |
| --- | --- | --- | --- | --- |
| 0 | router | `numeral-index` / NumeralIndex | services.0 (giant light outline type), STYLE-ATLAS spine B | Swiss type index on surface |
| 1 | grades (dosage form) | `grade-mains` / GradeMains | 46-concept-grade-lanes (built in full) | navy blueprint, flat ISA valves |
| 2 | evidence (inspectors) | `binder-spines` / BinderSpines | compliance.2.v2 (tactile records), 51-concept-turnover-binder | tactile objects on a shelf |
| 3 | options (decisions) | `urs-gate` / UrsGate | services.0 (cropped outline word) + services.1 (nodes on a line to a hold point) | kinetic light type + line diagram, sunken ground |
| 4 | grades (NHP) | `grade-switch` / GradeSwitch | sys-pw.4 (tactile), 50-concept-limit-gauges (selector) | instrument panel on limestone |

## New fields (documented in each component README)
- Block 1: `lanes` [{id, t, note, off}], `taps` (per row, lane ids, `?` = alternative from the note).
- Block 2: `spines` [{code, read}].
- Block 3: `gate` ("URS"), `gate_label` ("Approved"), both aria-hidden, words from the heading.
- Block 4: `positions` [{id, t}], `switch` (per row, `?` = where your specification asks).

## Copy recast (no new claims; the rows in the JSON are unchanged, the look shows `spines`)
- Inspectors row 2: "21 CFR 211.65 (non-reactive surfaces); water guide: dead legs, a year's data" → code "21 CFR 211.65" + "Non-reactive surfaces; water guide: dead legs, a year's data".
- Row 4: "Ph. Eur. 0008, the EMA guideline and Annex 15 qualification" → "Ph. Eur. 0008" + "The EMA guideline and Annex 15 qualification".
- Row 5: "GUI-0119 and EU good manufacturing practice (GMP) Annex 1: PW quality, dead legs, sanitization, trend review" → "GUI-0119 + Annex 1" + "EU good manufacturing practice (GMP): PW quality, dead legs, sanitization, trend review".
- Rows 1 and 3: the clause split off (": " dropped).
- Grade mains: WFI main note "We do not supply WFI" (row 6's own note); screen-reader-only tap list per column ("Purified Water (PW), Water for Injection (WFI) (alternative)").
- Decorative aria-hidden: title block "Aquemi · Grade by dosage form · 8 steps"; "URS", "Approved".

## Checks
- build, check: 0 problems in these components; `check --budgets ind-pharma`: 0 overruns, 629 visible words.
- motioncheck 1280 and 375: 0 errors, 0 hidden. Film of GradeMains reviewed. 1280, 375, dark reviewed.

## Polish (pass 9 round 3)
- GradeSwitch: off the limestone band onto the page ground (UrsGate's sunken ground above was nearly the same tone); plate keeps a line-strong hairline; phone screws pulled into the corners (one sat on "PRODUCT").
