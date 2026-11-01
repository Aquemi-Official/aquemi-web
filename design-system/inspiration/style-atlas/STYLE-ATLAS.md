# Style atlas: what 94 Gemini images say about the Aquemi look

This atlas covers every Gemini image made for the site (`../gemini/01`–`94`). It is for designers and for anyone writing image prompts. It records what keeps showing up, what works, what fails, and the vocabulary to prompt with. It does not replace the brand book (`../../README.md`); where the two disagree, the brand book rules until someone changes it.

`brand_fit` (1–5) in every description scores an image against the brand book **as it is written today** (calm, light type, line art, one accent). It does not score boldness or quality. The owner wants bolder, award-level sections, so a low score on a strong idea (`76`, `83`) means "needs reworking to fit", not "reject".

## 1. Corpus and method

| | |
| --- | --- |
| Images | 94 (`01`–`30` early concepts and drawings: 30; `31`–`67` later passes: 37; `68`–`94` pass 9, varied art directions: 27) |
| Section kinds | equipment drawing 21, spec/limits 11, process diagram 8, router 8, standards 8, options 7, steps/timeline 6, documents 5, hero 3, whole page 3, other 3, FAQ 2, closing 2, case study 2, icon/spot sheet 2, form 1, footer 1, nav 1 |
| Brand fit | mean 3.67. Scores: 5 ×10, 4 ×51, 3 ×25, 2 ×8. By era: early 3.43, later 3.97, pass 9 3.52 |
| Top rated (5) | `16`, `26`, `36`, `40`, `41`, `46`, `54`, `77`, `80`, `85` |
| Lowest (2) | `07`, `10`, `11`, `14`, `22` (off-offer subjects: WFI, steam, stainless), `76`, `82`, `83` (heavy type or photo props) |

**Method.** Each image was described once by an image-to-text pass into `images/<same stem>.json`. The schema has these fields: style_family, art_direction, composition, layout_devices, palette, typography, rendering, line_and_texture, motifs, ui_patterns, motion_implied, mood, t2i_keywords, t2i_prompt, signature_idea, strengths, weaknesses and brand_fit. `aggregate.py` (standard library only) turns those descriptions into `keywords.json`:

- `phrases_by_field`: every phrase in every field, normalised (lowercase, spelling merged, plurals folded), with the number of images it appears in.
- `concepts`: about 90 curated regex concepts that merge different wordings of one idea ("deep navy background", "navy page ground" → `navy_ground`). Each concept has image counts, its share in each era, mean fit with and without it, and its files. A phrase starting with "no …" counts as a negation, never as the thing it negates.
- `families`: one primary family per image, assigned by ordered rules plus 4 overrides (`57`, `69`, `78`, `90`; the reasons are in the script).
- `cooccurrence`, `brand_fit` (by era, family and section, and the fit lift of each concept), `era_shift`, `t2i_vocabulary`, `negations`.

All counts below are **images**, not mentions. They come from `keywords.json`.

**Re-run** after adding or re-describing images. Write one JSON per new `gemini/NN-*.png` in `images/`, using the same schema, then run:

```bash
python design-system/inspiration/style-atlas/aggregate.py
```

Then update the counts here. A new image's family comes from `FAMILY_RULES`, so check the printed family table and add an `OVERRIDES` entry if a hybrid lands in the wrong family.

## 2. The brand core: visual DNA already established

These traits appear in most images. They are what the generations agree on without being asked, and they belong in every prompt.

| Trait (concept) | Images | Notes |
| --- | --- | --- |
| Flat vector / flat UI mockup | 90 / 94 | Only the pass 9 render and photo directions break it |
| Hairline 1–1.5 px strokes | 79 | Biggest positive fit lift of any trait: +0.64 (3.77 with, 3.13 without) |
| Steel-blue accent | 70 | Its share rose each era: 0.47 → 0.84 → 0.93 |
| Line art | 69 | Fit lift +0.48 |
| Monospace for figures and codes | 65 | 0.43 → 0.81 → 0.81 |
| Deep navy ground | 57 | 0.47 → 0.59 → 0.78 |
| Generous negative space | 54 | Falling: 0.73 → 0.59 → 0.37. Density is the top complaint |
| Numbered items 01–0n | 47 | Rising: 0.40 → 0.51 → 0.59 |
| Isometric equipment | 44 | Mostly drawings. Fit lift is negative (−0.06) |
| Warm limestone / paper ground | 42 | Arrived in the later passes: 0.07 → 0.62 → 0.63 |
| Light-weight headline | 39 | Largest riser: 0.03 → 0.38 → 0.89. Fit lift +0.43 |
| Square corners | 38 | Fit lift +0.29 |
| Drawing-sheet frame / zone refs | 35 | Fit lift +0.43 |
| Blueprint | 35 | Fit lift +0.48 |

