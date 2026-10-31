Closing is the call to action at the end of every page: one centred headline in the `h1` style on the navy band, one lead sentence and the primary button, with the brand's arc motif cut at the top-left edge. An optional checklist, send-and-return exchange or proof figure sits below the button.

## Markup

```html
<section class="aq-section aq-band--navy aq-closing">
  <svg class="aq-closing__arc" viewBox="0 0 300 220" aria-hidden="true"><path d="M0 218.5 A 218 218 0 0 1 218 0.5"/></svg>
  <div class="aq-in"><div class="aq-closing__frame">
    <h2 class="aq-closing__h">Tell us the water grade and the flow. We'll do the rest.</h2>
    <p class="aq-lead aq-closing__lead">Send your URS or a short brief and an engineer will reply with questions, not a sales script.</p>
    <div class="aq-closing__action"><a class="aq-btn aq-btn--primary" href="#contact-proposal">Request a proposal <span class="aq-btn__arrow">→</span></a></div>
    <div class="aq-closing__more">…checklist or exchange, then proof…</div>
  </div></div>
</section>
```

- Always on `aq-band--navy` (see Band): it sets the navy ground, `on-navy` text and turns the primary button Limestone.
- On the site, `wClosing(c, p)` in `assets/src/parts/Closing.js` renders it from the page's `cta` (`h`, `body`, `button`, `link`, `intent`, `include`, `returns`, `turnaround`, `proof`). `aq-closing__more` appears only when the page has a checklist, an exchange or `cta.proof`. The proof shows `cta.proof` and nothing else; it never falls back to the hero facts.
- The closing action can be a call (DR-006, contact-proposal: "Call [sales phone number]"): `"cta": {"button": "Call [sales phone number]", "link": "tel:[sales phone number]"}`. While the number is a placeholder the action is that line as plain `on-navy` text with the placeholder, no button and no link (`aq-btn--pending`, see Button); once the number is filled in both, it is the Limestone button and dials it.

## Layout

- **Desktop:** everything centred, the one place on the site where text is centred: headline (Geist 400, 40/46 px, -0.02em, sentence case) in `on-navy`, the lead (`body-lg`, at most 52 characters per line) in `on-navy-muted` `space-6` below, then the button. The arc is a single quarter-circle, 1.5 px `limestone` at 55 %, `min(30%, 300px)` wide, cut at the band's top-left corner. Below the button, under a faint hairline, a centred column (880 px max) holds the checklist or exchange and the proof, left-aligned.
- **Phone** (`@container (max-width: 860px)`): headline 30/36 px, the lead, a full-width button, then at most four send rows and the turnaround line. No returns list and no proof. The arc shrinks to 45 % of the width.
- No frame, title strip, registration marks, ruled boxes or plate: the navy ground, the one arc and hairlines do the work. The arc never animates.

## Token rules

- Ground: Navy depth, the brand book's gradient ground for the closing band (`linear-gradient(160deg, navy + 12 % on-navy, navy 45 %, navy + 30 % on-limestone)`), set on `.aq-closing.aq-band--navy`. Body text keeps 5.7:1 or better at every stop in both themes.
- Ground `navy` (from `aq-band--navy`); text `on-navy`, secondary text `on-navy-muted`. These stay light on navy in both themes (`ink-inverse` would turn dark in the dark theme).
- Hairlines: 1 px `on-navy-muted` at 30 % strength. Labels ("What to send us", "Proof") in the `eyebrow` style in `on-navy-muted`.
- Proof value in `font-mono` 300, 40/44 px, tabular figures, `on-navy`; its label 14/22 `on-navy-muted`.

## Writing

- Headline: one sentence, sentence case, naming what the reader should send or ask for. Not a slogan.
- Lead: what to send and what comes back.
- Proof: set `cta.proof` only when one figure the page already states evidences what the closing asks for: an Aquemi commitment or a test we run ("100 % of welds visually examined" under "Send your fabrication spec"). A pharmacopoeia limit alone is not proof of anything we do; a count of system families is not proof either. Value with its unit, label with its standard. Never invent or round a number for this box, and never use a `[placeholder]` (`check` rejects it); leave the box out instead.

## When not to use it

- Only once per page, last before the footer. Never next to another navy band.
- Not for mid-page prompts; use a Button in the section instead.

Origin: concepts 18 (closing) and 49 (send and return) in `design-system/inspiration/gemini/`, now set in the brand's plain closing band (no drawing frame or plate).

## Checklist (`cta.include`)

An optional list of short strings on the page's `cta`, rendered as a compact numbered checklist (below the button), headed "What to send us" (override with `cta.include_label`).

```json
"cta": {"h": "Send your feed water analysis.", "body": "…", "button": "Request a sizing proposal", "link": "contact-proposal",
        "include": ["Feed water analysis, last 12 months", "Peak and average demand, L/h", "Lowest feed temperature"]}
```

```html
<div class="aq-closing__include"><p class="aq-closing__tag">What to send us</p>
  <ol><li><span class="aq-index" aria-hidden="true">01</span><span>Feed water analysis, last 12 months</span></li>…</ol></div>
```

- Use it to fold a page's "what to send us" docs block into the closing: one ask, in one place. Three to seven items, each 8 words or fewer.
- Rows on `on-navy-muted` hairlines at 30 % strength; text 16/24 `on-navy` (14/22 on phones); index in `on-navy-muted`.

## Exchange (`cta.returns`, `cta.turnaround`)

With `cta.returns` (two to four strings, each a document or answer the page already promises: "Skid sizing for your coldest feed", "Budget range, CAD") the checklist becomes an exchange below the button: what you send, an arrow with `cta.turnaround` (a placeholder until confirmed, `[proposal response time, working days]`), and what comes back, numbered like the send rows. `cta.returns_label` overrides "What comes back". Markup: `.aq-closing__swap` > `.aq-closing__include`, `p.aq-closing__turn`, `.aq-closing__include.aq-closing__returns`. Phones: the send rows and the turnaround line only. Never list a return the page doesn't already promise.

## Motion

Motion (`Closing/motion.js`, plays once when the band scrolls in): the frame unrolls, the title strip decodes, the headline lines rise out of a mask, the lead follows; then the exchange runs in order: the send rows list themselves, the turnaround arrow shoots across, the returns land document by document, and the button arrives last with one nudge of its arrow. A proof figure counts up only when it is a plain number. Skipped under reduced motion.
