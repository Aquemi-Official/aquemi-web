Specification sheets present water quality limits as a two-column matrix with the one critical limit pulled out as a full-width band, the most persuasive content Aquemi has.

## Spec sheet (default)

On desktop the rows flow into two columns. Each cell stacks the parameter, the limit in `data` (Geist Mono 14/20) with its unit, and the method or reference beneath. Highlighted rows at the top span both columns as a `flow-tint` band with a `flow` rule on the left and a value one step larger (20/28). On phones (container 860 px or less) it becomes compact two-line rows on hairlines: the parameter, then the value followed by ` · ` and the basis in small muted type; the highlighted row keeps its tint. No sideways scroll is needed.

```html
<table class="aq-spec" role="table">
  <caption>WFI by distillation · USP and Ph. Eur.</caption>
  <thead role="rowgroup"><tr role="row">
    <th scope="col" role="columnheader">Parameter</th><th scope="col" role="columnheader">Specification</th><th scope="col" role="columnheader">Method or reference</th>
  </tr></thead>
  <tbody role="rowgroup">
    <tr role="row" class="is-highlight is-lead"><th scope="row" role="rowheader">Bacterial endotoxins</th><td role="cell" class="aq-spec__value">&lt; 0.25 EU/mL</td><td role="cell" class="aq-spec__method">USP &lt;85&gt;</td></tr>
    <tr role="row"><th scope="row" role="rowheader">Conductivity</th><td role="cell" class="aq-spec__value">≤ 1.3 µS/cm @ 25 °C</td><td role="cell" class="aq-spec__method">USP &lt;645&gt; stage 1</td></tr>
  </tbody>
</table>
```

- It stays a real `<table>`: `<caption>` naming the system and standard, a `<thead>` (shown as one label strip), one `<tr>` per parameter with `<th scope="row">`. The CSS changes the table's `display`, so always add the ARIA roles shown above; they keep row and column semantics for screen readers in every browser.
- Cells: parameter (`th`), value (`aq-spec__value`), method or reference (`aq-spec__method`; may be empty). An optional `aq-spec__status` cell holding an `aq-status` sits top right of the cell, or under the reference in the band.
- Write limits exactly as the pharmacopoeia states them, comparison sign and unit included: `≤ 1.3 µS/cm @ 25 °C`, `≤ 500 ppb`, `< 0.25 EU/mL`. Never round or reword them for the layout.
- **Highlights.** Mark critical rows with `is-highlight` (block field `hl`). Rows always keep their source order; nothing is moved. Highlighted rows at the top of the list also carry `is-lead` and become full-width bands; a highlighted row further down (a step in a sequence, say) is tinted in place with the same `flow` rule and `flow-tint`. Put the limit a QA reader checks first at the top and highlight it: endotoxins for WFI, conductivity for PW, non-condensable gases for pure steam. Two or three highlights at most, or nothing stands out.
- **Row link.** A row may point to the page that explains it (block field `link`, a page id): a quiet `aq-spec__link` after the basis, the page's nav label and an arrow in `flow` (`<a class="aq-spec__link" href="#svc-fat-sat">FAT and SAT</a>`). Use it instead of writing "See the … page" into the basis.

## Token rules

- Surfaces: label strip `surface-sunken`, matrix body `surface-raised`, rules `line`. Band `flow-tint` with a 2 px `flow` left rule; text on it stays `ink` and `ink-muted`.
- Type: header labels in `eyebrow`; parameter in `body` (phone 15/22); values in `data` (Geist Mono 14/20, tabular figures) at every width; band value 20/28 on desktop, `data` on phones. `readout` size belongs to KeyFacts and Readout only. Placeholders in values keep the Placeholder style at the row's text size. Method in `small`, `ink-muted` (12/18 on phones).
- Spacing only from `--space-*`: cells `space-4` vertical, matrix columns `space-12` apart, band padding `space-6` (`space-4` on phones).
- Status words use `aq-status aq-status--pass`, `--caution` or `--fail`, and always include the word.

## When not to use it

- Not for a single headline figure in running copy: use a readout or stat component.
- Not for test results with several values per parameter (limit, result, status): use CompareTable (`aq-compare-table`), and never show a result without its method.
- Not for options compared against criteria: use CompareTable.
- The consumer provides the data; never fill a `[placeholder]` with a guessed value.
- Phones: three lines per row, parameter, value, then the basis (13 px, own line) and any row link (44 px hit area); the column-label strip is visually hidden (it stays for screen readers).

## Caption and section head

- The `<caption>` is visually hidden. On the site, block `spec`'s `caption` is shown once, as the eyebrow of the standard section head above `h` (`assets/src/blocks/spec.js`). Never print a second mono caption above the table.
- Ten rows or fewer per table (content budget). Split a longer sheet by topic.

## Readout lead row (concept 26)

A lead row (`is-highlight is-lead`, the first `hl` rows) whose value holds a number becomes a readout: the renderer adds `is-readout` and `data-theme="dark"` to the row and a first cell `<td class="aq-spec__read" aria-hidden="true"><span class="aq-spec__read-n">< 0.25</span><span class="aq-spec__read-u">EU/mL</span></td>` (the limit parsed as LimitGauges does: the first comparator and number, or a leading number). The row is a navy panel inside the sheet: the limit in `font-display` 600 at 132 px (88 px on phones), the unit set vertically beside it, a scale rule along the foot, and to the right the parameter in condensed caps, the full value in a `flow` ruled chip and the basis. The big figure is decoration; the value cell keeps the exact text. Lead rows without a number stay a `flow-tint` band with the parameter in condensed caps.
- Parameters in the other rows are 13/20 Geist Mono caps.
