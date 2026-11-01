/* SuiteLoop: the plan is drawn like a site plan. The loop's walls run out round the sheet, the water follows along
   the supply run; one by one the suites' walls go up (each wipes down from the top), its drop is cut from the loop and
   the valve seats, then the water runs down that drop into the suite and settles back to the drawn state, and the
   suite's words read in. One timeline, once on scroll-in, under 5 s. */
AQmotion.fx('SuiteLoop', function (root, m) {
  root.querySelectorAll('.aq-suite-loop').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var nar = m.narrow(), tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    var loop = el.querySelector('.aq-suite-loop__loop'), water = el.querySelector('.aq-suite-loop__water');
    tl.fromTo(loop, { clipPath: nar ? 'inset(0 0 100% 0)' : 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0% 0)', duration: 1.1, ease: 'power2.inOut', clearProps: 'clipPath' }, 0);
    tl.fromTo(water, { clipPath: nar ? 'inset(0 0 100% 0)' : 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0% 0)', duration: 1.6, ease: 'power1.inOut', clearProps: 'clipPath' }, 0.5);
    el.querySelectorAll('.aq-suite-loop__suite').forEach(function (s, i) {
      var at = 0.35 + i * 0.32, dw = s.querySelector('.aq-suite-loop__dw'), drop = s.querySelector('.aq-suite-loop__drop');
      tl.fromTo(s, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.7, ease: 'power2.inOut', clearProps: 'clipPath' }, at);
      if (drop && drop.offsetParent !== null) {
        tl.from(drop, nar ? { scaleX: 0, duration: 0.4, clearProps: 'transform' } : { scaleY: 0, duration: 0.4, clearProps: 'transform' }, at + 0.1);
        tl.from(s.querySelector('.aq-suite-loop__valve svg'), { scale: 0, duration: 0.4, ease: 'back.out(2.2)', clearProps: 'transform' }, at + 0.35);
        if (!nar && dw) { tl.fromTo(dw, { scaleY: 0 }, { scaleY: 1, duration: 0.45, ease: 'power1.in' }, at + 0.7); tl.to(dw, { scaleY: 0.001, duration: 0.5, ease: 'power2.inOut', clearProps: 'transform' }, at + 1.5) }
      }
      tl.from(s.querySelectorAll('.aq-suite-loop__tag, .aq-suite-loop__t, .aq-suite-loop__f, .aq-suite-loop__go'), { y: 12, autoAlpha: 0, duration: 0.5, stagger: 0.06, clearProps: 'transform,opacity,visibility' }, at + 0.4);
    });
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
