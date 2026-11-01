IssuedSet shows the documents you receive as the issued set itself, dealt onto a desk: each document a sheet of paper at a slight turn with its code large, a miniature of what it looks like, its name and text, and a round stamp of the qualification step that uses it.

- On the site: a `docs` block with `"look": "issued-set"` (renderer `assets/src/blocks/look-issued-set.js`), svc-design "What you receive". No concept of its own (Gemini quota); adapted from `research/pass9/concepts/sys-pw.4.png` (a flat-lay of physical objects, one per option).
- Markup: `section.aq-issued-set-sec` → `div.aq-issued-set` → `ol.__desk` (`--n` columns, at most 4) of `li.__sheet` (`data-theme="light"`, `is-key`): `__hd` (`__code`, `__no`), `__fig` (`svg.__mini` aria-hidden, `__use` stamp), `h3.__t` (the item's link if any), `p.__d`, `__tb` (title block). Optional block link → `p.__more` with a Button.
- Fields (a docs block): `h`, `intro`, `items` [{`t`, `d`, `code`, `key`, `link`, `intent`, `sheet`, `use`}], `link`, `link_label`, `intent`, `fold`, `fold_noun`. `sheet` (optional): `matrix`, `pid`, `spec`, `report` (default from the name). `use` (optional): the qualification step the item's own text names as using it ("IQ" for "IQ verifies against them"); never a step the text does not name. Codes from DocList's `docCode` unless `code` is given.
- Tokens: desk `surface-sunken` with a `line` border; paper `surface-raised` with `line` edges; stamps `flow` (double rule). No shadows.
- Phones: two sheets a row below about 1100 px, one below 560 px, turned less.

## Motion

Motion: one timeline. The desk fades up, the sheets are dealt from above one by one, each turning into its angle and settling (`aq-settle`); its miniature draws on and its code decodes; the stamps strike last. Under 4 s. Hover straightens and lifts a sheet (CSS). Nothing under reduced motion.
