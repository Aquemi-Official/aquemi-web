/* GradeLanes: the lane caps drop onto the header rule, then water runs down the three lane pipes row by row; as it
   passes each step the step reads in, its branch fills from the step across to its grade, and the tap there pops
   (the minimum grade with a small overshoot, an alternative or "= product" tap more quietly). Pipe and branch fills
   are CSS transforms driven by --aq-fill and --aq-branch (style.css); with no script both stay at 1. */
AQmotion.fx('GradeLanes', function (root, m) {
  var vis = function (a) { return [].filter.call(a, function (x) { return x.getClientRects().length }) };
  var done = { clearProps: 'transform,opacity,visibility' };
  var text = function (r) { return [r.querySelector('.aq-index')].concat([].slice.call(r.querySelectorAll('.aq-grades__step > *'))).filter(Boolean) };
  root.querySelectorAll('.aq-grades').forEach(function (el) {
    m.claim(el);
    var caps = el.querySelectorAll('.aq-grades__head .aq-grades__lanes > span'), rows = vis(el.querySelectorAll('.aq-grades__row')), step = 0.32;
    gsap.set(caps, { autoAlpha: 0, y: -10 });
    rows.forEach(function (r) {
      gsap.set(r, { '--aq-fill': 0, '--aq-branch': 0 });
      gsap.set(text(r), { autoAlpha: 0, y: 10 });
      var taps = r.querySelectorAll('.aq-grades__tap.is-min, .aq-grades__tap.is-alt, .aq-grades__tap.is-same, .aq-grades__same');
      if (taps.length) gsap.set(taps, { autoAlpha: 0, scale: 0 });
    });
    m.on(el, function () {
      var tl = m.tw(gsap.timeline());
      tl.to(caps, Object.assign({ autoAlpha: 1, y: 0, duration: 0.4, ease: 'power3.out', stagger: 0.08 }, done), 0);
      rows.forEach(function (r, i) {
        var t = 0.35 + i * step;
        tl.to(r, { '--aq-fill': 1, duration: step, ease: 'none' }, t);
        tl.to(text(r), Object.assign({ autoAlpha: 1, y: 0, duration: 0.45, ease: 'power3.out', stagger: 0.05 }, done), t);
        tl.to(r, { '--aq-branch': 1, duration: 0.45, ease: 'power2.inOut' }, t + 0.2);
        var min = r.querySelectorAll('.aq-grades__tap.is-min'), alt = r.querySelectorAll('.aq-grades__tap.is-alt, .aq-grades__tap.is-same, .aq-grades__same');
        if (min.length) tl.to(min, Object.assign({ autoAlpha: 1, scale: 1, duration: 0.5, ease: 'back.out(3.5)' }, done), t + 0.55);
        if (alt.length) tl.to(alt, { autoAlpha: 1, scale: 1, duration: 0.35, ease: 'power2.out', stagger: 0.05, clearProps: 'opacity,visibility,scale' }, t + 0.6);
      });
    }, 'top 75%');
  });
});
