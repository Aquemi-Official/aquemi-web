# Aquemi website (draft)

Working draft of the Aquemi customer site, built with the Aquemi design system. Hosted on GitHub Pages for review: https://daniilki.github.io/aquemi-web/

This is for drafting and testing. Every page carries a `noindex` tag so search engines skip it.

## Files

| Path | What |
| --- | --- |
| `content/pages.json` | All 31 pages: hero, content blocks, closing band, SEO title and meta, and the open facts (`todo`) per page. **Edit copy here.** |
| `index.html` | Design-system styles and the page renderer. Edit for layout and styling. |
| `brand/` | Logo, lockup, mark and favicon from the Aquemi design system. Use these files as they are. |

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
