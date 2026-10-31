/* Router: situations, then the route they lead to. On scroll-in the situations slide in down the list; the chosen
   one's node pops and its pipe runs into the route frame, the frame opens from the pipe side, and the stations come
   on one after another, each pipe growing to the next before it lands (cause before effect); the filled end station
   settles last. When the visitor picks another situation the same chain replays, quicker, for the route it opens.
   Pipes and the node are pseudo-elements driven through --aq-pipe / --aq-node (Router/style.css). */
AQmotion.fx('Router', function (root, m) {
  var CLEAR = 'transform,opacity,visibility';
  function chain(tl, route, opt, at, q) {
    var lis = [].slice.call(route.querySelectorAll('.aq-router__stations > li')), phone = m.narrow();
    if (opt) {
      tl.fromTo(opt, { '--aq-node': 0 }, { '--aq-node': 1, duration: 0.3 * q, ease: 'back.out(3)' }, at);
      tl.fromTo(opt, { '--aq-pipe': 0 }, { '--aq-pipe': 1, duration: 0.3 * q, ease: 'power1.in' }, at + 0.15 * q);
      at += 0.4 * q;
    }
    tl.fromTo(route, { clipPath: phone ? 'inset(0 0 100% 0)' : 'inset(0 100% 0 0)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.45 * q, ease: 'power3.inOut', clearProps: 'clipPath' }, at);
    at += 0.3 * q;
    lis.forEach(function (li, i) {
      var go = li.classList.contains('is-go');
      tl.fromTo(li, { autoAlpha: 0, x: phone ? 0 : -10, y: phone ? -8 : 0 }, { autoAlpha: 1, x: 0, y: 0, duration: 0.35 * q, ease: 'power3.out', clearProps: CLEAR }, at);
      var gv = go && li.querySelector('.aq-router__v');
      if (gv) tl.fromTo(gv, { scale: 0.94, transformOrigin: '50% 0%' }, { scale: 1, duration: 0.5 * q, ease: 'back.out(3)', clearProps: 'transform' }, at + 0.1 * q);
      if (i < lis.length - 1) { tl.fromTo(li, { '--aq-pipe': 0 }, { '--aq-pipe': 1, duration: 0.25 * q, ease: 'none' }, at + 0.25 * q); at += 0.45 * q }
    });
    return at;
  }
  root.querySelectorAll('.aq-router').forEach(function (w) {
    var opts = [].slice.call(w.querySelectorAll('.aq-router__opt')); if (!opts.length) return;
    m.claim(w);
    var open = opts.filter(function (o) { return o.getAttribute('aria-expanded') === 'true' })[0], route = open && document.getElementById(open.getAttribute('aria-controls'));
    gsap.set(opts, { autoAlpha: 0, x: -16 });
    if (open) gsap.set(open, { '--aq-pipe': 0, '--aq-node': 0 });
    if (route) { gsap.set(route, { clipPath: 'inset(0 100% 0 0)' }); var sl = route.querySelectorAll('.aq-router__stations > li'); if (sl.length) gsap.set(sl, { autoAlpha: 0, '--aq-pipe': 0 }) }
    m.on(w, function () {
      var tl = m.tw(gsap.timeline({ delay: 0.3 }));
      tl.to(opts, { autoAlpha: 1, x: 0, duration: 0.45, ease: 'power3.out', stagger: Math.min(0.07, 0.5 / opts.length), clearProps: CLEAR }, 0);
      if (route) chain(tl, route, open, 0.35, 1);
    }, 'top 80%');
    // The visitor picks a situation: router.js opens its route on the document's click; replay the chain once it has
    w.addEventListener('click', function (ev) {
      var o = ev.target.closest && ev.target.closest('.aq-router__opt'); if (!o) return;
      requestAnimationFrame(function () {
        var r = document.getElementById(o.getAttribute('aria-controls')); if (!r || r.hidden) return;
        chain(m.tw(gsap.timeline()), r, o, 0, 0.6);
      });
    });
  });
});
