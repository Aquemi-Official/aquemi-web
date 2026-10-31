/* RoleMatrix: the key's three stamps strike first, then each signature block rises into place and its stamps strike
   one after another, left to right, like a document being signed off. Blocks play in reading order as they arrive. */
AQmotion.fx('RoleMatrix', function (root, m) {
  var vis = function (a) { return [].filter.call(a, function (x) { return x.getClientRects().length }) };
  var done = { clearProps: 'transform,opacity,visibility' };
  var strike = { autoAlpha: 0, scale: 1.35, rotation: -2 };
  root.querySelectorAll('.aq-roles').forEach(function (el) {
    m.claim(el);
    var key = el.querySelectorAll('.aq-roles__key .aq-roles__stamp'), rows = vis(el.querySelectorAll('.aq-roles__row'));
    if (key.length) gsap.set(key, strike);
    rows.forEach(function (r) {
      gsap.set(r, { autoAlpha: 0, y: 18 });
      gsap.set(r.querySelectorAll('.aq-roles__cell .aq-roles__stamp'), strike);
      gsap.set(r.querySelectorAll('.aq-roles__k'), { autoAlpha: 0 });
    });
    if (key.length) m.on(el, function () { m.tw(gsap.to(key, Object.assign({ autoAlpha: 1, scale: 1, rotation: 0, duration: 0.3, ease: 'power4.in', stagger: 0.12 }, done))) });
    var t0 = 0.45;
    ScrollTrigger.batch(rows, { start: 'top 90%', once: true, onEnter: function (b) {
      b.forEach(function (r, i) {
        var tl = m.tw(gsap.timeline({ delay: t0 + i * 0.3 }));
        tl.to(r, Object.assign({ autoAlpha: 1, y: 0, duration: 0.5, ease: 'power3.out' }, done), 0)
          .to(r.querySelectorAll('.aq-roles__k'), Object.assign({ autoAlpha: 1, duration: 0.3, stagger: 0.1 }, done), 0.2)
          .to(r.querySelectorAll('.aq-roles__cell .aq-roles__stamp'), Object.assign({ autoAlpha: 1, scale: 1, rotation: 0, duration: 0.28, ease: 'power4.in', stagger: 0.22 }, done), 0.3);
      });
      t0 = 0;
    } });
  });
});
