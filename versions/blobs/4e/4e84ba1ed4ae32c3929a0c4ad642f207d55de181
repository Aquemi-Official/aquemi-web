Hero opens every page: eyebrow, one display headline, one lead sentence, one primary button and one link.

- Markup: `<section class="aq-hero">` (add `aq-hero--home` on the home page) holding `<div class="aq-in">`, then either the text stack alone or `aq-hero__grid` with the text stack and one right-hand part (see the variants below), then the page's KeyFacts strip (`wKeyFacts(facts)` in `assets/src/parts/KeyFacts.js`; empty when the page has no facts). Wrap the page in `aq-page`.
- Text stack: `<div class="aq-stack">` with `<span class="aq-eyebrow">`, `<h1 class="aq-display">` (`aq-display-xl` on the home page only), `<p class="aq-lead">`, `<div class="aq-hero__actions">` holding one `aq-btn--primary` and one `aq-btn--link`, then optional `aq-tags`. Leave tags out when the eyebrow already names the standards or a standards band follows on the page.
- The eyebrow names the system family and the standard: "Water for Injection · USP <1231> · Ph. Eur. 0169".
- One hero per page. No carousel, no background video.

## Which variant

| Pages | Right-hand part | Grid class |
| --- | --- | --- |
| `home` | Loop drawing (concept U) | `aq-hero__grid--loop` |
| `sys-*`, `svc-*`, `ind-*` with a drawing in `ART` | Equipment figure with callouts (concept B) | `aq-hero__grid--figure` |
| `sys-*`, `svc-*`, `ind-*` without a drawing | Photograph placeholder | `aq-hero__grid` |
| Hub and company pages (everything else) | Section index (concept S) | `aq-hero__grid--index` |

`wHero` in `assets/src/parts/Hero.js` picks the variant from the page id; content files need no extra fields (except `hero_index: false`, below).

## Equipment figure (pages with a drawing)

- Markup: `aq-hero__grid aq-hero__grid--figure` (text 5 parts, figure 7 parts, vertically centred), and on the right `<figure class="aq-hero__figure">` holding, in order: an Illustration (`<span class="aq-illustration" role="img" aria-label="…">` with the drawing as inline `mask-image`), `<svg class="aq-hero__leaders" viewBox="0 0 125 100" preserveAspectRatio="none" aria-hidden="true">` with one `<line>` and one `<circle r="0.9">` per callout, then `<dl class="aq-hero__callouts">` with up to four `<div class="aq-hero__callout"><dt>label</dt><dd>value</dd></div>`.
- Concept B in `design-system/inspiration/`: the drawing sits large on a `line` blueprint grid at `space-8` pitch that fades out towards the edges, and callouts carry the page's own key facts. Callouts are the KeyFacts of that page, so a page with a figure shows no KeyFacts strip (the renderer moves a fifth fact or later into a strip below).
- Callouts sit in the four corners (order: top left, top right, bottom left, bottom right), each 30 % wide on `surface`, with a `flow` rule on the side facing the drawing. Values use Geist Mono 300 in `ink`, labels the 11 px mono caps in `ink-muted`. Leaders are 1 px `flow` lines from the inner end of the rule to a fixed point on the drawing, ending in a `flow` dot. The anchors are fixed per slot (`HERO_LEAD` in `assets/src/parts/Hero.js`): every drawing is a centred isometric skid, so they land on equipment.
- The figure box is 5:4; the drawing is a centred square 84 % of its height. Keep that ratio if you change the viewBox.
- Narrow containers: the drawing goes below the text at up to 320 px wide, leaders are hidden and the callouts become a two-column list with `line` hairlines, like KeyFacts.
- **Adding a drawing**: put the mask in `assets/illustrations/<page id>.png` (see Illustration), then add one line to `ART` in `assets/src/parts/Hero.js`: `'svc-fabrication':'Skid on the shop floor: orbital welder at a sanitary tube joint'`. The text is the drawing's `aria-label`. The page's hero then shows the figure, and the WaterPath stop for that page uses the same drawing. Then `python tools/design_system.py build`.
- Pages listed today: all seven `sys-*` pages and `svc-design`.

## Photograph (detail pages without a drawing)

- Grid: text 7 parts, image 5 parts. The image stretches to the full height of the text stack so their tops and bottoms align.
- Image: a real photograph of a finished skid or installed loop. Until one exists, use `<div class="aq-photo" role="img">` with a caption saying what the photo must show. The placeholder shows a `line` blueprint grid at `space-8` pitch so the draft looks designed, not empty.
- Key facts: a KeyFacts strip may close the hero, below the grid, with three or four figures from the page.

