/* SectionTrain: the train is set out, then the water proves it. The vessels rise into place like a print, the pipe
   draws, the feed lens opens; then the water runs the route once with a cluster of contaminants riding it. At each bed
   the water reaches, the kind that bed catches leaves the cluster and settles into the bed, the stage's number turns
   flow and its "catches" chip strikes; fines shed by the beds settle on the cartridge; the outlet lens opens clean.
   Phones: each stage frame rises and its caught marks settle as it scrolls in. One timeline, once, under 5 s. */
AQmotion.fx('SectionTrain', function (root, m) {
  root.querySelectorAll('.aq-section-train').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var stages = qa('.aq-section-train__stage');
    if (m.narrow()) {
      stages.forEach(function (li) {
        var mini = li.querySelector('.aq-section-train__mini'), g = qa('.aq-section-train__caught > *', li), t = li.querySelector('.aq-section-train__text');
        var tl = m.tw(gsap.timeline({ paused: true }));
        if (mini) tl.from(mini, { clipPath: 'inset(100% 0 0 0)', duration: 0.8, ease: 'power3.inOut', clearProps: 'clipPath' }, 0);
        if (t) tl.from(t, { y: 14, autoAlpha: 0, duration: 0.5, ease: 'power2.out', clearProps: 'transform,opacity,visibility' }, 0.15);
        if (g.length) tl.from(g, { y: -12, autoAlpha: 0, duration: 0.4, stagger: 0.04, ease: 'power2.in', clearProps: 'transform,opacity,visibility' }, 0.6);
        m.on(li, function () { tl.play() }, 'top 88%');
      });
      return;
    }
    var svg = el.querySelector('.aq-section-train__svg'); if (!svg) return;
    var flow = svg.querySelector('.aq-section-train__flow'), drop = svg.querySelector('.aq-section-train__drop'), swarm = svg.querySelector('.aq-section-train__swarm');
    var cols = qa('.aq-section-train__col', svg), pipes = qa('.aq-section-train__pipe, .aq-section-train__bore', svg), lenses = qa('.aq-section-train__lens', svg);
    var L = 0; try { L = flow.getTotalLength() } catch (x) {}
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    tl.from(cols, { clipPath: 'inset(100% 0 0 0)', duration: 0.9, stagger: 0.08, ease: 'power3.inOut', clearProps: 'clipPath' }, 0)
      .from(stages, { y: 16, autoAlpha: 0, duration: 0.5, stagger: 0.06, clearProps: 'transform,opacity,visibility' }, 0.2)
      .from(qa('.aq-section-train__bus, .aq-section-train__tap, .aq-section-train__bubble', svg), { autoAlpha: 0, duration: 0.5, clearProps: 'opacity,visibility' }, 0.6);
    if (window.DrawSVGPlugin) tl.fromTo(pipes, { drawSVG: '0%' }, { drawSVG: '100%', duration: 1.1, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, 0.1);
    if (lenses[0]) tl.from(lenses[0], { scale: 0.6, autoAlpha: 0, transformOrigin: '50% 40%', duration: 0.6, clearProps: 'transform,opacity,visibility' }, 0.3);
    // every caught mark waits in the swarm until its bed is reached
    var caught = qa('.aq-section-train__caught', svg);
    caught.forEach(function (c) { gsap.set(c.children, { autoAlpha: 0 }) });
    var T0 = 1.0, D = 2.6;
    if (L && window.DrawSVGPlugin) {
      var o = { p: 0 }, place = function () { var pt = flow.getPointAtLength(o.p * L); gsap.set([drop, swarm], { x: pt.x, y: pt.y }) };
      tl.set(flow, { drawSVG: '0%' }, 0).set(swarm, { display: 'inline', autoAlpha: 1 }, T0).set(drop, { opacity: 1 }, T0)
        .to(flow, { drawSVG: '100%', duration: D, ease: 'none', clearProps: 'strokeDasharray,strokeDashoffset' }, T0)
        .to(o, { p: 1, duration: D, ease: 'none', onUpdate: place, onStart: place }, T0)
        .to(drop, { opacity: 0, duration: 0.3 }, T0 + D)
        .set(swarm, { display: 'none', clearProps: 'transform,opacity,visibility' }, T0 + D);
    }
    stages.forEach(function (li, i) {
      var at = T0 + D * (parseFloat(li.getAttribute('data-at')) || 0), col = cols[i];
      tl.call(function () { li.classList.add('is-on') }, null, at);
      var chip = li.querySelector('.aq-section-train__catch');
      if (chip) tl.fromTo(chip, { scale: 1.12, autoAlpha: 0.3 }, { scale: 1, autoAlpha: 1, duration: 0.35, ease: 'power2.out', clearProps: 'transform,opacity,visibility' }, at + 0.1);
      if (!col) return;
      qa('.aq-section-train__caught', col).forEach(function (c) {
        var g = c.getAttribute('data-g');
        if (swarm && g !== 'f') tl.to(swarm.querySelectorAll('[data-g="' + g + '"]'), { autoAlpha: 0, duration: 0.25 }, at);
        tl.fromTo(c.children, { y: -16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.03, ease: 'power2.in', clearProps: 'transform,opacity,visibility' }, at + 0.05);
      });
      if (li.getAttribute('data-cut') === 'out' && lenses[1]) tl.from(lenses[1], { scale: 0.6, autoAlpha: 0, transformOrigin: '50% 40%', duration: 0.6, clearProps: 'transform,opacity,visibility' }, at - 0.3);
    });
    if (swarm) tl.set(swarm.querySelectorAll('[data-g]'), { clearProps: 'opacity,visibility' }, T0 + D + 0.05);
    m.on(el, function () { tl.play() }, 'top 70%');
  });
});
