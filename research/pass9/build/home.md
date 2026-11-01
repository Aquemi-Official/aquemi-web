# Pass 9 build notes: home (blocks 0 to 4)

Server 8768. Block 5 (faq) untouched. Only blueprint line art: block 0 (navy) and block 3 (light sheet); 1, 2 and 4
take other directions, so no two neighbours share one. Grounds: navy, surface, sunken, surface, limestone.

| Block | Look / component | Concept idea kept | Art direction (borrowed from) |
| --- | --- | --- | --- |
| 0 path | `system-run` / SystemRun | home.0: one continuous water line through the four systems, a bracket and name over each | navy blueprint, IsoKit parts on a gridded sheet with zone band and floor dimensions |
| 1 grid | `industry-feed` / IndustryFeed | home.1.v2: one line feeding three industries | editorial type (industries.2): twin-wall pipe from the page edge tees into three columns; the standard set huge in Geist Mono Light as "the evidence" |
| 2 steps | `project-run` / ProjectRun | home.2: five steps along one run | scroll-driven sticky storytelling (compliance.3): sticky stage with the step's service illustration, huge number, a pipe whose water fills stop by stop |
| 3 grid | `exploded-service` / ExplodedService | home.3: exploded part with callouts | light drawing sheet (home.3 itself): exploded centrifugal pump, leaders to impeller, motor, service tag |
| 4 router | `manifold-router` / ManifoldRouter | home.4: situations branching off a manifold | limestone sheet with large type (services.0's type scale): manifold down the left, situations in Geist Light 30, route on a raised sheet |

## Motion
- SystemRun: AQiso.timeline: sheet, brackets, equipment draws back to front, pipes, then the water runs the whole line
  (droplet) and each system lights on arrival (bracket flow, column rule fills, number decodes). Phone: per-system
  drawing builds + vertical line fills. ~4.6 s.
- IndustryFeed: water runs the trunk with a droplet, each tee fills as it passes, node seats with a ring, the standard
  decodes (ScrambleText), name and line rise. ~2.5 s.
- ProjectRun: reader-driven (ScrollTrigger): water in the run follows scroll (quickTo, smoothed), current step full
  strength, illustration prints up while the last lifts away, number decodes. Phone: per-step pipe segments fill
  with scroll, nodes tint. Live state only on wide screens with motion; static stacked run otherwise.
- ExplodedService: pump draws assembled, then parts slide apart along the shaft (aq-settle), centre line draws, leaders
  run out, promises stand up. ~3.5 s.
- ManifoldRouter: manifold segments draw down, branches tee off, situations slide in, water runs to the open branch,
  route sheet unrolls, stations step in; a new pick replays the stations.
- motioncheck 1280 and 375: 0 errors, 0 hidden. The "GSAP target not found" console warning comes from KeyFacts
  (hero), not these sections.

## Copy
No copy cut or added. New optional fields documented in READMEs (none used yet): path `label`, steps `art`/`label`,
grid `part`. Strings in the drawings are aria-hidden repeats of item names; "To confirm" as in Router.

## Kit / shared
- Exploded pump drawn inline from IsoKit primitives (isoB, cyl, band, ring): the kit has only an assembled pump.
  Candidate for IsoKit: `pump-exploded` or an `explode` option on `pump`.
- No shared files edited, no shared requests.

## Weak still
- SystemRun's long drawing is fixed to these four systems (by design; other paths keep WaterPath).
- ExplodedService callout positions are fixed viewBox slots; between 860 and 1000 px wide the motor callout sits close
  to the sheet's top band.
- ManifoldRouter's twin-wall manifold reads a little like a comb at a glance; a heavier left wall might read better.
