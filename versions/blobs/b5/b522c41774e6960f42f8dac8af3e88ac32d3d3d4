/* MembraneAtlas: each plate is put under the scope. The reticle turns into place, the field opens like an iris on the
   clean membrane texture, then the condition's damage spreads across it (pits, crystals, cake, coat, colonies appear
   in a quick scatter from the centre out) while the text slides in beside it. Plates follow in reading order as the
   grid scrolls in (phones: each plate as it arrives). Once, under 3 s per plate.
   Hover is CSS only (the rim turns flow). The section heading is left to the core. */
AQmotion.fx('MembraneAtlas', function (root, m) {
  root.querySelectorAll('.aq-membrane-atlas').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var plates = [].slice.call(el.querySelectorAll('.aq-membrane-atlas__plate'));
    function play(p) {
      var svg = p.querySelector('svg'), dmg = svg && [].slice.call(svg.querySelectorAll('.aq-membrane-atlas__dmg > *')), text = p.querySelectorAll('.aq-membrane-atlas__t, .aq-membrane-atlas__row');
      var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
      tl.from(p.querySelector('.aq-membrane-atlas__scope'), { clipPath: 'circle(0% at 50% 50%)', duration: 0.8, ease: 'power2.inOut', clearProps: 'clipPath' }, 0);
      if (svg) tl.from(svg.querySelectorAll('.aq-membrane-atlas__tick, .aq-membrane-atlas__cross'), { rotation: -40, svgOrigin: '0 0', duration: 1, clearProps: 'transform' }, 0);
      if (dmg && dmg.length) {
        dmg.sort(function (a, b) { var A = a.getBBox ? a.getBBox() : { x: 0, y: 0 }, B = b.getBBox ? b.getBBox() : { x: 0, y: 0 }; return (A.x * A.x + A.y * A.y) - (B.x * B.x + B.y * B.y) });
        tl.from(dmg, { autoAlpha: 0, duration: 0.3, stagger: { amount: 0.9 }, ease: 'none', clearProps: 'opacity,visibility' }, 0.5);
      }
      tl.from(text, { x: 14, autoAlpha: 0, duration: 0.5, stagger: 0.08, clearProps: 'transform,opacity,visibility' }, 0.25);
      var f = p.querySelector('.aq-membrane-atlas__fig'); if (f) tl.call(function () { m.scramble(f, 0) }, null, 0.1);
      return tl;
    }
    if (m.narrow()) { plates.forEach(function (p) { var tl = play(p); m.on(p, function () { tl.play() }, 'top 88%') }); return }
    // desktop: row by row, each row's plates a beat apart
    var rows = {}; plates.forEach(function (p) { var k = Math.round(p.offsetTop); (rows[k] = rows[k] || []).push(p) });
    Object.keys(rows).forEach(function (k) { var row = rows[k], tls = row.map(function (p) { return play(p) });
      m.on(row[0], function () { tls.forEach(function (t, i) { m.tw(gsap.delayedCall(i * 0.18, function () { t.play() })) }) }, 'top 82%') });
  });
});
