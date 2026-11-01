DocPipe sets a short document list along one double-line pipe that snakes across a navy band: the route is the list, each document sits in its own bend with a valve on its run.

- On the site: a `docs` block with `"look": "doc-pipe"` (renderer `assets/src/blocks/look-doc-pipe.js`), sys-pretreatment "Documents delivered". Origin: pass 9b concept `research/pass9b/concepts/sys-pretreatment.4.png` (a wide low band: the pipe route is the list; each document sits in a bend). It replaced the pass 9 look `sheet-previews`.
- Markup: `section.aq-band--navy.aq-doc-pipe-sec[data-theme="dark"]` > `div.__top` (section head at display scale, `p.__more` the block link) and (`div.aq-fold` when folded) `ol.aq-doc-pipe` (one column per document) of `li.__item.is-lo|is-hi[.is-key]`: `svg.__pipe` (the column's pipe piece in a 300 × 380 box stretched to the column: `path.__wall`, `path.__bore`, `path.__flow`, an end cap on the last), `span.__valve` (bowtie and stem, aria-hidden), `div.__txt` (`span.__num`, `h3.__t`, `p.__d`, `p.__code`).
- Fields: `h`, `intro`, `items [{t, d, code, key, link, intent, tag}]`, `key` (the first n are deciding documents: their code turns `flow`, DocList's rule), `fold`, `fold_noun`, `link`, `link_label`, `intent`. Codes come from `code` or `docCode(name)` as in DocList.
- The pipe alternates: low under the first document, high over the second, and so on; each column's riser sits at its left, so the pipe reflows with the grid. Strokes do not scale (`vector-effect`), the water line does (its scroll fill is measured in the piece's units).
- Tokens: `navy` band, pipe wall `on-navy-muted` with a `navy` bore (a double line), water `flow`, valves `on-navy`; numbers Geist Mono 32 px, names Geist Light 22 px.
- Phones: the pipe runs down the left as a vertical double line with the water in it, a valve beside each document; the documents stack.
- Use it for three to five documents delivered in sequence. For long registers use DocList or SheetStack.

## Motion

Motion: the pipe is laid column by column (wall and bore draw on, valves set down, documents rise), once, under 2 s. Then the page's one scroll-linked story, ported from Subframe Motion "Scroll text reveal" (poem-scroll): as the band passes through the viewport the water runs along the pipe from the first document to the last, each valve's handle turns open as the water reaches it, and each document's number and code come up from half strength (names and lines stay at full strength). Scrolling back runs it back; it never pins. Reduced motion: nothing runs, the water line is drawn in full.
