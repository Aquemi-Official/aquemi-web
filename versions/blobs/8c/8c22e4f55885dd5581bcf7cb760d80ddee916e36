LoopDock shows a loop's options where they fit on the loop: one isometric storage and distribution loop on a limestone band, a numbered marker on the part each option adds, the options as cards beside it.

- On the site: an `options` block with `"look": "loop-dock"` (renderer `assets/src/blocks/look-loop-dock.js`), sys-storage "Options". Origin: no concept of its own; adapted from `research/pass9/concepts/industries.3.png` (one machine, a callout per part) with the loop as the machine.
- Markup: `div.aq-loop-dock` (drawing two thirds, cards one third) > `div.__stage` (`div.__plane` aria-hidden: `svg.aq-iso.aq-iso--limestone` and `span.__mk[data-c]` markers; `span.__base` base label), `ol.__cards` of `li.__card[data-c][data-parts]` (`div.__body` or `a.__body` with `p.__no` number and glyph, `h3.__t`, `p.__d`).
- Fields: `h`, `intro`, `items [{t, d, spot | icon, part, link}]`, `spot` (base glyph), `base` (default "Base skid"), `fold`, `fold_noun`. `part`: an array of drawing ids the option adds: `uv`, `cool`, `mod` (default by position: `uv`; `cool`; `mod` and `uv`). The marker sits on the first id.
- Drawing: IsoKit parts only (tank, skid, pump, hx, analyzer, uv, two outlets, a small hx as the point-of-use cooler), pipes and the overhead return.
- Pointing at or focusing a card lights its parts (`is-lit`) and its marker. Fold: phones only.
- Phones: the drawing full width with its markers, the base label under it, cards stacked.

## Motion

Motion: the loop draws itself with the shared IsoKit choreography (parts back to front, pipes, then the water from the tank through the module and UV out to the points of use and home overhead); each option's marker drops onto its part as the water reaches it and the cards slide in. Under 5 s; nothing under reduced motion.
