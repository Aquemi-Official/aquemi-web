/* EvidenceMap: each requirement reads in, then the link draws from claim to proof: the leader and "how we meet it"
   wipe in left to right from the requirement's rule, the fan wipes on into the proof column, and the file chips (or
   clause references) slide onto their ticks one by one. Phones: the same order down the left connector. Rows play in
   reading order as they arrive. */
AQmotion.fx('EvidenceMap', function (root, m) {
  var vis = function (a) { return [].filter.call(a, function (x) { return x.getClientRects().length }) };
  var done = { clearProps: 'transform,opacity,visibility' };
  root.querySelectorAll('.aq-evidence').forEach(function (el) {
    m.claim(el);
    var phone = m.narrow(), head = vis(el.querySelectorAll('thead th')), rows = vis(el.querySelectorAll('.aq-evidence__row'));
    var shut = phone ? 'inset(0 0 100% 0)' : 'inset(0 100% 0 0)', openC = phone ? 'inset(0 0 0% 0)' : 'inset(0 0% 0 0)';
    if (head.length) gsap.set(head, { autoAlpha: 0 });
    rows.forEach(function (r) {
      gsap.set(r.querySelector('.aq-evidence__t'), { autoAlpha: 0, y: 12 });
      gsap.set(r.querySelectorAll('.aq-evidence__how, .aq-evidence__proof'), { clipPath: shut });
      var docs = r.querySelectorAll('.aq-evidence__doc, .aq-evidence__k, .aq-evidence__go'); if (docs.length) gsap.set(docs, { autoAlpha: 0, x: -12 });
    });
    if (head.length) m.on(el, function () { m.tw(gsap.to(head, Object.assign({ autoAlpha: 1, duration: 0.4, stagger: 0.12 }, done))) });
    var t0 = 0.2;
    ScrollTrigger.batch(rows, { start: 'top 88%', once: true, onEnter: function (b) {
      b.forEach(function (r, i) {
        var tl = m.tw(gsap.timeline({ delay: t0 + i * 0.45 })), docs = r.querySelectorAll('.aq-evidence__doc, .aq-evidence__k, .aq-evidence__go');
        tl.to(r.querySelector('.aq-evidence__t'), Object.assign({ autoAlpha: 1, y: 0, duration: 0.5, ease: 'power3.out' }, done), 0)
          .to(r.querySelector('.aq-evidence__how'), { clipPath: openC, duration: 0.6, ease: 'power2.inOut', clearProps: 'clipPath' }, 0.25)
          .to(r.querySelector('.aq-evidence__proof'), { clipPath: openC, duration: 0.5, ease: 'power2.inOut', clearProps: 'clipPath' }, 0.7);
        if (docs.length) tl.to(docs, Object.assign({ autoAlpha: 1, x: 0, duration: 0.4, ease: 'power3.out', stagger: 0.1 }, done), 0.8);
      });
      t0 = 0;
    } });
  });
});
