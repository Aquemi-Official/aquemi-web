/* TestSheet: the protocol is executed down the sheet. The paper slides onto the table, then each row is run in turn:
   its number decodes, its text rises, its tick box draws the tick. At a hold point the run waits: the signature writes
   itself along the line and the HOLD stamp strikes (drops in large and settles askew). The torn slip drops into place
   last, a beat apart. One timeline on scroll-in, under 5 s; on phones each row runs as it scrolls in. */
AQmotion.fx('TestSheet', function (root, m) {
  var D = window.DrawSVGPlugin;
  [].forEach.call(root.querySelectorAll('.aq-test-sheet'), function (el) {
    var paper = el.querySelector('.aq-test-sheet__paper'); if (!paper) return; m.claim(paper);
    var rows = [].slice.call(el.querySelectorAll('.aq-test-sheet__row'));
    function run(tl, row, at) {
      var q = function (s) { return row.querySelector(s) }, n = q('.aq-test-sheet__n'), tick = q('.aq-test-sheet__box path'), sig = q('.aq-test-sheet__sig path'), st = q('.aq-test-sheet__stamp');
      if (row.classList.contains('is-torn')) { tl.fromTo(row, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, at); at += 0.3 }
      if (n) tl.add(function () { m.scramble(n) }, at);
      tl.from(row.querySelectorAll('.aq-test-sheet__t, .aq-test-sheet__d'), { autoAlpha: 0, y: 8, duration: 0.4, stagger: 0.06, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, at);
      var t = at + 0.25;
      if (tick && D) tl.fromTo(tick, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.3, ease: 'power2.out', clearProps: 'strokeDasharray,strokeDashoffset' }, t);
      if (sig && D) { tl.fromTo(sig, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.7, ease: 'power1.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, t); t += 0.6 }
      if (st) { tl.fromTo(st, { scale: 1.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 0.85, duration: 0.22, ease: 'power4.in', clearProps: 'transform' }, t); t += 0.3 }
      return t;
    }
    if (m.narrow()) {
      rows.forEach(function (row) { var tl = gsap.timeline({ paused: true }); m.tw(tl); run(tl, row, 0); m.on(row, function () { tl.play() }, 'top 88%') });
      return;
    }
    var tl = gsap.timeline({ paused: true }); m.tw(tl);
    tl.fromTo(paper, { y: 32, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, 0);
    var at = 0.4;
    rows.forEach(function (row) { var end = run(tl, row, at); at = Math.max(at + 0.32, end + 0.05) });
    m.on(paper, function () { tl.play() }, 'top 75%');
  });
});
