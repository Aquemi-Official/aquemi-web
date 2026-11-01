/* RelatedLinks: the route on to the next pages. On scroll-in the pipe is laid along the top of the row (down the rail on
   phones); as it passes each tile the node seats on the pipe, the drop runs down and the tile rises off it (its
   picture prints up, the title follows). Then the water runs the pipe once, end to end. Under 3 s, once.
   Hover (CSS): the tile's drop, node, border, picture and title light in flow, the picture lifts, the arrow slides. */
AQmotion.fx('RelatedLinks', function (root, m) {
  root.querySelectorAll('.aq-related-links').forEach(function (ol) {
    var lis = [].filter.call(ol.children, function (li) { return li.tagName === 'LI' }); if (!lis.length) return;
    m.claim(ol);
    var phone = m.narrow(), cards = lis.map(function (li) { return li.querySelector('.aq-related-links__card') }).filter(Boolean);
    var vis = cards.map(function (c) { return c.querySelector('.aq-related-links__vis > *') }).filter(Boolean);
    var words = cards.map(function (c) { return c.querySelectorAll('.aq-related-links__n, .aq-related-links__group, .aq-related-links__title') });
    gsap.set(ol, { '--aq-pipe': 0, '--aq-water': 0 });
    gsap.set(lis, { '--aq-drop': 0, '--aq-node': 0 });
    gsap.set(cards, { y: phone ? 0 : 18, x: phone ? -10 : 0, autoAlpha: 0 });
    if (vis.length) gsap.set(vis, { clipPath: 'inset(100% 0 0 0)' });
    words.forEach(function (w) { gsap.set(w, { y: 8, autoAlpha: 0 }) });
    m.on(ol, function () {
      var tl = m.tw(gsap.timeline({ defaults: { ease: 'power3.out' } })), lay = phone ? 0.5 : 0.9;
      tl.to(ol, { '--aq-pipe': 1, duration: lay, ease: 'power2.inOut' }, 0);
      lis.forEach(function (li, i) {
        var at = lay * (i + 0.4) / lis.length, c = li.querySelector('.aq-related-links__card'), v = c && c.querySelector('.aq-related-links__vis > *');
        tl.to(li, { '--aq-node': 1, duration: 0.3, ease: 'back.out(3)' }, at)
          .to(li, { '--aq-drop': 1, duration: 0.25, ease: 'power2.in' }, at + 0.1);
        if (c) tl.to(c, { y: 0, x: 0, autoAlpha: 1, duration: 0.6, clearProps: 'transform,opacity,visibility' }, at + 0.3);
        if (v) tl.to(v, { clipPath: 'inset(0% 0 0 0)', duration: 0.8, ease: 'power3.inOut', clearProps: 'clipPath' }, at + 0.4);
        if (words[i]) tl.to(words[i], { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.05, clearProps: 'transform,opacity,visibility' }, at + 0.5);
      });
      tl.to(ol, { '--aq-water': 1, duration: phone ? 0.8 : 1.2, ease: 'power1.inOut' }, lay * 0.5);
    }, 'top 85%');
  });
});
