Hero opens every page: eyebrow, one display headline, one lead sentence, one primary button and one link.

- Markup: `<section class="aq-hero">` (add `aq-hero--home` on the home page) holding `<div class="aq-in">`, then either the text stack alone or `aq-hero__grid` with the text stack and one right-hand part (see the variants below), then the page's KeyFacts strip (`wKeyFacts(facts)` in `assets/src/parts/KeyFacts.js`; empty when the page has no facts). Wrap the page in `aq-page`.
- Ground: the hero sits on `surface` with generous white space; the headline is light (`display` 300 56/60, `display-xl` 300 72/76 on home) in sentence case. The right-hand part is line art: single-weight strokes, `flow` only where it marks the water path or a leader end. No frames, grid paper, registration crosses, scale rules or stamps.
- Text stack: `<div class="aq-stack">` with `<span class="aq-eyebrow">`, `<h1 class="aq-display">` (`aq-display-xl` on the home page only), `<p class="aq-lead">`, `<div class="aq-hero__actions">` holding one `aq-btn--primary` and one `aq-btn--link`, then optional `aq-tags`. Leave tags out when the eyebrow already names the standards or a standards band follows on the page.
- The eyebrow names the system family and the standard: "Water for Injection · USP <1231> · Ph. Eur. 0169".
- One hero per page. No carousel, no background video.

## Which variant

| Pages | Right-hand part | Grid class |
| --- | --- | --- |
| `home` | Loop drawing | `aq-hero__grid--loop` |
| `sys-*`, `svc-*`, `ind-*` with a drawing in `ART` | Equipment figure with callouts | `aq-hero__grid--figure` |
| `sys-*`, `svc-*`, `ind-*` without a drawing | Photograph placeholder | `aq-hero__grid` |
| Pages without a drawing that set `figure` (compliance, cmp-*, projects, about, careers, news, contact-*) | Drawn figure: spots cluster, binder, stamp or route | `aq-hero__grid--figure aq-hero__grid--drawn` |
| Hub and company pages (everything else) | Section index | `aq-hero__grid--index` |

`wHero` in `assets/src/parts/Hero.js` picks the variant from the page id; content files need no extra fields (except `hero_index: false` and the opt-in `index`, below).

## Equipment figure (pages with a drawing)

The equipment drawing large beside the headline, its key facts as quiet callouts joined to the drawing by hairline leaders.

- Markup: `aq-hero__grid aq-hero__grid--figure` (text and figure 6 parts each, vertically centred; the headline keeps the `display` size). On the right `<figure class="aq-hero__figure">` holding, in order: `<dl class="aq-hero__callouts aq-hero__callouts--top">` (the first two facts), `<div class="aq-hero__art">` with the Illustration (`role="img"`, `aria-label` from `ART`) and two leader SVGs (`aq-hero__leaders--wide`, viewBox 120 x 100, and `aq-hero__leaders--narrow`, viewBox 100 x 80; both `aria-hidden`), then `<dl class="aq-hero__callouts aq-hero__callouts--bottom">` (facts three and four). Each callout is `<div class="aq-hero__callout"><dt>label</dt><dd>value</dd></div>`.
- **Callouts only on `sys-*` pages**, whose facts are measured values (`≤ 1.3 µS/cm`). Service and industry pages show the drawing alone and keep their facts (often counts) in the KeyFacts strip under the grid. A fifth fact or later always goes to the strip.
- Desktop: the figure is 6:5 on `surface`, no frame; the drawing is a centred square 96 % of its height. Callouts sit in the four corners (27 % wide, 13 % tall): label Geist 13/18 sentence case in `ink-muted`, value Geist Mono 300 in `ink`, a `line` hairline on the side facing the drawing. A 1 px `line-strong` leader runs from the inner end of that hairline (an open node) to a fixed point on the drawing, ending in a small `flow` dot. Anchors per slot are `HERO_AT` in `assets/src/parts/Hero.js`: every drawing is a centred isometric skid, so they land on equipment.
- Phones: the figure goes full width under the actions: the top pair of callouts, the drawing row (5:4) with its own leaders, the bottom pair. Headline as every other hero on phones (34/38).
- **Adding a drawing**: put the mask in `assets/illustrations/<page id>.png` (see Illustration), then add one line to `ART` in `assets/src/parts/Hero.js`. The text is the drawing's `aria-label`. Then `python tools/design_system.py build`.
- Pages listed today: every `sys-*`, `svc-*` and `ind-*` page.