What the images consistently leave out: shading (32), shadows (32), grain (24), device frames (23), people (23), hatching (19), texture (15).

Mood words: calm 42, technical 36, precise 30, confident 20, orderly 19, engineered 17, clear 12. "Dense" (11) is the only frequent mood word the brand does not want.

Most frequent t2i word pairs: steel blue 67, deep navy 63, ui mockup 42, flat vector 39, square corner 36, line drawing 35, line art 34, title block 25, negative space 23, drawing sheet 21, leader line 20.

**In one line:** deep navy and warm limestone grounds, one steel-blue line or figure, 1–1.5 px line drawings of real equipment, light headlines, mono numbers, numbered items, drawing-sheet furniture, square corners and space. Every family below is a variation on that core.

## 3. Style families

| # | Family | Images | Mean fit (range) | Eras early / later / p9 | Defining keywords (share in family) | Exemplars (fit) | Good for | Risks (images in family) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | **Isolated equipment line art** (masks and spots) | 22 | 3.41 (2–4) | 16 / 6 / 0 | black ink on pure white, isometric, catalogue line art, single isolated object, white margin | `65` (4), `66` (4), `06` (4), `12` (4), `64` (4) | page-header drawings (Illustration masks), spot icons, explainer figures, hero callout targets | off-offer subjects 18 (stainless, WFI, steam: `07` `10` `11` `14` `22` all 2), muddy when small 12, clichés 9 (`24`, `28`). The low fit comes from the subject, not the style |
| 2 | **Navy blueprint pipe-route** | 16 | 3.88 (3–5) | 6 / 6 / 4 | navy ground, light line work on navy, blueprint, one continuous pipe route, P&ID, isometric | `16` (5), `46` (5), `85` (5), `01` (4), `42` (4) | process diagram, router, project steps, "how it fits together" | dense 14, generator glitches 10, illegible 8, hard phone reflow 5. Heavy headlines in 9 |
| 3 | **Navy drawing-sheet UI** (mono documents) | 10 | 3.90 (3–5) | 5 / 2 / 3 | navy, mono throughout, numbered rows, sheet frame, title block, table | `36` (5), `77` (5), `05` (4), `48` (4), `21` (4) | documents, standards tables, forms, footer, FAQ | dense 7, decorative connectors 6, all-mono 3, fake coordinate tags |
| 4 | **Limestone engineering sheet** | 17 | 3.88 (3–5) | 0 / 14 / 3 | limestone paper ground, hairline navy rules, mono, sheet frame and title block, numbered rows | `54` (5), `34` (4), `43` (4), `45` (4), `72` (4), `74` (4) | spec sheets, fault lists, evidence maps, steps, nav, plan tiers, case record | glitches 10, dense 10, all-mono 7, phone 6, heavy caps 4, extra neutrals (beige, peach) |
| 5 | **Instrument and data-viz** | 7 | **4.14** (4–5) | 1 / 4 / 2 | one huge figure, tick scale, limit line, dials, mono everywhere | `26` (5), `39` (4), `44` (4), `50` (4), `91` (4), `37` (4) | limits, key facts, versus, standards map, home hero | implies live data the site does not have 3, decorative dials 4, glow and sci-fi (`91`) |
| 6 | **Editorial oversized type** | 7 | 3.00 (2–4) | 2 / 2 / 3 | oversized headline (7 of 7), poster scale, crop marks, split, single accent | `35` (4), `78` (3), `32` (3), `88` (3), `19` (3) | statement band, hero, closing, case-study outcome, "first system" explainers | heavy bold caps 6 of 7, hype 3, invented figures 4. The type is too heavy, not the scale |
| 7 | **Swiss grid, bento and split** | 3 | 3.67 (2–5) | 0 / 0 / 3 | navy / limestone tiles, huge light numerals, mono values, the seam as a meaning | `80` (5), `90` (4), `76` (2) | design parameters, limits, scope / battery limit | empty filler tiles, checkerboard busy at 7 items, heavy display type on `76` |
| 8 | **Banded page rhythm** (whole page) | 3 | **4.33** (3–5) | 0 / 3 / 0 | navy bands for drawings, limestone sheets for reading | `40` (5), `41` (5), `58` (3) | page-level rhythm (already `.aq-sheet`) | second neutral (beige), illegible at page scale, `58` too dense |
| 9 | **Soft 3D product render** | 3 | 3.67 (3–4) | 0 / 0 / 3 | white matte PP skid, translucent water, studio light, hotspots / leaders | `89` (4), `94` (4), `81` (3) | options on the skid, document index, sticky scroll story | glossy and consumer feel, rounded cards, needs a real Aquemi model, hype copy (`81`) |
| 10 | **Photo-real tactile and macro** | 6 | 3.00 (2–4) | 0 / 0 / 6 | photo-real still life or macro, kraft / manila paper, stamps, folder tabs | `86` (4), `84` (3), `87` (3), `92` (3), `93` (3) | standards as files, timeline over craft, compliance index | glossy/stock 6 of 6, off-palette kraft and red 4, macros read as stainless (`84`, `87`), hard to build responsively |

