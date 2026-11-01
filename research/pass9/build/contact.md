# Pass 9 build notes: contact pages (contact-proposal, contact-service, contact-locations)

Built 2026-11-01 on port 8769. Form blocks (EnquiryForm) and the service FAQ untouched. Every route, intent, anchor,
nav, fold, phone/email placeholder and link kept; `check`: 0 links to a missing page or anchor, 0 problems in these
components; `check --budgets` 0 on all three; motioncheck 0 errors / 0 hidden at 1280 and 375 on all three.

## Sections
| Page.block | Look / component | Concept adapted | Direction |
| --- | --- | --- | --- |
| all.0 contact-routes | ContactRoutes (upgraded in place) | 62-concept-contact-routes | navy band, limestone route sheets, folder tabs |
| proposal.2 table | `return-slips` / ReturnSlips | sys-pw.4 tags + compliance.2 folders (tactile), 49 send-back | limestone band, paper slips |
| service.2 table (router) | `response-lanes` / ResponseLanes | services.1 node line + sys-pw.0/.2 huge numerals | Swiss data-viz timeline |
| locations.1 table | `site-plates` / SitePlates | sys-pw.2 tile with drawn cell; atlas line art + table | figure plates (IsoKit) |
| locations.2 table (router) | `coverage-map` / CoverageMap | 62 "Where we are" map; atlas hybrid 3 (sticky drawing) | tile-map data-viz |

## New optional fields (documented in the READMEs)
- locations.1 `art`: ["office","shop","service","parts"] (drawing per site row).
- locations.2 `map`: 13 tiles {c, n, x, y, r} (provinces and territories, real names only); `base`: {c: "ON",
  label: "Based in Ontario"} (the hero lead's own words).

## Copy
No line cut or added. Presentation only: slip titles and severity remainders get a capital first letter; the site link
label is now the kind only ("Shop and test bay", "Service bases"), the place placeholder set beside it; the coverage
sheet's title strip reads "Aquemi · Coverage" (aria-hidden, from `nav`).

## Drawn outside IsoKit
- Parts stock crates: boxes from `isoBoxD` (no crate/shelf part in the kit).

## Weak or open
- The coverage map tiles are a schematic grid; a real outline map would need a licensed source.
- ReturnSlips row 1 (four slips) is dense with long placeholders; reads better once times and costs are real.
