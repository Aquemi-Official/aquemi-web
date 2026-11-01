/* CoverageMap: the map is laid tile by tile from west to east (each square drops into its place), the home tile's mark
   strikes, the readout of the region being read slides into the map's open corner, then the region rows rise in. While you read, the row nearest the middle of the screen lights its tiles on
   the held map (desktop), so the map always points at what you are reading. One entrance timeline under 2.5 s; the
   reading sync is a ScrollTrigger per row. Nothing under reduced motion (hover and press still light tiles). */
AQmotion.fx('CoverageMap', function (root, m) {
  var CLEAR = 'transform,opacity,visibility';
  root.querySelectorAll('.aq-coverage-map').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var tiles = [].slice.call(el.querySelectorAll('.aq-coverage-map__tile')), rows = [].slice.call(el.querySelectorAll('.aq-coverage-map__row')),
      base = el.querySelector('.aq-coverage-map__base'), title = el.querySelector('.aq-coverage-map__title');
    var col = function (t) { return parseInt(t.style.gridColumnStart || t.style.gridColumn, 10) || 1 };
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    if (title) tl.fromTo(title, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4, clearProps: 'opacity,visibility' }, 0);
    tiles.forEach(function (t) {
      tl.fromTo(t, { y: -14, scale: 0.85, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, duration: 0.45, ease: 'back.out(2)', clearProps: CLEAR }, 0.1 + (col(t) - 1) * 0.12 + Math.random() * 0.05);
    });
    var now = el.querySelector('.aq-coverage-map__now');
    if (now) tl.fromTo(now, { autoAlpha: 0, x: -8 }, { autoAlpha: 1, x: 0, duration: 0.45, clearProps: CLEAR }, '>-0.15');
    if (base) tl.fromTo(base, { autoAlpha: 0, x: -8 }, { autoAlpha: 1, x: 0, duration: 0.4, clearProps: CLEAR }, '>-0.1');
    if (rows.length) tl.fromTo(rows, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, clearProps: CLEAR }, 0.3);
    var total = tl.duration(); if (total > 2.5) tl.timeScale(total / 2.5);
    m.on(el, function () { tl.play() }, 'top 75%');
    if (!m.narrow() && window.AQcoverage) rows.forEach(function (r) {
      m.tw(ScrollTrigger.create({ trigger: r, start: 'top 55%', end: 'bottom 55%',
        onToggle: function (s) { if (s.isActive) window.AQcoverage(el, r.getAttribute('data-r')) } }));
    });
  });
});
