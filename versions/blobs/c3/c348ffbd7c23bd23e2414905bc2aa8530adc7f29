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
- Disabled buttons use the `disabled` attribute; say why nearby.
- Height is 44 px, which meets the touch-target size without extra padding.

## Motion

Motion: the arrow slides 4 px on hover and keyboard focus; on press the button sinks 1 px (`translateY(1px) scale(0.985)`) and the arrow pulls back, like a key going down. CSS transitions only, all dropped under reduced motion.
