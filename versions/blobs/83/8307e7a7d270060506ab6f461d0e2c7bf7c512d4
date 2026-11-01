ReviewReticles frames each area an assessment reviews in an inspection viewfinder: corner brackets, a crosshair and the index around an IsoKit drawing of the thing reviewed, the area's name set large under it.

Look `review-reticles` (`assets/src/blocks/look-review-reticles.js`) on a `grid` block with `as: "route"`. Used on svc-upgrades, "What the assessment reviews". Concepts adapted: industries.1 (a view read through numbered markers) as figure plates, and the atlas's Swiss grid with one drawing per tile.

- Markup: `section.aq-band--limestone.aq-review-reticles-sec[data-theme=light]` > `ol.aq-review-reticles` > `li.__item` > `a|div.__body` (`__vf[aria-hidden]` with `__br--tl|tr|bl|br`, `__cross`, `__no`, `__pic` (`svg.aq-iso.__iso` or `.aq-icon.__ic`), `__scan`; `h3.__t`; `p.__d`).
- Fields: `h`, `items [{t, d, spot, part, link}]`; new optional `part` (an IsoKit part kind); without it the spot picks one (binder, toc -> analyzer, ro-skid -> ro, storage-tank -> tank, heat-exchanger -> hx, cpu -> panel), else the spot's icon.
- Tokens: limestone band; brackets 2 px `navy`; crosshair and frame hairlines from `on-limestone-muted`; scan line `flow`; names Geist 300 26 px.
- Phones: two columns below 1000 px; below 860 px an inspection list: a square viewfinder (2/5) beside the name and the line, hairlines between.

Motion: per frame (staggered across a row) the brackets close in from wide, the drawing prints up, a scan line sweeps the frame once, and the index, name and line rise. About 1.5 s per row. Hover tightens the brackets.
