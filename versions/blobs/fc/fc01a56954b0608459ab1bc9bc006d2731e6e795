Footer closes every page on navy: the Limestone logo with one line of description, four sitemap columns, and the legal line.

- Markup: `<footer class="aq-footer">` with `aq-in`, then `aq-footer__cols` holding `aq-footer__head` and four `<nav class="aq-footer__col">`, then `aq-footer__legal`.
- Head: logo `<img class="aq-footer__logo">` (`brand/logo-limestone.svg`, 160 px wide, as the brand book places it) and `aq-footer__desc` (one sentence, 14/22 `on-navy-muted`). Facts only Aquemi can supply stay as `aq-ph` placeholders (`[city], Ontario`).
- Columns: Systems, Services, Industries and compliance, Company; page names from the page inventory. Each opens with `<h5 class="aq-footer__colhead">` in the `eyebrow` style (mono 12/16, 500, 0.08em, uppercase) in `limestone`; `space-3` below it the links in Geist 14/28 `on-navy-muted`, turning `on-navy` and underlined on hover.
- Layout: one row on desktop, the head a little wider than the columns (1.3 : 1 : 1 : 1 : 1). Padding `space-16` above and `space-8` below at every width. Phones: the head and the four columns two by two, the same 14/28 links.
- Legal line: `aq-footer__legal`, `space-12` below the columns under a Limestone hairline at 25 % strength: copyright with the legal entity on the left, Privacy · Terms · Accessibility on the right; 13/20 `on-navy-muted`, wrapping on phones.
- Ground `navy` in both themes. Focus is a 2 px Limestone ring, since `focus` is too dark on navy. No frames, numbers, flow rules or title block.
- Don't add columns beyond four or put marketing copy in the footer; it holds the map and the legal line.

## Motion

Motion (`Footer/motion.js`, once on scroll-in): the drawing sheet unrolls, the zone references appear round the edge, each column heading draws its rule left to right and its links follow, then the title block fills cell by cell. Skipped under reduced motion.
