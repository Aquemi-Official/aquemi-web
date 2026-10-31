/* ParameterCallouts: the drawing prints in, the numbered pins strike onto it, then each leader draws from its pin out
   to its callout and the callout's rule runs on; the parameter name follows and the value lands last. On the phone
   (no leaders) the pins strike and the numbered list follows in order, each value fading in after its name. One timeline, under 4 s. */
AQmotion.fx('ParameterCallouts', function (root, m) {
  root.querySelectorAll('.aq-parameter-callouts__fig').forEach(function (fig) {
    m.claim(fig);
    var art = fig.querySelector('.aq-illustration'), pins = [].slice.call(fig.querySelectorAll('.aq-parameter-callouts__pin'));
    var items = [].slice.call(fig.querySelectorAll('.aq-parameter-callouts__item')), svg = fig.querySelector('.aq-parameter-callouts__leaders');
    var leaders = svg ? [].slice.call(svg.querySelectorAll('line')) : [], wide = svg && getComputedStyle(svg).display !== 'none';
    /* leaders are written per side top to bottom; items in reading order (left column, then right): same order */
    if (art) gsap.set(art, { clipPath: 'inset(100% 0 0 0)' });
    gsap.set(pins, { scale: 0, autoAlpha: 0 });
    items.forEach(function (it) {
      var l = it.classList.contains('is-l'), parts = it.querySelectorAll('.aq-index, .aq-parameter-callouts__p, .aq-parameter-callouts__m');
      if (wide) gsap.set(it, { clipPath: l ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)' });
      gsap.set(parts, { autoAlpha: 0, x: wide ? (l ? 12 : -12) : 0, y: wide ? 0 : 12 });
      gsap.set(it.querySelector('.aq-parameter-callouts__v'), wide ? { autoAlpha: 0, clipPath: 'inset(0 100% 0 0)' } : { autoAlpha: 0 });
    });
    if (wide && window.DrawSVGPlugin) gsap.set(leaders, { drawSVG: '100% 100%', autoAlpha: 0 });
    m.on(fig, function () {
      var tl = m.tw(gsap.timeline({ defaults: { ease: 'power3.out' } }));
      if (art) tl.to(art, { clipPath: 'inset(0% 0 0 0)', duration: 1.1, ease: 'power3.inOut' }, 0);
      tl.to(pins, { scale: 1, autoAlpha: 1, duration: 0.45, ease: 'back.out(2.5)', stagger: 0.1 }, 0.75);
      var t0 = 0.75 + 0.1 * pins.length + 0.1;
      items.forEach(function (it, i) {
        var t = t0 + i * (wide ? 0.22 : 0.12), parts = it.querySelectorAll('.aq-index, .aq-parameter-callouts__p, .aq-parameter-callouts__m');
        if (wide && leaders[i] && window.DrawSVGPlugin) tl.set(leaders[i], { autoAlpha: 1 }, t).to(leaders[i], { drawSVG: '0% 100%', duration: 0.5, ease: 'power2.inOut' }, t);
        if (wide) tl.to(it, { clipPath: 'inset(0 0% 0 0%)', duration: 0.45, ease: 'power2.out' }, t + 0.4);
        tl.to(parts, { autoAlpha: 1, x: 0, y: 0, duration: 0.45, stagger: 0.05 }, t + (wide ? 0.5 : 0));
        tl.to(it.querySelector('.aq-parameter-callouts__v'), wide ? { autoAlpha: 1, clipPath: 'inset(0 0% 0 0)', duration: 0.55, ease: 'power2.inOut' } : { autoAlpha: 1, duration: 0.4 }, t + (wide ? 0.7 : 0.15));
      });
      tl.add(function () {
        gsap.set([art].concat(pins, items, [].slice.call(fig.querySelectorAll('.aq-parameter-callouts__item *'))).filter(Boolean), { clearProps: 'opacity,visibility,transform,clipPath' });
        if (leaders.length) gsap.set(leaders, { clearProps: 'strokeDasharray,strokeDashoffset,opacity,visibility' });
      });
    }, 'top 75%');
  });
});
