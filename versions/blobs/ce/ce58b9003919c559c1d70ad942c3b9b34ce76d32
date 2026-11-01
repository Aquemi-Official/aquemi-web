/* JointMacro: the macro comes into focus and is traced. The duotone planes settle from a slightly closer crop, the
   contours and the wall dimension are traced on in a hairline, the leaders run out to their numbers and the rows
   follow top to bottom. One timeline, once, about 2.8 s. The crop frame that follows the pointed row is CSS (frame-crop
   port, see the renderer): 620 ms on cubic-bezier(.22,.8,.18,1), instant under reduced motion. */
AQmotion.fx('JointMacro', function (root, m) {
  root.querySelectorAll('.aq-joint-macro').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) }, D = !!window.DrawSVGPlugin;
    var ap = el.querySelector('.aq-joint-macro__ap svg'); if (!ap) return;
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    tl.from(ap, { scale: 1.08, transformOrigin: '30% 60%', duration: 1.4, ease: 'power2.out', clearProps: 'transform' }, 0)
      .from(qa('.aq-joint-macro__side, .aq-joint-macro__shade, .aq-joint-macro__face, .aq-joint-macro__wallin, .aq-joint-macro__deep, .aq-joint-macro__hi, .aq-joint-macro__print', ap), { autoAlpha: 0, duration: 0.8, stagger: 0.05, clearProps: 'opacity,visibility' }, 0);
    var tr = qa('.aq-joint-macro__edge, .aq-joint-macro__ln, .aq-joint-macro__trace, .aq-joint-macro__dim', ap);
    if (D) tl.fromTo(tr, { drawSVG: '0%' }, { drawSVG: '100%', duration: 1.1, stagger: 0.08, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, 0.35);
    var leads = qa('.aq-joint-macro__lead path', ap);
    if (D && leads.length) tl.fromTo(leads, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.4, stagger: 0.07, clearProps: 'strokeDasharray,strokeDashoffset' }, 1.2);
    tl.from(qa('.aq-joint-macro__lead circle', ap), { scale: 0, transformOrigin: '50% 50%', transformBox: 'fill-box', duration: 0.3, stagger: 0.07, clearProps: 'transform' }, 1.2)
      .from(qa('.aq-joint-macro__no'), { autoAlpha: 0, scale: 0.6, duration: 0.35, stagger: 0.07, ease: 'back.out(2.4)', clearProps: 'opacity,visibility,transform' }, 1.45)
      .from(qa('.aq-joint-macro__crop i'), { autoAlpha: 0, duration: 0.4, stagger: 0.05, clearProps: 'opacity,visibility' }, 1.4);
    var rows = qa('.aq-joint-macro__legend, .aq-joint-macro__row').filter(function (r) { return r.offsetParent });
    if (rows.length) tl.from(rows, { y: 14, autoAlpha: 0, duration: 0.5, stagger: 0.06, clearProps: 'transform,opacity,visibility' }, 0.3);
    m.on(el, function () { tl.play() }, 'top 70%');
  });
});
