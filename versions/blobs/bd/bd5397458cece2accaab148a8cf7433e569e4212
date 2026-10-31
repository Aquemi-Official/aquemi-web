/* ProcessDiagram (and WaterPath, which is the same aq-diagram markup): water travels the pipe from the feed through
   every station to the outlet. Each run fills as the water reaches it and its station lights (the vignette prints in,
   the box settles and its number and name come up from dim); behind the water the runs drain again, so only the pressed station's run stays
   full. Then the selected stage's detail panel rises under the row. One timeline, cause before effect, under 4.5 s.
   The visitor's own selection (flSel in parts/ProcessDiagram.js) runs a short timeline of its own. */
AQmotion.fx('ProcessDiagram', function (root, m) {
  root.querySelectorAll('.aq-diagram').forEach(function (w) {
    m.claim(w);
    var st = [].slice.call(w.querySelectorAll('.aq-diagram__st')); if (!st.length) return;
    var n = st.length, step = Math.min(0.42, 2.6 / n), fill = 0.3;
    var runs = st.map(function (s) { return s.querySelector('.aq-diagram__fill') });
    var figs = st.map(function (s) { return s.querySelector('.aq-diagram__fig') });
    var art = st.map(function (s) { return s.querySelector('.aq-diagram__spot, .aq-diagram__glyph') });
    var txt = st.map(function (s) { return [s.querySelector('.aq-diagram__n'), s.querySelector('.aq-diagram__t')] });
    var ends = w.querySelectorAll('.aq-diagram__ends span'), base = w.querySelector('.aq-diagram__base');
    var vert = function (f) { return f && f.offsetHeight > f.offsetWidth };
    gsap.set(txt, { autoAlpha: 0.3 });
    gsap.set(art, { clipPath: 'inset(100% 0 0 0)' });
    runs.forEach(function (f) { if (f) gsap.set(f, vert(f) ? { scaleY: 0, transformOrigin: 'center top' } : { scaleX: 0, transformOrigin: 'left center' }) });
    if (ends.length) gsap.set(ends, { autoAlpha: 0 });
    if (base) gsap.set(base, { autoAlpha: 0, y: 12 });
    m.on(w, function () {
      var d = w.classList.contains('is-live') ? w.querySelector('.aq-diagram__d:not([hidden])') : null;
      var tl = m.tw(gsap.timeline({ delay: 0.45 }));
      if (ends[0]) { tl.to(ends[0], { autoAlpha: 1, duration: 0.2 }, 0); m.scramble(ends[0], 0.45) }
      st.forEach(function (s, i) {
        var t = 0.15 + i * step, f = runs[i], v = vert(f), on = s.getAttribute('aria-pressed') === 'true';
        if (f) tl.to(f, v ? { scaleY: 1, duration: fill, ease: 'none' } : { scaleX: 1, duration: fill, ease: 'none' }, t);
        /* the station lights as the water reaches it */
        tl.fromTo(figs[i], { scale: 0.94 }, { scale: 1, duration: 0.6, ease: 'aq-settle' }, t + fill * 0.8)
          .to(art[i], { clipPath: 'inset(0% 0 0 0)', duration: 0.55, ease: 'power2.out' }, t + fill * 0.8)
          .to(txt[i], { autoAlpha: 1, duration: 0.3, stagger: 0.05 }, t + fill);
        /* behind the water the run drains toward the next station, unless this is the pressed one */
        if (f && !on) tl.to(f, v ? { scaleY: 0, transformOrigin: 'center bottom', duration: fill * 1.2, ease: 'power1.in' } : { scaleX: 0, transformOrigin: 'right center', duration: fill * 1.2, ease: 'power1.in' }, t + step + fill * 0.5);
      });
      var end = 0.15 + n * step + fill;
      if (ends[1]) { tl.to(ends[1], { autoAlpha: 1, duration: 0.2 }, end - 0.3); m.scramble(ends[1], 0.45 + end - 0.3) }
      if (d) tl.fromTo(d, { autoAlpha: 0, y: 16, clipPath: 'inset(0 0 100% 0)' }, { autoAlpha: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.7, ease: 'power3.out' }, end);
      if (d) { var dn = d.querySelector('.aq-diagram__dn'); if (dn) tl.from(dn, { yPercent: 40, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, end + 0.15) }
      if (base) tl.to(base, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' }, end + 0.2);
      tl.add(function () {
        gsap.set(runs.filter(Boolean), { clearProps: 'transform,transformOrigin' });
        gsap.set(figs.concat(art, [].concat.apply([], txt), [].slice.call(ends)).filter(Boolean), { clearProps: 'opacity,visibility,transform,clipPath' });
        if (d) gsap.set(d, { clearProps: 'opacity,visibility,transform,clipPath' });
        if (base) gsap.set(base, { clearProps: 'opacity,visibility,transform' });
      });
    }, 'top 75%');
  });
});
