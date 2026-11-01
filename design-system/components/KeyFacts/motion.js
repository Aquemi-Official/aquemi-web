/* KeyFacts: the data plate is laid down left to right (rulers and frame unroll), then cell by cell the name settles,
   the figure counts up, the dial's needle sweeps to its reading and the source standard appears under it.
   In the hero it waits for the headline (about 1 s); elsewhere it plays when it scrolls in. */
AQmotion.fx('KeyFacts', function (root, m) {
  root.querySelectorAll('.aq-key-facts').forEach(function (dl) {
    if (dl.closest('[data-aqm-still]')) { m.claim(dl); return }
    if (!m.free(dl) && !dl.closest('.aq-hero')) return; // another component owns it
    m.claim(dl);
    var cells = [].slice.call(dl.children), inHero = !!dl.closest('.aq-hero'), t0 = Date.now();
    var pick = function (s) { return cells.map(function (c) { return c.querySelector(s) }).filter(Boolean) };
    var dts = pick('dt'), vals = pick('.aq-key-facts__value'), units = pick('.aq-key-facts__unit'), dials = pick('.aq-key-facts__dial'), srcs = pick('.aq-key-facts__src');
    gsap.set(dl, { clipPath: 'inset(-8px 100% -8px -8px)' });
    var faded = dts.concat(srcs, units, vals); // guard empty lists: gsap.set([]) logs "GSAP target not found"
    if (faded.length) gsap.set(faded, { autoAlpha: 0 });
    if (dials.length) gsap.set(dials, { rotation: -150, autoAlpha: 0 });
    m.on(dl, function () {
      var d = inHero && Date.now() - t0 < 400 ? (m.narrow() ? 0.2 : 0.95) : 0, step = m.narrow() ? 0.12 : 0.16;
      var tl = m.tw(gsap.timeline({ delay: d, defaults: { ease: 'power3.out' } }));
      tl.to(dl, { clipPath: 'inset(-8px -8px -8px -8px)', duration: 0.9, ease: 'power3.inOut', clearProps: 'clipPath' }, 0);
      cells.forEach(function (c, i) {
        var at = 0.3 + i * step, dt = c.querySelector('dt'), v = c.querySelector('.aq-key-facts__value'), u = c.querySelector('.aq-key-facts__unit'), dial = c.querySelector('.aq-key-facts__dial'), src = c.querySelector('.aq-key-facts__src');
        if (dt) tl.fromTo(dt, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.4, clearProps: 'transform,opacity,visibility' }, at);
        if (v) tl.add(function () {
          gsap.set(v, { clearProps: 'opacity,visibility' });
          // count only a plain figure ("100", "0.25"); never a standard's number ("EN 10204 3.1", "Annex 15")
          var fig = v.querySelector('.aq-key-facts__fig');
          if (fig && /^\d[\d.,]*$/.test(fig.textContent.trim())) m.count(fig, { now: true, duration: 1.2 });
          else m.tw(gsap.from(v, { autoAlpha: 0, y: 6, duration: 0.5, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }));
        }, at + 0.1);
        if (u) tl.to(u, { autoAlpha: 1, duration: 0.4, clearProps: 'opacity,visibility' }, at + 0.5);
        if (dial) tl.to(dial, { rotation: 0, autoAlpha: 1, duration: 1.3, ease: 'elastic.out(1, 0.6)', clearProps: 'transform,opacity,visibility' }, at + 0.15);
        if (src) tl.to(src, { autoAlpha: 1, duration: 0.4, clearProps: 'opacity,visibility' }, at + 0.7);
      });
    }, inHero ? 'top 95%' : 'top 88%');
  });
});
