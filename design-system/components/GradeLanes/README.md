GradeLanes shows the minimum water grade step by step: each step drops a tap into one of three lanes, Potable, PW and WFI.

- Data: a `table` block with `"as": "grades"`. The grade column is the first whose name says grade or water (or `grade`: its index). The step is the first other column; further columns show as quieter lines.
- Markup (`blocks/grades.js`): `.aq-grades` > `.aq-grades__head` (step column name and lane names) and `ol.aq-grades__rows` of `li.aq-grades__row`: `.aq-index`, `.aq-grades__step` (`h3.aq-grades__t`, `p.aq-grades__d`, the grade text in mono `flow` as `p.aq-grades__g`), and `.aq-grades__lanes` (`role="img"`, labelled with the grade text) of three `.aq-grades__lane` with `.aq-grades__tap`. The first grade named gets a filled `flow` tap (`is-min`), an alternative an open one (`is-alt`). Lanes are `line-strong` pipes the full height of the list.
- Lanes are `space-16` wide on desktop, `space-8` on phones, so phones keep the at-a-glance view.
- Ground: the navy page.
