# Pass 9b build notes: sys-storage (blocks 0–5)

Server 8768. Page file `aquemi-web/content/pages/07-sys-storage.json`; block 6 (faq) untouched.

| # | Block | Look | Concept | Decision | Library port |
| --- | --- | --- | --- | --- | --- |
| 0 | spec (rules) | `rule-figures` (kept) | sys-storage.0: rules table beside a duotone weld macro | **Kept**. The concept's one idea is a photographic material macro we cannot draw honestly, and it explains none of the rules; the live look gives every rule its own figure. | none |
| 1 | diagram | `loop-circuit` (upgraded) | sys-storage.1: blueprint P&ID strip, stations over a numbered caption row | **Upgraded to the concept**: display-scale light headline; the HMI screen became one horizontal P&ID strip on the navy band, seven columns, every station over its caption (feed + valve, tank in section with vent filter and spray ball, pump, shell-and-tube exchanger, outlets on drops, CE/TE/FE/AE, return riser with detail A of the spray ball); column rules run up through the drawing; numbered tags removed (the columns pair them). | **race-replay** → scroll-linked ringed marker follows the water's route, the water fills behind it, stations and captions light (the page's one scroll-linked story; no pin) |
| 2 | table (sanitization) | `method-bento` (kept + port) | sys-storage.2 (take 2): 4-column method table + iso pump/UV assembly, navy ozone callout | **Kept** the bento (its hot-water thermometer already does what the table cannot); added the probe. | **slider-detents** → drag (or key) a needle along the hot-water rail; snaps to 65 / 80 °C; aria-live readout of the zone. New field `scale.base` ("Inside the PP maker's curve", the row's own words) |
| 3 | spec (tank) | `tank-tiles` / TankTiles (**new**, replaces `tank-section`, deleted) | sys-storage.3: Swiss navy/limestone checkerboard, huge slash numerals, one blueprint tank tile | **Replaced, concept followed**: 4-column grid of square tiles, head in the first navy tile, steel-blue blueprint of the tank (hatched wall, level, spray, vent, H/ID) in the third, ten rows as tiles with 72 px light numerals, value and basis. Also fixes the page having two navy blueprints in a row. | **shutter-scene** → each tile's opposite-tone slats retract in a diagonal wave, numerals roll on the odometer |
| 4 | docs | `sheet-stack` (kept) | sys-storage.4: soft-3D PP skid with leaders to each document | **Kept**. The concept's render is a material moment we have no asset for, and an iso skid here would duplicate block 5's loop; the doc-to-part pinning fits weakly (hydraulic calc and P&ID describe the whole loop). | none |
| 5 | options | `loop-dock` (upgraded) | sys-storage.5: one navy schematic band, leaders out to three captions on limestone | **Upgraded to the concept**: the IsoKit loop now sits on a full-width navy band (navy hand); leaders drop from each part and slant to its caption column on the limestone below; display-scale heading. Items reordered left to right along the loop (UV, modules, coolers) so leaders never cross. | none (IsoKit timeline + leaders draw on) |

## Motion summary
Wow: LoopCircuit scroll story. Better moments: MethodBento probe (interactive), TankTiles shutters, LoopDock leaders. Neighbours move differently (figure draw / scroll route / probe / shutters / sheets explode / iso flow).

## Content (page file)
- Block 2: `scale.base` added. Block 3: `look` → `tank-tiles`; `at`/`part` removed from rows. Block 5: items reordered (UV, Prefabricated loop modules, Point-of-use coolers); `part` defaults now `uv`, `mod+uv`, `cool`.
- Copy cut: none. Decorative aria-hidden: tank tile caption repeats the eyebrow (hidden on phones), detail letters "A".

## Checks
build, check 0 problems; budgets 0 overruns; motioncheck 1280 and 375: 0 errors, 0 hidden; no horizontal scroll at 375; light and dark reviewed; probe keyboard (arrows, Page Up/Down, Home, End) and focus ring checked.

## Still weak
- Block 0 and 4 keep their pass-9 looks (concepts were material renders).
- LoopDock's loop occupies the middle of the wide band; the band's sides are quiet.
- The probe exists only when motion runs (reduced motion: static scale, complete).
