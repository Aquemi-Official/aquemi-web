# Pass 9 build notes: ind-cdmo (blocks 0–3), round 2

Reader: a contract manufacturer with many clients and many auditors: one water system serving several suites, a pack
per client and period, a module set on one shared loop. Blocks 4 (faq), 5 (related) untouched. No concept of their own.

| # | Block | Look / component | Adapted from | Art direction |
| --- | --- | --- | --- | --- |
| 0 | router | `suite-loop` / SuiteLoop | industries.0 / home.4 (situations off one manifold), the ind-cdmo page drawing | plan drawing on limestone |
| 1 | docs (audit pack, anchor kept) | `pack-matrix` / PackMatrix | sys-pw.2 (grid with one differing cell), 45-concept-evidence | Swiss data grid + sheet, light |
| 2 | options modules (redundancy) | `module-plinth` / ModulePlinth | sys-pw.4 (objects), STYLE-ATLAS hybrid 1 (figure plate, numbered parts) | navy isometric blueprint (IsoKit) |
| 3 | steps (tech transfer) | `release-run` / ReleaseRun | services.1 (nodes to a boxed result), sys-pw.2 (huge numerals) | Swiss columns, kinetic numerals |

## New fields
- Block 1: `matrix` {rows, cols, at, y: "Client", x: "Period"} (decorative; the axis words come from the intro).

## Drawn inline (not in IsoKit)
- ModulePlinth: plain module blocks (box, front panel, nameplate line, top panel) from `isoBoxD` / `isoPoly`; candidate for the kit as a `module` part. Valves in SuiteLoop are flat ISA symbols (plan, not iso).

## Copy
- No copy cut or added. Every link, intent, placeholder and the `audit-pack` anchor (hero secondary) kept.

## Checks
- build, check: 0 problems in these components; `check --budgets ind-cdmo`: 0 overruns, 519 visible words.
- motioncheck 375: 0/0; 1280: 0 errors, 1 hidden = `aq-closing__t` (the site-wide Closing, not these sections).
