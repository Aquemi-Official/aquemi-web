# Aquemi website (draft)

Working draft of the Aquemi customer site, built with the Aquemi design system. Hosted on GitHub Pages for review: https://daniilki.github.io/aquemi-web/

This is for drafting and testing. Every page carries a `noindex` tag so search engines skip it.

## Files

| Path | What |
| --- | --- |
| `content/pages.json` | All 31 pages: hero, content blocks, closing band, SEO title and meta, and the open facts (`todo`) per page. **Edit copy here.** |
| `index.html` | The site shell: draft bar, page routing, loads the content. |
| `design-system.html` | The design system documented live: logo, colour tokens with contrast ratios, type scale, spacing, components, and every page block rendered from real site content. https://daniilki.github.io/aquemi-web/design-system.html |
| `assets/aquemi.css` | All styles: design tokens (light and dark), components (`aq-btn`, `aq-nav`, `aq-spec`, `aq-tag`, `aq-field`) and page-block layouts. **Edit for styling.** |
| `assets/aquemi-site.js` | The page renderer shared by the site and the docs (`window.AQ`). Edit to add or change block types. |
| `assets/theme.js` | System / light / dark switch, remembered per browser. |
| `design/` | Copies of the design system's `tokens.json`, brand book and website plan. The docs page reads `tokens.json` directly. |
| `brand/` | Logo, lockup, mark and favicon from the Aquemi design system. Use these files as they are. |

If the design system changes, update `design/tokens.json` and the matching custom properties at the top of `assets/aquemi.css`.

No build step. Edit, commit, push; Pages updates in a minute or two.

Preview locally:

```bash
python -m http.server 8000
```

Then open http://localhost:8000/#home. Pages are addressed by id, e.g. `#sys-pw`, `#svc-service`, `#contact-proposal`.

## Drafting conventions

- Text in `[square brackets]` is a placeholder for a fact only Aquemi can supply (capacities, locations, certificates, response times, case-study figures). The draft bar highlights them. Tick "Show open facts" to list what each page still needs.
- Follow the voice rules in the design system: name the standard, give the number with its unit, no hype words, sentence case.
- Standards limits quoted on the systems, services and compliance pages should get a technical review before launch.

## Page blocks

Each page in `content/pages.json` has `blocks`, rendered in order. Types: `prose`, `grid`, `spec`, `steps`, `diagram`, `options`, `docs`, `readout`, `tags`, `faq`, `table`, `band`, `form`, `case`, `related`. Look at an existing page for the shape of each.
