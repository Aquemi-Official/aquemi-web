/* ExplodedService: the pump comes apart for service. The sheet fades up; the pump draws itself assembled (lines on,
   then the solids fill); then the parts slide apart along the shaft line, the casing first and furthest, each settling
   in its exploded place while the centre line draws through them; then the leaders run out from the three parts to
   their shelves and the promises stand up on them, number and icon first. One timeline, once, about 3.5 s. */
AQmotion.fx('ExplodedService', function (root, m) {
  root.querySelectorAll('.aq-exploded-service').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var svg = el.querySelector('.aq-exploded-service__svg'); if (!svg) return;
    var narrow = m.narrow(), D = window.DrawSVGPlugin;
    var pieces = qa('.aq-exploded-service__piece', svg), sheet = qa('.aq-iso__sheet', svg), axis = svg.querySelector('.aq-exploded-service__axis');
    var leads = qa('[data-lead]', svg), calls = qa('.aq-exploded-service__call'), pins = qa('.aq-exploded-service__pin');
    var lines = [], fills = [];
    pieces.forEach(function (p) {
      qa('path,circle', p).forEach(function (s) {
        var cs = getComputedStyle(s);
        if (s.classList.contains('aq-iso__eq')) fills.push(s);
        if (cs.stroke && cs.stroke !== 'none' && parseFloat(cs.strokeWidth) > 0) { s.setAttribute('vector-effect', 'non-scaling-stroke'); lines.push(s) }
      });
    });
    var leadLines = qa('.aq-iso__leader-line', svg), dots = qa('.aq-iso__leader-dot', svg);
    leadLines.forEach(function (s) { s.setAttribute('vector-effect', 'non-scaling-stroke') });
    function clean(els) { els.forEach(function (s) { s.style.removeProperty('stroke-dasharray'); s.style.removeProperty('stroke-dashoffset') }) }
    var off = pieces.map(function (p) { var v = (p.getAttribute('data-du') || '0,0').split(',').map(Number); return { x: v[0], y: v[1] } });
    var tl = m.tw(gsap.timeline({ paused: true }));
    if (sheet.length) tl.from(sheet, { autoAlpha: 0, duration: 0.5, ease: 'power1.out', clearProps: 'opacity,visibility' }, 0);
    // 1. assembled: every part starts at its place on the shaft
    pieces.forEach(function (p, i) { gsap.set(p, { x: off[i].x, y: off[i].y }) });
    if (D) tl.fromTo(lines, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.9, ease: 'power2.inOut', stagger: { amount: 0.4 }, onComplete: function () { clean(lines) } }, 0.15);
    else tl.from(lines, { autoAlpha: 0, duration: 0.6, clearProps: 'opacity,visibility' }, 0.15);
    tl.fromTo(fills, { fillOpacity: 0 }, { fillOpacity: 1, duration: 0.5, ease: 'power1.out', clearProps: 'fillOpacity' }, 0.75);
    // 2. explode: furthest part first, each settles in place
    var te = 1.35;
    pieces.forEach(function (p, i) { if (off[i].x || off[i].y) tl.to(p, { x: 0, y: 0, duration: 1.1, ease: 'aq-settle', clearProps: 'transform' }, te + i * 0.07) });
    if (axis) { if (D) tl.fromTo(axis, { drawSVG: '0%' }, { drawSVG: '100%', duration: 1.1, ease: 'power2.out', onComplete: function () { clean([axis]) } }, te + 0.1); else tl.from(axis, { autoAlpha: 0, duration: 0.6, clearProps: 'opacity,visibility' }, te + 0.1) }
    // 3. leaders run out, promises stand up on their shelves
    var tc = te + 1.1;
    if (!narrow && D && leadLines.length) tl.fromTo(leadLines, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.6, ease: 'power2.inOut', stagger: 0.12, onComplete: function () { clean(leadLines) } }, tc);
    if (dots.length) tl.from(dots, { scale: 0, transformOrigin: '50% 50%', duration: 0.4, ease: 'back.out(3)', stagger: 0.12, clearProps: 'transform' }, tc);
    if (pins.length) tl.from(pins, { scale: 0, duration: 0.4, ease: 'back.out(3)', stagger: 0.12, clearProps: 'transform' }, tc);
    calls.forEach(function (c, i) {
      var code = c.querySelector('.aq-exploded-service__code'), rest = qa('.aq-exploded-service__t, .aq-exploded-service__d', c), n = c.querySelector('.aq-exploded-service__n');
      var at = narrow ? tc + i * 0.12 : tc + 0.45 + i * 0.12;
      tl.from(code, { autoAlpha: 0, x: -8, duration: 0.4, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, at)
        .from(rest, { y: 14, autoAlpha: 0, duration: 0.55, stagger: 0.07, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, at + 0.08);
      if (n) tl.call(function () { m.scramble(n, 0) }, null, at);
    });
    m.on(el, function () { tl.play() }, narrow ? 'top 80%' : 'top 65%');
  });
});
