Specification tables present water quality limits and test results, the most persuasive content Aquemi has.

- Markup: `<table class="aq-spec">` with a `<caption>` naming the system and standard, a `<thead>`, and one `<tr>` per parameter. Wrap it in `<div class="aq-scroll">` so it scrolls sideways on phones instead of widening the page.
- Columns: parameter (`<th scope="row">`), value (`aq-spec__value`: mono with tabular figures), method or reference (`aq-spec__method`), and optionally status.
- Write limits exactly as the pharmacopoeia states them, with units: `≤ 1.3 µS/cm @ 25 °C`, `≤ 500 ppb`, `< 0.25 EU/mL`.
- Status cells use `aq-status aq-status--pass`, `--caution` or `--fail`, and always include the word.
- Highlight at most one row, with `is-highlight` (`flow-tint`).
- The consumer provides the data. Never show a result without its method.
