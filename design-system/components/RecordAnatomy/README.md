RecordAnatomy explains what a published record carries by drawing the anatomy of one specimen record: a limestone sheet in zones, one small drawing per part of the record, each zone's number led across the gutter to the point that explains it.

- On the site: Projects, "What a case study proves" (`prose`, `"as": "explainer"`, `"look": "record-anatomy"`; renderer `assets/src/blocks/look-record-anatomy.js`). Origin: `design-system/inspiration/gemini/60-concept-project-record.png` (the project record sheet with its outcome figure) and `54-concept-explainer-drawing.png` (a drawing plate with numbered points beside it).
- Markup: `div.aq-record-anatomy` → `ol.__rows` of `li.__row.is-<fig>` → `div.__zone` (aria-hidden, `data-theme="light"` so the paper and its lines stay light in dark mode: `span.__mark` number, `svg.__svg`), `span.__lead` (leader with an end dot), `div.__pt-t` (`h3.__t` with `span.__n`, `p.__d`).
- Drawings (`fig`): `figure` an empty bracketed value and a bar under a dashed limit; `method` a loop with three sampling points and sample ticks over a period; `report` a numbered document with a results table; `approval` two signature lines and a stamp. None carries a value: the record is a specimen. SVG `<text>` only for the brackets and "No.", aria-hidden.
- Fields: `h`, `intro`, `points [{t, d, fig}]` (up to four; `fig` defaults by order).
- Tokens: `limestone` sheet, `navy` lines (1.5 px, 1 px detail, dashed hidden and limit lines), `flow` only for signatures, sampling points and the tick; points in `ink` Geist Light 32 with `ink-muted` text. Hover: the number fills navy, the leader turns flow.
- Phones: each zone sits above its point; the leader drops down from the zone to the point.

## Motion

Motion: the sheet unrolls downwards, then each zone is read in turn: its number stamps in, the drawing draws on (the bar rises under the limit, the stamp strikes once), the leader runs out to the point and the point's title follows. Once, under 4.5 s; nothing under reduced motion.
