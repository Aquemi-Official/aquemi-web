/* RuleFigures: the lead pipe's walls draw from the left, then the turbulent streaks run through it one after another
   and the eddies curl in; the velocity profile's arrows shoot out to the flat front and its envelope traces them; the
   streaks then flow (a moving dash) for about three seconds and stop. Each rule card lands with its figure drawing on
   (walls, then the water) and its number decoding. One timeline per part, once, under 5 s. */
AQmotion.fx('RuleFigures', function (root, m) {
  root.querySelectorAll('.aq-rule-figures').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var lead = el.querySelector('.aq-rule-figures__lead'), D = window.DrawSVGPlugin ? 1 : 0;
    function draw(tl, set, at, dur, st) { var dash = set.filter(function (x) { return /fl-hid|is-opt/.test(x.getAttribute('class')) }); set = set.filter(function (x) { return dash.indexOf(x) < 0 });
      if (dash.length) tl.from(dash, { autoAlpha: 0, duration: dur, clearProps: 'opacity,visibility' }, at + dur * 0.5); if (!set.length) return; if (D) tl.from(set, { drawSVG: '0%', duration: dur, stagger: st || 0, ease: 'power2.inOut' }, at); else tl.from(set, { autoAlpha: 0, duration: dur, stagger: st || 0 }, at) }
    if (lead) {
      var FR = function (t, set, v, at) { if (set && set.length !== 0) t.from(set, v, at); return t };
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
      FR(tl, qa('.aq-rule-figures__no, .aq-rule-figures__lead-p, .aq-rule-figures__rule--lead, .aq-rule-figures__lead .aq-rule-figures__dl', lead), { y: 16, autoAlpha: 0, duration: 0.6, stagger: 0.1, clearProps: 'transform,opacity,visibility' }, 0);
      draw(tl, qa('.aq-rule-figures__wall, .aq-rule-figures__lead .aq-rule-figures__ln', lead), 0, 0.9, 0.05);
      draw(tl, qa('.aq-rule-figures__streak', lead), 0.35, 1.1, 0.07);
      FR(tl, qa('.aq-rule-figures__eddy', lead), { scale: 0, rotation: -120, transformOrigin: '50% 50%', autoAlpha: 0, duration: 0.6, stagger: 0.08, ease: 'back.out(2)', clearProps: 'transform,opacity,visibility' }, 0.9);
      FR(tl, qa('.aq-rule-figures__arrow', lead), { scaleX: 0, transformOrigin: '0% 50%', duration: 0.5, stagger: 0.04, clearProps: 'transform' }, 1.3);
      draw(tl, qa('.aq-rule-figures__env, .aq-rule-figures__lead .aq-rule-figures__dim', lead), 1.6, 0.6);
      var streaks = qa('.aq-rule-figures__streak', lead);
      tl.add(function () {
        streaks.forEach(function (s, i) { gsap.set(s, { strokeDasharray: '18 10' });
          m.tw(gsap.fromTo(s, { strokeDashoffset: 0 }, { strokeDashoffset: -(84 + i * 6), duration: 3, ease: 'sine.inOut', onComplete: function () { gsap.set(s, { clearProps: 'strokeDasharray,strokeDashoffset' }) } })) }) }, 2.1);
      m.on(lead, function () { tl.play() }, 'top 80%');
    }
    qa('.aq-rule-figures__card').forEach(function (c, i) {
      if (c.offsetParent === null) return;
      var t2 = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })), k = (i % 3) * 0.12;
      t2.from(c, { y: 18, autoAlpha: 0, duration: 0.6, clearProps: 'transform,opacity,visibility' }, k);
      draw(t2, qa('.aq-rule-figures__ln, .aq-rule-figures__fill, .aq-rule-figures__th, .aq-rule-figures__bub', c), k + 0.15, 0.8, 0.03);
      draw(t2, qa('.aq-rule-figures__fl, .aq-rule-figures__ring, .aq-rule-figures__dim', c), k + 0.7, 0.7, 0.05);
      var n = c.querySelector('.aq-rule-figures__n'); if (n && window.ScrambleTextPlugin) t2.to(n, { scrambleText: { text: n.textContent, chars: '0123456789' }, duration: 0.5 }, k + 0.2);
      m.on(c, function () { t2.play() }, 'top 88%');
    });
  });
});
