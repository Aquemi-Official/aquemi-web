EnquiryForm lays out a proposal, service or application request as an engineering specification data sheet: a drawn frame, numbered sections, numbered items and one submit.

Origin: concept L in design-system/inspiration/ (`concept-l-form.png`), rebuilt with Aquemi tokens for light and dark.

## Markup

```html
<form class="aq-form" novalidate>
  <p class="aq-form__title"><span>Data sheet</span><span>2 sections · 6 required</span></p>
  <fieldset class="aq-form__section">
    <legend class="aq-form__legend"><span class="aq-form__num">1.0</span> System data</legend>
    <div class="aq-form__grid">
      <div class="aq-field">
        <label class="aq-field__label" for="ef-stage"><span class="aq-form__ref" aria-hidden="true">1.1</span>Project stage</label>
        <select class="aq-field__input" id="ef-stage" name="project-stage" required>…</select>
      </div>
      <fieldset class="aq-fieldset aq-field aq-form__full">
        <legend class="aq-field__label"><span class="aq-form__ref" aria-hidden="true">1.2</span>System type</legend>
        <div class="aq-checks"><label><input type="checkbox" name="system-type" value="…"> …</label></div>
      </fieldset>
    </div>
  </fieldset>
  <fieldset class="aq-form__section">…2.0 Site and contact…</fieldset>
  <div class="aq-form__actions"><button class="aq-btn aq-btn--primary aq-form__submit" type="submit">Request a proposal</button><span class="aq-small" role="status"></span></div>
  <div class="aq-form__strip" aria-hidden="true"><span>Rev. draft</span><span>16 fields</span><span>Sheet 1 of 1</span></div>
</form>
```

- Fields are TextField markup (`aq-field`, a real `<label for>`). Fields that need the full width (message, checkbox groups) add `aq-form__full`.
- Each numbered section is a `<fieldset class="aq-form__section">` with a `<legend class="aq-form__legend">`; the number (`1.0`) is part of the legend. Item numbers (`aq-form__ref`, `1.1`) sit inside the label and are `aria-hidden`.
- Mark optional fields, not required ones: `<span class="aq-field__optional">(optional)</span>`. Required inputs carry `required`; the form keeps `novalidate`, so the consumer provides validation and submission.
- Help text gets an `id` and the input points at it with `aria-describedby`. A select's first option is `<option value="">Choose…</option>`.
- The title row counts sections and required fields. The revision strip is decorative (`aria-hidden`) and never carries a fact the reader needs.
- The submit label says what happens: "Request a proposal", "Submit service request". One `aq-btn--primary` per form.

## Site renderer

`assets/src/blocks/form.js` builds this from a page's `form` block (fields from `assets/src/parts/EnquiryForm.js`).

- Section 1.0 holds the requirement fields: "System data" when any field has a unit, otherwise "Details".
- The trailing run of contact fields (labels with name, company, role, email, phone, site or contract) becomes 2.0: "Site and contact" when a site field is in it, otherwise "Contact". A form with no trailing contact run stays one section.
- A field with `"section": "<legend>"` starts a new section; a block-level `"sections": [..]` renames them in order.
- `name` is the label as a slug (`required-capacity`). The `wform` class and `wform-msg` status are hooked by `index.html` to show the draft-site message on submit; nothing is sent.

## Layout

- **Desktop:** a `line-strong` frame with an inner `line` rule, ruler ticks along the top and left edges (major every 96 px, minor every 24 px), a two-column field grid in each section, the submit band above the revision strip.
- **Phone** (`@container (max-width: 860px)`): narrower frame, ticks on the top edge only, one column, full-width submit.

## Token rules

- Sheet on `surface-raised`; section legends on `surface-sunken` between a `line-strong` and a `line` rule; title row underlined in `ink`.
- Numbers and the strip in `font-mono` at 12–13 px; section numbers in `flow`, item numbers in `ink-subtle`.
- Checkbox options are 44 px cells on `surface` with a `line` border; a ticked cell gets a `flow` border on `flow-tint` with a 2 px `flow` left edge. That is the only accent.
- Inputs keep TextField sizing (44 px tall, 2 px `focus` ring with 2 px offset) with `radius-0` inside the sheet.

## When not to use

Not for a one-field signup in a footer or a search box; those don't need a data sheet frame.
