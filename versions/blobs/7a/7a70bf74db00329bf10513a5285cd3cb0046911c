/* ManifoldRouter: the manifold is laid down the left, each branch teeing off as its situation rises beside it; then
   the water enters at the top, runs down to the open situation and along its branch, and the route sheet unrolls from
   the branch with its stations stepping in. Picking another situation replays the route's stations (the water's move
   is a CSS transition, so it also follows without motion). Once on entry, under 3 s. */
AQmotion.fx('ManifoldRouter', function (root, m) {
  root.querySelectorAll('.aq-manifold-router').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var opts = qa('.aq-manifold-router__opt'), n = opts.length; if (!n) return;
    var segs = qa('.aq-manifold-router__seg', el), branches = qa('.aq-manifold-router__branch', el);
    var words = opts.map(function (o) { return qa('.aq-manifold-router__n, .aq-manifold-router__t', o) });
    var open = function () { return el.querySelector('.aq-manifold-router__route:not([hidden])') };
    var wet = qa('.aq-manifold-router__opt.is-wet .aq-manifold-router__seg .aq-manifold-router__water, .aq-manifold-router__opt[aria-expanded="true"] .aq-manifold-router__branch .aq-manifold-router__water');
    function stations(r, tl, at) {
      if (!r) return;
      var st = qa('.aq-manifold-router__sit, .aq-manifold-router__st', r);
      tl.from(st, { y: 14, autoAlpha: 0, duration: 0.5, stagger: 0.12, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, at);
    }
    var tl = m.tw(gsap.timeline({ paused: true }));
    gsap.set(wet, { transition: 'none' });
    segs.forEach(function (s, i) {
      var at = 0.05 + i * 0.09;
      tl.fromTo(s, { scaleY: 0, transformOrigin: '50% 0' }, { scaleY: 1, duration: 0.3, ease: 'none', clearProps: 'transform' }, at)
        .fromTo(branches[i], { scaleX: 0, transformOrigin: '0 50%' }, { scaleX: 1, duration: 0.35, ease: 'power2.out', clearProps: 'transform' }, at + 0.18)
        .from(words[i], { x: -16, autoAlpha: 0, duration: 0.55, stagger: 0.05, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, at + 0.2);
    });
    var tw = 0.25 + n * 0.09;
    wet.forEach(function (w, i) {
      var isBranch = !!w.closest('.aq-manifold-router__branch');
      tl.fromTo(w, isBranch ? { scaleX: 0 } : { scaleY: 0 }, isBranch ? { scaleX: 1, duration: 0.35, ease: 'none' } : { scaleY: 1, duration: 0.18, ease: 'none' }, isBranch ? tw + 0.2 : tw + i * 0.18);
    });
    tl.call(function () { wet.forEach(function (w) { w.style.removeProperty('transform'); w.style.removeProperty('transition') }) }, null, tw + 0.2 + wet.length * 0.18 + 0.4);
    var r0 = open(), te = tw + 0.4;
    if (r0 && !m.narrow()) tl.fromTo(r0, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.7, ease: 'power3.inOut', clearProps: 'clipPath' }, te);
    stations(r0, tl, te + 0.3);
    m.on(el, function () { tl.play() }, 'top 70%');
    // a new pick: its route's stations step in
    el.addEventListener('click', function (ev) {
      var o = ev.target.closest('.aq-manifold-router__opt'); if (!o || !tl.progress || tl.progress() < 1) return;
      requestAnimationFrame(function () { var t2 = m.tw(gsap.timeline()); stations(open(), t2, 0) });
    });
  });
});
