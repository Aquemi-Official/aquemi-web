/* ReviewReticles: frame by frame as they scroll in (staggered across a row), the brackets close in from wide, the
   drawing prints up, a scan line sweeps the frame top to bottom once and the name and line rise. About 1.5 s per row.
   Hover tightens the brackets (CSS). The IsoKit drawings are claimed here, so they do not also run IsoKit's build. */
AQmotion.fx('ReviewReticles', function (root, m) {
  root.querySelectorAll('.aq-review-reticles').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    [].forEach.call(el.querySelectorAll('.aq-review-reticles__item'), function (it, i) {
      var g = function (s) { return it.querySelectorAll(s) }, tl = m.tw(gsap.timeline({ paused: true })), d = m.narrow() ? 0 : (i % 3) * 0.15;
      [['--tl', -1, -1], ['--tr', 1, -1], ['--bl', -1, 1], ['--br', 1, 1]].forEach(function (b) {
        tl.from(it.querySelector('.aq-review-reticles__br' + b[0]), { x: b[1] * 18, y: b[2] * 18, autoAlpha: 0, duration: 0.6, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, d) });
      tl.from(g('.aq-review-reticles__pic'), { clipPath: 'inset(100% 0 0 0)', duration: 0.9, ease: 'power3.inOut', clearProps: 'clipPath' }, d + 0.2);
      var sc = it.querySelector('.aq-review-reticles__scan');
      tl.fromTo(sc, { top: '0%', opacity: 1 }, { top: '100%', duration: 0.9, ease: 'power1.inOut' }, d + 0.2);
      tl.to(sc, { opacity: 0, duration: 0.2, clearProps: 'top,opacity' }, d + 1.1);
      tl.from(g('.aq-review-reticles__no, .aq-review-reticles__t, .aq-review-reticles__d'), { y: 12, autoAlpha: 0, duration: 0.45, stagger: 0.07, ease: 'power2.out', clearProps: 'transform,opacity,visibility' }, d + 0.5);
      m.on(it, function () { tl.play() }, 'top 85%');
    });
  });
});
