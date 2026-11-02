# Pass 9b build notes: contact-proposal.2 and contact-service.2

Built 2026-11-01 on port 8769. Only block 2 of each page changed; contact-routes, the forms, the service FAQ and
contact-locations untouched. `check`: 0 problems; `check --budgets` 0 overruns on both pages; motioncheck 0 errors and
0 hidden at 1280 and 375 on both pages.

## contact-proposal.2 "What each request returns": `request-menu` / RequestMenu (replaces `return-slips`)
- Concept followed (contact-proposal.2): limestone sheet, the title oversized and light across the top right, an
  isometric skid drawing at the left (sticky on desktop), and a four-column menu (situation / what comes back / when /
  cost) with numbered situations, When in Geist Mono and Cost in the flow accent. Ignored the concept's invented times
  and "free".
- Built as a real table: one `tbody` per situation, the situation a `th scope=rowgroup` with rowspan, one line per
  returned item (the " · " parts of the returns, when and cost cells line up item by item). Fold (4 of 6) kept, the
  quality-page audit link kept, every placeholder kept.
- Drawing: IsoKit skid base, tank, two filter housings piped in series, a closed module; the open frame (four posts,
  top rails) drawn as single IsoKit centre-line runs (no frame part in the kit).
- Motion: scroll-window port (the page's one scroll-linked story) slides the title in from beyond the right edge,
  cropped like the concept until it lands whole; AQiso draws the skid and runs the water once; cells follow in reading
  order; chart-crosshair port bands the pointed line and lights its column head.
- Phone: title 40 to 56 px, drawing above the menu, each line stacks the item over When and Cost with mono keys.
- Copy: nothing cut or added; returned items get a capital first letter.

## contact-service.2 "Response times by request": `riser-valves` / RiserValves (replaces `response-lanes`)
- Concept followed (contact-service.2, one of the strongest): navy sheet, a vertical riser in the gutter between the
  requests and the answers; at each request a branch tees off through a gate valve into the first response, and a
  second branch leaves the riser at the foot of the row, runs under the first response and turns up into what follows.
  Riser opens under a flange at the top and closes at the last row. "Severity N" over its description; the three
  other requests follow under a stronger rule, numbered on (05 to 07).
- Drawn in CSS (twin walls, water centre line) with two small fixed-size inline SVGs (gate valve with lever, elbow);
  the riser is one segment per row so it stays continuous at any row height.
- Motion: scroll-window port, the page's one scroll-linked story: as the rows pass, water fills the riser row by row,
  opens each valve, runs branch A, then branch B and its rise; scrolling back drains it. Text enters once and never
  dims. Hover or focus within a row opens its valve and lights both branches. Reduced motion / no JS: all full, open.
- Phone: riser down a 64 px left gutter; request, first response and what follows stacked; both branches are short
  tees into the zone keys.
- Copy: nothing cut or added.

## Removed
- ReturnSlips and ResponseLanes (renderers `look-return-slips.js`, `look-response-lanes.js` and component folders);
  no other page used them. research/pass9/build/contact.md still describes them as pass 9 history.

## Still weak
- RequestMenu's When and Cost columns are narrow for the long placeholders (three-line chips in row 01); reads better
  once real times and costs replace them.
- The riser's water shows clearly only once scrolled; at rest (static) everything is full, which is the honest end state.
