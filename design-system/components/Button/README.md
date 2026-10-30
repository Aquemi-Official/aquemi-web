Buttons start an action or move someone to the next step of an enquiry.

Use classes on a `<button>` or `<a>`; the consumer provides the label and, for links, the `href`.

| Variant | Class | When |
| --- | --- | --- |
| Primary | `aq-btn aq-btn--primary` | The one main action in a view: "Request a proposal", "Submit request". One per screen region. |
| Secondary | `aq-btn aq-btn--secondary` | Alternatives beside a primary: "Download datasheet". |
| Link | `aq-btn aq-btn--link` | Low-emphasis navigation: "Explore systems →". Uses `flow`. |

- Labels are sentence-case verbs, two to four words. Avoid "Click here", and avoid a bare "Submit" when a specific verb fits.
- An arrow (`<span class="aq-btn__arrow">→</span>`) is allowed on primary and link buttons that navigate. It nudges 3 px on hover.
- Disabled buttons use the `disabled` attribute; say why nearby.
- Height is 44 px, which meets the touch-target size without extra padding.
