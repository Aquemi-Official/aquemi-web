/* WindingRoute: the water travels the route. The feed fan draws in, then the pipe and its flow line draw left to right
   while a droplet rides the head of the water; each stop lights as the droplet reaches it (node seats with a flow ring,
   glyph prints in, the column below rises and its code decodes); over a gas stop the bubbles rise out of the pipe;
   the outlet fan draws last. Phones: each stop's own bend draws in turn and lights its stop.
   One timeline, once, under 5 s. */
AQmotion.fx('WindingRoute', function (root, m) {
  root.querySelectorAll('.aq-winding-route').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var stops = qa('.aq-winding-route__stop'), narrow = m.narrow(), n = stops.length;
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    var FLOW = getComputedStyle(document.documentElement).getPropertyValue('--flow').trim();
    stops.forEach(function (s) { gsap.set(qa('.aq-winding-route__node, .aq-winding-route__glyph, .aq-winding-route__text', s), { autoAlpha: 0 }) });
    function light(s, at) {
      var node = s.querySelector('.aq-winding-route__node'), g = s.querySelector('.aq-winding-route__glyph'), t = s.querySelector('.aq-winding-route__text'), code = s.querySelector('.aq-winding-route__code');
      tl.set(node, { autoAlpha: 1 }, at)
        .fromTo(node, { scale: 0.2, boxShadow: '0 0 0 14px ' + FLOW }, { scale: 1, boxShadow: '0 0 0 4px rgba(0,0,0,0)', duration: 0.6, ease: 'back.out(2.2)', clearProps: 'transform,boxShadow' }, at);
      if (g) tl.set(g, { autoAlpha: 1 }, at).fromTo(g, { clipPath: s.classList.contains('is-high') ? 'inset(0 0 100% 0)' : 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0% 0)', duration: 0.6, ease: 'power2.inOut', clearProps: 'clipPath' }, at + 0.05);
      tl.set(t, { autoAlpha: 1 }, at).from(t.children, { y: 16, autoAlpha: 0, duration: 0.5, stagger: 0.06, clearProps: 'transform,opacity,visibility' }, at + 0.05);
      if (code) tl.call(function () { m.scramble(code, 0) }, null, at);
      var gas = qa('.aq-winding-route__gas i', s);
      if (gas.length) tl.from(gas, { x: 0, y: 0, scale: 0, autoAlpha: 0, duration: 1.1, ease: 'power2.out', stagger: 0.07, clearProps: 'transform,opacity,visibility' }, at + 0.1);
    }
    if (narrow) {
      stops.forEach(function (s, i) {
        var seg = s.querySelector('.aq-winding-route__seg path'), tail = s.querySelector('.aq-winding-route__tail'), at = 0.1 + i * 0.32;
        if (seg) tl.fromTo(seg.parentNode, { clipPath: 'inset(0 -50% 100% -50%)' }, { clipPath: 'inset(0 -50% 0% -50%)', duration: 0.2, ease: 'none', clearProps: 'clipPath' }, at);
        if (tail) tl.fromTo(tail, { scaleY: 0 }, { scaleY: 1, transformOrigin: '50% 0', duration: 0.14, ease: 'none', clearProps: 'transform' }, at + 0.2);
        light(s, at + 0.1);
      });
      m.on(el, function () { tl.play() }, 'top 80%');
      return;
    }
    var svg = el.querySelector('.aq-winding-route__line'), flow = svg.querySelector('.aq-winding-route__flow');
    var drop = el.querySelector('.aq-winding-route__drop');
    var run = 2.8, t0 = 0.45;
    // The route only ever runs left to right, so a wipe draws it exactly (DrawSVG cannot measure a stretched non-scaling stroke)
    var fw = 24 / (100 * n);
    tl.fromTo(svg, { clipPath: 'inset(-20% 100% -20% 0)' }, { clipPath: 'inset(-20% ' + (100 - fw * 100).toFixed(2) + '% -20% 0)', duration: t0, ease: 'power2.in' }, 0)
      .to(svg, { clipPath: 'inset(-20% ' + (fw * 100).toFixed(2) + '% -20% 0)', duration: run, ease: 'none' }, t0)
      .to(svg, { clipPath: 'inset(-20% 0% -20% 0)', duration: 0.45, ease: 'power2.out', clearProps: 'clipPath' }, t0 + run);
    // When the water reaches each stop: the length along the wave at the stop's x (x = 100 i + 50 in the viewBox)
    var at = stops.map(function (s, i) { return t0 + run * (i + 0.5) / n });
    at = stops.map(function (s, i) { return t0 + run * (100 * i + 50 - 24) / (100 * n - 48) });
    stops.forEach(function (s, i) { light(s, at[i]) });
    // The droplet rides the wipe's edge: x moves with it, y follows the wave at that x (sampled once from the path)
    if (drop) {
      var Wv = 100 * n, tab = [];
      try { var L = flow.getTotalLength(); for (var k = 0; k <= 400; k++) { var p = flow.getPointAtLength(L * k / 400); tab.push([p.x, p.y]) } } catch (x) {}
      var yAt = function (x) { for (var k = 1; k < tab.length; k++) if (tab[k][0] >= x) { var a = tab[k - 1], b = tab[k], f = (x - a[0]) / ((b[0] - a[0]) || 1); return a[1] + (b[1] - a[1]) * f } return 50 };
      var pr = { x: 24 };
      tl.set(drop, { display: 'block', autoAlpha: 1 }, t0)
        .to(pr, { x: Wv - 24, duration: run, ease: 'none', onUpdate: function () {
          var w = svg.clientWidth, h = svg.clientHeight, d = drop.offsetWidth / 2;
          gsap.set(drop, { x: pr.x / Wv * w - d, y: yAt(pr.x) / 100 * h - d });
        } }, t0)
        .to(drop, { autoAlpha: 0, scale: 2.4, duration: 0.4 }, t0 + run)
        .set(drop, { display: 'none', clearProps: 'transform,opacity,visibility' }, t0 + run + 0.4);
    }
    m.on(el, function () { tl.play() }, 'top 75%');

    // Ported from Subframe Motion "Race replay" (race-replay), MIT, (c) 2026 Subframe
    // Once the water has run, the route becomes a replay the visitor drives: one value (0 to 1) binds the water's
    // reach, the droplet's place on the wave and the stage it has reached, as the library binds line, marker and time.
    // Pointing along the band scrubs it; a range input below does the same from the keyboard (arrow keys, Home, End).
    // Leaving the band lets the water run on to the outlet and rest full again.
    if (!drop || !flow) return;
    var Wv = 100 * n, f = { v: 1 }, x0 = 24 / Wv, x1 = 1 - x0, scrub = false;
    var lab = document.createElement('label'); lab.className = 'aq-winding-route__scrub';
    lab.innerHTML = '<span class="aq-winding-route__scrub-t">Follow the water</span><input type="range" min="0" max="100" step="1" value="100" aria-valuetext="">';
    el.appendChild(lab); var input = lab.querySelector('input');
    gsap.set(lab, { autoAlpha: 0 }); tl.to(lab, { autoAlpha: 1, duration: 0.4, clearProps: 'opacity,visibility' }, '-=0.3');
    function paint() {
      var v = Math.max(0, Math.min(1, f.v)), x = x0 + v * (x1 - x0), w = svg.clientWidth, h = svg.clientHeight, d = drop.offsetWidth / 2;
      var tab = paint.tab || (paint.tab = (function () { var t = []; try { var L = flow.getTotalLength(); for (var k = 0; k <= 400; k++) { var p = flow.getPointAtLength(L * k / 400); t.push([p.x, p.y]) } } catch (e) {} return t })());
      var X = x * Wv, y = 50; for (var k = 1; k < tab.length; k++) if (tab[k][0] >= X) { var a = tab[k - 1], b = tab[k], q = (X - a[0]) / ((b[0] - a[0]) || 1); y = a[1] + (b[1] - a[1]) * q; break }
      gsap.set(flow, { clipPath: 'inset(-50% ' + ((1 - x) * 100).toFixed(2) + '% -50% 0)' });
      gsap.set(drop, { display: v < 1 ? 'block' : 'none', autoAlpha: 1, scale: 1, x: x * w - d, y: y / 100 * h - d });
      var cur = -1; stops.forEach(function (s, i) { var sx = (100 * i + 50) / Wv, wet = x >= sx - 0.002; s.classList.toggle('is-dry', !wet); if (wet) cur = i });
      stops.forEach(function (s, i) { s.classList.toggle('is-cur', v < 1 && i === cur) });
      input.value = Math.round(v * 100);
      var t = cur >= 0 ? stops[cur].querySelector('.aq-winding-route__t') : null;
      input.setAttribute('aria-valuetext', (t ? t.textContent : 'Feed') + ', ' + Math.round(v * 100) + ' %');
    }
    var qv = gsap.quickTo(f, 'v', { duration: 0.35, ease: 'power3.out', onUpdate: paint });
    function to(v) { if (tl.isActive()) return; scrub = true; qv(v) }
    function rest() { if (!scrub) return; scrub = false; m.tw(gsap.to(f, { v: 1, duration: 0.9 * (1 - f.v) + 0.2, ease: 'power1.inOut', onUpdate: paint, overwrite: true })) }
    var band = el.querySelector('.aq-winding-route__stops');
    el.addEventListener('pointermove', function (ev) {
      if (ev.pointerType !== 'mouse' || lab.contains(ev.target)) return;
      var r = svg.getBoundingClientRect(); if (ev.clientY > r.bottom + 8) return;
      to(((ev.clientX - r.left) / r.width - x0) / (x1 - x0));
    });
    el.addEventListener('pointerleave', rest);
    input.addEventListener('input', function () { if (tl.isActive()) tl.progress(1); scrub = true; gsap.killTweensOf(f); f.v = input.value / 100; paint() });
    input.addEventListener('blur', rest);
  });
});
