/* StrataRun: the terrace is laid, then the water runs down it. The labels rise in a row and their leaders drop to the
   slabs; the cut-paper stream wipes in behind; each slab's sheets fall into place and settle, top stage first; then the
   equipment draws on stage by stage, the pipes follow, and the water runs from the feed down the terrace and round the
   loop, each label's hairline turning flow as the water reaches its stage. The signal bus fades in last.
   Phones: each stage rises as it scrolls in and its own slab drawing builds. One timeline, once, under 5 s. */
AQmotion.fx('StrataRun', function (root, m) {
  root.querySelectorAll('.aq-strata-run').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var stages = qa('.aq-strata-run__stage'), base = el.querySelector('.aq-strata-run__base');
    if (m.narrow()) {
      gsap.set(stages, { autoAlpha: 0 });
      ScrollTrigger.batch(stages, { start: 'top 88%', once: true, onEnter: function (b) {
        b.forEach(function (s, j) {
          var tl = m.tw(gsap.timeline({ delay: j * 0.12 }));
          tl.fromTo(s, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power2.out', clearProps: 'transform,opacity,visibility' }, 0);
          var mini = s.querySelector('svg.aq-iso'), it = mini && window.AQiso && AQiso.timeline(mini, m, { draw: 0.7, pipe: 0.3, flow: 0.5, drop: false });
          if (it) { it.paused(false); tl.add(it, 0.15) }
        });
      } }).forEach(m.tw);
      if (base) m.on(base, function () { m.tw(gsap.from(base, { autoAlpha: 0, y: 10, duration: 0.5, clearProps: 'transform,opacity,visibility' })) }, 'top 95%');
      return;
    }
    var svg = el.querySelector('.aq-strata-run__svg'); if (!svg) return;
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    var stream = qa('.aq-strata-run__stream, .aq-strata-run__edge', svg), stacks = qa('.aq-strata-run__stack', svg);
    var leads = qa('.aq-strata-run__lead', svg), dots = qa('.aq-strata-run__dot', svg), bus = qa('.aq-strata-run__bus-g', svg);
    // 1. labels and leaders
    tl.from(stages, { y: 16, autoAlpha: 0, duration: 0.5, stagger: 0.07, clearProps: 'transform,opacity,visibility' }, 0);
    if (window.DrawSVGPlugin) tl.fromTo(leads, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.7, ease: 'power2.inOut', stagger: 0.07, clearProps: 'strokeDasharray,strokeDashoffset' }, 0.2);
    tl.from(dots, { scale: 0, transformOrigin: '50% 50%', duration: 0.3, ease: 'back.out(3)', stagger: 0.07, clearProps: 'transform' }, 0.75);
    // 2. the stream behind, then the slabs: sheets fall in and settle, top stage first
    tl.fromTo(stream, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power2.inOut', clearProps: 'clipPath' }, 0.1);
    stacks.forEach(function (st, i) {
      var sheets = qa('.aq-strata-run__slab', st);
      tl.from(sheets, { y: -26, autoAlpha: 0, duration: 0.55, ease: 'aq-settle', stagger: 0.06, clearProps: 'transform,opacity,visibility' }, 0.2 + i * 0.1);
    });
    tl.from(bus, { autoAlpha: 0, duration: 0.5, clearProps: 'opacity,visibility' }, 0.9);
    // 3. equipment, pipes and the water (IsoKit), each label lighting as its stage is reached
    var on = function (id, v) { var s = el.querySelector('.aq-strata-run__stage[data-stage="' + id + '"]'); if (s) s.classList.toggle('is-hot', v) };
    var iso = window.AQiso && AQiso.timeline(svg, m, { draw: 1.1, pipe: 0.6, flow: 1.4,
      onStage: function (els, id) { on(id, true); gsap.delayedCall(0.7, function () { on(id, false) }) } });
    if (iso) { iso.paused(false); tl.add(iso, 0.75) }
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
