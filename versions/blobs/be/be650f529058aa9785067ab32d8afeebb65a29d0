WaterPath shows the system families as stations on one pipe, from city feed to point of use, so the reader sees how the systems connect and can open each one's line, standard and page from the drawing.

- It is the ProcessDiagram flow (same `aq-diagram` markup, `wFlow` in `assets/src/parts/ProcessDiagram.js`) with the `aq-water-path` modifier: `<div class="aq-diagram aq-water-path">` in a Plate whose caption reads "Water path · N systems". Read the ProcessDiagram README for markup, behaviour (toggle buttons, pipe-run tint, detail panel, phone layout, no-script fallback) and token rules.
- The modifier adds pipe-end labels above the row (`aq-diagram__ends`: `from`, default "Feed water"; `to`, default "Point of use") and drops the In/Out labels from the panel: on this drawing the neighbours are visible and the link matters more.
- On the site: block type `path` with `items` (`t`, `d`, `tag`, `link`, `spot` or `icon`) and optional `from` / `to`. The detail panel shows `d`, the `tag` (governing standard) and a link to the `link` page. A station without `spot` or `icon` falls back to the line glyph keyed by its page id in `GLYPH` (`assets/src/parts/WaterPath.js`).
- Order the stations in the order water travels: pretreatment, PW, WFI, pure steam, storage and loops, then monitoring, which watches the whole path. Seven at most.
- For a list that isn't a physical sequence use LinkGrid; for one system's treatment train use ProcessDiagram directly.
- Origin: concept A (`design-system/inspiration/gemini/01-concept-water-path.png`) and the treatment train concept (03), rebuilt with Aquemi tokens.

## Motion

Motion: WaterPath uses the ProcessDiagram choreography (`ProcessDiagram/motion.js`, which animates every `.aq-diagram`): water travels from the feed through each family's station to the point of use, each station lighting as it arrives; the pipe-end labels decode as the water leaves and reaches them; then the selected family's detail rises. Choosing a family runs the water on to it before its detail opens (see the ProcessDiagram README).
