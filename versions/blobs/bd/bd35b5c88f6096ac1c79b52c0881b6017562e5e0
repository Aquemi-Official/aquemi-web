Closing is the call to action at the end of every page: a very large headline in a framed panel on the navy band, one lead sentence, one proof readout with a confirmed figure from the page, and the primary button.

## Markup

```html
<section class="aq-section aq-band--navy aq-closing"><div class="aq-in"><div class="aq-closing__frame">
  <h2 class="aq-closing__h">Compare a still against your utility costs.</h2>
  <div class="aq-closing__body">
    <p class="aq-lead">Send your WFI demand and steam, power and cooling water costs and we'll model both still types.</p>
    <div class="aq-closing__proof">
      <span class="aq-closing__tag">Proof</span>
      <span class="aq-closing__value">&lt; 0.25 EU/mL</span>
      <span class="aq-closing__label">Bacterial endotoxins · USP &lt;85&gt;</span>
    </div>
  </div>
  <div class="aq-closing__action"><a class="aq-btn aq-btn--primary" href="#contact-proposal">Request a proposal <span class="aq-btn__arrow">→</span></a></div>
</div></div></section>
```

- Always on `aq-band--navy` (see Band): it sets the navy ground, `on-navy` text and turns the primary button Limestone.
- `aq-closing__body` holds an optional `aq-lead` and an optional `aq-closing__proof`. `aq-closing__action` holds exactly one primary button.
- On the site, `wClosing(c, p)` in `assets/src/parts/Closing.js` renders it from the page's `cta` (`h`, `body`, `button`, `link`). The proof shows the page's first `facts` item whose value is confirmed (no `[placeholder]`); a page with no such fact gets no proof box.

## Layout

- **Desktop:** the headline spans the frame at 88/92 px, weight 300, at most 18 characters per line. Below it, lead and proof sit on the left (7 of 12 columns); the button sits bottom right.
- **Phone** (`@container (max-width: 860px)`): one column, headline 40/44 px, proof value 36/40 px, button left-aligned and allowed to wrap. Nothing overflows at 375 px.

## Token rules

- Frame: 1 px `on-navy-muted` at 35 % strength, `space-12` padding (`space-6` / `space-4` on phones), square corners, with two corner registration marks in `on-navy-muted`.
- Headline in `font-sans` 300, `on-navy`. Lead in `on-navy-muted`.
- Proof: 1 px `on-navy-muted` border at 60 %, `radius-0`. Tag in the eyebrow style (`font-mono` 12 px, uppercase), value in `font-mono` 300 and `limestone`, label in `font-mono` 14 px `on-navy-muted`.
- Contrast: `on-navy`, `on-navy-muted` and `limestone` all pass WCAG AA on `navy` in both themes.
- The closing band ends with a `line-strong` hairline so it stays distinct from the navy footer.

## Writing

- Headline: one sentence, sentence case, naming what the reader should send or ask for. Not a slogan.
- Lead: what to send and what comes back.
- Proof: only a figure the page already states, with its unit and standard. Never invent or round a number for this box; leave it out instead.

## When not to use it

- Only once per page, last before the footer. Never next to another navy band.
- Not for mid-page prompts; use a Button in the section instead.

Origin: concept J in `design-system/inspiration/`, generated in Gemini and rebuilt with Aquemi tokens (sentence case and Geist Light in place of the concept's condensed capitals).
