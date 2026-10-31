ProcessSteps shows a real sequence (a project, a qualification, a service visit) as rows of the shared list grammar: index, step name and what happens.

## Markup

```html
<ol class="aq-rows aq-steps">
  <li><div class="aq-rows__row"><span class="aq-index" aria-hidden="true">01</span><h3 class="aq-rows__t">Design</h3><p class="aq-rows__d">Your URS turned into a functional specification, P&amp;IDs and a risk assessment.</p></div></li>
  …
</ol>
```

- Block `steps` (`assets/src/blocks/steps.js`), items `{t, d, hold}`, in a full-width section with the standard section head.
- Plain rows sit in the same hairline frame with big mono numbers as plain OptionList rows (styled in `OptionList/style.css`).
- The index carries the order. No pipe, spine, stair or large numerals; hairlines between steps are the only structure. For a drawn flow of equipment use ProcessDiagram. The one exception is a sequence with hold points, below.

## Hold points: the piped flow

An item may carry `"hold": "<who signs>"` ("Your quality unit", "Both parties", "You"). A steps block with at least one hold no longer renders as rows: it draws as a process flow on a cream drawing plate (Plate, `wPlate(…, {light: true})`, title block "Aquemi | <nav>"), after the hold-point concept (inspiration 53).

- Desktop: numbered stations in a grid, up to four per row (longer flows split into two even rows: 6 → 3 + 3, 7 → 4 + 3, 8 → 4 + 4). Each station: a big Geist Mono number with a tick, then the step name in uppercase mono and its text, behind a hairline. Stations are joined by pipe runs (two `line-strong` walls with an arrow into the next station); at the end of a row the pipe elbows into the right gutter, runs back under the row, elbows down the left gutter and into the next row. A closed `flow` valve sits on the run into every hold station.
- Hold station: double frame (outline plus inner rule), a tilted stamp, filled `HOLD` plus "Signed by your quality unit", and a `SIGN:` line.
- Phone: one vertical pipe down the number column with arrows and valves, stations along it; hold stations framed and stamped. No horizontal scroll.

```html
<div class="aq-plate aq-plate--block" data-theme="light"><ol class="aq-steps aq-steps--hold" style="--cols:4">
  <li class="aq-steps__st"><span class="aq-steps__n" aria-hidden="true">01</span>
    <div class="aq-steps__body"><h3 class="aq-steps__t">Draft protocol</h3><p class="aq-steps__d">…</p></div>
    <span class="aq-steps__run is-valve" aria-hidden="true"><svg class="aq-steps__valve">…</svg></span></li>
  <li class="aq-steps__st is-hold">… <p class="aq-steps__hold"><span class="aq-steps__stamp"><span class="aq-steps__stamp-k">Hold</span> <span class="aq-steps__who">Signed by your quality unit</span></span><span class="aq-steps__sign" aria-hidden="true">Sign:</span></p> …</li>
  <li class="aq-steps__st is-eol">… <span class="aq-steps__turn" aria-hidden="true"></span></li>
  <li class="aq-steps__ret" aria-hidden="true"><span class="aq-steps__ret-arrow"></span></li>
  <li class="aq-steps__st is-bol">… <span class="aq-steps__turn aq-steps__turn--in" aria-hidden="true"></span></li>
</ol>…</div>
```

- Use a hold only where the step text already says the client (or both parties) approves or signs at that step. Never add a hold the page does not state; a witness point is not a hold.
- `hold` names who signs, as the page names them; the renderer writes "Signed by …". Step names, text, "Hold" and the signer are real text; pipes, valves, arrows, the return row (`aq-steps__ret`, aria-hidden) and the signature line are decoration.
- A flow keeps plain numbers (no row icons) and ignores `fold`: every station shows.
- Tokens: pipes and frames `line-strong`, numbers, valves and stamp `flow` (stamp a 3 px double `flow` rule turned 3°, `HOLD` `surface` on `flow`), names Geist Mono 600 13/20 uppercase `ink`, text 14/22 `ink-muted`. Steps without any hold render as plain rows, as before.

## Stage strip (`as: "stages"`)

A steps block whose items all carry an `icon` (Icon names, or `icons: "auto"` resolving every row) can set `"as": "stages"` (on today: home "How a project runs", services "What leaves each stage, and who signs it"). It draws on the section ground with the hold flow's station, number and pipe styling (concept 57 icons):

- Desktop: one row of stations (up to six; longer lists wrap in rows of four, each row its own run). Each station: the icon at 56 px in `ink` inside a framed square (80 px, `line-strong` rule with a `line` inner rule), the big `flow` number with its tick, the name in uppercase mono and the text behind the hairline. Pipe runs (two `line-strong` walls with an arrow) leave each frame at its centre and end at the next frame.
- Phone: the hold flow's vertical pipe down the number column; the framed icon (48 px, icon 36 px) sits beside the number with the name, the text runs underneath.
- Holds: a stage may carry `hold` (as in the hold flow). It keeps its place in the strip and is stamped like a hold station: the HOLD stamp naming who signs under its text, the icon frame drawn in a 2 px `flow` rule with a `flow` inner rule, the icon in `flow`, and a closed `flow` valve on the run into it. With `as: "stages"` and an icon on every item, holds no longer push the block onto the hold flow plate; without the icons they still do.
- `fold` still works (services shows four, then "Show all 8 steps" adds the second row). Without an icon on every item the block falls back to plain rows.

```html
<ol class="aq-steps aq-steps--stages" style="--cols:5">
  <li class="aq-steps__st"><span class="aq-steps__frame" aria-hidden="true"><span class="aq-icon aq-icon--ink" style="mask-image:url(assets/icons/pid.png)"></span></span>
    <span class="aq-steps__n" aria-hidden="true">01</span>
    <div class="aq-steps__body"><h3 class="aq-steps__t">Design</h3><p class="aq-steps__d">…</p></div>
    <span class="aq-steps__run" aria-hidden="true"></span></li>
  …
</ol>
```

## Writing

- Three to eight steps; five reads best. Use it only for a genuine order (Design, Fabricate, Test, Qualify, Support; IQ, OQ, PQ).
- Name each step with a verb or the document it produces, in sentence case. One sentence each, 25 words or fewer. Unknown facts go in `[square brackets]`.

## When not to use it

- Not for unordered features or options: use OptionList or LinkGrid.
- Not for the water treatment chain itself: use WaterPath or ProcessDiagram.
