/* DerivationSheet: the derivation is written out line by line, as on the pad. The margin rule draws down; on each line
   the number is set, the step writes in from the left, the arrow draws, the limit appears (a hero figure counts up to
   its value), the double arrow draws and the answer is boxed: the frame traces round it, then the underline. One
   timeline, once on scroll-in, under 5 s; nothing under reduced motion, and the sheet is complete without script. */
AQmotion.fx('DerivationSheet', function (root, m) {
  root.querySelectorAll('.aq-derivation-sheet').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })), draw = !!window.DrawSVGPlugin;
    tl.from(el.querySelector('.aq-derivation-sheet__margin'), { scaleY: 0, duration: 1.2, ease: 'power2.inOut', clearProps: 'transform' }, 0);
    var lines = el.querySelectorAll('.aq-derivation-sheet__line');
    lines.forEach(function (ln, i) {
      var at = 0.2 + i * 0.85, ops = ln.querySelectorAll('.aq-derivation-sheet__op path'), num = ln.querySelector('.aq-derivation-sheet__num');
      tl.from(ln.querySelector('.aq-derivation-sheet__no'), { autoAlpha: 0, x: -6, duration: 0.3, clearProps: 'transform,opacity,visibility' }, at);
      tl.fromTo(ln.querySelector('.aq-derivation-sheet__given'), { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.6, ease: 'power2.inOut', clearProps: 'clipPath' }, at + 0.05);
      if (draw && ops[0]) tl.fromTo(ln.querySelectorAll('.aq-derivation-sheet__op:not(.is-imp) path'), { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.35, ease: 'power1.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, at + 0.45);
      tl.from(ln.querySelector('.aq-derivation-sheet__lim'), { autoAlpha: 0, y: 8, duration: 0.45, clearProps: 'transform,opacity,visibility' }, at + 0.6);
      if (num) {
        var end = parseFloat(num.textContent), dec = (num.textContent.split('.')[1] || '').length, o = { v: 0 }, txt = num.textContent;
        if (!isNaN(end)) { num.setAttribute('aria-label', txt); tl.to(o, { v: end, duration: 0.9, ease: 'power2.out', onUpdate: function () { num.textContent = o.v.toFixed(dec) }, onComplete: function () { num.textContent = txt } }, at + 0.6) }
      }
      if (draw) tl.fromTo(ln.querySelectorAll('.aq-derivation-sheet__op.is-imp path'), { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.35, ease: 'power1.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, at + 0.9);
      tl.from(ln.querySelector('.aq-derivation-sheet__w'), { autoAlpha: 0, x: -8, duration: 0.4, clearProps: 'transform,opacity,visibility' }, at + 1.0);
      tl.fromTo(ln.querySelector('.aq-derivation-sheet__box'), { clipPath: 'polygon(0 0, 0 0, 0 0, 0 0)' }, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 0.5, ease: 'power2.inOut', clearProps: 'clipPath' }, at + 1.1);
    });
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
