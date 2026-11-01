FxPhosphor is the glow of a phosphor screen under a drawn reading (ported from Subframe Motion "Phosphor trace"): a halo, a ghost and a slow sweep in flow, following HmiTrend's own trace exactly.

- Shader: `AQgl.def('phosphor', …)` in this folder's `motion.js` (the licence header and what changed from the example are at its top). Runtime and API: `assets/src/motion/gl.js`; general rules: FxShader.
- Markup: `<canvas class="aq-fx-shader" data-gl="phosphor" aria-hidden="true"></canvas>` as the first child of a positioned host with `aq-fx-host` (or, where the host must not clip, `isolation: isolate`). Decoration only: aria-hidden, no text in it; the page is complete without WebGL.
- Colour: the `flow` token read from the host (light and dark theme), drawn on a transparent ground so the host's own ground shows. Strength is `--fx-amt` on the canvas, set by the placement in its component's style.css (default 0.3 here).
- Used on: inside HmiTrend's plot (`assets/src/blocks/look-hmi-trend.js`) on sys-monitoring. HmiTrend's timeline writes the glow with the pen by tweening the canvas's `--pen` from 0 to 1.
- Motion: only while on screen, only the most visible layer on the page moves, slow (one visible cycle well over 6 s), 30 fps cap, render scale at most 0.75 and lower on phones and low-power devices; a still frame under reduced motion.
- When to use: Only under HmiTrend's reading: the glow function is that trace (`hmiTrace()`), so change both together. The SVG line stays the data; the glow never replaces it.
