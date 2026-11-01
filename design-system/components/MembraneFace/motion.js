/* MembraneFace: the element is wound, then the targets take their places round it. The vessel wall and the permeate
   tube draw, the membrane leaves wind out from the tube while the face turns a few degrees, the spokes settle; the rim
   marks strike one by one and, as each does, its target tile rises into its cell with the target value lifting out of
   its line. One timeline, once, under 4 s. The section heading is left to the core. */
AQmotion.fx('MembraneFace', function (root, m) {
  root.querySelectorAll('.aq-membrane-face').forEach(function (el) {
    var core = el.querySelector('.aq-membrane-face__core'), tiles = [].slice.call(el.querySelectorAll('.aq-membrane-face__tile'));
    if (!core || !m.free(core)) return; m.claim(core); tiles.forEach(m.claim);
    var q = function (s) { return [].slice.call(core.querySelectorAll(s)) }, short = m.narrow() ? 0.7 : 1;
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    var svg = core.querySelector('svg'), leaves = q('.aq-membrane-face__leaf'), rings = q('.aq-membrane-face__ring, .aq-membrane-face__tube');
    tl.from(core, { clipPath: 'inset(0 0 100% 0)', duration: 0.7 * short, ease: 'power3.inOut', clearProps: 'clipPath' }, 0);
    if (window.DrawSVGPlugin) {
      tl.fromTo(rings, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.9 * short, stagger: 0.06, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, 0.3)
        .fromTo(leaves, { drawSVG: '0%' }, { drawSVG: '100%', duration: 1.3 * short, stagger: 0.05, ease: 'power2.out', clearProps: 'strokeDasharray,strokeDashoffset' }, 0.5);
    }
    if (svg) tl.from(svg, { rotation: -24, transformOrigin: '50% 50%', duration: 1.6 * short, ease: 'power2.out', clearProps: 'transform' }, 0.4);
    tl.from(q('.aq-membrane-face__spoke, .aq-membrane-face__hole'), { autoAlpha: 0, duration: 0.6, clearProps: 'opacity,visibility' }, 1.1 * short)
      .from(q('.aq-membrane-face__label, .aq-membrane-face__note'), { autoAlpha: 0, y: 8, duration: 0.5, stagger: 0.1, clearProps: 'transform,opacity,visibility' }, 0.6);
    var marks = q('.aq-membrane-face__mark'), t0 = 1.3 * short;
    tiles.forEach(function (t, i) {
      var at = t0 + i * 0.22 * short, mk = marks[i], v = t.querySelectorAll('.aq-membrane-face__v > span');
      if (mk) tl.from(mk, { autoAlpha: 0, scale: 0.4, transformOrigin: '50% 50%', duration: 0.35, clearProps: 'transform,opacity,visibility' }, at - 0.1);
      tl.from(t, { y: 24, autoAlpha: 0, duration: 0.6, clearProps: 'transform,opacity,visibility' }, at);
      if (v.length) tl.from(v, { yPercent: 60, autoAlpha: 0, duration: 0.5, stagger: 0.06, clearProps: 'transform,opacity,visibility' }, at + 0.15);
      var ix = t.querySelector('.aq-index'); if (ix) tl.call(function () { m.scramble(ix, 0) }, null, at);
    });
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
