WasherTrace tells an explainer as the water's way into a machine: the page's equipment drawing stays pinned on a navy band while the points scroll past, each point a numbered hotspot on the drawing, the water route filling hotspot to hotspot as you read.

- On the site: a `prose` block with `"as": "explainer"` and `"look": "washer-trace"` (renderer `assets/src/blocks/look-washer-trace.js`); used on ind-meddevice ("Where rinse water reaches the device"). Origin: no concept of its own (quota); adapted from compliance.3 (sticky drawing beside a card rail) and sys-pw.3 (hotspots on the equipment).
- Markup: navy band → `div.aq-washer-trace` → `div.__stage` (sticky; `div.__fig` with the Illustration mask painted `limestone`, `svg.__route` (`path.__pipe`, `path.__water` with `data-stops`), `span.__hot` per point; `p.__cap` title block) and `ol.__steps` of `li.__step` (`span.__n` Geist Light 64, `h3.__t`, `p.__d`).
- Fields: `h`, `intro`, `figure` {kind: "art", art, ratio [w, h] (default [740, 813])}, `points` [{t, d, at: [x, y] in % of the drawing}]. The route runs as piping between hotspots in point order (vertical, then across).
- Desktop with motion: steps not yet reached are dimmed, the current one gets a `limestone` rule and its hotspot fills. Without script, under reduced motion and on phones everything shows.
- Phones: the drawing on top (not sticky), points as a numbered run under it.

## Motion

On scroll-in the frame wipes down, the drawing prints up, the route's pipe lays and the hotspots pop. Then on desktop the story follows the reader: as each point passes the middle of the screen its hotspot lights and the water runs along the route up to it (scrolling back steps it back; leaving the section shows the whole route). Each step tween is under 1 s; nothing loops; nothing under reduced motion.
