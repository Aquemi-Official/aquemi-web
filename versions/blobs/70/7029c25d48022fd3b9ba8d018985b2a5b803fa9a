FxCaustics is light through moving water (ported from Subframe Motion "Tidal caustics"), a faint flow-coloured web drifting on the host's own ground; the home hero's ambient layer.

- Shader: `AQgl.def('caustics', …)` in this folder's `motion.js` (the licence header and what changed from the example are at its top). Runtime and API: `assets/src/motion/gl.js`; general rules: FxShader.
- Markup: `<canvas class="aq-fx-shader" data-gl="caustics" aria-hidden="true"></canvas>` as the first child of a positioned host with `aq-fx-host` (or, where the host must not clip, `isolation: isolate`). Decoration only: aria-hidden, no text in it; the page is complete without WebGL.
- Colour: the `flow` token read from the host (light and dark theme), drawn on a transparent ground so the host's own ground shows. Strength is `--fx-amt` on the canvas, set by the placement in its component's style.css (default 0.3 here).
- Used on: Home hero (`assets/src/parts/Hero.js`, `HERO_WATER`), masked in Hero's style.css to gather behind the loop drawing; the FxShader preview.
- Motion: only while on screen, only the most visible layer on the page moves, slow (one visible cycle well over 6 s), 30 fps cap, render scale at most 0.75 and lower on phones and low-power devices; a still frame under reduced motion.
- When to use: Behind the home hero only: one water moment where the site begins. Never at full strength behind body copy, never on a data figure.
