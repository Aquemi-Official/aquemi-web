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
| `gemini/64-spots-generation.png` | Specimen sheet of 9 equipment vignettes (pretreatment, RO skid, EDI, still, pure steam generator, tank, pump, heat exchanger, UV and ozone) | Cut into Spot masks in `assets/spots/` with `tools/icon_sheet.py --max 256 --bold 0`; used on routes, the standards map and option modules |

### Pass 9 (68–94): one concept per section, varied art directions
Generated 2026-11-01 by editing the same first prompt in one Gemini chat (no earlier image steering the next). The first
seven asked for blueprint line art; the owner asked for variety, so from `76` on each section got its own art direction
(editorial, data-viz, Swiss type, scroll story, 3D render, tactile objects, HMI screen, split screen, minimal, kinetic
type, bento, route map, explorer, blueprint now and then, macro close-up, paper-cut depth). The Pro image quota ran out at
the compliance page; sections after it are built from these concepts. `-take2` = a second take of the same prompt (the
one built). Prompts and log: `research/pass9/` (outside the repo).

| File | Prompted for | The idea |
| --- | --- | --- |
| `gemini/68-p9-home-0.png` | 'One package, one water path' (home), first prompt (blueprint style) | one blueprint pipe run through the four systems' isometric equipment, labels above each |
| `gemini/69-p9-home-1.png` | 'Same limits, different evidence by industry' (home), first prompt (blueprint style) | one isometric pipe line feeding three industries' equipment, each with its evidence text |
| `gemini/70-p9-home-1-take2.png` | 'Same limits, different evidence by industry' (home), first prompt (blueprint style) | one isometric pipe line feeding three industries' equipment, each with its evidence text |
| `gemini/71-p9-home-2.png` | 'How a project runs' (home), first prompt (blueprint style) | five steps along one continuous isometric pipe with equipment per step (desk, frame, tanks, panel) |
| `gemini/72-p9-home-3.png` | 'Service after handover' (home), first prompt (blueprint style) | exploded view of a pump with leader-line callouts to the three service promises |
| `gemini/73-p9-home-4.png` | 'Start from where your project is' (home), first prompt (blueprint style) | manifold hub: situations as pipes radiating from one junction to equipment destinations |
| `gemini/74-p9-systems-0.png` | 'How the systems fit together' (systems), first prompt (blueprint style) | one continuous pipe run left to right through feed, pretreat, RO/EDI, tank, loop, outlets |
| `gemini/75-p9-systems-1.png` | 'Budget ranges before a quote' (systems), first prompt (blueprint style) | budget table framed by a pipe route through tank, skid, filters (old prompt, weak: table) |
| `gemini/76-p9-systems-2.png` | 'What changes on your site' (systems), art direction: split-screen contrast | navy/limestone split where the divide is the battery limit, tie-in points on the seam |
| `gemini/77-p9-systems-3.png` | 'Start from the standard you cite' (systems), art direction: technical blueprint drawing, used deliberately | standards table whose answers run as leader lines into a line-art plant elevation |
| `gemini/78-p9-sys-pw-0.png` | 'Purified Water limits' (sys-pw), art direction: editorial magazine spread | oversized editorial headline, limits as a stepped type stack, sculpted pipe loop with GUARANTEED band |
| `gemini/79-p9-sys-pw-1.png` | 'How water moves through the skid' (sys-pw), art direction: map or route metaphor | wavy route across navy with seven numbered stops, a small glyph per treatment |
| `gemini/80-p9-sys-pw-2.png` | 'Skid design parameters' (sys-pw), art direction: Swiss International Typographic Style | Swiss grid of navy/limestone tiles, huge 01-07 numerals, one isometric skid tile |
| `gemini/81-p9-sys-pw-3.png` | 'Documents with the skid' (sys-pw), art direction: soft 3D product render | soft white PP skid render with hotspot dots leading to document cards |
| `gemini/82-p9-sys-pw-4.png` | 'Configurations and options' (sys-pw), art direction: tactile physical metaphor | flat-lay of shipping tags, folders and sample vials, one tag per option |
| `gemini/83-p9-services-0.png` | 'Where to start' (services), art direction: kinetic typography | huge cropped START/GO outline type behind a rising staircase of four situation cards |
| `gemini/84-p9-services-1.png` | 'How long each stage takes, and what it leaves' (services), art direction: macro detail | macro weld/water close-up with a rising timeline of hold-point nodes and stage callouts |
| `gemini/85-p9-industries-0.png` | 'Your situation and where to start' (industries), art direction: technical blueprint drawing, used deliberately | P&ID-style routing: each situation piped through valves to its system, then start point |
| `gemini/86-p9-industries-1.png` | 'Grade, limit and inspector by industry' (industries), art direction: macro detail | macro membrane layers and weld, numbered leaders fanning into industry rows |
| `gemini/87-p9-industries-1-take2.png` | 'Grade, limit and inspector by industry' (industries), art direction: macro detail | macro membrane layers and weld, numbered leaders fanning into industry rows |
| `gemini/88-p9-industries-2.png` | 'Your first Purified Water system' (industries), art direction: editorial magazine spread | oversized headline over a geometric pipe-collage illustration, five facts as asymmetric editorial blocks |
| `gemini/89-p9-industries-3.png` | 'Outside drug and device manufacturing' (industries), art direction: soft 3D product render | one white PP skid render centre, three markets as annotated callouts around it |
| `gemini/90-p9-compliance-0.png` | 'Purified Water limits' (compliance), art direction: an asymmetric bento layout with mixed media | bento: tall visual tile of PP/water render, three limit tiles with big numerals |
| `gemini/91-p9-compliance-1.png` | 'Which standard governs each part' (compliance), art direction: data visualization as the hero | standards as nodes on orbit rings around a central plant schematic, each with proof link |
| `gemini/92-p9-compliance-2.png` | 'Pharmacopoeias and their proof' (compliance), art direction: tactile physical metaphor | each standard as a manila folder row, proof as clipped papers and stamps |
| `gemini/93-p9-compliance-2-take2.png` | 'Pharmacopoeias and their proof' (compliance), art direction: tactile physical metaphor | each standard as a manila folder row, proof as clipped papers and stamps |
| `gemini/94-p9-compliance-3.png` | 'Good manufacturing practice (GMP) and qualification' (compliance), art direction: scroll-driven storytelling | sticky cutaway of PP piping with 'active state' tag, standard cards scrolling on a rail beside it |

