/* FaultList: the failures rise in order; then the open one unfolds, its cause column first and the design answer
   after it, cause before effect. Opening another failure unfolds it the same way (the visitor drives it). */
AQmotion.fx('FaultList', function (root, m) {
  var vis = function (a) { return [].filter.call(a, function (x) { return x.getClientRects().length }) };
  var done = { clearProps: 'transform,opacity,visibility' };
  function unfold(d, at) {
    var body = d.querySelector('.aq-faults__body'); if (!body) return null;
    var tl = gsap.timeline({ delay: at || 0 });
    tl.fromTo(body, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.45, ease: 'power3.out', clearProps: 'clipPath' }, 0)
      .from(body.children, Object.assign({ autoAlpha: 0, y: -8, duration: 0.4, ease: 'power2.out', stagger: 0.14 }, done), 0.1);
    return m.tw(tl);
  }
  root.querySelectorAll('.aq-faults').forEach(function (el) {
    m.claim(el);
    var rows = vis(el.querySelectorAll(':scope > details')), ready = false;
    gsap.set(rows, { autoAlpha: 0, y: 16 });
    var open = rows.filter(function (d) { return d.open }), body = open.map(function (d) { return d.querySelector('.aq-faults__body') }).filter(Boolean);
    gsap.set(body, { clipPath: 'inset(0 0 100% 0)' });
    m.on(el, function () {
      m.tw(gsap.to(rows, Object.assign({ autoAlpha: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.08 }, done)));
      open.forEach(function (d) { unfold(d, 0.35) });
      ready = true;
    });
    rows.forEach(function (d) { d.addEventListener('toggle', function () { if (ready && d.open) unfold(d, 0) }) });
  });
});
