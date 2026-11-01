# Pass 9 build notes: svc-fabrication (blocks 0–3)

Round 2 builder, server 8770. Block 4 (faq) untouched (site-wide). No concepts of its own (Gemini quota): each
section adapts an idea from the pool, recast around the page's subject: the shop floor and PP joining.

| # | Block | Look / component | Adapted from | Art direction | Ground |
| --- | --- | --- | --- | --- | --- |
| 0 | table evidence (joint log, fold 4) | `joint-tag` / JointTag | sys-pw.4 (tags as objects) + industries.1.v2 (macro weld) | tactile macro object | surface |
| 1 | spec callouts (10 rows, fold 5) | `fusion-bench` / FusionBench | home.3 (drawing + callouts) + sys-pw.3 (pinned to the part) | navy blueprint shop drawing + parts list | navy band |
| 2 | docs (dossier) | `code-index` / CodeIndex | services.0 (huge cropped outline type) | kinetic / Swiss type | surface |
| 3 | steps (hold + witness points) | `shop-route` / ShopRoute | sys-pw.1 (route with numbered stops) | architectural floor plan on limestone | sunken (alt) |

Blueprint-style line art: sections 1 and 3 only, not neighbours in direction (navy isometric vs limestone plan).

## Sections
- 0 JointTag: a PP pipe in side view (flat limestone tones, both themes) runs off both page edges; two lengths fused at
  a double-rolled bead; printed lot markings on each length, "J-01" stencilled, a test coupon below, a dashed cut-out line.
  A traceability tag hangs on its wire from the joint: chamfered paper tag with eyelet, header legend (field / what it
  proves / J-01), eight form boxes (index, field, what it proves, record on a dashed fill-in line). Each field's number is
  a pin on its part (lot on the length, parameters and visual on the bead, test joint on the coupon, repair on the cut
  line, welder and date by the tag wire). Hover/focus a field lights its pin. Optional block field `parts`.
- 1 FusionBench: isometric joining bench on a navy sheet (IsoKit skid, gauge, clipboard, analyser as data logger,
  binders; clamps, heater plate, fused bead, coupon, test cap, open bore and rinse to drain drawn from primitives),
  balloons 01–10 on leaders; the ten rows as the drawing's parts list beside it (drawing sticky on wide screens). Hover
  a row lights balloon, leader and part. Optional `part` per row; the rows' `at` (old callouts) is ignored by the look.
- 2 CodeIndex: JNT, MAT, WQR, PT as 208 px outline Geist Mono cropped by the page edge, alternating sides; key documents
  (joint records, material log) in flow; number, name (the joint records link to cmp-documentation#samples with its
  intent kept), contents beside.
- 3 ShopRoute: limestone floor plan, double outer wall, six bays (U-shaped: 1–3 left to right, 4–6 back right to left)
  with plan furniture (desk, pipe rack, test bench with coupon, joining machine with clamps, test rig with gauge, rinse
  tank and roller door). One flow route enters at the top-left door, runs both lanes via the right aisle, leaves at the
  bottom-left door; a stop per bay; a gate and a "Hold point · Signed by both parties" stamp after bay 1; ringed stops
  and "Witness point" tags on bays 3–5. Last step keeps its link (cmp-documentation#index).

## Motion (one timeline each, once)
- JointTag ~4 s: lengths slide in and meet, bead rolls up, lot marks print, number sprays on, wire draws, tag drops and
  swings to rest, pins land, fields print.
- FusionBench ~4.5 s: AQiso.timeline builds the bench and runs the rinse water once; leaders run out, balloons land, rows
  slide in in the same order.
- CodeIndex ~1.6 s per row: code slides in from its edge and decodes, text rises.
- ShopRoute ~4.5 s: bays print, furniture draws; a navy spool travels the route (lanes draw behind it), each bay lights on
  arrival (stop lands, number decodes, stamp strikes, witness tag slides in); spool leaves by the bottom door. Phone:
  stops land in turn.

## Copy
- No copy cut. Recast only: in steps 3, 4 and 5 the sentence "Witness point." moves out of the text into the step's
  "Witness point" tag (exact words, now a tag instead of a sentence).
- Joint log: the column name "What it proves in an audit" shows once in the tag header on desktop (still in each field
  for screen readers, and shown per field on phones). FusionBench: column names shown once as the list legend (in each
  row for screen readers; shown per row on phones).
- Folds (joint log 4, standard 5) apply on phones only; desktop shows every field and row (the drawings pin all of them).
- Drawing labels (J-01, balloon numbers) are aria-hidden.

## Drawn inline / IsoKit
FusionBench uses IsoKit parts and primitives; the fusion machine (bed, clamps, heater plate), coupon, test cap and
open bore are drawn here (candidate IsoKit part: `fusion-machine`). JointTag's pipe and ShopRoute's plan are flat
(non-isometric) art directions on purpose.

## Checks
build + check: 0 problems from these components. check --budgets svc-fabrication: 0 overruns, 453 visible words.
motioncheck 1280 and 375: 0 errors, 0 hidden (a transient 2 hidden at 1280 were the Closing band, not these sections).
Light, dark and 375 reviewed.

## Weak or open
- FusionBench's bench is a compact drawing: at 1280 the balloons sit close round the clamps; the drawing is generic to
  thermoplastic joining (the joining method is still [PP joining method]); revisit when the method is decided.
- JointTag shows a butt-fusion style double bead; if Aquemi settles on IR or BCF fusion the bead profile should follow.
- ShopRoute's spool position is measured once when the section triggers; a resize mid-animation can offset it briefly.

## Pass 9 polish
- JointTag: the bent double line under the joint is now a real fused test coupon on a bench line (pin moved to its end);
  record values in sans, not mono; phone pins enlarged (r 24, 20 px numbers) and centred; joint-number pin lifted off the
  stencil.
- CodeIndex: outline codes painted stroke-under-fill, so the variable font's overlapping contours (inside N, Q, R) no
  longer show; hover fills with sunken / flow tint.
- ShopRoute: plan furniture smaller (26 %, max 128 px) so bay 5's test rig no longer runs into its text.
