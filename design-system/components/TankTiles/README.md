TankTiles sets a spec block's parameters on a Swiss checkerboard of square navy and limestone tiles, each led by a huge light slash numeral, with one steel-blue blueprint tile of the storage tank as the anchor.

- On the site: a `spec` block with `"look": "tank-tiles"` (renderer `assets/src/blocks/look-tank-tiles.js`), sys-storage "Tank and pipework". Origin: pass 9b concept `research/pass9b/concepts/sys-storage.3.png` (spec rows split across square tiles, one blue blueprint tile as the visual anchor). It replaced the pass 9 look `tank-section`.
- Markup: `section.aq-tank-tiles-sec` > (`div.aq-fold` when folded) > `div.aq-tank-tiles` (4-column grid, no gutters) > `div.__head` (the section head, first navy tile), `div.__bp[aria-hidden]` (`svg.__svg`: tank in section with hatched wall, level, spray ball and jets, vent filter, legs and outlet, H and ID dimensions; `span.__bpt` the caption), `ol.__list` (`display: contents`) of `li.__tile.is-navy|is-stone` (`p.__n` numeral with `span.__sl` slash, `h3.__p`, `p.__v`, `p.__m` basis and `a.__link`).
- Fields: `h`, `caption` (eyebrow, also the blueprint tile's caption), `intro`, `rows [{p, v, m, link, link_label}]`, `fold`, `fold_noun`. Tone per tile follows the checkerboard of its grid cell (head at cell 1, blueprint at cell 3, rows fill the rest).
- Tokens only: navy and limestone grounds with their `on-navy` / `on-limestone` inks, the blueprint ground a mix of `flow` and `navy` with limestone hairlines. Numerals are Geist Light at 72 px (56 px under 1100 px, 48 px on phones). Square corners, no gutters.
- Desktop shows every tile (the fold is for phones). Phones: one column, head, blueprint as a 2:1 band, then the tiles alternating limestone and navy; the fold returns.
- Not for long values: a tile holds a name, one value and one basis line.

## Motion

Motion: ported from Subframe Motion "Staggered shutter reveal" (shutter-scene). The checkerboard opens like shutters: every tile is covered by slats of the opposite tone that retract upward (820 ms, cubic-bezier(.16,1,.3,1), 45 ms between slats) in a diagonal wave from the head tile; as a tile opens its numeral rolls up on the odometer and the tank's lines draw on. Once, about 2 s; the slats are removed at the end. Reduced motion: nothing runs.
