/* DocHotspots: the skid develops like a print (wipe up from the base), then each document is pinned in turn: its
   hotspot drops onto the part and sends out one ripple, the leader draws out from the hotspot to the edge of the
   stage, and the card slides out from behind the drawing along it, its code decoding; the index link follows last.
   Narrow screens (no leaders): hotspots pop in order and the cards rise in a short stagger.
   One timeline, once, under 5 s. */
AQmotion.fx('DocHotspots', function (root, m) {
  root.querySelectorAll('.aq-doc-hotspots').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) }, D = window.DrawSVGPlugin;
    var art = el.querySelector('.aq-doc-hotspots__art'), cards = qa('.aq-doc-hotspots__card'), wide = getComputedStyle(el.querySelector('.aq-doc-hotspots__leads') || el).display !== 'none' && !!el.querySelector('.aq-doc-hotspots__leads');
    var sec = el.closest('.aq-section'), more = sec && sec.querySelector('.aq-doc-hotspots__more');
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    if (art) tl.fromTo(art, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power3.inOut', clearProps: 'clipPath' }, 0);
    cards.forEach(function (c, i) {
      var k = c.getAttribute('data-k'), hot = el.querySelector('.aq-doc-hotspots__hot[data-k="' + k + '"]'), at = 0.9 + i * 0.42;
      var path = el.querySelector('path[data-k="' + k + '"]'), dot = el.querySelector('circle[data-k="' + k + '"]'), code = c.querySelector('.aq-doc-hotspots__code span:last-child');
      var left = c.classList.contains('aq-doc-hotspots__card--l');
      if (hot) {
        tl.from(hot, { scale: 0, autoAlpha: 0, duration: 0.45, ease: 'back.out(3)', clearProps: 'transform,opacity,visibility' }, at)
          .fromTo(hot, { boxShadow: '0 0 0 0 rgba(255,255,255,0.55)' }, { boxShadow: '0 0 0 22px rgba(255,255,255,0)', duration: 0.8, ease: 'power2.out', clearProps: 'boxShadow' }, at + 0.15);
      }
      if (wide && path) {
        if (D) tl.fromTo(path, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.5, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, at + 0.2);
        else tl.from(path, { autoAlpha: 0, duration: 0.4, clearProps: 'opacity,visibility' }, at + 0.2);
        if (dot) tl.from(dot, { autoAlpha: 0, duration: 0.15, clearProps: 'opacity,visibility' }, at + 0.65);
        tl.fromTo(c, { x: left ? 60 : -60, autoAlpha: 0, clipPath: left ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)' },
          { x: 0, autoAlpha: 1, clipPath: 'inset(0 0% 0 0%)', duration: 0.7, ease: 'power3.out', clearProps: 'transform,opacity,visibility,clipPath' }, at + 0.6);
      } else tl.from(c, { y: 24, autoAlpha: 0, duration: 0.6, clearProps: 'transform,opacity,visibility' }, 0.9 + i * 0.12);
      if (code) tl.call(function () { m.scramble(code, 0) }, null, wide ? at + 0.65 : 0.9 + i * 0.12);
    });
    if (more) { m.claim(more); tl.from(more, { autoAlpha: 0, y: 10, duration: 0.5, clearProps: 'transform,opacity,visibility' }, '-=0.3') }
    m.on(el, function () { tl.play() }, 'top 70%');
  });
});
