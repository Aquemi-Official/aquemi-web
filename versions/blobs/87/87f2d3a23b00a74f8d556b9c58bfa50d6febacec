SplitSection puts a section's heading in a sticky left column and its content on the right, so long pages alternate between full-width and two-column rhythm instead of stacking heading, text, heading, text.

- Markup: `<section class="aq-section">` holding `<div class="aq-in aq-split-section">` with two children: `<div class="aq-split-section__head">` (an `<h2 class="aq-h1">`, optionally one `aq-lead` sentence) and `<div class="aq-split-section__body">` (the content component).
- Columns 4 : 8 with `space-12` between. The heading column sticks at `space-8` from the top while the body scrolls past it. Inside the head, `aq-h1` drops to 32/38 px and `aq-lead` to 16/26 px so the column stays narrow.
- Use it for Prose, OptionList, FAQ, DocList and EnquiryForm. In Prose, the first paragraph is set at 20/30 px in `ink` as the takeaway; the rest stay `ink-muted`.
- Keep full width (plain `aq-section` with `aq-stack-l`) for LinkGrid, SpecTable, comparison tables, ProcessDiagram, ProcessSteps and CaseStudy: they need the whole measure.
- Below 860 px container width it becomes one column and the heading stops sticking. The head then matches every stacked section head (`aq-h1` 30/36, lead 18/28) with a `space-8` gap to the content, so the page keeps one rhythm.
- Don't put two SplitSections with the same body type next to each other; alternate with a full-width section.
