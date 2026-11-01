# Pass 9 · Polish round: refine every section again

Every section of the 27 pages now renders through its own look (a component + `assets/src/blocks/look-<name>.js`),
built from a Gemini concept or adapted from one. It is live. This round takes each page from "built" to "finished":
the owner wants the most impressive, clearest industrial website a buyer has seen — bold, unique, award-level, with
excellent GSAP motion — and every builder left a "still weak" list. You review and fix your pages.

## Read first
- `research/pass9/BUILD-BRIEF.md` (rules still binding: tokens only, real text, phone is first-class, motion plays
  once and settles, never a new claim, placeholders stay, links/intents/anchors kept, no shared-file edits).
- `aquemi-web/design-system/inspiration/style-atlas/STYLE-ATLAS.md` §7 (anti-patterns) and §9 (direction).
- For each of your pages: its build notes `research/pass9/build/<page>.md` (what the builder did and the "still weak"
  list), the concept(s) in `research/pass9/concepts/` if any, and the page JSON.

## For each page (1280 and 375)
1. Look at it once, whole: `node research/tools/shot.js <page> --w 1280 --full --out <dir>` and `--w 375`, then view a
   downscaled copy (PIL `thumbnail((900, 4000))`); crop to sections only where you need detail. Screenshots cost
   tokens: plan what you look at. Shots run with reduced motion (the finished state).
2. Judge each section as a demanding design lead would: hierarchy (one strong thing), alignment and spacing, awkward
   wraps and orphans, labels colliding with drawings, drawings too small to read or too faint, empty frames, density,
   tap targets ≥ 44 px, text ≥ 12 px on phone, dark theme (`--theme dark`), and the page as a sequence (neighbouring
   sections should differ in ground and art direction; the page should have one loud section and calm ones).
3. Fix in your looks' files (style.css, renderer, motion.js) and, for data-only tweaks, your page JSON. Work through
   the builder's "still weak" list first, then what you found. Watch the motion of at least the loud section with
   `film.js` and make sure every timeline ends cleanly (no stuck dashes, no half-drawn lines, no hidden content).
4. `python tools/design_system.py build`, `check` (0 problems from your files), `check --budgets <page>`,
   `motioncheck.js <page> 1280` and `375` (0 errors; the closing band may report late items — ignore those only).

## Ownership
Only the looks/components used by YOUR pages (find them: `"look"` values in your page JSON → `look-<name>.js` and the
component folder) and your page JSON. A look used on a page outside your group is not yours: list the issue instead.
Do not edit Hero, FAQ, RelatedLinks, EnquiryForm, Closing, IsoKit, core/page/base files: list issues for them in
`research/pass9/polish-requests.md` (append one line each: component, page, issue, suggested fix).
No git. Never touch `board/`, `export.txt`, `vendor-profile.md`.

## Report (≤ 12 lines)
Per page: what you changed (section by section, one line each), what is still weak, requests filed.
