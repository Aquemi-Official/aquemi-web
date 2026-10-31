LinkGrid sets out a list of choices (services, industries, systems, upgrade types, documents) as numbered items in two staggered columns, joined by one thin routed line that snakes from each item into the next.

Origin: concept Q in design-system/inspiration/ (`concept-q-grid.png`), rebuilt with Aquemi tokens for light and dark themes.

## Markup

```html
<ol class="aq-linkgrid">
  <li><a class="aq-linkgrid__item" href="#svc-design" data-wp="svc-design">
    <div class="aq-linkgrid__head">
      <h3 class="aq-h3 aq-linkgrid__t">Process design and engineering</h3>
      <span class="aq-illustration aq-linkgrid__art" aria-hidden="true" style="mask-image:url(assets/illustrations/svc-design.png)"></span> <!-- optional -->
    </div>
    <p class="aq-small aq-linkgrid__d">URS review, sizing from your demand profile, P&amp;IDs and functional specification.</p> <!-- optional -->
    <span class="aq-tags"><span class="aq-tag">ISPE Vol. 4</span></span> <!-- optional -->
  </a></li>
  <li><div class="aq-linkgrid__item">…</div></li> <!-- an item that does not link -->
</ol>
```

- An ordered list. Each item's content sits in one `.aq-linkgrid__item`: an `<a>` when the item links (the whole item is the hit area and the focus target), a `<div>` when it does not.
- Numbers (`01 /`) come from a CSS counter with empty alt text, so screen readers don't repeat what the list announces. Never write them in the markup.
- The title is an `h3` under the block's `h2`. Linked titles end in a Flow arrow (CSS, bound with a no-break space); items that don't link show none, so the arrow tells readers what is clickable.
- The drawing is optional and only for items that link to a page with an equipment drawing (the `ART` list in `assets/src/parts/Hero.js`, inline mask via `artMask(id)`). It is decorative (`aria-hidden`). Never draw an icon for an item without one.
- The route, arrowheads, leaders and corner crosshairs are pure CSS on the list and its items: no extra elements, no SVG, no JavaScript.
- On the site: block type `grid` with optional `intro` and `items` (`t`, `d`, optional `tag`, optional `link` page id), rendered by `assets/src/blocks/grid.js`.

## Layout

- **Desktop:** odd items in the left column, even items in the right, one item per row, so every row steps across. Each title row carries a leader to the item's edge. From a left item the route drops through the middle of the `space-16` gutter into the next item's arrowhead; from a right item it runs out to the right lane, back across the row gap and down the left lane into the next arrowhead. The first item starts from a node; the last ends at a stop bar. Crosshairs mark the frame's four corners.
- **Phone** (`@container (max-width: 860px)`): one column. A vertical rule runs down the left and ends in an arrowhead; numbers (without the slash) sit left of it; leaders and the route are hidden. Nothing overflows at 375 px.
- Works from two items to nine: a long list grows downwards one row per item; a short one is a single step across.

## Token rules

- Route, leaders, arrowheads, node, stop bar, crosshairs and the phone rule: 1 px `line-strong`. Never colour the route `flow` at rest.
- Number: Geist Mono 300, 24/32 px (18/30 px on phones), `flow`. Title `aq-h3` in `ink`; description `aq-small` in `ink-muted`, within `text-max`. Drawing 48 px (32 px on phones) in `ink-muted`.
- No fills, cards, shadows or radii on items: the line is the structure.
- Hover and focus on a linked item: title, leader, its arrowhead and drawing turn `flow`; focus adds a 2 px `focus` ring with `space-1` offset. With reduced motion the colour changes are instant.

## Writing

- One sentence per description, with a number or a standard in it where possible. Titles in sentence case.
- For a genuine sequence use ProcessSteps; for the physical path of water use WaterPath; for "where next" at the end of a page use RelatedLinks.
