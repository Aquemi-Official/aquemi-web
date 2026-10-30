CaseStudy summarizes a delivered project as client, problem, system delivered and measured outcome.

- Markup: `<div class="aq-cases">` with one `<div class="aq-case">` per project: `<span class="aq-h3">` title, then a `<dl>` with `<dt>`/`<dd>` pairs in this order: Client, Problem, System delivered, Measured outcome.
- The outcome is a measured figure with its unit and method. Use real figures or don't publish the case; until then write placeholders in square brackets.
- Name the client only with written permission; otherwise describe it ("Mid-size biologics CDMO, Ontario").
- Optional fields, in this order inside the `dl`: Standard met (after System delivered) and How it was measured (after Measured outcome). The method names the test, the sampling point, the number of samples or the period, and the executed report the figure comes from.
- Project profile: an optional `<dl class="aq-key-facts aq-case__profile">` between the title and the `dl`, the KeyFacts markup with three or four headline KPIs (capacity, conductivity, TOC, timeline). Same rules as KeyFacts: value with unit and standard, unconfirmed values in square brackets.
- Status: an optional `<span class="aq-case__status">` above the title, on `caution-tint`, for a case that is a template or still awaiting client approval ("Template · awaiting a real project"). Remove it when the case is published.
- Sheet layout: `aq-cases aq-cases--sheet` stacks one case per row as a two-column spec sheet, so the profile strip has room. Use it when cases carry a profile.
- Columns wrap at 260 px.
- A single case (`aq-cases` with one child) lays its `dl` out as a two-column spec sheet: labels left, facts right. On phones it stacks again.
