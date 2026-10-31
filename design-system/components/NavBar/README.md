The site header: logo, primary sections and one call to action.

- Structure: `<nav class="aq-nav" aria-label="Main">` holding the logo link (`<a class="aq-nav__home">`), `<ul class="aq-nav__links">`, a spacer (`<span class="aq-nav__spacer">`), the primary `aq-btn` inside `<span class="aq-nav__frame">` (a plain wrapper, so the phone menu can reuse the button) and the phone menu toggle.
- Section links are sentence case in `label` (Geist 14/20, 500), `ink-muted`; hover and the current section (`aria-current="page"`) turn `ink`. No numbers, no boxes.
- 72 px bar on `surface` with a `line` bottom rule.
- On desktop the header carries the lockup. The consumer provides both lockup files as two `<img>` elements, each with `aq-nav__logo aq-nav__logo--lockup` (152 px wide, 140 px at mid widths): `aquemi-lockup-navy.svg` with `aq-logo--on-light`, and `aquemi-lockup-limestone.svg` with `aq-logo--on-dark`. On phones, use the wordmark alone (`aquemi-logo-*.svg`, only `aq-nav__logo`, 112 px).
- Keep it to six sections: Systems, Services, Industries, Compliance, Projects, Company.
- Below 860 px (container width) the links and button hide and the toggle shows: `<button class="aq-btn aq-btn--secondary aq-nav__toggle" aria-expanded aria-controls>` reading "Menu" or "Close". It opens `<div class="aq-menu">` on `surface` directly under the bar, holding in order:
  1. `<nav aria-label="Sections"><ol class="aq-menu__list">` with every section in 20/28 Geist, hairline rows, the current one marked with `aria-current="page"` and a `flow` arrow.
  2. On pages with a SectionNav: `<nav class="aq-menu__jump">` with the eyebrow label `<p class="aq-menu__label">Section jump</p>` and `<ol class="aq-menu__list aq-menu__list--jump">` repeating the page's jump links.
  3. The proposal button in `<span class="aq-nav__frame aq-menu__cta">`, full width.
- The menu is hidden at desktop widths even when open. The site renderer closes it when a section jump is chosen or Escape is pressed, and keeps focus on the toggle.
- The header scrolls with the page; the SectionNav is what sticks on long pages.

## Motion

Motion: on hover and keyboard focus a 1 px `flow` rule draws under the section label from its left end and the index number lights (CSS, dropped under reduced motion). `NavBar/motion.js`: the phone menu unrolls from the bar and its rows drop in one after another; Close rolls it up before the page re-renders, and focus returns to the toggle. The section numbers decode once on a new page (wide screens). The bar is not sticky, so it never hides on scroll.
