/* TestSheet: the protocol is executed down the sheet. The paper slides onto the table, then each row is run in turn:
   its number decodes, its text rises, its tick box draws the tick. At a hold point the run waits: the signature writes
   itself along the line and the HOLD stamp strikes (drops in large and settles askew). The torn slip drops into place
   last: it arrives attached at the perforation, is pulled along it and tears free. One timeline on scroll-in, under
   5 s; on phones each row runs as it scrolls in. Hovering the slip pulls it a little along the tear (CSS).
   Ported from Subframe Motion "SVG line drawing animation" (signature-draw), MIT, (c) 2026 Subframe (kept: a faint
   offset impression under the ink and the ink drawn along it with cubic-bezier(.37,.12,.28,1); replaced: the heron
   with each hold point's signature, 2.1 s with 0.8 s to keep the sheet under 5 s).
   Ported from Subframe Motion "Tear-off ticket animation" (ticket-tear), MIT, (c) 2026 Subframe (kept: the pull,
   translateX(pull * 0.65) with rotate(pull * 0.13 deg) scaled to the slip's width, released at the commit point with
   240 ms cubic-bezier(.19,1,.22,1); replaced: the drag with a scripted pull on scroll-in and a hover preview). */
AQmotion.fx('TestSheet', function (root, m) {
  var D = window.DrawSVGPlugin;
  [].forEach.call(root.querySelectorAll('.aq-test-sheet'), function (el) {
    var paper = el.querySelector('.aq-test-sheet__paper'); if (!paper) return; m.claim(paper);
    var rows = [].slice.call(el.querySelectorAll('.aq-test-sheet__row'));
    var C = window.CustomEase, ink = C ? (CustomEase.get('aq-ink') || CustomEase.create('aq-ink', 'M0,0 C0.37,0.12 0.28,1 1,1')) : 'power1.inOut',
      snap = C ? (CustomEase.get('aq-snap') || CustomEase.create('aq-snap', 'M0,0 C0.19,1 0.22,1 1,1')) : 'expo.out';
    /* the torn slip: it arrives still attached at the perforation, is pulled along it (a short drag that twists it about
       its top left corner), then lets go and settles at its place below the gap */
    function tear(tl, row, at) {
      var prev = row.previousElementSibling, gap = prev ? row.getBoundingClientRect().top - prev.getBoundingClientRect().bottom : 0;
      tl.set(row, { y: -gap, transformOrigin: '0 0' }, at);
      tl.add(function () { row.classList.add('is-attached', 'is-tearing') }, at);
      tl.fromTo(row, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3, ease: 'power2.out' }, at);
      tl.to(row, { x: 26, rotation: 0.8, duration: 0.28, ease: 'power2.in' }, at + 0.2);
      tl.add(function () { row.classList.remove('is-attached') }, at + 0.48);
      tl.to(row, { x: 0, y: 0, rotation: 0, duration: 0.24, ease: snap, clearProps: 'transform,opacity,visibility' }, at + 0.48);
      tl.add(function () { row.classList.remove('is-tearing') }, at + 0.74);
      return at + 0.6;
    }
    function run(tl, row, at) {
      var q = function (s) { return row.querySelector(s) }, n = q('.aq-test-sheet__n'), tick = q('.aq-test-sheet__box path'), sig = q('.aq-test-sheet__ink'), imp = q('.aq-test-sheet__imp'), st = q('.aq-test-sheet__stamp');
      if (row.classList.contains('is-torn')) at = tear(tl, row, at);
      if (n) tl.add(function () { m.scramble(n) }, at);
      tl.from(row.querySelectorAll('.aq-test-sheet__t, .aq-test-sheet__d'), { autoAlpha: 0, y: 8, duration: 0.4, stagger: 0.06, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, at);
      var t = at + 0.25;
      if (tick && D) tl.fromTo(tick, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.3, ease: 'power2.out', clearProps: 'strokeDasharray,strokeDashoffset' }, t);
      if (imp) tl.from(imp, { autoAlpha: 0, duration: 0.2, clearProps: 'opacity,visibility' }, t);
      if (sig && D) { tl.fromTo(sig, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.8, ease: ink, clearProps: 'strokeDasharray,strokeDashoffset' }, t + 0.05); t += 0.65 }
      if (st) { tl.fromTo(st, { scale: 1.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 0.85, duration: 0.22, ease: 'power4.in', clearProps: 'transform' }, t); t += 0.3 }
      return t;
    }
    if (m.narrow()) {
      rows.forEach(function (row) { var tl = gsap.timeline({ paused: true }); m.tw(tl); run(tl, row, 0); m.on(row, function () { tl.play() }, 'top 88%') });
      return;
    }
    var tl = gsap.timeline({ paused: true }); m.tw(tl);
    tl.fromTo(paper, { y: 32, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, 0);
    var at = 0.4;
    rows.forEach(function (row) { var end = run(tl, row, at); at = Math.max(at + 0.3, end - 0.1) });
    m.on(paper, function () { tl.play() }, 'top 75%');
  });
});
