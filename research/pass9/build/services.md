# Pass 9 build notes: services (sections 0 and 1)

Builder files: `aquemi-web/content/pages/10-services.json` (blocks 0 and 1 only), `assets/src/blocks/look-stair-router.js`,
`assets/src/blocks/look-hold-timeline.js`, `design-system/components/StairRouter/`, `design-system/components/HoldTimeline/`
(style.css, README.md, preview.html, motion.js). Blocks 2 and 3 (faq, related) untouched.

## Section 0, "Where to start": look `stair-router` (component StairRouter)
- Concept services.0: huge cropped START/GO outline type behind a rising staircase of situation cards.
- Built: navy ground, limestone wedge bottom right (hard diagonal). "Start" as outline type cropped by the section edges,
  drawn twice and clipped either side of the diagonal so its ink turns from on-navy to navy on the limestone. "Go" solid
  on the wedge. Seven cards, one column each, each a rise higher than the last; treads and risers form one stair line;
  "01 ->" numbers on the treads; heading in the empty top-left corner. All routes open (each card shows situation,
  start with, what to send, what comes back), so the buyer scans instead of clicking. Card = link overlay to its start
  page with the row's intent; the real link stays the keyboard target. Pending values keep "To confirm".
- Data-driven for the other 10 router blocks: `look`, optional `labels` (short step titles) and `kinetic` (["Start","Go"]).
  Without labels the situation is the title; without kinetic no type.
- New fields on block 0: `look`, `labels` (New system, Design approved, Skid in build, Installed, In service, Aging,
  Comparing suppliers; each from its row's own words), `kinetic` (Start, Go; decorative, aria-hidden).
- Copy cut: none. ("Comparing suppliers" label equals the situation, so the card shows it once.)
- Motion: outline rows slide from opposite sides while letters rise; the stair is climbed (riser up, tread across), each
  card lands on its tread with its number decoding, a limestone drop climbs with the line and rests at the top step; "Go"
  strikes in once the stair is up and it is on screen. Hover/focus lifts a card and lights its tread and riser.
- Phone and narrow (<= 1180 px): flight runs down the page, each step indented one notch, stair line along the left edges;
  wedge and "Go" at the bottom. Each step lands as it scrolls in.

## Section 1, "How long each stage takes, and what it leaves": look `hold-timeline` (component HoldTimeline)
- Concept services.1: macro weld/water close-up with a rising timeline of hold-point nodes and stage callouts; PQ 12 months
  as boxed hero figure.
- Built: dark section (data-theme="dark"). Macro drawn inline as SVG line art (no photo exists): a huge cropped PP pipe
  sweeping through the frame, its round body in engraving lines (denser to the edges), a fusion-weld bead band across it,
  water as a dashed flow centre line. In front, one rising flow line with six nodes; callouts hang off nodes on hairline
  poles, alternately below-right and above-left so the line never crosses text. Hold points: ringed nodes plus a
  "Hold point" stamp with who signs. Stage title split at the last top-level comma into name and duration; placeholder
  durations are mono chips, "at least 12 months" (PQ) becomes the boxed figure.
- IsoKit not used: the pipe close-up is not an isometric part; drawn inline in the renderer in the same stroke family.
- Copy cut: none. "Hold" / "Signed by …" became "Hold point · Signed by …" (wording from the section intro).
- Motion: macro focus pull, engraving draws from the weld seam outwards, bead rings on, water creeps once; then a flow drop
  runs the line from the left edge laying it behind it; nodes land on arrival, poles grow, callouts unroll from the node;
  at hold points the drop waits, the ring opens and the stamp strikes; the PQ figure wipes in and counts to 12; the drop
  rests at the top right. ~4.5 s. Hover swells a node and lights its pole.
- Phone: one vertical flow line down the left, stages along it, macro as a faint ground; each stage lands on scroll.

## Checks
- build + check: 0 problems from these files (the remaining site problems belong to other builders' new components).
- check --budgets services: 1 overrun, block 2 FAQ answer (not mine).
- motioncheck 1280 and 375: 0 errors, 0 hidden. Light, dark, 1024 and 375 reviewed.

## Weak spots
- The macro is line art, not the concept's photographic close-up; it reads as a pipe and weld but is quieter than the concept.
- Seven full cards at 1280 make narrow columns (about 165 px); text is 14 px with 12 px mono terms. At 1180 px and below
  the stair turns vertical.
- The stair-router at mid widths uses a two-column term grid whose reading order runs row by row.

## Shared requests
None.

## Pass 9 polish
- StairRouter: the situation under a short label is now the card's subtitle (its "Your situation" term kept for screen
  readers only), one rule less per card; "Start" outline type a little stronger (0.46).
- HoldTimeline: off the forced dark theme onto the page's alternate ground, so the navy router stays the one loud section
  (no two dark bands in a row); macro engraving at 0.34; the PQ figure is "at least 12 months" with 12 set large and light
  in sans (mono dropped for the hero figure; it still counts up).
- FAQ item 4 trimmed to 60 words: "of qualification testing" -> "of qualification"; "with your quality unit's approval" ->
  "with quality unit approval"; "Sampling continues for a year" -> "Sampling runs for a year".
