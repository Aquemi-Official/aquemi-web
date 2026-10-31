# Website

The site has one job: let everyone who must agree to the purchase (who specifies, qualifies, approves and pays) decide without contacting us whether Aquemi fits, then start the conversation where their project stands. Every page should answer three questions quickly: what it is, which standard it meets, and how to talk to us. Approvers add a fourth: cost, time, and who carries the risk. Each of their questions has one home (below), not a page of its own.

## Sitemap

| Section | Pages | Purpose |
| --- | --- | --- |
| Systems | Purified Water (PW) generation · Storage and distribution loops · Pretreatment · Monitoring and controls | One page per module of the PP package: what it does, key specifications, configuration options, documentation delivered. Written first for the process engineer (QA, QC microbiology or maintenance by module); finance, contractors and EHS read second. The hub holds the budget range and the site requirements. WFI, pure steam and stainless steel systems are not offered; their pages are archived in `content/retired/`. |
| Services | Process design and engineering · Fabrication · FAT and SAT · Commissioning and qualification (IQ/OQ/PQ) · Service and spare parts · Upgrades and retrofits | How a project runs from user requirement specification to handover and beyond, written first for validation leads and project managers (maintenance leads once the system runs); procurement reads second. The hub holds the durations; Service and spare parts holds the running cost. |
| Industries | Pharmaceutical · Medical devices · Contract manufacturing (CDMO) | Each industry page links to the systems it uses most, written first for process engineers and QA heads; site heads and founders read second. The hub holds the plain path to a first PW system. |
| Compliance | Standards we design to · Documentation package · Quality management | The pages validation and QA teams will look for first. Quality management is also procurement's page and holds the terms: how buying from us works. Only list certifications Aquemi actually holds. |
| Projects | Projects | Has it been done, and how can we check? For site heads, procurement and QA heads. Until the first delivered project is accepted and its client approves the text in writing: where Aquemi stands, in true facts only (a new Ontario company, no case study yet), and the checks a buyer can run now, each linking to its own form. No template record, reference call or form of its own. After it: problem, system delivered, measured outcome. Use real figures or don't publish. |
| Company | About · Careers · News | About holds the company facts an approver checks, for site heads, procurement and QA heads; finance and founders read second. Careers is for applicants, News for engineers before a project starts. |
| Contact | Request a proposal · Service request · Locations | For whoever is ready to ask. The proposal form starts from the buyer's situation (a URS or a draft, a product, water data, a running system, or not sure yet) and asks only what the reply uses: sizing fields, with flow in L/h, only for a new system. |

## Home page

1. **Hero.** `eyebrow`, one `display-xl` line, one `body-lg` sentence, one primary button ("Talk to an engineer") and one secondary link ("Explore systems"). A wide photograph of a finished skid or an installed loop on `navy` or `surface`. No carousel.
2. **Systems index.** The system families in a 3-column grid on desktop, 1 column on phones. Each item: `h3` name, one line of description, the governing standard as a tag. Hairlines between items, not cards.
3. **Proof in numbers.** One `readout`: a single large measurement with its method on the limit tag and a one-sentence caption below. Only real, sourced figures.
4. **How we work.** The project sequence (Design → Fabricate → Test → Qualify → Support) as a horizontal sequence. This is a genuine order, so numbering is appropriate here.
5. **Compliance strip.** Standard tags on `surface-sunken` with a link to the Compliance page.
6. **Case study.** One project, full-bleed image, outcome in one sentence.
7. **Closing band.** `navy` band, `h1` in `ink-inverse`, primary button in Limestone.
8. **Footer.** `navy`, Limestone logo, sitemap columns, address, legal.

## System page template

1. Hero: `eyebrow` with the system family and standard, `display` name, `body-lg` summary, image.
2. Key specifications as a SpecTable (capacity range, product water quality, sanitization method, materials such as PP or PVC).
3. How it works: a line-art process diagram with the water path in `flow`.
4. Configurations and options, in a two-column list.
5. Documentation delivered: functional specification, P&IDs, material certificates, joint logs, FAT/SAT protocols, IQ/OQ protocols.
6. Related systems and a closing call to action.

## Navigation

