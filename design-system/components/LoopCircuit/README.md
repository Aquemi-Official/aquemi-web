LoopCircuit draws how a storage and distribution loop works as the loop's own control screen: an HMI mimic of the tank in section and the loop circuit, every stage tagged on the screen and listed under it.

- On the site: a `diagram` block with `"look": "loop-circuit"` (renderer `assets/src/blocks/look-loop-circuit.js`), sys-storage "How a loop works". Origin: no concept of its own; adapted from the build brief's "the tank and loop as the hero object, a loop drawn as a circuit", the numbered stops of `research/pass9/concepts/sys-pw.1.png` and the active-part idea of `compliance.3.png`, in an HMI-screen art direction.
- Markup: `section.aq-band--navy.aq-loop-circuit-sec[data-theme="dark"]` > `div.aq-loop-circuit` > `div.__screen` (`div.__bar` aria-hidden: lamp, screen title, stage count; `div.__mimic` > `svg.__svg`: pipes, `path.__flow--feed` and `--loop`, chevrons, `g.__node[data-node]` per part, `g.__tag[data-node][data-at]` numbered tags), then `ol.__stages` of `li.__stage[data-node]` (`span.__mark` glyph for phones, `p.__no`, `h3.__t`, `p.__d`).
- Fields: `h`, `stages` (or `items`) `[{t, d, spot | icon, node}]`, optional `screen` (screen title; default the page's nav label). `node`: `gen`, `tank`, `pump`, `hx`, `pou`, `sensors`, `spray` (default by position in that order). The mimic is fixed: it fits a loop diagram of these seven parts.
- Drawn in the renderer as flat HMI symbols (ISA pump and exchanger circles, bowtie valves, instrument bubbles), not IsoKit: the screen is a schematic. Tokens only; the section is dark-themed so `surface` is the screen ground and `flow` the water.
- Pointing at a stage lights its tag and part (colour only; all content is visible without it).
- Phones: the screen gives way to a vertical circuit: stages down a `flow` rail with their glyphs, a dashed return line back up to the tank.

## Motion

Motion: the screen powers on (a line opens to the full screen), pipes and equipment draw on, then the water runs: from generation into the tank (the level rises), out through pump and exchanger, back past the points of use and the return sensors, home through the spray ball (its jets open), a droplet riding the head. Each tag and column lights as the water reaches it; the loop then runs as a moving dash for a second and stops. Under 5 s; nothing under reduced motion.
