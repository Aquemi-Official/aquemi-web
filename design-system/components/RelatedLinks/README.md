RelatedLinks closes a page with the pages to read next as cards hung from a drawn pipe: a large number, a thumbnail of the target page, its section and its title in condensed capitals.

## Markup

```html
<ol class="aq-related-links" style="--n:4">
  <li><a class="aq-related-links__card" href="#sys-storage" data-wp="sys-storage">
    <span class="aq-related-links__n" aria-hidden="true">01</span>
    <span class="aq-spot aq-related-links__thumb" aria-hidden="true" style="mask-image:url(assets/spots/storage-tank.png)"></span>
    <span class="aq-related-links__group"><span aria-hidden="true">01 / </span>Systems</span>
    <span class="aq-related-links__title">Storage and distribution loops</span>
  </a></li>
</ol>
```

- Block `related` (`assets/src/blocks/related.js`): `items` are page ids. Title: the page's `nav_label`; label: its `section`.
- Thumbnail: the target page's Spot (`REL_SPOT`, system pages), else its equipment drawing (`ART`, class `aq-related-links__art`), else a fitting Icon (`REL_ICON`, class `aq-related-links__icon`), else none. All `aria-hidden`, `ink-muted`, `flow` on hover.
- **Desktop (concept 17):** four to a row (three for three, five or six pages; two for two). A double `line-strong` hairline (the pipe) runs along the top of each row; every card hangs from it by a drop line ending in a `flow` node, every second card lower, so the row reads as a route. Card: number in Geist Mono 300 44 px `flow`, thumbnail top right (`space-24`; icons `space-16`), the section in 12 px mono caps, the title in `font-display` 600 36/34 caps with a `flow` arrow. The `01 /` prefix on the label shows on phones only.
- **Phones:** one 2 px `line-strong` spine down the left with a `flow` node and a short connector per card; label, title (26/26) and the thumbnail (`space-12`) at the right.

## Writing

- Two to four links, in the order a reader would most likely go next. No descriptions: the title and section say enough.

## When not to use it

- Not for a list of every page in a section: use LinkGrid. Not for a physical sequence of systems: use WaterPath.
