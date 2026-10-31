/* Footer: the drawing sheet is ruled up. The frame unrolls, the zone references count off round the edge, each column
   heading draws its flow rule left to right and its links follow, then the title block fills cell by cell. */
AQmotion.fx('Footer', function (root, m) {
  var f = root.querySelector('.aq-footer'); if (!f) return;
  var sheet = f.querySelector('.aq-footer__sheet'); if (!sheet) return;
  m.claim(f);
  var qa = function (s) { return [].slice.call(f.querySelectorAll(s)) };
  var zones = qa('.aq-footer__zones span'), head = qa('.aq-footer__head > *'), cols = qa('.aq-footer__col'), cells = qa('.aq-footer__cell'), legal = f.querySelector('.aq-footer__legal');
  gsap.set(sheet, { clipPath: 'inset(0 0 100% 0)' });
  gsap.set(zones.concat(head, cells, legal ? [legal] : []), { autoAlpha: 0 });
  m.on(f, function () {
    var tl = m.tw(gsap.timeline({ defaults: { ease: 'power3.out' } }));
    tl.to(sheet, { clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: 'power3.inOut', clearProps: 'clipPath' }, 0);
    tl.to(zones, { autoAlpha: 1, duration: 0.2, stagger: 0.03, clearProps: 'opacity,visibility' }, 0.3);
    tl.fromTo(head, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1, clearProps: 'transform,opacity,visibility' }, 0.35);
    cols.forEach(function (c, i) {
      var h = c.querySelector('.aq-footer__colhead'), links = [].slice.call(c.querySelectorAll('.aq-footer__links a')), at = 0.5 + i * 0.12;
      if (h) tl.fromTo(h, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.6, ease: 'power2.inOut', clearProps: 'clipPath' }, at);
      if (links.length && c.open) tl.from(links, { autoAlpha: 0, x: -8, duration: 0.35, stagger: 0.03, clearProps: 'transform,opacity,visibility' }, at + 0.3);
    });
    if (cells.length) tl.to(cells, { autoAlpha: 1, duration: 0.35, stagger: 0.07, clearProps: 'opacity,visibility' }, 1);
    if (legal) tl.to(legal, { autoAlpha: 1, duration: 0.4, clearProps: 'opacity,visibility' }, 1.3);
  }, 'top 90%');
});
