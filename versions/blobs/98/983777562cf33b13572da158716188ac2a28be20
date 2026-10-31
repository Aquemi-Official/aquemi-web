Hero opens every page: eyebrow, one display headline, one lead sentence, one primary button and one link.

- Markup: `<section class="aq-hero">` (add `aq-hero--home` on the home page) holding `<div class="aq-in">`, then either the text stack alone or `aq-hero__grid` with the text stack and an image on the right. Wrap the page in `aq-page`.
- Text stack: `<div class="aq-stack">` with `<span class="aq-eyebrow">`, `<h1 class="aq-display">` (`aq-display-xl` on the home page only), `<p class="aq-lead">`, `<div class="aq-hero__actions">` holding one `aq-btn--primary` and one `aq-btn--link`, then optional `aq-tags`. Leave tags out when the eyebrow already names the standards or a standards band follows on the page.
- The eyebrow names the system family and the standard: "Water for Injection · USP <1231> · Ph. Eur. 0169".
- One hero per page. No carousel, no background video.

## Equipment figure (pages with a drawing)

- Markup: `aq-hero__grid aq-hero__grid--figure` (text 5 parts, figure 7 parts, vertically centred), and on the right `<figure class="aq-hero__figure">` holding, in order: an Illustration (`<span class="aq-illustration" role="img" aria-label="…">` with the drawing as inline `mask-image`), `<svg class="aq-hero__leaders" viewBox="0 0 125 100" preserveAspectRatio="none" aria-hidden="true">` with one `<line>` and one `<circle r="0.9">` per callout, then `<dl class="aq-hero__callouts">` with up to four `<div class="aq-hero__callout"><dt>label</dt><dd>value</dd></div>`.
- Concept B in `design-system/inspiration/`: the drawing sits large on a `line` blueprint grid at `space-8` pitch that fades out towards the edges, and callouts carry the page's own key facts. Callouts are the KeyFacts of that page, so a page with a figure shows no KeyFacts strip (the renderer moves a fifth fact or later into a strip below).
- Callouts sit in the four corners (order: top left, top right, bottom left, bottom right), each 30 % wide on `surface`, with a `flow` rule on the side facing the drawing. Values use Geist Mono 300 in `ink`, labels the 11 px mono caps in `ink-muted`. Leaders are 1 px `flow` lines from the inner end of the rule to a fixed point on the drawing, ending in a `flow` dot. The anchors are fixed per slot (`HERO_LEAD` in `assets/src/parts/Hero.js`): every drawing is a centred isometric skid, so they land on equipment.
- The figure box is 5:4; the drawing is a centred square 84 % of its height. Keep that ratio if you change the viewBox.
- Narrow containers: the drawing goes below the text at up to 320 px wide, leaders are hidden and the callouts become a two-column list with `line` hairlines, like KeyFacts.
- **Adding a drawing**: put the mask in `assets/illustrations/<page id>.png` (see Illustration), then add one line to `ART` in `assets/src/parts/Hero.js`: `'svc-fabrication':'Skid on the shop floor: orbital welder at a sanitary tube joint'`. The text is the drawing's `aria-label`. The page's hero then shows the figure, and the WaterPath stop for that page uses the same drawing. Then `python tools/design_system.py build`.
- Pages listed today: all seven `sys-*` pages and `svc-design`.

## Pages without a drawing

- Grid: text 7 parts, image 5 parts. The image stretches to the full height of the text stack so their tops and bottoms align, and it sits above the arc motif.
- Image: a real photograph of a finished skid or installed loop. Until one exists, use `<div class="aq-photo" role="img">` with a caption saying what the photo must show. The placeholder shows a `line` blueprint grid at `space-8` pitch so the draft looks designed, not empty.
- Key facts: a KeyFacts strip (`aq-key-facts`) may close the hero, below the grid, with three or four figures from the page. It replaces hero tags on system pages.
- Home hero (`aq-hero--home`) keeps the photograph slot, the KeyFacts strip and the arc motif (`<svg class="aq-arc">` with `aq-arc__outer` and `aq-arc__inner` paths, bottom right, home only). Its facts describe the whole company, not one skid, so they do not belong on one system's drawing.
