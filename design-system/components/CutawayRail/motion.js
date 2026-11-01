/* CutawayRail: the cutaway is drawn, then the rail takes over. On scroll-in the sheet and parts draw on back to front
   and the water runs the loop and the cut pipe once (IsoKit choreography), the "active" tag wipes in; then the active
   card's parts light and stay with the reader (renderer: the card crossing the middle of the viewport, or under the
   pointer or focus). The rail line grows down from the top as its section enters; each card slides in from the right
   as it reaches the viewport, its node filling first. Drawing under 4 s; each card under 1 s. */
AQmotion.fx('CutawayRail', function (root, m) {
  root.querySelectorAll('.aq-cutaway-rail').forEach(function (el) {
    var fig = el.querySelector('.aq-cutaway-rail__fig'), rail = el.querySelector('.aq-cutaway-rail__rail');
    if (!fig || !m.free(fig)) return;
    m.claim(fig); if (rail) m.claim(rail);
    var svg = fig.querySelector('svg.aq-iso'), tag = fig.querySelector('.aq-cutaway-rail__tag'), call = fig.querySelector('.aq-cutaway-rail__call');
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' }, onComplete: function () { if (window.AQcutaway) AQcutaway.scan() } }));
    var it = svg && window.AQiso && AQiso.timeline(svg, m, { draw: 1.3, pipe: 0.7, flow: 1.3, keep: false });
    if (it) { it.paused(false); tl.add(it, 0) }
    if (tag) tl.from(tag, { clipPath: 'inset(0 100% 0 0)', duration: 0.5, ease: 'power2.inOut', clearProps: 'clipPath' }, 0.3);
    if (call) tl.from(call, { autoAlpha: 0, duration: 0.4, clearProps: 'opacity,visibility' }, it ? it.duration() : 1);
    m.on(fig, function () { tl.play() }, 'top 75%');
    [].forEach.call(el.querySelectorAll('.aq-cutaway-rail__card'), function (c) {
      var node = c.querySelector('.aq-cutaway-rail__node'), ct = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
      if (node) ct.from(node, { scale: 0, duration: 0.35, ease: 'back.out(2.5)', clearProps: 'transform' }, 0);
      ct.from(c, { x: 48, autoAlpha: 0, duration: 0.7, clearProps: 'opacity,visibility,x' }, 0.05)
        .from(c.querySelectorAll('.aq-cutaway-rail__f'), { y: 10, autoAlpha: 0, duration: 0.45, stagger: 0.07, clearProps: 'transform,opacity,visibility' }, 0.3);
      m.on(c, function () { ct.play() }, 'top 90%');
    });
  });
});
