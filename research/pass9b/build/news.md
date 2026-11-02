# Pass 9b build notes: news (block 0)

Server 8770. Page file `aquemi-web/content/pages/28-news.json` unchanged (block 0 keeps `"look": "revision-register"`,
fold 6). FAQ and form untouched. No copy cut.

| # | Block | Decision | Look / component | Concept idea built | Library port |
| --- | --- | --- | --- | --- | --- |
| 0 | register (25 notes, 4 topics) | upgrade, same look name (only news uses it) | `revision-register` / RevisionRegister | news.0: one limestone drawing sheet in a navy hairline frame (section now `aq-band--limestone`, was a sheet on navy). Left: the title set large and light (64 px), the intro, then the lead note as the sheet's general note (triangle, "Next planned 01", the reader's question as a quotation, title, standard, "Applied on" link). Middle: the faint schematic became a meaningful drawing plate (registration marks) showing the Spot of the page the note in hand is applied on, with "01 · Upgrades and retrofits" under it. Right: behind a 2 px rule, the register as the sheet's numbered notes column in mono ("01." number, title as the link, Planned · topic · standard), topic filter above it; all 25 notes listed (6 shown, "Show all 25 notes"; a topic shows all its notes). Title block bottom right: Aquemi · the title · live count. | filter-mosaic: filtering measures the notes and glides the ones that stay (280 ms) while new ones fade in (180 ms), Web Animations, instant under reduced motion (replaces the GSAP Flip glide). project-index: pointing at or focusing a note shows its page's drawing (240 ms), the selection persists. |

- Entrance: the frame rules round the sheet, the column rule drops, tabs drop in, the lead triangle strikes and its
  quotation rises by lines, each note is written in order (number decodes, line rules in), the plate prints, the
  title block appears. Under 3.5 s.
- Kept from pass 9 / NotesRegister: no invented dates (dashed "Planned"), lead = featured, polite live count (now in the
  title block), filter shows folded notes too, every link and the anchor.
- Phone (375): title, lead note, filter (wrapping tabs), notes; no drawing; the title block spans the foot (Aquemi ·
  count). Under 1100 px the drawing plate is dropped and the title column sits beside the notes.
- Checked: 1280 and 375, light and dark (the sheet stays light), reduced motion, keyboard (tabs aria-pressed with
  visible focus, focus on a note's link selects its drawing). `check` 0 problems in these files, `check --budgets news`
  0 overruns (363 visible words), motioncheck 1280 and 375: 0 errors, 0 hidden.
- Still weak: the drawing plate is a single Spot icon in a frame, lighter than the concept's schematic; with the column
  unfolded (25 notes) the left column ends far above the list (the plate is sticky, the title is not).
