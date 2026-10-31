Closing is the call to action at the end of every page: a very large headline in a framed panel on the navy band, one lead sentence, an optional proof readout with one confirmed figure, and the primary button.

## Markup

```html
<section class="aq-section aq-band--navy aq-closing"><div class="aq-in"><div class="aq-closing__frame">
  <h2 class="aq-closing__h">Send your fabrication spec. We mark it against ASME BPE.</h2>
  <div class="aq-closing__body">
    <p class="aq-lead">An engineer replies with the clauses we meet, the ones we would change and a draft inspection plan.</p>
    <div class="aq-closing__proof">
      <span class="aq-closing__tag">Proof</span>
      <span class="aq-closing__value">100 %</span>
      <span class="aq-closing__label">Welds visually examined · ASME BPE</span>
    </div>
  </div>
  <div class="aq-closing__action"><a class="aq-btn aq-btn--primary" href="#contact-proposal">Request a fabrication spec review <span class="aq-btn__arrow">→</span></a></div>
</div></div></section>
```

- Always on `aq-band--navy` (see Band): it sets the navy ground, `on-navy` text and turns the primary button Limestone.
- `aq-closing__body` holds an optional `aq-lead` and an optional `aq-closing__proof`. `aq-closing__action` holds exactly one primary button.
- On the site, `wClosing(c, p)` in `assets/src/parts/Closing.js` renders it from the page's `cta` (`h`, `body`, `button`, `link`, `intent`, `include`, `proof`). The proof box shows `cta.proof` (`{"v": "100 %", "l": "Welds visually examined · ASME BPE"}`) and nothing else; without `cta.proof` there is no proof box. It never falls back to the hero facts.

## Layout

- **Desktop:** the headline spans the frame at 88/92 px, weight 300, at most 18 characters per line. Below it, lead and proof sit on the left (7 of 12 columns); the button sits bottom right.
- **Phone** (`@container (max-width: 860px)`): one column, headline 40/44 px, checklist in one column, proof value 36/40 px, button left-aligned and allowed to wrap. Nothing overflows at 375 px.

## Token rules

- Frame: 1 px `on-navy-muted` at 35 % strength, `space-12` padding (`space-6` / `space-4` on phones), square corners, with two corner registration marks in `on-navy-muted`.
- Headline in `font-sans` 300, `on-navy`. Lead in `on-navy-muted`.
- Proof: 1 px `on-navy-muted` border at 60 %, `radius-0`. Tag in the eyebrow style (`font-mono` 12 px, uppercase), value in `font-mono` 300 and `limestone`, label in `font-mono` 14 px `on-navy-muted`.
- Contrast: `on-navy`, `on-navy-muted` and `limestone` all pass WCAG AA on `navy` in both themes.
- The closing band ends with a `line-strong` hairline so it stays distinct from the navy footer.

## Writing

- Headline: one sentence, sentence case, naming what the reader should send or ask for. Not a slogan.
- Lead: what to send and what comes back.
- Proof: set `cta.proof` only when one figure the page already states evidences what the closing asks for: an Aquemi commitment or a test we run ("100 % of welds visually examined" under "Send your fabrication spec"). A pharmacopoeia limit alone is not proof of anything we do; a count of system families is not proof either. Value with its unit, label with its standard. Never invent or round a number for this box, and never use a `[placeholder]` (`check` rejects it); leave the box out instead.

## When not to use it

- Only once per page, last before the footer. Never next to another navy band.
- Not for mid-page prompts; use a Button in the section instead.

Origin: concept J in `design-system/inspiration/`, generated in Gemini and rebuilt with Aquemi tokens (sentence case and Geist Light in place of the concept's condensed capitals).

## Checklist (`cta.include`)

An optional list of short strings on the page's `cta`, rendered under the body as a compact numbered checklist (two columns on desktop, one on phones), headed "What to send us" (override with `cta.include_label`).

```json
"cta": {"h": "Send your feed water analysis.", "body": "…", "button": "Request a sizing proposal", "link": "contact-proposal",
        "include": ["Feed water analysis, last 12 months", "Peak and average demand, L/h", "Lowest feed temperature"]}
```

```html
<div class="aq-closing__include"><p class="aq-closing__tag">What to send us</p>
  <ol><li><span class="aq-index" aria-hidden="true">01</span><span>Feed water analysis, last 12 months</span></li>…</ol></div>
```

- Use it to fold a page's "what to send us" docs block into the closing: one ask, in one place. Three to seven items, each 8 words or fewer.
- Rows on `on-navy-muted` hairlines at 30 % strength; text 15/22 `on-navy` (14/20 on phones); index in `on-navy-muted`.
