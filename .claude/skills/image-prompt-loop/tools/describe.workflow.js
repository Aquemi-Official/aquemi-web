export const meta = {
  name: 'style-atlas',
  description: 'Image-to-text over every Gemini original: per-image keywords and prompts, then a style atlas for the Aquemi brand',
  phases: [{ title: 'Describe', detail: 'one agent per ~11 images, writes one JSON per image' }, { title: 'Synthesize', detail: 'keyword counts, style families, brand core, unification options' }],
}
const DIR = 'C:/Users/Daniil/Desktop/Aquemi-Website/aquemi-web/design-system/inspiration'
const OUT = DIR + '/style-atlas'
const files = Array.isArray(args) ? args : args.files
const groups = []
for (let i = 0; i < files.length; i += 11) groups.push(files.slice(i, i + 11))

const SCHEMA_TEXT = `{
 "file": "<file name>",
 "prompted_for": "<what the image was asked to be, from the README tables or research/pass9/sections.json; '' if unknown>",
 "section_kind": "<hero | process diagram | spec/limits | router | steps/timeline | documents | options | standards | FAQ | form | closing | footer | nav | case study | equipment drawing | icon/spot sheet | whole page | other>",
 "style_family": "<2-4 words naming its visual family, e.g. 'navy blueprint line art', 'editorial oversized type', 'soft 3D product render'>",
 "art_direction": ["<3-6 tags>"],
 "composition": ["<layout and composition traits>"],
 "layout_devices": ["<concrete devices: leader-line callouts, sticky visual, staircase cards, orbit rings, pipe route linking items...>"],
 "palette": ["<colours as seen, with role: 'deep navy ground', 'limestone sheet', 'steel-blue accent line'...>"],
 "typography": ["<type traits: light condensed caps, mono figures, oversized cropped numerals...>"],
 "rendering": ["<medium: flat vector, 1.5px line art, isometric, soft 3D render, paper cut-out, photo-real macro...>"],
 "line_and_texture": ["<stroke weight, grids, hatching, dot grids, paper grain, shadows...>"],
 "motifs": ["<recurring objects/ideas: water drop, pipe, tank, stamp, title block, gauge...>"],
 "ui_patterns": ["<web UI patterns visible: tabs, accordion, tiles, hotspots, progress rail...>"],
 "motion_implied": ["<what would animate: water travels pipe, gauge sweeps...>"],
 "mood": ["<3-5 adjectives>"],
 "t2i_keywords": ["<25-40 short text-to-image keyword phrases, most important first, the vocabulary an image model would need to reproduce this look (style, medium, composition, palette, lighting, detail); model-agnostic; no brand names except Aquemi palette words>"],
 "t2i_prompt": "<a 70-120 word text-to-image prompt that would regenerate this look for a new section, content-neutral (use <CONTENT> where the section's content goes)>",
 "signature_idea": "<one sentence: the memorable idea>",
 "strengths": ["<what works for an industrial pharma-water B2B site>"],
 "weaknesses": ["<what fails: clutter, illegible, cliché, off-brand...>"],
 "brand_fit": <1-5>,
 "brand_fit_why": "<one line against the brand book: navy/limestone/one steel-blue accent, Geist light headlines + Geist Mono figures, precise, calm, square corners, space as a material>"
}`

