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
