/* PqCalendar: the year is sampled. The week bars rise left to right (the solid phases first, then the routine hatch
   runs on to the end of the year), the zoom wedge opens down from the first weeks, then the grid fills day by day,
   a column of samples at a time, while the total counts up with it; at the hold point the dashed line drops through
   the grid and the second phase carries on in flow. The phases' words rise last. One timeline on scroll-in, under 5 s. */
AQmotion.fx('PqCalendar', function (root, m) {
  [].forEach.call(root.querySelectorAll('.aq-pq-calendar'), function (el) {
    m.claim(el);
    var qa = function (s) { return [].slice.call(el.querySelectorAll(s)) }, q = function (s) { return el.querySelector(s) };
    var wks = qa('.aq-pq-calendar__wk'), zoom = q('.aq-pq-calendar__zoom'), dots = qa('.aq-pq-calendar__dot'), hl = q('.aq-pq-calendar__hl'), num = q('.aq-pq-calendar__num');
    var nd = 0; dots.forEach(function (d) { nd = Math.max(nd, +d.getAttribute('data-d') + 1) });
    var tl = gsap.timeline({ paused: true }); m.tw(tl);
    tl.fromTo(wks, { scaleY: 0, transformOrigin: '50% 100%' }, { scaleY: 1, duration: 0.3, stagger: { amount: 1.1 }, ease: 'power2.out', clearProps: 'transform' }, 0);
    if (zoom) tl.fromTo(zoom, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.5, ease: 'power2.out', clearProps: 'clipPath' }, 0.4);
    var t0 = 0.8, per = 2.0 / Math.max(1, nd);
    for (var d = 0; d < nd; d++) tl.fromTo(dots.filter(function (x) { return +x.getAttribute('data-d') === d }), { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.25, ease: 'back.out(2)', clearProps: 'transform' }, t0 + d * per);
    if (num) { var end = parseInt(num.textContent, 10), o = { v: 0 }; if (!num.getAttribute('aria-label')) num.setAttribute('aria-label', num.textContent);
      tl.fromTo(o, { v: 0 }, { v: end, duration: 2.0 + 0.25, ease: 'none', onUpdate: function () { num.textContent = Math.round(o.v) }, onComplete: function () { num.textContent = end } }, t0) }
    if (hl) { var hd = +hl.getAttribute('x1') / (+el.querySelector('.aq-pq-calendar__grid').viewBox.baseVal.width) * nd;
      tl.fromTo(hl, { scaleY: 0, transformOrigin: '50% 0' }, { scaleY: 1, duration: 0.35, ease: 'power3.in', clearProps: 'transform' }, t0 + hd * per) }
    tl.from(qa('.aq-pq-calendar__ph, .aq-pq-calendar__unit, .aq-pq-calendar__eq'), { autoAlpha: 0, y: 10, duration: 0.45, stagger: 0.1, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, 2.2);
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
