/* Ported from Subframe Motion "Animated beam" (animated-beam), MIT, (c) 2026 Subframe
   AQbeam(svg, paths, opts): a moving highlight traces the given SVG paths (the water lines): the library's travelling
   four-stop gradient (userSpaceOnUse, a hard bright head, a tail fading out) over a copy of each path. Kept from the
   example: the gradient geometry, its 0.16 1 0.3 1 ease, the stagger between paths, no beam under reduced motion (the
   drawing is complete without it). Ours: GSAP drives the gradient (not SMIL), tokens colour it (--beam, --beam-tail,
   else --flow), and it runs only while the visitor points at or focuses what it explains (visitor-driven feedback).
   Shared by SystemRun, BatteryLimit and PidRoutes. opts: dur (s per pass, 1.6), len (head-to-tail share of the span,
   0.3), stagger (s between paths, 0), gap (s rest between passes, 0.2), dir ('x' | 'y': the axis the water travels),
   rev (true: it travels towards the lower coordinate),
   cls (extra class on the copies). Returns { on(), off(), once() -> timeline, copies } or null. */
(function () {
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches, uid = 0, NS = 'http://www.w3.org/2000/svg';
  function ease() { if (window.CustomEase && !CustomEase.get('aq-beam')) CustomEase.create('aq-beam', 'M0,0 C0.16,1 0.3,1 1,1'); return window.CustomEase ? 'aq-beam' : 'expo.out' }
  window.AQbeam = function (svg, paths, o) {
    o = o || {}; paths = (paths || []).filter(function (p) { try { return p.getTotalLength() > 4 } catch (x) { return false } });
    if (reduce || !window.gsap || !svg || !paths.length) return null;
    var defs = svg.querySelector('defs') || svg.insertBefore(document.createElementNS(NS, 'defs'), svg.firstChild);
    var y = o.dir === 'y', box = null;
    paths.forEach(function (p) { var b = p.getBBox(); box = box ? { x0: Math.min(box.x0, b.x), y0: Math.min(box.y0, b.y), x1: Math.max(box.x1, b.x + b.width), y1: Math.max(box.y1, b.y + b.height) } : { x0: b.x, y0: b.y, x1: b.x + b.width, y1: b.y + b.height } });
    var a = y ? box.y0 : box.x0, span = Math.max(1, y ? box.y1 - box.y0 : box.x1 - box.x0), len = (o.len || 0.3) * span;
    var copies = paths.map(function (p, i) {
      var id = 'aq-beam-' + (++uid), g = document.createElementNS(NS, 'linearGradient');
      g.setAttribute('id', id); g.setAttribute('gradientUnits', 'userSpaceOnUse');
      [[0, 0], [0, 1], [0.325, 1], [1, 0]].forEach(function (s, k) { var st = document.createElementNS(NS, 'stop'); st.setAttribute('offset', s[0]); st.setAttribute('class', 'aq-beam__stop aq-beam__stop--' + k); g.appendChild(st) });
      defs.appendChild(g);
      var c = p.cloneNode(false); c.removeAttribute('style'); c.removeAttribute('data-iso-to'); c.removeAttribute('id'); c.removeAttribute('vector-effect');   // a non-scaling stroke would map the gradient in screen space
      c.setAttribute('class', 'aq-beam' + (o.cls ? ' ' + o.cls : '')); c.setAttribute('aria-hidden', 'true');
      c.setAttribute('stroke', 'url(#' + id + ')'); c.setAttribute('fill', 'none'); c.style.opacity = 0; c.style.display = 'none';   // out of the page until used
      p.parentNode.insertBefore(c, p.nextSibling);
      return { c: c, g: g, k: { p: 0 }, i: i };
    });
    // the head (offset 0) leads at h, the tail fades out behind it at t; outside them the pad stops are transparent
    function place(b) {
      var t = o.rev ? a + span + len - b.k.p * (span + len) : a - len + b.k.p * (span + len), h = o.rev ? t - len : t + len;
      if (y) { b.g.setAttribute('x1', 0); b.g.setAttribute('x2', 0); b.g.setAttribute('y1', h); b.g.setAttribute('y2', t) }
      else { b.g.setAttribute('y1', 0); b.g.setAttribute('y2', 0); b.g.setAttribute('x1', h); b.g.setAttribute('x2', t) }
    }
    copies.forEach(place);
    var loops = [], els = copies.map(function (b) { return b.c });
    return {
      on: function () {
        if (loops.length) return;
        gsap.set(els, { display: 'inline' }); gsap.to(els, { opacity: 1, duration: 0.15, overwrite: true });
        loops = copies.map(function (b) {
          b.k.p = 0; place(b);
          return gsap.to(b.k, { p: 1, duration: o.dur || 1.6, ease: ease(), delay: b.i * (o.stagger || 0), repeat: -1, repeatDelay: o.gap == null ? 0.2 : o.gap, onUpdate: function () { place(b) } });
        });
      },
      off: function () {
        loops.forEach(function (t) { t.kill() }); loops = [];
        gsap.to(els, { opacity: 0, duration: 0.1, overwrite: true, onComplete: function () { gsap.set(els, { display: 'none' }) } });
      },
      once: function (d) {
        var tl = gsap.timeline();
        copies.forEach(function (b) { var at = b.i * (o.stagger || 0); b.k.p = 0; place(b); tl.set(b.c, { opacity: 1, display: 'inline' }, at).to(b.k, { p: 1, duration: d || o.dur || 1.6, ease: ease(), onUpdate: function () { place(b) } }, at).set(b.c, { opacity: 0, display: 'none' }) });
        return tl;
      },
      copies: els
    };
  };
})();
/* SystemRun: the package builds as a drawing, then the water runs the line once.
   Desktop: the sheet fades up, the brackets drop in over each system, the equipment draws back to front and the pipes
   follow (IsoKit choreography); then the water enters at "Drinking water", a droplet riding its head, and each system
   lights as the water reaches it: its bracket turns flow, its column's rule fills and its number decodes. The water
   leaves at the point of use, whose label lights last. Phones: each system's own drawing builds as it scrolls in and
   the vertical water line fills down its column. One timeline, once, under 5 s. */
