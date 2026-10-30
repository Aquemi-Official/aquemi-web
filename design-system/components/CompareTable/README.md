CompareTable sets three or more options against criteria as a hairline matrix, with eyebrow column heads, numbered row labels in a narrow left column and, on phones, one record per row (or column tabs for wide tables) instead of a sideways scroll.

## Markup

```html
<div class="aq-compare-table">
  <table class="aq-compare-table__table" role="table">
    <thead role="rowgroup"><tr role="row">
      <th scope="col" role="columnheader">Water grade</th>
      <th scope="col" role="columnheader">Released against</th>
      <th scope="col" role="columnheader">Page</th>
    </tr></thead>
    <tbody role="rowgroup">
      <tr role="row">
        <th scope="row" role="rowheader">Purified Water (PW)</th>
        <td role="cell"><span class="aq-compare-table__k" aria-hidden="true">Released against</span>USP Purified Water; Ph. Eur. 0008</td>
        <td role="cell" class="aq-compare-table__go"><a href="#sys-pw" data-wp="sys-pw">PW generation</a></td>
      </tr>
    </tbody>
  </table>
</div>
```

- It stays a real `<table>`: `<th scope="col">` heads, and the first cell of each row is `<th scope="row">`. The phone layout changes the table's `display`, so always add the ARIA roles shown; they keep row and column semantics for screen readers.
- CSS numbers the rows `01`, `02` … in the shared index style (mono 13 px, `ink-subtle`): above each row label on desktop, in the left index column on phones. Columns are not numbered.
- Each value cell starts with `aq-compare-table__k`, its column label, hidden on desktop and `aria-hidden` (the head already names the column for screen readers).
- **Link column** (`aq-compare-table__go`): a column whose every cell is one page link ("Where we show it", "Page"). On desktop it is an ordinary column; on phones its link ends the row's record (wherever the column sits) without a label, and it never gets a tab. Links are set in mono caps in `flow` with a trailing arrow on desktop, and as a quieter Geist 500 14/22 `flow` link on phones, the arrow joined to the last word so it never wraps alone.
- **Tabs** (`aq-compare-table--tabs`, four or more value columns): add `data-col` on the wrapper (the column index shown, counting the row-label column as 0) and one `aq-compare-table__tab` button per value column before the table. The site's delegated click listener in `assets/src/blocks/table.js` updates `data-col` and `aria-pressed`. Hidden on desktop.

## Layouts

- **Matrix (three to six columns).** Fixed layout; the row-label column takes 22 % and the option columns share the rest equally so no option looks favoured. Cells are separated by `line` hairlines.
- **List (`aq-compare-table--list`, two columns).** A label and one value is a list, not a matrix: no tabs, each row is a numbered label beside its value (1 : 2), and the column heads are a label strip. On phones the label sits above the value.
- **Long prose.** Tables of three or more columns stay a matrix on desktop even when cells run to several sentences. Beyond five options with long prose, split the content into sections instead.
- **Phones, up to three value columns** (`@container (max-width: 860px)`): no frame and no tabs. Every row becomes a record on a hairline: the index, then the row label as its title (Geist 500 16/24), then one line per other column, "Label: value" (label Geist 500 13 `ink-muted`, value 14/22 `ink`), and the link column last. The reader sees every cell without a tap.
- **Phones, four or more value columns** (`--tabs`, e.g. service plan tiers, roles with six attributes): records would run past two screens, so one tab per value column sits on a single strip that scrolls sideways inside itself (tabs `space-32` wide, at least 44 px tall, never wrapping to a second line), and each row shows the row label left (13/20 `ink-muted`) beside the chosen column's value. Link columns stay visible under every row. Nothing on the page scrolls sideways.
- The column heads are visually hidden on phones but stay in the accessibility tree.

## On the site

Block type `table` (`assets/src/blocks/table.js`): `{ "h": "…", "cols": ["…", …], "rows": [["…", "…", {"t": "PW generation", "link": "sys-pw"}], …] }`. A cell is a string or `{t, link}`; the link renders only when the page id exists. The renderer marks link columns, adds the cell labels and picks records or tabs by the number of value columns. Two columns render as the list layout. Heads and cells go through the Placeholder helper, so `[bracketed facts]` show as placeholders.

## Token rules

- Frame: 1 px `line-strong` border with a `space-2` margin (`space-1` on phones) of `surface`, then the table in `surface-raised` with a `line` border. Head row `surface-sunken` with a `line-strong` rule beneath.
- Type: column heads in the eyebrow style (Geist Mono 12/16, uppercase, `ink-muted`); row numbers in `ink-subtle`. Row labels Geist 500 14/22 (phone records 16/24 `ink`; phone tabs 13/20 `ink-muted`); cells Geist 14/22.
- Tabs: `surface-sunken` with a `line` border, Geist 500 13/18; pressed tab `surface-raised`, `line-strong` border and a 2 px `flow` top edge. Focus: 2 px `focus` ring with 2 px offset.
- Spacing only from `--space-*`: cells `space-4`; phone records `space-3` apart, index column `space-8`; tab padding `space-2` `space-3`, tab gaps `space-1`.

## Writing

- Row labels name the option or the criterion in sentence case; heads are short noun phrases.
- Write limits exactly as the standard states them, sign and unit included: `≤ 1.3 µS/cm @ 25 °C`, `< 0.25 EU/mL`.
- Facts only Aquemi can supply go in `[square brackets]`; never fill one with a guessed value.

## When not to use it

- Not for one system's specification limits: use SpecTable (`aq-spec`).
- Not for a single headline figure: use a readout or stat component.
- Not for more than six columns: split the comparison.

Origin: concept R in `design-system/inspiration/`, generated in Gemini and rebuilt with Aquemi tokens.

## Use it sparingly

The site has over a hundred tables; most are lists in disguise. Use CompareTable only for a real comparison with **three or more columns** (two or more options against the same criteria). Otherwise:

- A parameter with a value and a basis: SpecTable.
- A list of documents, deliverables or things to send: DocList (or the closing `cta.include` checklist).
- A label with one line of text: OptionList or LinkGrid rows.

Eight rows or fewer per table, 25 words or fewer per cell (content budgets).
