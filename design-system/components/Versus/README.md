Versus sets two routes face to face across a spine of factors, for a buyer choosing one of two (hot or ambient WFI, multi-effect or vapour compression).

- Data: a `table` block with `"as": "versus"` and exactly three columns: `cols` [factor label, route A, route B], `rows` [factor, A, B]. A row whose factor starts "Fits when" or "Choose" becomes the verdict.
- Markup (`blocks/versus.js`): `.aq-versus` > `.aq-versus__head` (two `.aq-versus__name` and the `.aq-versus__vs` pill), `dl.aq-versus__rows` of `.aq-versus__row` (`dt` factor, two `dd` with `data-k` = route name), then `.aq-versus__verdict` with "Choose A when" and "Choose B when".
- Desktop: A right-aligned against the spine, the factor in mono on the `line-strong` spine, B left-aligned; verdicts in `line-strong` frames with a `flow` top rule. Phones: the verdicts come first, then each factor with A and B tagged in `flow` mono.
- Ground: the navy page. Keep each cell to one line of fact (≤ 25 words). Three or more routes: CompareTable.
