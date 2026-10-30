LinkGrid sets out a list of choices (services, industries, systems, upgrade types) as rows of the shared list grammar: index, title with an arrow when it links, one line, an optional standard tag, and the linked page's drawing small at the row end on desktop.

## Markup

```html
<ol class="aq-rows aq-linkgrid">
  <li><a class="aq-rows__row" href="#svc-design" data-wp="svc-design">
    <span class="aq-index" aria-hidden="true">01</span>
    <h3 class="aq-rows__t">Process design and engineering</h3>
    <p class="aq-rows__d">URS review, sizing from your demand profile, P&amp;IDs and functional specification.<span class="aq-tags"><span class="aq-tag">ISPE Vol. 4</span></span></p>
    <span class="aq-illustration aq-rows__art" aria-hidden="true" style="mask-image:url(assets/illustrations/svc-design.png)"></span>
  </a></li>
</ol>
```

- Block `grid` (`assets/src/blocks/grid.js`): `h` and `intro` go in the standard section head; `items` are `{t, d, link, tag}`.
- A linked item is one `<a class="aq-rows__row">`: the title carries a `flow` arrow and turns `flow` on hover, and so does the drawing. Without a link the row is a `<div>`.
- Drawings appear only when the linked page has one in `ART` (`parts/Hero.js`), `space-12` wide on desktop. Phones never show them.
- Concept 33: the rows are stations on one route. No hairlines; a 2 px `ink` spine runs between the index column and the titles and ends in an arrowhead; each row has a `flow` node on the spine at its title. Numbers in Geist Mono 300 28/32 `flow` (20/28 on phones), titles in `font-display` 600 26/32 caps (22/28). An item icon (`icon`) replaces the number as in the row grammar. Spine, nodes and arrowhead are CSS only.

## Writing

- One sentence per item, 25 words or fewer, with a number or a standard where possible. Titles in sentence case.
- For a genuine sequence use ProcessSteps; for the physical path of water use WaterPath; for "where next" at the end of a page use RelatedLinks.
