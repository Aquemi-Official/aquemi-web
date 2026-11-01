RelatedLinks closes a page with the pages to read next as tiles hung off one pipe: each tile shows its index and section, a picture of the target page and its title with a `flow` arrow.

## Markup

```html
<ol class="aq-related-links" style="--n:4">
  <li><a class="aq-related-links__card" href="#sys-storage" data-wp="sys-storage">
    <span class="aq-related-links__n" aria-hidden="true">02</span>
    <span class="aq-related-links__group"><span aria-hidden="true">02 / </span>Systems</span>
    <span class="aq-related-links__vis is-art" aria-hidden="true"><span class="aq-illustration aq-related-links__art" style="mask-image:url(assets/illustrations/sys-storage.webp)"></span></span>
    <span class="aq-related-links__title">Storage and distribution loops<span class="aq-related-links__arrow" aria-hidden="true">→</span></span>
  </a></li>
</ol>
```

- Block `related` (`assets/src/blocks/related.js`): `items` are page ids. Title: the page's `nav_label`; label: its `section`.
- Picture (`aq-related-links__vis`, `aria-hidden`): the target page's equipment drawing from `ART` (Hero.js) when it has one (`is-art`, Illustration in `ink-muted`), else its page icon (`pageIcon`, core.js) drawn large as a Spot (`aq-related-links__spot`). Never both.
- The whole tile is the link; one per page, two to four per row.

## Layout (pass 9)

- **Desktop:** up to four tiles to a row (three for three, five or six; two for two), `space-6` apart. Above them one pipe runs the full width: twin 1 px `line-strong` walls `space-2` apart with a 1.5 px `flow` water line in the bore. Each tile hangs from it by a 1 px `line-strong` drop `space-8` in from its left edge, leaving the pipe at a 9 px node (`surface` fill, `line-strong` ring).
- Tile: `surface-raised`, 1 px `line`, `space-4` / `space-6` padding. Top row: the index (Geist Mono 13 `ink-subtle`) and the section label right (eyebrow, `ink-muted`); then the picture in a 4:3 window; then the title, Geist 400 24/30 `ink`, with a `flow` arrow (a real `aria-hidden` span). The `01 / ` prefix shows on phones only.
- Hover and focus: the tile's border, drop, node, picture and title turn `flow`, the picture lifts `space-1`, the arrow slides `space-2`; a press sets the title down 1 px. Focus is the 2 px `focus` ring.
- **Phones:** one column of rows `space-3` apart off a rail down the left (the same pipe turned upright), each row joined to it by a stub and node at its middle: label and title (19/26) at the left, the picture in a `space-16` square at the right.
- `--aq-pipe`, `--aq-water` (on the list) and `--aq-drop`, `--aq-node` (on each li), 0 to 1, let motion lay the pipe; all default to 1, so the page is complete without JS.

## Writing

- Two to four links, in the order a reader would most likely go next. No descriptions: the title, section and picture say enough.

## When not to use it

- Not for a list of every page in a section: use LinkGrid. Not for a physical sequence of systems: use WaterPath.

## Motion

`motion.js`: on scroll-in the pipe is laid along the top of the row (down the rail on phones); as it passes each tile the node seats, the drop runs down and the tile rises off it, its picture printing up from the bottom and the index, label and title following; then the water runs the pipe once end to end. Under 3 s, once; nothing under reduced motion.
