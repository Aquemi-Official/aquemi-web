ProcessSteps shows a real sequence (a project, a qualification, a service visit) as rows of the shared list grammar: index, step name and what happens.

## Markup

```html
<ol class="aq-rows aq-steps">
  <li><div class="aq-rows__row"><span class="aq-index" aria-hidden="true">01</span><h3 class="aq-rows__t">Design</h3><p class="aq-rows__d">Your URS turned into a functional specification, P&amp;IDs and a risk assessment.</p></div></li>
  …
</ol>
```

- Block `steps` (`assets/src/blocks/steps.js`), items `{t, d, hold, link}`, in a full-width section with the standard section head.
- Link (plain rows only): an item's `link` (a page id or `page#anchor`) makes its row a link, as in every list of the shared row grammar (`wRow`): `<a class="aq-rows__row" href="#svc-fat-sat" data-wp="svc-fat-sat">`, the step name ending in a `flow` arrow, the name `flow` on hover, a `focus` ring on focus. `{"t": "Factory and site acceptance tests (FAT and SAT)", "d": "Tested with water before shipping, then on your utilities.", "link": "svc-fat-sat"}`. Link a step only where another page holds that step in full; one or two per list. A link to a missing page renders the row plain. In the hold flow the station's title carries the link (below); the row shape draws no links, an item's `link` is ignored there. A step link carries no `intent`.
- Plain rows take the same fixed title column as plain OptionList rows (styled in `OptionList/style.css`): open list, no frame.
- The index carries the order. No pipe, spine, stair or large numerals; `line` hairlines between steps are the only structure. For a drawn flow of equipment use ProcessDiagram. The one exception is a sequence with hold points, below.

## Hold points: the piped flow

An item may carry `"hold": "<who signs>"` ("Your quality unit", "Both parties", "You"). A steps block with at least one hold no longer renders as rows: it draws as a process flow in line art inside a Plate (`wPlate`, a `line` frame on `surface-raised`, caption "Aquemi · <nav>").

- Desktop: numbered stations in a grid, up to four per row (longer flows split into two even rows: 6 → 3 + 3, 7 → 4 + 3, 8 → 4 + 4). Each station: a Geist Mono 300 32 px number in `ink` with a short `line` tick, then the step name (Geist 500 16/24, sentence case) and its text, behind a `line` hairline. Stations are joined by pipe runs (two `line-strong` walls with an arrow into the next station); at the end of a row the pipe elbows into the right gutter, runs back under the row, elbows down the left gutter and into the next row. A closed `flow` valve sits on the run into every hold station.
- Hold station: a 1 px `line` frame on `surface` (a change of surface on the plate), then the hold line: "Hold" in `flow` (Geist 500 14/20) and "Signed by your quality unit" in `ink-muted`, behind a 2 px `flow` rule; then a "Sign:" label (eyebrow style) with a `line` signature rule.
- Phone: one vertical pipe down the number column with arrows and valves, stations along it; a hold station's text sits in its `line` frame on `surface`. No horizontal scroll.
- Station link: an item's `link` (a page id or `page#anchor`) makes the station's title the link, hold station or not: `<h3 class="aq-steps__t"><a class="aq-steps__go" href="#svc-fat-sat" data-wp="svc-fat-sat">Factory and site acceptance tests (FAT and SAT)</a></h3>`. The shared link grammar: the title stays `ink` and ends in a `flow` arrow, turns `flow` on hover, a `focus` ring; on phones a 44 px hit area. Only the title links; the number, pipes, valve, hold line and signature line stay drawing. So svc-cq's stages keep their link to FAT and SAT when a hold point turns them into a flow. A link to a missing page leaves the title plain.

```html
<div class="aq-plate aq-plate--block"><ol class="aq-steps aq-steps--hold" style="--cols:4">
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
- Tokens: pipes `line-strong` (single-weight line art), frames and ticks `line`, valves (P&ID closed-valve symbol, 1.5 px) and the hold rule and word `flow`, numbers `ink`, names Geist 500 16/24 `ink`, text 14/22 `ink-muted`. No stamps, rotation, double frames or flow fills. Steps without any hold render as plain rows, as before.

## Row (`as: "row"`)

A short sequence read across, as the site first drew "How we work" (on about): `<ol class="aq-steps-row">`, a `line-strong` rule on top, then one column per step with its number (`aq-steps-row__n`, eyebrow mono in `flow`), name (`aq-steps-row__t`, h3) and one sentence (`aq-steps-row__d`, small, `ink-muted`). Columns wrap to fit (170 px minimum), so phones read two across. Use it for five steps or fewer with one sentence each.

## No icons

Steps carry no icons: in a sequence the number is the information. Items' `icon` fields and `"as": "stages"` are ignored; a list without holds renders as plain numbered rows on hairlines.

## Writing

- Three to eight steps; five reads best. Use it only for a genuine order (Design, Fabricate, Test, Qualify, Support; IQ, OQ, PQ).
- Name each step with a verb or the document it produces, in sentence case. One sentence each, 25 words or fewer. Unknown facts go in `[square brackets]`.

## When not to use it

- Not for unordered features or options: use OptionList or LinkGrid.
- Not for the water treatment chain itself: use WaterPath or ProcessDiagram.

## Motion

Motion (`motion.js`): water fills the pipe stage by stage. In the hold flow and the stage strip every station starts unlit; a drop of water (a `flow` dot made by the motion layer and removed after) runs each pipe while the pipe is laid behind it, the station it reaches lights (number up, icon frame and icon wipe in, text rises), the valve on a run into a hold station snaps shut and the HOLD stamp strikes, then the SIGN line rules in. Row returns elbow in before the next row. One timeline on desktop (at most 3.8 s); phones play each station as it scrolls in, queued behind the water. Plain rows rise in order with their index decoding. Under reduced motion or without JS the finished drawing shows.