## Section index (hub and company pages)

- Markup: `aq-hero__grid aq-hero__grid--index` (text 7 parts, index 5 parts, vertically centred). On the right `<nav class="aq-hero__index" aria-label="Pages in Systems">` holding `<p class="aq-hero__index-label">Systems · 7 pages</p>` and an `<ol>` of `<li><a class="aq-hero__index-item" href="#sys-pw" data-wp="sys-pw"><span class="aq-hero__index-t">Purified Water (PW) generation</span></a></li>`. An item that cannot link is a `<span class="aq-hero__index-item">`.
- Concept S in `design-system/inspiration/`: the numbers `01`–`0N` are the shared index style (Geist Mono 13 px, `ink-subtle`) on a 48 px row (36 px on phones), from a CSS counter with empty alt text; never write them in the markup. Titles are 13 px mono caps in `ink`; linked titles end in a `flow` arrow.
- One 1 px `line-strong` route runs down the left and ends in an arrowhead; each item has a dot on it and a short leader ending in an arrowhead at its number. Hover and focus turn the title, number, dot and arrowhead `flow`; focus adds the 2 px `focus` ring. No fills or cards: the line is the structure, as in LinkGrid.
- Data: the pages whose `section` equals this page's `section`, other than the page itself, in `pages.json` order. On the section's own hub (the page NAVSECT links to: systems, services, industries, compliance, projects, about) the label reads "Systems · 7 pages"; on any other page of the section (cmp-*, careers, news, contact-*) it reads "Also in Company", so the index works as a section switcher.
- Fallback: a page alone in its section (today only `projects`) lists its own section headings (`blocks[].h`, leaving out `related`, at most seven) under "On this page". Headings link only when their block has a `nav` anchor; the rest are plain items. With fewer than two headings the hero stays text-only.
- Keep the page's hero tags under the actions: the index replaces the photograph, not the standards.
- **Turning it off:** when the section right under the hero already lists the same pages with more to say (the systems hub's seven-families grid), set `"hero_index": false` on the page. The hero is then the text stack alone at full width; no other page changes. Don't repeat a list the reader sees one scroll later.
- Phones (`@container (max-width: 860px)`): the index stacks under the tags, full width, with a shorter leader.

## Loop drawing (home)

- Markup: `aq-hero--home` with `aq-hero__grid aq-hero__grid--loop` (text 7 parts, drawing 5 parts, vertically centred); the headline is `aq-display-xl`. On the right `<figure class="aq-hero__loop" role="img" aria-label="…">` holding an inline `<svg viewBox="0 0 440 520" aria-hidden="true">`. The figure's `aria-label` is the text alternative; the SVG text is decorative.
- Concept U in `design-system/inspiration/`: a fine-line figure-eight distribution loop with a filter, a heat exchanger, conductivity (CE) and TOC sensor bubbles, a point-of-use valve, four `flow` arrows, dashed construction lines and circles, a vertical and a horizontal scale rule, and small mono annotations.
- Colours: the pipe and parts use `currentColor` (`ink-muted` on the figure), guides `line` (dashed), rules and leaders `line-strong`, arrows `flow`, part fills `surface` so the pipe breaks behind them. Strokes are 1 px (pipe 1.5 px) with `vector-effect: non-scaling-stroke`. No literal colours.
- Annotations only state what the home page states: ASME BPE, USP <645> at the conductivity sensor, USP <643> at the TOC sensor, and the endotoxin fact (the home `facts` entry whose value contains "EU/mL") at the furthest point of use. Never add figures the page does not claim.
- The home hero has no photograph slot and no arc motif any more (the `aq-arc` styles remain for `AQ.ARC`). Its KeyFacts strip follows the grid.
- Phones: the drawing goes under the actions at up to 224 px wide (`space-32` + `space-24`), centred.

## Phones

The hero must fit about 1.5 phone screens including its facts, and the primary button must be in the first screen when the lead is 35 words or fewer (content budget).

- Padding `space-12` top and bottom. Headline: `display` 34/38, `display-xl` 40/44; lead 17/26.
- Order: eyebrow, headline, lead, actions, then the figure. The equipment drawing is at most 176 px square (`space-32` + `space-12`); its callouts and the KeyFacts strip are compact 2 x 2 grids. The photograph placeholder is 2:1.
