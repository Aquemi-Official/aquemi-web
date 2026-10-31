/* SpecTable (spec sheet): the column-label strip rules across, then the rows are ruled in reading order (each row's
   hairline wipes left to right), the parameter lands first and its value fills in after it, the basis last: cause
   before effect, like a sheet being filled in. A readout lead row unrolls its panel, the big limit counts up and the
   unit rises beside it. Folded rows are left alone (they appear whole when the visitor opens the fold).
   Comparison tables (aq-spec--compare) belong to CompareTable and are not touched. */
AQmotion.fx('SpecTable', function (root, m) {
  var short = m.narrow() ? 0.8 : 1;
  root.querySelectorAll('table.aq-spec:not(.aq-spec--compare)').forEach(function (t) {
    if (!m.free(t)) return;
    m.claim(t);
    var head = t.querySelector('thead tr'), rows = [].filter.call(t.querySelectorAll('tbody > tr'), function (r) { return !r.classList.contains('aq-fold-x') });
    if (head && getComputedStyle(t.querySelector('thead')).position !== 'absolute') {
      gsap.set(head, { clipPath: 'inset(0 100% 0 0)' });
      m.on(t, function () { m.tw(gsap.to(head, { clipPath: 'inset(0 0% 0 0)', duration: 0.6 * short, ease: 'power2.inOut', clearProps: 'clipPath' })) }, 'top 88%');
    }
    if (!rows.length) return;
    gsap.set(rows, { autoAlpha: 0 });
    ScrollTrigger.batch(rows, { start: 'top 92%', once: true, onEnter: function (b) {
      b.forEach(function (r, j) {
        var d = 0.15 + j * 0.1 * short, tl = m.tw(gsap.timeline({ delay: d, defaults: { ease: 'power3.out', clearProps: 'transform,opacity,visibility' } }));
        var th = r.querySelector('th'), v = r.querySelector('.aq-spec__value'), me = r.querySelector('.aq-spec__method'), rd = r.querySelector('.aq-spec__read');
        gsap.set(r, { autoAlpha: 1 });
        if (rd) { // readout panel: unrolls top down, the limit counts, the unit rises
          tl.fromTo(r, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.9 * short, ease: 'power3.inOut', clearProps: 'clipPath' }, 0);
          var n = r.querySelector('.aq-spec__read-n'), u = r.querySelector('.aq-spec__read-u');
          if (n) tl.call(function () { m.count(n, { now: true, duration: 1.2 * short }) }, null, 0.3);
          if (u) tl.from(u, { yPercent: 40, autoAlpha: 0, duration: 0.6 }, 0.7);
        } else {
          tl.fromTo(r, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.55 * short, ease: 'power2.out', clearProps: 'clipPath' }, 0);
        }
        if (th) tl.from(th, { x: -10, autoAlpha: 0, duration: 0.45 }, rd ? 0.4 : 0.1);
        if (v) tl.from(v, { x: -10, autoAlpha: 0, duration: 0.45 }, rd ? 0.55 : 0.25);
        if (me && me.textContent.trim()) tl.from(me, { autoAlpha: 0, duration: 0.45 }, rd ? 0.7 : 0.4);
      });
    } }).forEach(m.tw);
  });
});
