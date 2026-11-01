# Pass 9b · Build: new concepts for the sections that had none, with library motion

In pass 9 the Gemini quota ran out after 27 sections, so most sections from compliance.4 onwards got a look adapted
from another section's concept. The quota reset and the remaining sections now have their own concepts:
`research/pass9b/concepts/<page>.<blockIndex>.png` (`.vN` = the earlier take; `research/pass9b/concepts/log.md` says
which take to build and what idea to keep). The prompts came from the style atlas kit, with a rotating art direction
per section (`research/pass9b/queue.json` → `dir`).

## Read first
- `research/pass9/BUILD-BRIEF.md` — the binding pass-9 rules and the look mechanism (renderer, component, page JSON).
- `research/pass9b/MOTION-BRIEF.md` and `aquemi-web/.claude/skills/motion-library/SKILL.md` — this pass also ports
  Subframe Motion library examples; the motion rules there are binding.
- `aquemi-web/design-system/inspiration/style-atlas/STYLE-ATLAS.md` §7 (anti-patterns) and §9.
- Your pages' notes from pass 9: `research/pass9/build/<page>.md` (what was built, what is still weak).

## For each section of your pages
1. Open its concept once (and the `.v2` take if the log says to compare). Compare it with the live section
   (`node research/tools/shot.js <page> --w 1280 --full --out <dir>`, one downscaled view; crop as needed).
2. Decide: **upgrade** the existing look to the concept's idea (same look name; keep what already works), or
   **replace** it with a new look when the concept's idea is a different, stronger one. When you replace, delete the
   old look's renderer and component folder only if no other page uses it (grep `"look": "<name>"` in
   `aquemi-web/content/pages/`). Follow the concept's composition, central visual and negative space closely and
   build it to completion; ignore its invented text, figures, logos and standards.
3. Motion: give the section the library port that best serves its content (an interaction that helps reading, a
   choreography, at most one pinned story per page, ambient layers only via FxShader shaders that already exist —
   `AQgl.defs` lists them; ask in requests.md for a new one).
4. Check at 1280 and 375, light and dark, keyboard, reduced motion.
5. If a concept is weak (the log says so, or it adds nothing over the live look), keep the live look, polish it, and
   say so in your report.

## Verify and report
Per page: `python aquemi-web/tools/design_system.py build`, `check` (0 problems), `check --budgets <page>`,
`AQ_BASE=http://localhost:<port>/ node research/tools/motioncheck.js <page> 1280` and `375` (0 errors, nothing hidden).
Write `research/pass9b/build/<page>.md` (what you built per section, concept followed or not, library ports, still
weak). Report ≤ 15 lines. Ownership, no-git and never-touch rules as in MOTION-BRIEF.md.
