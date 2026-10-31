/* Explainer: the figure makes the argument before the text does.
   Levels: the dashed limit rule runs across first, then each tube fills to its value in turn (the one that fails
   overshoots a hair and settles on the limit), its number pin strikes and its value prints; the margin dimension
   (or "No margin") appears last. Art: the drawing prints in and the numbered pins strike in order. The numbered
   points then follow, each as its pin lands. One timeline, under 4 s. */
AQmotion.fx('Explainer', function (root, m) {
  root.querySelectorAll('.aq-explainer').forEach(function (x) {
    var fig = x.querySelector('.aq-explainer__fig'), pts = [].slice.call(x.querySelectorAll('.aq-explainer__points > li'));
    m.claim(x.querySelector('.aq-explainer__points') || x);
    if (pts.length) gsap.set(pts, { autoAlpha: 0, y: 18 });
    var tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }), t = 0.5;
    if (fig) {
      m.claim(fig);
      if (fig.classList.contains('aq-levels')) {
        var lim = fig.querySelector('.aq-levels__limit'), cols = [].slice.call(fig.querySelectorAll('.aq-levels__col'));
        if (lim) { gsap.set(lim, { clipPath: 'inset(-48px 100% -4px 0)' }); tl.to(lim, { clipPath: 'inset(-48px 0% -4px 0)', duration: 0.7, ease: 'power2.inOut' }, t); t += 0.6 }
        cols.forEach(function (c, i) {
          var f = c.querySelector('.aq-levels__fill'), top = c.querySelector('.aq-levels__top'), gap = c.querySelector('.aq-levels__gap'), bad = f && !f.classList.contains('is-below');
          var s = t + i * 0.55;
          if (f) { gsap.set(f, { scaleY: 0, transformOrigin: '50% 100%' }); tl.to(f, { scaleY: 1, duration: 1, ease: bad ? 'back.out(1.6)' : 'power2.out' }, s) }
          if (top) { gsap.set(top.children, { autoAlpha: 0, scale: 0.6 }); tl.to(top.children, { autoAlpha: 1, scale: 1, duration: 0.35, ease: 'back.out(2.5)', stagger: 0.1 }, s + 0.8) }
          if (gap) { gsap.set(gap, { autoAlpha: 0, clipPath: 'inset(100% -8px 0 -8px)' }); tl.to(gap, { autoAlpha: 1, clipPath: 'inset(0% -8px 0 -8px)', duration: 0.45, ease: 'power2.out' }, s + 1.05) }
        });
        t += cols.length * 0.55 + 0.4;
        var keys = fig.querySelectorAll('.aq-levels__key');
        if (keys.length) { gsap.set(keys, { autoAlpha: 0, y: 10 }); tl.to(keys, { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.1 }, t - 0.3) }
      } else {
        var art = fig.querySelector('.aq-illustration'), pins = fig.querySelectorAll('.aq-explainer__pin');
        if (art) { gsap.set(art, { clipPath: 'inset(100% 0 0 0)' }); tl.to(art, { clipPath: 'inset(0% 0 0 0)', duration: 1.1, ease: 'power3.inOut' }, t - 0.2) }
        if (pins.length) { gsap.set(pins, { autoAlpha: 0, scale: 0 }); tl.to(pins, { autoAlpha: 1, scale: 1, duration: 0.4, ease: 'back.out(2.5)', stagger: 0.25 }, t + 0.8) }
        t += 0.8;
      }
    } else t = 0.2;
    /* points: one after another; with a levels figure they start as the first tube settles */
    if (pts.length) tl.to(pts, { autoAlpha: 1, y: 0, duration: 0.6, stagger: fig ? 0.25 : 0.12 }, fig && fig.classList.contains('aq-levels') ? 1.2 : t);
    tl.add(function () {
      gsap.set([].slice.call(x.querySelectorAll('.aq-explainer__fig, .aq-explainer__fig *')).concat(pts), { clearProps: 'opacity,visibility,transform,clipPath,transformOrigin' });
    });
    m.on(x, function () { m.tw(tl.play()) }, 'top 72%');
    m.tw(tl);
  });
});
