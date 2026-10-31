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

`wHero` in `assets/src/parts/Hero.js` picks the variant from the page id; content files need no extra fields (except `hero_index: false` and the opt-in `index`, below).

## Equipment figure (pages with a drawing)

Concept 02 in `design-system/inspiration/gemini/`: the equipment drawing large and dominant beside the headline, its key facts as callouts joined to the drawing by leader lines.

- Markup: `aq-hero__grid aq-hero__grid--figure` (text and figure 6 parts each, vertically centred; the headline steps down to 72/70 so eight words sit in two or three lines, with a scale rule drawn under it). On the right `<figure class="aq-hero__figure">` holding, in order: `<dl class="aq-hero__callouts aq-hero__callouts--top">` (the first two facts), `<div class="aq-hero__art">` with the Illustration (`role="img"`, `aria-label` from `ART`) and two leader SVGs (`aq-hero__leaders--wide`, viewBox 120 x 100, and `aq-hero__leaders--narrow`, viewBox 100 x 80; both `aria-hidden`), then `<dl class="aq-hero__callouts aq-hero__callouts--bottom">` (facts three and four). Each callout is `<div class="aq-hero__callout"><dt>label</dt><dd>value</dd></div>`.
- **Callouts only on `sys-*` pages**, whose facts are measured values (`≤ 1.3 µS/cm`). Service and industry pages show the drawing alone and keep their facts (often counts) in the KeyFacts strip under the grid. A fifth fact or later always goes to the strip.
- Desktop: the figure is 6:5; the drawing is a centred square 96 % of its height on a `line` blueprint grid that fades out, inside a dashed `line-strong` frame with registration crosses. Callouts sit in the four corners (27 % wide, 13 % tall): label in 11 px mono caps `ink-muted`, value Geist Mono 300 in `ink`, a `flow` rule on the side facing the drawing. A 1 px `flow` leader runs from the inner end of that rule (an open node) to a fixed point on the drawing (a `flow` dot). Anchors per slot are `HERO_AT` in `assets/src/parts/Hero.js`: every drawing is a centred isometric skid, so they land on equipment.
- Phones: the figure goes full width under the actions: the top pair of callouts, the drawing row (5:4) with its own leaders, the bottom pair. Headline 44/42 on figure pages.
- **Adding a drawing**: put the mask in `assets/illustrations/<page id>.png` (see Illustration), then add one line to `ART` in `assets/src/parts/Hero.js`. The text is the drawing's `aria-label`. Then `python tools/design_system.py build`.
- Pages listed today: every `sys-*`, `svc-*` and `ind-*` page.

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
- **Turning it off:** when the section right under the hero already lists the same pages with more to say, set `"hero_index": false` on the page (the systems hub uses the large `index` instead). The hero is then the text stack alone at full width; no other page changes. Don't repeat a list the reader sees one scroll later.
- Phones (`@container (max-width: 860px)`): the index stacks under the tags, full width, with a shorter leader.

## System index (opt-in hero field `index`)

Concept 35 in `design-system/inspiration/gemini/`: the hub's child pages as a large numbered index beside the headline. On today: `systems`, `services`, `industries`, `compliance`.

- Data: `"index": true` lists the other pages of this page's `section` in `pages.json` order (as the section index); `"index": ["sys-pw", "sys-storage"]` lists those page ids in that order (unknown ids are skipped). Titles are each page's `nav_label`; every entry links to its page. `index` wins over `hero_index`. Ignored on `home` and on `sys-*`, `svc-*`, `ind-*` detail pages. Built by `heroBigIndex(p)` in `Hero.js`; nothing else in the hero changes.
- Markup: the section index markup with `aq-hero__index aq-hero__index--big` on the nav and `aq-hero__grid--big-index` added to the grid (text and index 6 parts each); the label reads "Systems index · 7 pages"; between entries an `<span class="aq-hero__index-down" aria-hidden="true">` draws a small down arrow.
- Desktop: a framed area (1 px `line` rule inset `space-3`, `line-strong` registration crosses at the four corners); the label set vertically beside the spine; numbers Geist Mono 300 44/56 in `ink` from the CSS counter, names 16/22 mono caps in `ink`; `flow` dots on the `line-strong` spine, dashed leaders ending in an arrowhead at each number. Hover/focus turns number, title, dot and arrowhead `flow`. The KeyFacts strip stays below the grid.
- Phone: under the actions (and tags), full width, label on top, numbers 24/32, names 13/16, a 2 px `flow` spine, no down arrows. Adds about 340 px to the hero for seven pages (systems 863 → 1210 px at 375).

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
- Order: eyebrow, headline, lead, actions, then the figure. The equipment figure is full width with its callouts above and below the drawing (see above); the KeyFacts strip lists one fact per row. The photograph placeholder is 2:1.
