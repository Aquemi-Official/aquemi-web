ProcessDiagram draws a treatment train as an interactive piping flow in single-weight line art: each stage is a station with its equipment vignette, joined by one double-hairline `flow` pipe with arrows, and choosing a station tints the pipe up to it and opens that stage's detail.

## Markup

The website builds it from a `diagram` block (`AQ.wDiagram`, which calls `wFlow` in `assets/src/parts/ProcessDiagram.js`). Write markup by hand only where the renderer is not available; `preview.html` is generated from the renderer.

```html
<div class="aq-plate aq-plate--block aq-diagram__plate">
  <div class="aq-diagram [aq-diagram--base]" style="--n:7">
    <div class="aq-diagram__line" role="group" aria-label="7 stages in flow order; choose one to see its detail">
      <button type="button" class="aq-diagram__st" id="…-s0" aria-pressed="true" aria-controls="…-d0" style="--i:0">
        <span class="aq-diagram__run" aria-hidden="true"><span class="aq-diagram__fill"></span></span>
        <span class="aq-diagram__fig" aria-hidden="true"><span class="aq-spot aq-spot--s aq-diagram__spot" style="mask-image:url(assets/icons/softener.svg)"></span></span>
        <span class="aq-diagram__n">01</span><span class="aq-diagram__t">Softened, dechlorinated feed</span>
      </button>
      <div class="aq-diagram__d" id="…-d0" role="region" aria-labelledby="…-s0" style="--i:0">
        <span class="aq-diagram__dn" aria-hidden="true">01<small>/07</small></span>
        <div class="aq-diagram__db"><p class="aq-diagram__dt">…</p><p class="aq-diagram__dd">one line</p><p class="aq-diagram__dx">tag, link</p></div>
        <p class="aq-diagram__io"><span><b>In</b> …</span><span><b>Out</b> Heat exchanger</span></p>
      </div>
      … one button and one detail per stage, in flow order (the last button also carries is-last) …
    </div>
    <p class="aq-diagram__base"><svg …/><span>Monitoring and controls · TOC and conductivity</span></p>
  </div>
  <div class="aq-plate__block">…</div>
</div>
```

## Data (`diagram` block)

- `stages`: 4 to 7 entries in flow order. Each is a name, or an object `{t, d, spot, icon, tag, link}`:
  - `t` stage name, sentence case as engineers write it ("RO pass 1").
  - `d` optional one line (≤ 16 words): what the stage removes or controls. Shown in the detail panel. Without it the panel shows the stage's In and Out connections only, so add `d` wherever the stage needs explaining.
  - `spot` a Spot name (`assets/spots`: pretreatment, ro-skid, edi-stack, still, pure-steam-generator, storage-tank, pump, heat-exchanger, uv-ozone) or `icon` an Icon name for stages without a spot (valve, softener, carbon-filter, ro-membrane, conductivity, loop, tank …). With neither, a line glyph is picked from keywords in the name (heat exchanger, RO, EDI, UV, softener, carbon, filter, column, pump, steam, loop, tank, instrument, PLC or controller (rack), network or server (nodes), HMI/SCADA/control (screen), drop for feeds).
- `base` optional: what spans every stage (monitoring, controls, sanitisation); draws a dashed control boundary round the train with the label at its foot.
- `from` / `to` optional pipe-end labels; `caption` an `aq-small` paragraph under the plate.
- Every string, `base`, `from` and `to` included, goes through the Placeholder helper (`tx`), so a `[bracketed fact]` there shows as a placeholder, as everywhere else.

## Behaviour

- **Stations are toggle buttons** (`aria-pressed`, `aria-controls` the detail). Exactly one is pressed; the first by default. Click, or Arrow keys / Home / End within the row, selects and moves focus.
- **Selected:** its incoming pipe run and every run upstream tint `flow-tint` (water has reached here); its box edge, index and name take `flow`; its detail shows, the others carry `hidden`.
- **Motion:** none beyond colour changes (200 ms). The renderer still calls GSAP when a page loads it, to fill the run in 0.55 s and raise the panel in 0.35 s once per selection; the site no longer loads GSAP, so the change is immediate. Nothing loops.
- **Without script:** the page script adds `is-live` to `.aq-diagram` (a MutationObserver after each render). Without it every detail stays visible: its line under its own column on desktop, inline under each station on phones.

## Layout

- **Desktop:** one row of `--n` equal columns in the Plate (a `line` frame on `surface-raised`). Box 120 px high, up to 128 px wide, 1 px `line` frame on `surface`, Spot `s` (96 px) in `ink-muted`; the index (Geist Mono 12/16 `ink-subtle`) in its top-left corner; the name under it in Geist 500 14/20, sentence case as written. The pipe is `space-3` high with 1.5 px `flow` walls (two hairlines), entering from the plate edge and leaving it with an arrowhead; a small arrow sits mid-run. The detail spans the row under it below a 1 px `line` hairline, with a 1 px `flow` leader up to the selected column: index in Geist Mono 300 32/36 `ink`, title, line, tag and link, and In/Out (eyebrow labels) at the right.
- **Phone** (`@container (max-width: 860px)`): one vertical pipe (12 px, 1.5 px walls) through compact 56 px boxes (Spot drawn at 48 px, Icon at 36 px), index in the box corner, name beside it (14/20); 4 px between stations. The selected detail tucks in under its name, beside the box (13/20), so a seven-stage train is about 450 px. In/Out labels show only for stages without a `d`; the plate caption is hidden. No horizontal scroll; every label 12 px or more.

## Token rules

- Pipe walls and arrows `flow` (the water path); tint inside the pipe `flow-tint`, never a solid `flow` bar or panel.
- Boxes 1 px `line` on `surface`, square corners; the detail is separated by a `line` hairline, not boxed. Glyphs and vignettes `ink-muted` (single weight, 1.5 px strokes). Text `ink`, detail line `ink-muted`.
- Labels in uppercase (pipe ends, In/Out, the control boundary caption) use the eyebrow style: Geist Mono 500 12/16, 0.08em, `ink-muted`. Everything else sentence case.
- The control boundary (`aq-diagram--base`) is a 1 px dashed `line-strong` rule, square corners.
- Focus: 2 px `focus` outline round the station.
- Spacing from `--space-*`; local geometry variables (`--fh`, `--fw`, `--g`, `--pw`, `--n`, `--i`) always with token fallbacks.

## When to use, when not

- One linear treatment train of four to seven stages on a system page. More than seven: split the train and link the pages.
- Not for branched flows, recirculation drawings or real P&IDs; the pipe runs one way. Not for project timelines or service steps (ProcessSteps).
- The system families from feed to point of use use the same drawing through WaterPath.

## Motion

Motion (`motion.js`, GSAP): water travels the pipe once on scroll-in. Each run fills as the water reaches it and drains behind it (only the pressed station's run stays full); each station lights as the water arrives (its vignette prints in bottom to top, the box settles, number and name come up from dim); then the selected stage's detail panel rises with its big number. One timeline, about 4 s on seven stations; the phone runs the same down the vertical pipe. Choosing a station (`flSel` in `parts/ProcessDiagram.js`) plays a short timeline (< 1 s): the water runs on from the previous station through each run in between (shown in full Flow by `is-flowing`, then draining), the new station settles and its detail rises. Hover lifts a station's box a hair, press sets it down. Nothing runs under reduced motion; without script every detail shows.
