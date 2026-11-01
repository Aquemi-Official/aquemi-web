/* SiteTiles: the row is set like a Swiss poster, then each plate is drawn. Tiles wipe up into their cells in reading
   order; each number rolls up out of its cell; the plate's figure draws on (DrawSVG) and does its one thing: the
   gauge needle sweeps up to its reading, the stamp's imprint strikes, the year's temperature line runs across, the
   route runs from the base to the site. Once, under 3.5 s. Hover: the tile's number turns flow. */
AQmotion.fx('SiteTiles', function (root, m) {
  root.querySelectorAll('.aq-site-tiles').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var q = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    q('.aq-site-tiles__tile').forEach(function (t, i) {
      var at = i * 0.16, svg = t.querySelector('svg');
      tl.fromTo(t, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 0.6, ease: 'power3.inOut', clearProps: 'clipPath' }, at)
        .from(t.querySelector('.aq-site-tiles__n > span'), { yPercent: 105, duration: 0.7, ease: 'power4.out', clearProps: 'transform' }, at + 0.3)
        .from(q('.aq-site-tiles__t, .aq-site-tiles__d, .aq-site-tiles__go', t), { y: 10, autoAlpha: 0, duration: 0.45, stagger: 0.06, clearProps: 'transform,opacity,visibility' }, at + 0.4);
      if (!svg) return;
      var lines = q('path, circle', svg).filter(function (p) { return !p.closest('.aq-site-tiles__needle, .aq-site-tiles__imprint') && !p.classList.contains('aq-site-tiles__dot') });
      if (window.DrawSVGPlugin) tl.fromTo(lines, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.9, stagger: 0.05, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, at + 0.35);
      var dt = q('.aq-site-tiles__dot', svg); if (dt.length) tl.from(dt, { scale: 0, transformOrigin: '50% 50%', duration: 0.35, clearProps: 'transform' }, at + 1.1);
      var nd = svg.querySelector('.aq-site-tiles__needle'); if (nd) tl.from(nd, { rotation: -100, svgOrigin: '120 78', duration: 1, ease: 'power2.out', clearProps: 'transform' }, at + 0.7);
      var im = svg.querySelector('.aq-site-tiles__imprint'); if (im) tl.from(im, { scale: 1.4, autoAlpha: 0, svgOrigin: '120 60', duration: 0.3, ease: 'power4.in', clearProps: 'transform,opacity,visibility' }, at + 0.8);
    });
    m.on(el, function () { tl.play() }, 'top 78%');
  });
});
