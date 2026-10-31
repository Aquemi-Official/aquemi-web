/* VisitRoute: the visit is walked stop by stop. Each stop's figure frame opens, its vignette wipes in like a print,
   the numbered tag pops onto the corner and the name and line rise; then the dashed route runs on to the next stop
   (--aq-run scales the run, --aq-turn opens the U-turn and the lead-in of a right-to-left row), and the next stop pops
   as the line arrives. The sign-off stop's tick lands last with a small overshoot. Desktop: one timeline (under 4.5 s);
   phones: each stop as it scrolls in, queued behind the line so no stop pops before the route reaches it. */
AQmotion.fx('VisitRoute', function (root, m) {
  var CLEAR = 'transform,opacity,visibility';
  function pop(tl, st, at) {
    var fig = st.querySelector('.aq-visit-route__fig'), sp = st.querySelector('.aq-visit-route__spot'), n = st.querySelector('.aq-visit-route__n'),
      txt = st.querySelectorAll('.aq-visit-route__cap, .aq-visit-route__t, .aq-visit-route__d'), end = st.classList.contains('is-end');
    if (fig) tl.fromTo(fig, { scale: 0.88, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.4, ease: 'back.out(1.8)', clearProps: CLEAR }, at);
    if (sp) tl.fromTo(sp, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 0.6, ease: 'power3.inOut', clearProps: 'clipPath' }, at + 0.05);
    if (n) tl.fromTo(n, { scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: end ? 0.5 : 0.35, ease: end ? 'back.out(4)' : 'back.out(2.5)', clearProps: CLEAR }, at + (end ? 0.35 : 0.15));
    if (txt.length) tl.fromTo(txt, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45, ease: 'power3.out', stagger: 0.06, clearProps: CLEAR }, at + 0.15);
    return at + 0.35;
  }
  // the route from this stop to the next: run along the row, then the U-turn at a row end; returns when it arrives
  function go(tl, st, at, phone) {
    if (st.classList.contains('is-last')) return at;
    var turn = !phone && st.classList.contains('is-turn');
    tl.to(st, { '--aq-run': 1, duration: phone ? 0.45 : turn ? 0.2 : 0.4, ease: 'none' }, at);
    at += phone ? 0.45 : turn ? 0.2 : 0.4;
    if (turn) { tl.to(st, { '--aq-turn': 1, duration: 0.45, ease: 'power1.inOut' }, at); at += 0.45 }
    return at;
  }
  root.querySelectorAll('.aq-visit-route').forEach(function (ol) {
    var sts = [].slice.call(ol.querySelectorAll(':scope > .aq-visit-route__stop')); if (!sts.length) return;
    m.claim(ol);
    var phone = m.narrow();
    sts.forEach(function (st) {
      gsap.set(st, { '--aq-run': 0, '--aq-turn': 0 });
      var parts = st.querySelectorAll('.aq-visit-route__fig, .aq-visit-route__n, .aq-visit-route__cap, .aq-visit-route__t, .aq-visit-route__d'); if (parts.length) gsap.set(parts, { autoAlpha: 0 });
    });
    if (phone) {
      var ready = 0;
      sts.forEach(function (st) {
        m.on(st, function () {
          var now = performance.now() / 1000, wait = Math.min(0.6, Math.max(0, ready - now)), tl = m.tw(gsap.timeline({ delay: wait }));
          var end = go(tl, st, pop(tl, st, 0), true); ready = now + wait + end;
        }, 'top 84%');
      });
      return;
    }
    m.on(ol, function () {
      var tl = m.tw(gsap.timeline({ delay: 0.5 })), t = 0;
      sts.forEach(function (st) {
        // a right-to-left row opens with its lead-in from the column edge before its first stop
        if (st.classList.contains('is-rtl') && st.classList.contains('is-in')) { tl.to(st, { '--aq-turn': 1, duration: 0.25, ease: 'none' }, t); t += 0.25 }
        t = go(tl, st, pop(tl, st, t), false);
      });
      var total = tl.duration(); if (total > 4.2) tl.timeScale(total / 4.2);
    }, 'top 78%');
  });
});
