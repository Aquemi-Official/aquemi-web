ProofFolders shows an evidence table as a drawer of manila folders, one per standard: the standard set large beside its folder, what we design to typed on a slip, the proof as clipped sheets struck with a stamp of the standard's code, and where we show it as the folder's navy index label.

- On the site: a `table` block with `"look": "proof-folders"` (renderer `assets/src/blocks/look-proof-folders.js`). Origin: pass 9 concept `research/pass9/concepts/compliance.2.v2.png` (folders with stamps and clipped proof).
- Markup: `<section class="aq-section aq-proof-folders-sec">` → `div.aq-proof-folders` with `__cols` (the drawn column heads, aria-hidden) and `ol.__list` of `li.__row` (`--i` steps the tab): `__std` (index, `h3.__name` with `__code` and `__title`) and `div.__folder` (limestone, `data-theme="light"`): `__tab` (the code), `__how` (`p.__slip`), `__proof` (`__clip`, `ul.__sheets` of `li.__sheet` with `--j`, `__stamp`), `__go` (`p.__label`, the row's link over the whole label). Each cell names its column in `p.__k`, visually hidden on desktop and shown on phones.
- Fields, as a table: `cols` [standard, what we design to, proof, where we show it], `rows` (cells strings or `{t, link}`), `fold`, `fold_noun`. The code on the tab and stamp is the standard cell up to its number (`USP <645>`, `Ph. Eur. 0008`), else its first word; the rest is the title. Proof cells split on ";" into sheets.
- Rows are real list items with the standard in their first cell, so the standards map's chips find and flash them (`aq-standards-map-hit` outlines the folder).
- Tokens: `limestone` folders (every second a shade deeper by `color-mix` with `on-limestone`), `surface-raised` paper with `line` edges, `flow` stamp ink (double rule), `navy` label. No shadows.
- Phones: the standard over its folder, then slip, sheets and label stacked with their column names.
- Use it for up to about eight standards with a short proof list each. Not for long clause lists (use EvidenceMap or CutawayRail).

## Motion

Motion: one timeline per folder as it reaches the viewport. The folder rises into place, the standard slides in beside it, the slip drops and turns to its angle, the sheets fan out from under the clip, the stamp strikes (large and light, down hard, a small jolt through the folder) and the index label wipes in from the edge. Under 2.5 s each; nothing under reduced motion.
