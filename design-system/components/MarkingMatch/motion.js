/* MarkingMatch: each delivery is checked as it scrolls in. The part draws on, its marking rings in flow with one
   pulse, the check line runs out from both ends to the middle and the tick seats, then the certificate slides in from
   the paper side and how we verify it fades up under the line. One timeline per row, once, under 2.2 s. */
AQmotion.fx('MarkingMatch', function (root, m) {
  root.querySelectorAll('.aq-marking-match').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var narrow = m.narrow(), D = window.DrawSVGPlugin, cols = el.querySelector('.aq-marking-match__cols');
    if (cols) { var ct = m.tw(gsap.timeline({ paused: true })); ct.from(cols.children, { autoAlpha: 0, y: 8, duration: 0.5, stagger: 0.08, clearProps: 'transform,opacity,visibility' }); m.on(cols, function () { ct.play() }, 'top 90%') }
    [].forEach.call(el.querySelectorAll('.aq-marking-match__row'), function (row) {
      var q = function (s) { return [].slice.call(row.querySelectorAll(s)) }, one = function (s) { return row.querySelector(s) };
      var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
      var lines = q('.aq-marking-match__fig path, .aq-marking-match__fig ellipse'), marks = q('.aq-marking-match__mark');
      if (D && lines.length) tl.from(lines, { drawSVG: '0%', duration: 0.7, stagger: 0.03, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, 0);
      else if (lines.length) tl.from(lines, { autoAlpha: 0, duration: 0.5, clearProps: 'opacity,visibility' }, 0);
      tl.from(one('.aq-marking-match__name'), { autoAlpha: 0, y: 10, duration: 0.5, clearProps: 'transform,opacity,visibility' }, 0.2);
      if (marks.length) tl.from(marks, { scale: 1.6, autoAlpha: 0, transformOrigin: '50% 50%', duration: 0.4, ease: 'back.out(2)', clearProps: 'transform,opacity,visibility' }, 0.7);
      var line = one('.aq-marking-match__line'), ok = one('.aq-marking-match__ok');
      if (line) tl.from(line, narrow ? { scaleY: 0, transformOrigin: '50% 0', duration: 0.5, clearProps: 'transform' } : { scaleX: 0, transformOrigin: '50% 50%', duration: 0.5, ease: 'power2.inOut', clearProps: 'transform' }, 0.9);
      if (ok) tl.from(ok, { scale: 0, duration: 0.35, ease: 'back.out(2.5)', clearProps: 'transform' }, 1.25);
      tl.from(one('.aq-marking-match__paper'), { x: narrow ? 0 : 40, y: narrow ? 16 : 0, rotation: narrow ? 0 : 2, autoAlpha: 0, duration: 0.6, clearProps: 'transform,opacity,visibility' }, 0.5);
      tl.from(one('.aq-marking-match__how'), { autoAlpha: 0, y: 6, duration: 0.45, clearProps: 'transform,opacity,visibility' }, 1.4);
      m.on(row, function () { tl.play() }, 'top 85%');
    });
  });
});
