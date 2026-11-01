FxCutaway is the body of the RO element behind MembraneFace's drawn end face, a quarter cut away to show the wound leaves (ported from Subframe Motion "Kiln section": a ray-marched solid with shaded cut faces).

- Shader: `AQgl.def('cutaway', …)` in this folder's `motion.js` (the licence header and what changed from the example are at its top). Runtime and API: `assets/src/motion/gl.js`; general rules: FxShader.
- Markup: `<canvas class="aq-fx-shader" data-gl="cutaway" aria-hidden="true"></canvas>` as the first child of a positioned host with `aq-fx-host` (or, where the host must not clip, `isolation: isolate`). Decoration only: aria-hidden, no text in it; the page is complete without WebGL.
- Colour: the `limestone` token read from the host (light and dark theme), drawn on a transparent ground so the host's own ground shows. Strength is `--fx-amt` on the canvas, set by the placement in its component's style.css (default 0.3 here).
- Used on: MembraneFace's navy element tile (`assets/src/blocks/look-membrane-face.js`) on sys-pretreatment. It measures the tile's SVG every frame (viewBox -30 -30 460 460, wall r 178), so the body joins the drawn face exactly.
- Motion: only while on screen, only the most visible layer on the page moves, slow (one visible cycle well over 6 s), 30 fps cap, render scale at most 0.75 and lower on phones and low-power devices; a still frame under reduced motion.
- When to use: Only behind MembraneFace's face drawing (it reads that SVG's geometry). It is the costliest layer (64 ray-march steps): keep it to one small tile.
