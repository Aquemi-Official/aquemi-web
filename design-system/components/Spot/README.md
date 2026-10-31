Spot draws one icon from the Icon set larger, as the figure for a stop on a route, a stage of a process diagram, an option module or a zone of a plant map.

- Markup: `<span class="aq-spot aq-spot--icon" aria-hidden="true" style="-webkit-mask-image:url(assets/icons/still.svg);mask-image:url(assets/icons/still.svg)"></span>`. On the site, `wSpot(name, size, cls)` in `assets/src/core.js` writes it; an unknown name renders nothing. The file goes in as an inline `mask-image` so its path resolves against the page.
- Names: any Icon name, plus the older equipment spot names, which map to their icon (`SPOT_ICON` in `core.js`): `pretreatment` → `softener`, `ro-skid` → `ro-membrane`, `edi-stack` → `edi`, `still`, `pure-steam-generator` → `pure-steam`, `storage-tank` → `tank`, `pump`, `heat-exchanger`, `uv-ozone` → `uv`.
- Style: the same Lucide-style line icon (1.5 px stroke at every size, round caps and joins), so figures and list icons are one family. No raster drawings.
- Size: set by the component that holds it, kept icon-sized: 36 px in a diagram stage, 48 px in an option module or route stop, 56 to 64 px on a plant map or hero cluster, 96 px at most as an option-module base. Larger, a single line icon looks crude; use an Illustration for a picture of a system.
- Colour: `ink` by default; `aq-spot--muted` for `ink-muted`; `flow` only to mark the active stage or the water path.
- Always decoration: `aria-hidden="true"`; the stop, stage or zone name next to it is real text.

## Motion

Motion: a standalone Spot wipes in bottom to top like a print (the motion core, `assets/src/motion/core.js`). Inside a ProcessDiagram station, an OptionModules box or the base skid, the owning component times that wipe itself (a station's vignette prints as the water reaches it).
