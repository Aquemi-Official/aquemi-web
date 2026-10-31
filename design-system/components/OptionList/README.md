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

A list without icons (OptionList, and plain ProcessSteps rows) has a fixed 280 px title column (titles Geist 500 18/26) with the line straight after it, capped at `--text-max`, so short titles leave no gap. It keeps the open list: `line` hairlines between rows, the standard `aq-index`, no frame.

## Variant: decisions

With `"as": "decisions"` the items are choices the buyer settles (ind-pharma "Decide before your requirements (URS) are approved"). Each row: the index with a "?" beside it in Geist Mono `flow` (`.aq-options__q`, `.aq-options__qt`: a word, no frame), the decision, its line. A decision named as two options ("Hot loop or ambient", "Make media and buffers, or buy") gets a small `flow` fork mark in 1.5 px line art before its name (`svg.aq-options__fork`, `aria-hidden`). Item `by: "<stage>"` adds a "Decide by: <stage>" caption under the line (`.aq-options__by`, the eyebrow style: Geist Mono 500 12/16, 0.08em, uppercase, `ink-muted`); leave it out when the page does not say. Fold noun default "decisions".

- Link: an item may carry `link` (a page id or `page#anchor`) when another page holds the decision in full: `{"t": "Hot loop or ambient", "d": "…", "link": "sys-storage#sanitization"}`. The whole row becomes the link, as in every list of the shared row grammar (`<a class="aq-rows__row" href="#sys-storage#sanitization" data-wp="sys-storage#sanitization">`): the decision ends in a `flow` arrow and turns `flow` on hover, with a `focus` ring on focus. A link to a missing page leaves the row plain. Link a decision only where its line points to that page's rule (DR-013's rating sentence to sys-storage#sanitization); no intent.

## Variant: modules

With `"as": "modules"` on the options block the same items render as OptionModules: modules with a vignette, wired by dashed connectors to the page's own equipment drawing (the base skid). Use it on system pages where every option is a piece of equipment added to the skid, and give each item a `spot` (Spot name, or Icon name as the fallback). Control, software, commercial or service choices stay rows. See `OptionModules/README.md`.

## Writing

- Four to eight options. Names in sentence case; the line is one sentence of 25 words or fewer, with the number or standard that matters.

## When not to use it

- Page links: use LinkGrid. A genuine order: use ProcessSteps (the numbers here are labels, not an order). Values compared across systems: use SpecTable or CompareTable.

## Motion

`motion.js` (plain and decisions; modules is OptionModules'): rows fill in reading order, each hairline ruling across, the big index decoding digit by digit, the option then its line. Decisions: the fork mark draws from its stem out to both branches and the framed "?" strikes last like a stamp; "Decide by" fades in. Folded rows are left alone.
