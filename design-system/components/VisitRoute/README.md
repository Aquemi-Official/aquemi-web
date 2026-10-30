VisitRoute lays a visit's checks out as numbered stops on one dashed route, for a walk-round whose order matters, such as what a preventive maintenance visit covers, ending at the sign-off.

- Data: a `grid` block with `"as": "route"`. Items keep `{t, d, link}`; `"end": true` on the last item makes it the sign-off (a filled tick instead of a number). No `fold`: a route shows every stop.
- Markup (`blocks/grid.js`): `ol.aq-visit-route` (`--cols`) of `li.aq-visit-route__stop` (`--c`, `--r`; `is-ltr`/`is-rtl`, `is-in`, `is-turn`, `is-last`, `is-end`), each an `a` or `div.aq-visit-route__body` with `.aq-visit-route__n` (aria-hidden), `h3.aq-visit-route__t`, `p.aq-visit-route__d`. DOM order is the route order.
- Desktop: rows of 3 or 4 stops (4 when the count divides into fours or leaves three), odd rows left to right, even rows right to left, joined by U-turns in the side gutters. Phones: one vertical route down the left, ring beside the text.
- Tokens: route a 1px dashed `flow` line; rings `flow` on `surface`; titles `ink` 17/24, lines `ink-muted` 15/24; linked titles carry the `flow` arrow like LinkGrid.
- Ground: the navy page; also reads on a light sheet. Order the stops as the engineer walks them (data first, then along the water path, sign-off last). For a project timeline use ProcessSteps; for the water's own path use WaterPath.
