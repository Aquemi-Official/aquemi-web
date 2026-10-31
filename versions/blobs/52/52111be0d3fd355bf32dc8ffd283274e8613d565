Router lets a buyer pick the situation they are in and see one route through what follows: the water they need, the system, and where to start with us.

- Data: a `table` block with `"as": "router"`. `cols`: the situation column, then one column per station ("Water you need", "System", "Start with"). `rows`: the situation, then one cell per station, a string or `{t, link}`.
- Markup (`blocks/router.js`): `.aq-router` holds, per row, a `button.aq-router__opt` (`.aq-index`, `.aq-router__t`, `aria-expanded`, `aria-controls`) followed by its `.aq-router__route` (an `ol.aq-router__stations` of `li` > `.aq-router__k` label + `.aq-router__v` value). One route is open at a time, the first by default; closed routes stay in the markup with `hidden`.
- Desktop: situations as hairline rows on the left (`line`); the open route on the right in a `line-strong` frame spanning every row, stations on one `flow` pipe, a `flow` pipe from the chosen situation into the frame. Phones: the route opens under its situation, stations down a riser.
- Ground: the navy page (a visual anchor), never a light sheet.
- Use it when the first column of a table is "your situation" and the rest is what to do about it. For a comparison of two routes use Versus; for a plain lookup with no "where to start", CompareTable.