## Drawn figure (opt-in hero field `figure`)

For pages with no equipment drawing, a quiet line-art figure in place of the index, built from what the system already has (Spots, Icons, SVG and CSS; no new raster art). On today: `compliance`, `cmp-documentation`, `cmp-quality`, `projects`, `about`, `careers`, `news`, `contact-proposal`, `contact-service`, `contact-locations`.

- Data, one of:
  - `"figure": {"spots": ["ro-skid", "storage-tank", "pure-steam-generator"], "label": "Generation · storage · pure steam"}`: 2–4 Spot vignettes in a zig-zag, joined along their bases by one drawn `flow` pipe ending in an arrow, each tagged `01 RO skid` (number in `ink-subtle` mono, name Geist 13/18 sentence case in `ink-muted` on a `surface` chip so the pipe passes behind). An entry may be `{"spot": "pid", "t": "Design"}`; an Icon name falls back to the icon (as `wSpot`). Names come from `SPOT_NAME` in `Hero.js`.
  - `"figure": {"plate": "binder", "label": "Turnover package", "items": [...], "foot": "Indexed to your URS"}`: a stack of folders drawn in `line-strong` hairlines (front folder `surface-raised`, the ones behind `surface-sunken`), numbered divider tabs staggered up and right, the front tab marked by a 1 px `flow` top line, the title Geist 400 sentence case over a `line` hairline, the index (`items`, at most 6; 4 on phones) on `line` rows with `ink-subtle` mono numbers, and the foot caption.
  - `"figure": {"plate": "stamp", "label": "Released", "title": "Release record", "items": [...], "sub": "QA"}`: a release record on `surface-raised` whose rows end in ticked boxes (`flow` tick), closed by a status line: a `flow` tick and the label, with "Signed · QA" beside it. No rubber stamp; `ring` and `ring2` are no longer drawn.
  - `"figure": {"plate": "route", "stops": ["Your request", "Engineer review", "Written reply"]}`: one 1.5 px `flow` route from an open start node through three numbered stops (Geist Mono 300 in a `line-strong` circle on `surface`) to an arrow, over a `line` ground hairline. Stop names Geist sentence case. Labels sit right of stop 1, under stop 2, over stop 3.
  - `label` (any kind) is an eyebrow-style caption (Geist Mono 12/16, 0.08em, uppercase, `ink-muted`) at the top left.
- Only state what the page states. Stop names, folder names and record rows paraphrase the page's own sections; never add figures.
- Markup: `<figure class="aq-hero__drawn aq-hero__drawn--spots|binder|stamp|route" aria-hidden="true">` (decorative: the headline and lead carry the meaning). Line work is an SVG with viewBox 120 x 100 over the 6:5 frame (non-scaling strokes); stops, vignettes and folders are positioned in percent. `figure` wins over `index` and `hero_index`; ignored on `home` and on pages with a drawing in `ART`. Built by `wHeroDrawn(p.figure)` in `Hero.js`.
- Desktop: text and figure 6 parts each, as the equipment figure. No frame or grid. Sizes inside scale with the figure (container units).
- Phone: under the actions, `min(100%, 312px)` wide at 6:5, so at most 260 px tall; smaller tabs, captions stay 12 px or more, the binder shows four rows and no icon.
- Motion: none of its own; the page's calm hero fade (`assets/motion.js`) applies.

## Photograph (detail pages without a drawing)

- Grid: text 7 parts, image 5 parts. The image stretches to the full height of the text stack so their tops and bottoms align.
- Image: a real photograph of a finished skid or installed loop. Until one exists, use `<div class="aq-photo" role="img">` with a caption saying what the photo must show. The placeholder is a plain `surface-sunken` area with a `line` border and its mono caption.
- Key facts: a KeyFacts strip may close the hero, below the grid, with three or four figures from the page.

## Section index (hub and company pages)

