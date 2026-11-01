SuiteLoop draws a router table as a plan of one shared loop serving a row of suites: every situation is a room fed by its own drop and valve off the loop, with the start page as the room's way out.

- On the site: a `table` block with `"as": "router"` and `"look": "suite-loop"` (renderer `assets/src/blocks/look-suite-loop.js`); used on ind-cdmo (many clients, one water system). Origin: no concept of its own (quota); adapted from industries.0 / home.4 (situations piped off one manifold) and the page drawing ind-cdmo (suites on a shared loop).
- Markup: limestone band → `div.aq-suite-loop` → `span.__loop` (twin walls, `span.__water`, `span.__arrow`), `ol.__suites` of `li.__suite` → `span.__drop` (`span.__dw` water, `span.__valve` svg), `span.__door` (door swing in the lower wall), `span.__tag` "01", `h3.__t`, `dl.__dl` of `div.__f` (middle columns), `a.__go` (last column).
- Fields: `cols` (situation, water, systems, start with), `rows` (string or {t, link, intent} cells).
- Tokens: walls and pipes `on-limestone` mixes, water `flow`, valves `limestone`; the way out turns `navy` on hover/focus; hovering a suite runs water down its drop.
- Mid widths: three suites a row (only the first row keeps drops). Phones: the loop runs down the left as one riser, each suite branches off it.

## Motion

The loop's walls run round the sheet and the water follows; one by one each suite wipes up, its drop is cut from the loop, the valve seats, the water runs down into the suite and settles back, and the words read in. Once on scroll-in, under 5 s; nothing under reduced motion.
