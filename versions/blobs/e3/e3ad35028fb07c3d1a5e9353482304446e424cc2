Closing is the call to action at the end of every page: a very large headline in condensed capitals in a framed panel on the navy band, one lead sentence, an optional checklist or send-and-return exchange, an optional proof readout with one confirmed figure, and the primary button.

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

## Layout (concepts 18 and 49)

- Markup order inside `aq-closing__frame`: `aq-closing__strip` (three ruled mono cells, `aria-hidden`: "Aquemi", "Next step · page", the step), `h2.aq-closing__h`, `aq-closing__body` (only when there is a body or a list: the `aq-lead`, then the checklist or the exchange plate), then `aq-closing__foot` (proof, then `aq-closing__action`).
- **Desktop:** headline in `font-display` 600 caps, 60 to 96 px, at most 16 characters per line; the lead in a ruled box. With a checklist or an exchange the frame becomes two columns (4 : 8): headline, lead, proof and button on the left, the list (or the plate) on the right, so the band stays under about 650 px. The exchange sits on a cream Plate (`wPlate(…, {light: true, cls: "aq-closing__plate", block: ["Aquemi", "Send", "Return"]})`): two ruled tables with a header cell, numbered send rows, return rows each with a small document drawing (`aq-closing__doc is-1` to `is-4`: chart, flow, table, list), and between them the turnaround in a heavy ruled box with an arrowhead. The button is the Limestone primary at closing scale (`font-display` caps 24 to 26 px, 64 px tall).
- **Phone** (`@container (max-width: 860px)`): compact and plain, about 500 px. No strip, frame boxes, plate, returns or proof: the headline (44 px caps), the lead, at most four send rows on hairlines, the turnaround line and a full-width button.

## Writing

- Headline: one sentence, sentence case, naming what the reader should send or ask for. Not a slogan.
- Lead: what to send and what comes back.
- Proof: set `cta.proof` only when one figure the page already states evidences what the closing asks for: an Aquemi commitment or a test we run ("100 % of welds visually examined" under "Send your fabrication spec"). A pharmacopoeia limit alone is not proof of anything we do; a count of system families is not proof either. Value with its unit, label with its standard. Never invent or round a number for this box, and never use a `[placeholder]` (`check` rejects it); leave the box out instead.

## When not to use it

- Only once per page, last before the footer. Never next to another navy band.
- Not for mid-page prompts; use a Button in the section instead.

Origin: concepts 18 (closing) and 49 (send and return) in `design-system/inspiration/gemini/`, rebuilt with Aquemi tokens.

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

## Exchange (`cta.returns`, `cta.turnaround`)

With `cta.returns` (two to four strings, each a document or answer the page already promises: "Skid sizing for your coldest feed", "Budget range, CAD") the checklist becomes an exchange across the full width of the frame: what you send, an arrow labelled with `cta.turnaround` (a placeholder until confirmed, `[proposal response time, working days]`), and what comes back, each return with a small document mark (`.aq-closing__doc`). `cta.returns_label` overrides "What comes back". Markup: `.aq-closing__swap` > `.aq-closing__include`, `p.aq-closing__turn`, `.aq-closing__include.aq-closing__returns`. Phones: stacked, the arrow pointing down. Never list a return the page doesn't already promise.
