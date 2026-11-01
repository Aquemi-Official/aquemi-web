# Pass 9 build notes: systems (content/pages/02-systems.json, blocks 0–3)

Server 8768. Blocks 4–5 (faq, related) untouched.

## 0 · How the systems fit together → look `strata-run` (StrataRun)
- Concept systems.0 (one continuous run, feed water to points of use) executed as layered paper-cut depth: a terrace of
  stacked paper slabs stepping down left to right (so water order = back-to-front painting order), one slab per stage,
  IsoKit equipment on each (feed riser + ball valve + gauge; filter + carbon; RO + EDI; tank; pump + UV + analyser;
  three outlets), one pipe running down the terrace, distribution header over the outlets and an overhead return to the
  tank. A flow-tint cut-paper stream behind; a dashed monitoring bus along the foot (base line).
- Labels in a row of six columns; each label's left hairline continues as the svg leader down to its part.
- New fields: `link` per stage (Pretreatment → sys-pretreatment, PW generation → sys-pw, Storage and Distribution loop →
  sys-storage), `base_link` (sys-monitoring), optional `art`. Hover/focus on a stage link lights its equipment.
- Drawn inline (not in IsoKit): the paper slab stacks, the stream band, the bus. Equipment all from IsoKit.
- Motion: labels rise, leaders draw down, stream wipes in, sheets fall and settle (top stage first), then
  AQiso.timeline draws equipment, pipes, water; each label's hairline turns flow as water arrives.
- Phone: scene hidden; vertical pipe rail (twin walls + flow line + ring per stage), each stage with its own slab drawing.
- Copy: nothing cut.

## 1 · Budget ranges before a quote → look `budget-bento` (BudgetBento)
- From the pool (Swiss numbered tiles, sys-pw.2; data-viz range glyph), keeping systems.1's "equipment beside each
  scope" as Spot icons. Navy lead tile (whole package) with a huge cropped outline numeral, range in large mono over a
  range bracket (ruler + band between brackets, aria-hidden, never positions a value), basis as a ticked list; three
  module tiles beside it. Note parsed into two chip rows ("Moves the price", "Not included" struck/dashed) + link.
- New field: `spot` per module row. Column label "Scope" no longer printed (the h3 is the scope); "Budget range" and
  "Basis" keys kept.
- Motion: lead prints up, numerals slide in, module tiles slide in, ruler ticks rise, bands open from centre, chips pop.
- Phone: one column, sizes step down, chips wrap.
- Copy: nothing cut (list items and chips capitalised for display only).

## 2 · What changes on your site → look `battery-limit` (BatteryLimit)
- Concept systems.2: navy/limestone split, the divide is the battery limit, drawn as a P&ID dash-dot line with its name
  set vertically. Row 01 (Connection points (battery limits)) is a card straddling the seam; package cards on navy, site
  cards on limestone, each tied to the seam by a leader ending in a tie-in diamond; the two lists share a subgrid so
  nodes alternate like a zip.
- New fields: `side` per row (limit/package/site), `sides` ["The PW package", "Your site"], `seam` "Battery limit".
  Side assignment is by where the item lives (package property vs site work), not who supplies it (no new claim).
- Fold 4 kept on phones only (desktop shows all 8).
- Motion: line draws down, name decodes, navy half opens from the seam, limit card stamps, cards slide in from their
  side, leaders run to the seam, nodes seat.
- Phone: navy full-bleed block (heading + package cards), limit card on the join, site cards on limestone.
- Copy: nothing cut.

## 3 · Start from the standard you cite → look `standard-wires` (StandardWires)
- Concept systems.3 (blueprint allowed): navy band, header row of column names, standards large in mono, asks, answer
  chip; a wire from each chip across to a drawing plate cell and stepping to the IsoKit equipment that answers it
  (analyser for USP <645>/<643>, tank + pump loop for WHO TRS 1033, panel for Part 11, filter + carbon for USP <1231>).
- New field: `art` on the answer cell. Fold 3 kept.
- Motion per row on scroll-in: index pops, standard decodes, chip strikes, part draws and water runs, wire draws, part
  lights as the wire lands. Hover/focus lights chip, wire and part.
- Phone: rows stack, chip beside its drawing; header, wire and title block hidden.
- Copy: nothing cut.

## Checks
- `check`: 0 problems in these four components (other builders' components carry their own). `check --budgets systems`: 0.
- motioncheck 1280 and 375: 0 errors, 0 hidden. No horizontal scroll at 375. Light and dark reviewed.
