# Pass 9b build notes: sys-pretreatment (blocks 0–5)

Server 8768. Page file `aquemi-web/content/pages/08-sys-pretreatment.json`; block 6 (faq) untouched. MembraneFace's
FxCutaway placement (shader builder) left as it was.

| # | Block | Look | Concept | Decision | Library port |
| --- | --- | --- | --- | --- | --- |
| 0 | spec (RO inlet) | `membrane-face` (kept) | sys-pretreatment.0 (+v2): table on a navy drawing sheet; log: weak | **Kept**: both takes are table-only; the bento with the RO element end view (and its FxCutaway layer) is stronger. | none (FxCutaway untouched) |
| 1 | diagram (train) | `section-train` (kept) | sys-pretreatment.1 (take 2): duotone weld macro beside a numbered list; log: the macro does not show the train | **Kept**: the sectional train shows what each stage catches; the concept would lose that. | none |
| 2 | table (feed water) | `membrane-atlas` (upgraded) | sys-pretreatment.2: navy slash-numeral tiles as row heads of a 3-column table | **Upgraded to the concept**: the plate grid became a real table (role=table): column names over a heavy navy rule, each row headed by a navy tile with a 72 px light "01/" over its micrograph (held soft), then condition (light 24 px), effect, what we design for. | **focus-lens** → pointing at a row opens a sharp lens over the micrograph that follows the pointer |
| 3 | table router (chlorine) | `decision-valve` (upgraded) | sys-pretreatment.3: light decision table with carbon vessels drawn inside, numbered pins | **Ground changed to the concept's light sheet**: the valve stays as a navy object on the paper (interaction kept); display-scale heading; chosen supply navy, chosen route and lines in flow. Vessel drawings not added (the valve already pairs routes). | none (existing interaction) |
| 4 | docs | `doc-pipe` / DocPipe (**new**, replaces `sheet-previews`, deleted) | sys-pretreatment.4: double-line pipe with valves snaking through numbered document stops on navy | **Replaced, concept followed**: display-scale title + "Full index"; one double-line pipe snakes low/high across four columns, a valve on each run, each document in its bend (number, name, line, code; key codes in flow). Phones: vertical pipe down the left. | **poem-scroll** → scroll-linked: water runs the pipe, valves turn open, numbers and codes come up from half strength (the page's one scroll-linked story) |
| 5 | options | `option-taps` (upgraded) | sys-pretreatment.5: limestone drawing sheet, huge light title, notes column, title block | **Upgraded to the concept**: navy blueprint became a limestone sheet (double hairline frame), 120 px light "Options" under the page-name eyebrow, the IsoKit train in limestone hand, options as numbered drawing notes right of a vertical rule, title block at the foot; pins on the schematic. | **guided-inspection** → a note's number (button, aria-pressed) frames its part ×1.6 and dims the rest; Escape / arrows; in the renderer, works under reduced motion |

## Ground sequence
bento (light) → limestone section → light table with navy tiles → paper with navy valve → navy pipe band → limestone sheet.

## Content (page file)
- Block 4: `look` → `doc-pipe`; per-item `sheet` removed. Block 5: train item 3 gets `ly: -64` (keeps its label clear of the softener's).
- Copy cut: none. Decorative aria-hidden: title block (Aquemi · page name · heading), "A"-style drawing labels as before.

## Checks
build, check 0 problems; budgets 0 overruns; motioncheck 1280 and 375: 0 errors, 0 hidden; no horizontal scroll at 375; light and dark reviewed; pins and supply buttons keyboard-reachable with visible focus.

## Still weak
- Blocks 0 and 1 keep pass-9 looks (concepts weak per log).
- MembraneAtlas rows leave air in the cells at 1280 (tile height drives the row).
- OptionTaps' drawing is small on phones (pins kept, each note has its own dashed part).
