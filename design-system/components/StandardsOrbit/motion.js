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
    var ring = orb && orb.querySelector('.aq-standards-orbit__ring:not(.aq-standards-orbit__ring--in):not(.aq-standards-orbit__ring--far)'),
      E = ring && { cx: +ring.getAttribute('cx'), cy: +ring.getAttribute('cy'), rx: +ring.getAttribute('rx'), ry: +ring.getAttribute('ry') };
    zones.forEach(function (z, i) {
      var k = z.getAttribute('data-so'), at = t0 + i * (narrow ? 0.12 : 0.42), side = z.classList.contains('is-l') ? 1 : -1,
        node = el.querySelector('.aq-standards-orbit__node[data-so="' + k + '"]'), arc = el.querySelector('.aq-standards-orbit__arc[data-so="' + k + '"]'),
        end = el.querySelector('.aq-standards-orbit__end[data-so="' + k + '"]'), part = z.getAttribute('data-part');
      if (node && !narrow && ring) {
        // Ported from Subframe Motion "Orbiting circles" (orbiting-circles), MIT, (c) 2026 Subframe: each zone's node
        // arrives by riding the outer orbit a quarter turn into its slot (the library's circular path, kept upright,
        // here once and settling instead of looping), so the standards visibly circle the one plant they govern
        var dot = node.querySelector('.aq-standards-orbit__dot'), nx = +dot.getAttribute('cx'), ny = +dot.getAttribute('cy');
        var a1 = Math.atan2((ny - E.cy) / E.ry, (nx - E.cx) / E.rx), o = { a: a1 - Math.PI / 2 };
        var put = function (node, o, nx, ny) { gsap.set(node, { x: E.cx + E.rx * Math.cos(o.a) - nx, y: E.cy + E.ry * Math.sin(o.a) - ny }) };
        put(node, o, nx, ny); gsap.set(node, { autoAlpha: 0 });
        tl.to(node, { autoAlpha: 1, duration: 0.2 }, at - 0.9)
          .to(o, { a: a1, duration: 1.1, ease: 'power2.out', onUpdate: put, onUpdateParams: [node, o, nx, ny] }, at - 0.9)
          .set(node, { clearProps: 'transform,opacity,visibility' }, at + 0.2);
      } else if (node && !narrow) tl.from(node, { scale: 0, transformOrigin: '50% 50%', duration: 0.45, ease: 'back.out(2.5)', clearProps: 'transform' }, at);
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

    // Animated beam (AQbeam, see SystemRun): pointing at or focusing a zone sends a signal down its arc from the node
    // on the orbit into the part that zone governs, for as long as the visitor stays
    if (narrow || !orb || !window.AQbeam) return;
    var bm = {};
    zones.forEach(function (z) {
      var k = z.getAttribute('data-so'), arc = orb.querySelector('.aq-standards-orbit__arc[data-so="' + k + '"]'); if (!arc) return;
      function on() {
        if (tl.isActive()) return;
        if (!(k in bm)) {   // the beam runs from the node to the part: along whichever axis the arc covers most, in that direction
          var nd = orb.querySelector('.aq-standards-orbit__node[data-so="' + k + '"] .aq-standards-orbit__dot'), e2 = orb.querySelector('.aq-standards-orbit__end[data-so="' + k + '"]');
          var dx = e2 ? +e2.getAttribute('cx') - +nd.getAttribute('cx') : 1, dy = e2 ? +e2.getAttribute('cy') - +nd.getAttribute('cy') : 0, ax = Math.abs(dy) > Math.abs(dx) ? 'y' : 'x';
          bm[k] = AQbeam(orb, [arc], { dur: 1.4, len: 0.5, dir: ax, rev: (ax === 'y' ? dy : dx) < 0 });
        }
        if (bm[k]) bm[k].on();
      }
      function off() { if (bm[k]) bm[k].off() }
      z.addEventListener('pointerenter', on); z.addEventListener('pointerleave', off);
      z.addEventListener('focusin', on); z.addEventListener('focusout', function (ev) { if (!z.contains(ev.relatedTarget)) off() });
    });
  });
});