Families 1–5 and 8 account for 75 of 94 images: they are the house style. Families 6, 7, 9 and 10 (19 images, 15 of them in pass 9) are the variety the owner asked for.

## 4. Unique directions worth keeping (one-offs)

| File | Idea | Why keep it |
| --- | --- | --- |
| `76-p9-systems-2` | The page split is the battery limit: our scope on navy, yours on limestone, tie-in points on the seam | Best "meaning in the layout" idea in the set. Fit 2 is all type and clutter |
| `80-p9-sys-pw-2` | Swiss checkerboard of numbered parameter tiles, one blueprint tile breaking the grid | Only 5 from pass 9's non-blueprint directions. Variety that is already on-brand |
| `83-p9-services-0` | Giant cropped START / GO words behind a rising staircase of situation cards | The boldest motion idea. Needs light outline type, not heavy italic |
| `91-p9-compliance-1` | Standards as nodes on orbit rings around a plant schematic | A hero diagram built from brand line work. Lose the glow and make the rings mean something |
| `94-p9-compliance-3` | Sticky cutaway that switches "active state" as standard cards scroll past on a rail | The most buildable scroll story (GSAP ScrollTrigger pin) |
| `88-p9-industries-2` | Modernist paper-cut collage of pipes and tanks in navy / steel-blue / limestone | Ownable illustration language that is not line art. Cheap SVG, animatable |
| `13-art-svc-design` | Equipment rising out of its own 2D drawing | Design-to-build in one image, good for a "Design" service hero or a scroll morph |
| `37-concept-home-hero` | Purity as a plotted measurement: loop as concentric hairlines on axes | Data as illustration, no object needed |
| `53-concept-hold-points` | Client hold points as closed valves needing a signature stamp | Turns a QA concept into a pipe-native device |
| `45-concept-evidence` | Hairline wires trace a standard to the documents that prove it | Interaction idea for EvidenceMap (fan-out on select) |
| `72-p9-home-3` | Service promises pinned to an exploded pump | Exploded view as an information layout (fix: leaders must point at the parts they describe) |
| `84-p9-services-1` | Rising hold-point timeline drawn over a macro weld | Craft plus schedule in one frame. Redo as PP butt-fusion, not chrome |
| `31-art-ind-cdmo` | Roofless suites all fed by one overhead header | "One supply, many clients" as an architectural cutaway |
| `48-concept-roles` | Our stamps tinted, yours outlined | Ownership encoded by fill vs outline. Already RoleMatrix |

## 5. Intersections: families that combine well

Co-occurrence (images that carry both traits, with their mean fit):

