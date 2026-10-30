RelatedLinks closes a page with the three to six pages to read next: on desktop, hairline-topped columns with the index, the page's drawing, its section label and title; on phones, compact rows of the shared list grammar.

## Markup

```html
<ol class="aq-related-links">
  <li><a class="aq-related-links__card" href="#sys-storage" data-wp="sys-storage">
    <span class="aq-index" aria-hidden="true">01</span>
    <span class="aq-related-links__title">Storage and distribution loops</span>
    <span class="aq-related-links__group">Systems</span>
    <span class="aq-illustration aq-related-links__art" aria-hidden="true" style="mask-image:url(assets/illustrations/sys-storage.png)"></span>
  </a></li>
</ol>
```

- Block `related` (`assets/src/blocks/related.js`): `items` are page ids. The title is the page's `nav_label`, the label its `section`; the drawing comes from `ART` when the page has one.
- **Desktop:** three to a row (four for 4, 7 or 8 pages). Each item has a `line-strong` top rule that turns `flow` on hover; index top left, drawing top right (`space-16`), mono section label, title with a `flow` arrow.
- **Phones:** one row per page, `index | title` with the section label below; no drawings and no ghost numerals. About 64 px per row.

## Writing

- Three to six links, in the order a reader would most likely go next. No descriptions: the title and section say enough.

## When not to use it

- Not for a list of every page in a section: use LinkGrid. Not for a physical sequence of systems: use WaterPath.
