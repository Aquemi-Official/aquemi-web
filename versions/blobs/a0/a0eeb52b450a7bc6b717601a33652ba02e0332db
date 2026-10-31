FaultList lists where things fail and what we design against; each failure opens to its cause and the design control.

- Data: a `table` block with `"as": "failures"`. `cols`: the failure column, then the columns revealed on open (usually "Usual cause", "What we design in"). `rows` as a table.
- Markup (`blocks/faults.js`): `.aq-faults` > native `details` (shared `name`, first one `open`) > `summary` (`.aq-index`, `.aq-faults__t`, `.aq-faults__sign`) and `.aq-faults__body` (one `div` per revealed column: `.aq-faults__k` label, `.aq-faults__v` value). The last column opens on a `flow` hairline.
- Look: a list on `line` hairlines, no frames or fills. Each row: the shared mono index (`flow` when open), the failure at `h3` (Geist 500 20/28, sentence case), a mono +/− sign in `ink-muted`; the whole summary is at least 44 px tall. Open, each revealed column sits under a `line` hairline led by an `eyebrow` (the column name), its text in Geist 16/26; the last column (the design control) opens on a `flow` hairline. Status colours are not used: a failure is named in words, not by a red dot.
- Desktop: the revealed columns side by side under the failure, aligned with its text; phones: failures at 18/26, columns stacked.
- Ground: the section's `surface`, in either theme. Name failures as the test that fails or the symptom ("Dryness value below 0.95"), never as a sentence.
- Not for questions (FAQ) or for options to choose (OptionList).
- Supports `fold: N` (first N failures show, the rest behind "Show all N risks").

## Motion

`motion.js`: the failures rise in order, then the open one unfolds, its cause column first and the design answer after it. Opening another failure unfolds it the same way (visitor-driven, so it may repeat). Nothing under reduced motion.
