RoleMatrix shows who writes, does and approves each document, like the signature blocks on a controlled document, so the split between our work and your sign-off is visible at a glance.

- Data: a `table` block with `"as": "roles"`. `cols`: document, then one column per role ("Written or done by", "Reviewed by"). A cell starting "Aquemi" is ours, "You" or "Your" is yours, anything else shared.
- Markup (`blocks/roles.js`): `.aq-roles` > `.aq-roles__key` (three sample stamps) and `ol.aq-roles__rows` of `li.aq-roles__row`: `.aq-index`, `h3.aq-roles__t`, `.aq-roles__stamps` of `p.aq-roles__stamp.is-ours|is-yours|is-shared` (`.aq-roles__k` role label, then the party). Ours: `flow-tint` with a `flow` frame; yours: `ink-muted` frame; shared: dashed `line-strong`.
- Phones: the stamps sit side by side under the document.
- Ground: the navy page. Keep each cell short; the party first ("Aquemi drafts…", "Your validation team").
