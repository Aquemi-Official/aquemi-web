RoleMatrix shows who writes, does and approves each document, like the signature blocks on a controlled document, so the split between our work and your sign-off is visible at a glance.

- Data: a `table` block with `"as": "roles"`. `cols`: document, then one column per role ("Written or done by", "Reviewed by"). A cell starting "Aquemi" is ours, "You" or "Your" is yours, anything else shared.
- Markup (`blocks/roles.js`), on a Plate (`wPlate`, title block Aquemi | nav | N documents): `.aq-roles` > `.aq-roles__key` (a framed strip: `.aq-roles__keyk` "Key", then three sample stamps) and `ol.aq-roles__rows` of `li.aq-roles__row`: `.aq-index`, `h3.aq-roles__t`, `.aq-roles__stamps` of `.aq-roles__cell` (`p.aq-roles__k` role label, `p.aq-roles__stamp.is-ours|is-yours|is-shared` the party). Ours: `flow-tint` with a `flow` frame; yours: a double `ink-muted` frame; shared: dashed `line-strong`.
- Each document is a framed signature block. Desktop: large mono index and document in the first cell, then one ruled cell per role. Phones: the document is the block's `surface-sunken` header bar, the role cells side by side under it.
- Ground: the navy page. Keep each cell short; the party first ("Aquemi drafts…", "Your validation team").

## Motion

`motion.js`: the key's three stamps strike first, then each signature block rises into place and its stamps strike one after another, left to right, like a document being signed off. Blocks play in reading order as they scroll in. Nothing under reduced motion.
