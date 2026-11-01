TraceLines shows a traceability table as transit lines: each requirement is a line that starts at its code, set large, and runs down through one station per document, with a dashed pass where a document does not answer it and test-step chips branching off where a document names its tests.

- On the site: a `table` block with `"look": "trace-lines"` (renderer `assets/src/blocks/look-trace-lines.js`), svc-design "An example: two requirements traced to their tests". No concept of its own (Gemini quota); adapted from `research/pass9/concepts/industries.0.png` (routes piped through columns), recast as a data-viz transit map.
- Markup: `section.aq-trace-lines-sec` → `div.aq-trace-lines` (`--k` lines, `--n` stations; one grid): `__docs` (aria-hidden station names `__dh`, `__doc` with `__dn`), then per requirement `div.__line` (`data-line`, `--col`): `__head` (`__code`, `h3.__req`) and `ol.__stops` of `li.__st` (`is-na`, `is-end`): `__k` (the document name, visually hidden on desktop), `p.__p` (with `__met` for a cell that opens "Met."), `ul.__tests` (`__step` chips). The wrappers are `display: contents`, so every station shares its row.
- Fields, as a table: `cols` [row name, requirement…] (`"URS-012: conductivity …"`: the code before the first colon is drawn large), `rows` (cells strings or `{t, link}`). "Not applicable" cells pass dashed. Sentences that open with test steps (`FAT:`, `SAT and OQ:`, `IQ:`) become chips; a cell opening "Met." shows the word as a `pass` chip (status with its word).
- Tokens: line colours `flow` (first line) and `ink` (second), `line-strong` row hairlines, `pass` for the Met chip only.
- Pointing at a line dims the other (mouse only; everything stays readable).
- Phones: one line after the other, each station with its document name.

## Motion

Motion: one timeline. The station names slide in; each line's code decodes at its start ring, then the rail wipes down station by station with the text, and chips branch out where a station has them; the second line runs a beat behind the first. About 3.5 s; nothing under reduced motion.
