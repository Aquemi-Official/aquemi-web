Buttons start an action or move someone to the next step of an enquiry.

Use classes on a `<button>` or `<a>`; the consumer provides the label and, for links, the `href`.

| Variant | Class | When |
| --- | --- | --- |
| Primary | `aq-btn aq-btn--primary` | The one main action in a view: "Request a proposal", "Submit request". One per screen region. |
| Secondary | `aq-btn aq-btn--secondary` | Alternatives beside a primary: "Download datasheet". |
| Link | `aq-btn aq-btn--link` | Low-emphasis navigation: "Explore systems →". Uses `flow`. No padding; 44 px tall on phones so it stays a touch target. |

- Labels are sentence-case verbs, two to four words. Avoid "Click here", and avoid a bare "Submit" when a specific verb fits.
- An arrow (`<span class="aq-btn__arrow">→</span>`) is allowed on primary and link buttons that navigate. It nudges 3 px on hover.
- A button that routes to an enquiry form may carry `data-intent="<option label>"` to pre-select that request type on arrival (see EnquiryForm, "Pre-set from the linking page").
- On the site, `wBtn` in `assets/src/parts/Button.js` builds every hero, closing and contact-route button, the hero's link button included, and the link variant under an FAQ answer and in a form note. Its link is a page id, `page#anchor` (opens that page at the block with that `anchor`: `systems#budget`), `#anchor` (scrolls to that block on the same page) or `tel:` (a call, below). An intent rides on a link to another page (the hero's `primary_cta_intent` and `secondary_cta.intent`, the closing's `cta.intent`, a contact route's, an FAQ item's or a form note's `intent`) and on an `#anchor` jump: `<a class="aq-btn aq-btn--primary" href="#careers" data-jump="apply" data-intent="Speculative application">`. The jump ticks those options on the form in the block it lands on, in place, keeping what the visitor has typed (EnquiryForm, "Pre-set from the same page"). A call carries none.
- **Call** (DR-006: "Call [sales phone number]"): a link written `tel:<number>` dials, under the phone rule the NavBar and Footer use (`wnum` and `wtel` in `core.js`). While the number is still a `[placeholder]` the button is not a link: `<span class="aq-btn aq-btn--pending">Call <span class="aq-ph">[sales phone number]</span></span>`, the label as plain text in the ground's colour (on the navy closing, `on-navy`), no fill, frame or arrow, so the draft shows the gap and nothing pretends to dial. Once confirmed it is `<a class="aq-btn aq-btn--primary" href="tel:<digits>">` (its own variant, the closing's primary on navy turns Limestone), no arrow since it opens no page, the number's digit groups kept on one line. Write the number in the label as well as the link, under the same placeholder name, and fill both in the same commit; a label that leaves the number out gets it added after the label. In page content: `"cta": {"button": "Call [sales phone number]", "link": "tel:[sales phone number]"}`, or `primary_cta_link` / `secondary_cta.link` the same way. A call carries no intent.
- Disabled buttons use the `disabled` attribute; say why nearby.
- Height is 44 px, which meets the touch-target size without extra padding.

## Motion

Motion: the arrow slides 4 px on hover and keyboard focus. Pass 9b (`Button/motion.js`, ported from Subframe Motion):
- **Press depth** (`press-depth`), every button but the link variant: on press the button sinks 1 px, shrinks to 0.97 and tips up to 3° toward the point pressed (`--aq-px`, `--aq-py`), 60 ms down, 180 ms back; the arrow pulls back.
- **Magnetic pull** (`magnetic-button`), primary only, fine pointers only: while the pointer is over the button or within 28 px of it the button leans toward it (offset × max(0, 1 − d/160) × 0.28, `--aq-mx`, `--aq-my`), and springs back when it leaves.
- **Label roll** (`slide-text-button`), secondary only (not the menu toggle), fine pointers only: the label slides up out of the button as its copy rolls in from below, 200 ms in, 140 ms back. The copy is a text-shadow, so the button keeps one label for screen readers.
No loops, no shimmer. Under reduced motion none of it runs and the press is a plain state change.
