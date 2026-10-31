LinkGrid sets out a list of choices (services, industries, systems, upgrade types) as rows of the shared list grammar: index, title with an arrow when it links, one line, an optional standard tag, and the linked page's icon at the row end on desktop.

## Markup

```html
<ol class="aq-rows aq-linkgrid">
  <li><a class="aq-rows__row" href="#svc-design" data-wp="svc-design">
    <span class="aq-index" aria-hidden="true">01</span>
    <h3 class="aq-rows__t">Process design and engineering</h3>
    <p class="aq-rows__d">URS review, sizing from your demand profile, P&amp;IDs and functional specification.<span class="aq-tags"><span class="aq-tag">ISPE Vol. 4</span></span></p>
    <span class="aq-icon aq-rows__art" aria-hidden="true" style="mask-image:url(assets/icons/pid.svg)"></span>
  </a></li>
</ol>
```

- Block `grid` (`assets/src/blocks/grid.js`): `h` and `intro` go in the standard section head; `items` are `{t, d, link, tag}`.
- A linked item is one `<a class="aq-rows__row">`: the title carries a `flow` arrow and turns `flow` on hover, and so does the icon. Without a link the row is a `<div>`.
- The row-end icon is the linked page's icon (`PAGE_ICON` in `core.js`, looked up by `pageIcon`), 24 px in `ink-muted`, top-aligned with the title, on desktop only. A `page#anchor` link (`systems#budget`) shows its page's icon, like a plain page link.
- Rows of the `.aq-rows` grammar with `line` hairlines between them, nothing else: index (`aq-index`, mono 13 `ink-subtle`), title in Geist 500 20/28 `ink` (18/26 on phones), the line in 15/24 `ink-muted`. An item icon (`icon`) replaces the number as in the row grammar.

## Writing

- One sentence per item, 25 words or fewer, with a number or a standard where possible. Titles in sentence case.
- For a genuine sequence use ProcessSteps; for the physical path of water use WaterPath; for "where next" at the end of a page use RelatedLinks.

## Motion

Motion (`motion.js`): the route is walked. The spine draws down (`--aq-spine`); as it reaches each row the row's node snaps on (`--aq-node`), the number decodes, the icon frame or drawing wipes in and the title and line rise; the arrowhead lands as the spine ends (`--aq-head`). Under 3 s. Hover swells the node and steps the arrow forward. Icon rows on desktop frame the icon in a 48 px square (the stage strip's frame), ink, with `space-6` row padding.
