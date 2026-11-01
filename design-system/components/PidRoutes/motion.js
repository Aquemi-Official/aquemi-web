/* PidRoutes: the P&ID commissions itself, route by route. The column heads decode and the rulers run out; the situation
   boxes print in from the left; then each route opens in turn: its first run draws from the situation's port, the
   valve swings into the line, a droplet rides the run and the system box lights as it arrives; the second run and its
   valve follow, the droplet carries on and the start box lights. Shared header lines draw once the routes they join
   are open. Lights settle back when the last route is through (about 3.6 s). Phones: the runs draw downwards. */
AQmotion.fx('PidRoutes', function (root, m) {
  root.querySelectorAll('.aq-pid-routes').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var q = function (s, c) { return (c || el).querySelector(s) }, qa = function (s, c) { return [].slice.call((c || el).querySelectorAll(s)) };
    var narrow = m.narrow(), short = narrow ? 0.8 : 1;
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    var heads = qa('.aq-pid-routes__head'), rulers = qa('.aq-pid-routes__ruler'), marks = qa('.aq-pid-routes__mark'), cap = q('.aq-pid-routes__cap');
    if (heads.length) tl.from(heads, { autoAlpha: 0, duration: 0.3, stagger: 0.1, clearProps: 'opacity,visibility' }, 0);
    if (rulers.length) tl.from(rulers, { scaleX: 0, transformOrigin: '0% 50%', duration: 0.9, ease: 'power2.inOut', clearProps: 'transform' }, 0.05);
    if (marks.length) tl.from(marks, { scale: 0, rotation: 90, duration: 0.5, ease: 'back.out(2)', clearProps: 'transform' }, 0);
    var sits = qa('.aq-pid-routes__sit');
    tl.from(sits, { clipPath: 'inset(0 100% 0 0)', duration: 0.55 * short, ease: 'power2.inOut', stagger: 0.09, clearProps: 'clipPath' }, 0.25);
    tl.from(qa('.aq-pid-routes__node'), { autoAlpha: 0, duration: 0.4, stagger: 0.04, clearProps: 'opacity,visibility' }, 0.35);
    var routes = qa('.aq-pid-routes__route'), lit = [], t0 = 0.75, gap = 0.26 * short;
    function ride(run, at, dur) {
      var vert = run.offsetHeight > run.offsetWidth;
      var svg = q('.aq-pid-routes__pipe', run), v = q('.aq-pid-routes__valve', run), extra = qa('.aq-pid-routes__inst, .aq-pid-routes__arrow, .aq-pid-routes__jn', run), port = q('.aq-pid-routes__port', run);
      if (port) tl.from(port, { scale: 0, duration: 0.25, ease: 'back.out(3)', clearProps: 'transform' }, at - 0.1);
      tl.fromTo(svg, { clipPath: vert ? 'inset(0 0 100% 0)' : 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0% 0)', duration: dur, ease: 'none', clearProps: 'clipPath' }, at);
      if (v) tl.from(v, { scale: 0.2, autoAlpha: 0, rotation: vert ? 0 : -90, duration: 0.35, ease: 'back.out(2.2)', clearProps: 'transform,opacity,visibility' }, at + dur * 0.45);
      if (extra.length) tl.from(extra, { autoAlpha: 0, duration: 0.25, clearProps: 'opacity,visibility' }, at + dur * 0.6);
      var d = document.createElement('span'); d.className = 'aq-pid-routes__drop'; d.setAttribute('aria-hidden', 'true');
      tl.call(function () { run.appendChild(d) }, null, at);
      var len = function () { return vert ? run.offsetHeight : run.offsetWidth };
      tl.fromTo(d, { x: 0, y: 0, autoAlpha: 1 }, { x: vert ? 0 : len, y: vert ? len : 0, duration: dur, ease: 'none', immediateRender: false }, at)
        .to(d, { autoAlpha: 0, duration: 0.15, onComplete: function () { if (d.parentNode) d.parentNode.removeChild(d) } }, at + dur);
    }
    routes.forEach(function (r, i) {
      var at = t0 + i * gap, a = q('.aq-pid-routes__run--a', r), b = q('.aq-pid-routes__run--b', r), sys = q('.aq-pid-routes__node--sys', r), go = q('.aq-pid-routes__node--go', r);
      var d = 0.5 * short;
      if (a) ride(a, at, d);
      if (sys) { tl.call(function () { sys.classList.add('is-lit'); lit.push(sys) }, null, at + d); tl.from(q('.aq-pid-routes__v', sys), { x: narrow ? 0 : -8, autoAlpha: 0, duration: 0.35, clearProps: 'transform,opacity,visibility' }, at + d - 0.05) }
      if (b) ride(b, at + d + 0.1, d * 0.8);
      if (go) { tl.call(function () { go.classList.add('is-lit'); lit.push(go) }, null, at + d * 1.8 + 0.1); tl.from(q('.aq-pid-routes__v', go), { x: narrow ? 0 : -8, autoAlpha: 0, duration: 0.35, clearProps: 'transform,opacity,visibility' }, at + d * 1.8 + 0.05) }
    });
    var end = t0 + routes.length * gap + 1.0 * short;
    var tie = qa('.aq-pid-routes__tie');
    if (tie.length) tl.from(tie, { autoAlpha: 0, duration: 0.4, stagger: 0.03, clearProps: 'opacity,visibility' }, end - 0.6);
    if (cap) tl.from(cap, { autoAlpha: 0, duration: 0.4, clearProps: 'opacity,visibility' }, end - 0.4);
    tl.call(function () { lit.forEach(function (n) { n.classList.remove('is-lit') }) }, null, end + 0.3);
    m.on(el, function () { tl.play(); heads.forEach(function (h, i) { var s = h.querySelector('span'); if (s) m.scramble(s, 0.1 * i) }) }, 'top 80%');

    // Animated beam (ported from Subframe Motion "Animated beam", the travelling gradient head with its fading tail, see
    // SystemRun's AQbeam): while the visitor points at or focuses a route, the water keeps running it, situation to
    // system to where to start, through both valves (each run 0.9 s, the library's 0.16 1 0.3 1 ease, the second run
    // following the first as the library staggers its paths). Wide screens; phones keep the lit route.
    if (m.narrow()) return;
    var bEase = window.CustomEase ? (CustomEase.get('aq-beam') || CustomEase.create('aq-beam', 'M0,0 C0.16,1 0.3,1 1,1')) : 'expo.out', loop = null, cur = null;
    function beams(i) {
      return qa('.aq-pid-routes__run[data-r="' + i + '"]').map(function (r) {
        var b = r.querySelector('.aq-pid-routes__beam');
        if (!b) { b = document.createElement('span'); b.className = 'aq-pid-routes__beam'; b.innerHTML = '<i></i>'; r.appendChild(b) }
        return b.firstChild;
      });
    }
    function run(i) {
      if (i === cur) return; cur = i;
      if (loop) { loop.kill(); loop = null } var old = qa('.aq-pid-routes__beam i'); if (old.length) gsap.set(old, { xPercent: -100 });
      if (i == null || tl.isActive()) return;
      var bs = beams(i); loop = m.tw(gsap.timeline({ repeat: -1, repeatDelay: 0.25 }));
      bs.forEach(function (b, k) { loop.fromTo(b, { xPercent: -100 }, { xPercent: 250, duration: 0.9, ease: bEase }, k * 0.45) });
    }
    el.addEventListener('pointerover', function (ev) { var t = ev.target.closest && ev.target.closest('[data-r]'); run(t ? t.getAttribute('data-r') : null) });
    el.addEventListener('pointerleave', function () { run(null) });
    el.addEventListener('focusin', function (ev) { var t = ev.target.closest && ev.target.closest('[data-r]'); if (t) run(t.getAttribute('data-r')) });
    el.addEventListener('focusout', function (ev) { if (!el.contains(ev.relatedTarget)) run(null) });
  });
});
