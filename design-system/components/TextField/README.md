Text fields collect enquiry and service-request details.

- Markup: `<div class="aq-field">` holding a `<label class="aq-field__label">`, an `<input class="aq-field__input">` and an optional `<p class="aq-field__help">`. The consumer provides the `id`, `for`, `name` and validation.
- For quantities with units (capacity in L/h, temperature in °C), wrap the input in `aq-field__suffix` and add `<span class="aq-field__unit">`. The value is set in mono.
- Errors: add `is-error` to the field, `aria-invalid="true"` to the input, and a `<p class="aq-field__error">` (joined by `aria-describedby`) saying what went wrong and how to fix it: "Enter a capacity between 100 and 50,000 L/h."
- Labels sit above fields in sentence case. Placeholder text shows an example, never the label.

## Focus and error states

States: focus turns the border and the label (and its 1.1 reference) `flow`, with the keyboard ring outside; an error (`is-error`) takes a `fail` border with a 3 px `fail` edge and one `aq-field__error` line under the field (a filled `!` mark and what to fix: "Required.", "Enter an email address, like name@company.com."); in a checkbox group every option cell takes the `fail` border. Colour transitions are 120 ms and off under reduced motion. The help text stays muted beside an error.
