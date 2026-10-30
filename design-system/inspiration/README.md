# Inspiration concepts

AI-generated section concepts used as raw ideas for new components. See them all, with every Gemini original and the equipment drawings, in the gallery: `inspiration.html` at the site root (https://aquemi-official.github.io/aquemi-web/inspiration.html). They are not the brand: fonts, logos, copy and figures in these images are invented by the image model. Take the layout idea, then rebuild it with Aquemi tokens, type and real content.

| File | Prompted for | Became |
| --- | --- | --- |
| `concept-a.jpg` | Seven system families along the path water travels | `WaterPath` component (home page "Seven system families, one water path") |
| `concept-b.png` | Home hero: pure water measured to the decimal, precision stainless | `Hero` on system, service and industry pages: the page's equipment drawing with leader-line callouts to its real KeyFacts |
| `concept-c-spec.png` | Specification sheet for one system | `SpecTable`: critical band, two-column matrix |
| `concept-d-diagram.png` | Treatment train for one system | `ProcessDiagram`: serpentine boxes with glyphs |
| `concept-e-options.png` | Configuration options | `OptionList`: configurator tiles |
| `concept-f-docs.png` | Documentation package | `DocList`: document code tiles |
| `concept-g-faq.png` | Questions engineers ask | `FAQ`: numbered question cards, the open one widens |
| `concept-h-steps.png` | How a project runs | `ProcessSteps`: stepped pipe run on a dot grid |
| `concept-i-related.png` | Links to related pages | `RelatedLinks`: cards hanging from one pipe, ghost numbers |
| `concept-j-closing.png` | Closing call to action | `Closing`: framed headline, proof box from the page's facts |
| `concept-k-case.png` | Case study | `CaseStudy`: fact boxes beside one large outcome figure |
| `concept-l-form.png` | Request a proposal form | `EnquiryForm`: numbered data sheet in a drawing frame |
| `concept-m-standards.png` | Standards we design to | `StandardsGrid`: numbered standard cards joined by thin lines |
| `concept-n-readout.png` | One measured figure | `Readout`: instrument display with limit tag and tick scale |
| `concept-o-prose.png` | Explanatory text without a wall of text | `Prose`: pulled-out lead, narrow column, margin notes |
| `concept-p-band.png` | One statement between two sections | `Band`: one large sentence in a framed panel with a faint technical motif |
| `concept-q-grid.png` | A set of choices that is not a card grid | `LinkGrid`: staggered numbered choices joined by one routed line |
| `concept-r-table.png` | Comparing water grades without a wall of text | `CompareTable`: numbered column heads in a drawing frame; on phones, one column at a time behind tabs |
| `concept-s-hub-hero.png` | Header of a hub page that lists one area | `Hero` on hub and company pages: numbered index of the pages inside the area, joined by a routed line |
| `concept-t-footer.png` | Footer as the border of a drawing sheet | `Footer`: zone-referenced sheet border, numbered link columns, title block |
| `concept-u-home-hero.png` | Home page first screen, water at the limit | `Hero` on the home page: large headline beside a fine-line drawing of a distribution loop |
| `concept-v-nav.png` | Main navigation and the "On this page" bar | `NavBar` and `SectionNav`: numbered tabs, the section you are reading marked, page progress |
| `concept-w-keyfacts.png` | Key facts under a page header | `KeyFacts`: numbered cells on a measurement strip, value with unit and its source |
| `concept-x-page-rhythm.png` | One long system page, mostly navy with light sections between | Page ground: navy blueprint page with light drawing sheets for reading (`.aq-sheet`); `41-concept-page-sheets` gave the sheet frame and title block |
| `concept-y-router.png` | A situation router instead of a 4-column table | `Router`: situations on the left, one route through water, system and first step |
| `concept-z-versus.png` | Hot or ambient WFI, two routes compared | `Versus`: two routes across a spine of factors, a verdict for each |
| `concept-aa-failures.png` | Where steam quality fails, folded rows | `FaultList`: failures that open to cause and design control |
| `concept-ab-evidence.png` | "Where is the proof?" for a validation lead | `EvidenceMap`: standard, how we meet it, document tags |
| `concept-ac-grade-lanes.png` | Minimum water grade by process step | `GradeLanes`: taps into Potable, PW and WFI lanes |
| `concept-ad-roles.png` | Who writes and reviews each C&Q document | `RoleMatrix`: signature-block stamps, ours tinted, yours outlined |
| `concept-ae-send-back.png` | What you send, what comes back | `Closing` exchange (`cta.returns`): send → turnaround → documents back |
| `gemini/47-concept-plan-tiers.png` | Service plans: response, scope and price | `PlanTiers`: plans side by side on a label column, one action per plan |

`gemini/47-concept-plan-tiers` (service plans as a calibration sheet) became `PlanTiers` (`as: "plans"` on the service page): plans side by side on a label column, a recommended plan raised only when the page says which.

### Visual pass (50–58): pictures instead of rows
Generated by editing the same first prompt in one Gemini chat each time (no earlier images steering the next).
Each asked for one section "with very little text" and left the layout to the model.

| File | Prompted for | Becoming |
| --- | --- | --- |
| `gemini/50-concept-limit-gauges.png` | Limits you release against, read like instruments | Spec `as: "gauges"` (LimitGauges) |
| `gemini/51-concept-turnover-binder.png` | Documents delivered, as the package they audit | DocList as a turnover binder |
| `gemini/52-concept-option-modules.png` | Options shown on the equipment they add to | Options with spot icons (later: modules on the skid) |
| `gemini/53-concept-hold-points.png` | FAT steps with the client's hold points | Steps with `hold` stamps |
| `gemini/54-concept-explainer-drawing.png` | One idea explained by a drawing and callouts | Prose `as: "explainer"` |
| `gemini/55-concept-parameter-callouts.png` | Design parameters on a general arrangement drawing | Spec `as: "callouts"` on the page's equipment drawing |
| `gemini/56-concept-visit-route.png` | A service visit as a route around the system | Grid `as: "route"` (VisitRoute) |
| `gemini/57-icons-row-spots.png` | 24 spot drawings for list rows | Row `icon` set |
| `gemini/58-page-visual-pw.png` | A whole PW page told with pictures | Target for the page rhythm |
| `gemini/59-concept-standards-map.png` | Which standard governs which part of the plant | Compliance standards as a plant map |
| `gemini/60-concept-project-record.png` | A project told as an engineering record | Case study: drawing, large outcomes, order-to-release timeline |
| `gemini/61-concept-shop-route.png` | How a system moves through the shop | About: numbered route through the shop floor |
| `gemini/62-concept-contact-routes.png` | Three ways in, what happens next, service map | Contact: situation routes with next steps |
| `gemini/63-concept-notes-register.png` | News and technical notes as a revision register | News: register table with a featured note |

## Keep every image

Every image generated for the site is kept, used or not: the people reviewing the design want to look them all over.

- `gemini/NN-<kind>-<subject>.png`: the full-resolution original of every Gemini output, numbered oldest first. Add each new one here and to the `ORIGINALS` list in `inspiration.html`.
- `concept-<letter>-<section>.png`: the capture a component was rebuilt from (table above, and `CONCEPTS` in `inspiration.html`).
- `art/<page-id>.png`: the black-on-white source of each equipment drawing (and `ART` in `inspiration.html`).

To get originals at full size with Claude in Chrome: open the image's `=s1600` URL from the Gemini Library, place it at the top-left of the page, and save a `zoom` capture of exactly its area at scale 1.

## Equipment drawings

`art/` holds the black-on-white source drawings; `tools/line_art.py` turns each into the transparent mask in `assets/illustrations/` that the Illustration component paints with a token. One file per page id (`sys-pw.png`, `svc-cq.png`, `ind-pharma.png` …). Prompt recipe: see the Illustration component README.

## How to make a new concept

1. In Gemini (image generation), describe the section broadly: who Aquemi is, what the section must say, the palette (deep navy, warm limestone off-white, one steel-blue accent, thin precise lines), "flat desktop UI mockup, no device frame, no people", and ask it to surprise you with the layout. Don't dictate the layout.
2. Save the image here as `concept-<letter>.<ext>` and add a row above.
   - By hand: Gemini's "Download full size image" button, then move the file here.
   - From an agent with Claude in Chrome: open the image in Gemini's viewer and save a zoomed capture of it to disk (the `zoom` action with `save_to_disk`), then copy the saved file here. About 1000 px wide, enough for a layout reference, and it never triggers Chrome's download prompt. Don't have the page send files to a local server; agent safety checks block that.
3. Rebuild the idea as a component (`python tools/design_system.py new <Name> "<Group>"`), token-only, with real Aquemi copy. Never copy figures, standards or claims from the image.
