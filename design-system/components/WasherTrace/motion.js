/* WasherTrace: on scroll-in the frame is drawn, the drawing prints up and the route's pipe lays from hotspot to
   hotspot. Then, on desktop, the story follows the reader: as each point passes the middle of the screen its hotspot
   lights (a small overshoot) and the water runs along the route up to it; scrolling back steps it back. The route
   length per point is measured, so the water stops exactly at each hotspot. On phones and under reduced motion
   everything shows at once. Each step tween is under 1 s; nothing loops. */
AQmotion.fx('WasherTrace', function (root, m) {
  root.querySelectorAll('.aq-washer-trace').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var fig = el.querySelector('.aq-washer-trace__fig'), art = el.querySelector('.aq-washer-trace__art'), pipe = el.querySelector('.aq-washer-trace__pipe'),
      water = el.querySelector('.aq-washer-trace__water'), hots = [].slice.call(el.querySelectorAll('.aq-washer-trace__hot')), steps = [].slice.call(el.querySelectorAll('.aq-washer-trace__step'));
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    tl.fromTo(el.querySelector('.aq-washer-trace__stage'), { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'power2.inOut', clearProps: 'clipPath' }, 0);
    tl.from(art, { autoAlpha: 0, y: 24, duration: 1, clearProps: 'transform,opacity,visibility' }, 0.3);
    if (pipe && window.DrawSVGPlugin) tl.fromTo(pipe, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.9, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, 0.8);
    tl.from(hots, { scale: 0, duration: 0.45, stagger: 0.12, ease: 'back.out(2.2)', clearProps: 'transform' }, 1.1);
    tl.from(steps.map(function (s) { return s.querySelector('.aq-washer-trace__n') }), { yPercent: 60, autoAlpha: 0, duration: 0.6, stagger: 0.1, clearProps: 'transform,opacity,visibility' }, 0.4);
    if (m.narrow() || !water || !window.ScrollTrigger) { m.on(el, function () { tl.play() }, 'top 75%'); return }
    // Desktop story: lengths along the route to each hotspot (data-stops, written by the renderer)
    var L = water.getTotalLength(), cum = (water.getAttribute('data-stops') || '0').split(' ').map(Number);
    var tot = cum[cum.length - 1] || 1;
    el.classList.add('is-scroll');
    water.style.strokeDasharray = L + ' ' + L; water.style.strokeDashoffset = L;
    function go(k) {
      steps.forEach(function (s, i) { s.classList.toggle('is-on', i === k) });
      hots.forEach(function (h) { var i = +h.getAttribute('data-k'); h.classList.toggle('is-on', i === k) });
      var f = k < 0 ? 0 : (cum[Math.min(k, cum.length - 1)] / tot);
      if (k === 0) f = 0.02;
      m.tw(gsap.to(water, { strokeDashoffset: L * (1 - f), duration: 0.9, ease: 'power2.inOut', overwrite: true }));
    }
    steps.forEach(function (s, i) {
      m.tw(ScrollTrigger.create({ trigger: s, start: 'top 55%', end: 'bottom 55%', onEnter: function () { go(i) }, onEnterBack: function () { go(i) }, onLeaveBack: function () { if (i === 0) go(-1) } }));
    });
    // Leaving the section downwards: leave the full route and every hotspot shown
    m.tw(ScrollTrigger.create({ trigger: el, start: 'bottom 45%', onEnter: function () { go(steps.length - 1); m.tw(gsap.to(water, { strokeDashoffset: 0, duration: 0.6, overwrite: true })) } }));
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
