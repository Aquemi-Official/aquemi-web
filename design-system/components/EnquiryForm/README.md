EnquiryForm lays out a proposal, service or application request as a numbered data sheet on a quiet panel: numbered sections, numbered items and one submit.

Origin: concept L in design-system/inspiration/ (`concept-l-form.png`), rebuilt with Aquemi tokens for light and dark, without the concept's drawing frame, ruler ticks and revision strip.

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
</form>
```

- Fields are TextField markup (`aq-field`, a real `<label for>`). Fields that need the full width (message, checkbox groups) add `aq-form__full`.
- Each numbered section is a `<fieldset class="aq-form__section">` with a `<legend class="aq-form__legend">`; the number (`1.0`) is part of the legend. Item numbers (`aq-form__ref`, `1.1`) sit inside the label and are `aria-hidden`.
- Mark optional fields, not required ones: `<span class="aq-field__optional">(optional)</span>`. Required inputs carry `required`; the form keeps `novalidate`, so the consumer provides validation and submission.
- Help text gets an `id` and the input points at it with `aria-describedby`. A select's first option is `<option value="">Choose…</option>`.
- The title row counts sections and required fields.
- The submit label says what happens: "Request a proposal", "Submit service request". One `aq-btn--primary` per form.

- Radio group (one answer): the checkbox-group markup with `type="radio"` and a shared `name`.
- File upload: `<input class="aq-field__file" type="file" multiple>` in a full-width `aq-field` (a `surface-sunken` field with a `line` border and `radius-sm`; the browser button drawn as a secondary button through `::file-selector-button`, the chosen file names in mono 13/20 `ink-muted`), always optional, with help text naming the formats and saying files can be sent later.
- Conditional field: add `data-when="<option label>"` and `hidden`; the site shows it only while that option is ticked (for example pure steam capacity when "Pure steam generator" is chosen).
- Several triggers: separate option labels with `|` (`data-when="Sizing and budget proposal|Route assessment"`); the field shows while any of them is ticked. A tick inside a hidden conditional field does not count, so a follow-up question hides with its parent (for example an intent radio at the top of the form that reveals a sub-choice, which in turn reveals its own fields). Never use a label that repeats across groups, such as "Not sure yet", as a trigger.
- Pre-set from the linking page: a button that routes to a page with a form can carry `data-intent="<option label>|<option label>"` (in page content: hero `primary_cta_intent`, closing `cta.intent`). On arrival the form ticks those options and opens the conditional fields they trigger, with the same cascade rule, so a visitor from the feedwater page lands on "Feedwater review" with its questions showing. Every label must be an option of a radio or checkbox group on the target form (`python tools/design_system.py check` flags any that are not). The visitor can still change the choice.
- Steps, for long intake forms: `<form class="aq-form aq-form--steps">` keeps the data sheet's title row, adds `<ol class="aq-form__progress">` (one `<li>` per step, `aria-current="step"` on the active one), and makes each step one numbered section: `<fieldset class="aq-form__section aq-form__step" data-step="0">` with `<legend class="aq-form__legend"><span class="aq-form__num">1.0</span> Step 1 of 3: System scope</legend>`, its fields in `aq-form__grid` numbered 1.1, 1.2 … Inactive steps carry `hidden`. Each step ends in an `aq-form__actions` with Back (`aq-btn--secondary`) and Continue (`data-step-go="<index>"`); only the last has the submit. Technical questions first, contact details last; three steps at most. On the site, a form block with `steps` renders this way.

## Site renderer

`assets/src/blocks/form.js` builds this from a page's `form` block (fields from `assets/src/parts/EnquiryForm.js`).

- Section 1.0 holds the requirement fields: "System data" when any field has a unit, otherwise "Details".
- The trailing run of contact fields (labels with name, company, role, email, phone, site or contract) becomes 2.0: "Site and contact" when a site field is in it, otherwise "Contact". A form with no trailing contact run stays one section.
- A field with `"section": "<legend>"` starts a new section; a block-level `"sections": [..]` renames them in order.
- `name` is the label as a slug (`required-capacity`). The `wform` class and `wform-msg` status are hooked by `index.html` to show the draft-site message on submit; nothing is sent.

## Layout

- **Desktop:** a `surface-raised` panel with one 1 px `line` border and `space-8` padding; the title row over a `line` hairline; each section a legend then a two-column field grid; the submit band under a `line` hairline.
- **Phone** (`@container (max-width: 860px)`): `space-6` / `space-4` padding, one column, full-width submit.

## Token rules

- Panel on `surface-raised`, 1 px `line`, no shadow. Title row in the `eyebrow` style (mono 12/16, 500, 0.08em, uppercase, `ink-muted`) over a `line` hairline.
- Section legends in the `h3` style (Geist 500 20/28, 18/26 on phones), sentence case, with the section number in mono 13 `ink-subtle`; item numbers mono 12 `ink-subtle`.
- Checkbox options are 44 px cells on `surface` with a `line` border and `radius-sm`; a ticked cell gets a `flow` border. That is the only accent. The current step in the progress list is underlined in `flow`.
- Inputs keep TextField sizing and radius (44 px tall, `radius-sm`, 2 px `focus` ring with 2 px offset).

## When not to use

Not for a one-field signup in a footer or a search box; those don't need a data sheet.

## Motion

Motion (`motion.js`): the sheet is drawn up on scroll-in (title rule rules across, progress steps and legends wipe in with numbers decoding, fields rise in reading order, revision strip last). In the stepped form the current step is underlined in `flow` (passed steps read in ink); with motion the underline is one marker that slides to the new step with Flip, and the new step slides in from the side it was asked for. Validation (`parts/EnquiryForm.js`, works without motion): a field is checked when the visitor leaves it after typing and live while it shows an error; Continue and Send check every visible field, do not advance, move focus to the first problem and show an `aq-field__error` line under each (joined by `aria-describedby`, inputs `aria-invalid`); Send also says how many need attention. A blocked Continue or Send fires `aq:invalid` and the motion layer gives those fields one short shake.
