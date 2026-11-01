# Pass 9 build notes: careers (round 2)

Built 2026-11-01 on port 8766. Page file: `content/pages/27-careers.json` (blocks 0–2). Form, FAQ, related untouched.

| # | Block | Look / component | Concept adapted | Art direction |
| --- | --- | --- | --- | --- |
| 0 | Roles, base and pay (table, router) | `shop-floor` / ShopFloor (shared with about) | `61-concept-shop-route` | navy blueprint, IsoKit (the page's one line-art scene) |
| 1 | Pay, benefits and terms (spec) | `time-card` / TimeCard | tactile objects of `82-p9-sys-pw-4` / `92-p9-compliance-2`, as the one paper of a working week | tactile paper object |
| 2 | How we hire (steps) | `hire-path` / HirePath | `83-p9-services-0` (huge light outline type) + `16-concept-steps` (one route), flattened | kinetic light type on a path |

## 0 · ShopFloor (roles)
"A week on the shop floor": the six roles are stations on the same shop plan as About (drafting board, fabrication skid,
RO rack in the test bay, control panel, dispatch truck, binders and stamp). The plan is sticky on wide screens and the
card crossing the middle of the view lights its station as you scroll; hover or focus does the same. Each card shows the
role large and its four columns as labelled fields (column names from `cols`). Phone: plan band above, fields stacked.

## 1 · TimeCard
Terms as the shop's time card: limestone card with hang hole, column header, a ruled line per term with a punch slot and
number, the note "The posting and written offer govern." stamped at the foot; an outlined card beneath it. Motion: card
rises from its slot, each line punched (slot fills) as it types in, stamp strikes. Fold kept (3 terms).

## 2 · HirePath
Four steps as gates on one track: huge light outline numerals (168 px), node on the track, name and line under each;
the practical interview's four exercises drawn as icons (pid, weld, binder, wrench, in the order its text names them).
Motion: track draws, water runs it, each numeral and node fill as it passes. Phone: track down the left, 72 px numerals.

New optional fields: block 0 `stations` [design, fab, test, ctl, dock, qa]; block 2 item 3 `icons`; `look` on 0–2.
No copy cut.

## Polish (pass 9)
- ShopFloor: route and card spacing fixes as on About.
- TimeCard: slots rest punched (navy); motion blanks them and punches each as its line types; stamp spacing restored.
- HirePath: settled state is the walked path (flow track, filled nodes) instead of an empty grey track; numerals a pale solid fill (the text-stroke outline showed Geist's overlapping contours); track shortened so its chevron no longer causes a 2 px horizontal scroll at 1280.
