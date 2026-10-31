EvidenceMap maps each requirement or standard to how we meet it and the document that proves it, for the validation lead asking "where is the proof?".

- Data: a `table` block with `"as": "evidence"`. `cols`: requirement, how we meet it, then evidence columns. An evidence column whose every cell is a page link becomes the row's link; every other one becomes document tags (cells split on ";", first letter capitalized), labelled with the column name when there are several.
- Markup (`blocks/evidence.js`): `.aq-evidence` > `.aq-evidence__head` (column names, desktop only) and `ol.aq-evidence__rows` of `li.aq-evidence__row`: `h3.aq-evidence__t`, `p.aq-evidence__how`, `p.aq-evidence__proof` (`.aq-evidence__doc` tags in mono with a `line-strong` frame, optional `.aq-evidence__k` labels, `.aq-evidence__go` link), opened by a short `flow` leader line.
- Ground: a light sheet. Supports `fold`.
- For a list of documents without requirements use DocList; for standards alone, StandardsGrid.
