/* Versus: the "or" node pops on the spine and the two routes slide in from either side; the spine then draws down
   factor by factor, each node lighting as the line reaches it and its two answers pushing out to their sides; only then
   does the verdict land, and the conclusion band opens from the spine outwards. Phones: names, then the verdict
   (it sits on top there), then the spine runs down the left edge one factor at a time. */
AQmotion.fx('Versus', function (root, m) {
  var vis = function (a) { return [].filter.call(a, function (x) { return x.getClientRects().length }) };
  var done = { clearProps: 'transform,opacity,visibility' };
  root.querySelectorAll('.aq-versus').forEach(function (el) {
    m.claim(el);
    var phone = m.narrow(), names = el.querySelectorAll('.aq-versus__name'), vs = el.querySelector('.aq-versus__vs');
    var dl = el.querySelector('.aq-versus__rows'), rows = vis(el.querySelectorAll('.aq-versus__row'));
    var verdict = vis(el.querySelectorAll('.aq-versus__verdict > div')), end = el.querySelector('.aq-versus__end');
    var step = phone ? 0.3 : 0.34;
    if (names[0]) gsap.set(names[0], { autoAlpha: 0, x: phone ? -16 : -56 });
    if (names[1]) gsap.set(names[1], { autoAlpha: 0, x: phone ? 16 : 56 });
    if (vs) gsap.set(vs, { autoAlpha: 0, scale: 0 });
    if (dl) gsap.set(dl, { clipPath: 'inset(0 0 100% 0)' });
    rows.forEach(function (r) {
      var dd = r.querySelectorAll('dd');
      gsap.set(r.querySelector('dt'), { autoAlpha: 0, scale: phone ? 1 : 0.7, x: phone ? -8 : 0 });
      if (dd[0]) gsap.set(dd[0], { autoAlpha: 0, x: phone ? -10 : 36 });
      if (dd[1]) gsap.set(dd[1], { autoAlpha: 0, x: phone ? -10 : -36 });
    });
    if (verdict.length) gsap.set(verdict, { autoAlpha: 0, y: -14, scale: 1.03 });
    if (end) gsap.set(end, { clipPath: 'inset(0 50% 0 50%)' });

    function head(tl, at) {
      if (vs) tl.to(vs, Object.assign({ autoAlpha: 1, scale: 1, duration: 0.45, ease: 'back.out(2.2)' }, done), at);
      if (names.length) tl.to(names, Object.assign({ autoAlpha: 1, x: 0, duration: 0.7, ease: 'power3.out' }, done), at + 0.15);
    }
    function spine(tl, at) {
      if (dl) tl.to(dl, { clipPath: 'inset(0 0 0% 0)', duration: Math.max(0.4, rows.length * step), ease: 'none', clearProps: 'clipPath' }, at);
      rows.forEach(function (r, i) {
        var t = at + i * step, dd = r.querySelectorAll('dd');
        tl.to(r.querySelector('dt'), Object.assign({ autoAlpha: 1, scale: 1, x: 0, duration: 0.4, ease: 'back.out(2)' }, done), t);
        tl.to(dd, Object.assign({ autoAlpha: 1, x: 0, duration: 0.5, ease: 'power3.out', stagger: 0.06 }, done), t + 0.12);
      });
      return at + rows.length * step + 0.3;
    }
    function land(tl, at) {
      if (verdict.length) tl.to(verdict, Object.assign({ autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: 'power4.out', stagger: 0.16 }, done), at);
    }
    function band(tl, at) { if (end) tl.to(end, { clipPath: 'inset(0 0% 0 0%)', duration: 0.7, ease: 'power3.inOut', clearProps: 'clipPath' }, at) }

    if (!phone) {
      m.on(el, function () { var tl = m.tw(gsap.timeline()); head(tl, 0); var t = spine(tl, 0.55); land(tl, t); band(tl, t + 0.45) }, 'top 75%');
    } else {
      m.on(el, function () { var tl = m.tw(gsap.timeline()); head(tl, 0); land(tl, 0.6) }, 'top 80%');
      if (dl) m.on(dl, function () { spine(m.tw(gsap.timeline()), 0) }, 'top 85%');
      if (end) m.on(end, function () { band(m.tw(gsap.timeline()), 0) }, 'top 92%');
    }
  });
});
