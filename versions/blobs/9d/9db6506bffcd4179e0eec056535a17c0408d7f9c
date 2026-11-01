/* MacroLeaders: the macro opens like a membrane element unrolling, then each industry is called out from it.
   The leaves start pressed together and fan apart back to front; the PP pipe slides in along its own axis and the
   weld bead swells into place; water runs once along every leaf. Then, row by row, the numbered marker pops onto its
   arc, the leader shoots right from it to the row, and the row's cells arrive as the line lands. About 3.4 s.
   Phones: the band fans the same way; markers drop onto the rail and their rows follow. */
AQmotion.fx('MacroLeaders', function (root, m) {
  root.querySelectorAll('.aq-macro-leaders').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var q = function (s, c) { return (c || el).querySelector(s) }, qa = function (s, c) { return [].slice.call((c || el).querySelectorAll(s)) };
    var narrow = m.narrow(), D = window.DrawSVGPlugin;
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    var layers = qa('.aq-macro-leaders__layer');
    // leaves: pressed onto the middle leaf, then fanned out, back to front
    layers.forEach(function (g, i) {
      var dy = (2 - i) * 70;
      tl.from(g, { y: dy, rotation: (2 - i) * 2.2, svgOrigin: '560 380', autoAlpha: 0, duration: 1.1, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, 0.05 + (4 - i) * 0.07);
    });
    var pipe = q('.aq-macro-leaders__pipe'), bead = qa('.aq-macro-leaders__bead ellipse');
    if (pipe) tl.from(pipe, { x: -140, y: 44, autoAlpha: 0, duration: 1.1, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, 0.2);
    if (bead.length) tl.from(bead, { scale: 0.4, transformOrigin: '50% 50%', autoAlpha: 0, duration: 0.6, stagger: 0.08, ease: 'back.out(2)', clearProps: 'transform,opacity,visibility' }, 0.9);
    var water = qa('.aq-macro-leaders__water');
    if (water.length) {
      if (D) tl.fromTo(water, { drawSVG: '0% 0%' }, { drawSVG: '0% 100%', duration: 1.4, ease: 'power1.inOut', stagger: 0.08, clearProps: 'strokeDasharray,strokeDashoffset' }, 0.8);
      else tl.from(water, { autoAlpha: 0, duration: 0.6 }, 0.8);
    }
    tl.from(qa('.aq-macro-leaders__lbl'), { autoAlpha: 0, duration: 0.4, stagger: 0.2, clearProps: 'opacity,visibility' }, 1.2);
    // header rule and labels
    var head = qa('thead th');
    tl.from(head, { autoAlpha: 0, y: 6, duration: 0.4, stagger: 0.06, clearProps: 'transform,opacity,visibility' }, 0.3);
    // rows: marker, leader, cells
    qa('tbody tr').forEach(function (tr, i) {
      var at = 0.75 + i * 0.22, mk = q('.aq-macro-leaders__mk', tr), lead = q('.aq-macro-leaders__lead', tr);
      var cells = [q('.aq-macro-leaders__name', tr)].concat(qa('td', tr)).filter(Boolean);
      if (mk) tl.from(mk, { scale: 0, rotation: -120, duration: 0.45, ease: 'back.out(2.4)', clearProps: 'transform' }, at);
      if (lead) tl.fromTo(lead, { scaleX: 0 }, { scaleX: 1, duration: 0.4, ease: 'power2.inOut', clearProps: 'transform' }, at + 0.2);
      tl.from(cells, { x: narrow ? 0 : -14, y: narrow ? 10 : 0, autoAlpha: 0, duration: 0.5, stagger: 0.06, clearProps: 'transform,opacity,visibility' }, at + 0.45);
      if (mk) tl.call(function () { m.scramble(mk, 0) }, null, at + 0.1);
    });
    m.on(el, function () { tl.play() }, 'top 78%');
  });
});
