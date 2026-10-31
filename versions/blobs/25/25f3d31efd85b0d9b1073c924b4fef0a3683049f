# Aquemi website (draft) and design system

Working draft of the Aquemi customer site and the Aquemi design system it is built from.

- Site: https://aquemi-official.github.io/aquemi-web/
- Design system guide: https://aquemi-official.github.io/aquemi-web/design-system.html
- Claude design system (for Claude chats, decks and designs): https://claude.ai/artifact/3DHFfts7CMzKm1ZFYt7p99

This is for drafting and testing. Every page carries a `noindex` tag. Push to `main` and Pages updates in a minute or two.

**Working on it, by hand or with an AI agent: read [AGENTS.md](AGENTS.md).** It covers the file map, the rules and step-by-step workflows for changing tokens, adding components, adding pages and publishing to Claude.

## In short

- `design-system/` is the source of truth for everything visual: tokens, component styles, guidelines and previews. The site, the guide page and the Claude design system all read from it.
- `content/pages.json` holds all 31 pages of copy. **Edit copy here.**
- `tools/design_system.py` builds generated files, checks the rules, scaffolds components and stages the system for Claude:

```bash
python tools/design_system.py build
python tools/design_system.py check
python tools/design_system.py new PullQuote "Page sections"
```

Preview locally:

```bash
python -m http.server 8000
```

Then open http://localhost:8000/ (pages by id, e.g. `#sys-pw`) and http://localhost:8000/design-system.html.

## Drafting conventions

- Text in `[square brackets]` is a placeholder for a fact only Aquemi can supply. The draft bar highlights them; tick "Show open facts" to list what each page still needs.
- Follow the voice rules in the brand book: name the standard, give the number with its unit, no hype words, sentence case.
- Standards limits on the systems, services and compliance pages need a technical review before launch.
