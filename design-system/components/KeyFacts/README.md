KeyFacts is a strip of three or four large figures, each with its unit and the standard behind it, that tells an engineer what a page stands on before they read a word of copy.

- Markup: `<dl class="aq-key-facts">` with one `<div>` per fact holding `<dt>` (label: parameter and standard, "Conductivity at 25 °C · USP <645>") then `<dd>` (value with unit, "≤ 1.3 µS/cm"). CSS shows the value above the label; keep `dt` first in the markup so screen readers read the label first.
- Values use Geist Mono 300 at 32/38 px (24/30 px in narrow containers) in `ink`, tabular figures. Labels use the eyebrow style in `ink-muted`. A `line-strong` rule runs above; `line` hairlines separate the facts.
- On the site it sits at the bottom of the Hero (`facts` on a page in `content/pages.json`). Take every figure from the page's own spec table or copy; unconfirmed figures stay in `[square brackets]`.
- Three or four facts. Write values exactly as the standard does, with the comparison sign.
- Not for one figure with an explanation: use Readout. Not for full specifications: use SpecTable.
