RelatedLinks closes a page with the pages to read next as hairline-topped links: an index, a thumbnail of the target page, its section as an eyebrow and its title with a `flow` arrow.

## Markup

```html
<ol class="aq-related-links" style="--n:4">
  <li><a class="aq-related-links__card" href="#sys-storage" data-wp="sys-storage">
    <span class="aq-related-links__n" aria-hidden="true">01</span>
    <span class="aq-spot aq-related-links__thumb" aria-hidden="true" style="mask-image:url(assets/icons/tank.svg)"></span>
    <span class="aq-related-links__group"><span aria-hidden="true">01 / </span>Systems</span>
    <span class="aq-related-links__title">Storage and distribution loops</span>
  </a></li>
</ol>
```

- Block `related` (`assets/src/blocks/related.js`): `items` are page ids. Title: the page's `nav_label`; label: its `section`.
- Thumbnail: the target page's Spot (`REL_SPOT`, system pages), else its equipment drawing (`ART`, class `aq-related-links__art`), else a fitting Icon (`REL_ICON`, class `aq-related-links__icon`), else none. All `aria-hidden`, `ink-muted`, `flow` on hover.
- **Desktop:** four to a row (three for three, five or six pages; two for two), each card under a 1 px `line` hairline. Card: the index (Geist Mono 13/24 `ink-subtle`) with the thumbnail top right (`space-24`; icons `space-16`), the section in the eyebrow style (Geist Mono 500 12/16, 0.08em, uppercase, `ink-muted`) and the title in Geist 400 24/32 `ink`, sentence case, with a `flow` arrow. The `01 / ` prefix on the label shows on phones only.
- **Phones:** one column of rows between `line` hairlines; label and title (20/28) at the left, the thumbnail (`space-12`) at the right.
- No pipe, spine, nodes, staggering or large numerals. Hover turns the title and thumbnail `flow`; focus is the 2 px `focus` ring.

## Writing

- Two to four links, in the order a reader would most likely go next. No descriptions: the title and section say enough.

## When not to use it

- Not for a list of every page in a section: use LinkGrid. Not for a physical sequence of systems: use WaterPath.

## Motion

<span class="aq-related-links__title">Storage and distribution loops<span class="aq-related-links__arrow" aria-hidden="true">→</span></span>
- **Desktop (concept 17):** four to a row (three for three, five or six pages; two for two). A double `line-strong` hairline (the pipe) runs along the top of each row; every card hangs from it by a drop line ending in a `flow` node, every second card lower, so the row reads as a route. Card: number in Geist Mono 300 44 px `flow`, thumbnail top right (`space-24`; icons `space-16`), the section in 12 px mono caps, the title in `font-display` 600 36/34 caps with a `flow` arrow (a real `aria-hidden` span, so it can move). The `01 /` prefix on the label shows on phones only.
## Motion

`motion.js`: the route is laid, then each stop opens. Desktop: the pipe runs out card by card (`--aq-pipe` on each `li::before`); at each card the drop line falls (`--aq-drop`), the node pops (`--aq-node`) and the number, thumbnail, label and title rise off it. Phones: the spine draws down (`--aq-spine`) and each connector, node and card follow. All variables default to 1, so the page is complete without JS. Hover and focus (CSS): the arrow (`aq-related-links__arrow`, a real span) nudges one step along, the thumbnail lifts and turns flow, the node rings; a press sets the title down 1 px.
