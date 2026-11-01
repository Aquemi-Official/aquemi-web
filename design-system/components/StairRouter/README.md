StairRouter draws a router table ("which situation are you in, where do you start") as a rising staircase of situation cards over huge cropped outline type, every route open at once.

Pass 9 look `stair-router` (`assets/src/blocks/look-stair-router.js`), set with `"look": "stair-router"` on a `table` block with `as: "router"`. Without the look the block renders as the Router component. First used on services ("Where to start"); any of the other router blocks can adopt it by adding the look and, optionally, `labels` and `kinetic`.

## Markup

```html
<section class="aq-section aq-stair-router-sec">
  <div class="aq-stair-router__type" aria-hidden="true">            <!-- outline word, drawn twice -->
    <div class="aq-stair-router__words aq-stair-router__words--navy"><span class="aq-stair-router__w aq-stair-router__w--a">Start</span>…</div>
    <div class="aq-stair-router__words aq-stair-router__words--lime">…same words…</div>
  </div>
  <div class="aq-stair-router__wedge" aria-hidden="true"></div>
  <p class="aq-stair-router__go" aria-hidden="true">Go</p>
  <div class="aq-in"><div class="aq-stair-router" style="--n:7">
    <header class="aq-sec-head">…</header>
    <ol class="aq-stair-router__flight">
      <li class="aq-stair-router__step is-link" style="--i:0">
        <span class="aq-stair-router__n" aria-hidden="true"><span class="aq-stair-router__num">01</span><span class="aq-stair-router__arrow"></span></span>
        <span class="aq-stair-router__tread" aria-hidden="true"></span>  <!-- steps after the first add __riser -->
        <div class="aq-stair-router__card">
          <a class="aq-stair-router__hit" href="#svc-design" data-wp="svc-design" tabindex="-1" aria-hidden="true"></a>
          <h3 class="aq-stair-router__t">New system</h3>
          <dl class="aq-stair-router__dl">
            <div class="aq-stair-router__f is-sit"><dt>Your situation</dt><dd>…</dd></div>
            <div class="aq-stair-router__f is-go"><dt>Start with</dt><dd><a href="#svc-design" data-wp="svc-design">Process design: request a URS gap review</a></dd></div>
            …
          </dl>
        </div>
      </li>
    </ol>
    <span class="aq-stair-router__drop" aria-hidden="true"></span>
  </div></div>
</section>
```

## Fields

- `cols`, `rows`: as the router. The first column is the situation; every other cell is a string or `{t, link, intent}`.
- `labels` (optional): one short step title per row ("New system", "Skid in build"), taken from the row's own words, never a new claim. The card then shows the situation sentence as its subtitle (`is-sit`: the term stays for screen readers only). A label equal to the situation is dropped. Without labels the situation is the card title.
- `kinetic` (optional): `["Start", "Go"]`. The first word runs as outline type behind the stair, the last sits solid on the limestone wedge. Decorative and `aria-hidden`; leave it out for no type.

## Rules

- Navy ground with one limestone wedge (hard diagonal, never a gradient). Cards are `surface-raised` with `ink` text in both themes, so tables of values stay on a plain ground. The outline type is drawn twice and clipped either side of the diagonal so its ink follows the ground.
- A card whose cells link somewhere (the last link wins, usually "Start with") is clickable as a whole through a pointer-only overlay; the real link stays the keyboard and screen reader target and carries the cell's `intent`.
- A value opening with a `[placeholder]` is pending: dashed rule and a "To confirm" line.
- Best for 3 to 7 rows. Desktop puts one column per row; at 1180 px and below the flight runs down the page, each step indented one notch, the stair line along the cards' left edges. Phones keep that, with the end word on a bottom wedge.
- Hover or focus on a step lifts its card off the tread and lights the tread and riser.

## Motion

Motion: the outline words slide in from opposite sides while their letters rise; then the stair is climbed, riser up and tread across, each card landing on its tread as it is laid with its number decoding, and one limestone drop climbing with the line to rest at the top step; last, the end word strikes in on the wedge (under 4 s, once). Stacked layouts run each step as it scrolls in. Nothing under reduced motion.

Ported (pass 9b): Subframe Motion "Relief board" (relief-board): once the stair is up, the card the visitor points at or focuses lifts furthest off its tread and its neighbours lift less with distance (12 px x exp(-d^2/4.4), 300 ms, cubic-bezier(.22,1,.36,1)).
