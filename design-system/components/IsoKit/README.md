IsoKit is the shared isometric line-drawing kit: equipment, pipes, water flow, dimensions, leaders and drawing-sheet furniture in fine 1.5 px technical line art, so every section that draws a system reads as drawn by one hand.

Source: `assets/src/parts/IsoKit.js` (built into `assets/aquemi-site.js`; the functions are in scope for every renderer in `assets/src/blocks/`, and on `window.ISO`). Motion: `motion.js` here, with `window.AQiso` for looks.

## How it draws

- **Projection.** 30° isometric. World axes: **x** runs to the lower right, **y** to the lower left, **z** up. One world unit is one SVG user unit along an axis. `isoP(x, y, z)` → `[sx, sy]` (also takes `[x, y, z]`).
- **Hidden lines by painting.** Every solid (box, cylinder, domed shell) is filled with the ground colour, so whatever is drawn later hides what is behind it. Draw **back to front**: smaller `x + y` first, then pipes and parts in the order the water reaches them (this is also the order motion plays them).
- **Fronts face +y** (the lower-left face). Long equipment runs along x. A scene that should read left to right on screen alternates +x and −y moves, or places parts on the `x = −y` diagonal.
- **Lines stay 1.5 px at any size** (`vector-effect: non-scaling-stroke`); details 1 px; hidden lines (media beds, levels) 1 px dashed.

## Functions

