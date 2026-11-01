# Pass 9b build notes: svc-fabrication (blocks 0–3)

Server 8769. Page file `aquemi-web/content/pages/12-svc-fabrication.json` (looks renamed, one new optional field
`method` on the steps block = "[PP joining method]", an existing placeholder). FAQ, related and closing untouched.
All four sections replaced: each concept's idea was a different, stronger one than the pass-9 adaptation. The old
looks (joint-tag, fusion-bench, code-index, shop-route) were used only here; renderers and component folders deleted.

| # | Block | Decision | Look / component | Concept idea built | Library port |
| --- | --- | --- | --- | --- | --- |
| 0 | table (joint log) | replace | `joint-spine` / JointSpine | svc-fabrication.0: a twin-wall pipe drops in beside the title, bends and runs down the log as its spine; each row sits level with a joint (isometric joint mark: tick + dot) numbered 01–08 on alternating sides; the pipe runs on out of the section. Light ground (navy kept for block 1). | signature-draw: the pipe inked over its faint impression in one stroke; each joint strikes and its row prints as the ink reaches it |
| 1 | spec (standard, 10 rows) | replace | `joint-macro` / JointMacro | svc-fabrication.1: a duotone macro on the navy band, contours traced in a hairline, numbered leaders to the rows. No bead: it is a prepared pipe end (body + lot marking, end face, bore + inner wall, wall dimension), so it asserts no joining method. Rows 01, 02, 04, 05, 06, 09, 10 pinned; 03, 07, 08 unpinned. | frame-crop: pointing at / focusing a pinned row glides a crop frame (aperture + corner marks) onto its part, the rest fades |
| 2 | docs (dossier) | replace | `spool-dossier` / SpoolDossier | svc-fabrication.2: huge light title, an isometric PP spool (IsoKit; tee, branch, bends, flanges, dims without figures, joints J-01–J-07, lots L1–L4) as the hero figure; the four documents in a hairline grid under it. | project-index: pointing at / focusing a document shows its layer on the spool (joints, lots, ringed joints, water to the test cap), selection persists |
| 3 | steps (hold + witness) | replace | `joint-steps` / JointSteps | svc-fabrication.3: navy title column, one joint drawn large (IsoKit) on a sheet with J-01 tag, OD and zone dimensions, lot marks, coupon, test cap; six steps on a numbered rail with HP / WP codes. The joint zone is two dashed bounds and the tag reads "J-01 [PP joining method]": no bead profile. | scroll-turntable: the page's one scroll-linked story; scroll across the rail picks the stage stepwise, the sticky sheet lights it; hover/focus seeks |

- Wow moment: the JointSteps story (the sheet follows the rail). Better moments: the spine inking down the log, the
  macro crop frame, the spool layers.
- Grounds: surface → navy band → limestone band → surface with navy column. Blueprint-style iso line art: blocks 2 and
  3 (different directions: limestone hero figure vs drawing sheet).
- Copy: nothing cut or added. Recast only (as in pass 9): "Witness point." moves from steps 3–5 into each step's tag;
  column names show once as legends (per row for screen readers and on phones). Drawing labels (J-01…, L1…, OD) are
  aria-hidden. Folds (log 4, standard 5) apply on phones only.
- Phone: spine on a 56 px rail; macro full width above the rows; title, spool, one-column parts; title block, sheet
  (tag pinned top left), rail.
- Checks: build; check 0 problems from these components (2 others' remain: VersusSpread preview, aq-test-sheet__ink);
  budgets 0 overruns (456 visible words); motioncheck 1280 and 375: 0 errors, 0 hidden. Light, dark (spool sheet is
  `data-theme="light"` so its flow numbers keep contrast on limestone), 375, keyboard (macro rows, dossier parts and
  steps are focusable with visible focus) and reduced motion checked.

## Still weak
- The macro is flat duotone planes, not the concept's photographic look; it reads as a drawing more than a photo.
- JointSteps on phones: the sheet is not sticky, so the scroll story only shows as the active step marker.
- Spool labels J-02/J-03/J-04 sit close round the tee at 1280.
- Requests: ShopFloor README still names the removed ShopRoute (requests.md).
