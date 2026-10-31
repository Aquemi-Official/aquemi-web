Page is the layout every Aquemi page, section and preview sits in: the container, the section rhythm and the type classes.

- Wrap a whole page in `<div class="aq-page">`. It sets the ground, the body type and a container query, so sections reflow when the page (not only the window) is narrower than 860 px.
- Each section is `<section class="aq-section">` holding `<div class="aq-in">` (content width `content-max`, side gutter `space-8`, `space-4` when narrow). Sections are separated by a `line` hairline.
- Stacks: `aq-stack` (gap `space-4`) for a heading with its lead; `aq-stack-l` (gap `space-8`) between a heading block and its content.
- Type classes, matching the type tokens: `aq-display-xl` (home hero only), `aq-display` (other heroes), `aq-h1` (section openers), `aq-h2`, `aq-h3` (item titles), `aq-lead` (one sentence under a heading), `aq-small` (descriptions, captions), `aq-eyebrow` (uppercase mono label above a heading).
- Order on every page: NavBar, Hero, content sections, a navy closing Band, Footer.
- Section headings are `<h2 class="aq-h1">`; the hero holds the only `<h1>`.
