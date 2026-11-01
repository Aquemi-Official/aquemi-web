/* HoldTimeline: the macro comes into focus, then the water climbs the line. The pipe close-up settles in (scale and
   fade), its engraving lines draw from the seam outwards, the weld bead rings on and the water creeps once along the
   centre. Then one flow drop runs the rising line from the left edge, laying it behind it (clip), stage by stage:
   each node lands as the drop arrives, its pole grows out of the node and the callout unrolls from the pole. At a
   hold point the drop waits a beat, the ring opens round the node and the "Hold point" stamp strikes. The boxed
   figure counts up when the drop reaches it; the drop leaves the frame at the top right and rests there. Under 5 s.
   Phones: the macro settles in; each stage's node lands and its text rises as it scrolls in. Hover swells a node and
   lights its pole (CSS). */
AQmotion.fx('HoldTimeline', function (root, m) {
  var CLEAR = 'transform,opacity,visibility,clipPath', D = window.DrawSVGPlugin;
  [].forEach.call(root.querySelectorAll('.aq-hold-timeline-sec'), function (sec) {
    var fig = sec.querySelector('.aq-hold-timeline'); if (!fig) return;
    var q = function (s, el) { return (el || sec).querySelector(s) }, qa = function (s, el) { return [].slice.call((el || sec).querySelectorAll(s)) };
    var macro = q('.aq-hold-timeline__macro'), band = q('.aq-hold-timeline__band'), sts = qa('.aq-hold-timeline__st');
    m.claim(fig); if (macro) m.claim(macro);

    // Macro: focus pull, engraving from the seam outwards, bead, water
    function macroIn(tl, at) {
      if (!macro) return;
      var ct = qa('.aq-hold-timeline__ct, .aq-hold-timeline__edge', macro), bead = qa('.aq-hold-timeline__bead, .aq-hold-timeline__seam', macro), water = q('.aq-hold-timeline__water', macro);
      tl.fromTo(macro, { autoAlpha: 0, scale: 1.08 }, { autoAlpha: op, scale: 1, duration: 2, ease: 'power2.out', clearProps: 'transform,opacity,visibility' }, at);
      if (D && ct.length) {
        var mid = (ct.length - 1) / 2;
        tl.fromTo(ct, { drawSVG: '30% 30%' }, { drawSVG: '0% 100%', duration: 1.5, ease: 'power2.inOut', stagger: function (i) { return Math.abs(i - mid) * 0.05 }, clearProps: 'strokeDasharray,strokeDashoffset' }, at + 0.1);
      }
      if (bead.length) tl.fromTo(bead, { autoAlpha: 0, scale: 0.94, transformOrigin: '50% 50%' }, { autoAlpha: 1, scale: 1, duration: 0.6, ease: 'power3.out', stagger: 0.12, clearProps: 'transform,opacity,visibility' }, at + 0.9);
      if (water) tl.fromTo(water, { strokeDashoffset: 0 }, { strokeDashoffset: -36 * 8, duration: 3, ease: 'power1.out' }, at + 0.6);
    }
    function parts(st) {
      return { node: q('.aq-hold-timeline__node', st), halo: q('.aq-hold-timeline__halo', st), pole: q('.aq-hold-timeline__pole', st), c: q('.aq-hold-timeline__c', st),
        hk: q('.aq-hold-timeline__hk', st), fig: q('.aq-hold-timeline__fig', st), up: st.classList.contains('is-up'), hold: st.classList.contains('is-hold') };
    }
    var P = sts.map(parts);
    function land(tl, p, at, wide) {
      tl.fromTo(p.node, { scale: 0 }, { scale: 1, duration: 0.3, ease: 'power3.out', clearProps: 'transform' }, at);
      if (p.hold && p.halo) tl.fromTo(p.halo, { scale: 0.3, autoAlpha: 0 }, { scale: 1, autoAlpha: 0.45, duration: 0.55, ease: 'power2.out', clearProps: 'transform' }, at + 0.05);
      if (wide && p.pole) tl.fromTo(p.pole, { scaleY: 0 }, { scaleY: 1, duration: 0.3, ease: 'power2.out', clearProps: 'transform' }, at + 0.05);
      if (wide) tl.fromTo(p.c, { clipPath: p.up ? 'inset(100% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)', autoAlpha: 1 }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.6, ease: 'power3.out', clearProps: CLEAR }, at + 0.2);
      else tl.fromTo(p.c, { x: -14, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.55, ease: 'power3.out', clearProps: CLEAR }, at + 0.1);
      if (p.hk) tl.fromTo(p.hk, { scale: 1.6, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.28, ease: 'power4.in', clearProps: CLEAR }, at + (wide ? 0.55 : 0.4));
      if (p.fig) {
        tl.fromTo(p.fig, { clipPath: 'inset(0% 100% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.5, ease: 'power3.inOut', clearProps: 'clipPath' }, at + 0.35);
        tl.call(function () { m.count(p.fig, { now: true, duration: 1.1 }) }, null, at + 0.4);
      }
    }
    function hide(p, wide) {
      gsap.set(p.node, { scale: 0 });
      if (p.hold && p.halo) gsap.set(p.halo, { autoAlpha: 0 });
      if (wide && p.pole) gsap.set(p.pole, { scaleY: 0 });
      gsap.set(p.c, wide ? { clipPath: p.up ? 'inset(100% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' } : { autoAlpha: 0 });
      if (p.hk) gsap.set(p.hk, { autoAlpha: 0 });
    }

    var wide = band && getComputedStyle(band).display !== 'none';
    var op = macro ? +getComputedStyle(macro).opacity || 1 : 1;
    if (macro) { gsap.set(macro, { autoAlpha: 0 }); m.on(sec, function () { macroIn(m.tw(gsap.timeline()), 0) }, 'top 80%') }

    if (wide) {
      var svg = q('svg', band), run = q('.aq-hold-timeline__run', band), rail = q('.aq-hold-timeline__rail', band), drop = q('.aq-hold-timeline__drop', band);
      P.forEach(function (p) { hide(p, true) });
      if (svg) gsap.set(svg, { clipPath: 'inset(0% 100% 0% 0%)' });
      if (drop) gsap.set(drop, { autoAlpha: 0 });
      m.on(fig, function () {
        var tl = m.tw(gsap.timeline({ delay: 0.3 })), br = band.getBoundingClientRect(), W = br.width, Hh = br.height;
        // waypoints in band px; the drop rests at the band's top right (0, 0 offset there)
        var pts = [[0, Hh]].concat(P.map(function (p) { var r = p.node.getBoundingClientRect(); return [r.left + r.width / 2 - br.left, r.top + r.height / 2 - br.top] })).concat([[W, 0]]);
        if (drop) tl.set(drop, { x: -W, y: Hh, autoAlpha: 1 }, 0);
        if (svg) tl.set(svg, { clipPath: 'inset(0% 100% 0% 0%)' }, 0);
        var t = 0;
        for (var k = 1; k < pts.length; k++) {
          var a = pts[k - 1], b = pts[k], d = Math.min(0.5, Math.max(0.18, Math.hypot(b[0] - a[0], b[1] - a[1]) / 650));
          if (drop) tl.to(drop, { x: b[0] - W, y: b[1], duration: d, ease: 'none' }, t);
          if (svg) tl.to(svg, { clipPath: 'inset(0% ' + Math.max(0, 100 - b[0] / W * 100).toFixed(2) + '% 0% 0%)', duration: d, ease: 'none' }, t);
          t += d;
          var p = P[k - 1];
          if (p) { land(tl, p, t, true); t += p.hold ? 0.22 : 0.06 }
        }
        if (svg) tl.set(svg, { clearProps: 'clipPath' }, t + 0.01);
        if (drop) tl.set(drop, { clearProps: 'transform,opacity,visibility' }, t + 0.01);
        if (rail) tl.fromTo(rail, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5, clearProps: 'opacity,visibility' }, 0);
        tl.call(function () { ready = true }, null, t + 0.05);
      }, 'top 72%');

      // Ported from Subframe Motion "Cue scrubber" (cue-scrubber), MIT, (c) 2026 Subframe
      // The stages are chapters the visitor can seek: pointing at (or focusing into) a stage sends the water back down
      // or up the line, node by node, to that stage (each leg 120 ms, cubic-bezier(.2,.8,.2,1)); the water line beyond it
      // empties and the stages still to come step back, so the reader sees how much of the project lies ahead of that
      // hold point. Leaving the timeline lets the water run on to the top again.
      var ready = false, at = P.length + 1, legs = null, cueEase = window.CustomEase ? (CustomEase.get('aq-ledger') || CustomEase.create('aq-ledger', 'M0,0 C0.2,0.8 0.2,1 1,1')) : 'power2.out';
      function seek(k) {   // k: waypoint index, 1..n the stages, n+1 the rest at the top right
        if (!ready || !drop || !run) return;
        var br = band.getBoundingClientRect(), W = br.width, Hh = br.height;
        var pts = [[0, Hh]].concat(P.map(function (p) { var r = p.node.getBoundingClientRect(); return [r.left + r.width / 2 - br.left, r.top + r.height / 2 - br.top] })).concat([[W, 0]]);
        if (legs) legs.kill();
        legs = m.tw(gsap.timeline());
        var step = k > at ? 1 : -1, t = 0;
        for (var j = at + step; step > 0 ? j <= k : j >= k; j += step) {
          var b = pts[j];
          legs.to(drop, { x: b[0] - W, y: b[1], duration: 0.12, ease: j === k ? cueEase : 'none' }, t);
          legs.to(run, { clipPath: 'inset(-5% ' + Math.max(0, 100 - b[0] / W * 100).toFixed(2) + '% -5% 0%)', duration: 0.12, ease: 'none' }, t);
          t += 0.12;
        }
        if (k === P.length + 1) legs.set(run, { clearProps: 'clipPath' });
        at = k;
        sts.forEach(function (s, i) { s.classList.toggle('is-ahead', k <= P.length && i + 1 > k); s.classList.toggle('is-cue', i + 1 === k) });
      }
      sts.forEach(function (s, i) {
        s.addEventListener('pointerenter', function () { seek(i + 1) });
        s.addEventListener('focusin', function () { seek(i + 1) });
      });
      fig.addEventListener('pointerleave', function () { seek(P.length + 1) });
      fig.addEventListener('focusout', function (ev) { if (!fig.contains(ev.relatedTarget)) seek(P.length + 1) });
      return;
    }
    P.forEach(function (p, i) {
      hide(p, false);
      m.on(sts[i], function () { land(m.tw(gsap.timeline()), p, 0, false) }, 'top 86%');
    });
  });
});
