/* RelatedLinks: the route is laid, then each stop opens. Desktop: the pipe runs out card by card along the top of the
   row; at each card the drop line falls, the junction node pops and the card rises off it, so the row reads left to
   right as one route. Phones: the spine draws down and each card's connector, node and card follow as it is reached.
   Hover (CSS): the arrow nudges along, the thumbnail lifts, the node rings. */
AQmotion.fx('RelatedLinks', function (root, m) {
  root.querySelectorAll('.aq-related-links').forEach(function (ol) {
    var lis = [].filter.call(ol.children, function (li) { return li.tagName === 'LI' }); if (!lis.length) return;
    m.claim(ol);
    var phone = m.narrow(), cards = lis.map(function (li) { return li.querySelector('.aq-related-links__card') });
    var bits = function (c) { return c ? c.querySelectorAll('.aq-related-links__n, .aq-related-links__thumb, .aq-related-links__group, .aq-related-links__title') : [] };
    if (phone) gsap.set(ol, { '--aq-spine': 0 });
    gsap.set(lis, { '--aq-pipe': phone ? 1 : 0, '--aq-drop': 0 });
    gsap.set(cards, { '--aq-node': 0 });
    cards.forEach(function (c) { gsap.set(bits(c), { y: 14, autoAlpha: 0 }) });
    m.on(ol, function () {
      var tl = m.tw(gsap.timeline()), seg = phone ? 0.16 : 0.32;
      if (phone) tl.to(ol, { '--aq-spine': 1, duration: seg * lis.length + 0.1, ease: 'none' }, 0);
      lis.forEach(function (li, i) {
        var t = i * seg, c = cards[i];
        if (!phone) tl.to(li, { '--aq-pipe': 1, duration: seg, ease: 'none' }, t);
        var at = phone ? t + 0.1 : t + seg * 0.45;
        tl.to(li, { '--aq-drop': 1, duration: 0.22, ease: 'power2.in' }, at)
          .to(c, { '--aq-node': 1, duration: 0.3, ease: 'back.out(3.5)' }, at + 0.2)
          .to(bits(c), { y: 0, autoAlpha: 1, duration: 0.55, ease: 'power3.out', stagger: 0.05, clearProps: 'transform,opacity,visibility' }, at + 0.26);
      });
    }, 'top 85%');
  });
});
