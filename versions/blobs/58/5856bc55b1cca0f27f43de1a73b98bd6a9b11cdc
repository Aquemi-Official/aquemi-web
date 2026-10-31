Band sets one short statement very large in a framed panel on a limestone or sunken ground, with a supporting line and a faint pipework drawing at the right; its ground modifiers (`aq-band--limestone`, `aq-band--sunken`, `aq-band--navy`) also change the ground for other sections.

## Markup

```html
<section class="aq-section aq-band--limestone aq-band"><div class="aq-in"><div class="aq-band__frame">
  <div class="aq-band__text">
    <h2 class="aq-band__h">One file, many <span class="aq-band__mark">auditors</span></h2>
    <p class="aq-lead aq-band__lead">We organize the turnover package by the questions auditors ask …</p>
  </div>
  <svg class="aq-band__motif" viewBox="0 0 240 320" preserveAspectRatio="xMaxYMid meet" aria-hidden="true" focusable="false">…</svg>
</div></div></section>
```

- `aq-band` plus one ground modifier on `<section class="aq-section">`. The statement band uses `aq-band--limestone` (default) or `aq-band--sunken`.
- `aq-band__frame` draws the panel. Its top and bottom strips (a hairline and a short run of ruler ticks) are CSS only and carry no text: no section numbers, no "previous / next" labels.
- `aq-band__mark` is optional and frames one word or phrase with corner brackets. Use it only when the content names that word.
- `aq-band__motif` is decoration: `aria-hidden`, a schematic of pipes, a valve and two blank instrument boxes, with no tags, values or labels. Never put readings, numbers or text in it. Copy the SVG from `assets/src/blocks/band.js` (`BAND_MOTIF`).
- On the site: block type `band` with `h`, `body`, `tone` (`limestone` or `sunken`) and an optional `mark` naming the word or phrase in `h` to frame (`"mark": "auditors"`). The renderer wraps the first whole-word match; if `mark` isn't found in `h`, nothing is framed. No page sets `mark` yet.

### Ground modifiers on their own

- `aq-band--sunken` for standard tags and the documentation list (StandardsGrid, DocList). `aq-band--limestone` for the statement band. `aq-band--navy` for the dark ground; Closing uses it.
- Text on navy uses `on-navy` and `on-navy-muted`. A primary button inside a navy band turns Limestone with navy text automatically.

## Layout

- **Desktop:** frame with `space-12` side padding and `space-8` strips top and bottom. Statement up to 20 characters per line within 75 % of the frame, lead below it. The drawing fills the right 34 % of the frame height and fades to nothing towards the text.
- **Phone** (`@container (max-width: 860px)`): `space-4` side padding, `space-6` strips, statement full width, lead 16/24 px. The drawing drops to the lower right corner at lower strength. Nothing overflows at 375 px.

## Token rules

- Statement: `font-sans` 300, `clamp(44px, 6.4cqi, 80px)` on desktop and `clamp(30px, 9.5cqi, 44px)` on phones, line-height 1.08, sentence case. Lead is `aq-lead` and takes the ground's muted colour (`on-limestone-muted` on limestone, `ink-muted` on sunken).
- Frame, strips, ticks, brackets and drawing are all drawn in `currentColor` (frame and strips at 35 %, ticks at 45 %, drawing at 40 %), so they follow `on-limestone` on limestone and `ink` on sunken in both themes. Square corners (`radius-0`).
- Mark brackets: 2 px, 0.22 em long, at the four corners of the word.

## Writing

- Statement: one sentence that states a commitment or a fact, as the page data gives it. No slogans, no exclamation marks.
- Lead: one or two sentences with the evidence: the standard, the number with its unit, or what the reader gets.
- Facts only Aquemi can supply stay in `[square brackets]`.

## When not to use it

- Never two bands touching, and not more than one statement band per page.
- Not for a call to action at the end of the page: that is Closing.
- Not for long text, lists or tags; use a normal section.

Origin: concept P in `design-system/inspiration/`, generated in Gemini and rebuilt with Aquemi tokens (Geist Light in sentence case in place of the concept's condensed capitals; the concept's section numbers, "SYS_REF" tags and percentage values dropped as invented data).

## Motion

Motion: no own choreography. The navy, sunken and limestone grounds are static; the statement band's pipework motif draws on through the generic motion layer, and the Closing on the navy band has its own (`Closing/motion.js`).
