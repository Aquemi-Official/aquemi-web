/* LoopCircuit: the strip prints in (column rules, pipes, then each station in reading order) and the captions rise
   (once, under 2 s). Then the page's one scroll-linked story: as the band passes through the viewport a ringed marker
   follows the water's route (generation, into the tank, out through pump and exchanger, past the outlets and return
   sensors, up the riser and home through the spray ball); the water line fills behind it and each station and caption
   lights as the marker reaches it. Scrolling back runs it back. It never pins or changes scroll speed; the drawing is
   complete at every position. Under reduced motion nothing runs: the water lines are drawn in full, no marker.
   Ported from Subframe Motion "Animated route path" (race-replay), MIT, (c) 2026 Subframe
   (kept: the route painted by one fraction, a pathLength-normalised dash offset behind a ringed marker placed with
   getPointAtLength, the fraction clamped 0..1; replaced: the play button and timer with scroll position). */
AQmotion.fx('LoopCircuit', function (root, m) {
  root.querySelectorAll('.aq-loop-circuit').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var svg = el.querySelector('.aq-loop-circuit__svg'), strip = el.querySelector('.aq-loop-circuit__strip'), stages = qa('.aq-loop-circuit__stage');
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })), D = !!window.DrawSVGPlugin;
    tl.from(stages, { y: 16, autoAlpha: 0, duration: 0.6, stagger: 0.07, clearProps: 'transform,opacity,visibility' }, 0.2);
    if (!svg || !strip || strip.offsetParent === null) { m.on(el, function () { tl.play() }, 'top 80%'); return }
    /* print-in: column rules and pipes draw, then the stations left to right */
    var base = qa('.aq-loop-circuit__col, .aq-loop-circuit__pipe', svg);
    if (D) tl.from(base, { drawSVG: '0%', duration: 0.8, stagger: 0.03, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, 0);
    qa('.aq-loop-circuit__node', svg).forEach(function (n, i) {
      var ln = qa('.aq-loop-circuit__eq:not(.is-opt), .aq-loop-circuit__ln, .aq-loop-circuit__thin', n);
      if (D && ln.length) tl.from(ln, { drawSVG: '0%', duration: 0.5, stagger: 0.02, ease: 'power2.out', clearProps: 'strokeDasharray,strokeDashoffset' }, 0.3 + i * 0.1);
      var rest = qa('.aq-loop-circuit__jet, .aq-loop-circuit__tx, .aq-loop-circuit__drop, .aq-loop-circuit__pt, .aq-loop-circuit__det, .aq-loop-circuit__hid, .aq-loop-circuit__eq.is-opt', n);
      if (rest.length) tl.from(rest, { autoAlpha: 0, duration: 0.3, stagger: 0.015, clearProps: 'opacity,visibility' }, 0.6 + i * 0.1);
    });
    var water = svg.querySelector('.aq-loop-circuit__water');
    if (water) tl.from(water, { scaleY: 0, transformOrigin: '50% 100%', duration: 0.7, ease: 'power2.out', clearProps: 'transform' }, 0.5);
    m.on(el, function () { tl.play() }, 'top 75%');

    /* the scroll-linked route */
    var route = svg.querySelector('.aq-loop-circuit__route'), feed = svg.querySelector('.aq-loop-circuit__flow--feed'), loop = svg.querySelector('.aq-loop-circuit__flow--loop');
    if (!route || !window.ScrollTrigger) return;
    var L = route.getTotalLength(), Lf = feed ? feed.getTotalLength() : 0, Ll = loop ? loop.getTotalLength() : 0;
    function near(x, y, from) { var best = from || 0, bd = 1e9; for (var s = from || 0; s <= L; s += 3) { var p = route.getPointAtLength(s), d = (p.x - x) * (p.x - x) + (p.y - y) * (p.y - y); if (d < bd) { bd = d; best = s } } return best }
    var o0 = loop ? near(300, 262, Lf) : 0;
    var stops = stages.map(function (s) { var a = (s.getAttribute('data-at') || '').split(',').map(Number); return a.length === 2 ? { s: s, id: s.getAttribute('data-node'), at: near(a[0], a[1]) } : null }).filter(Boolean);
    var nodes = {}; qa('.aq-loop-circuit__node', svg).forEach(function (n) { nodes[n.getAttribute('data-node')] = n });
    [feed, loop].forEach(function (f) { if (f) { f.setAttribute('pathLength', '1'); f.style.strokeDasharray = '1 1' } });
    var NS = 'http://www.w3.org/2000/svg', mk = document.createElementNS(NS, 'g'); mk.setAttribute('class', 'aq-loop-circuit__marker');
    mk.innerHTML = '<circle class="aq-loop-circuit__mk" r="11"/><circle class="aq-loop-circuit__mk-dot" r="4"/>'; svg.appendChild(mk);
    var last = -1;
    function paint(v) {
      v = Math.max(0, Math.min(1, v)); if (v === last) return; last = v;
      var s = L * v, p = route.getPointAtLength(s);
      mk.setAttribute('transform', 'translate(' + p.x.toFixed(1) + ' ' + p.y.toFixed(1) + ')');
      if (feed) feed.style.strokeDashoffset = String(1 - Math.min(1, s / Lf));
      if (loop) loop.style.strokeDashoffset = String(1 - Math.max(0, Math.min(1, (s - o0) / Ll)));
      stops.forEach(function (st) { var on = s >= st.at - 2; st.s.classList.toggle('is-on', on); if (nodes[st.id]) nodes[st.id].classList.toggle('is-on', on) });
    }
    paint(0);
    m.tw(ScrollTrigger.create({ trigger: strip, start: 'top 70%', end: 'bottom 30%', scrub: 0.6, onUpdate: function (st) { paint(st.progress) }, onRefresh: function (st) { paint(st.progress) } }));
  });
});
