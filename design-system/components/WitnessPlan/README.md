WitnessPlan reads the ways to witness a FAT off one plan of the test bay: choosing a way puts its people, cameras, screen or data package on the plan (look `witness-plan`, options block).

Concept: a flat top-down plan on navy built for this section, after the pool's sys-pw.4 idea of options as things you pick up: here each option is a set of positions on the bay floor.

## Markup
`<section class="aq-section aq-witness-plan-sec">` > `.aq-witness-plan` > `__side` (section head, `ol.__list` > `li` > `button.__opt[data-scene][aria-pressed]` with `__n`, `__t`, `__d`) and `__board` > `svg.__svg` (aria-hidden; actors are `g.__actor[data-actor]`, `is-on` when shown).

## Fields
`h`, `intro`, `items` [{`t`, `d`, `scene`}], `zones` [bay label, remote label]. `scene`: any of "you", "delegate", "camera", "screen", "record" (space-separated or a list).

## Rules
- The board is `navy` with walls in `on-navy`, equipment outlined, the floor grid faint; actors in `limestone` (people as discs, fields of view as faint limestone wedges). Actors a way does not use fade to 12 %, so the whole bay always reads.
- Cards are full-width buttons (44 px and more) with `aria-pressed`; the pressed card is ruled in `flow`. Pointing previews a way; leaving the list restores the pressed one. Default: the first way (complete without script).
- Phone: the plan above the cards; drawing labels drop.

## Motion
The walls draw on from the door, the grid and remote edge fade up, the skid and panel draw, then the plan steps through the ways (about half a second each, each card's rule sliding in as its actors come up) and rests on the first. Once, under 5 s.
