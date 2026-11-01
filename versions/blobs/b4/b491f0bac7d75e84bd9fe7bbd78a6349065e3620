/* LimitBento: the bento assembles, then the water proves the stricter value. Tiles slide in from the side they sit on
   (left column from the left, right column from the right) behind a wipe, and each limit counts up to its value; in the
   middle the water column fills from the floor to the limit, its surface swells twice and settles, the scale ticks
   light under it, the limit's mark rides up with the surface and the looser value's dashed mark drops in last, high
   above. One timeline, once, under 4 s. The section heading is left to the core. */
AQmotion.fx('LimitBento', function (root, m) {
  root.querySelectorAll('.aq-limit-bento').forEach(function (el) {
    var tiles = [].slice.call(el.querySelectorAll('.aq-limit-bento__tile')), col = el.querySelector('.aq-limit-bento__col'),
      list = el.querySelector('.aq-limit-bento__tiles'), chip = el.querySelector('.aq-limit-bento__chip');
    if (!list || !m.free(list)) return;
    m.claim(list); if (col) m.claim(col); if (chip) m.claim(chip);
    var narrow = m.narrow(), tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    if (chip) tl.from(chip, { clipPath: 'inset(0 100% 0 0)', duration: 0.5, ease: 'power2.inOut', clearProps: 'clipPath' }, 0.2);
    if (col) {
      var water = col.querySelector('.aq-limit-bento__water'), line = col.querySelector('.aq-limit-bento__wline'), body = col.querySelector('.aq-limit-bento__wbody'),
        ticks = col.querySelectorAll('.aq-limit-bento__scale li'), lim = col.querySelector('.aq-limit-bento__mark--lim'), alt = col.querySelector('.aq-limit-bento__mark--alt'),
        tank = col.querySelector('.aq-limit-bento__tank'), h = water ? water.getBoundingClientRect().height : 0;
      tl.from(col, { clipPath: 'inset(100% 0 0 0)', duration: 0.8, ease: 'power3.inOut', clearProps: 'clipPath' }, 0)
        .from(col.querySelector('.aq-limit-bento__cap'), { autoAlpha: 0, y: 10, duration: 0.5, clearProps: 'transform,opacity,visibility' }, 0.5)
        .from(ticks, { autoAlpha: 0, x: -6, duration: 0.3, stagger: { each: 0.03, from: 'end' }, clearProps: 'transform,opacity,visibility' }, 0.5);
      if (water) tl.from(water, { yPercent: 100, duration: 1.5, ease: 'aq-settle', clearProps: 'transform' }, 0.8);
      if (tank) tl.set(tank, { clipPath: 'inset(-50% -50% 0 -50%)' }, 0).set(tank, { clearProps: 'clipPath' }, 2.4);
      if (lim) tl.from(lim, { y: h, autoAlpha: 0, duration: 1.5, ease: 'aq-settle', clearProps: 'transform,opacity,visibility' }, 0.8);
      /* the surface swells twice and settles (two shapes of the same curve) */
      [line, body].forEach(function (p) {
        if (!p) return; var d0 = p.getAttribute('d'), d1 = d0.replace('C 50 2, 100 2, 150 12 S 250 22, 300 12 S 380 4, 400 10', 'C 50 18, 100 20, 150 10 S 250 2, 300 8 S 380 18, 400 12');
        if (d1 !== d0) tl.to(p, { attr: { d: d1 }, duration: 0.55, ease: 'sine.inOut', yoyo: true, repeat: 3 }, 1.0);
      });
      if (alt) tl.from(alt, { autoAlpha: 0, y: -16, duration: 0.6, clearProps: 'transform,opacity,visibility' }, 2.2);
    }
    tiles.forEach(function (t, i) {
      var right = t.style.gridColumn === '3' || getComputedStyle(t).gridColumnStart === '3', at = 0.15 + i * 0.14;
      tl.from(t, { x: narrow ? 0 : (right ? 40 : -40), y: narrow ? 24 : 0, autoAlpha: 0, duration: 0.8, clearProps: 'transform,opacity,visibility' }, at)
        .from(t.querySelectorAll('.aq-limit-bento__m, .aq-limit-bento__q, .aq-limit-bento__ic, .aq-limit-bento__lvl'), { autoAlpha: 0, duration: 0.5, stagger: 0.05, clearProps: 'opacity,visibility' }, at + 0.5);
      var n = t.querySelector('.aq-limit-bento__n.aq-num');
      if (n) tl.call(function () { m.count(n, { now: true, duration: 1.3 }) }, null, at + 0.2);
      var c = t.querySelector('.aq-limit-bento__c'); if (c) tl.from(c, { yPercent: 60, autoAlpha: 0, duration: 0.5, clearProps: 'transform,opacity,visibility' }, at + 0.25);
    });
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
