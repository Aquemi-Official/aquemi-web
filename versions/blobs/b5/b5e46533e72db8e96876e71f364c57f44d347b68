OptionModules draws a system's equipment options as framed modules around the page's own equipment drawing (the base skid), each wired to it by a dashed hairline; it is the `as: "modules"` shape of the options block (OptionList).

## What it draws

- Desktop, on the navy ground: three columns. The middle one is a Plate (`wPlate`, `.aq-option-modules__base`) holding the page's Illustration (`artMask(id)`, painted `on-navy-muted`) with a mono caption: "Base skid" and the page's nav label. The first half of the options stand in a column to its left, the rest to its right.
- Each module (`.aq-option-modules__m`): an optional category label above (`.aq-option-modules__cat`, mono 11 px uppercase, `ink-muted`), then a box framed in `line-strong`: a title bar (`.aq-option-modules__t`, the h3: mono 12 px uppercase, `ink`, with a decorative `[+]` in `flow`), the vignette at left in a fixed 96 px slot (Spot `s` at 96 px, or an Icon at 64 px, both through `wSpot`, painted `on-navy-muted`) and the description in sans 14/22 `ink-muted`.
- Connectors (`.aq-option-modules__wire`, inline SVG, `aria-hidden`): a dashed `line-strong` hairline from the title bar across the column gap to the plate edge, ending in a `flow` node.
- Phones: the plate first, the drawing at 96 px beside its caption; then one column of modules hanging off one dashed vertical spine (the lists' left border), each joined to it by a short dashed stub with its node on the spine. Vignettes step down to 64 px (spots) and 48 px (icons) and the description to 13/20, which keeps the section within +40 % of the folded row list.
- Fold: `fold` works on phones only. On desktop every module stays on the drawing and the "Show all" button is hidden, because the two columns need all of them. Fold at 3 keeps the phone section short; 6 is the upper limit.

## Markup

```html
<div class="aq-options aq-option-modules">
  <ol class="aq-option-modules__list aq-option-modules__list--l">
    <li class="aq-option-modules__m aq-option-modules__m--l"><div class="aq-option-modules__box">
      <h3 class="aq-option-modules__t"><span>Duplex trains</span><span class="aq-option-modules__plus" aria-hidden="true">[+]</span></h3>
      <span class="aq-spot aq-spot--s aq-spot--on-navy aq-option-modules__vig" aria-hidden="true" style="mask-image:url(assets/spots/ro-skid.png)"></span>
      <p class="aq-option-modules__d">Two trains at 50 or 100 % of demand each …</p>
      <svg class="aq-option-modules__wire" aria-hidden="true"><line x1="0" y1="50%" x2="100%" y2="50%"/><circle cx="100%" cy="50%" r="2.5"/></svg>
    </div></li>
  </ol>
  <div class="aq-plate aq-option-modules__base"><figure class="aq-option-modules__fig"><span class="aq-illustration aq-option-modules__art" role="img" aria-label="…" style="mask-image:url(assets/illustrations/sys-pw.png)"></span><figcaption class="aq-option-modules__label"><span>Base skid</span><span>Purified Water (PW) generation</span></figcaption></figure></div>
  <ol class="aq-option-modules__list aq-option-modules__list--r" start="4">…</ol>
</div>
```

On the site, `assets/src/blocks/options.js` writes it for an options block with `"as": "modules"`.

## Data (page JSON, options block)

- Block: `as: "modules"`; `art` (page id of the drawing, default the current page; with no drawing in `ART` the plate is left out and the modules sit in two columns); `base` (caption, default "Base skid"); `fold`, `fold_noun` as for OptionList.
- Item: `t` (name), `d` (one sentence), `spot` (a Spot name, or an Icon name as the fallback; `icon` is read too), `tag` (optional category label above the box; leave it out rather than invent one).

## When not to use it

- Options that are not equipment (control platforms, commercial terms, service levels): use the plain OptionList rows.
- Fewer than four options, or a page with no equipment drawing: plain OptionList.
- More than eight: the columns grow taller than the drawing; use OptionList.

- Block field `spot`: draw a Spot vignette as the base instead of the page drawing. Use it when the hero and ParameterCallouts already show the page drawing, so the same drawing does not appear three times.

## Motion

Motion (`motion.js`): the base skid comes first (its plate unrolls, the drawing prints in, the label follows); then every wire runs out from the skid: the node lights on the plate edge, the dashed line extends, and the module it reaches opens away from the skid, its drawing and line following. Left and right columns alternate down the drawing. On the phone the same runs down the spine. About 3 s, once.
