/* RecordAnatomy: the specimen record is printed, then read zone by zone. The sheet unrolls downwards (clip-path); in
   each zone in turn the margin number stamps in, the drawing draws on (DrawSVG; the figure's bar rises under its
   dashed limit, the sample ticks drop in along the period, the stamp strikes once), the leader runs out across the
   gutter to its point and the point's title rises. Once, under 4.5 s. Hover a row: its number fills, its leader
   turns flow. */
AQmotion.fx('RecordAnatomy', function (root, m) {
  root.querySelectorAll('.aq-record-anatomy').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var q = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) }, wide = !m.narrow();
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    var zones = q('.aq-record-anatomy__zone');
    if (wide) tl.fromTo(zones, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.5, stagger: 0.12, ease: 'power2.inOut', clearProps: 'clipPath' }, 0);
    q('.aq-record-anatomy__row').forEach(function (r, i) {
      var at = (wide ? 0.45 : 0.1) + i * 0.6, svg = r.querySelector('svg'), mark = r.querySelector('.aq-record-anatomy__mark');
      if (!wide) tl.fromTo(r.querySelector('.aq-record-anatomy__zone'), { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.45, ease: 'power2.inOut', clearProps: 'clipPath' }, at - 0.1);
      if (mark) tl.from(mark, { scale: 1.6, autoAlpha: 0, duration: 0.35, ease: 'power4.out', clearProps: 'transform,opacity,visibility' }, at);
      if (svg) {
        var ln = q('path, circle', svg).filter(function (p) { return !p.closest('.aq-record-anatomy__stamp') });
        if (window.DrawSVGPlugin) tl.fromTo(ln, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.7, stagger: 0.03, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, at + 0.1);
        var tx = q('text', svg); if (tx.length) tl.from(tx, { autoAlpha: 0, duration: 0.4, clearProps: 'opacity,visibility' }, at + 0.15);
        var fill = svg.querySelector('.aq-record-anatomy__fill'); if (fill) tl.from(fill, { scaleY: 0, transformOrigin: '50% 100%', duration: 0.6, clearProps: 'transform' }, at + 0.4);
        var st = svg.querySelector('.aq-record-anatomy__stamp'); if (st) tl.from(st, { scale: 1.5, autoAlpha: 0, transformOrigin: '320px 44px', duration: 0.3, ease: 'power4.in', clearProps: 'transform,opacity,visibility' }, at + 0.55);
      }
      tl.from(r.querySelector('.aq-record-anatomy__lead'), wide ? { scaleX: 0, duration: 0.45, ease: 'power2.inOut', clearProps: 'transform' } : { scaleY: 0, duration: 0.35, clearProps: 'transform' }, at + 0.35)
        .from(r.querySelector('.aq-record-anatomy__pt-t'), { x: wide ? -12 : 0, y: wide ? 0 : 8, autoAlpha: 0, duration: 0.5, clearProps: 'transform,opacity,visibility' }, at + 0.6);
    });
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
