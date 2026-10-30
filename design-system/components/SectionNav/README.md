SectionNav is a sticky row of jump links to the sections of a long technical page, so a reader can go straight to the limits, the documents or the FAQ.

- Markup: `<nav class="aq-section-nav" aria-label="On this page"><div class="aq-in"><span class="aq-section-nav__label">On this page</span><a href="#…" data-jump="s-…">Water quality</a>…<a class="aq-section-nav__cta" …>Request a proposal</a></div></nav>`. Each link's `data-jump` is the `id` of a `<section>` on the page; the site renderer adds those ids from the section headings and scrolls on click (page ids own the URL hash, so links do not change it).
- Sticks to the top of the viewport (`position: sticky`, `top: 0`) on `--surface` with a `--line` bottom border. Links use the `label` type style in `--ink-muted`, `--ink` on hover; the optional CTA at the end is a text link in `--action`.
- The row scrolls sideways on phones rather than wrapping, so it never takes more than one line.
- Use short labels (one to three words: "Limits", "Design", "Documents", "FAQ"). Six to eight links at most.
- Only on pages with six or more sections. Short pages and the home page do without it; the NavBar is the site-level navigation.
