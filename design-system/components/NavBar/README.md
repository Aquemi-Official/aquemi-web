The site header: logo, six numbered section tabs and one framed call to action, like the tab strip of a drawing set.

- Structure: `<nav class="aq-nav" aria-label="Main">` holding the logo link (`<a class="aq-nav__home">`), `<ul class="aq-nav__links">`, a spacer (`<span class="aq-nav__spacer">`), the primary `aq-btn` inside `<span class="aq-nav__frame">` and the phone menu toggle.
- Each section link carries its index above the label: `<a><span class="aq-nav__num" aria-hidden="true">01</span><span class="aq-nav__label">Systems</span></a>`. The number is decoration, so screen readers hear only the label. Cells are ruled with `line`.
- Mark the current section with `aria-current="page"`: it gets `surface-sunken`, a `flow` rule along the bottom and a `flow` index number.
- `aq-nav__frame` draws four corner registration marks in `line-strong` round the button (`flow` on hover and focus). Use it for this one action only.
- On desktop the header carries the lockup. The consumer provides both lockup files as two `<img>` elements, each with `aq-nav__logo aq-nav__logo--lockup` (152 px wide, 140 px at mid widths): `aquemi-lockup-navy.svg` with `aq-logo--on-light`, and `aquemi-lockup-limestone.svg` with `aq-logo--on-dark`. On phones, use the wordmark alone (`aquemi-logo-*.svg`, only `aq-nav__logo`, 112 px).
- Keep it to six sections: Systems, Services, Industries, Compliance, Projects, Company.
- Below 860 px (container width) the links and framed button hide and the toggle shows: `<button class="aq-btn aq-btn--secondary aq-nav__toggle" aria-expanded aria-controls>` reading "Menu" or "Close". It opens `<div class="aq-menu">` directly under the bar, holding in order:
  1. `<nav aria-label="Sections"><ol class="aq-menu__list">` with every section, numbered, current one marked with `aria-current="page"`.
  2. On pages with a SectionNav: `<nav class="aq-menu__jump">` with the label `<p class="aq-menu__label">Section jump</p>` and `<ol class="aq-menu__list aq-menu__list--jump">` repeating the page's numbered jump links; the one being read has `aria-current="true"` and an arrow.
  3. The proposal button in `<span class="aq-nav__frame aq-menu__cta">`, full width.
- The menu is hidden at desktop widths even when open. The site renderer closes it when a section jump is chosen or Escape is pressed, and keeps focus on the toggle.
- The header scrolls with the page; the SectionNav is what sticks on long pages.

## Concept 38 (drawing-set header)

- Desktop: 80 px bar with a `line-strong` bottom rule; section tabs in Geist Mono 14/18 caps in `ink`, the index above in 11 px mono, cells ruled with `line-strong` (a closing rule after the last). The framed action reads in 13 px mono caps between brackets, `[ Request a proposal ]` (brackets from CSS with empty alt text; no arrow).
- Phones: 64 px bar; the open menu is a ruled panel (`line-strong` frame) inset `space-4`, sections in 20/28 mono caps with their numbers in `ink-subtle`, the section jump in 15/24 mono caps, the proposal button in mono caps.

## Motion

Motion: on hover and keyboard focus a 1 px `flow` rule draws under the section label from its left end and the index number lights (CSS, dropped under reduced motion). `NavBar/motion.js`: the phone menu unrolls from the bar and its rows drop in one after another; Close rolls it up before the page re-renders, and focus returns to the toggle. The section numbers decode once on a new page (wide screens). The bar is not sticky, so it never hides on scroll.
