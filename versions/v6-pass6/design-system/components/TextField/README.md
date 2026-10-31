Text fields collect enquiry and service-request details.

- Markup: `<div class="aq-field">` holding a `<label class="aq-field__label">`, an `<input class="aq-field__input">` and an optional `<p class="aq-field__help">`. The consumer provides the `id`, `for`, `name` and validation.
- For quantities with units (capacity in L/h, temperature in °C), wrap the input in `aq-field__suffix` and add `<span class="aq-field__unit">`. The value is set in mono.
- Errors: add `is-error` to the field and replace the help text with what went wrong and how to fix it: "Enter a capacity between 100 and 50,000 L/h."
- Labels sit above fields in sentence case. Placeholder text shows an example, never the label.
