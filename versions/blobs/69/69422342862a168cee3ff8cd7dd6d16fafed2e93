/* LoopDock: the loop draws itself with the shared IsoKit choreography (parts back to front, pipes, then the water
   runs from the tank through the module, the UV, out to the points of use and home overhead). Each option's marker
   drops onto its part as the water reaches it, its leader runs down from the part to the caption row and the caption
   rises at the same moment. One timeline, once, under
   5 s; nothing under reduced motion. */
AQmotion.fx('LoopDock', function (root, m) {
  root.querySelectorAll('.aq-loop-dock').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var svg = el.querySelector('svg.aq-iso'), cards = qa('.aq-loop-dock__card').filter(function (c) { return c.offsetParent !== null });
    var tl = svg && window.AQiso && AQiso.timeline(svg, m, { draw: 1.3, pipe: 0.7, flow: 1.6, keep: false });
    if (!tl) return;
    var base = el.querySelector('.aq-loop-dock__base');
    if (base) tl.from(base, { x: -16, autoAlpha: 0, duration: 0.5, clearProps: 'transform,opacity,visibility' }, 0.4);
    var arrive = (tl.data && tl.data.arrive) || {}, fallback = tl.duration() * 0.6;
    cards.forEach(function (c, i) {
      var parts = (c.getAttribute('data-parts') || '').split(' '), at = arrive[parts[0]] != null ? arrive[parts[0]] : fallback + i * 0.2;
      var mk = el.querySelector('.aq-loop-dock__mk[data-c="' + c.getAttribute('data-c') + '"]');
      if (mk) tl.from(mk, { y: -24, autoAlpha: 0, duration: 0.45, ease: 'back.out(2)', clearProps: 'transform,opacity,visibility' }, at);
      var ld = qa('.aq-loop-dock__leads [data-c="' + c.getAttribute('data-c') + '"]'), path = ld.filter(function (x) { return x.tagName.toLowerCase() === 'path' });
      if (path.length && window.DrawSVGPlugin && path[0].getBoundingClientRect().width) tl.from(path, { drawSVG: '0%', duration: 0.6, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, at + 0.1);
      tl.from(c, { y: 16, autoAlpha: 0, duration: 0.6, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, at + 0.4);
    });
    m.on(el, function () { tl.play() }, 'top 70%');
  });
});
