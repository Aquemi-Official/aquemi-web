Footer closes every page on navy: Limestone logo, sitemap columns and a legal line.

- Markup: `<footer class="aq-footer">` with `aq-in`, then `aq-footer__cols` (a brand column and four link columns with `<h5>` headings), then `aq-footer__legal`.
- Logo: the consumer provides `aquemi-logo-limestone.svg` as `<img class="aq-footer__logo">`, 160 px wide.
- Columns: Systems, Services, Industries and compliance, Company. Use the page names from the page inventory.
- Links use `on-navy-muted` and turn `on-navy` on hover. Each link is one 20 px line with `space-1` above and below, so a name that wraps still reads as one link.
