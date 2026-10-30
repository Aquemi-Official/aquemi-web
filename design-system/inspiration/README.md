# Inspiration concepts

AI-generated section concepts used as raw ideas for new components. They are not the brand: fonts, logos, copy and figures in these images are invented by the image model. Take the layout idea, then rebuild it with Aquemi tokens, type and real content.

| File | Prompted for | Became |
| --- | --- | --- |
| `concept-a.jpg` | Seven system families along the path water travels | `WaterPath` component (home page "Seven system families, one water path") |
| `concept-b.png` | Home hero: pure water measured to the decimal, precision stainless | Not built yet. Idea: an annotated line drawing of a skid with leader lines to the page's real KeyFacts, in place of the photo placeholder |

## How to make a new concept

1. In Gemini (image generation), describe the section broadly: who Aquemi is, what the section must say, the palette (deep navy, warm limestone off-white, one steel-blue accent, thin precise lines), "flat desktop UI mockup, no device frame, no people", and ask it to surprise you with the layout. Don't dictate the layout.
2. Save the image here as `concept-<letter>.<ext>` and add a row above.
3. Rebuild the idea as a component (`python tools/design_system.py new <Name> "<Group>"`), token-only, with real Aquemi copy. Never copy figures, standards or claims from the image.