- Top bar on `surface` with a `line` bottom rule; it scrolls with the page (not sticky; the SectionNav is what sticks on long pages). Logo left; Systems, Services, Industries, Compliance, Projects, Company; then, right, a "Service request" text link to contact-service, styled as a section link (`aria-current="page"` on contact-service), and the "Request a proposal" button. Six sections stay: "Service request" is a utility link, not a seventh section (beside Services it would read as a duplicate).
- On narrow screens (below about 1,020 px, phones included) the bar collapses to the logo and a menu toggle; the links, the service link and the button move into the menu, which opens under the bar on `surface`.
- The menu opens with the urgent block, the urgent contact route, on `limestone`: "Production stopped?", the service number as a `tel:` link (placeholder text, never a link, until it is confirmed) with the hours it is answered, then a "Service request" row. The number never shows without its hours, so the block never promises round-the-clock help. Then the sections, the page's section jump and the proposal button.
- **Launch rule for the urgent block.** The code has no draft or launch switch, so this is a release step: while the service number is unconfirmed, take the urgent block out of the menu (`aq-menu__urgent` in `assets/src/parts/NavBar.js`) and keep its "Service request" row, first in the menu. The block comes back when the number and its hours are filled together.
- The service number and hours in the menu, and in the footer the description's shop location and the contact line (service and sales numbers, head office), come from one source, `CONTACT` in `assets/src/core.js`, under the pages' placeholder names, filled in the same commit as the page files that repeat them. `check` warns on a `CONTACT` value no page file carries.
- A link in a page file may name a block: `page#anchor` (`cmp-quality#buying`, `systems#budget`) opens that page at the block whose `anchor` (or nav id) matches; without a match the page opens at the top. It works in every link field: the hero's button and secondary link, the closing button, contact routes, table cells, rows, related links and the footer. `#anchor` scrolls to a block on the same page, in the hero's button and secondary link and the closing button (`primary_cta_link`, `secondary_cta.link`, `cta.link`); elsewhere write `page#anchor`. `check` warns on a link whose page or anchor does not exist.
- Mega-menus list system pages in plain text columns with no icons.

## What we learned from category leaders

Leading suppliers organise their sites by system type, industry and service, and put compliance documentation front and centre. Keep that structure because buyers expect it. Make the presentation quieter and more exact: fewer stock images, fewer superlatives, more specifications, more white space.

## Page grammar

Every page reads as one system, on a phone first.

- **Section head.** Every section opens the same way: optional eyebrow (the system or standard), an `h2` of 9 words or fewer, an optional one-sentence intro. Block fields `eyebrow`, `h`, `intro`; the renderer adds it (`wSecHead` in `assets/src/core.js`). No other mono caption above a table or list.
- **One list grammar.** Lists are hairline-separated rows with the index in a left column (`.aq-rows`): options, steps, link lists, FAQ, documents, related pages. Boxes are kept only for ProcessDiagram nodes, EnquiryForm panels and CaseStudy cards.
- **One index style.** `01` in Geist Mono 13 px, `ink-subtle`, left column (`.aq-index`). Never `01 /`, `[01]`, ghost numerals or filled numbers.
- **No grid paper behind reading text.** No grid paper anywhere; figures sit in a plain plate.
- **Tables are for comparisons.** CompareTable only with three or more columns; parameter/value/basis lists are SpecTable, lists of things are DocList or rows.
- **Table shapes.** Most tables carry one of a few recurring shapes. Give the `table` block `as` and it renders as the component built for that shape, from the same `cols` and `rows`:

  | `as` | Shape | Component |
  | --- | --- | --- |
  | `router` | your situation → water → system → where to start | Router |
  | `versus` | two routes compared factor by factor, with a "Fits when" verdict row | Versus |
  | `failures` | failure or symptom → cause → what we design in | FaultList |
  | `evidence` | requirement or standard → how we meet it → document that proves it | EvidenceMap |
  | `grades` | process step → minimum water grade | GradeLanes |
  | `roles` | document → who writes → who reviews | RoleMatrix |
  | `plans` | service plans: feature → value per plan, with "Suits" and "Price" rows and an optional `recommend` | PlanTiers |

  A plain CompareTable is left for true multi-way comparisons (three or more options that are not plans you buy).
