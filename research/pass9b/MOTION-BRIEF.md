# Pass 9b · Motion: port the Subframe Motion library into the site

The owner wants the site's motion built from Subframe's "massive library of amazing motion"
(https://www.subframe.com/motion: 309 MIT examples, React + WebGL). Pass 9 gave every section its own look and a GSAP
timeline; this pass makes the motion world-class by porting the best-fitting library examples into our stack. The goal
stays: the most impressive industrial site a water-system buyer has seen, still clear and easy to browse.

## Read first
- `aquemi-web/.claude/skills/motion-library/SKILL.md` — the tooling (`motion.py search/get/guide`, `catalog.json`),
  porting rules, motion rules. Follow it exactly. Read `motion.py guide adapting` plus the topics for your effects.
- `aquemi-web/design-system/README.md` → Motion (rules updated for this pass: ambient layers, one pinned story per page,
  visitor-driven feedback may repeat).
- `aquemi-web/assets/src/motion/core.js` (the GSAP layer and its helpers) and `assets/src/motion/gl.js` (AQgl).
- `research/pass9/BUILD-BRIEF.md` — binding rules from pass 9: tokens only, real text, phone first-class, never a new
  claim, `[placeholders]` stay, links/intents/anchors kept.

## How to work
1. For each section you own: look at it once (`node research/tools/shot.js <page> --w 1280 --full --out <dir>`, view a
   downscaled copy; crop where needed — screenshots cost tokens, plan them), read its look's renderer and motion.js,
   then decide what the library can add: a better entrance choreography, a visitor-driven interaction (hover, scrub,
   drag, toggle), a scroll-linked story, or an ambient layer. Not every section needs a port; every page should gain
   at least two clearly better moments and one wow moment. Variety across the page: neighbours move differently.
2. Search the library (several phrasings, browse `catalog.json`), `get` the example source into your scratch dir, port
   its mechanism to vanilla JS + GSAP (+ AQgl for shaders) with tokens and the section's real content. Keep the MIT
   header line `Ported from Subframe Motion "<title>" (<slug>), MIT, (c) 2026 Subframe` at the top of the ported code.
3. Make it robust: works at 375 and 1280, in light and dark, with keyboard (interactive parts focusable, visible
   focus), under reduced motion (still, complete, nothing hidden), and with JS off (the static markup is complete).
4. Verify: `python aquemi-web/tools/design_system.py build`, `check` (0 problems), and
   `AQ_BASE=http://localhost:<your port>/ node research/tools/motioncheck.js <page> 1280` and `375` (0 errors, nothing
   left hidden). Watch the loud moment with `research/tools/film.js` (frames at intervals) and make sure every
   timeline ends cleanly. Serve with `python research/pass9/serve.py <your port>` from `aquemi-web/` (run it in the
   background; stop it at the end). Never use port 8765; 8766 belongs to the owner.
5. Add a row per port to the "Ported so far" table in `aquemi-web/.claude/skills/motion-library/SKILL.md`
   (append only, one line each; other agents append too — re-read before editing and edit only your rows).

## Ownership
Only the files your assignment names. Shared files you don't own: append requests to `research/pass9b/requests.md`
(one line: file, page, what, why). No git, no `git stash`. Never touch `board/`, `export.txt`, `vendor-profile.md`.

## Report (≤ 15 lines)
Per page or component: which examples you ported (slug → where), what is now interactive, what you rejected and why,
anything still weak, requests filed.
