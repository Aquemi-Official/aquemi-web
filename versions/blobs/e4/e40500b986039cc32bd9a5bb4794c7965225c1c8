/* FidelityLadder: the drawing gains detail stage by stage. The run extends from stage to stage; at each node the
   sheet lights up and its drawing draws on (the matrix, then the route, the P&ID, the isometric …), the number decodes
   and the text rises. Before a hold station the run stops at the closed valve, the valve turns open and the "Hold
   point" stamp strikes before the run goes on. The freeze stamp strikes on its sheet. One timeline, once, under 5 s. */
AQmotion.fx('FidelityLadder', function (root, m) {
  root.querySelectorAll('.aq-fidelity-ladder').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) }, D = window.DrawSVGPlugin, wide = !m.narrow();
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })), t = 0;
    qa('.aq-fidelity-ladder__st').forEach(function (st, i) {
      var run = st.querySelector('.aq-fidelity-ladder__run'), node = st.querySelector('.aq-fidelity-ladder__node'), valve = st.querySelector('.aq-fidelity-ladder__valve'),
        sheet = st.querySelector('.aq-fidelity-ladder__sheet'), body = st.querySelector('.aq-fidelity-ladder__body'), stamp = st.querySelector('.aq-fidelity-ladder__stamp'),
        frz = st.querySelector('.aq-fidelity-ladder__frz'), num = st.querySelector('.aq-fidelity-ladder__n');
      var strokes = qa('path, circle, rect', sheet).filter(function (p) { var cs = getComputedStyle(p); return cs.stroke && cs.stroke !== 'none' && p.getTotalLength }), txt = qa('text', sheet);
      if (run) tl.fromTo(run, { clipPath: wide ? 'inset(0 100% 0 0)' : 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0% 0% 0)', duration: 0.45, ease: 'none', clearProps: 'clipPath' }, t);
      if (valve) { tl.fromTo(valve, { rotation: wide ? 0 : 90 }, { rotation: wide ? 90 : 180, duration: 0.3, ease: 'power2.inOut', clearProps: 'transform' }, t + 0.35); t += 0.3 }
      if (node) tl.from(node, { scale: 0, duration: 0.3, ease: 'back.out(3)', clearProps: 'transform' }, t + 0.4);
      tl.fromTo(sheet, { autoAlpha: 0.15 }, { autoAlpha: 1, duration: 0.4, clearProps: 'opacity,visibility' }, t + 0.3);
      if (strokes.length) {
        if (D) tl.fromTo(strokes, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.7, stagger: 0.012, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, t + 0.35);
        else tl.from(strokes, { autoAlpha: 0, duration: 0.5, clearProps: 'opacity,visibility' }, t + 0.35);
      }
      if (txt.length) tl.from(txt, { autoAlpha: 0, duration: 0.3, clearProps: 'opacity,visibility' }, t + 0.8);
      if (body) tl.from(body, { y: 14, autoAlpha: 0, duration: 0.5, clearProps: 'transform,opacity,visibility' }, t + 0.4);
      if (num) tl.call(function () { m.scramble(num, 0) }, null, t + 0.4);
      if (frz) tl.fromTo(frz, { scale: 2.2, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.22, ease: 'power4.in', clearProps: 'transform,opacity,visibility' }, t + 0.95);
      if (stamp) { tl.fromTo(stamp, { scale: 1.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.22, ease: 'power4.in', clearProps: 'transform,opacity,visibility' }, t + 0.75); t += 0.2 }
      t += 0.5;
    });
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
