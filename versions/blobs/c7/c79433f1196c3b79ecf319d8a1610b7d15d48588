/* DocPipe: the pipe is laid column by column (wall and bore draw on, the valves set down, the documents rise), once,
   under 2 s. Then the page's one scroll-linked story: as the band passes through the viewport the water runs along the
   pipe from the first document to the last, each valve's handle turns open as the water reaches it, and each
   document's number and code come up from half strength as the water arrives (the names and lines stay at full
   strength throughout). Scrolling back runs it back; it never pins or changes scroll speed. Reduced motion: nothing
   runs, the water line is drawn in full.
   Ported from Subframe Motion "Scroll text reveal" (poem-scroll), MIT, (c) 2026 Subframe (kept: one progress value
   from the scroll position driving a progress track and each line's strength by 1 - (i - progress * n) * 0.45 with a
   floor; replaced: the inner scroller with the page scroll, the track with the water in the pipe, the floor raised
   to 0.45 and applied only to the number and code). */
AQmotion.fx('DocPipe', function (root, m) {
  root.querySelectorAll('.aq-doc-pipe').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var items = qa('.aq-doc-pipe__item').filter(function (x) { return x.offsetParent !== null }), D = !!window.DrawSVGPlugin, n = items.length;
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    items.forEach(function (it, i) {
      var at = i * 0.22, walls = qa('.aq-doc-pipe__wall, .aq-doc-pipe__bore', it);
      if (D && walls.length && walls[0].getBoundingClientRect().width) tl.from(walls, { drawSVG: '0%', duration: 0.6, ease: 'none', clearProps: 'strokeDasharray,strokeDashoffset' }, at);
      var v = it.querySelector('.aq-doc-pipe__valve');
      if (v) tl.from(v, { scale: 0.4, autoAlpha: 0, duration: 0.35, ease: 'back.out(2)', clearProps: 'transform,opacity,visibility' }, at + 0.4);
      tl.from(it.querySelector('.aq-doc-pipe__txt'), { y: 16, autoAlpha: 0, duration: 0.6, clearProps: 'transform,opacity,visibility' }, at + 0.2);
    });
    m.on(el, function () { tl.play() }, 'top 80%');

    var flows = items.map(function (it) { return it.querySelector('.aq-doc-pipe__flow') });
    if (!window.ScrollTrigger || !flows[0] || !flows[0].getBoundingClientRect().width) return;
    flows.forEach(function (f) { f.setAttribute('pathLength', '1'); f.style.strokeDasharray = '1 1' });
    var dim = items.map(function (it) { return qa('.aq-doc-pipe__num, .aq-doc-pipe__code', it) }), stems = items.map(function (it) { return it.querySelector('.aq-doc-pipe__stem') }), open = [];
    function paint(p) {
      var q = p * n;
      flows.forEach(function (f, i) { f.style.strokeDashoffset = String(1 - Math.max(0, Math.min(1, q - i))) });
      dim.forEach(function (set, i) { var o = Math.max(0.45, Math.min(1, 1 - (i - q) * 0.45)); set.forEach(function (x) { x.style.opacity = o.toFixed(3) }) });
      stems.forEach(function (s, i) { var on = q - i >= 0.76; if (s && on !== !!open[i]) { open[i] = on; gsap.to(s, { rotation: on ? 90 : 0, duration: 0.2, ease: 'power2.out', overwrite: true }) } });
    }
    paint(0);
    m.tw(ScrollTrigger.create({ trigger: el, start: 'top 75%', end: 'bottom 45%', scrub: 0.5, onUpdate: function (st) { paint(st.progress) }, onRefresh: function (st) { paint(st.progress) } }));
  });
});
