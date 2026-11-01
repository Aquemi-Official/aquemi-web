/* ContactRoutes: the routes are dealt onto the navy band and the water runs each one. The route line draws across under
   the heading; at each sheet its drop runs down into the tab, the sheet rises, the tab lifts out of its top edge and the
   head settles (the urgent call bar presses in); then the water runs down the step rail, each numbered stop lights as it
   arrives and the response clock strikes at the end of the rail. Desktop: one timeline in data order (under 4.5 s);
   phones: each sheet as it scrolls in, urgent first. The CSS variables default to 1: complete without motion. */
AQmotion.fx('ContactRoutes', function (root, m) {
  var CLEAR = 'transform,opacity,visibility';
  function sheet(tl, li, at) {
    var tab = li.querySelector('.aq-contact-routes__tab'), main = li.querySelector('.aq-contact-routes__main'),
      call = li.querySelector('.aq-contact-routes__call'), steps = li.querySelector('.aq-contact-routes__steps'),
      clock = li.querySelector('.aq-contact-routes__clock:not(.is-empty)'), act = li.querySelector('.aq-contact-routes__action');
    tl.to(li, { '--aq-stub': 1, duration: 0.25, ease: 'power1.in' }, at);
    tl.fromTo(li, { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out', clearProps: CLEAR }, at + 0.15);
    if (tab) tl.fromTo(tab, { yPercent: 100 }, { yPercent: 0, duration: 0.4, ease: 'power2.out', clearProps: 'transform' }, at + 0.45);
    if (main) tl.fromTo(main, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.out', clearProps: CLEAR }, at + 0.35);
    if (call) tl.fromTo(call, { scale: 0.96, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.45, ease: 'power3.out', clearProps: CLEAR }, at + 0.5);
    var t = at + 0.6;
    if (steps) {
      var lis = [].slice.call(steps.children), n = lis.length || 1, per = 0.28;
      tl.fromTo(steps, { '--aq-line': 0 }, { '--aq-line': 1, duration: per * n, ease: 'none' }, t);
      lis.forEach(function (s, k) {
        var a2 = t + per * k, node = s.querySelector('.aq-contact-routes__node'), rest = s.querySelectorAll('.aq-contact-routes__n, .aq-contact-routes__s');
        if (node) tl.fromTo(node, { scale: 0.4 }, { scale: 1, duration: 0.35, ease: 'back.out(3)', clearProps: 'transform' }, a2);
        if (rest.length) tl.fromTo(rest, { autoAlpha: 0, x: -8 }, { autoAlpha: 1, x: 0, duration: 0.35, ease: 'power2.out', stagger: 0.05, clearProps: CLEAR }, a2 + 0.05);
      });
      t += per * n;
    }
    if (clock) {
      tl.fromTo(clock, { '--aq-line': 0 }, { '--aq-line': 1, duration: 0.15, ease: 'none' }, t);
      var end = clock.querySelector('.aq-contact-routes__end'), words = clock.querySelectorAll('.aq-contact-routes__k, .aq-contact-routes__v');
      if (end) tl.fromTo(end, { scale: 1.5, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.3, ease: 'power4.in', clearProps: CLEAR }, t + 0.1);
      if (words.length) tl.fromTo(words, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.06, ease: 'power2.out', clearProps: CLEAR }, t + 0.3);
      t += 0.45;
    }
    if (act) tl.fromTo(act, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35, clearProps: 'opacity,visibility' }, t - 0.1);
    return t;
  }
  function prime(li) {
    gsap.set(li, { '--aq-stub': 0, autoAlpha: 0 });
    li.querySelectorAll('.aq-contact-routes__steps, .aq-contact-routes__clock:not(.is-empty)').forEach(function (x) { gsap.set(x, { '--aq-line': 0 }) });
  }
  root.querySelectorAll('.aq-contact-routes').forEach(function (ul) {
    var lis = [].slice.call(ul.querySelectorAll(':scope > .aq-contact-routes__route')); if (!lis.length || !m.free(ul)) return;
    m.claim(ul);
    var phone = m.narrow(), seq = phone ? lis : lis.slice().sort(function (a, b) { return (parseFloat(a.style.getPropertyValue('--o')) || 0) - (parseFloat(b.style.getPropertyValue('--o')) || 0) });
    gsap.set(ul, { '--aq-riser': 0 }); lis.forEach(prime);
    if (phone) {
      m.on(ul, function () { m.tw(gsap.to(ul, { '--aq-riser': 1, duration: 1.4, ease: 'power1.inOut' })) }, 'top 85%');
      seq.forEach(function (li) { m.on(li, function () { sheet(m.tw(gsap.timeline()), li, 0) }, 'top 88%') });
      return;
    }
    m.on(ul, function () {
      var tl = m.tw(gsap.timeline({ delay: 0.15 })), t = 0.3;
      tl.to(ul, { '--aq-riser': 1, duration: 0.9, ease: 'power2.inOut' }, 0);
      seq.forEach(function (li) { sheet(tl, li, t); t += 0.55 });
      var total = tl.duration(); if (total > 4.4) tl.timeScale(total / 4.4);
    }, 'top 80%');
  });
});