- **Spec shapes.** A `spec` block takes `as` the same way, from the same rows: `gauges` (LimitGauges: limits with numbers as a panel of dials, the limit marked, the passing side in flow; rows without a number are readout cells) and `callouts` (ParameterCallouts: design parameters on the page's own equipment drawing; rows with `at: [x, y]` become numbered callouts with leader lines, every other row lists below as a SpecTable). Only the row's own numbers are drawn.
- **Block shapes beyond tables.** Two more opt-in shapes, each on its own block type:
  - `prose` with `"as": "explainer"` → Explainer: one idea as a figure plus 3-4 numbered callouts instead of paragraphs. `points: [{t, d, at}]` (d ≤ 25 words) and an optional `figure`: `{kind: "levels", limit: {v, unit, label}, bars: [{label, v | level, note, n}]}` (bars against a dashed limit, drawn from tokens) or `{kind: "art", art: "<page id>"}` (the page's equipment drawing, each point's `at: [x%, y%]` pinning its number on it). Numbers only from the page; with none, draw `level` bars without values or use the drawing.
  - `grid` with `"as": "route"` → VisitRoute: the items as numbered stops on one dashed route, for a visit or walk-round whose order matters (preventive maintenance visit). Items keep `t`, `d`, `link`; `end: true` on the last item makes it the sign-off. No fold.
- **Contact routes.** Block `contact-routes` → ContactRoutes: the ways in as hairline rows, `routes: [{t, d, steps: [3], clock, link, phone?, urgent?, current?, action?, intent?}]`. Each card shows three next steps and its response clock (the page's own placeholder until confirmed). The `current` route (or the one linking to this page) is marked "This page" and its action jumps to the page's form; the others link to their pages. One `urgent` route sits on limestone with `phone` set large and comes first on phones. Right after the hero on contact pages, so the form still starts within two phone screens. In use on contact-proposal, contact-service (the urgent route replaces the severity 1 band), contact-locations.
- **Project record on case items.** A `case` item may carry `"art": "<page id>"` (that page's equipment drawing; `changed: [{t, at: [x%, y%]}]` pins what changed on it, listed beneath), `outcomes: [{v, unit, l, method}]` (3-4 large figures with the unit, what was measured and the method beneath) and `timeline: [{t, when}]` (order-to-release milestones). Any of them turns the case into the engineering record: facts as hairline rows beside the drawing, then outcomes, then the timeline; phones stack drawing, facts, outcomes 2 × 2 and a vertical timeline. Items without them render as before. Values print as given; until a project is delivered every `v` and `when` stays a `[placeholder]`. In use on projects (Record).
- **Hold points on steps.** A `steps` item may carry `"hold": "<who signs>"` ("Your quality unit", "Both parties", "You"): the step gets a stamped hold-point card with a signature line, and the list reads as one routed line (pipe through the index column, a closed valve at each hold). Only where the step text already says the client approves or signs there; a witness point is not a hold. A list with holds keeps plain numbers (no icons). In use on svc-design (Stages), svc-fabrication (Hold points), svc-fat-sat (Process), svc-cq (Stages).
- **DocList is a turnover binder.** Every `docs` block renders as folder cards in a binder frame (rows on phones), tab = index and document code. The deciding documents are emphasized: items with `"key": true`, else the first `key` items (default 2 in a coded list of five or more; `"key": 0` for none). Put them first.
- **Standards map.** Block `standards-map` → StandardsMap: the water system's zones (generation, storage and distribution, pure steam, controls and data, fabrication, qualification) as framed areas on one pipe, each labelled with the standards that govern it. `zones: [{t, codes, to, icon}]`; `to` is the section holding the proof (a block `anchor`), and each code chip scrolls to the row naming it, unfolding it if folded. Only standards the page already lists. In use on compliance (first section, indexing the three evidence maps).
- **Notes register.** Block `register` → NotesRegister: technical notes as a drawing register, date · no. · topic · title · standard, with topic filter chips (buttons, `aria-pressed`, filtering rows on the page) and the featured note (`featured: true`, else the first of the first topic; "Latest" with a date, "Next planned" without) in a panel beside it. `topics: [...]`, `items: [{t, topic, std, date, link, featured, d}]`; an item without `date` shows "Planned", never an invented date; `d` shows only in the panel. Phones: chips scroll sideways, rows become two lines. `fold`/`fold_noun` apply under "All". In use on news.
- **Row icons.** Items of `grid`, `steps` and `options` may carry `"icon": "<name>"` (one of the 24 Icon spots: equipment such as `still`, `ro-membrane`, `loop`; stages and documents such as `pid`, `weld`, `binder`, `calendar`). The icon takes the row's index column (in `steps` it sits beside the number) on desktop and phones, aria-hidden, and replaces a grid row's small end drawing. `"icons": "auto"` on the block picks them from titles naming one piece of equipment, only when every row gets one. Give every row an icon or none; use them where items name equipment, a stage or a document, not on reasons, questions or roles. In use on home (How a project runs), systems (Seven system families), services (What leaves each stage).
- **Fold secondary detail.** Any list, spec, docs, tags or table block (including the router-free table shapes: versus, failures, evidence, plans) can set `fold: N`: the first N rows show, the rest sit behind "Show all …"; `fold_noun` names them on the button ("Show all 9 documents"). A versus keeps its verdict visible. Put the rows that decide the choice first; never fold the limits, the main standard or the scope. Folded rows don't count toward visible words.

## Ground

The page is `surface`, in light or dark theme as the brand book sets it. Sections follow each other on that ground, separated by a `line` hairline and changes of surface (`surface-raised`, `surface-sunken`), not boxes or shadows. Padding `space-16` on desktop, `space-12` on phones.

- Navy is for brand bands only: the closing Band and the Footer (about 20% of a page with the primary buttons).
- Limestone is the quiet band: the statement Band (at most one per page) and the urgent contact route.
- Figures (equipment drawings, diagrams, gauges) sit in a plain plate: a `line` frame on `surface-raised`, single-weight line art in `line-strong` with `flow` marking the water path. No ruler ticks, registration marks or title blocks.
- Blocks no longer force a theme. A block's `ground` field from earlier drafts is ignored.

## Closing checklist

The closing call to action can carry the page's "what to send us" list as `cta.include` (three to seven strings, 8 words or fewer each; `cta.include_label` overrides the label). Add `cta.returns` (two to four strings: what comes back, named as documents, only what the page already promises) and `cta.turnaround` (a placeholder until confirmed) and the closing shows the exchange: what you send → turnaround → what comes back. Use it instead of a separate `docs` block for the same list: one ask, in one place. The proof box under it shows only an explicit `cta.proof` (`{"v", "l"}`): one confirmed figure that evidences the ask, such as an Aquemi commitment or a test we run, never a public limit (a pharmacopoeia or regulatory limit, labelled or not). Leave it out otherwise; the closing does not borrow hero facts.

## Content budgets

`python tools/design_system.py check` counts overruns (one line, never fails the check yet); `check --budgets` lists them all and `check --budgets <pageId>` lists one page, as `BUDGET <page> <where> <field>: count/limit`. Words are counted as whitespace-separated tokens containing a letter or digit.

| Field | Budget | Where the check reads it |
| --- | --- | --- |
| Hero headline | ≤ 14 words | `headline` |
| Hero lead | ≤ 35 words | `lead` |
| Section heading | ≤ 9 words | every block's `h` |
| Section intro, or the one line under a heading | ≤ 35 words | `intro`; `body` of band, tags, readout; diagram `caption` |
| Item body | ≤ 25 words | `items[].d` of grid, options, steps, docs; every table cell |
| Prose block | ≤ 120 words | all of a prose block's `body` |
| FAQ | ≤ 8 questions per page; answers ≤ 60 words | faq `items`, `items[].a` |
| Spec rows | ≤ 10 per block | spec `rows` |
| Table rows | ≤ 8 per table | table `rows` |
| Blocks per page | ≤ 9 (closing not counted) | `blocks` |
| Tinted bands per page | ≤ 1 | band and tags blocks |
| Visible words per page | ≤ 1,300 (FAQ answers, folded rows and conditional form fields excluded) | hero, facts, every block string, `cta` |
| Placeholder text | ≤ 8 words | every `[...]`; the question goes in `todo` |

## Content warnings

`check` also prints one line per kind of content warning, the site-wide decision records' rules read off the page files. Like the budgets they never fail the check. `check --warnings` lists them all, `check --warnings <pageId>` one page's and `check --warnings <type>` one kind, as `WARN <type> <page> <where>: <message>`. Words inside `[placeholders]` never count (they are filled before launch); a placeholder counts as one word.

| Type | Warns on | Record |
| --- | --- | --- |
| `register` | A hero lead with more than 2 codes. A code a page uses (eyebrows included) that its reading text never spells out as "words (CODE)", "CODE (words)" or the full form. EU, CSA or DI in their second meaning (endotoxin units, software assurance, data integrity). A sentence over 20 words. A button or secondary link over 5 words. Codes are runs of two or more capitals, so the count over-flags; standards, their bodies, places and currency are cited as they are. | DR-003 |
| `faq` | One FAQ question on two or more pages, unless every page gives it the same one-line answer. Paraphrases are not caught. | DR-009 |
| `fact` | A hero fact equal to a public limit (a figure the site states with a pharmacopoeia or regulator), a code, clause or material as the value, or a label without its " · " basis. | DR-010 |
| `intent` | An intent label that ticks nothing on the linked page's form: no such option, or an option the intent never opens (name the situation first: `situation\|follow-up`). | DR-014 |
| `contact` | A `CONTACT` value that no page file carries. | DR-008 |
| `link` | A link to a page that does not exist, a `page#anchor` or `#anchor` whose page has no block with that anchor, or an in-page `#anchor` where only `page#anchor` works. | DR-008 |

## Canonical page skeletons

- **System:** hero + facts, limits (spec), how it works (diagram), design parameters (spec), options, documents, FAQ, related, closing (with "what to send" as `cta.include`).
- **Service:** hero + facts, what you get (grid or docs), how it runs (steps), deliverables (docs), proof or commercial terms, FAQ, related, closing.
- **Industry:** hero + facts, your requirements (spec or table), what we build for you (grid), evidence (docs or case), FAQ, related, closing.
- **Compliance:** hero, standards (tags or spec), how we meet them (steps or table), documents, FAQ, related, closing.
- **Company and contact:** hero, three to six focused sections, closing. On contact pages the form sits within the first two screens after the hero.

Every section answers a question the buyer has at that point. If two sections answer the same question, merge them.
