/* OptionChecker: the field opens like shutters, then the blueprint draws and the options follow.
   Ported from Subframe Motion "Staggered shutter reveal" (shutter-scene), MIT, (c) 2026 Subframe: every square opens
   top-down in 820 ms on the example's cubic-bezier(0.16, 1, 0.3, 1), 45 ms apart (here along the diagonals, so the
   checkerboard opens as a wave from the top-left corner). Then the blueprint tile's control system draws on (panel,
   PLC, screen, historian, DMZ, bus), each option cell rises and its slash numeral rolls up on the odometer. The
   section head stays with the core's word reveal. One timeline, once, < 3.5 s. */
AQmotion.fx('OptionChecker', function (root, m) {
  root.querySelectorAll('.aq-option-checker').forEach(function (el) {
    var field = el.querySelector('.aq-option-checker__field'), list = el.querySelector('.aq-option-checker__cells');
    if (!field || !list || !m.free(field) || !m.free(list)) return; m.claim(field); m.claim(list);
    var qa = function (s) { return [].slice.call(el.querySelectorAll(s)) };
    if (window.CustomEase && !CustomEase.get('aq-shutter')) CustomEase.create('aq-shutter', 'M0,0 C0.16,1 0.3,1 1,1');
    var tiles = qa('.aq-option-checker__tile'), cells = qa('.aq-option-checker__cell'), bp = qa('.aq-option-checker__bp path, .aq-option-checker__bp rect, .aq-option-checker__bp ellipse');
    var diag = function (t) { var s = t.style; return (parseInt(s.gridRowStart || s.gridRow, 10) || 1) + (parseInt(s.gridColumnStart || s.gridColumn, 10) || 1) };
    var tl = m.tw(gsap.timeline({ paused: true }));
    tiles.forEach(function (t) {
      tl.fromTo(t, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.82, ease: window.CustomEase ? 'aq-shutter' : 'expo.out', clearProps: 'clipPath' }, (diag(t) - 2) * 0.045 * 2);
    });
    if (window.DrawSVGPlugin) tl.fromTo(bp, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.6, stagger: 0.05, ease: 'power2.out', clearProps: 'strokeDasharray,strokeDashoffset' }, 0.6);
    tl.from(qa('.aq-option-checker__bp circle'), { autoAlpha: 0, duration: 0.3, clearProps: 'opacity,visibility' }, 1.5);
    cells.forEach(function (c, i) {
      tl.from(c, { y: 16, autoAlpha: 0, duration: 0.6, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, 0.35 + i * 0.09);
      var n = c.querySelector('.aq-option-checker__num');
      if (n) tl.call(function () { m.count(n, { now: true, duration: 0.9 }) }, null, 0.4 + i * 0.09);
    });
    m.on(el, function () { tl.play() }, 'top 78%');
  });
});
