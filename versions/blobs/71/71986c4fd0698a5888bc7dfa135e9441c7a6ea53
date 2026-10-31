/* Readout: the instrument powers up. The tick scale runs out along the bottom, the figure counts up to its value
   (integers and one-decimal values; a placeholder is left alone), the unit and condition drop in beside it, and the
   method tag lands on the reference line last. Under 3 s, once. */
AQmotion.fx('Readout', function (root, m) {
  root.querySelectorAll('.aq-readout').forEach(function (r) {
    m.claim(r);
    var sc = r.querySelector('.aq-readout__scale'), fig = r.querySelector('.aq-readout__figure');
    var side = r.querySelectorAll('.aq-readout__unit, .aq-readout__cond'), tag = r.querySelector('.aq-readout__tag'), cap = r.querySelector('.aq-readout__caption');
    if (sc) gsap.set(sc, { clipPath: 'inset(0 100% 0 0)' });
    if (side.length) gsap.set(side, { autoAlpha: 0, y: -10 });
    if (tag) gsap.set(tag, { autoAlpha: 0, scale: 1.25 });
    if (cap) gsap.set(cap, { autoAlpha: 0, y: 14 });
    m.on(r, function () {
      var tl = m.tw(gsap.timeline({ defaults: { ease: 'power3.out' } }));
      if (sc) tl.to(sc, { clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power2.inOut' }, 0);
      if (fig) m.count(fig, { now: true, delay: 0.15, duration: 1.4 });
      if (side.length) tl.to(side, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, 0.9);
      if (tag) tl.to(tag, { autoAlpha: 1, scale: 1, duration: 0.35, ease: 'power4.in' }, 1.3);
      if (cap) tl.to(cap, { autoAlpha: 1, y: 0, duration: 0.6 }, 1.4);
      tl.add(function () { gsap.set([sc, tag, cap].concat([].slice.call(side)).filter(Boolean), { clearProps: 'opacity,visibility,transform,clipPath' }) });
    });
  });
});
