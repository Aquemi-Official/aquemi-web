/* StrikeGaps: row by row as they scroll in, the gap is set, then struck (the rule darkens through it),
   the requirement's arrow runs out and the fix rises at the end of it. Once per row, about 1.3 s. */
AQmotion.fx('StrikeGaps', function (root, m) {
  root.querySelectorAll('.aq-strike-gaps').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el); var nar = m.narrow();
    [].forEach.call(el.querySelectorAll('.aq-strike-gaps__row'), function (r) {
      var tl = m.tw(gsap.timeline({ paused: true })), g = function (s) { return r.querySelector(s) };
      tl.from([g('.aq-index'), g('.aq-strike-gaps__was')], { y: 14, autoAlpha: 0, duration: 0.45, ease: 'power2.out', clearProps: 'transform,opacity,visibility' }, 0);
      tl.fromTo(g('.aq-strike-gaps__wt'), { textDecorationColor: 'transparent' }, { textDecorationColor: getComputedStyle(r).getPropertyValue('--ink').trim() || 'currentColor', duration: 0.4, ease: 'power1.in', clearProps: 'textDecorationColor' }, 0.35);
      tl.from(g('.aq-strike-gaps__rt'), { autoAlpha: 0, duration: 0.3, clearProps: 'opacity,visibility' }, 0.6);
      tl.from(g('.aq-strike-gaps__shaft'), nar ? { scaleY: 0, duration: 0.35, ease: 'power2.inOut', clearProps: 'transform' } : { scaleX: 0, duration: 0.45, ease: 'power2.inOut', clearProps: 'transform' }, 0.65);
      tl.from(g('.aq-strike-gaps__tip'), { autoAlpha: 0, duration: 0.15, clearProps: 'opacity,visibility' }, 1.0);
      tl.from(g('.aq-strike-gaps__now'), { x: nar ? 0 : -16, y: nar ? 12 : 0, autoAlpha: 0, duration: 0.5, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, 0.95);
      m.on(r, function () { tl.play() }, 'top 85%');
    });
  });
});
