StageStacks draws what each project stage issues as the document file building up: the stages stand on one project axis, each stage's documents stacked above it as sheets of paper, its name, clause and who approves under the axis.

- On the site: a `table` block (`as: "evidence"`) with `"look": "stage-stacks"` (renderer `assets/src/blocks/look-stage-stacks.js`), cmp-documentation "What each stage issues". Origin: no concept of its own; adapted from 60-concept-project-record (the order-to-release timeline) with 51-concept-turnover-binder's paper, as a data-viz on navy.
- Markup: section `aq-band--navy aq-stage-stacks-sec` > `<div class="aq-stage-stacks" style="--n">` > (Fold) `ol.__list` > `li.__stage` > `__head` (`__k`, `h3.__name` > `__no`, `__nm`, `__ref`), `__pile` (`__k`, `ul.__docs` > `li.__doc`), `__axis` (`__run`, `__node`), `__who` (`__k`, `p.__step`). Stages share the list's rows through `subgrid`, so every stack stands on the same axis.
- Fields: `cols [stage, your step and who approves, documents issued]`, `rows [[stage, step, documents]]` (strings or `{t, link}`), `fold`, `fold_noun`. A stage cell "Name · clause" sets the clause under the name; documents split at ";".
- Tokens: `navy` ground, `limestone` sheets (alternate sheets mixed with `on-navy`), `on-navy` / `on-navy-muted` text, the axis the only `flow` line. Column names label the three bands once, left of the first stage (hidden below 1100 px container width; each stage labels its own on phones).
- Fold: phones only.
- Phone: the axis runs down the left, each stage's sheets wrap beside it, then its step.
- Motion (`motion.js`): the water runs the axis stage by stage; at each node the sheets drop onto the stack bottom up and the name and step wipe in. Once, about 3.5 s.
- Not for: a sequence without documents per step (ProcessSteps), or requirements traced to tests (TraceLines).
