Specification sheets present water quality limits as a two-column matrix with the one critical limit pulled out as a full-width band, the most persuasive content Aquemi has.

## Spec sheet (default)

On desktop the rows flow into two columns. Each cell stacks the parameter, the limit in large Geist Mono with its unit, and the method or reference beneath. The highlighted row spans both columns as a `flow-tint` band with a `flow` rule on the left and a `readout`-sized value. On phones (container 860 px or less) it becomes one list of compact rows, parameter and reference on the left, value right-aligned, and the highlighted row becomes a card at the top. No sideways scroll is needed.

```html
<table class="aq-spec" role="table">
  <caption>WFI by distillation · USP and Ph. Eur.</caption>
  <thead role="rowgroup"><tr role="row">
    <th scope="col" role="columnheader">Parameter</th><th scope="col" role="columnheader">Specification</th><th scope="col" role="columnheader">Method or reference</th>
  </tr></thead>
  <tbody role="rowgroup">
    <tr role="row" class="is-highlight"><th scope="row" role="rowheader">Bacterial endotoxins</th><td role="cell" class="aq-spec__value">&lt; 0.25 EU/mL</td><td role="cell" class="aq-spec__method">USP &lt;85&gt;</td></tr>
    <tr role="row"><th scope="row" role="rowheader">Conductivity</th><td role="cell" class="aq-spec__value">≤ 1.3 µS/cm @ 25 °C</td><td role="cell" class="aq-spec__method">USP &lt;645&gt; stage 1</td></tr>
  </tbody>
</table>
```

- It stays a real `<table>`: `<caption>` naming the system and standard, a `<thead>` (shown as one label strip), one `<tr>` per parameter with `<th scope="row">`. The CSS changes the table's `display`, so always add the ARIA roles shown above; they keep row and column semantics for screen readers in every browser.
- Cells: parameter (`th`), value (`aq-spec__value`), method or reference (`aq-spec__method`; may be empty). An optional `aq-spec__status` cell holding an `aq-status` sits top right of the cell, or under the reference in the band.
- Write limits exactly as the pharmacopoeia states them, comparison sign and unit included: `≤ 1.3 µS/cm @ 25 °C`, `≤ 500 ppb`, `< 0.25 EU/mL`. Never round or reword them for the layout.
- Highlight at most one row, with `is-highlight`, and put it first in the source so reading order matches what is seen (the `spec` block renderer moves the `hl` row first). Choose the limit a QA reader checks first: endotoxins for WFI, conductivity for PW, non-condensable gases for pure steam.

## Token rules

- Surfaces: label strip `surface-sunken`, matrix body `surface-raised`, rules `line`. Band `flow-tint` with a 2 px `flow` left rule; text on it stays `ink` and `ink-muted`.
- Type: caption and header labels in `eyebrow`; parameter in `body` (phone 14/20); matrix values Geist Mono 20/28 with tabular figures (phone 16/24); band value in `readout` 40/44 (phone 28/34); method in `small` metrics, `ink-muted`.
- Spacing only from `--space-*`: cells `space-4` vertical, matrix columns `space-12` apart, band padding `space-6` (`space-4` on phones).
- Status words use `aq-status aq-status--pass`, `--caution` or `--fail`, and always include the word.

## When not to use it

- Not for a single headline figure in running copy: use a readout or stat component.
- Not for test results with several values per parameter (limit, result, status): use CompareTable (`aq-compare-table`), and never show a result without its method.
- Not for options compared against criteria: use CompareTable.
- The consumer provides the data; never fill a `[placeholder]` with a guessed value.
- Phones: every row stacks parameter, value (18/26 mono, left-aligned so long values like "Hot water at 80 °C, RO and EDI" wrap cleanly), then method; the critical card value is 24/30.
