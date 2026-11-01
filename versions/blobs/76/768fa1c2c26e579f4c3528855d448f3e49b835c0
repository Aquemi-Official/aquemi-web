/* WetRunHmi: the screen powers up dry, then the skid runs with water. The panel wipes in from the top like a display
   coming on, the mimic's symbols draw, the switch sits on the dry position for a beat (empty lines, blank readouts,
   unlit findings); then it flips to water: the water runs the pipe in order (feed, pump, RO, outlet, and down the drain
   branch), the readout bars fill, the trend draws across the record, and each finding's marker lights in turn while
   its alarm-list row rises beside the screen. Ends on the water position, as the page reads without script. Under 5 s.
   The switch itself is the reader's (the look's click handler); markers swell on hover or focus of their row (CSS). */
AQmotion.fx('WetRunHmi', function (root, m) {
  var D = window.DrawSVGPlugin;
  [].forEach.call(root.querySelectorAll('.aq-wet-run-hmi'), function (el) {
    var scr = el.querySelector('.aq-wet-run-hmi__screen'); if (!scr) return;
    m.claim(scr); m.claim(el.querySelector('.aq-wet-run-hmi__list'));
    var qa = function (s) { return [].slice.call(el.querySelectorAll(s)) };
    var btn = function (k) { return scr.querySelector('[data-wrh-mode="' + k + '"]') };
    function mode(wet) { scr.classList.toggle('is-wet', wet); scr.classList.toggle('is-dry', !wet);
      if (btn('wet')) btn('wet').setAttribute('aria-pressed', wet ? 'true' : 'false'); if (btn('dry')) btn('dry').setAttribute('aria-pressed', wet ? 'false' : 'true') }
    var fl = qa('.aq-wet-run-hmi__fl').sort(function (a, b) { return a.getAttribute('data-run') - b.getAttribute('data-run') });
    var eq = qa('.aq-wet-run-hmi__eq, .aq-wet-run-hmi__thin'), mk = qa('.aq-wet-run-hmi__mk'), pts = qa('.aq-wet-run-hmi__pt'), rd = qa('.aq-wet-run-hmi__rdv'), tr = qa('.aq-wet-run-hmi__trend');
    var tl = gsap.timeline({ paused: true }); m.tw(tl);
    tl.add(function () { mode(false) }, 0);
    tl.fromTo(scr, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.7, ease: 'power2.inOut', clearProps: 'clipPath' }, 0);
    if (D && eq.length) tl.fromTo(eq, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.8, stagger: 0.03, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, 0.3);
    tl.from(pts, { autoAlpha: 0, x: -12, duration: 0.5, stagger: 0.12, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, 0.3);
    tl.add(function () { mode(true) }, 1.4);
    if (D && fl.length) tl.fromTo(fl, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.32, stagger: 0.3, ease: 'none', clearProps: 'strokeDasharray,strokeDashoffset' }, 1.4);
    if (rd.length) tl.fromTo(rd, { scaleX: 0 }, { scaleX: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out', clearProps: 'transform' }, 2.1);
    if (D && tr.length) tl.fromTo(tr, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.9, ease: 'power1.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, 2.4);
    mk.forEach(function (k, i) { tl.fromTo(k, { scale: 0.4, autoAlpha: 0.3 }, { scale: 1, autoAlpha: 1, duration: 0.4, ease: 'back.out(2.2)', clearProps: 'transform,opacity,visibility' }, 2.2 + i * 0.45) });
    tl.add(function () { mode(true) });
    m.on(scr, function () { tl.play() }, 'top 75%');
  });
});