AQmotion.fx('SystemRun', function (root, m) {
  root.querySelectorAll('.aq-system-run').forEach(function (el) {
    if (!m.free(el) || !window.AQiso) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var stages = qa('.aq-system-run__stage');
    function stageOf(id) { return el.querySelector('.aq-system-run__stage[data-stage="' + id + '"]') }
    if (m.narrow()) {
      stages.forEach(function (s) {
        var svg = s.querySelector('.aq-system-run__mini'), mark = s.querySelector('.aq-system-run__mark'), text = qa('.aq-system-run__code, .aq-system-run__t, .aq-system-run__d, .aq-system-run__foot', s);
        var tl = AQiso.timeline(svg, m, { draw: 0.9, pipe: 0.5, flow: 1, drop: true });
        if (!tl) return;
        tl.from(text, { y: 16, autoAlpha: 0, duration: 0.5, stagger: 0.06, clearProps: 'transform,opacity,visibility' }, 0.1)
          .fromTo(mark, { scaleY: 0 }, { scaleY: 1, duration: 1.2, ease: 'power1.inOut', clearProps: 'transform' }, 'flow')
          .call(function () { s.classList.add('is-on') }, null, 'end');
        m.on(s, function () { tl.play() }, 'top 80%');
      });
      return;
    }
    var svg = el.querySelector('.aq-system-run__svg'); if (!svg) return;
    var brackets = qa('.aq-system-run__bracket'), endIn = el.querySelector('.aq-system-run__end--in'), endOut = el.querySelector('.aq-system-run__end--out');
    var cols = qa('.aq-system-run__item');
    var tl = AQiso.timeline(svg, m, {
      draw: 1.3, pipe: 0.7, flow: 2.4, keep: false,
      onStage: function (els, id) {
        var s = stageOf(id), b = el.querySelector('.aq-system-run__bracket[data-stage="' + id + '"]');
        if (b) { b.classList.add('is-on'); m.scramble(b.querySelector('.aq-system-run__bn'), 0) }
        if (s) { s.classList.add('is-on'); var c = s.querySelector('.aq-system-run__code'); if (c) m.scramble(c, 0) }
      }
    });
    if (!tl) return;
    tl.from(brackets, { y: -10, autoAlpha: 0, duration: 0.5, stagger: 0.12, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, 0.1)
      .from(cols, { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, 0.5);
    if (endIn) tl.from(endIn, { autoAlpha: 0, x: -12, duration: 0.4, clearProps: 'transform,opacity,visibility' }, 'flow-=0.3');
    if (endOut) tl.from(endOut, { autoAlpha: 0, x: -12, duration: 0.4, clearProps: 'transform,opacity,visibility' }, 'end-=0.2');
    m.on(el, function () { tl.play() }, 'top 70%');

    // Pointing at a system (its column, or its equipment in the drawing) sends the water through it: an animated beam
    // runs that system's lines for as long as the visitor stays. Moving across the drawing hands the beam from system
    // to system, so the reader can follow the package left to right; the column under it lights too.
    var fig = el.querySelector('.aq-system-run__fig'), beams = {}, hot = null;
    var flows = qa('.aq-iso__flow', svg).filter(function (f) { return !f.classList.contains('aq-iso__flow--drop') });
    function to(f) { var h = f.closest('[data-iso-to]'); return f.getAttribute('data-iso-to') || (h && h.getAttribute('data-iso-to')) }
    function beam(id) {
      if (!(id in beams)) beams[id] = window.AQbeam ? AQbeam(svg, flows.filter(function (f) { return to(f) === id }), { dur: 2.2, len: 0.5, stagger: 0.2 }) : null;
      return beams[id];
    }
    var pending;
    tl.eventCallback('onComplete', function () { if (pending !== undefined) heat(pending) });
    function heat(id) {
      if (tl.isActive() || !tl.progress()) { pending = id; if (tl.isActive()) return }
      if (id === hot) return;
      if (hot) {
        var b0 = beam(hot), o0 = el.querySelector('.aq-system-run__bracket[data-stage="' + hot + '"]'), c0 = stageOf(hot);
        if (b0) b0.off(); AQiso.light(svg, hot, false); if (o0) o0.classList.remove('is-on'); if (c0) c0.classList.remove('is-hot');
      }
      hot = id; if (!id) return;
      var b = beam(id), br = el.querySelector('.aq-system-run__bracket[data-stage="' + id + '"]'), c = stageOf(id);
      if (b) b.on(); AQiso.light(svg, id, true); if (br) br.classList.add('is-on'); if (c) c.classList.add('is-hot');
    }
    stages.forEach(function (s) {
      var id = s.getAttribute('data-stage');
      s.addEventListener('pointerenter', function () { heat(id) }); s.addEventListener('pointerleave', function () { heat(null) });
      s.addEventListener('focus', function () { heat(id) }); s.addEventListener('blur', function () { heat(null) });
    });
    if (fig) {
      fig.addEventListener('pointermove', function (ev) {
        var id = null; brackets.forEach(function (b) { var r = b.getBoundingClientRect(); if (ev.clientX >= r.left && ev.clientX <= r.right) id = b.getAttribute('data-stage') });
        heat(id);
      });
      fig.addEventListener('pointerleave', function () { heat(null) });
    }
  });
});
