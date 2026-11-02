# Pass 9b build notes: careers (blocks 0–2)

Server 8770. Page file `aquemi-web/content/pages/27-careers.json`: block 0 `look` shop-floor → `role-loop` (its
`stations` field dropped, only ShopFloor read it); block 2 gains the optional field `fig` = "Test joint by
[PP joining method]" (the FAQ's own words and placeholder). Form, FAQ, related and closing untouched. No copy cut.

| # | Block | Decision | Look / component | Concept idea built | Library port |
| --- | --- | --- | --- | --- | --- |
| 0 | table (roles, 6 rows) | replace (new look; ShopFloor stays with About, which still uses it) | `role-loop` / RoleLoop | careers.0: the six role cards stand in the bays of one twin-wall pipe loop on the navy band. The loop is laid out from the rendered cards (ResizeObserver): it rises over card 1, dips under card 2, over card 3, drops at the right and runs back under/over/under the second row to close on itself. Each role has a branch off the loop into its card's number line with a valve. Status rule: the valve reads open/closed only if the last " · " part of the pay column begins "Open"/"Closed"; today it is `[status, posting reference]`, so every valve is drawn dashed and no water enters a branch. The status text sits under the role name with a small valve of the same state; the pay field shows the pay part. | score-follow: the water front runs the loop at one linear tempo (2.6 s), each bay lights as it passes, its branch shows and its card prints in. Hover a role: its bay fills end to end (0.4 s). |
| 1 | spec (terms, 8 rows, fold 3) | keep and polish (concept stock, per the log) | `time-card` / TimeCard | careers.1's term-name / mono-detail pairing: each line is now the item as its name (Geist Light 22) with the term under it as one mono detail line, the note in a mono margin column; header "Item / Our terms · Note". The time card, punch slots and stamp kept. | none (punch entrance kept) |
| 2 | steps (4 steps) | upgrade, same look name | `hire-path` / HirePath | careers.2: one hairline-framed sheet; left the title and the test joint as a duotone plate (navy ground, limestone pipe in flat lit/shade bands, joint zone as two dashed bounds and a seam, OD and joint-zone dimension hairlines, leader to "test joint"; caption "Test joint by [PP joining method]"); right the four steps on a slim vertical rail with gate ticks and "01 /" mono numbers; the practical interview's four exercise icons kept. | aperture-reveal: the plate opens through a circular crop (25 % → 80 %, 850 ms) and the dimensions draw. score-follow: a playhead walks the dry rail at one tempo, gates fill as it passes; pointing at a step seeks it to that gate. |

- Wow moment: the water filling the role loop bay by bay. Better moments: the aperture onto the test joint with the
  rail walk; the time card's new pairing reads faster.
- Phone (375): roles stack inside a loop that runs down the cards' left and back up their right, branches off the left
  run; time card lines stack item, term, note; plate full width (labels drawn at 24 px in the sheet so they read
  ≥ 12 px), rail under it.
- Checked: 1280 and 375, light and dark, reduced motion (static: loop drawn and water in it, rail walked), keyboard
  (no new controls; the fold and links unchanged). `check` 0 problems in these files (other builders' RequestMenu /
  RiserValves problems remain), `check --budgets careers` 0 overruns (718 visible words), motioncheck 1280 and 375:
  0 errors, 0 hidden.
- Joining method: the joint has no bead profile, only the zone bounds and the seam, so it asserts none (FD-18 open).
- Still weak: the plate is flat duotone planes, not the concept's photograph. RoleLoop is designed for up to six roles
  (two rows of three); more rows still draw but the pipe may double up on the left. Between 860 and 1100 px the three
  role columns get narrow (about 240 px).
- Request filed: ShopFloor README still lists Careers under "On the site" (about builder's file).
