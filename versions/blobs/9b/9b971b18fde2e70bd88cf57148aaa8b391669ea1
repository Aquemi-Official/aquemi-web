MarketCallouts shows several markets served by one machine: a single PW package drawn with IsoKit stands centred on a navy ground as a solid limestone object, and each option is a callout around it with a leader to the part its note is about.

- Look: `"look": "market-callouts"` on an `options` block (renderer `assets/src/blocks/look-market-callouts.js`). Item fields: `t`; `d`, or its parts `scope` (the opening scope line, usually a `[placeholder]`), `tags` (standards, drawn as StandardTag pills) and `note` (the technical sentence); `part` (the leader's anchor: `feed`, `filter`, `ro`, `edi`, `panel`, `outlet`; default by position). Keep `d` as the full text for other renderers.
- Markup: `.aq-market-callouts` > `.aq-market-callouts__stage` > `.aq-market-callouts__plane` (aria-hidden: the IsoKit svg with `aq-iso--limestone` solids and the leaders, numbered `.aq-market-callouts__mk` markers placed by percentage) and `ol.aq-market-callouts__list` of `li.aq-market-callouts__c` (`--x`, `--y` place it; `--l` / `--r` side).
- The plane shares the svg's 1200 × 660 viewBox, so leaders, markers and callouts line up at any width. The drawing is mirrored so the feed riser drops on the right and the product water leaves upper left.
- Colours: `navy` ground, limestone solids with `on-limestone-muted` edges, glass in a `limestone`/`flow` mix, water `flow` mixed 45 % with `on-navy`, leaders `on-navy-muted`, text `on-navy`. IsoKit parts: skid, ro, edi, filter, panel; pipes and arrows from the kit.
- Hovering a callout lights its part, marker and leader (a pointer aid only; the numbers carry the same pairing for everyone).
- Phones: the plane is cropped to the machine (190 % wide, centred) with its numbered markers, and the callouts stack under it on hairlines.
- Not for more than four callouts, or for options that do not share the machine.

Motion (`motion.js`): the machine builds back to front and settles solid, the water drops down the riser and runs the route lighting each stage (IsoKit timeline); then per callout the marker pops on its part (the part lights), the leader draws out to the callout and its lines follow in; parts settle back (about 4 s). Nothing under reduced motion.

Ported (pass 9b): Subframe Motion "Guided inspection" (guided-inspection): reading a callout (pointer or focus) dims the drawing round the part it is about; the lit window glides between parts (550 ms, cubic-bezier(.22,.75,.22,1)); no zoom, so leaders stay on their parts. Wide screens.
