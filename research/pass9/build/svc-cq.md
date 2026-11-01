# Pass 9 build notes: svc-cq (round 2, no concepts of its own)

Builder files: `aquemi-web/content/pages/14-svc-cq.json` (blocks 0-4; faq and related untouched),
`assets/src/blocks/look-binder-tabs.js`, `look-signature-blocks.js`, `look-walkdown-pins.js`, `look-pq-calendar.js`,
`look-instrument-limits.js`, `design-system/components/BinderTabs/`, `SignatureBlocks/`, `WalkdownPins/`, `PqCalendar/`,
`InstrumentLimits/` (style.css, README.md, preview.html, motion.js).
Page character: the qualification binder. Directions: tactile binder / navy forms (concept 48) / iso drawing sheet /
Swiss data graphics on limestone / dark instrument panel. The hold-point timeline (services) is not repeated.

## 0 "What each stage proves": look `binder-tabs` (BinderTabs)
- The page's binder idea with 48-concept-roles' stage tab strip. The binder lies open: navy cover with the heading in a
  label holder and the spine; six tab dividers filed on three rings, stepping right like a filed fan, each with its limestone
  index tab, the stage and a sign-off line with a flow signature: the stages as a sequence of signatures.
- New field: `label` per item (Commissioning, FAT · SAT, IQ, OQ, PQ, Review). The FAT/SAT link kept.
- Motion: cover unfolds from the spine, rings close, each divider is filed, its tab slides out and it is signed before the next.
- Phone: cover band over the stack, rings across its top, tab above each stage name.
- Copy cut: none.

## 1 "Who writes, who reviews": look `signature-blocks` (SignatureBlocks)
- 48-concept-roles: each document's signature block on navy: name at left, "Written or done by" and "Reviewed by" fields,
  each a box with the party typed in and a signature line marked with a cross. Party by box: Aquemi flow rule, yours double
  limestone rule, shared dashed. Key strip (Aquemi / Your team / Shared, the old renderer's words). Placeholder kept.
- Fold 5 (documents): phones only; desktop shows all seven rows.
- Motion: key boxes stamp; each block draws from its top left, written field then reviewer's field, lines ruled.
- Copy cut: none.

## 2 "IQ and OQ on site": look `walkdown-pins` (WalkdownPins)
- compliance.3 (held drawing whose parts light) + sys-pw.3 (hotspots on equipment). IsoKit light sheet of the installed
  system: wall, panel, skid and RO rack, tank, loop pump, loop to two points of use and back past the analyser, gauge. Each
  check is a numbered map pin on its part; rows beside it with IQ (ruled) / OQ (filled flow) tags, verify text, basis in mono.
  Pointing or focusing a row lights its parts and swells its pin. Sheet sticky on desktop.
- New field: `part` per row (branch, joint, analyzer, coldest, outlets, panel, skid, gauge, panel). Fold 5: phones only.
- Motion: IsoKit draw and water run through the loop, then pins drop onto their parts in check order.
- Copy cut: none ("IQ · " / "OQ · " prefixes became the tags).

## 3 "PQ in three phases": look `pq-calendar` (PqCalendar)
- Swiss data graphics; services.1's hero-figure idea as a calendar. The year as 52 week bars (phases 1 and 2 solid navy and
  flow, the routine plan hatched to 12 months), a zoom wedge from the first 4 weeks to the sampling grid: 12 sample points x
  28 days = 336 dots, split by the dashed hold line; "336 samples" set large beside it; phases' words under their spans.
- New fields: `days` (14, 14) on phases 1-2 ("at least 2 weeks"), `grid` {12, 28, "sample points", "days", "samples"},
  `year` {52, 12, "12 months"}: all restate the intro and phase 3's text, no new facts.
- Motion: week bars rise, zoom opens, grid fills a day at a time while 336 counts up, hold line drops at day 15, words rise.
- Phone: full-width strip, zoom and grid; odd month numbers; phases stacked.
- Copy cut: none.

## 4 "Alert levels come from your data": look `instrument-limits` (InstrumentLimits)
- The brief's "limits read like instruments": a dark instrument panel. Action level: analog dial (0 and 100 only, red-line
  wedge in fail, needle resting on the limit), readout "≤ 100 CFU/mL", ACTION in fail. Alert level: chart recorder (action
  line at 100 in fail, two runs of decorative sample points, the alert line in caution drawn from the runs); its value stays
  the row's words. Basis as tags, link kept, CFU note kept.
- Motion: dial scale draws, needle sweeps 0 to 100 as the readout counts, red-line strikes; recorder lays its samples and
  draws the alert line outwards from the end of the runs.
- Copy cut: none.

## Checks
- build + check: 0 problems from these files. check --budgets svc-cq: 0 overruns.
- motioncheck 1280 and 375: 0 errors, 0 hidden. Light, dark, 375 reviewed.

## Weak spots
- Recorder sample points are illustrative (no values): an owner might read them as data; easy to drop (`__pt`).
- Binder rings read small at 1280; the binder is about 700 px tall, the signature blocks 1500 px (seven full-width rows).
- Walkdown pins cluster on phones.

## Shared requests
None.
