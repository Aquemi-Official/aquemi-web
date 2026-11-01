/* ParamTiles: the grid is assembled like a Swiss poster. The navy field is there first; tiles slide into their cells
   in reading order, each wiping in from a different edge (left, top, right, bottom in turn), the big number rolls up
   out of its cell like a counter, the slash cuts down, the value and basis follow. Meanwhile the blueprint cell draws
   the skid (IsoKit: sheet, frame and equipment, then the water runs RO to EDI). One timeline, once, under 5 s.
   Folded tiles (phones) are left alone: they appear whole when the reader opens the fold. */
AQmotion.fx('ParamTiles', function (root, m) {
  root.querySelectorAll('.aq-param-tiles').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var tiles = qa('.aq-param-tiles__tile').filter(function (t) { return t.offsetParent !== null });
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })), short = m.narrow() ? 0.7 : 1;
    var from = ['inset(0 100% 0 0)', 'inset(0 0 100% 0)', 'inset(0 0 0 100%)', 'inset(100% 0 0 0)'];
    tiles.forEach(function (t, i) {
      var at = 0.05 + i * 0.11 * short, n = t.querySelector('.aq-param-tiles__n > span'), sl = t.querySelector('.aq-param-tiles__slash');
      tl.fromTo(t, { clipPath: from[i % 4] }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.7, ease: 'power3.inOut', clearProps: 'clipPath' }, at);
      if (n) {
        tl.from(n, { yPercent: 105, duration: 0.8, ease: 'power4.out', clearProps: 'transform' }, at + 0.25);
        if (window.ScrambleTextPlugin) tl.to(n, { duration: 0.6, scrambleText: { text: n.textContent, chars: '0123456789', speed: 0.7 }, ease: 'none' }, at + 0.25);
      }
      if (sl) tl.from(sl, { scaleY: 0, transformOrigin: '50% 0%', duration: 0.45, ease: 'power2.inOut', clearProps: 'transform' }, at + 0.35);
      tl.from(qa('.aq-param-tiles__p, .aq-param-tiles__v, .aq-param-tiles__m', t), { y: 12, autoAlpha: 0, duration: 0.5, stagger: 0.08, clearProps: 'transform,opacity,visibility' }, at + 0.4);
    });
    var svg = el.querySelector('.aq-param-tiles__fig svg.aq-iso'), it = svg && window.AQiso && AQiso.timeline(svg, m, { draw: 1.3 * short, pipe: 0.5, flow: 0.8, keep: true });
    if (it) { it.paused(false); tl.add(it, 0.25) }
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
