FxTruchet is a ground of twin-wall pipe tiles (ported from Subframe Motion "Truchet ribbon"): quarter-arc tiles that join into endless pipework, drifting slowly sideways, faint on limestone.

- Shader: `AQgl.def('truchet', …)` in this folder's `motion.js` (the licence header and what changed from the example are at its top). Runtime and API: `assets/src/motion/gl.js`; general rules: FxShader.
- Markup: `<canvas class="aq-fx-shader" data-gl="truchet" aria-hidden="true"></canvas>` as the first child of a positioned host with `aq-fx-host` (or, where the host must not clip, `isolation: isolate`). Decoration only: aria-hidden, no text in it; the page is complete without WebGL.
- Colour: the `on-limestone-muted` token read from the host (light and dark theme), drawn on a transparent ground so the host's own ground shows. Strength is `--fx-amt` on the canvas, set by the placement in its component's style.css (default 0.3 here).
- Used on: ManifoldRouter's limestone band on home (`assets/src/blocks/look-manifold-router.js`), masked to the right so it never crosses the manifold or the situations.
- Motion: only while on screen, only the most visible layer on the page moves, slow (one visible cycle well over 6 s), 30 fps cap, render scale at most 0.75 and lower on phones and low-power devices; a still frame under reduced motion.
- When to use: As a ground on a limestone band where nothing else nearby is drawn as a pipe. Not behind a P&amp;ID or a process drawing: the tiles would read as real piping.
