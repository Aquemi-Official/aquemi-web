/* LayerStack: the stack explodes. The plates arrive pressed together at the bottom and lift apart to their places,
   lowest first; each plate's equipment settles onto it; the risers and the axis appear; water runs the instrument
   pipe; then one packet rides the data route from the instruments to the plant network and each plate's leader and
   label light as it passes (they settle again after). Labels slide in from their side. One timeline, once, < 5 s. */
AQmotion.fx('LayerStack', function (root, m) {
  root.querySelectorAll('.aq-layer-stack').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s) { return [].slice.call(el.querySelectorAll(s)) };
    var layers = qa('.aq-layer-stack__layer'), gaps = qa('.aq-layer-stack__gap'), eq = qa('.aq-layer-stack__eqp'), items = qa('.aq-layer-stack__item'),
      leads = qa('.aq-layer-stack__lead'), axis = el.querySelector('.aq-layer-stack__axis'), water = qa('.aq-layer-stack__water .aq-iso__flow'),
      packet = el.querySelector('.aq-layer-stack__packet'), route = el.querySelector('.aq-layer-stack__route');
    var at = (el.getAttribute('data-at') || '').split(' ').map(parseFloat);
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    layers.forEach(function (g, i) {
      tl.fromTo(g, { x: +g.getAttribute('data-dx') || 0, y: +g.getAttribute('data-dy') || 0, autoAlpha: i ? 0 : 1 },
        { x: 0, y: 0, autoAlpha: 1, duration: 1.1, ease: 'power3.inOut', clearProps: 'transform,opacity,visibility' }, 0.1 + i * 0.07);
    });
    tl.from(eq, { y: -14, autoAlpha: 0, duration: 0.5, stagger: 0.08, clearProps: 'transform,opacity,visibility' }, 1.0);
    tl.from(gaps, { autoAlpha: 0, duration: 0.4, stagger: 0.06, clearProps: 'opacity,visibility' }, 1.2);
    if (axis) tl.from(axis, { autoAlpha: 0, duration: 0.6, clearProps: 'opacity,visibility' }, 1.2);
    if (!m.narrow()) {
      tl.from(qa('.aq-layer-stack__lead circle'), { autoAlpha: 0, duration: 0.3, stagger: 0.08, clearProps: 'opacity,visibility' }, 1.2);
      if (window.DrawSVGPlugin) tl.fromTo(qa('.aq-layer-stack__lead path'), { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.5, stagger: 0.08, clearProps: 'strokeDasharray,strokeDashoffset' }, 1.25);
      items.forEach(function (it, i) { tl.from(it, { x: it.classList.contains('aq-layer-stack__item--l') ? -16 : 16, autoAlpha: 0, duration: 0.6, clearProps: 'transform,opacity,visibility' }, 1.4 + i * 0.08) });
    } else tl.from(items, { y: 12, autoAlpha: 0, duration: 0.5, stagger: 0.08, clearProps: 'transform,opacity,visibility' }, 1.3);
    if (water.length && window.DrawSVGPlugin) tl.fromTo(water, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.8, ease: 'none', clearProps: 'strokeDasharray,strokeDashoffset' }, 1.4);
    if (packet && route && window.MotionPathPlugin) {
      var T0 = 2.1, DUR = 2.2;
      tl.set(packet, { opacity: 1, attr: { cx: 0, cy: 0 } }, T0);
      tl.to(packet, { duration: DUR, ease: 'none', motionPath: { path: route, align: route, alignOrigin: [0.5, 0.5] } }, T0);
      tl.to(packet, { opacity: 0, duration: 0.3 }, T0 + DUR);
      at.forEach(function (f, i) {
        var hit = qa('[data-ls="' + i + '"].aq-layer-stack__lead, [data-ls="' + i + '"].aq-layer-stack__item');
        tl.call(function () { hit.forEach(function (x) { x.classList.add('is-on') }) }, null, T0 + f * DUR);
        tl.call(function () { hit.forEach(function (x) { x.classList.remove('is-on') }) }, null, T0 + f * DUR + 0.9);
      });
    }
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
