Hero opens every page: eyebrow, one display headline, one lead sentence, one primary button and one link.

- Markup: `<section class="aq-hero">` (add `aq-hero--home` on the home page) holding `<div class="aq-in">`, then either the text stack alone or `aq-hero__grid` with the text stack and an image on the right. Wrap the page in `aq-page`.
- Text stack: `<div class="aq-stack">` with `<span class="aq-eyebrow">`, `<h1 class="aq-display">` (`aq-display-xl` on the home page only), `<p class="aq-lead">`, `<div class="aq-hero__actions">` holding one `aq-btn--primary` and one `aq-btn--link`, then optional `aq-tags`. Leave tags out when the eyebrow already names the standards or a standards band follows on the page.
- Grid: text 7 parts, image 5 parts. The image stretches to the full height of the text stack so their tops and bottoms align, and it sits above the arc motif.
- Image: a real photograph of a finished skid or installed loop. Until one exists, use `<div class="aq-photo" role="img">` with a caption saying what the photo must show.
- The arc motif (`<svg class="aq-arc">` with `aq-arc__outer` and `aq-arc__inner` paths) sits bottom right on the home hero only.
- The eyebrow names the system family and the standard: "Water for Injection · USP <1231> · Ph. Eur. 0169".
- One hero per page. No carousel, no background video.
