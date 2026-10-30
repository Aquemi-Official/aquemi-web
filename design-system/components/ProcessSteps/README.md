ProcessSteps shows a real project sequence as a stepped pipe run: each numbered step sits one shift lower and further right, joined by a flow pipe that bends from one step into the next.

Origin: concept H in design-system/inspiration/ (`concept-h-steps.png`), rebuilt with Aquemi tokens for light and dark themes.

## Markup

```html
<ol class="aq-steps">
  <li><h3 class="aq-steps__t">Design</h3><p class="aq-steps__d">Your URS turned into a functional specification, P&amp;IDs and a risk assessment.</p></li>
  <li><h3 class="aq-steps__t">Fabricate</h3><p class="aq-steps__d">316L stainless steel, orbital welds with weld logs, finishes to ASME BPE.</p></li>
  …
</ol>
```

- An ordered list, so the order is in the markup. CSS writes the number (`01 /`) before each name, with empty alt text so screen readers don't repeat what the list already announces.
- `aq-steps__t` is an `h3` under the section's `h2`. `aq-steps__d` is optional: one sentence.
- The pipe, bends and grid are pure CSS on the list and its items: no extra elements, no SVG, no JavaScript.
- The site renderer (`assets/src/blocks/steps.js`) outputs this from a `steps` block (`items` with `t` and `d`) inside a full-width section with the block heading above it.

## Layout

- **Desktop:** steps descend left to right like a staircase on a dot grid panel. The shift is `space-24` for up to five steps and `space-16` for six to eight, so even eight steps leave most of the width for text. The pipe enters through the panel's top edge, drops down each step's left edge, bends right in the gap and turns down into the next step, and leaves through the bottom edge.
- **Phone** (`@container (max-width: 860px)`): no stair; one straight riser down the left with a ring on the pipe at each step. Nothing overflows at 375 px.

## Token rules

- Panel: `surface` with a 1 px `line` border and a `line-strong` dot every `space-6`.
- Pipe: 5 px double rule in `flow` with `space-4` bend radius, as in WaterPath. Phone rings: 1.5 px `flow` on `surface`.
- Number: Geist Mono 300, 32/38 px (24/30 px on phones), `flow`. Name: Geist 500, 20/28 px, `ink`. Sentence: 15/24 px, `ink-muted`, within `text-max`.
- `flow` is the only accent; never fill a step with it.

## Writing

- Three to eight steps; five reads best. Use it only for a genuine order (Design, Fabricate, Test, Qualify, Support; IQ, OQ, PQ).
- Name each step with a verb or the document it produces (URS, FDS, FAT report), in sentence case.
- Keep each sentence short: the deliverable or the standard, with its number and unit. Unknown facts go in `[square brackets]`.

## When not to use it

- Not for unordered features or options: use a grid or list component.
- Not for the water treatment chain itself (pretreatment to distribution): use WaterPath or ProcessDiagram.
- Not for more than eight steps; group them into phases.