phase('Describe')
const described = await parallel(groups.map((g, gi) => () => agent(
  `Image-to-text for the Aquemi design study. Look at each of these Gemini-generated images (one at a time, with the Read tool; they are UI concept mockups, equipment drawings or icon sheets made for the Aquemi website, a polypropylene Purified Water systems maker for pharma plants):\n` +
  g.map(f => `- ${DIR}/gemini/${f}`).join('\n') +
  `\n\nContext for 'prompted_for': ${DIR}/README.md has tables saying what each numbered image was prompted for (rows mention gemini/NN-...); for files named NN-p9-<page>-<n>.png the prompt is the item with key '<page>.<n>' in C:/Users/Daniil/Desktop/Aquemi-Website/research/pass9/sections.json (fields h, dir, mid; images 68-75 used an earlier blueprint wording, not their 'dir'). Read the README once, sections.json only if you have p9 files.\n\n` +
  `For EACH image write ${OUT}/images/<file name without .png>.json (UTF-8, valid JSON) with exactly this shape:\n${SCHEMA_TEXT}\n` +
  `Be concrete and visual; describe what is actually in the image, not what it should be. Ignore invented text in the image except to note typography. t2i_keywords must be reusable generation vocabulary (e.g. 'isometric line drawing', 'hairline 1.5 px strokes', 'deep navy background', 'oversized cropped numerals', 'soft studio lighting', 'leader-line callouts', 'generous negative space'). Create the images/ folder if missing. Do not edit any other file. Return a one-line summary per image: file | style_family | brand_fit.`,
  { label: `describe:${gi + 1}`, phase: 'Describe' })))
log(`described ${described.filter(Boolean).length}/${groups.length} groups`)

phase('Synthesize')
const atlas = await agent(
  `You are the style analyst for the Aquemi website design study. ${files.length} Gemini images (every generation made for the site so far, numbered oldest first in ${DIR}/gemini/) have been described as JSON in ${OUT}/images/*.json (schema: style_family, art_direction, composition, layout_devices, palette, typography, rendering, line_and_texture, motifs, ui_patterns, motion_implied, mood, t2i_keywords, t2i_prompt, signature_idea, strengths, weaknesses, brand_fit). Read the brand book ${DIR}/../README.md ("Visual foundations" and "Content fundamentals"), the inspiration README ${DIR}/README.md (which concepts became which components), and the owner's direction: the site is dense documentation-like tables; the owner wants award-winning, unique, bold section design with GSAP motion, variety and some chaos (not blueprint everywhere), and wants to understand the styles that keep showing up so the brand and design system can later be unified.\n\n` +
  `1. With python (Bash), aggregate: frequency of every normalized keyword per field (lowercase, strip, merge obvious plurals/synonyms you define in the script), co-occurrence of style_family/rendering tags, brand_fit by family, and how styles shifted over time (by image number: 01-30 early concepts and drawings, 31-67 later passes, 68-94 pass 9 varied art directions). Save the script as ${OUT}/aggregate.py (re-runnable, standard library only) and its output as ${OUT}/keywords.json.\n` +
  `2. Write ${OUT}/STYLE-ATLAS.md, for designers and for future prompt writing, concise and specific (tables welcome):\n` +
  `   - Corpus: counts, method (image-to-text JSON per image, aggregate.py), how to re-run.\n` +
  `   - The brand core: the traits present across most images (keywords with counts) — the visual DNA already established.\n` +
  `   - Style families (6-10): name, defining keywords, exemplar files (3-5 each, by file name), what each is good for (which section kinds), risks, average brand_fit.\n` +
  `   - Unique directions: one-off images with ideas worth keeping.\n` +
  `   - Intersections: families that combine well (e.g. editorial type + line-art callouts), with the exemplars that already show it, and 4-6 hybrid directions worth generating next.\n` +
  `   - Recurring layout devices and motion ideas (the reusable UX vocabulary), with counts.\n` +
  `   - What fails repeatedly (anti-patterns) and the negative keywords to put in prompts.\n` +
  `   - Prompt kit: a base prompt block (brand core in t2i vocabulary), a set of style modules (one per family: 1-2 lines of keywords each), section-type modules, and negative keywords; plus 3 example assembled prompts.\n` +
  `   - Toward unification: 3 candidate unified directions (each: a name, a one-paragraph description, its core keywords, which families it absorbs, and what it would mean for the design system tokens/components), and your recommendation.\n` +
  `Never invent images or counts; cite file names. Return a 10-line summary of the findings.`,
  { label: 'synthesize', phase: 'Synthesize' })
return { groups: described.map(d => (d || '').split('\n').length), atlas }