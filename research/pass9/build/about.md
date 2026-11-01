# Pass 9 build notes: about (round 2)

Built 2026-11-01 on port 8766. Page file: `content/pages/26-about.json` (blocks 0–2). FAQ and related untouched.
Three new looks (ShopFloor is shared with careers block 0).

| # | Block | Look / component | Concept adapted | Art direction |
| --- | --- | --- | --- | --- |
| 0 | Company facts (spec) | `colophon` / Colophon | `32-concept-band` (one statement at editorial scale), `78-p9-sys-pw-0` (set-type stack), light type | measured editorial type |
| 1 | The people you would work with (grid) | `shop-floor` / ShopFloor | `61-concept-shop-route` (the shop floor as a navy isometric with numbered stations and a route) | navy blueprint, IsoKit (the page's one line-art scene) |
| 2 | What changes for a Canadian site (grid) | `site-tiles` / SiteTiles | `80-p9-sys-pw-2` Swiss tiles + figure plates (atlas: line art + text) | Swiss tiles with flat figure plates |

## 0 · Colophon
The scope row (the one `hl` fact) is the statement: its first sentence at 48 px light, the exclusion sentence after it
smaller behind a rule (split at the first full stop, words unchanged). The other nine facts are colophon lines: number
and tick in the gutter, mono label, the fact in 24 px light, evidence as a margin note with its link. Fold: the block's
`fold: 5` now counts the statement, so the list shows 4 lines + statement ("Show all 9 facts"). Motion: statement rises
line by line, lines follow with the fact wiping in. Phone: statement 32 px, each fact number + label / fact / note.

## 1 · ShopFloor
One isometric plan of the shop on navy (IsoKit: floor slab, walls, partitions with the aisle, seven stations — drafting
board, binders, binders and stamp, skid frame with PP spool and valve, RO rack, control panel, truck with crated skid).
Each person is a numbered station; a dashed walking route enters at the shop door and visits them in card order.
Stations no card uses stay drawn, quieter. Hover or focus a card lights its station, leg and pin. Motion: the shop draws
back to front, a drop walks the route station to station, pins drop in, card rules run across. Phone: plan band above the
cards. The name line "[Full name] · [licence or qualification]" shows as a nameplate (split from `d`, words unchanged).
Kit: rooms, walls and the walking route drawn in the renderer from IsoKit primitives (`isoBoxD`, `isoPoly`, `isoPipe` with
`wall: false`); no new part needed.

## 2 · SiteTiles
Four Swiss tiles, each opened by a flat figure plate: FAT a gauge whose needle sweeps, CRN a registration imprint that
strikes, feed water a year of temperature with the winter dip under a dashed design line, service a route from a base
to the site. Number 56 px light, title, line, link. Phone: one per row.

New optional fields: block 1 items `station` (front, ctl, fab); `look` on blocks 0–2. No copy cut.

## Polish (pass 9)
- Colophon: the statement now sits on the fact lines' four columns (number 01 in flow, label, text aligned with the facts); the tick is a flow mark on its rule over the number column.
- ShopFloor: the walking route is a bold on-navy dash (it was lost among the walls), kept off the partition (aisle y 185, door x 240, front station approached through the gap); card name, line and link spacing restored (`.aq-page p` reset was cancelling single-class margins).
- SiteTiles: links now sit on one line across the row (same reset bug), arrow stays with the link text; phone tile re-composed (square plate beside number and title): section 1841 → 1506 px.
