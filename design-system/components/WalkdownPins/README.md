WalkdownPins pins IQ and OQ checks to the installed system on a drawing sheet, as a walkdown mark-up (look `walkdown-pins`, spec block).

Concept: compliance.3 (a held drawing whose parts light with the item being read) and sys-pw.3 (hotspots on the equipment), drawn with IsoKit on a light sheet.

## Markup
`<section class="aq-section aq-walkdown-pins-sec">` > section head, `.aq-walkdown-pins` > `__fig` > `__sheet` (IsoKit svg with `isoSheet`, HTML pins `span.__pin[data-row]` placed by `isoPct`) and the fold wrapping `ol.__list` > `li.__row[data-row][data-lit][tabindex=0]` (`__n`, `h3.__t` with `__tag--iq|oq`, `p.__v`, `p.__m`).

## Fields
As a spec block: `rows` [{`p`, `v`, `m`, `part`}], `fold`, `fold_noun`. `p` "IQ · Joints" splits into the tag and the name. `part`: "branch", "joint", "analyzer", "coldest", "outlets", "panel", "skid", "gauge" (the drawing anchor and the parts that light); default "skid". Two pins on one part step apart.

## Rules
- IsoKit light sheet; pins are navy map pins with mono numbers; IQ tags ruled in `ink` (installed), OQ tags filled `flow` (running).
- Pointing at or focusing a row lights its parts (`is-lit`) and swells its pin. The drawing stays in view (sticky) while the rows scroll.
- The fold applies on phones only. Phone: the sheet above the list.

## Motion
The installed system draws and the water runs the loop once (IsoKit choreography), then the pins drop onto their parts in check order with a short bounce. Once, under 5 s.
