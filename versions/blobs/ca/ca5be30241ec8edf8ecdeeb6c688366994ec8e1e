/* LimitStack: the type is set, then the water proves it. Each row steps in from the left a beat after the one above
   (label decodes, the limit rises out of its line, the reference rule runs out to the drawing); meanwhile the outlet
   pipe draws (IsoKit), the water runs in at the top, round the coil and down the outlet run; when it reaches the
   collar the "Guaranteed" lettering wraps on, the guaranteed row's box flashes in flow and the note follows.
   One timeline, once, under 5 s. The section heading is left to the core. */
AQmotion.fx('LimitStack', function (root, m) {
  root.querySelectorAll('.aq-limit-stack').forEach(function (el) {
    var list = el.querySelector('.aq-limit-stack__list'), fig = el.querySelector('.aq-limit-stack__fig');
    if (!list || !m.free(list)) return;
    m.claim(list); if (fig) m.claim(fig);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var rows = qa('.aq-limit-stack__row'), short = m.narrow() ? 0.75 : 1;
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    rows.forEach(function (r, i) {
      var t = 0.1 + i * 0.16 * short, v = qa('.aq-limit-stack__v > span', r), rule = r.querySelector('.aq-limit-stack__rule');
      tl.from(r, { x: -32, duration: 0.7, clearProps: 'transform' }, t)
        .from(r.querySelector('.aq-limit-stack__p'), { autoAlpha: 0, duration: 0.3, clearProps: 'opacity,visibility' }, t);
      var ix = r.querySelector('.aq-index'); if (ix) tl.call(function () { m.scramble(ix, 0) }, null, t);
      if (v.length) tl.from(v, { yPercent: 70, autoAlpha: 0, duration: 0.6, stagger: 0.07, clearProps: 'transform,opacity,visibility' }, t + 0.08);
      if (rule) tl.from(rule, { scaleX: 0, duration: 0.7, ease: 'power2.inOut', clearProps: 'transform' }, t + 0.2);
      tl.from(qa('.aq-limit-stack__mt, .aq-limit-stack__lvl', r), { autoAlpha: 0, duration: 0.4, clearProps: 'opacity,visibility' }, t + 0.5);
    });
    var hero = el.querySelector('.aq-limit-stack__row.is-hero'), seal = el.querySelector('.aq-limit-stack__seal'),
      out = el.querySelector('.aq-limit-stack__outlet'), note = el.querySelector('.aq-limit-stack__note');
    function arrive(at) {
      if (seal) tl.fromTo(seal, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.45, ease: 'power2.inOut', clearProps: 'clipPath' }, at);
      if (hero) {
        var bg = getComputedStyle(hero).backgroundColor, ft = getComputedStyle(document.documentElement).getPropertyValue('--flow-tint').trim();
        tl.fromTo(hero, { backgroundColor: ft || bg }, { backgroundColor: bg, duration: 1, ease: 'power2.in', clearProps: 'backgroundColor' }, at + 0.1);
      }
      if (note) tl.from(note, { autoAlpha: 0, y: 8, duration: 0.5, clearProps: 'transform,opacity,visibility' }, at + 0.2);
    }
    var svg = fig && fig.querySelector('svg.aq-iso'), it = svg && window.AQiso && AQiso.timeline(svg, m, { draw: 0.6 * short, pipe: 0.9 * short, flow: 1.6 * short, keep: true });
    if (seal) gsap.set(seal, { clipPath: 'inset(0 100% 0 0)' });
    if (it) {
      it.paused(false); tl.add(it, 0.15);
      var tArr = 0.15 + (it.data.arrive.out != null ? it.data.arrive.out : it.duration());
      if (out) tl.from(out, { autoAlpha: 0, duration: 0.4, clearProps: 'opacity,visibility' }, 0.15 + it.labels.flow);
      arrive(Math.min(tArr, 4.2));
    } else arrive(0.8);
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
