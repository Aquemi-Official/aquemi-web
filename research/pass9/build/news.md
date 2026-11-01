# Pass 9 build notes: news (round 2)

Built 2026-11-01 on port 8766. Page file: `content/pages/28-news.json` (block 0: `look` only). FAQ and form untouched.

| # | Block | Look / component | Concept adapted | Art direction |
| --- | --- | --- | --- | --- |
| 0 | The notes register (register) | `revision-register` / RevisionRegister | `63-concept-notes-register` (register sheet with latest update and revision table on a blueprint ground) | drawing-office register sheet, editorial lead |

One limestone register sheet on navy: a title strip with the topic tabs (real buttons, aria-pressed, counts, polite live
count), the lead note as an editorial page (status, a huge light number with a revision triangle, the reader's question
from `d` as a quotation, title, standard, faint Spot figure, "Applied on" link), and the ruled register (status, number,
topic, title link, standard), the lead line marked with the same triangle. NotesRegister's rules kept: no invented dates
(dashed "Planned" status), lead = featured, a tab shows every matching note folded or not, Flip glide on filter, fold 6.
Motion: sheet rises onto the navy, tabs drop in, number decodes, triangle strikes, quotation rises by lines, register
lines rule in left to right. Phone: lead first (no figure), tabs wrap, each line title / status · no · topic / standard.

Renderer labels: the first register column is headed "Status" (it shows the status or a given date; every note is
planned today) where NotesRegister said "Date"; the visual "Filter" key before the chips is dropped (the group keeps its
aria-label). No page copy cut.

## Polish (pass 9)
- RevisionRegister: "Applied on" now sits at the foot of the lead page (its `margin: auto` was cancelled by the `.aq-page p` reset).
