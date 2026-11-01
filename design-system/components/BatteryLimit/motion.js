/* BatteryLimit: the limit is drawn, then each side fills up to it. The battery limit line draws top to bottom and its
   name decodes; the navy half opens out from the seam to the left; the battery-limit card stamps down on the line;
   the side labels decode; then the cards come in from their own side in list order, alternating, and each one's leader
   runs to the seam and its tie-in node seats there. The heading stays with the core. One timeline, once, under 5 s. */
AQmotion.fx('BatteryLimit', function (root, m) {
  root.querySelectorAll('.aq-battery-limit-sec').forEach(function (sec) {
    var el = sec.querySelector('.aq-battery-limit'); if (!el || !m.free(el)) return;
    var qa = function (s, r) { return [].slice.call((r || sec).querySelectorAll(s)) };
    var navy = sec.querySelector('.aq-battery-limit__navy'), line = sec.querySelector('.aq-battery-limit__line'), name = sec.querySelector('.aq-battery-limit__seam-t');
    var limit = el.querySelector('.aq-battery-limit__limit'), sides = qa('.aq-battery-limit__side', el), lists = qa('.aq-battery-limit__list', el);
    [navy, line, name, limit].concat(sides, lists).forEach(function (x) { if (x) m.claim(x) });
    var items = qa('.aq-battery-limit__item', el).filter(function (li) { return !li.classList.contains('aq-fold-x') || !m.narrow() });
    items.sort(function (a, b) { return +a.getAttribute('data-r') - +b.getAttribute('data-r') });
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    if (line && !m.narrow()) tl.fromTo(line, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 1.4, ease: 'power2.inOut', clearProps: 'clipPath' }, 0);
    if (name && !m.narrow()) tl.call(function () { m.scramble(name, 0) }, null, 0.2);
    if (navy && !m.narrow()) tl.from(navy, { scaleX: 0.04, transformOrigin: '100% 50%', duration: 1.1, ease: 'power3.inOut', clearProps: 'transform' }, 0.05);
    if (limit) tl.from(limit, { y: -18, scale: 1.04, autoAlpha: 0, duration: 0.55, ease: 'back.out(1.8)', clearProps: 'transform,opacity,visibility' }, 0.55);
    sides.forEach(function (s, i) { tl.from(s, { autoAlpha: 0, duration: 0.3, clearProps: 'opacity,visibility' }, 0.8 + i * 0.1); tl.call(function () { m.scramble(s, 0) }, null, 0.8 + i * 0.1) });
    items.forEach(function (li, i) {
      var site = !!li.closest('.is-site'), at = 0.95 + i * 0.16, card = li.querySelector('.aq-battery-limit__card');
      tl.from(card, { x: site ? 36 : -36, autoAlpha: 0, duration: 0.6, clearProps: 'transform,opacity,visibility' }, at);
      tl.from(li.querySelector('.aq-battery-limit__lead'), { scaleX: 0, duration: 0.45, ease: 'power2.inOut', clearProps: 'transform' }, at + 0.35);
      tl.from(li.querySelector('.aq-battery-limit__node'), { scale: 0, rotation: 0, duration: 0.35, ease: 'back.out(3)', clearProps: 'transform' }, at + 0.7);
    });
    m.on(sec, function () { tl.play() }, 'top 70%');

    // Ported from Subframe Motion "Border beam" (border-beam), MIT, (c) 2026 Subframe
    // Pointing at or focusing a connection point sends a small light round its card's edge (offset-path rect() along a
    // border mask, the library's mechanism) while its leader and tie-in node light: the visitor sees which side of the
    // battery limit the item sits on and where it ties in. Runs only while the visitor stays (visitor-driven).
    qa('.aq-battery-limit__item, .aq-battery-limit__limit', el).forEach(function (li) {
      var card = li.querySelector('.aq-battery-limit__card'); if (!card) return;
      var beam = document.createElement('span'); beam.className = 'aq-battery-limit__beam'; beam.setAttribute('aria-hidden', 'true');
      beam.innerHTML = '<span class="aq-battery-limit__light"></span>'; card.appendChild(beam);
      var light = beam.firstChild, loop = null, site = !!li.closest('.is-site');
      function on() {
        if (loop) return;
        gsap.set(beam, { display: 'block' }); m.tw(gsap.to(beam, { autoAlpha: 1, duration: 0.2, overwrite: true }));
        // start where the leader leaves the card (right edge for the package, left for the site) and run clockwise
        loop = m.tw(gsap.fromTo(light, { offsetDistance: site ? '75%' : '25%' }, { offsetDistance: site ? '175%' : '125%', duration: 2.6, ease: 'none', repeat: -1 }));
      }
      function off() { if (loop) { loop.kill(); loop = null } m.tw(gsap.to(beam, { autoAlpha: 0, duration: 0.13, overwrite: true, onComplete: function () { if (!loop) gsap.set(beam, { display: 'none' }) } })) }
      li.addEventListener('pointerenter', on); li.addEventListener('pointerleave', off);
      li.addEventListener('focusin', on); li.addEventListener('focusout', function (ev) { if (!li.contains(ev.relatedTarget)) off() });
    });
  });
});
