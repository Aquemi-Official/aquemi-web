/* StandardsOrbit: the orbits are drawn round the plant, then each standard reaches in. The rings draw on (outer, inner,
   far) and their ticks fade up while the plant builds in the middle (IsoKit choreography: parts, pipes, water); each
   node then lands on the ring, its arc draws in from the node to the part it governs, the part lights as the arc
   touches it, and the zone's title and standards slide out from the node's side. Parts settle back at the end; hover
   and focus light them again (renderer). One timeline, once, under 5 s. The section heading is left to the core. */
AQmotion.fx('StandardsOrbit', function (root, m) {
  root.querySelectorAll('.aq-standards-orbit').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) }, D = window.DrawSVGPlugin;
    var orb = el.querySelector('.aq-standards-orbit__orbits'), svg = el.querySelector('svg.aq-iso'), narrow = innerWidth < 1180;
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    if (orb && !narrow) {
      var rings = qa('.aq-standards-orbit__ring:not(.aq-standards-orbit__ring--in)', orb);
      tl.from(qa('.aq-standards-orbit__ring--in', orb), { autoAlpha: 0, duration: 1, clearProps: 'opacity,visibility' }, 0.6);
      if (D) tl.fromTo(rings, { drawSVG: '50% 50%' }, { drawSVG: '0% 100%', duration: 1.4, ease: 'power2.inOut', stagger: 0.15, clearProps: 'strokeDasharray,strokeDashoffset' }, 0);
      else tl.from(rings, { autoAlpha: 0, duration: 0.8, clearProps: 'opacity,visibility' }, 0);
      tl.from(qa('.aq-standards-orbit__tick', orb), { autoAlpha: 0, duration: 0.3, stagger: { each: 0.015 }, clearProps: 'opacity,visibility' }, 0.4);
    }
    var it = svg && window.AQiso && AQiso.timeline(svg, m, { draw: 0.9, pipe: 0.6, flow: 1, keep: false });
    if (it) { it.paused(false); tl.add(it, 0.3) }
    var zones = qa('.aq-standards-orbit__zone'), t0 = narrow ? 0.4 : 1.5;
    zones.forEach(function (z, i) {
      var k = z.getAttribute('data-so'), at = t0 + i * (narrow ? 0.12 : 0.42), side = z.classList.contains('is-l') ? 1 : -1,
        node = el.querySelector('.aq-standards-orbit__node[data-so="' + k + '"]'), arc = el.querySelector('.aq-standards-orbit__arc[data-so="' + k + '"]'),
        end = el.querySelector('.aq-standards-orbit__end[data-so="' + k + '"]'), part = z.getAttribute('data-part');
      if (node && !narrow) tl.from(node, { scale: 0, transformOrigin: '50% 50%', duration: 0.45, ease: 'back.out(2.5)', clearProps: 'transform' }, at);
      if (arc && !narrow) {
        if (D) tl.fromTo(arc, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.7, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, at + 0.1);
        else tl.from(arc, { autoAlpha: 0, duration: 0.5, clearProps: 'opacity,visibility' }, at + 0.1);
        if (end) tl.from(end, { scale: 0, transformOrigin: '50% 50%', duration: 0.3, clearProps: 'transform' }, at + 0.75);
        tl.call(function (on) { arc.classList.add('is-on'); if (end) end.classList.add('is-on'); if (part && svg && window.AQiso) AQiso.light(svg, part, true) }, null, at + 0.8)
          .call(function () { arc.classList.remove('is-on'); if (end) end.classList.remove('is-on'); if (part && svg && window.AQiso) AQiso.light(svg, part, false) }, null, at + 1.6);
      }
      tl.from(z.querySelector('.aq-standards-orbit__head'), { x: narrow ? -16 : 24 * side, autoAlpha: 0, duration: 0.55, clearProps: 'transform,opacity,visibility' }, at + 0.2)
        .from(qa('.aq-standards-orbit__codes li', z), { x: narrow ? -10 : 14 * side, autoAlpha: 0, duration: 0.4, stagger: 0.05, clearProps: 'transform,opacity,visibility' }, at + 0.35);
    });
    m.on(el, function () { tl.play() }, narrow ? 'top 85%' : 'top 70%');
  });
});
