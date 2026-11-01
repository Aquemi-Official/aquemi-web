PqCalendar reads PQ phases as a year's sampling calendar: the year in week bars, a zoom from the first weeks to the sample grid (a dot per sample), the total set large (look `pq-calendar`, steps block).

Concept: Swiss data-graphics direction; the boxed hero figure from services.1 (PQ's 12 months as the hero), built here as a calendar with a zoom instead of a timeline.

## Markup
`<section class="aq-section aq-band--limestone aq-pq-calendar-sec">` > section head, `.aq-pq-calendar[data-theme=light]` > `__strip` (`svg.__year` week bars, `__months`, `__ylab`), `svg.__zoom`, `__body` > `__zoomed` (`svg.__grid` dots and hold line, `ol.__phases` with `li.__ph.is-p1|is-p2`) and `__aside` (`p.__total` with `__num`, `__unit`, `__eq`; `ol.__phases--rest`).

## Fields
`h`, `intro`, `items` [{`t`, `d`, `hold`, `days`}] (a phase with `days` is drawn on the grid; one without is the routine plan to the end of the year), `grid` {`points`, `days`, `rows`, `cols`, `unit`} (the total is points x days and must match the intro), `year` {`weeks`, `months`, `label`}.

## Rules
- Phase 1 `navy`, phase 2 `flow`, the routine plan a `navy` hatch (svg pattern, not a gradient). Keys under each phase repeat the fills. The figure carries `data-theme="light"` so the fills stay legible on limestone in both themes.
- The hold point is a dashed line through the grid where the phase with `hold` starts, with "Hold point · Signed by …" under that phase.
- Phone: strip, zoom and grid at full width, every other month number shown, phases stacked.

## Motion
The week bars rise left to right, the zoom wedge opens, the grid fills a day at a time while the total counts up with it, the hold line drops through at its day, then the phases' words rise. Once, under 5 s.
