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

## Variant: modules

With `"as": "modules"` on the options block the same items render as OptionModules: framed modules with a vignette, wired by dashed connectors to the page's own equipment drawing (the base skid). Use it on system pages where every option is a piece of equipment added to the skid, and give each item a `spot` (Spot name, or Icon name as the fallback). Control, software, commercial or service choices stay rows. See `OptionModules/README.md`.

## Writing

- Four to eight options. Names in sentence case; the line is one sentence of 25 words or fewer, with the number or standard that matters.

## When not to use it

- Page links: use LinkGrid. A genuine order: use ProcessSteps (the numbers here are labels, not an order). Values compared across systems: use SpecTable or CompareTable.
