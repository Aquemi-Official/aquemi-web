CompareTable sets options against criteria as a system matrix in a drawing frame, with numbered column heads, row labels in a narrow left column and, on phones, one tab per column instead of a sideways scroll.

## Markup

```html
<div class="aq-compare-table" data-col="1">
  <div class="aq-compare-table__tabs" role="group" aria-label="Column shown">
    <button type="button" class="aq-compare-table__tab" data-col="1" aria-pressed="true">Released against</button>
    <button type="button" class="aq-compare-table__tab" data-col="2" aria-pressed="false">Specifications</button>
  </div>
  <table class="aq-compare-table__table" role="table">
    <thead role="rowgroup"><tr role="row">
      <th scope="col" role="columnheader">Water grade</th>
      <th scope="col" role="columnheader">Released against</th>
      <th scope="col" role="columnheader">Specifications</th>
    </tr></thead>
    <tbody role="rowgroup">
      <tr role="row">
        <th scope="row" role="rowheader">Purified Water (PW)</th>
        <td role="cell">USP Purified Water; Ph. Eur. 0008</td>
        <td role="cell"><a href="#sys-pw" data-wp="sys-pw">PW generation</a></td>
      </tr>
    </tbody>
  </table>
</div>
```

- It stays a real `<table>`: `<th scope="col">` heads, and the first cell of each row is `<th scope="row">`. The phone layout changes the table's `display`, so always add the ARIA roles shown; they keep row and column semantics for screen readers.
- CSS numbers the option columns `[01]`, `[02]` … above each head and the rows `01`, `02` … above each row label. The numbers are decoration and hidden from screen readers where the browser supports alt text on `content`. The brackets are drawn by CSS, never typed into copy, so they are not confused with `[placeholders]`.
- One `aq-compare-table__tab` button per option column, in column order, `data-col` counting from 1 after the row-label column. The wrapper's `data-col` names the column shown on phones (start at `1`). The site's delegated click listener in `assets/src/blocks/table.js` updates `data-col` and `aria-pressed`. On desktop the tabs are hidden.
- Routing links: a cell may hold one plain link naming the destination page (`PW generation`), in the last column. It is set in mono caps in `flow` with a trailing arrow, like "View spec →".

## Layouts

- **Matrix (three to six columns).** Fixed layout; the row-label column takes 22 % and the option columns share the rest equally so no option looks favoured. Cells are separated by `line` hairlines.
- **List (`aq-compare-table--list`, two columns).** A label and one value is a list, not a matrix: no tabs, each row is a numbered label beside its value (1 : 2), and the column heads are a label strip. On phones the label sits above the value.
- **Long prose.** Tables of three or more columns stay a matrix on desktop even when cells run to several sentences; the phone sheet shows one column at a time, which reads prose well. Beyond five options with long prose, split the content into sections instead.
- **Phones** (`@container (max-width: 860px)`): the tabs wrap onto as many lines as they need, two or more to a row, and the table becomes a stack of row sheets, each the row label in small mono above the chosen column's value. The column heads are visually hidden but stay in the accessibility tree. Nothing scrolls sideways.

## On the site

Block type `table` (`assets/src/blocks/table.js`): `{ "h": "…", "cols": ["…", …], "rows": [["…", "…", {"t": "PW generation", "link": "sys-pw"}], …] }`. A cell is a string or `{t, link}`; the link renders only when the page id exists. Two columns render as the list layout. Heads and cells go through the Placeholder helper, so `[bracketed facts]` show as placeholders.

## Token rules

- Frame: 1 px `line-strong` border with a `space-2` margin (`space-1` on phones) of `surface`, then the table in `surface-raised` with a `line` border. Head row `surface-sunken` with a `line-strong` rule beneath.
- Type: column heads and tab numbers in the eyebrow style (Geist Mono 12/16, uppercase, `ink-muted`); column numbers in `flow`, row numbers in `ink-subtle`. Row labels Geist 500 14/22 (phone: Geist Mono 12/18, `ink-muted`); cells Geist 14/22 (phone 16/24).
- Tabs: `surface-sunken` with a `line` border; pressed tab `surface-raised`, `line-strong` border, a 2 px `flow` top edge and its number in `flow`. Focus: 2 px `focus` ring with 2 px offset.
- Spacing only from `--space-*`: cells `space-4`, tab padding `space-3`, tab gaps `space-1`.

## Writing

- Row labels name the option or the criterion in sentence case; heads are short noun phrases.
- Write limits exactly as the standard states them, sign and unit included: `≤ 1.3 µS/cm @ 25 °C`, `< 0.25 EU/mL`.
- Facts only Aquemi can supply go in `[square brackets]`; never fill one with a guessed value.

## When not to use it

- Not for one system's specification limits: use SpecTable (`aq-spec`).
- Not for a single headline figure: use a readout or stat component.
- Not for more than six columns: split the comparison.

Origin: concept R in `design-system/inspiration/`, generated in Gemini and rebuilt with Aquemi tokens.
