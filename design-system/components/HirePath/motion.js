/* HirePath: the path is walked once. The track draws from the left; then the water runs along it (on phones, down
   it) and as it reaches each step that step's node fills, its node stays filled, its numeral tints flow for a beat and
   rises into place, and its name and line follow; the practical interview's exercise icons drop in one by one.
   Once, under 4 s. Hover a step: its numeral and node fill. */
AQmotion.fx('HirePath', function (root, m) {
  root.querySelectorAll('.aq-hire-path').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var q = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) }, wide = !m.narrow();
    var steps = q('.aq-hire-path__step'), n = Math.max(1, steps.length), run = 2.2;
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    var tr = el.querySelector('.aq-hire-path__track'), wa = el.querySelector('.aq-hire-path__water');
    el.classList.add('is-pre');
    if (tr) tl.from(tr, wide ? { scaleX: 0, transformOrigin: '0 50%', duration: 0.8, ease: 'power2.inOut', clearProps: 'transform' } : { scaleY: 0, transformOrigin: '50% 0', duration: 0.8, ease: 'power2.inOut', clearProps: 'transform' }, 0);
    if (wa) tl.fromTo(wa, wide ? { scaleX: 0 } : { scaleY: 0 }, wide ? { scaleX: 1, duration: run, ease: 'none' } : { scaleY: 1, duration: run, ease: 'none' }, 0.5)
      .set(wa, { clearProps: 'transform' }, 0.5 + run + 0.05);
    steps.forEach(function (s, i) {
      var at = 0.5 + run * (i + 0.1) / n, num = s.querySelector('.aq-hire-path__num'), node = s.querySelector('.aq-hire-path__node');
      tl.from(num, { yPercent: 30, autoAlpha: 0, duration: 0.7, clearProps: 'transform,opacity,visibility' }, at - 0.15);
      tl.call(function (a, b) { a.classList.add('is-wet'); b.classList.add('is-wet') }, [num, node], at)
        .call(function (a) { a.classList.remove('is-wet') }, [num], at + 0.6);
      tl.from(q('.aq-hire-path__t, .aq-hire-path__d', s), { y: 12, autoAlpha: 0, duration: 0.5, stagger: 0.07, clearProps: 'transform,opacity,visibility' }, at + 0.05);
      var ic = q('.aq-hire-path__ic', s); if (ic.length) tl.from(ic, { y: -10, autoAlpha: 0, duration: 0.35, stagger: 0.08, clearProps: 'transform,opacity,visibility' }, at + 0.3);
    });
    tl.call(function () { el.classList.remove('is-pre') }, null, 0.5 + run + 0.2);
    m.on(el, function () { tl.play() }, 'top 78%');
  });
});
