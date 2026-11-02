# Pass 9b build notes: about

Built 2026-11-01 on port 8768. Page file `content/pages/26-about.json` (block 1: look `source-skid`, new `parts`,
`station` fields removed). FAQ and related untouched.

| # | Block | Look / component | Concept | Decision |
| --- | --- | --- | --- | --- |
| 0 | Company facts (spec) | `colophon` / Colophon | about.0 followed (skid drawing left out) | upgrade in place (only about uses it) |
| 1 | The people you would work with (grid) | `source-skid` / SourceSkid (new) | about.1 followed | replace: `shop-floor` is also used by careers, so a new look; ShopFloor kept for careers |
| 2 | What changes for a Canadian site (grid) | `site-tiles` / SiteTiles | about.2 followed | upgrade in place (only about uses it) |

## 0 · Colophon (split ledger on navy)
The colour split of the concept: a navy band with a limestone strip from the page edge to the end of the item column;
the title set at display size (up to 184 px, Geist Light) straddles the strip's edge, limestone type on navy and navy
type on the strip (an aria-hidden copy of the title clipped to the strip). The facts ledger runs on through the split:
"01 / SCOPE" items on the strip, facts (Geist Light) and evidence with links on the navy; column names from `cols`.
The scope row's exclusion sentence sits under its fact, quieter (split at the first full stop, words unchanged). The
concept's small skid drawing was left out: the next section draws the skid. Fold now shows 5 of 10 rows ("Show all 10
facts"; the scope row is no longer a separate statement). Phone: strip narrows to the number column.
Motion: the strip waits off the page edge while the title lands, then the divider sweeps in and the letters it passes
turn navy (image-comparison mechanism: one divider position drives strip and clip); rows follow. The fold opens rows
from no height (expandable-ledger).

## 1 · SourceSkid (people beside the package; made vs bought)
Left: the title and three quiet ruled cards (number and role, the "[Full name] · [licence or qualification]"
nameplate, what to ask, link). Right: the intro sentence, then one IsoKit skid (base frame, open frame, PP pipework;
two membrane housings, the EDI stack, a transmitter and a pressure gauge) with three numbered callouts from the live
intro only: 01 The package / "We design and fabricate"; 02 Instruments / "From their makers"; 03 Membranes and EDI
modules / "From their makers" (new optional field `parts`). No other part is labelled. Callouts are buttons: hover,
focus or press lights the group, lifts a maker's group out of the frame and quietens the rest. The concept's soft-3D
render became IsoKit line art; invented names ignored. Phone: cards, intro, the drawing cropped to the skid with
numbered pins, callouts listed under it.
Motion: cards rise; frame and pipework draw (IsoKit), then the makers' groups are lowered into the frame one by one
(exploded-camera, 600 ms .22/1/.36/1) as each leader runs out and its callout rises; water runs once.
Kit: open frame members drawn in the renderer from `isoBoxD`; membrane housings as fat capped `isoPipe` runs (no
`housing` part in IsoKit).

## 2 · SiteTiles (navy drawing sheet)
Concept followed: a framed navy sheet with zone numbers over the columns and letters down the sides, the title large
top left, four columns under a rule, each with number, title, one IsoKit part (FAT: PP spool with valve and pressure
gauge; registration: stamp and imprint; feed water: softener; service and spares: truck with crated load), then the
line and link (columns share rows through subgrid). The concept's title block text (invented drawing numbers) left
out. Pointing at or focusing a column lights its part and fills its zone number (CSS). Phone: one column per row, the
drawing beside number and title.
Motion: the outer columns swing open like a gatefold's wings (paper-fold, 720 ms .25/.75/.2/1), inner ones rise, then
each column's part draws in IsoKit order.

## Copy
No copy cut, no new facts. Callout words come from the block intro ("We design and fabricate the package; membranes,
electrodeionization (EDI) modules and instruments come from their makers."). Nothing implies WFI, stills or stainless.

## Checks
build; check 0 problems in these files; budgets 444 / 1300 words; motioncheck 1280 and 375: 0 errors, 0 hidden.
Light, dark, 375 and the hover/focus states viewed.

## Still weak / notes
- `design-system/components/ShopFloor/README.md` still names About as a user (careers only now); not edited (shared).
- SourceSkid phone drawing is small and pins 02/03 sit close; the membrane housings read as long cylinders.
- SiteTiles band numbers stay four across in the 860-1100 px two-column layout.
