/* Colophon: the facts are set like type on a stone. The statement rises line by line out
   of a mask (SplitText lines) while its label's tick extends; the exclusion slides in behind its rule. Then each fact
   line follows in order: its number drops in, the label fades up, the fact wipes in left to
   right and the margin note fades up. Once, under 3 s; folded rows appear whole when opened. */
AQmotion.fx('Colophon', function (root, m) {
  root.querySelectorAll('.aq-colophon').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var q = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    var lead = el.querySelector('.aq-colophon__lead'), lv = el.querySelector('.aq-colophon__lv');
    if (lead) {
      tl.from(el.querySelector('.aq-colophon__tick'), { scaleX: 0, transformOrigin: '0 50%', duration: 0.6, clearProps: 'transform' }, 0.1);
      var sp = lv && m.split(lv, { type: 'lines', mask: 'lines' });
      if (sp && sp.lines.length) tl.from(sp.lines, { yPercent: 105, duration: 0.8, stagger: 0.1, ease: 'power4.out' }, 0.15);
      else if (lv) tl.from(lv, { y: 16, autoAlpha: 0, duration: 0.7, clearProps: 'transform,opacity,visibility' }, 0.15);
      tl.from(q('.aq-colophon__lz, .aq-colophon__lm', lead), { x: -16, autoAlpha: 0, duration: 0.6, stagger: 0.1, clearProps: 'transform,opacity,visibility' }, 0.7);
    }
    var rows = q('.aq-colophon__row').filter(function (r) { return r.offsetParent !== null });
    rows.forEach(function (r, i) {
      var at = 0.8 + i * 0.14;
      tl.from(r.querySelector('.aq-colophon__n'), { autoAlpha: 0, y: -8, duration: 0.4, clearProps: 'transform,opacity,visibility' }, at);
      tl.from(r.querySelector('.aq-colophon__p'), { autoAlpha: 0, duration: 0.4, clearProps: 'opacity,visibility' }, at + 0.05);
      tl.fromTo(r.querySelector('.aq-colophon__v'), { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.7, ease: 'power2.inOut', clearProps: 'clipPath' }, at + 0.1);
      var mm = r.querySelector('.aq-colophon__m'); if (mm) tl.from(mm, { y: 8, autoAlpha: 0, duration: 0.45, clearProps: 'transform,opacity,visibility' }, at + 0.3);
    });
    m.on(el, function () { tl.play() }, 'top 78%');
  });
});