| Pair | Images | Mean fit | Exemplars |
| --- | --- | --- | --- |
| line art + table | 17 | **4.24** | `40` `41` `46` `77` `80` `85` (all 5) |
| blueprint + light headline | 20 | 4.20 | `77`, `85`, `46` |
| line art + light headline | 27 | 4.15 | `54`, `74`, `70` |
| light headline + sheet frame | 17 | 4.12 | `54`, `36`, `41` |
| light headline + line art + leader callouts | 14 | 4.07 | `54` (5), `77` (5), `91`, `94`, `90` |
| mono + oversized numerals + light headline | 10 | 4.00 | `54`, `77`, `80`, `90`, `89` |
| oversized headline + line art | 7 | 3.71 | `02`, `35`, `37`, `90`, `91` |
| 3D render + leader callouts | 7 | 3.57 | `89`, `94`, `90`, `86` |
| navy + limestone split in one section | 11 | 3.45 | `40` (5), `54` (5), `76` (2), `83` (2) |
| heavy headline + mono | 22 | 3.45 | the pairing that drags scores down |

What this says: the strongest images put **data (table, mono figures) beside a line drawing, joined by leaders, under a light headline**. The split and editorial-scale ideas score low only when they carry heavy type.

**Hybrids worth generating next**

1. **Light editorial + figure plate.** `78`'s oversized stacked headline and number staircase, set in light weight, with a line-drawn PP loop in place of the glass knot. Every leader goes to a named part. Exemplars: `78`, `54`, `37`, `35`.
2. **Swiss readout grid.** `80`'s checkerboard, each tile a `26`-style readout: huge light numeral, tick scale, limit line. One tile is the drawing. Exemplars: `80`, `26`, `39`, `90`.
3. **Sticky drawing, scrolling sheet.** `94`'s pinned visual and card rail with a line-art cutaway instead of the render. Cards are limestone sheets with title blocks. Exemplars: `94`, `54`, `16`, `41`.
4. **Battery-limit split, calm.** `76`'s seam as scope boundary, with light type and P&ID tie-in nodes on the seam. Each card sits on the side that supplies it. Exemplars: `76`, `40`, `85`.
5. **Kinetic light type router.** `83`'s cropped giant word as a light outline, over a single pipe that carries the situation cards (`16`, `33`). Exemplars: `83`, `16`, `33`, `35`.
6. **Monochrome macro plate + spec table.** `86`'s figure-plate layout with the macro duotoned to navy and limestone, a PP weld or membrane only, and `77`'s leader discipline. Exemplars: `86`, `87`, `77`.

## 6. Reusable UX vocabulary

**Layout devices** (images):

| Device | Images | Fit with | Exemplars |
| --- | --- | --- | --- |
| generous negative space | 54 | 3.74 | `26`, `16` |
| numbered items 01–0n | 47 | 3.85 | `80`, `54` |
| square corners | 38 | 3.84 | `77`, `85` |
| drawing-sheet frame / zone refs | 35 | 3.94 | `36`, `41`, `38` |
| one continuous pipe / route linking items | 33 (6 are literal pipes inside equipment drawings) | 3.67 | `16`, `46`, `85`, `01` |
| cards | 33 | 3.55 | `62`, `94` |
| leader-line callouts | 30 (0.10 → 0.63 by era) | 3.63 | `77`, `54`, `72` |
| hotspots / node dots | 28 | 3.75 | `81`, `89` |
| table / matrix / register | 28 | 3.89 | `77`, `34`, `63` |
| title block | 26 | 3.92 | `36`, `41` |
| crop / registration marks, corner brackets | 23 | 3.83 | `32`, `16` |
| split screen / two halves | 21 | 3.57 | `76`, `54`, `40` |
| ruler / tick scale | 20 | 3.95 | `26`, `39` |
| hairline rules between rows | 19 | 3.89 | `78`, `80` |
| margin notes | 19 | 3.79 | `54`, `27` |
| graph-paper / dot grid ground | 16 (none in pass 9) | 3.94 | `16`, `39` |
| tabs / folder tabs | 16 | 3.50 | `38`, `62` |
| dimension lines | 15 | 3.80 | `37`, `86` |
| stamps / signature blocks | 11 | 3.45 | `48`, `53` |
| sticky visual + rail | 9 | 3.89 | `94`, `54`, `79` |
| folding rows / accordion | 8 | **4.12** | `43`, `41`, `36` |
| stepped / staircase | 7 | 3.29 | `16`, `78`, `83` |
| one highlighted row or value | 6 | 3.83 | `45`, `78`, `55` |
| bento / colour tiles | 6 | 3.83 | `80`, `90` |

