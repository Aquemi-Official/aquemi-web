/* RevisionRegister: the sheet is laid on the board, then the register is written up. The limestone sheet rises onto
   the navy (clip from the bottom), the title strip's rule draws across and the topic tabs drop in; the lead note's
   number decodes, its revision triangle strikes, the quotation rises line by line; then each visible register line
   is ruled in left to right, its number decoding. Once, under 3.5 s. Filtering rows glide (Flip, in the renderer). */
AQmotion.fx('RevisionRegister', function (root, m) {
  root.querySelectorAll('.aq-revision-register').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var q = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    tl.fromTo(el, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 0.7, ease: 'power3.inOut', clearProps: 'clipPath' }, 0)
      .from(q('.aq-revision-register__tab'), { y: -10, autoAlpha: 0, duration: 0.4, stagger: 0.06, clearProps: 'transform,opacity,visibility' }, 0.45)
      .from(q('.aq-revision-register__count, .aq-revision-register__lk'), { autoAlpha: 0, duration: 0.4, clearProps: 'opacity,visibility' }, 0.6);
    var big = el.querySelector('.aq-revision-register__bign');
    if (big) {
      tl.from(big, { yPercent: 40, autoAlpha: 0, duration: 0.7, clearProps: 'transform,opacity,visibility' }, 0.6);
      if (window.ScrambleTextPlugin) tl.to(big, { duration: 0.7, scrambleText: { text: big.textContent, chars: '0123456789', speed: 0.6 }, ease: 'none' }, 0.6);
    }
    var tri = el.querySelector('.aq-revision-register__big .aq-revision-register__tri');
    if (tri) tl.from(tri, { scale: 1.8, autoAlpha: 0, transformOrigin: '50% 50%', duration: 0.35, ease: 'power4.in', clearProps: 'transform,opacity,visibility' }, 1.1);
    var qp = el.querySelector('.aq-revision-register__q p'), sp = qp && m.split(qp, { type: 'lines', mask: 'lines' });
    if (sp && sp.lines.length) tl.from(sp.lines, { yPercent: 105, duration: 0.7, stagger: 0.08, ease: 'power4.out' }, 0.9);
    var rest = q('.aq-revision-register__lt, .aq-revision-register__lstd, .aq-revision-register__go, .aq-revision-register__fig'); if (rest.length) tl.from(rest, { y: 10, autoAlpha: 0, duration: 0.5, stagger: 0.08, clearProps: 'transform,opacity,visibility' }, 1.2);
    var rows = q('.aq-revision-register__row').filter(function (r) { return r.offsetParent !== null });
    tl.from(q('thead th'), { autoAlpha: 0, duration: 0.4, stagger: 0.04, clearProps: 'opacity,visibility' }, 0.8);
    rows.forEach(function (r, i) {
      var at = 0.95 + i * 0.1;
      tl.fromTo(r, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.55, ease: 'power2.inOut', clearProps: 'clipPath' }, at);
    });
    m.on(el, function () { tl.play() }, 'top 78%');
  });
});
