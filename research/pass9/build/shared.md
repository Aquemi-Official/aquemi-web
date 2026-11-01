# Pass 9 build notes: site-wide sections (Hero, FAQ, RelatedLinks, EnquiryForm, Closing)

Built 2026-11-01 on port 8768. Upgraded in place (no looks); no page JSON touched. Every field, link, intent,
anchor, form name, step flow, privacy note and placeholder kept. No copy cut or added (decorative aria-hidden
duplicates only: the FAQ dial's count, the hero sheet, drawn sheets and pipes).

## Concepts adapted
- Hero index rail: 35-concept-hub-hero (numbered index on a pipe with tees). Hero type scale: sys-pw.0 / industries.2
  (oversized editorial headline). Hero sheet: the blueprint grounds of the pool, kept very faint.
- FAQ dial: services.0 (giant cropped outline type) + sys-pw.2 (huge numerals), calmed to one counter.
- RelatedLinks: 17-concept-related (route with drops) + sys-pw.2 (Swiss tiles with one image cell).
- Closing exchange: 49-concept-send-back (send list -> working days arrow -> returned documents with thumbnails),
  drawn as a manifold/pipe process. Corner mark (option D) untouched.
- EnquiryForm: 21-concept-form (spec data sheet with title strip, RFP header) + a pipeline progress.

## Per component
- **Hero** (`parts/Hero.js`, `Hero/`): headline clamp 48-76 (home 56-88), eyebrow led by a flow rule, faint
  registration-cross sheet top right (`HERO_SHEET`), figure grid 5/7 with bigger callout values and a flow scan line
  riding the print wipe, index and system index hung off a pipe rail with tees, nodes and page icons (hover lights the
  route). Drawn-figure grids stay 6/6. Motion: rail laid, tees/nodes seat, rows slide off, water runs the rail.
- **FAQ** (`blocks/faq.js`, `FAQ/`): outline counter (dial) under the sticky head, turns to the open question
  ("02 / of 05", flow stroke); rows 22/30 with a 44 px square key that fills with `action` when open; flow rule down
  the open row. Motion: dial rolls up, rows wipe in, question rises; dial rolls on open/close (toggle listener, works
  under reduced motion without the roll). Phones: no dial.
- **RelatedLinks** (`blocks/related.js`, `RelatedLinks/`): tiles hung off one pipe (drop + node each), picture =
  page's ART drawing else its icon as a large Spot. Motion: pipe laid, nodes seat, drops fall, tiles rise, pictures
  print up, water runs the pipe. Phones: rail down the left, rows with a small picture.
- **EnquiryForm** (`EnquiryForm/` style + motion only; renderer and behaviour untouched): navy title strip flush with
  the panel, pipeline progress (square nodes, flow line to the current step, action-filled current node, Flip ring),
  big flow section numbers, ticked option cells on flow-tint with a flow edge, taller submit. Motion adds the water
  running along the passed line on Continue.
- **Closing** (`parts/Closing.js`, `Closing/`): display headline (40-68), large button, flow water line on the top
  edge; exchange as send rows -> bus -> pipe (turnaround as its label, droplet) -> bus -> returned drawn sheets.
  Phones now show three returns (they were hidden) on one bus down the left with the pipe upright.

## Checks
- build; check: 0 problems in these components (remaining problems belong to other builders' new components).
  `check --budgets sys-pw`: 0.
- motioncheck home, sys-pw, services, contact-proposal, about at 1280 and 375: 0 errors, 0 hidden.
- Reviewed sys-pw, systems, home, about, contact-proposal, cmp-quality, services at 1280 and 375, light and dark.

## Weak or open
- The home loop drawing is unchanged in size (labels overflow their SVG boxes when scaled above 1:1); the hero there
  is carried by the type.
- `preview.js` writes `data-theme="dark"` for non-sheet sections; stripped by hand from the FAQ and RelatedLinks
  previews.
