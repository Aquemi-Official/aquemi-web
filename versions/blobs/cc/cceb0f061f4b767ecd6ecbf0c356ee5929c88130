ProcessSteps shows a real sequence (a project, a qualification, a service visit) as rows of the shared list grammar: index, step name and what happens.

## Markup

```html
<ol class="aq-rows aq-steps">
  <li><div class="aq-rows__row"><span class="aq-index" aria-hidden="true">01</span><h3 class="aq-rows__t">Design</h3><p class="aq-rows__d">Your URS turned into a functional specification, P&amp;IDs and a risk assessment.</p></div></li>
  …
</ol>
```

- Block `steps` (`assets/src/blocks/steps.js`), items `{t, d, hold}`, in a full-width section with the standard section head.
- The index carries the order. No pipe, spine, stair or large numerals; hairlines between steps are the only structure. For a drawn flow of equipment use ProcessDiagram. The one exception is hold points, below.

## Hold points

An item may carry `"hold": "<who signs>"` ("Your quality unit", "Both parties", "You"). That step gets a stamped hold-point card under its text: a double-ruled `Hold point` stamp, "Signed by your quality unit", and a signature line. The list then gets `aq-steps--hold` and reads as one routed line: a `line-strong` pipe through the index column from each step to the next, a closed valve (`flow`) under the index of every hold step, and a dashed `flow` branch from the valve to its card. Steps without `hold` render as plain rows.

```html
<ol class="aq-rows aq-steps aq-steps--hold">
  <li class="is-hold"><div class="aq-rows__row"><span class="aq-index" aria-hidden="true">02</span><h3 class="aq-rows__t">Your review and approval</h3><p class="aq-rows__d">…</p>
    <span class="aq-steps__gate"><svg class="aq-steps__valve" aria-hidden="true">…</svg></span>
    <span class="aq-steps__hold"><span class="aq-steps__stamp">Hold point</span><span class="aq-steps__who">Signed by your quality unit</span><span class="aq-steps__sign" aria-hidden="true">Sign</span></span>
  </div></li>
</ol>
```

- Use it only where the step text already says the client (or both parties) approves or signs at that step. Never add a hold the page does not state; a witness point is not a hold.
- `hold` names who signs, as the page names them; the renderer writes "Signed by …". The stamp and signer are real text; valve, branch and signature line are decoration.
- A list with hold points keeps plain numbers (no row icons): the route owns the index column.
- Phones: the same pipe and valve in the narrower index column; the card sits under the step text, stamp and signer on one line when they fit.
- Tokens: pipe `line-strong`, valve and branch `flow`, card `surface-raised` with a `line-strong` edge and `radius-sm`, stamp Geist Mono 600 12/20 uppercase in `flow` with a 3 px double `flow` rule, turned 2°. Works on navy (dark tokens) and on light sheets.

## Writing

- Three to eight steps; five reads best. Use it only for a genuine order (Design, Fabricate, Test, Qualify, Support; IQ, OQ, PQ).
- Name each step with a verb or the document it produces, in sentence case. One sentence each, 25 words or fewer. Unknown facts go in `[square brackets]`.

## When not to use it

- Not for unordered features or options: use OptionList or LinkGrid.
- Not for the water treatment chain itself: use WaterPath or ProcessDiagram.
