WetRunHmi sets an explainer as the test bay's operator screen: a process mimic of the skid that runs dry or with water, the findings water reveals pinned to its parts (look `wet-run-hmi`, prose block `as: "explainer"`).

Concept: HMI-screen art direction from the pass 9 pool, with sys-pw.3's idea (hotspots on the equipment leading to cards): the points are the alarm list, their markers sit on the mimic part each one is about.

## Markup
`<section class="aq-section aq-wet-run-hmi-sec" data-theme="dark">` > `.aq-in` > `.aq-wet-run-hmi` > `__side` (section head, `ol.__list` > `li.__pt[data-part][tabindex=0]` with `__n`, `h3.__t`, `p.__d`) and `__screen.is-wet` > `__bar` (`__lamp`, `__switch` with two `button.__mode[data-wrh-mode][aria-pressed]`) and `__mimic` (the svg, aria-hidden, and HTML markers `span.__mk[data-part]` placed in % of the mimic).

## Fields
`h`, `points` [{`t`, `d`, `part`}], `modes` [dry label, wet label]. `part`: "divert" (the three-way valve to drain), "outlet" (conductivity and TOC at the outlet), "record" (the data record); a point without one takes the next free part. `at` and `figure` are the fallback renderer's.

## Rules
- Dark section in both themes (`data-theme="dark"`); the screen is `surface-raised` with a `line-strong` frame. Mimic symbols are flat, 1.5 px `line-strong`; water is a 3 px `flow` line over the empty pipe; readouts are bars, never invented figures.
- State lives on the screen: `is-wet` (default, the page is complete without script) or `is-dry` (empty lines, blank readouts, unlit markers). The switch buttons are 44 px tall with `aria-pressed`.
- Pointing at or focusing a point swells its marker (`:has`).
- Phone: heading, screen, then the list; drawing labels drop, markers stay.

## Motion
The panel wipes in like a display coming on, the symbols draw, the switch sits on dry for a beat; then it flips to water: the water runs the pipe in order (feed, pump, RO, outlet, drain branch), the readout bars fill, the trend draws across the record, and each finding's marker lights in turn while the alarm list rises. Ends on the water position, under 5 s, once. The switch is the reader's afterwards.
