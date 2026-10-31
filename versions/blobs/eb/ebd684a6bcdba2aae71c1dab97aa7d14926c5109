FaultList lists where things fail and what we design against; each failure opens to its cause and the design control.

- Data: a `table` block with `"as": "failures"`. `cols`: the failure column, then the columns revealed on open (usually "Usual cause", "What we design in"). `rows` as a table.
- Markup (`blocks/faults.js`): `.aq-faults` > native `details` (shared `name`, first one `open`) > `summary` (`.aq-index` with a small `fail` dot, `.aq-faults__t`, `.aq-faults__sign`) and `.aq-faults__body` (one `div` per revealed column: `.aq-faults__k` label, `.aq-faults__v` value). The last column carries a `flow` rule and label.
- Desktop: the revealed columns side by side under the failure; phones: stacked.
- Ground: a light sheet (reading). Name failures as the test that fails or the symptom ("Dryness value below 0.95"), never as a sentence.
- Not for questions (FAQ) or for options to choose (OptionList).
