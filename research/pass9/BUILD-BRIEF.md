# Pass 9 · Build brief: every section a moonshot

The owner's words, condensed: the copy is settled (plus or minus), but the site reads like dense documentation —
tabular data all the way down, every section the same shape. Take each section to the next level of design: bold,
unique, visual first, GSAP motion with real UI/UX excellence ("water flowing through our devices", blueprints, things
appearing as you scroll). The goal is the most impressive website an industrial buyer of water systems has ever
seen — and also the clearest and easiest to browse, tuned to their needs. Text may be trimmed or recast to serve the
design (keep only the parts that matter, swap some lines for drawings), but never a new claim.

Each section now has a Gemini concept image: `research/pass9/concepts/<page>.<blockIndex>.png` (`.vN` = another take;
`research/pass9/concepts/log.md` says which take is the one to build — the newest take made with an art direction wins and what idea to keep). **Follow the concept's idea closely —
its layout, its central visual, its composition, its density of negative-space detail — and build it to completion.**
Past passes lost features in the rebuild; don't. Ignore the concept's invented text, numbers, logos and standards;
use the page's real content.

## How a section gets its new design (no shared files touched)
1. A **look**: set `"look": "<name>"` on the block in `content/pages/NN-<page>.json`. `wBlock` (assets/src/page.js)
   renders it with `LOOKS['<name>'](block, headingHtml)` instead of the type renderer. Without the look the block
   renders as before, so the old renderer stays as fallback.
2. Renderer: `assets/src/blocks/look-<name>.js` registering `LOOKS['<name>']=function(b,H){ return sec(H+…) }` (helpers
   in `assets/src/core.js`: `sec`, `split`, `tx` (escapes and turns `[placeholders]` into the Placeholder chip — always
   pass copy through `tx`), `e`, `wlink`, `tcell`, `wIcon`, `wSpot`, `idx`, `wFold`/`fli`, `wSecHead` output arrives
   as `H`). Read the block's existing fields; you may add new optional fields to the block in your page file (e.g. a
   short `label` per item, `x`/`y` positions) — document them in your component README.
3. Component: `python tools/design_system.py new <PascalName> "Page sections"` → `design-system/components/<Name>/`
   with `style.css` (tokens only, phone rules under `@container (max-width: 860px)`), `README.md` (first sentence =
   summary; markup; fields; Motion paragraph), `preview.html` (line 1 `@dsCard` marker; real Aquemi copy), and
   `motion.js` (`AQmotion.fx('<Name>', function(root, m){…})`, see `design-system/components/Hero/motion.js`,
   `LimitGauges/motion.js`; API in `assets/src/motion/core.js`).
4. Style varies by section on purpose (owner, 2026-11-01): concepts follow different art directions (editorial,
   data-viz, HMI screen, Swiss type, tactile objects, kinetic type, bento, 3D render, blueprint now and then…). Build
   each in ITS direction; do not convert everything back into blueprint line art. Keep brand tokens and type.
   Drawings: where a section needs equipment line art, use the shared isometric kit **IsoKit** (`assets/src/parts/IsoKit.js`, README in
   `design-system/components/IsoKit/`) for equipment, pipes, flow and drawing-sheet furniture, so all sections draw in
   one hand. If the kit lacks a part, draw it inline in your own renderer in the same style (1.5 px `line-strong`
   strokes, `flow` for water, round joins) and say so in your report. Line icons: `wIcon(name)` / `wSpot(name)`.
   The page's big equipment drawing (`assets/illustrations/<page>.webp`, Illustration component) can also be reused.
5. Reuse: if another builder's look fits one of your sections, reuse it (`look` name) rather than making a near-copy;
   check `assets/src/blocks/look-*.js` first. A look must be data-driven (no copy hard-coded in JS).

## Design rules (brand, still binding)
- Tokens only: colours (`navy`, `limestone`, `surface*`, `ink*`, `line*`, `flow`, `flow-tint`, status colours only in
  data), type classes (`aq-h1`, `aq-lead`, `aq-eyebrow`, `aq-data`/mono for figures), spacing, radius. No literal
  colours or px spacing in CSS. Geist / Geist Mono only. Square corners.
- Navy blueprint grounds and limestone sheets are welcome (the concepts use them); keep text contrast ≥ 4.5:1 in both
  light and dark themes. Gradients: only the two allowed grounds (brand book).
