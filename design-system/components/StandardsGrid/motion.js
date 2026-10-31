/* StandardsGrid: cards land in reading order; as each lands, the connector from the card before it (across the row)
   or above it (down from the row above) draws in, so the frame reads as one chain. The connectors are pseudo-elements
   drawn through --aq-cn (scale only). Folded cards are left alone. */
AQmotion.fx('StandardsGrid', function (root, m) {
  root.querySelectorAll('.aq-standards-grid').forEach(function (g) {
    if (!m.free(g)) return;
    var items = [].filter.call(g.children, function (li) { return !li.classList.contains('aq-fold-x') }); if (!items.length) return;
    m.claim(g);
    gsap.set(items, { autoAlpha: 0, y: 14, '--aq-cn': 0 });
    m.on(g, function () {
      var tl = m.tw(gsap.timeline({ delay: 0.1 }));
      items.forEach(function (it, i) {
        var at = i * 0.12;
        tl.to(it, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, at)
          .to(it, { '--aq-cn': 1, duration: 0.3, ease: 'power2.out', clearProps: '--aq-cn' }, at + 0.35);
        var code = it.querySelector('.aq-standards-grid__code');
        if (code && !code.children.length) tl.call(function () { m.scramble(code, 0) }, null, at + 0.1);
      });
    });
  });
});
