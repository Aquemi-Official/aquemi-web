HirePath sets the steps into a role as one path walked left to right: a single track across the section, each step standing on it as a huge light numeral with its name and line under it, and the exercises a step tests drawn as a row of line icons.

- On the site: Careers, "How we hire" (`steps` block, `"look": "hire-path"`; renderer `assets/src/blocks/look-hire-path.js`). Origin: the kinetic outline type of `83-p9-services-0` (huge light outline figures) and the one continuous route of `16-concept-steps`, flattened to a level path.
- Markup: `div.aq-hire-path` (`--n`) → `span.__track` (aria-hidden, with `span.__water` and an end chevron) and `ol.__steps` of `li.__step` → `span.__gate` (aria-hidden `span.__num` numeral, `span.__node` on the track), `h3.__t`, `p.__d`, `p.__icons` (aria-hidden `span.__ic` with an Icon).
- Fields (a `steps` block): `h`, `intro`, `items [{t, d, icons}]`. `icons`: Icon names drawn under the step in the order its text names them (Careers: the practical interview's `pid`, `weld`, `binder`, `wrench` for "P&ID review, test joint, protocol walk-through or fault-finding exercise"). Best for 3 to 5 steps.
- Tokens: numerals Geist Light at 168 px in a pale `ink` fill (13 %; a solid fill because Geist's overlapping contours show through a text stroke), half `flow` on hover or as the water passes; `flow` node squares and water at rest (the path is walked), `line-strong` track, `surface-raised` icon tiles with `line` borders.
- Phones: the track runs down the left edge; numerals at 72 px beside their nodes.

## Motion

Motion: the track draws from the left, then the water runs along it; as it reaches each step that step's node fills and stays filled, its numeral tints for a beat, the numeral rises into place and the name and line follow; the exercise icons drop in one by one. The water stays on the track (the settled state matches the static page: track walked, nodes filled). Once, under 4 s; nothing under reduced motion.