## Style atlas (image → text)

Every Gemini original is described as text-to-image keywords and a reusable prompt in `style-atlas/images/*.json`;
`style-atlas/aggregate.py` counts them into `keywords.json`, and `style-atlas/STYLE-ATLAS.md` names the brand core,
ten style families, what combines well, what fails (with negative keywords), a prompt kit and three ways to unify
the styles. The `image-prompt-loop` skill (`.claude/skills/image-prompt-loop/`) runs the loop: describe images,
refresh the atlas, write section prompts from its kit, generate in Gemini, keep every image here.

## Keep every image

Every image generated for the site is kept, used or not: the people reviewing the design want to look them all over.
The media gallery (`inspiration.html`) shows all of them with a status tag (live on the site, became a component,
source of a site drawing, reference only, superseded, build record). It reads `gallery.json`, which
`python tools/gallery.py` writes (needs Pillow): it scans the folders below and the site's assets, works out each
status from the tables in this README and from what the pages use, and makes the thumbnails in `thumbs/`.
`python tools/gallery.py --import ../research` also copies build records (page snapshots per pass, concept beside
build) into `record/`. Rerun it after adding any image.

- `archive/`: superseded versions, recovered from git history when a file was replaced.
- `chats/<source>/*.jpg`: screenshots of Gemini sessions from earlier chats (the generations as they appeared in the
  chat, the Images gallery and the Library); `chats/index.json` records where each came from. On 2026-11-01 the owner
  had the ~1,600 build-progress images removed (page snapshots per pass in `record/`, concept-beside-build sheets, and
  browser screenshots of the site from other chats); they are in git history before commit "Inspiration: drop build
  progress images" if ever needed.

- `gemini/NN-<kind>-<subject>.png`: the full-resolution original of every Gemini output, numbered oldest first. Add each new one here, then run `python tools/gallery.py`.
- `concept-<letter>-<section>.png`: the capture a component was rebuilt from (table above).
- `art/<page-id>.png`: the black-on-white source of each equipment drawing .

To get originals at full size with Claude in Chrome: open the image's `=s1600` URL from the Gemini Library, place it at the top-left of the page, and save a `zoom` capture of exactly its area at scale 1.

## Equipment drawings

`art/` holds the black-on-white source drawings; `tools/line_art.py` turns each into the transparent mask in `assets/illustrations/` that the Illustration component paints with a token. One file per page id (`sys-pw.png`, `svc-cq.png`, `ind-pharma.png` …). Prompt recipe: see the Illustration component README.

A replaced drawing stays for the record: its old source is renamed with a suffix that says why, and `ART_REPLACED` in `tools/gallery.py` shows it as superseded. On 2026-10-31 three drawings that contradicted the offer were redrawn for the polypropylene PW package: `art/svc-fabrication-stainless.png` (orbital weld head with tri-clamps), `art/sys-storage-stainless.png` (stainless tank) and `art/ind-pharma-sterile.png` (vial filling machine), Gemini originals `gemini/14`, `08` and `22`. Their replacements are `art/svc-fabrication.png` (butt-fusion machine), `art/sys-storage.png` (PP tank and loop) and `art/ind-pharma.png` (mixing vessel fed by a PW point-of-use valve), originals `gemini/65`–`67`.

## How to make a new concept

1. In Gemini (image generation), describe the section broadly: who Aquemi is, what the section must say, the palette (deep navy, warm limestone off-white, one steel-blue accent, thin precise lines), "flat desktop UI mockup, no device frame, no people", and ask it to surprise you with the layout. Don't dictate the layout.
2. Save the image here as `concept-<letter>.<ext>` and add a row above.
   - By hand: Gemini's "Download full size image" button, then move the file here.
   - From an agent with Claude in Chrome: open the image in Gemini's viewer and save a zoomed capture of it to disk (the `zoom` action with `save_to_disk`), then copy the saved file here. About 1000 px wide, enough for a layout reference, and it never triggers Chrome's download prompt. Don't have the page send files to a local server; agent safety checks block that.
3. Rebuild the idea as a component (`python tools/design_system.py new <Name> "<Group>"`), token-only, with real Aquemi copy. Never copy figures, standards or claims from the image.
