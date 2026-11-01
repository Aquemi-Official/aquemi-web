/* TermsSheet: the sheet is laid down and its clauses are written in. The sheet rises with a slight turn and settles
   square, the head rule draws across, then clause by clause (down the first column, then the second) the number rolls
   up into place, the clause's rule draws and its lines appear. One timeline, once, under 3 s. */
AQmotion.fx('TermsSheet', function (root, m) {
  root.querySelectorAll('.aq-terms-sheet').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var head = el.querySelector('.aq-terms-sheet__head'), cls = [].slice.call(el.querySelectorAll('.aq-terms-sheet__cl')).filter(function (c) { return c.offsetHeight > 0 });
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    tl.from(el, { y: 48, rotation: -1.2, autoAlpha: 0, duration: 0.8, ease: 'power4.out', clearProps: 'transform,opacity,visibility' }, 0);
    if (head) tl.from(head, { clipPath: 'inset(0 100% 0 0)', duration: 0.6, ease: 'power2.inOut', clearProps: 'clipPath' }, 0.4);
    cls.forEach(function (c, i) {
      var at = 0.6 + i * 0.16, num = c.querySelector('.aq-terms-sheet__n'), body = c.querySelector('.aq-terms-sheet__body');
      if (num) tl.from(num, { yPercent: 70, clipPath: 'inset(0 0 100% 0)', duration: 0.5, clearProps: 'transform,clipPath' }, at);
      if (body) tl.from(body, { autoAlpha: 0, x: -8, duration: 0.45, clearProps: 'transform,opacity,visibility' }, at + 0.1);
    });
    m.on(el, function () { tl.play() }, 'top 80%');
  });
});
