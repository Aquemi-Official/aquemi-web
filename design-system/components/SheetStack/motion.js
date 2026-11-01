/* SheetStack: the document set arrives as one pile in the middle of the axis, then explodes apart, each sheet rising
   or sinking to its row (top sheet first) and settling; the axis draws out from the middle; the drawings on the sheets
   draw on (the calculation's bars run out past the limit line); each row slides in beside its sheet, its code
   decoding. One timeline, once, under 5 s. */
AQmotion.fx('SheetStack', function (root, m) {
  root.querySelectorAll('.aq-sheet-stack').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var rows = qa('.aq-sheet-stack__row').filter(function (r) { return r.offsetParent !== null }), n = rows.length;
    if (!n) return;
    var FR = function (t, set, v, at) { if (set && set.length !== 0) t.from(set, v, at); return t };
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })), D = !!window.DrawSVGPlugin;
    var axis = el.querySelector('.aq-sheet-stack__axis'), mid = (n - 1) / 2, h = rows[0].offsetHeight;
    if (axis) tl.from(axis, { scaleY: 0, transformOrigin: '50% 50%', duration: 0.9, ease: 'power2.inOut', clearProps: 'transform' }, 0.3);
    rows.forEach(function (r, i) {
      var slot = r.querySelector('.aq-sheet-stack__slot'), text = r.querySelector('.aq-sheet-stack__text'), code = null;
      tl.from(slot, { y: (mid - i) * h * 0.9, duration: 1.0, ease: 'power3.inOut', clearProps: 'transform' }, 0.35 + Math.abs(i - mid) * 0.05);
      if (i === 0) FR(tl, qa('.aq-sheet-stack__slot', el), { autoAlpha: 0, duration: 0.35, clearProps: 'opacity,visibility' }, 0);
      var art = qa('.aq-sheet-stack__ln, .aq-sheet-stack__th, .aq-sheet-stack__seal, .aq-sheet-stack__lim', slot).filter(function (p) { return !/lim/.test(p.getAttribute('class')) });
      if (D) tl.from(art, { drawSVG: '0%', duration: 0.7, stagger: 0.02, ease: 'power2.inOut' }, 1.2 + i * 0.15);
      FR(tl, qa('.aq-sheet-stack__bar', slot), { scaleX: 0, transformOrigin: '0% 50%', duration: 0.5, stagger: 0.06, clearProps: 'transform' }, 1.4 + i * 0.15);
      tl.from(text, { x: 32, autoAlpha: 0, duration: 0.6, clearProps: 'transform,opacity,visibility' }, 1.1 + i * 0.15);
      var k = r.querySelector('.aq-sheet-stack__k');
      if (k && window.ScrambleTextPlugin) tl.to(k, { scrambleText: { text: k.textContent, chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ&' }, duration: 0.6 }, 1.2 + i * 0.15);
    });
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
