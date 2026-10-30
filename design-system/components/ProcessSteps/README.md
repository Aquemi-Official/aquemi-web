ProcessSteps shows the project sequence as numbered columns.

- Use it only for a genuine order: Design → Fabricate → Test → Qualify → Support, or IQ → OQ → PQ. CSS generates the numbers.
- Markup: `<div class="aq-steps">` with one `<div>` per step holding `<span class="aq-h3">` and `<span class="aq-small">`.
- Three to six steps. Columns wrap at 170 px, so they stack on phones.
- Name each step with a verb or the document it produces (URS, FDS, FAT report).
