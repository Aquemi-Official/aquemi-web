/* IssuedSet: the set is issued. The sheets are dealt onto the desk one by one from above, each turning into its
   angle and settling; its miniature prints (lines draw on), its code decodes, and the qualification step that uses it
   is stamped on last. Hover straightens and lifts a sheet (CSS). One timeline, once, under 4 s. */
AQmotion.fx('IssuedSet', function (root, m) {
  root.querySelectorAll('.aq-issued-set').forEach(function (el) {
    var desk = el.querySelector('.aq-issued-set__desk'); if (!desk || !m.free(desk)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) }, D = window.DrawSVGPlugin;
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    tl.from(desk, { autoAlpha: 0, duration: 0.5, clearProps: 'opacity,visibility' }, 0);
    qa('.aq-issued-set__sheet').filter(function (s) { return s.offsetParent }).forEach(function (s, i) {
      var at = 0.25 + i * 0.32, code = s.querySelector('.aq-issued-set__code'), use = s.querySelector('.aq-issued-set__use');
      var strokes = qa('.aq-issued-set__mini path, .aq-issued-set__mini circle, .aq-issued-set__mini rect', s);
      tl.from(s, { y: -120, x: 40, rotation: i % 2 ? 9 : -8, autoAlpha: 0, duration: 0.8, ease: 'aq-settle', clearProps: 'transform,opacity,visibility' }, at);
      if (strokes.length) { if (D) tl.fromTo(strokes, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.6, stagger: 0.01, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, at + 0.5); }
      if (code) tl.call(function () { m.scramble(code, 0) }, null, at + 0.4);
      if (use) tl.fromTo(use, { scale: 2.2, autoAlpha: 0 }, { scale: 1, autoAlpha: 0.9, duration: 0.2, ease: 'power4.in', clearProps: 'transform,opacity,visibility' }, 1.9 + i * 0.18);
    });
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
