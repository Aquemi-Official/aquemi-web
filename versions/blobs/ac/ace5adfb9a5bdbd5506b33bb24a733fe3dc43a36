# Working in this repository (for people and AI agents)

This is the draft Aquemi website and the **Aquemi design system** it is built from. Aquemi designs and fabricates clean water systems for pharmaceutical manufacturing; readers are engineers, validation leads and QA managers.

- Site: https://aquemi-official.github.io/aquemi-web/
- Design system guide (generated from this repo): https://aquemi-official.github.io/aquemi-web/design-system.html
- Claude design system (for Claude chats, decks and designs): https://claude.ai/artifact/3DHFfts7CMzKm1ZFYt7p99

We are drafting. Commit straight to `main` and push; GitHub Pages publishes in a minute or two. No branches or reviews needed unless someone asks for one.

## The one rule

**`design-system/` is the source of truth for anything visual.** The site, the guide page and the Claude design system all read from it. Don't style the site anywhere else, and don't invent a look that isn't in it.

- Use the `aq-*` components. Before building UI, read `design-system/README.md` (brand book) and the `README.md` of each component you use.
- Colours, spacing, radii and type come from tokens (`var(--surface)`, `var(--space-6)`, `aq-h1` …). No literal colours or pixel values for spacing in component CSS.
- Write in the brand voice (brand book, "Content fundamentals"): name the standard, give the number with its unit, no hype words, sentence case.
- Facts only Aquemi can supply go in `[square brackets]` (the Placeholder component). Never fill one with a guessed value.

## Files

| Path | What |
| --- | --- |
| `design-system/tokens.json` | All tokens: colour (light and dark), type, spacing, radius, shadow, layout. **Edit to change the look everywhere.** |
| `design-system/components/bundle.css` | Every component's styles, token-only. |
| `design-system/components/<Name>/README.md` | Guidelines for one component: markup, rules, when to use it. First sentence is its summary. |
| `design-system/components/<Name>/preview.html` | A live example with real Aquemi copy. Line 1 is `<!-- @dsCard group="…" height=… width=… subtitle="…" -->`. |
| `design-system/README.md`, `website.md`, `page-inventory.md` | Brand book, website plan, list of all site pages and which components each uses. |
| `design-system/tokens.css`, `components.json` | **Generated** by `python tools/design_system.py build`. Never edit by hand. |
| `design-system/artifact.json` | Where the Claude design system lives and its uploaded asset ids. |
| `content/pages.json` | All page copy. Each page: hero fields, `blocks` (one per section), closing `cta`, `todo` (open facts). |
| `assets/aquemi-site.js` | Renders pages from `pages.json` into `aq-*` markup (one function per block type). |
| `assets/site.css` | Draft-bar chrome only. No brand styles here. |
| `design-system.html` | The visual guide. Generated at load time from the files above; normally needs no edits. |
| `brand/` | Logo, lockup, mark and favicon SVGs. Use as they are. |
| `tools/design_system.py` | `build`, `check`, `new`, `stage`. Python 3 standard library only. |

## Common tasks

**Change a colour, type size or spacing step.** Edit `design-system/tokens.json` (keep the list shape and a `usage` note on every token), then `python tools/design_system.py build`. Check both themes in the guide.

**Adjust a component.** Edit its rules in `bundle.css`, update its `README.md` if behaviour changed and its `preview.html` if the markup changed. If the site renders it, update the matching function in `assets/aquemi-site.js`.

**Add a component.**
1. `python tools/design_system.py new <PascalName> "<Group>"` (groups: Foundations, Actions, Navigation, Page sections, Data, Forms).
2. Write the README (what it is, markup, token rules, when not to use it) and a preview with real Aquemi copy.
3. Style `.aq-<name>` in `bundle.css` with tokens only.
4. `python tools/design_system.py build` then `python tools/design_system.py check` (must report 0 problems).
5. Open `design-system.html` locally and review it in light, dark and phone width.

**Add or edit a page.** Edit `content/pages.json`. Use existing block types; the guide's "Page blocks" section shows each with real content. Update `design-system/page-inventory.md` when pages are added or renamed.

**Add a new kind of section.** Add the component to the design system first (above), then a block type in `wBlock()` in `assets/aquemi-site.js` that outputs that component's markup, then use it in `pages.json`. Add it to the mapping table in `page-inventory.md`.

**Publish to the Claude design system.** After design-system changes land, publish them so Claude chats, decks and designs use the same system. Claude Code does this with the `aquemi-design-system` skill in `.claude/skills/`. Other agents: tell the person it needs publishing.

## Before you push

```bash
python tools/design_system.py build
python tools/design_system.py check
```

Preview locally with `python -m http.server 8000` and open http://localhost:8000/ and http://localhost:8000/design-system.html. The same check runs on GitHub for every push (`.github/workflows/design-system.yml`).
