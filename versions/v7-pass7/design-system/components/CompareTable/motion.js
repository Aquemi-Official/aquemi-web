/* CompareTable: the ruled frame unrolls, the column heads drop onto their rule, then each row reads in left to right
   (row label first, the deciding columns after it), rows in reading order as they scroll in. Phones: each record card
   rises and its fields follow. The column tabs (--tabs) slide the newly chosen column in. */
AQmotion.fx('CompareTable', function (root, m) {
  var vis = function (a) { return [].filter.call(a, function (x) { return x.getClientRects().length }) };
  var done = { clearProps: 'transform,opacity,visibility' };
  root.querySelectorAll('.aq-compare-table').forEach(function (el) {
    var table = el.querySelector('.aq-compare-table__table'); if (!table) return;
    m.claim(el);
    var phone = m.narrow(), head = vis(el.querySelectorAll('thead th')), rows = vis(el.querySelectorAll('tbody tr'));
    if (!phone) { gsap.set(table, { clipPath: 'inset(0 0 100% 0)' }); gsap.set(head, { autoAlpha: 0, y: -10 }) }
    rows.forEach(function (r) {
      if (phone) gsap.set(r, { autoAlpha: 0, y: 20 });
      gsap.set(vis(r.children), { autoAlpha: 0, x: phone ? 0 : -14, y: phone ? 8 : 0 });
    });
    if (!phone) m.on(el, function () {
      m.tw(gsap.timeline()
        .to(table, { clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'power3.inOut', clearProps: 'clipPath' }, 0)
        .to(head, Object.assign({ autoAlpha: 1, y: 0, duration: 0.45, ease: 'power3.out', stagger: 0.07 }, done), 0.2));
    });
    // Rows in reading order as they arrive; a batch that enters together still plays one after another
    var t0 = phone ? 0 : 0.45;
    ScrollTrigger.batch(rows, { start: 'top 92%', once: true, onEnter: function (b) {
      b.forEach(function (r, i) {
        var tl = m.tw(gsap.timeline({ delay: t0 + i * (phone ? 0.14 : 0.16) })), c = vis(r.children);
        if (phone) tl.to(r, Object.assign({ autoAlpha: 1, y: 0, duration: 0.55, ease: 'power3.out' }, done), 0);
        tl.to(c, Object.assign({ autoAlpha: 1, x: 0, y: 0, duration: 0.5, ease: 'power3.out', stagger: phone ? 0.06 : 0.09 }, done), phone ? 0.15 : 0);
      });
      t0 = 0;
    } });
    // Tabs (phones, four or more value columns): the chosen column slides in
    el.addEventListener('click', function (ev) {
      if (!ev.target.closest('.aq-compare-table__tab')) return;
      requestAnimationFrame(function () { m.tw(gsap.from(vis(el.querySelectorAll('tbody td')), Object.assign({ autoAlpha: 0, x: 16, duration: 0.35, ease: 'power2.out', stagger: 0.03 }, done))) });
    });
  });
});