- Real text in the DOM (never baked into images/SVG `<text>` for content that matters — SVG `<text>` is fine for
  short drawing labels if also present as real text or `aria-hidden` duplicates), decorations `aria-hidden`,
  keyboard-reachable controls (≥ 44 px targets), visible focus.
- Phone (375 px) is a first-class design, not a squeezed desktop: same character, re-composed (vertical pipe run,
  stacked callouts), no horizontal page scroll, text ≥ 12 px.
- Keep every link, intent, anchor, `nav`, `fold`, form hand-off and placeholder the block has. Placeholders stay
  placeholders (`[...]`), rendered by `tx`.
- Copy: you may shorten or drop lines so the design breathes (log each cut in your report with the exact text); never
  add a fact, number, standard, client or promise. Brand voice: sentence case, units with a space, no hype words.

## Motion rules (GSAP 3.13; ScrollTrigger, MotionPath, DrawSVG, SplitText, ScrambleText, Flip, CustomEase loaded)
- Motion explains: pipes draw on, water travels the route (a flow dash or a droplet on a MotionPath) and each stage
  lights as it arrives; callouts extend from the part; gauges sweep; stamps strike; layers explode apart and settle.
- One timeline per component, triggered once on scroll-in (`m.on(el, fn)`); register tweens with `m.tw`; `m.claim(el)`
  on the root you choreograph (leave `.aq-sec-head` to the core). Anything moving longer than 5 s must stop.
- Hover/press micro-interactions on interactive parts (e.g. hovering a branch highlights its route).
- Transforms, opacity, clip-path, stroke only. Never leave content hidden at the end (motioncheck: 0 hidden). Nothing
  under reduced motion; the page is complete with JS off.

## Checks (loop until it is genuinely excellent)
Server: http://localhost:8766 (already running from `aquemi-web/`; never 8765; do not start another). If your launch
prompt names a port (e.g. 8768), prefix every research tool command with `AQ_BASE=http://localhost:<port>/` so builders
spread across servers.
- `python tools/design_system.py build` then `check` (0 problems) and `check --budgets <page>`.
- Look at your work sparingly — screenshots cost tokens: `node ../research/tools/peek.js <page> 1280 <out.png> <scrollY> 900`
  for one viewport, and the same at 375 (height 812). Find a section's scrollY with
  `node ../research/tools/shot.js <page> --w 1280 --out <dir>` (prints the table; open only the PNG you need). Compare
  against the concept side by side in your head; iterate until the build carries the concept's idea and finish.
  Downscale before viewing when you can (python PIL `thumbnail((900,900))`).
- Motion: `node ../research/tools/film.js <page> 1280 <outPrefix> <scrollY> "300,900,1800,3200"` (real-motion frames);
  `node ../research/tools/motioncheck.js <page> 1280` and `375`: 0 errors, 0 hidden.
- Never run more than two browser tools at once (the local server drops connections under load).

## Ownership
You own: your page file(s), the looks/components you create (their folders and `look-*.js`), and
`research/pass9/build/<page>.md` (your notes). Shared files (`core.js`, `page.js`, `base.css`, `motion/core.js`,
IsoKit, other builders' looks) — do not edit; append a one-line request to `research/pass9/shared-requests.md`. Never
touch `board/`, `export.txt`, `vendor-profile.md`. No git (the orchestrator commits).

## Report (≤ 15 lines)
Per section: look name, what the concept's idea became, motion, copy cut (exact), phone treatment; anything weak
still; shared requests.

## Sections without a concept of their own (Gemini quota ran out; owner: "use what we have")
Pick, from the whole concept pool (`research/pass9/concepts/*.png`, log in `log.md`; also in the gallery as
`design-system/inspiration/gemini/68…94-p9-*`), the idea that fits that section's content best, or reuse a look another
builder already made (`assets/src/blocks/look-*.js`) when the content has the same shape. Within one page, vary the
art directions so no two neighbouring sections share one, and keep blueprint line art to at most one or two sections
per page. Name the concept you adapted in your report.

## Style atlas (read before designing; added mid-pass)
`aquemi-web/design-system/inspiration/style-atlas/STYLE-ATLAS.md` analyses all 94 Gemini images. Recommended direction:
measured editorial as the spine (big LIGHT type and figures as heroes, Swiss tiles and split grids for variety),
line drawings as figure plates paired with real data (line art + table is the best-scoring pairing), one material
moment per page at most. Its §7 anti-patterns apply to builds too: no heavy or all-caps display type, no glow, no
decorative connector lines that mean nothing, no density for its own sake, no rounded pills except standard tags.
