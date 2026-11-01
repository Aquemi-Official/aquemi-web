/* GradeEditorial: a poster that assembles itself, then a page that sets itself.
   The mast heading rises out of its mask (the core section head). The collage tiles drop into the grid from quarter
   turns in a scattered order, the pipe walls draw along their run, the tank and pump seat over them, the water
   runs the whole route once and the drop falls from the outlet. Beside it the grade words rise letter by letter out
   of a mask (titles decode); the scope run draws across; the running-cost lines slide out from the spine; "2 weeks"
   rises the same way; the empty bar tracks draw on, dashed, and the placeholder lands under them; the
   navy panel wipes up and its three people follow. About 3.8 s. */
AQmotion.fx('GradeEditorial', function (root, m) {
  root.querySelectorAll('.aq-grade-editorial-band').forEach(function (band) {
    var el = band.querySelector('.aq-grade-editorial'); if (!el || !m.free(el)) return; m.claim(el);
    var q = function (s, c) { return (c || el).querySelector(s) }, qa = function (s, c) { return [].slice.call((c || el).querySelectorAll(s)) };
    var D = window.DrawSVGPlugin, narrow = m.narrow();
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    /* collage */
    var tiles = qa('.aq-grade-editorial__tile > g');
    tiles.forEach(function (g, i) {
      var r = [90, -90, 180, 0][i % 4], d = (i * 37) % 11 / 11;
      tl.from(g, { rotation: r, scale: 0.4, autoAlpha: 0, transformOrigin: '50% 50%', duration: 0.7, ease: 'back.out(1.4)', clearProps: 'transform,opacity,visibility' }, 0.05 + d * 0.6);
    });
    var po = q('.aq-grade-editorial__po'), pi = q('.aq-grade-editorial__pi'), water = q('.aq-grade-editorial__water'), eq = qa('.aq-grade-editorial__eq'), drop = q('.aq-grade-editorial__drop');
    if (D && po) tl.fromTo([po, pi], { drawSVG: '0%' }, { drawSVG: '100%', duration: 1.1, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, 0.7);
    else if (po) tl.from([po, pi], { autoAlpha: 0, duration: 0.5 }, 0.7);
    if (eq.length) tl.from(eq, { y: -16, autoAlpha: 0, duration: 0.5, stagger: 0.12, ease: 'back.out(1.8)', clearProps: 'transform,opacity,visibility' }, 1.2);
    if (water) { if (D) tl.fromTo(water, { drawSVG: '0%' }, { drawSVG: '100%', duration: 1.4, ease: 'power1.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, 1.5); else tl.from(water, { autoAlpha: 0 }, 1.5) }
    if (drop) tl.from(drop, { y: -14, scale: 0, transformOrigin: '50% 50%', autoAlpha: 0, duration: 0.5, ease: 'bounce.out', clearProps: 'transform,opacity,visibility' }, 2.85);

    /* blocks */
    var items = qa('.aq-grade-editorial__item'), t0 = narrow ? 0.2 : 0.45;
    items.forEach(function (it, i) {
      var at = t0 + i * 0.28, x = function (s) { return qa(s, it) };
      if (it.classList.contains('aq-grade-editorial__item--panel')) tl.from(it, { clipPath: 'inset(100% 0 0 0)', duration: 0.7, ease: 'power3.inOut', clearProps: 'clipPath' }, at);
      else tl.from(it, { clipPath: 'inset(0 0 100% 0)', duration: 0.8, ease: 'power2.inOut', clearProps: 'clipPath' }, at);
      var t = q('.aq-grade-editorial__t', it); if (t) { tl.from(t, { autoAlpha: 0, duration: 0.3, clearProps: 'opacity,visibility' }, at); tl.call(function () { var a = t.querySelector('a') || t; if (!a.children.length) m.scramble(a, 0) }, null, at) }
      x('.aq-grade-editorial__v').forEach(function (v, k) {
        var s = m.split(v, { type: 'chars', mask: 'chars' });
        if (s) tl.from(s.chars, { yPercent: 110, duration: 0.8, stagger: 0.05, ease: 'power4.out' }, at + 0.15 + k * 0.3);
        else tl.from(v, { y: 20, autoAlpha: 0, duration: 0.6, clearProps: 'transform,opacity,visibility' }, at + 0.15 + k * 0.3);
      });
      var rest = x('.aq-grade-editorial__pre, .aq-grade-editorial__l, .aq-grade-editorial__kicker, .aq-grade-editorial__end, .aq-grade-editorial__d');
      if (rest.length) tl.from(rest, { y: 8, autoAlpha: 0, duration: 0.45, stagger: 0.07, clearProps: 'transform,opacity,visibility' }, at + 0.35);
      var run = q('.aq-grade-editorial__run', it); if (run) tl.from(run, { clipPath: 'inset(-50% 100% -50% 0)', duration: 0.7, ease: 'power2.inOut', clearProps: 'clipPath' }, at + 0.4);
      var li = x('.aq-grade-editorial__list li');
      if (li.length) tl.from(li, { x: -12, autoAlpha: 0, duration: 0.4, stagger: 0.1, clearProps: 'transform,opacity,visibility' }, at + 0.45);
      var tr = x('.aq-grade-editorial__track');
      if (tr.length) tl.from(tr, { scaleX: 0, duration: 0.6, stagger: 0.12, ease: 'power2.inOut', clearProps: 'transform' }, at + 0.6)
        .from(x('.aq-grade-editorial__bl, .aq-grade-editorial__note'), { autoAlpha: 0, duration: 0.35, stagger: 0.08, clearProps: 'opacity,visibility' }, at + 0.6);
    });
    m.on(el, function () { tl.play() }, 'top 78%');
  });
});
