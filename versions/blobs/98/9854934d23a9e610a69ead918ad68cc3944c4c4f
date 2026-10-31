The site header: logo, primary sections and one call to action.

- Structure: `<nav class="aq-nav">` holding the logo link (`<a class="aq-nav__home">`), `<ul class="aq-nav__links">`, a spacer (`<span class="aq-nav__spacer">`) and a primary `aq-btn`.
- On desktop the header carries the lockup. The consumer provides both lockup files as two `<img>` elements, each with `aq-nav__logo aq-nav__logo--lockup` (152 px wide): `aquemi-lockup-navy.svg` with `aq-logo--on-light`, and `aquemi-lockup-limestone.svg` with `aq-logo--on-dark`. The right one shows in each theme.
- On phones, use the wordmark alone: the same markup with `aquemi-logo-navy.svg` and `aquemi-logo-limestone.svg` and only `aq-nav__logo` (112 px wide).
- Mark the current section with `aria-current="page"`.
- Keep it to six sections: Systems, Services, Industries, Compliance, Projects, Company.
- Below 860 px the links hide. Provide a menu toggle (`aq-nav__toggle`, with `aria-expanded`) that opens `<div class="aq-menu">` directly under the bar: one `<a>` per section plus Contact, on `surface`.
- Make it sticky on the page with `position: sticky`. It already has its `line` bottom rule.
