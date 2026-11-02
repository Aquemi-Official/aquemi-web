# Pass 9b build notes: ind-cdmo (blocks 0–3)

Reader: a contract manufacturer with many clients and many auditors on one water system. Blocks 4 (faq) and 5
(related) untouched. Grounds down the page: limestone (plan) → light sheet (skid) → limestone + navy strip (trains) →
surface (sticky drawing).

| # | Block | Look / component | Concept | Decision | Library port |
| --- | --- | --- | --- | --- | --- |
| 0 | router table | `suite-loop` / SuiteLoop (kept, polished) | ind-cdmo.0 (weak in both takes: a drawing-sheet frame round a plain table) | kept the live plan of suites on one shared loop; removed the back.out ease on the valves; added a hover/focus route | animated-beam: pointing at or focusing a suite sends a slug of water along the supply run from the chevron to that suite's drop, then the drop fills (desktop along the top run, phones down the riser) |
| 1 | docs (audit pack, anchor kept) | `audit-skid` / AuditSkid (new; replaces pack-matrix) | ind-cdmo.1 followed | huge light heading; light sheet with an IsoKit skid in the middle (generation rack + panel, sample point on the product line, tank, loop pump, header with analyser, point of use, valved spare tie-in); the six documents as numbered callouts, three each side, leaders to pins on the part each covers (system description → rack, compliance matrix → sample point, qualification summary → skid, trend reports → analyser, excursion summary → point of use, change log → spare tie-in); mono corners (nav + count, "Client · period") | atlas-hotspots: shared selection (hover, focus, click), ring glides to the pin, pin fills, leader and part turn flow; entrance: IsoKit build, pins, leaders drawn out to each callout as it rises, first document selected at the end |
| 2 | options modules (redundancy) | `duplex-trains` / DuplexTrains (new; replaces module-plinth) | ind-cdmo.2 followed | heading set huge and light at left; framed limestone IsoKit drawing at right: two identical RO trains (drawn twice, the same), tank, duty and standby pumps, loop with spare tie-in and a dashed future branch, spares box; "Swap trains" switch; six numbered cards (mono titles) in one band over a navy strip, the pointed card in flow blue (the concept's steel-blue card) | switch-button: aria-pressed swap of the train in service (arrows turn 180°, letter rolls, flow sweep), the other train quiets and is tagged "sanitized", water reruns through the new one; cards light their parts (sanitize card lights the train out of service) |
| 3 | steps (tech transfer) | `tie-in-run` / TieInRun (new; replaces release-run) | ind-cdmo.3 followed, module ring replaced per the log | mono numbered steps left; sticky IsoKit drawing right: loop header with two existing outlets and the new branch (tee, isolation valve, drop, sample point, new outlet); numbered markers per step | scroll-window: the page's one scroll-linked story: scope review → dashed planned outlet, change control → dashed change boundary, build and tie in → branch turns solid, release → water drawn into it; step and marker on the reading line lit. Phones: drawing rides as a sticky band |

## Fields
- Block 1: `items[].part` (ro, sample, skid, analyzer, outlet, tiein); `corner` "Client · period"; `matrix` removed.
- Block 2: `items[].part` (trains, pumps, tank, sanitize, spares, tiein); `trains` ["runs", "sanitized", "Swap trains"]
  (the two state words are from option 1's copy; the third is the control's label).

## Deleted
- `design-system/components/PackMatrix/`, `ModulePlinth/`, `ReleaseRun/` and `assets/src/blocks/look-pack-matrix.js`,
  `look-module-plinth.js`, `look-release-run.js` (only this page used them; no README names them). IsoKit.js has a
  comment naming ModulePlinth: request filed in `research/pass9b/requests.md`.

## Copy
- No copy cut or added. Every link, placeholder, fold (4 documents, 3 options on phones) and the `audit-pack` anchor kept.
- Polypropylene PW only: drawings show RO racks, tank, pumps, valves, analyser, points of use; no still, WFI or stainless.
  No heat exchanger drawn for the sanitize option (method is a placeholder).

## Checks
- build; check: 0 problems in these files (the one problem left is IndexSheet's preview, another builder's);
  `check --budgets ind-cdmo`: 0 overruns, 530 visible words.
- motioncheck 1280 and 375: 0 errors, 0 hidden (the train out of service drops its water with display none, the swap
  letter rolls instead of fading).
- Reviewed 1280 and 375, light and dark (water and lit parts on the limestone band mixed 72 % flow with on-limestone so
  they read in dark; train-in-service letter navy), hover on all ports, swap, mid-scroll stages, reduced motion (all
  static and complete, tie-in drawing in its released state).

## Still weak
- Section 0 is the pass-9 look with a hover port only (concept weak).
- At 375 the audit-pack skid is small (wide drawing) and its pins sit close together; the analyser is a small part
  half under the pump.
- AuditSkid's pins and DuplexTrains' cards are `tabindex=0` list items; the two cards with links take two tab stops.