- Markup: `aq-hero__grid aq-hero__grid--index` (text 7 parts, index 5 parts, vertically centred). On the right `<nav class="aq-hero__index" aria-label="Pages in Systems">` holding `<p class="aq-hero__index-label">Systems · 7 pages</p>` and an `<ol>` of `<li><a class="aq-hero__index-item" href="#sys-pw" data-wp="sys-pw"><span class="aq-hero__index-t">Purified Water (PW) generation</span></a></li>`. An item that cannot link is a `<span class="aq-hero__index-item">`.
- The shared row grammar: `line` hairlines between rows (at least 44 px tall). The numbers `01`–`0N` are the shared index style (Geist Mono 13/24, `ink-subtle`), from a CSS counter with empty alt text; never write them in the markup. Titles are Geist 400 16/24 sentence case in `ink`; linked titles end in a `flow` arrow. Hover turns the title `flow`; focus adds the 2 px `focus` ring. No fills, cards or drawn routes.
- The label above the rows is eyebrow style (Geist Mono 12/16, 0.08em, uppercase, `ink-muted`).
- Data: the pages whose `section` equals this page's `section`, other than the page itself, in `pages.json` order. On the section's own hub (the page NAVSECT links to: systems, services, industries, compliance, projects, about) the label reads "Systems · 7 pages"; on any other page of the section (cmp-*, careers, news, contact-*) it reads "Also in Company", so the index works as a section switcher.
- Fallback: a page alone in its section (today only `projects`) lists its own section headings (`blocks[].h`, leaving out `related`, at most seven) under "On this page". Headings link only when their block has a `nav` anchor; the rest are plain items. With fewer than two headings the hero stays text-only.
- Keep the page's hero tags under the actions: the index replaces the photograph, not the standards.
- **Turning it off:** when the section right under the hero already lists the same pages with more to say, set `"hero_index": false` on the page (the systems hub uses the large `index` instead). The hero is then the text stack alone at full width; no other page changes. Don't repeat a list the reader sees one scroll later.
- Phones (`@container (max-width: 860px)`): the index stacks under the tags, full width.

## System index (opt-in hero field `index`)

The hub's child pages as a larger numbered index beside the headline. On today: `systems`, `services`, `industries`, `compliance`.

- Data: `"index": true` lists the other pages of this page's `section` in `pages.json` order (as the section index); `"index": ["sys-pw", "sys-storage"]` lists those page ids in that order (unknown ids are skipped). Titles are each page's `nav_label`; every entry links to its page. `index` wins over `hero_index`. Ignored on `home` and on `sys-*`, `svc-*`, `ind-*` detail pages. Built by `heroBigIndex(p)` in `Hero.js`; nothing else in the hero changes.
- Markup: the section index markup with `aq-hero__index aq-hero__index--big` on the nav and `aq-hero__grid--big-index` added to the grid (text and index 6 parts each); the label reads "Systems index · 7 pages".
- Desktop: the section index rows with titles at `h3` (Geist 500 20/28) and `space-4` row padding; no frame. Hover turns the title `flow`. The KeyFacts strip stays below the grid.
- Phone: under the actions (and tags), full width, titles 17/24.

## Loop drawing (home)

- Markup: `aq-hero--home` with `aq-hero__grid aq-hero__grid--loop` (text 7 parts, drawing 5 parts, vertically centred); the headline is `aq-display-xl`. On the right `<figure class="aq-hero__loop" role="img" aria-label="…">` holding an inline `<svg viewBox="0 0 440 520" aria-hidden="true">`. The figure's `aria-label` is the text alternative; the SVG text is decorative.
- A fine-line figure-eight distribution loop with a filter, a heat exchanger, conductivity (CE) and TOC sensor bubbles, a point-of-use valve, four `flow` arrows and small Geist annotations (sentence case). No construction lines or scale rules.
- Colours: the pipe is `flow` (the water path), parts `currentColor` (`ink-muted` on the figure), leaders `line-strong`, arrows `flow`, part fills `surface` so the pipe breaks behind them. Strokes are 1 px (pipe 1.5 px) with `vector-effect: non-scaling-stroke`. No literal colours.
- Annotations only state what the home page states: ASME BPE, USP <645> at the conductivity sensor, USP <643> at the TOC sensor, and the endotoxin fact (the home `facts` entry whose value contains "EU/mL") at the furthest point of use. Never add figures the page does not claim.
- The home hero has no photograph slot and no arc motif any more (the `aq-arc` styles remain for `AQ.ARC`). Its KeyFacts strip follows the grid.
- Phones: the drawing goes under the actions at up to 224 px wide (`space-32` + `space-24`), centred.

## Phones

The hero must fit about 1.5 phone screens including its facts, and the primary button must be in the first screen when the lead is 35 words or fewer (content budget).

- Padding `space-12` top and bottom. Headline: `display` 34/38, `display-xl` 40/44; lead 17/26.
- Order: eyebrow, headline, lead, actions, then the figure. The equipment figure is full width with its callouts above and below the drawing (see above); the KeyFacts strip lists one fact per row. The photograph placeholder is 2:1.
