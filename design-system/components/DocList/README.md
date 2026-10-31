DocList shows the documents delivered with a system as a turnover binder: numbered folder cards on a drawing plate with paper stacked behind, each folder tab carrying the short code a validation team files it under, with the deciding documents first and emphasized.

## Markup

```html
<div class="aq-docs-binder"><div class="aq-plate aq-plate--block aq-docs-plate">
  <ol class="aq-docs">
    <li class="is-key aq-docs__w">
      <span class="aq-docs__tab" aria-hidden="true"><span class="aq-docs__code">URS</span></span>
      <span class="aq-docs__card">
        <span class="aq-docs__top" aria-hidden="true"><span class="aq-docs__n">01</span><span class="aq-icon aq-icon--flow" style="mask-image:url(assets/icons/stamp.png)"></span></span>
        <span class="aq-docs__name">User requirement specification (URS) compliance matrix<span class="aq-docs__d">Each requirement, how we meet it and where it is verified</span></span>
        <span class="aq-docs__foot" aria-hidden="true"><span>Key document</span><span>01 of 10</span></span>
      </span>
    </li>
    …
  </ol>
  <div class="aq-plate__block" aria-hidden="true"><span>Aquemi</span><span>10 documents</span></div>
</div></div>
```

- The binder is a drawing plate (`wPlate`, base.css `.aq-plate`) on `surface-sunken`, inside `aq-docs-binder`, which draws two loose sheets stacked behind its top-right corner. The title block reads Aquemi, the block's `nav` (when it differs from the noun) and the count, "12 sections".
- An ordered list, one `<li>` per document, each a folder: the tab (the document code), the big number and icon (`aq-docs__top`), the name, and a footer rule with a caption ("Key document", "03 of 10"). Tab, number, icon and footer are `aria-hidden`; screen readers get the list numbering and the full name.
- `aq-docs__name` holds the document name as QA would write it, in sentence case in the source; CSS sets it in uppercase mono. An optional `<span class="aq-docs__d">` inside it adds the detail in sans, smaller, under the title. An item with `link` (a page id) makes the name a link.
- Icon: from the name (`DOC_ICONS` in the renderer: borescope, weld, pid for drawings, gauge for calibration and pressure, wrench for maintenance and spares, calendar for plans, stamp for certificates and statements, magnifier for reviews and inspections, binder for indexes, registers, manuals and logs), only where the drawing says what the document is; others get none. An item's `icon` field wins; `"icon": "none"` removes it.
- Tab: the derived code, or an item's `tag` when the data has a category. Plain lists (`aq-docs--plain`, items that are not documents with recognised codes) keep an empty tab: the folder shape alone.
- `is-key` marks a deciding document. `aq-docs__w` makes a card span half the row; the renderer sets it so no row ends short.
- Every docs block renders this way (no opt-in), full width under the standard section head. The site renderer (`assets/src/blocks/docs.js`, block type `docs`) builds it from `{h, nav, items, fold, fold_noun, key}`; items `{t, d, code, tag, icon, key, link}`. `fold` works on phones only (as in OptionModules): on desktop the whole binder shows and the "Show all" button is hidden; on phones the first `fold` folders show and the button sits under the plate.

## Key documents

- Item `"key": true` marks the documents that decide the review. Without any marked item, the first `key` items of the block are key: default 2 in a coded list of five or more, `"key": 0` for none. Order the list so the deciding documents come first (the same rule as fold).
- When exactly the first two are key, they open the binder as a pair of half-width cards, provided the rest then fill rows of three or end in a pair; otherwise they stay in the three-up grid, still emphasized.

## Layout

- **Desktop:** folder cards on a 6-column grid, three to a row, on the plate. Each folder: tab on its top edge, number in Mono 32/36 with a 32 px line icon top right, name in Mono 500 16/22 uppercase, detail in Geist 14/20 `ink-muted`, then a footer rule with an 11 px mono caption. Two sheets show behind each folder. Rows that would end short widen to two cards: 12 items read 3, 3, 3, 3; 10 with a key pair read 2, 3, 3, 2.
- **Phone** (container 860 px and below): still a binder. A smaller plate with tighter sheets, folders one to a row, compact: tab, the number (Mono 24) beside the name (Mono 14/20 uppercase) with the detail under it. Icon and footer caption drop. Key folders keep their flow tab and tint.

## Codes

The renderer derives each code from the document name with a lookup of common validation documents (FS, URS, DQ, RA, P&ID, GA, ISO, MAT, WLD, WPS & PQR, SRF, PAS, CAL, FAT & SAT, IQ & OQ, PQ, O&M, SOP, SPR, TM, DEV, CC …). A name the lookup misses uses the acronym it gives in brackets, else the initials of its first three words. If fewer than half the items match the lookup, the list renders plain, numbers only. The lookup also covers loop and fabrication records: HMB (heat and mass balance), SB (steam balance), FIP (fabrication and inspection plan), DLR (dead leg register), SLP (slope survey or verification), SLP & DLR, RIB (riboflavin spray coverage), PAS (passivation), SMP (sampling plan), SVR (software version record), ASB (as-built drawings), CIA (change impact assessment), LFL, ASR, CSV and the CDMO audit pack (SD, CM, TRD, EXC, CL, DI).

- **New document types:** add them to `DOC_CODES` in `assets/src/blocks/docs.js`. Never reword a document's name to hit a known code; name it as the validation team does.
- **Explicit code:** an item may set `code` (`{"t": "Added by system", "code": "+"}`) when no lookup entry fits or the derived code would mislead. An explicit code counts as a recognised one. A code with no letter or digit (`"+"`) draws an open tab (`is-open`: dashed, empty) so it never reads as a missing label. Use it sparingly; a lookup entry serves every page.

## Token rules

- Plate: `.aq-plate` (unchanged) on `surface-sunken`; stacked sheets are hard-edged box-shadows in `surface-raised` with `line-strong` and `line` edges (drawn paper, not elevation).
- Folder: `surface-raised`, 1 px `line-strong`, `radius-sm`, two offset sheets. Tab: `radius-md` top corners, code in Mono 500 12/16 uppercase `ink`. Footer: 1 px `line` rule, Mono 500 11/16 uppercase `ink-subtle`. Icon `ink-muted` (`flow` on key folders). Spacing `space-*` only.
- Key: tab filled `flow` with `surface` text, folder on `flow-tint` with a `flow` edge, number in `flow`, footer rule in `flow`. `flow` is the section's only colour.

## Motion

`motion.js`: the binder is filled. The plate unrolls, the folders slide down into it one by one in index order (a slight tilt that settles, ease `aq-settle`), each tab rises out of its folder's top edge just after it lands, and the title block is stamped last. One timeline on desktop (about 1.8 s for 12 folders); on phones the folders in view land first and the rest as they scroll in, and the folders "Show all" reveals slide in the same way. A folder whose name is a link lifts one step on hover. Nothing runs under reduced motion.

## When not to use it

- Not for test results or specifications with values: use SpecTable.
- Not for steps in sequence: use ProcessSteps; the numbers here are an index, not an order of work.
- Not for fewer than four items; write them in a sentence instead. Above twelve, split the package into groups with their own headings.
