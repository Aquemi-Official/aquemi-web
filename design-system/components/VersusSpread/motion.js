/* VersusSpread: the mast slides in from the page's edge (the heading's words land by the core), the drawing is drawn
   (boundaries fade up, equipment and pipe walls draw, then the water runs the skid piping, the riser to the tank and
   round the loop) and the rows follow in a short stagger. Under 3 s, once.
   Then the page's one scroll-linked story, desktop only: a reading lens follows the scroll. The row nearest a focus
   line at 45 % of the viewport is in focus: the lens band springs behind it, its parts light on the drawing and the
   caption names it ("03 / 07 Sanitization"); rows further away step back in strength. Pointing at or focusing a row
   takes over until the pointer or focus leaves. It never pins or changes scroll speed; reduced motion: no lens, the
   rows and drawing are still and full strength (pointing still lights parts, from the renderer).
   Ported from Subframe Motion "Fisheye scroll text" (reading-lens), MIT, (c) 2026 Subframe (kept: focus = scroll
   position over the line pitch, full strength within the focus band, then strength 1 - (distance - band) * 0.14 per
   line, and the "NN / total" position readout; replaced: the inner scroller with the page scroll, lines with table
   rows, the vertical squash with a strength floor of 0.6 so every row stays readable; the lens band moves on the
   core spring, sliding-tabs values 460 / 34). */
AQmotion.fx('VersusSpread', function (root, m) {
  var D = !!window.DrawSVGPlugin;
  [].forEach.call(root.querySelectorAll('.aq-versus-spread'), function (w) {
    var sec = w.closest('.aq-section') || w, mast = w.querySelector('.aq-versus-spread__mast'), fig = w.querySelector('.aq-versus-spread__fig');
    var group = w.querySelector('.aq-versus-spread__rows'), end = w.querySelector('.aq-versus-spread__end'), lens = w.querySelector('.aq-versus-spread__lens');
    if (!fig || !group) return;
    m.claim(fig); m.claim(group); if (end) m.claim(end);
    var qa = function (s, r) { return [].slice.call((r || w).querySelectorAll(s)) };
    var rows = qa('.aq-versus-spread__row').filter(function (r) { return r.offsetParent !== null });

    /* entrance */
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    if (mast) tl.fromTo(mast, { clipPath: 'inset(0 100% 0 -100vmax)' }, { clipPath: 'inset(0 0% 0 -100vmax)', duration: 0.9, ease: 'power3.inOut', clearProps: 'clipPath' }, 0);
    tl.from(qa('.aq-versus-spread__bound, .aq-versus-spread__tag'), { autoAlpha: 0, duration: 0.5, stagger: 0.08, clearProps: 'opacity,visibility' }, 0.3);
    var lines = qa('.aq-versus-spread__eq, .aq-versus-spread__thin, .aq-versus-spread__wall, .aq-versus-spread__bore', fig);
    if (D) tl.fromTo(lines, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.8, stagger: 0.02, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, 0.35);
    var water = qa('.aq-versus-spread__water', fig);
    if (D) water.forEach(function (p, i) { tl.fromTo(p, { drawSVG: '0%' }, { drawSVG: '100%', duration: [0.25, 0.55, 0.8][i] || 0.5, ease: 'none', clearProps: 'strokeDasharray,strokeDashoffset' }, i ? '>' : 1.2) });
    tl.from(rows.concat(end ? [end] : []), { y: 12, autoAlpha: 0, duration: 0.5, stagger: 0.06, clearProps: 'transform,opacity,visibility' }, 0.4);
    m.on(sec, function () { tl.play() }, 'top 75%');

    /* the reading lens (desktop) */
    if (m.narrow() || !window.ScrollTrigger || !lens || !rows.length) return;
    var all = rows.concat(end ? [end] : []), cur = -2, st = { y: 0, h: 0 }, first = true;
    var sp = m.spring(st, { stiffness: 460, damping: 34, mass: 1 }, function (o) { lens.style.transform = 'translateY(' + o.y.toFixed(1) + 'px)'; lens.style.height = Math.max(0, o.h).toFixed(1) + 'px' });
    w.setAttribute('data-lens', '-1');
    function paint() {
      var fy = innerHeight * 0.45, best = -1, bd = 1e9, pitch = 0, gt = group.getBoundingClientRect().top, R = all.map(function (r) { return r.getBoundingClientRect() });
      R.forEach(function (b, i) { pitch += b.height; var d = Math.abs(b.top + b.height / 2 - fy); if (d < bd) { bd = d; best = i } });
      pitch /= R.length;
      if (fy < R[0].top - pitch || fy > R[R.length - 1].bottom + pitch) best = -1;
      rows.forEach(function (r, i) { var a = Math.abs(R[i].top + R[i].height / 2 - fy) / pitch, o = best < 0 ? 1 : (a <= 1 ? 1 : Math.max(0.6, 1 - (a - 1) * 0.14)); r.style.opacity = o.toFixed(3) });
      var inRows = best > -1 && best < rows.length;
      lens.classList.toggle('is-live', inRows);
      if (inRows) { var g = { y: R[best].top - gt, h: R[best].height }; if (first) { sp.jump(g); first = false } else sp.to(g) }
      else if (!first) { sp.jump({ y: st.y, h: 0 }); first = true }
      if (best === cur) return; cur = best;
      w.setAttribute('data-lens', String(best));
      if (!w.hasAttribute('data-hold') && window.vsShow) window.vsShow(w, best);
    }
    m.tw(ScrollTrigger.create({ trigger: w, start: 'top bottom', end: 'bottom top', onUpdate: paint, onRefresh: paint,
      onLeave: function () { rows.forEach(function (r) { r.style.opacity = '' }) }, onLeaveBack: function () { rows.forEach(function (r) { r.style.opacity = '' }) } }));
  });
});