| Function | Returns | What |
| --- | --- | --- |
| `isoSvg(w, h, inner, cls, opts)` | string | `<svg class="aq-iso cls" viewBox="0 0 w h">`, `aria-hidden` and `preserveAspectRatio="xMidYMid meet"`. `opts.origin [ox, oy]` shifts the iso world into the viewBox; `opts.under` is markup drawn under it in viewBox space (the sheet); `opts.label` makes it `role="img"` with that name instead; `opts.fit: 'slice'` crops. |
| `isoPart(kind, x, y, z, scale, opts)` | part | One piece of equipment as `<g class="aq-iso__part" data-iso="kind">`, anchored at the centre of its footprint on the floor (the RO rack, skid, wall, building and truck at their min corner). `opts.id` → `data-iso-id` (the stage a pipe's `to` lights); `opts.rot` quarter turns about z (0–3; check the drawing order when you rotate); `opts.cls`; part options below. |
| `isoPipe(points3d, opts)` | pipe | A pipe run through 3D points with rounded elbows. `r` radius (2.4), `bend` elbow radius (3 × r), `wall` twin wall (default) or `false` for one centre line, `flow` the water path (default on: `<path class="aq-iso__flow">` along the centre line), `to` / `from` stage ids, `flanges` `'ends'` / `'all'`, `caps` pipe-end rings (`true`, `'start'`, `'end'`, `false`), `id`, `cls`. Result has `.d` (centre-line path data), `.start`, `.end` (2D). |
| `isoRoute(a, b, order, opts)` | points | An orthogonal run from 3D `a` to `b`, one axis at a time in `order` (`'xyz'`, `'zxy'` …); `opts.via` lists 3D points to pass first. Feed it to `isoPipe`. |
| `isoArrow(p, dir, opts)` | string | Flow chevron on the run at 3D `p`, pointing along `dir` (`'x'`, `'-y'`, `'z'` or a vector). `size` (5), `len` (shaft), `cls`. Drawn in flow. |
| `isoDim(a, b, opts)` | dim | Dimension line between 3D points, offset by `opts.off` (3D vector), with extension lines and oblique ticks. `text` adds a short mono drawing label along the line (aria-hidden with the svg; never the only place a value appears). Result has `.mid` (2D label slot) and `.angle` (degrees). |
| `isoLeader(p, to, opts)` | leader | Callout leader from a 3D point on a part (dot) to `to`: a 2D point or `{dx, dy}` from the start, then a horizontal shelf `opts.shelf` (12; 0 for none) away from the part. Result has `.start`, `.end` (2D: put the HTML label here) and `.side` (`'left'` / `'right'`). |
| `isoSheet(w, h, opts)` | string | Drawing-sheet furniture in viewBox space, the quietest layer: border, zone band with numbers across and letters down, centring marks, title block (`title: true` or `{w, h}`), optional faint isometric grid (`grid: 'iso'`, `gridStep` 24). `m` margin, `band`, `cols`, `rows`. Pass it as `isoSvg(..., {under: isoSheet(w, h, {...})})`. |
| `isoPct(p, w, h, origin)` | `{left, top}` | Where a 2D point lands as percentages of the viewBox, to place HTML labels in an `aq-iso-figure`. |
| `isoBounds(points3d, pad)` | `{x, y, w, h}` | Screen bounds of 3D points, to size a viewBox. |

*part*, *pipe*, *dim* and *leader* results are string-like (concatenate them or `join('')` them as markup) and also carry their extra fields. A part's `.ports` are 3D points to connect pipes to and hang leaders from: every part has `top` and `base`; `in` / `out` where water enters and leaves (tank also `ret`; heat exchanger `in2` / `out2`; valve `a` / `b`; analyser `sample`; skid `deck`). `.at` is the 2D top point.

`window.ISO` has the same API: `P, svg, part, pipe, route, arrow, dim, leader, sheet, pct, bounds`, the part list `parts`, and the primitives `ring, band, cyl, box` (path data) with vector helpers `v`.

## Parts

| kind | What | Options |
| --- | --- | --- |
| `tank` (alias `vessel`) | Storage tank: domed vertical vessel on four legs, manway, vent, inlet and return nozzles on top, outlet low, sight tube | |
| `filter` | Media filter: slim domed vessel, multiport head with gauge, graded bed lines | `r`, `h`, `bed` (fractions) |
| `carbon` | Activated carbon vessel: wider, bed line, handhole, sample valve | |
| `softener` | Twin resin vessels with control heads and interconnect, brine tank behind | |
| `ro` | Reverse osmosis rack: square-tube frame, four membrane housings with end headers, vertical multistage pump, local panel | anchor at min corner |
| `edi` | Electrodeionization stack: end plates, cell pack, tie rods, DC terminal box | |
| `uv` | UV unit: chamber on saddles, lamp end cap, risers, intensity sensor | |
| `hx` | Plate heat exchanger: column, carrying bar, pressure plate, plate pack, frame plate with four ports | |
| `pump` | Centrifugal pump: base plate, volute with end suction and top discharge, motor with fins, fan cowl | |
| `valve` | Diaphragm valve with handwheel; `type: 'ball'` ball valve with lever. Anchor on the pipe centre line, along x | `type`, `r` |
| `gauge` | Pressure gauge: stem, socket, dial with ticks and needle | `value` 0–1, `face` `'y'` / `'x'`, `r` |
| `analyzer` (alias `instrument`) | TOC / conductivity transmitter on a post: display trace, keys, status light, glands, sample line | `post: false` |
| `panel` | Control cabinet: plinth, two doors, HMI with trace, pilot lights, selector, louvres, glands | |
| `skid` | Base frame: channel perimeter, cross members, lifting lugs, levelling feet | `w`, `d` |
| `outlet` | Point of use: drop, valve with handwheel, gooseneck spout, sink cabinet; the falling water is a flow | `to` |
| `desk` (alias `board`) | Drafting board: tilted board, drawing sheet, parallel rule, legs | |
| `binder` (alias `documents`) | Three ring binders standing, a stack of sheets in front | |
| `stamp` | Stamp: knob, neck, block; its imprint (ring and tick) in flow | `imprint: false` |
| `truck` | Flatbed truck: wheels, chassis, deck, cab with windscreen, crated load | `load: false` |
| `wall` (alias `cleanroom`) | Clean-room wall: panel joints, vision window, door with vision panel, coved floor line | `w`, `h` |
| `building` | Building: parapet, window bands, loading door, roof unit, stack | `w`, `d`, `h` |
| `clipboard` | Clipboard lying flat: clip, sheet, checklist with ticks in flow | `ticks` |

If a part is missing, draw it in your own renderer from the same primitives (`ISO.box`, `ISO.cyl`, `ISO.ring`, `ISO.band` give path data; wrap them in `<path class="aq-iso__eq">`) and say so, so it can join the kit.

## Composing a scene in a look

```js
var t=isoPart('tank',300,-260,0,1,{id:'tank'}), r=isoPart('ro',150,-196,0,1,{id:'ro'});
var run=isoPipe(isoRoute(r.ports.out,t.ports.in,'xyz',{via:[[r.ports.out[0]+8,r.ports.out[1],t.ports.in[2]+12]]}),{to:'tank',flanges:'ends'});
var lead=isoLeader(t.ports.top,{dx:0,dy:-40});
var inner=[r,run,t,isoArrow([r.ports.out[0]+8,r.ports.out[1],60],'z'),lead].join('');
var W=760,H=420,org=[40,300], at=isoPct(lead.end,W,H,org);
html='<div class="aq-iso-figure">'+isoSvg(W,H,inner,'',{origin:org,under:isoSheet(W,H,{grid:'iso',title:true})})+
 '<span class="aq-iso-figure__label aq-eyebrow" style="left:'+at.left+';top:'+at.top+'">'+tx(b.items[0].label)+'</span></div>';
```

- Order the markup back to front and in water order: feed pipe, first part, next pipe, next part …
- Stage ids: give the parts of one stage the same `id`, and each pipe the `to` of the stage it delivers to.
- Labels that matter are real HTML over the drawing (`aq-iso-figure` + `aq-iso-figure__label`, `--left`, `--above`, positioned with `isoPct`); SVG `<text>` only for short drawing labels (dims, zone letters).
- Phone: recompose rather than shrink (fewer parts, a vertical run with `isoRoute` order `'zxy'`), or keep the svg and stack the labels under it.

## Grounds and classes

- Default: light sheet (`surface` fill, `line-strong` equipment, `flow` water, `line` furniture). Modifiers on the svg: `aq-iso--raised`, `aq-iso--sunken`, `aq-iso--limestone`, `aq-iso--navy` (on-navy lines on a `navy` ground, flow lightened towards on-navy), `aq-iso--ink` (stronger `ink-muted` lines for small drawings), `aq-iso--current` (lines in `currentColor`). Wrap a navy drawing in `aq-iso-figure aq-iso-figure--navy` so the ground and labels follow. Dark theme follows the tokens.
- Inside: `aq-iso__part` (`is-lit` turns a stage's lines flow), `aq-iso__eq` (filled solid; `--alt` sunken fill, `--glass` display, `--sheet` paper), `aq-iso__ln`, `aq-iso__thin`, `aq-iso__hid` (dashed hidden line), `aq-iso__acc` / `aq-iso__trace` (flow accents), `aq-iso__pipe` with `-body`, `-wall`, `-line`, `aq-iso__flange`, `aq-iso__flow` (`--line`, `--drop`), `aq-iso__arrow`, `aq-iso__dim`, `aq-iso__leader`, `aq-iso__label`, `aq-iso__sheet`, `aq-iso__grid`. Fills are only surface, limestone and navy tokens; `flow` is only ever a line.
- Never use it for: the brand mark, interface icons (use Icon / Spot), or P&ID schematics (those stay flat ISA-5.1 symbols, ProcessDiagram).

## Motion

`motion.js` takes every `svg.aq-iso` no other component has claimed (including ones claimed later in the same run; opt out with `data-iso-motion="off"`) and plays once on scroll-in: the sheet fades up, each part's lines draw on back to front and its fill settles in, the pipe walls draw along the route with the dimensions and leaders, then the water runs the route once (a flow line drawing along `aq-iso__flow` with a droplet at its head) and each stage lights as the water reaches it, then settles. Ends static within 5 s. Nothing runs under reduced motion; the drawing is complete without script.

Looks reuse the same choreography on their own trigger and timing:

```js
AQmotion.fx('PlantRoute', function (root, m) {
  var el = root.querySelector('.aq-plant-route'); if (!el) return; m.claim(el);
  var svg = el.querySelector('svg.aq-iso');
  var tl = AQiso.timeline(svg, m, { draw: 1.2, flow: 1.8, keep: true,
    onStage: function (parts, id, i) { var c = el.querySelector('[data-stage="' + id + '"]'); if (c) c.classList.add('is-on') } });
  if (tl) { tl.from(el.querySelectorAll('.aq-iso-figure__label'), { autoAlpha: 0, stagger: 0.1, clearProps: 'opacity,visibility' }, 'pipes');
    m.on(el, function () { tl.play() }) }
});
```

`AQiso.timeline(svg, m, opts)` returns a paused timeline (or `null` under reduced motion): `draw` (1.6 s), `pipe` (0.9), `flow` (1.6, whole route), `at`, `stagger`, `drop` (true), `keep` (stages stay lit), `play`, `onStage(els, id, index)`, `onDone()`. Labels `parts`, `pipes`, `flow`, `end`; `tl.data.arrive[id]` is when the water reaches each stage. `AQiso.light(svg, id, on)` lights a stage by hand (hover a label, light its part).

## Accessibility

Drawings are decoration: `isoSvg` sets `aria-hidden="true"` and `focusable="false"`, and everything a reader needs (stage names, values) is real text in the DOM beside or over the drawing. Use `opts.label` only for a drawing that stands alone and carries meaning; then the label says what it shows in one sentence. SVG `<text>` is only for short drawing labels that repeat visible text. Hover or press highlights (`AQiso.light`) must come from a real, focusable control with a 44 px target.
