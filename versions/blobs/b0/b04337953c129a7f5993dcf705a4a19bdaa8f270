/* SystemRun: the package builds as a drawing, then the water runs the line once.
   Desktop: the sheet fades up, the brackets drop in over each system, the equipment draws back to front and the pipes
   follow (IsoKit choreography); then the water enters at "Drinking water", a droplet riding its head, and each system
   lights as the water reaches it: its bracket turns flow, its column's rule fills and its number decodes. The water
   leaves at the point of use, whose label lights last. Phones: each system's own drawing builds as it scrolls in and
   the vertical water line fills down its column. One timeline, once, under 5 s. */
AQmotion.fx('SystemRun', function (root, m) {
  root.querySelectorAll('.aq-system-run').forEach(function (el) {
    if (!m.free(el) || !window.AQiso) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var stages = qa('.aq-system-run__stage');
    function stageOf(id) { return el.querySelector('.aq-system-run__stage[data-stage="' + id + '"]') }
    if (m.narrow()) {
      stages.forEach(function (s) {
        var svg = s.querySelector('.aq-system-run__mini'), mark = s.querySelector('.aq-system-run__mark'), text = qa('.aq-system-run__code, .aq-system-run__t, .aq-system-run__d, .aq-system-run__foot', s);
        var tl = AQiso.timeline(svg, m, { draw: 0.9, pipe: 0.5, flow: 1, drop: true });
        if (!tl) return;
        tl.from(text, { y: 16, autoAlpha: 0, duration: 0.5, stagger: 0.06, clearProps: 'transform,opacity,visibility' }, 0.1)
          .fromTo(mark, { scaleY: 0 }, { scaleY: 1, duration: 1.2, ease: 'power1.inOut', clearProps: 'transform' }, 'flow')
          .call(function () { s.classList.add('is-on') }, null, 'end');
        m.on(s, function () { tl.play() }, 'top 80%');
      });
      return;
    }
    var svg = el.querySelector('.aq-system-run__svg'); if (!svg) return;
    var brackets = qa('.aq-system-run__bracket'), endIn = el.querySelector('.aq-system-run__end--in'), endOut = el.querySelector('.aq-system-run__end--out');
    var cols = qa('.aq-system-run__item');
    var tl = AQiso.timeline(svg, m, {
      draw: 1.3, pipe: 0.7, flow: 2.4, keep: false,
      onStage: function (els, id) {
        var s = stageOf(id), b = el.querySelector('.aq-system-run__bracket[data-stage="' + id + '"]');
        if (b) { b.classList.add('is-on'); m.scramble(b.querySelector('.aq-system-run__bn'), 0) }
        if (s) { s.classList.add('is-on'); var c = s.querySelector('.aq-system-run__code'); if (c) m.scramble(c, 0) }
      }
    });
    if (!tl) return;
    tl.from(brackets, { y: -10, autoAlpha: 0, duration: 0.5, stagger: 0.12, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, 0.1)
      .from(cols, { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, 0.5);
    if (endIn) tl.from(endIn, { autoAlpha: 0, x: -12, duration: 0.4, clearProps: 'transform,opacity,visibility' }, 'flow-=0.3');
    if (endOut) tl.from(endOut, { autoAlpha: 0, x: -12, duration: 0.4, clearProps: 'transform,opacity,visibility' }, 'end-=0.2');
    m.on(el, function () { tl.play() }, 'top 70%');
  });
});
