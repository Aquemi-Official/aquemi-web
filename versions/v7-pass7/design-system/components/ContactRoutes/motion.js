/* ContactRoutes: the ways in are dealt onto the plate. The dashed route line grows down the left; at each sheet the
   sheet slides in, its stub runs out from the line and the arrowhead lands, the folder tab rises out of the sheet's top edge, then its 1 > 2 > 3 strip
   runs: the dashed line draws left to right and each numbered ring pops as the line reaches it, with the arrow and the step after it. The urgent route's red dot pulses twice (1.2 s, then still) and
   its call bar settles in. Desktop: one timeline in data order (under 4.5 s); phones: each sheet as it scrolls in. */
AQmotion.fx('ContactRoutes', function (root, m) {
  var CLEAR = 'transform,opacity,visibility';
  function sheet(tl, li, at) {
    var tab = li.querySelector('.aq-contact-routes__tab'), steps = li.querySelector('.aq-contact-routes__steps'),
      head = li.querySelectorAll('.aq-contact-routes__main, .aq-contact-routes__side'), call = li.querySelector('.aq-contact-routes__call'), dot = li.querySelector('.aq-contact-routes__dot');
    tl.fromTo(li, { x: -24, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.55, ease: 'power3.out', clearProps: CLEAR }, at);
    tl.to(li, { '--aq-stub': 1, duration: 0.3, ease: 'power1.in' }, at + 0.3);
    if (tab) tl.fromTo(tab, { y: 10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.35, ease: 'power2.out', clearProps: CLEAR }, at + 0.4);
    if (head.length) tl.fromTo(head, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45, ease: 'power3.out', stagger: 0.1, clearProps: CLEAR }, at + 0.35);
    if (call) tl.fromTo(call, { scale: 0.97, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.45, ease: 'back.out(2)', clearProps: CLEAR }, at + 0.55);
    if (dot) tl.fromTo(dot, { scale: 1 }, { keyframes: { scale: [1, 1.9, 1, 1.9, 1] }, duration: 1.2, ease: 'none', clearProps: 'transform' }, at + 0.6);
    var t = at + 0.6;
    if (steps) {
      var lis = [].slice.call(steps.children), n = lis.length || 1;
      tl.fromTo(steps, { '--aq-line': 0 }, { '--aq-line': 1, duration: 0.25 * n + 0.15, ease: 'none' }, t);
      lis.forEach(function (s, k) {
        var at2 = t + 0.25 * k;
        var rn = s.querySelector('.aq-contact-routes__n'), rest = s.querySelectorAll('.aq-contact-routes__s, .aq-contact-routes__arrow');
        if (rn) tl.fromTo(rn, { scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.3, ease: 'back.out(3)', clearProps: CLEAR }, at2);
        if (rest.length) tl.fromTo(rest, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power2.out', clearProps: CLEAR }, at2 + 0.1);
      });
      t += 0.25 * n + 0.15;
    }
    return t;
  }
  function prime(li) {
    gsap.set(li, { '--aq-stub': 0, autoAlpha: 0 });
    var steps = li.querySelector('.aq-contact-routes__steps'); if (steps) gsap.set(steps, { '--aq-line': 0 });
    var parts = li.querySelectorAll('.aq-contact-routes__tab, .aq-contact-routes__n, .aq-contact-routes__s, .aq-contact-routes__arrow'); if (parts.length) gsap.set(parts, { autoAlpha: 0 });
  }
  root.querySelectorAll('.aq-contact-routes').forEach(function (ul) {
    var lis = [].slice.call(ul.querySelectorAll(':scope > .aq-contact-routes__route')); if (!lis.length) return;
    m.claim(ul);
    // data order on desktop (the CSS order), markup order on phones (urgent first)
    var phone = m.narrow(), seq = phone ? lis : lis.slice().sort(function (a, b) { return (parseFloat(a.style.getPropertyValue('--o')) || 0) - (parseFloat(b.style.getPropertyValue('--o')) || 0) });
    gsap.set(ul, { '--aq-riser': 0 }); lis.forEach(prime);
    if (phone) {
      m.on(ul, function () { m.tw(gsap.to(ul, { '--aq-riser': 1, duration: 1.6, ease: 'power1.inOut' })) }, 'top 82%');
      seq.forEach(function (li) { m.on(li, function () { sheet(m.tw(gsap.timeline()), li, 0) }, 'top 86%') });
      return;
    }
    m.on(ul, function () {
      var tl = m.tw(gsap.timeline({ delay: 0.4 })), t = 0;
      tl.to(ul, { '--aq-riser': 1, duration: 0.7 + 0.9 * seq.length, ease: 'none' }, 0);
      seq.forEach(function (li, i) { var end = sheet(tl, li, t); t = Math.max(t + 0.9, end - 0.6) });
      var total = tl.duration(); if (total > 4.4) tl.timeScale(total / 4.4);
    }, 'top 80%');
  });
});
