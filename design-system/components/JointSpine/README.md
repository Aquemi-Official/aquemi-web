JointSpine shows a log as rows hanging off a pipe: a twin-wall pipe drops in beside the title, bends and runs down the log as its spine, and each row sits level with a numbered joint on it.

- On the site: a `table` block with `"look": "joint-spine"` (renderer `assets/src/blocks/look-joint-spine.js`), svc-fabrication "One joint, one log line". Concept: `research/pass9b/concepts/svc-fabrication.0.png` (vertical double-line pipe with tagged joints beside the joint-log table).
- Markup: `section.aq-joint-spine-sec` → `div.aq-joint-spine`: `__lead` (`span.__pipe.__drop` with `i.__ink`, the section head, `svg.__bend` 240 × 72 drawn 1:1: `__w--imp`, `__g`, `g.__bink` with `__w`, `__g`, `__h2o`; `p.__legend` aria-hidden), the fold wrapper with `ol.__log` of `li.__row` (`.is-r` on odd rows; `span.__pipe` with `__ink`, `__joint`, `__no`; `h3.__f`, `p.__p`, `p.__r`, each with a `__k` column label), then `span.__pipe.__tail`.
- Fields, as a table: `h`, `cols` [field, what it proves, record], `rows`, `fold`, `fold_noun`. The column names show once as the legend (in each row for screen readers, shown per row on phones). The fold applies on phones only.
- Drawing: walls 1.5 px `line-strong` (the ink) over a `line` copy (the impression), water a `flow` centre line. The joint is the piping-isometric joint mark (a tick across the pipe and a dot), never a joint profile, so it does not assert a joining method. The bend's ground stroke follows `surface` or `surface-sunken` (`--js-g`).
- Pointing at a row lights its joint, dot and number in `flow` and tints the row `flow-tint`.
- Phones: no drop or bend; a 56 px rail with the spine at the left, numbers beside the joints, labels shown per row.
- Not for steps in time (use a steps look) or for a spec with a drawing to pin (JointMacro).

## Motion

Motion: ported from Subframe Motion "SVG line drawing animation" (signature-draw). The pipe is inked over its faint impression in one stroke on cubic-bezier(.37,.12,.28,1) (2.1 s plus 40 ms a row, at most 2.6 s): down the drop, round the bend, down the spine and out of the section; as the ink reaches each joint its tick and number strike and the row prints beside it. Once; nothing under reduced motion (the ink is complete without script).