**Motion implied** (images). Most of these map directly to GSAP:

| Motion | Images | GSAP form | Exemplars |
| --- | --- | --- | --- |
| lines, leaders, pipes draw on | 52 | stroke-dashoffset / DrawSVG on enter | `77`, `54`, `72` |
| water or a pulse travels the pipe | 40 | MotionPath dot, or a gradient stroke scrubbed by ScrollTrigger | `01`, `16`, `74`, `84` |
| items light up in sequence | 33 | stagger timeline keyed to the flow position | `01`, `79`, `91` |
| figures count up | 31 (fit 4.00, +0.49 lift) | tweened number with tabular mono | `26`, `80`, `90` |
| needles, dials, bars sweep or fill | 29 | rotation / scaleX from 0 | `50`, `44`, `68` |
| pulse / glow on a node | 29 | opacity pulse, once | `81`, `89` |
| slide / assemble / explode | 24 | from offsets; exploded views on scroll | `72`, `88`, `92` |
| mechanical (impeller spins, valve turns) | 23 | rotation, once | `73`, `85` |
| hover or select highlights a route | 21 | hover timeline | `77`, `85`, `91` |
| scroll-driven / sticky / pinned | 21 | ScrollTrigger pin + scrub | `94`, `84`, `89` |
| row or card expands | 20 | height / clip-path | `43`, `15` |
| stamp lands | 6 | short drop with one settle (the brand book bans bounce) | `48`, `53`, `92` |
| type writes on / kinetic type | 4 | SplitText, or a horizontal ticker | `83`, `72`, `69` |

The brand book caps motion at a 16 px translate with no parallax on text, and AGENTS.md says motion plays once in under 5 s. Most of the bolder ideas (pinned scroll stories, exploded views, kinetic type, flow scrubbed to scroll) break those rules. If the owner wants them, the Motion section of the brand book has to change first.

## 7. What fails repeatedly (anti-patterns)

From weaknesses and brand_fit_why (images flagged):

| Failure | Images | Typical files | Prompt fix |
| --- | --- | --- | --- |
| dense, cluttered, busy | 67 | `52`, `58`, `93` | "one idea, at most 5 labelled items, half the frame empty" |
| illegible or muddy at small or phone size | 40 | `10`, `61`, `94` | "few large labels, no micro text" |
| generator glitches: duplicated labels, garbled text | 39 (0.20 → 0.63 by era) | `68`, `70`, `90` | ask for fewer labels, use `<CONTENT>` placeholders, never trust image text |
| decorative lines or metaphors that mean nothing | 32 (0.27 → 0.56) | `23`, `79`, `91` | "every connector links two named things" |
| off-offer equipment: stainless, WFI, steam, stills | 30 | `07`, `11`, `14`, `22`, `87` | "white polypropylene (PP) pipe and skid, PVC pretreatment vessels, butt-fusion welds" |
| cliché props: clipboard, toolbox, laptop | 23 | `24`, `28`, `29` | name the real object |
| invented figures or fake live UI | 20 | `26`, `44`, `80` | "placeholder figures in [brackets]" |
| heavy, bold, condensed caps headline | 19 | `18`, `19`, `76`, `83` | "light-weight 300 sans headline in sentence case" |
| hard to reflow to phone | 16 | `46`, `53` | "stacks to one column" |
| monospace everywhere | 15 | `05`, `21`, `63` | "mono only for figures, units and codes" |
| glossy, photo-real, skeuomorphic props | 14 | `81`, `82`, `92` | keep renders matte and rare |
| off-palette colour or second neutral (red, green, peach, beige, kraft) | 12 | `19`, `43`, `47`, `92` | "only navy, limestone, white and one steel blue" |
| rounded corners or capsules | 11 | `44`, `47`, `51` | "square corners" |
| hype copy ("99.9999% pure", "GUARANTEED", "Seamless") | 9 | `37`, `78`, `81` | "no slogans" |
| glow, bloom, sci-fi | 7 | `79`, `87`, `91` | "no glow" |

