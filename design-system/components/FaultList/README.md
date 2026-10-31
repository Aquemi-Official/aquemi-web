FaultList lists where things fail and what we design against; each failure opens to its cause and the design control.

- Data: a `table` block with `"as": "failures"`. `cols`: the failure column, then the columns revealed on open (usually "Usual cause", "What we design in"). `rows` as a table.
- Markup (`blocks/faults.js`): `.aq-faults` > native `details` (shared `name`, first one `open`) > `summary` (`.aq-index` with a small `fail` dot, `.aq-faults__t`, `.aq-faults__sign`) and `.aq-faults__body` (one `div` per revealed column: `.aq-faults__k` label, `.aq-faults__v` value). The last column carries a `flow` rule and label.
- Drawing: a ruled register like the concept sheet. Each failure is its own `line-strong` frame: mono index cell (with the `fail` dot) split by a rule from the failure at 22 px. The open row's head fills with `flow` (text `surface`); under it each revealed column is a framed cell with a `surface-sunken` header strip naming the column, the index column left as an empty ruled gutter.
- Desktop: the revealed columns side by side under the failure; phones: the same frames at 17 px, columns stacked.
- Ground: a light sheet (reading). Name failures as the test that fails or the symptom ("Dryness value below 0.95"), never as a sentence.
- Not for questions (FAQ) or for options to choose (OptionList).
- Supports `fold: N` (first N failures show, the rest behind "Show all N risks").

## Motion

`motion.js`: the failures rise in order, then the open one unfolds, its cause column first and the design answer after it. Opening another failure unfolds it the same way (visitor-driven, so it may repeat). Nothing under reduced motion.
