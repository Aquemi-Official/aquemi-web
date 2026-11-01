/* LoopCircuit: the control screen powers on (a bright line opens to the full screen), the pipes and equipment draw
   on, then the water runs: from generation into the tank (the level rises), out through the pump and exchanger, up
   and back past the points of use and return sensors, home through the spray ball (the jets open). Each stage's tag
   and column light as the water reaches them; the loop's water then runs as a moving dash for a second and stops.
   One timeline, once, under 5 s. */
AQmotion.fx('LoopCircuit', function (root, m) {
  root.querySelectorAll('.aq-loop-circuit').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var svg = el.querySelector('.aq-loop-circuit__svg'), screen = el.querySelector('.aq-loop-circuit__screen'), stages = qa('.aq-loop-circuit__stage');
    var FR = function (t, set, v, at) { if (set && set.length !== 0) t.from(set, v, at); return t };
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })), D = !!window.DrawSVGPlugin;
    tl.from(stages, { y: 16, autoAlpha: 0, duration: 0.6, stagger: 0.06, clearProps: 'transform,opacity,visibility' }, 0.1);
    if (!svg || !screen || screen.offsetParent === null) { m.on(el, function () { tl.play() }, 'top 80%'); return }
    tl.fromTo(screen, { clipPath: 'inset(50% 0 50% 0)' }, { clipPath: 'inset(0% 0 0% 0)', duration: 0.6, ease: 'power4.inOut', clearProps: 'clipPath' }, 0);
    var lines = qa('.aq-loop-circuit__pipe, .aq-loop-circuit__eq:not(.is-opt), .aq-loop-circuit__ln, .aq-loop-circuit__thin, .aq-loop-circuit__lead', svg);
    if (D) tl.from(lines, { drawSVG: '0%', duration: 0.9, stagger: 0.008, ease: 'power2.inOut' }, 0.35);
    else tl.from(lines, { autoAlpha: 0, duration: 0.6 }, 0.35);
    FR(tl, qa('.aq-loop-circuit__eq.is-opt, .aq-loop-circuit__hid, .aq-loop-circuit__tx, .aq-loop-circuit__chev', svg), { autoAlpha: 0, duration: 0.4, clearProps: 'opacity,visibility' }, 1.1);
    FR(tl, qa('.aq-loop-circuit__tag', svg), { autoAlpha: 0, scale: 0.6, transformOrigin: '50% 50%', duration: 0.35, stagger: 0.05, ease: 'back.out(2)', clearProps: 'transform,opacity,visibility' }, 1.0);
    var feed = svg.querySelector('.aq-loop-circuit__flow--feed'), loop = svg.querySelector('.aq-loop-circuit__flow--loop'), water = svg.querySelector('.aq-loop-circuit__water');
    var tags = qa('.aq-loop-circuit__tag', svg), byNode = {};
    tags.forEach(function (t) { byNode[t.getAttribute('data-node')] = t });
    function light(id) { var t = byNode[id]; if (t) t.classList.add('is-on'); stages.forEach(function (s) { if (s.getAttribute('data-node') === id) s.classList.add('is-on') }) }
    var T0 = 1.4;
    if (feed) { if (D) tl.from(feed, { drawSVG: '0%', duration: 0.5, ease: 'none' }, T0); tl.add(function () { light('gen') }, T0) }
    if (water) tl.from(water, { scaleY: 0, transformOrigin: '50% 100%', duration: 0.7, ease: 'power2.out', clearProps: 'transform' }, T0 + 0.4);
    tl.add(function () { light('tank') }, T0 + 0.5);
    if (loop) {
      var L = loop.getTotalLength(), stops = [];
      tags.forEach(function (t) { var id = t.getAttribute('data-node'); if (id === 'gen' || id === 'tank') return;
        var a = (t.getAttribute('data-at') || '').split(',').map(Number), best = 0, bd = 1e9;
        for (var s = 0; s <= L; s += 4) { var p = loop.getPointAtLength(s), d = (p.x - a[0]) * (p.x - a[0]) + (p.y - a[1]) * (p.y - a[1]); if (d < bd) { bd = d; best = s } }
        stops.push({ id: id, f: best / L }) });
      var dur = 1.9, T1 = T0 + 0.6;
      if (D) tl.from(loop, { drawSVG: '0%', duration: dur, ease: 'none' }, T1);
      stops.forEach(function (s) { tl.add(function () { light(s.id) }, T1 + s.f * dur) });
      if (window.MotionPathPlugin) {
        var dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); dot.setAttribute('r', '7'); dot.setAttribute('class', 'aq-loop-circuit__dot'); svg.appendChild(dot);
        gsap.set(dot, { autoAlpha: 0 });
        tl.set(dot, { autoAlpha: 1 }, T1).to(dot, { motionPath: { path: loop, align: loop, alignOrigin: [0.5, 0.5] }, duration: dur, ease: 'none' }, T1).set(dot, { autoAlpha: 0 }, T1 + dur);
        tl.add(function () { if (dot.parentNode) dot.parentNode.removeChild(dot) }, T1 + dur + 0.05);
      }
      FR(tl, qa('.aq-loop-circuit__jet', svg), { autoAlpha: 0, scale: 0.2, transformOrigin: '50% 0%', duration: 0.4, stagger: 0.03, clearProps: 'transform,opacity,visibility' }, T1 + dur - 0.1);
      tl.fromTo(loop, { strokeDasharray: '14 10', strokeDashoffset: 0 }, { strokeDashoffset: -96, duration: 1, ease: 'sine.inOut', immediateRender: false, clearProps: 'strokeDasharray,strokeDashoffset' }, T1 + dur + 0.1);
    }
    m.on(el, function () { tl.play() }, 'top 70%');
  });
});
