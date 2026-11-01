/* HmiTrend: the panel powers on. The screen opens from a bright centre line, the tabs decode and the lamps test in
   turn; the grid and the limit lines run out from the time axis, each label arriving with its line; then the reading
   is written left to right like a live pen. As the pen passes the trend window it shades, at the rule's mark the flag
   strikes, the banner flashes twice and the trend row in the alarm summary lights (it stays flagged: a state, not
   decoration); the live dot lands at the pen and pulses twice. Table rows follow. One timeline, once, < 5 s. */
AQmotion.fx('HmiTrend', function (root, m) {
  root.querySelectorAll('.aq-hmi-trend').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var q = function (s) { return el.querySelector(s) }, qa = function (s) { return [].slice.call(el.querySelectorAll(s)) };
    var flagAt = parseFloat(el.getAttribute('data-flag')) || 0.84, PEN = 1.9, T = 1.25;
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    tl.fromTo(q('.aq-hmi-trend__screen'), { clipPath: 'inset(49.5% 0 49.5% 0)' }, { clipPath: 'inset(0% 0 0% 0)', duration: 0.6, ease: 'power4.inOut', clearProps: 'clipPath' }, 0);
    if (window.ScrambleTextPlugin) qa('.aq-hmi-trend__tab').forEach(function (t, i) { var s = t.textContent; tl.to(t, { duration: 0.5, scrambleText: { text: s, chars: 'upperCase', speed: 0.6 }, ease: 'none' }, 0.45 + i * 0.08) });
    tl.from(qa('.aq-hmi-trend__lamps .aq-hmi-trend__pri'), { autoAlpha: 0.15, duration: 0.15, stagger: 0.1, ease: 'none', clearProps: 'opacity,visibility' }, 0.5);
    tl.from(q('.aq-hmi-trend__grid'), { autoAlpha: 0, duration: 0.5, clearProps: 'opacity,visibility' }, 0.55);
    tl.from(qa('.aq-hmi-trend__lim'), { scaleX: 0, transformOrigin: '0% 50%', duration: 0.7, stagger: 0.12, ease: 'power2.out', clearProps: 'transform' }, 0.7);
    tl.from(qa('.aq-hmi-trend__ll'), { x: -10, autoAlpha: 0, duration: 0.4, stagger: 0.12, clearProps: 'transform,opacity,visibility' }, 1.0);
    tl.from(qa('.aq-hmi-trend__zone, .aq-hmi-trend__ax'), { autoAlpha: 0, duration: 0.4, clearProps: 'opacity,visibility' }, 0.9);
    var run = q('.aq-hmi-trend__run');
    if (run) tl.fromTo(run, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: PEN, ease: 'none', clearProps: 'clipPath' }, T);
    // the phosphor glow (FxPhosphor) is written with the pen: its u_pen follows the canvas's --pen
    var glow = q('.aq-hmi-trend__plot > .aq-fx-shader');
    if (glow) tl.fromTo(glow, { '--pen': 0 }, { '--pen': 1, duration: PEN, ease: 'none' }, T);
    var win = q('.aq-hmi-trend__win'), fit = q('.aq-hmi-trend__fit'), mark = q('.aq-hmi-trend__mark'), flag = q('.aq-hmi-trend__flag'), bn = q('.aq-hmi-trend__banner'), row = q('.aq-hmi-trend__row--trend');
    var tw = T + PEN * 0.69, tf = T + PEN * flagAt;
    if (win) tl.from(win, { autoAlpha: 0, duration: 0.4, clearProps: 'opacity,visibility' }, tw);
    if (fit) tl.from(fit, { autoAlpha: 0, duration: 0.3, clearProps: 'opacity,visibility' }, tw + 0.2);
    if (mark) tl.from(mark, { autoAlpha: 0, duration: 0.15, clearProps: 'opacity,visibility' }, tf);
    if (flag) tl.from(flag, { scale: 1.3, autoAlpha: 0, duration: 0.35, ease: 'back.out(2)', clearProps: 'transform,opacity,visibility' }, tf);
    if (bn) tl.fromTo(bn, { autoAlpha: 1 }, { autoAlpha: 0.25, duration: 0.18, repeat: 3, yoyo: true, ease: 'none', clearProps: 'opacity,visibility' }, tf);
    if (row) tl.call(function () { row.classList.add('is-flag') }, null, tf + 0.1);
    var dot = q('.aq-hmi-trend__dot');
    if (dot) { tl.from(dot, { autoAlpha: 0, duration: 0.2, clearProps: 'opacity,visibility' }, T + PEN);
      tl.to(dot, { scale: 1.6, duration: 0.25, repeat: 3, yoyo: true, ease: 'sine.inOut', clearProps: 'transform' }, T + PEN + 0.3) }
    tl.from(qa('.aq-hmi-trend__table thead, .aq-hmi-trend__row'), { y: 10, autoAlpha: 0, duration: 0.45, stagger: 0.08, clearProps: 'transform,opacity,visibility' }, 1.2);
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
