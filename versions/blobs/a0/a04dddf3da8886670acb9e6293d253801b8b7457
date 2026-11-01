/* TimeCard: the card is pulled from the rack and punched. The card rises out of its slot onto the one beneath (which
   stays put), the column names appear, then each visible line is punched in turn: its slot (blanked when the timeline is
   built) fills navy and stays punched as the line's text types in from the left. The note's stamp strikes last, once.
   Under 3 s; folded lines appear whole when opened. Hover: the line's slot fills. */
AQmotion.fx('TimeCard', function (root, m) {
  root.querySelectorAll('.aq-time-card').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var q = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    tl.from(el, { y: 40, duration: 0.8, ease: 'power4.out', clearProps: 'transform' }, 0)
      .fromTo(el, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 0.7, ease: 'power3.out', clearProps: 'clipPath' }, 0)
      .from(q('.aq-time-card__head > span'), { autoAlpha: 0, duration: 0.4, stagger: 0.06, clearProps: 'opacity,visibility' }, 0.5);
    q('.aq-time-card__row').filter(function (r) { return r.offsetParent !== null }).forEach(function (r, i) {
      var at = 0.7 + i * 0.22, slot = r.querySelector('.aq-time-card__n i');
      if (slot) { slot.classList.add('is-blank'); tl.call(function (s) { s.classList.remove('is-blank') }, [slot], at) }
      tl.fromTo(q('.aq-time-card__p, .aq-time-card__v, .aq-time-card__m', r), { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.5, stagger: 0.08, ease: 'power2.out', clearProps: 'clipPath' }, at + 0.05);
    });
    var st = el.querySelector('.aq-time-card__stamp');
    if (st) tl.from(st, { scale: 1.5, autoAlpha: 0, duration: 0.3, ease: 'power4.in', clearProps: 'transform,opacity,visibility' }, '>-0.1');
    m.on(el, function () { tl.play() }, 'top 80%');
  });
});