**Negative keywords** (paste at the end of every prompt):
`no bold or heavy headline, no condensed display type, no italic display, no all-caps headline, no monospace body text, no rounded corners, no pills, no glow, no bloom, no neon, no lens flare, no gradients except a faint ground, no drop shadows, no glossy reflections, no photographs, no stock props, no clipboards, no toolboxes, no laptops, no people, no lab coats, no water splashes, no droplets, no molecules, no globes, no stainless steel, no tri-clamps, no orbital welding, no distillation columns, no steam generators, no red, no green, no orange, no beige, no kraft paper, no device frame, no micro text, no duplicated labels, no slogans, no decorative connector lines`

## 8. Prompt kit

Assemble prompts as **base + one style module + one section module + content + negatives**. Keep the content to the section's real words, or use `<CONTENT>` with placeholders. Never copy figures back out of an image.

**Base block** (the brand core in t2i vocabulary):

> A 1440 px wide desktop website section, flat straight-on UI mockup, no device frame, no people. Aquemi, maker of modular polypropylene Purified Water systems for pharmaceutical plants. Palette: deep navy (#0F2A47) and warm limestone off-white grounds, pure white, one steel-blue accent used as a line or a single figure. Large light-weight sans-serif headline in sentence case, monospace only for figures, units and standard codes. Square corners, hairline 1–1.5 px rules and line drawings, numbered items, generous negative space. Calm, precise, engineered. Show one idea clearly with at most five labelled items.

**Style modules** (pick one, 1–2 lines each):

| Family | Module |
| --- | --- |
| 1 Equipment line art | isometric technical line drawing of white polypropylene equipment, catalogue illustration, uniform hairline strokes, isolated on the ground, no shading, no hatching |
| 2 Navy pipe-route | technical blueprint on deep navy, pale blue-white hairline line art, one continuous double-line pipe in steel blue linking every item, P&ID valve symbols at the joints |
| 3 Navy sheet UI | engineering drawing sheet on navy, zone-reference border and title block, mono document codes, hairline table rules |
| 4 Limestone sheet | limestone paper drawing sheet with a fine navy border, title block bottom right, navy hairline diagram, numbered notes in a narrow column |
| 5 Instrument | instrument-panel readout: one oversized light numeral with its unit, a fine tick scale and a single limit line with a small outlined limit tag |
| 6 Editorial | editorial magazine spread, dramatic asymmetric layout, oversized light-weight headline cropped by the frame, one striking line-drawn figure, hairline rules |
| 7 Swiss / bento | Swiss International Typographic Style, strict modular grid of square navy and limestone tiles, huge light numerals with slash, one tile holds a blueprint drawing |
| 8 Page rhythm | long page alternating navy drawing bands and limestone reading sheets, each band one picture |
| 9 Soft 3D (rare) | one matte white polypropylene skid in soft 3D isometric render, even studio light, translucent pale-blue water, hairline leader lines to labels |
| 10 Macro (rare) | macro close-up of a polypropylene butt-fusion weld or membrane, duotone navy and limestone, shallow depth of field, crisp hairline annotations over it |

**Section modules:**

| Section | Module |
| --- | --- |
| Hero | headline and one lead line left, the page's equipment drawing right with leader-line callouts to three key figures |
| Spec / limits | limits as rows: parameter, mono value with unit, standard reference. One row highlighted in steel blue |
| Process / steps | stages strung along one continuous pipe, numbered 01–05, each with a short title and what it leaves behind |
| Router | three to five situations on the left, each routed by one line to its system and first step |
| Standards / evidence | each standard code in mono, joined by a hairline to the part of the plant it governs and to its proof document |
| Documents | documents as a register or binder index: code, title, revision, who signs |
| Options | options shown on the skid they attach to, each a numbered module on the drawing |
| Band / closing | one large light statement, one measured figure as proof, one action |

**Example prompts**

1. *Limits as a Swiss readout grid (hybrid 2):* [base] + "Swiss International Typographic Style, strict modular grid of square navy and limestone tiles; each tile is an instrument readout with one huge light numeral, its unit in mono, a fine tick scale and a single steel-blue limit line; one tile holds a white isometric line drawing of a polypropylene skid on navy. Section: Purified Water release limits: conductivity, TOC, microbial action level, each with its pharmacopoeia reference in mono." + negatives.
2. *Standards as a sticky drawing (hybrid 3):* [base] + "Left 60 %: a pinned navy blueprint cutaway of white polypropylene pipework and a storage tank in hairline line art, the active part outlined in steel blue. Right: limestone drawing sheets stacked on a thin vertical rail, each with a title block, a mono standard code, what it requires and the document that proves it." + negatives.
3. *Scope as a battery-limit split (hybrid 4):* [base] + "Section split exactly in half, navy left, limestone right; the vertical seam is the battery limit. Left: what Aquemi supplies, as numbered hairline-framed items. Right: what the site provides. Tie-in points (feed water, drain, power, compressed air) are small P&ID nodes sitting on the seam, each labelled in mono. Light headline crossing the seam." + negatives.

## 9. Toward unification

Three ways to unify the families into one system:

| | A. Drawing set | B. Measured editorial | C. Material and line |
| --- | --- | --- | --- |
| **Idea** | The site is a set of engineering drawings. Every section is a different sheet type: general arrangement (GA), P&ID, schedule, detail, datasheet, register. Variety comes from sheet type, not art direction. This is the current site, made consistent. | Editorial-scale light typography and numbers do the shouting: huge light headlines, figures as heroes, Swiss tiles and splits. Line drawings appear as figure plates with leaders. Variety comes from scale, crop and grid. | The line-drawing system above, plus a rare "material moment" per page: a matte PP render, a duotone macro of a weld or membrane. It shows the product's real material, which no line drawing can. |
| **Core keywords** | blueprint, navy ground, limestone sheet, title block, zone frame, P&ID, one continuous pipe, hairline, mono codes | oversized light headline, giant light numerals, Swiss grid, asymmetric spread, split seam, hairline rules, figure plate, leader callouts | white polypropylene, matte render, translucent water, duotone macro, hotspots, sticky reveal, plus the A keywords |
| **Absorbs** | 1, 2, 3, 4, 8 (68 images) | 5, 6, 7, with 1 and 4 as figure plates | 9, 10, with 1 and 2 as the base |
| **System impact** | Tokens unchanged. Components: a shared sheet frame / title-block primitive, P&ID glyph set, pipe-route primitive. Motion: line-draw and flow only. | Tokens: add a `display-xxl` step (light 300, clamp to about 160 px), a display size for mono numerals, tile grid spacing, a navy/limestone tile pair. Components: ReadoutGrid, Split (seam), EditorialSpread, FigurePlate. Motion: count-up, mask-reveal type, light kinetic type. | Tokens: an image treatment (duotone navy/limestone map), a render ground. Components: StickyStory (pin + rail), Hotspot. Assets: a real Aquemi 3D model and macro photos. Motion: ScrollTrigger pin/scrub. |
| **Risk** | Blueprint everywhere, which the owner already rejected. Dense: 14 of 16 navy-route images flagged | Bold type drifts back to heavy caps (19 images failed on that). Needs strict "light only" rules | Glossy and stock look (`81`, `82`, `92`), wrong-material renders (`84`, `87`), needs assets that do not exist yet |

**Recommendation: B as the spine, A as its drawing language, C as a capped accent.** That means:

- Measured editorial sets the page's voice. Big light type, numbers as heroes, Swiss/split grids for variety and "chaos".
- Drawings and data always appear together (line art + table: 17 images, mean fit 4.24, the best pairing in the set). The drawing set supplies every figure, so blueprint becomes one sheet among many instead of the whole page.
- At most one material moment (render or duotone macro) per page, only of real PP equipment.
- Per page: one loud section (hybrid 1, 4 or 5), the rest calm. Never two adjacent sections in the same family.
- Two changes to the brand book make this possible: allow light display type well above `display-xl`, and loosen Motion for one pinned or scrubbed story per page.

This keeps what the ten five-rated images share: all ten have a navy ground, a steel-blue accent, hairline strokes and mono figures, and eight of the ten have a light headline, line art and square corners. It also delivers the boldness the owner asked for through scale and composition, not through the heavy type, glow and props that cause the low scores.
