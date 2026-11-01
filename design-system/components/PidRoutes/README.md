PidRoutes draws a router table (situation, system, start with) as a P&ID on a navy blueprint ground: each situation is piped through its own valve to its system and on to where to start, and rows that share a destination page are tied by a header line.

- Look: `"look": "pid-routes"` on a `table` block (renderer `assets/src/blocks/look-pid-routes.js`). Fields as the table block: `cols` (three labels), `rows` (`[situation, system, start]`, each cell a string or `{t, link, intent}`), `nav` (the drawing caption). No new fields.
- Markup: `section.aq-band--navy.aq-pid-routes-band` > `.aq-pid-routes` > aria-hidden column heads and tick rulers, then `ol.aq-pid-routes__list` (role list); each `li.aq-pid-routes__route` (display: contents) holds `.aq-pid-routes__sit` (double-framed box, "Path 0N" tag, `h3`), `.aq-pid-routes__run--a`, `.aq-pid-routes__node--sys`, `.aq-pid-routes__run--b`, `.aq-pid-routes__node--go`. Every cell carries `data-r` (its row); tie lines and junction dots carry `data-rs` (the rows they join).
- Runs: a stretched svg (non-scaling 1.5 px strokes) with the run and its ties; fixed-size ISA-5.1 style valves (gate, globe, diaphragm, check, ball by row), an instrument bubble on some untied rows, a port dot and an arrowhead. A tie whose group skips a row breaks around that row's run (the line-crossing convention).
- Colours: `navy` ground, `on-navy` text and symbols, `on-navy-muted` lines and labels; water and hover in `flow` mixed 45 % with `on-navy` (contrast on navy). Geist in the boxes, Geist Mono for heads, tags and caption.
- Column labels are read by screen readers on desktop (visually hidden; the drawn heads are aria-hidden) and shown on phones. A node's link covers its box; focus draws an `on-navy` ring round the box.
- Hover or focus on any cell of a route lights the whole route (runs, valves, boxes, shared ties) and dims the rest.
- Phones: each route stacks, situation over system over start; the runs turn vertical with the valve turned 90°; ties and instruments are dropped.
- Not for tables of values (use CompareTable or MacroLeaders). The drawing is a reading aid; every word is in the boxes.

Motion (`motion.js`): column heads decode and rulers run out; situation boxes print in from the left; route by route the first run draws from the port, the valve swings into line, a droplet rides the run and the system box lights, then the second run, valve and start box; shared ties draw last and the lights settle (about 3.6 s). Phones draw the runs downwards. Nothing under reduced motion.

Ported (pass 9b): Subframe Motion "Animated beam" (animated-beam): while a route is pointed at or focused, a bright head with a fading tail keeps running it, situation to system to start, through both valves (0.9 s per run, 0.16 1 0.3 1). Wide screens.
