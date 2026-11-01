/* CheckLedger: the ledger is ruled, then the water runs the seam. The column heads decode; each row's left side slides
   in from the left and its right side from the right, meeting at the seam; the route button presses in on its node.
   Then a flow runs down the seam row by row, each node filling limestone as the water passes and settling back.
   Once, under 4 s; folded rows appear whole when opened. Hover: the row's node fills, the button arrow moves. */
AQmotion.fx('CheckLedger', function (root, m) {
  root.querySelectorAll('.aq-check-ledger').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var q = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var rows = q('.aq-check-ledger__row').filter(function (r) { return r.offsetParent !== null });
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })), wide = !m.narrow();
    var hd = el.querySelector('.aq-check-ledger__head');
    if (hd && wide) tl.from(hd.children, { autoAlpha: 0, y: -8, duration: 0.4, stagger: 0.08, clearProps: 'transform,opacity,visibility' }, 0);
    rows.forEach(function (r, i) {
      var at = 0.15 + i * 0.12;
      tl.from(r.querySelector('.aq-check-ledger__l'), { x: wide ? -40 : 0, y: wide ? 0 : 16, autoAlpha: 0, duration: 0.7, clearProps: 'transform,opacity,visibility' }, at)
        .from(r.querySelector('.aq-check-ledger__r'), { x: wide ? 40 : 0, y: wide ? 0 : 16, autoAlpha: 0, duration: 0.7, clearProps: 'transform,opacity,visibility' }, at + 0.06)
        .from(r.querySelector('.aq-check-ledger__go'), { scale: 0.86, autoAlpha: 0, duration: 0.5, ease: 'back.out(1.6)', clearProps: 'transform,opacity,visibility' }, at + 0.2)
        .from(r.querySelector('.aq-check-ledger__time'), { autoAlpha: 0, duration: 0.4, clearProps: 'opacity,visibility' }, at + 0.35);
    });
    var t0 = 0.4 + rows.length * 0.12, step = Math.min(0.42, 2.4 / Math.max(1, rows.length));
    rows.forEach(function (r, i) {
      var f = r.querySelector('.aq-check-ledger__flow'), n = r.querySelector('.aq-check-ledger__node'), at = t0 + i * step;
      if (f) tl.fromTo(f, { scaleY: 0, transformOrigin: '50% 0%' }, { scaleY: 1, duration: step, ease: 'none' }, at)
        .to(f, { autoAlpha: 0, duration: 0.5, clearProps: 'transform,opacity,visibility' }, at + step + 0.2);
      if (n) tl.call(function (n) { n.classList.add('is-wet') }, [n], at + step * 0.3).call(function (n) { n.classList.remove('is-wet') }, [n], at + step + 0.4);
    });
    m.on(el, function () { tl.play() }, 'top 78%');
  });
});
