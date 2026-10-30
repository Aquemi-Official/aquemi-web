OptionList shows the configuration choices for a system as rows of the shared list grammar: index, option name and one line on what it does.

## Markup

```html
<ol class="aq-rows aq-options">
  <li><div class="aq-rows__row"><span class="aq-index" aria-hidden="true">01</span><h3 class="aq-rows__t">Hot water sanitizable softener</h3><p class="aq-rows__d">Regenerated on measured hardness breakthrough rather than a fixed volume.</p></div></li>
  …
</ol>
```

- Layout comes from `.aq-rows` in `base.css`: on desktop `index | option | line` on one row; on phones `index | option` with the line below. `line` hairlines between rows.
- Site renderer: `assets/src/blocks/options.js` (rows from `wRow` in `core.js`), in a full-width section with the standard section head.
- No boxes, no grid ground, no toggle or switch glyph in the row shape: an option is a row, not a control.

## Plain rows

A list without icons (OptionList, and plain ProcessSteps rows) has a fixed 280 px title column (titles 18/26) with the line straight after it, capped at `--text-max`, so short titles leave no gap. It sits in a 1 px `line-strong` frame with `space-6` inner padding, and its index grows to a big light mono number (Mono 300 32/36 `flow`, 24/28 on phones), so a list with no pictures still reads as a drawn schedule. Rows with icons keep the open list.

## Variant: decisions

With `"as": "decisions"` the items are choices the buyer settles (ind-biotech "Decide these before the URS"). Each row: the big number with a small framed "?" tag under it (`.aq-options__q`, `.aq-options__qt`, `flow`), the decision, its line. A decision named as two options ("Hot loop or ambient", "Make media and buffers, or buy") gets a small `flow` fork mark before its name (`svg.aq-options__fork`, `aria-hidden`). Item `by: "<stage>"` adds a "Decide by: <stage>" caption under the line (`.aq-options__by`, mono caps 11 px `ink-subtle`); leave it out when the page does not say. Fold noun default "decisions".

## Variant: modules

With `"as": "modules"` on the options block the same items render as OptionModules: framed modules with a vignette, wired by dashed connectors to the page's own equipment drawing (the base skid). Use it on system pages where every option is a piece of equipment added to the skid, and give each item a `spot` (Spot name, or Icon name as the fallback). Control, software, commercial or service choices stay rows. See `OptionModules/README.md`.

## Writing

- Four to eight options. Names in sentence case; the line is one sentence of 25 words or fewer, with the number or standard that matters.

## When not to use it

- Page links: use LinkGrid. A genuine order: use ProcessSteps (the numbers here are labels, not an order). Values compared across systems: use SpecTable or CompareTable.
