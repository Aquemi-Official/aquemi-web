# Website

The site has one job: help a pharmaceutical engineering or quality team decide that Aquemi can deliver a compliant water system, then start a conversation. Every page should answer three questions quickly: what it is, which standard it meets, and how to talk to us.

## Sitemap

| Section | Pages | Purpose |
| --- | --- | --- |
| Systems | Purified Water (PW) generation · Water for Injection (WFI) by distillation · WFI by membrane · Pure Steam generators · Storage and distribution loops · Pretreatment · Monitoring and controls | One page per system family: what it does, key specifications, configuration options, documentation delivered. |
| Services | Process design and engineering · Fabrication · FAT and SAT · Commissioning and qualification (IQ/OQ/PQ) · Service and spare parts · Upgrades and retrofits | How a project runs from user requirement specification to handover and beyond. |
| Industries | Pharmaceutical · Biotechnology · Medical devices · Contract manufacturing (CDMO) | Each industry page links to the systems it uses most. |
| Compliance | Standards we design to · Documentation package · Quality management | The page validation and QA teams will look for first. Only list certifications Aquemi actually holds. |
| Projects | Case studies | Problem, system delivered, measured outcome. Use real figures or don't publish. |
| Company | About · Careers · News | |
| Contact | Request a proposal · Service request · Locations | Forms ask for project stage, system type and required capacity in L/h. |

## Home page

1. **Hero.** `eyebrow`, one `display-xl` line, one `body-lg` sentence, one primary button ("Request a proposal") and one secondary link ("Explore systems"). A wide photograph of a finished skid or an installed loop on `navy` or `surface`. No carousel.
2. **Systems index.** The system families in a 3-column grid on desktop, 1 column on phones. Each item: `h3` name, one line of description, the governing standard as a tag. Hairlines between items, not cards.
3. **Proof in numbers.** One `readout`: a single large measurement with its method on the limit tag and a one-sentence caption below. Only real, sourced figures.
4. **How we work.** The project sequence (Design → Fabricate → Test → Qualify → Support) as a horizontal sequence. This is a genuine order, so numbering is appropriate here.
5. **Compliance strip.** Standard tags on `surface-sunken` with a link to the Compliance page.
6. **Case study.** One project, full-bleed image, outcome in one sentence.
7. **Closing band.** `navy` band, `h1` in `ink-inverse`, primary button in Limestone.
8. **Footer.** `navy`, Limestone logo, sitemap columns, address, legal.

## System page template

1. Hero: `eyebrow` with the system family and standard, `display` name, `body-lg` summary, image.
2. Key specifications as a SpecTable (capacity range, product water quality, sanitization method, materials, surface finish such as Ra ≤ 0.5 µm electropolished).
3. How it works: a line-art process diagram with the water path in `flow`.
4. Configurations and options, in a two-column list.
5. Documentation delivered: functional specification, P&IDs, material certificates, weld logs, FAT/SAT protocols, IQ/OQ protocols.
6. Related systems and a closing call to action.

## Navigation

- Sticky top bar on `surface` with a `line` bottom rule: logo left; Systems, Services, Industries, Compliance, Projects, Company; "Request a proposal" button right.
- On phones, collapse to the logo, the button and a menu toggle. The menu opens full-screen on `surface`.
- Mega-menus list system pages in plain text columns with no icons.

## What we learned from category leaders

Leading suppliers organise their sites by system type, industry and service, and put compliance documentation front and centre. Keep that structure because buyers expect it. Make the presentation quieter and more exact: fewer stock images, fewer superlatives, more specifications, more white space.

## Page grammar

Every page reads as one system, on a phone first.

- **Section head.** Every section opens the same way: optional eyebrow (the system or standard), an `h2` of 9 words or fewer, an optional one-sentence intro. Block fields `eyebrow`, `h`, `intro`; the renderer adds it (`wSecHead` in `assets/src/core.js`). No other mono caption above a table or list.
- **One list grammar.** Lists are hairline-separated rows with the index in a left column (`.aq-rows`): options, steps, link lists, FAQ, documents, related pages. Boxes are kept only for ProcessDiagram nodes, EnquiryForm panels and CaseStudy cards.
- **One index style.** `01` in Geist Mono 13 px, `ink-subtle`, left column (`.aq-index`). Never `01 /`, `[01]`, ghost numerals or filled numbers.
- **No grid paper behind reading text.** Blueprint grids only behind illustrations (hero drawing, diagram).
- **Tables are for comparisons.** CompareTable only with three or more columns; parameter/value/basis lists are SpecTable, lists of things are DocList or rows.

## Band rhythm

- Sections sit on `surface` by default, separated by a `line` hairline. Padding `space-16` on desktop, `space-12` on phones.
- At most **one** tinted band in the middle of a page: `aq-band--sunken` (the StandardsGrid block) or the limestone statement Band.
- `aq-band--navy` is only for the closing call to action. Nothing else on the page is navy.

## Closing checklist

The closing call to action can carry the page's "what to send us" list as `cta.include` (three to seven strings, 8 words or fewer each; `cta.include_label` overrides the label). Use it instead of a separate `docs` block for the same list: one ask, in one place.

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
| Visible words per page | ≤ 1,300 (FAQ answers and conditional form fields excluded) | hero, facts, every block string, `cta` |
| Placeholder text | ≤ 8 words | every `[...]`; the question goes in `todo` |

## Canonical page skeletons

- **System:** hero + facts, limits (spec), how it works (diagram), design parameters (spec), options, documents, FAQ, related, closing (with "what to send" as `cta.include`).
- **Service:** hero + facts, what you get (grid or docs), how it runs (steps), deliverables (docs), proof or commercial terms, FAQ, related, closing.
- **Industry:** hero + facts, your requirements (spec or table), what we build for you (grid), evidence (docs or case), FAQ, related, closing.
- **Compliance:** hero, standards (tags or spec), how we meet them (steps or table), documents, FAQ, related, closing.
- **Company and contact:** hero, three to six focused sections, closing. On contact pages the form sits within the first two screens after the hero.

Every section answers a question the buyer has at that point. If two sections answer the same question, merge them.
