/* StandardWires: each row is wired up as it scrolls in. The index box pops, the standard decodes in mono, what it asks
   fades up, the answer chip strikes on; then the wire runs from the chip across to the plate and steps to the part,
   the part draws itself and the water runs through it, and the part lights as the wire lands, then settles. The plate's
   header and title block fade in with the first row. Folded rows are left whole for when the fold opens.
   One timeline per row, once, under 5 s. */
AQmotion.fx('StandardWires', function (root, m) {
  root.querySelectorAll('.aq-standard-wires').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var rows = qa('.aq-standard-wires__row').filter(function (r) { return !r.classList.contains('aq-fold-x') });
    var chrome = qa('.aq-standard-wires__heads, .aq-standard-wires__foot');
    if (chrome.length) { gsap.set(chrome, { autoAlpha: 0 }); m.on(el, function () { m.tw(gsap.to(chrome, { autoAlpha: 1, duration: 0.6, stagger: 0.2, clearProps: 'opacity,visibility' })) }, 'top 85%') }
    function play(r, delay) {
      var q = function (s) { return r.querySelector(s) }, tl = m.tw(gsap.timeline({ delay: delay, defaults: { ease: 'power3.out' } }));
      gsap.set(r, { autoAlpha: 1 });
      tl.from(q('.aq-standard-wires__n'), { scale: 0, duration: 0.35, ease: 'back.out(3)', clearProps: 'transform' }, 0);
      var s = q('.aq-standard-wires__s');
      tl.from(s, { autoAlpha: 0, duration: 0.2, clearProps: 'opacity,visibility' }, 0.05);
      if (window.ScrambleTextPlugin && !m.narrow()) qa('.aq-standard-wires__s > span:not(.aq-standard-wires__semi)', r).forEach(function (sp, i) {
        var t = sp.textContent; if (!sp.getAttribute('aria-label')) sp.setAttribute('aria-label', t);
        tl.to(sp, { duration: Math.min(0.9, 0.25 + t.length * 0.03), scrambleText: { text: t, chars: '0123456789<>.', speed: 0.7 }, ease: 'none' }, 0.05 + i * 0.12);
      });
      tl.from(q('.aq-standard-wires__ask'), { y: 10, autoAlpha: 0, duration: 0.5, clearProps: 'transform,opacity,visibility' }, 0.2);
      tl.from(q('.aq-standard-wires__chip'), { scale: 1.12, autoAlpha: 0, duration: 0.4, ease: 'back.out(2)', clearProps: 'transform,opacity,visibility' }, 0.4);
      var run = q('.aq-standard-wires__run'), wire = q('.aq-standard-wires__wire'), end = q('.aq-standard-wires__end'), svg = q('svg.aq-iso');
      var iso = svg && window.AQiso && AQiso.timeline(svg, m, { draw: 0.8, pipe: 0.35, flow: 0.6, drop: true });
      if (iso) { iso.paused(false); tl.add(iso, 0.45) }
      if (run && !m.narrow()) tl.from(run, { scaleX: 0, duration: 0.4, ease: 'power2.in', clearProps: 'transform' }, 0.7);
      if (wire && window.DrawSVGPlugin && !m.narrow()) { wire.setAttribute('vector-effect', 'non-scaling-stroke'); tl.fromTo(wire, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.6, ease: 'power2.out', clearProps: 'strokeDasharray,strokeDashoffset' }, 1.05) }
      if (end) tl.from(end, { scale: 0, transformOrigin: '50% 50%', duration: 0.3, ease: 'back.out(3)', clearProps: 'transform' }, 1.55);
      if (svg && window.AQiso) {
        var id = r.getAttribute('data-sw');
        tl.call(function () { AQiso.light(svg, id, true) }, null, 1.6);
        tl.call(function () { if (!r.classList.contains('is-hot')) AQiso.light(svg, id, false) }, null, 2.5);
      }
    }
    rows.forEach(function (r) { gsap.set(r, { autoAlpha: 0 }) });
    ScrollTrigger.batch(rows, { start: 'top 85%', once: true, onEnter: function (b) { b.forEach(function (r, j) { play(r, j * 0.25) }) } }).forEach(m.tw);
  });
});
