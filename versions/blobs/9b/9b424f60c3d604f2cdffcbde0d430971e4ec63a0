ProcessSteps shows a real sequence (a project, a qualification, a service visit) as rows of the shared list grammar: index, step name and what happens.

## Markup

```html
<ol class="aq-rows aq-steps">
  <li><div class="aq-rows__row"><span class="aq-index" aria-hidden="true">01</span><h3 class="aq-rows__t">Design</h3><p class="aq-rows__d">Your URS turned into a functional specification, P&amp;IDs and a risk assessment.</p></div></li>
  …
</ol>
```

- Block `steps` (`assets/src/blocks/steps.js`), items `{t, d}`, in a full-width section with the standard section head.
- The index carries the order. No pipe, spine, stair or large numerals; hairlines between steps are the only structure. For a drawn flow of equipment use ProcessDiagram.

## Writing

- Three to eight steps; five reads best. Use it only for a genuine order (Design, Fabricate, Test, Qualify, Support; IQ, OQ, PQ).
- Name each step with a verb or the document it produces, in sentence case. One sentence each, 25 words or fewer. Unknown facts go in `[square brackets]`.

## When not to use it

- Not for unordered features or options: use OptionList or LinkGrid.
- Not for the water treatment chain itself: use WaterPath or ProcessDiagram.
