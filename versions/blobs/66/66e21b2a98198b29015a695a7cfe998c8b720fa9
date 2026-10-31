DocList shows the documents delivered with a system as a turnover binder: numbered folder cards in a binder frame, each folder tab carrying the short code a validation team files it under, with the deciding documents first and emphasized.

## Markup

```html
<ol class="aq-docs">
  <li class="is-key aq-docs__w">
    <span class="aq-docs__tab" aria-hidden="true"><span class="aq-index">01</span><span class="aq-docs__code">URS</span></span>
    <span class="aq-docs__card"><span class="aq-docs__name">User requirement specification (URS) compliance matrix<span class="aq-docs__d">Each requirement, how we meet it and where it is verified</span></span></span>
  </li>
  …
</ol>
```

- An ordered list, one `<li>` per document. The tab (number and code) is `aria-hidden`; screen readers get the list numbering and the full name.
- `aq-docs__name` holds the document name as QA would write it: "Material certificates (EN 10204 3.1)", "FAT and SAT protocols and reports". An optional `<span class="aq-docs__d">` inside it adds one line of detail. An item with `link` (a page id) makes the name a link.
- `is-key` marks a deciding document. `aq-docs__w` makes a card span half the row; `aq-docs__wf` does the same only while the list is folded. The renderer sets both so no row ends short.
- Add `aq-docs--plain` to the `<ol>` and leave out the code when the items are not documents with recognised codes (a proposal checklist, for example, or package sections). Tabs then show only the number.
- Every docs block renders this way (no opt-in): it sits on a light sheet, full width under the standard section head. The site renderer (`assets/src/blocks/docs.js`, block type `docs`) builds it from `{h, items, fold, fold_noun, key}`.

## Key documents

- Item `"key": true` marks the documents that decide the review. Without any marked item, the first `key` items of the block are key: default 2 in a coded list of five or more, `"key": 0` for none. Order the list so the deciding documents come first (the same rule as fold).
- When exactly the first two are key, they open the binder as a pair of half-width cards, provided the rest then fill rows of three or end in a pair; otherwise they stay in the three-up grid, still emphasized.

## Layout

- **Desktop:** a binder frame (`surface-sunken`, `line-strong` edge, a second sheet drawn offset behind its top-right corner) holding folder cards on a 6-column grid, three to a row. Each card: a tab on its top edge with the index and the code, then the name and detail on `surface-raised`, one sheet showing behind it. Rows that would end short widen to two cards: 12 items read 3, 3, 3, 3; 10 with a key pair read 2, 3, 3, 2. Folded lists are laid out for the cards that show (fold 6 reads 3, 3).
- **Phone** (container 860 px and below): no frame and no cards; a compact list, "01  FS  Functional specification", index and codes in aligned columns, a hairline between rows. Key documents keep their code in `flow` and the name in medium weight. Never a tall card per document on a phone.

## Codes

The renderer derives each code from the document name with a lookup of common validation documents (FS, URS, DQ, RA, P&ID, GA, ISO, MAT, WLD, WPS & PQR, SRF, PAS, CAL, FAT & SAT, IQ & OQ, PQ, O&M, SOP, SPR, TM, DEV, CC …). A name the lookup misses uses the acronym it gives in brackets, else the initials of its first three words. If fewer than half the items match the lookup, the list renders plain, numbers only. The lookup also covers loop and fabrication records: HMB (heat and mass balance), SB (steam balance), FIP (fabrication and inspection plan), DLR (dead leg register), SLP (slope survey or verification), SLP & DLR, RIB (riboflavin spray coverage), PAS (passivation), SMP (sampling plan), SVR (software version record), ASB (as-built drawings), CIA (change impact assessment), LFL, ASR, CSV and the CDMO audit pack (SD, CM, TRD, EXC, CL, DI).

- **New document types:** add them to `DOC_CODES` in `assets/src/blocks/docs.js`. Never reword a document's name to hit a known code; name it as the validation team does.
- **Explicit code:** an item may set `code` (`{"t": "Added by system", "code": "+"}`) when no lookup entry fits or the derived code would mislead. An explicit code counts as a recognised one. Use it sparingly; a lookup entry serves every page.

## Token rules

- Frame: `surface-sunken`, 1 px `line-strong`; the offset sheet is a hard-edged box-shadow in `surface` and `line-strong` (a drawn sheet, not elevation). Card: `surface-raised`, 1 px `line-strong`, `radius-sm`, an offset sheet in `line`. Spacing `space-*` only.
- Tab: the shared `.aq-index` and the code in Geist Mono 500 14/20 `ink` (Mono 14/22 on phones).
- Key: tab filled `flow` with `surface` text, card on `flow-tint` with a `flow` edge, name 500. `flow` is the section's only colour.
- Name: Geist (`--font-sans`) 15/22 px in `ink`, sentence case. Detail 14 px in `ink-muted`.

## When not to use it

- Not for test results or specifications with values: use SpecTable.
- Not for steps in sequence: use ProcessSteps; the numbers here are an index, not an order of work.
- Not for fewer than four items; write them in a sentence instead. Above twelve, split the package into groups with their own headings.
