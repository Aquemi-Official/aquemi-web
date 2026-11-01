/* BudgetBento: the sheet is set like type. The lead tile prints up from its foot and its huge numeral slides into its
   crop; the module tiles slide in beside it one by one, numerals first; on every tile the ruler ticks rise and the
   range band opens out from its centre between its brackets; the lead's included items tick in; then the two chip rows
   follow (drivers, then exclusions) and the link. One timeline, once, under 5 s. */
AQmotion.fx('BudgetBento', function (root, m) {
  root.querySelectorAll('.aq-budget-bento').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    var lead = el.querySelector('.aq-budget-bento__tile.is-lead'), mods = qa('.aq-budget-bento__tile:not(.is-lead)');
    if (lead) {
      tl.fromTo(lead, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 0.9, ease: 'power3.inOut', clearProps: 'clipPath' }, 0);
      tl.from(lead.querySelector('.aq-budget-bento__n'), { yPercent: 40, autoAlpha: 0, duration: 1.1, clearProps: 'transform,opacity,visibility' }, 0.35);
      tl.from(qa('.aq-budget-bento__p, .aq-budget-bento__val, .aq-budget-bento__basis > .aq-budget-bento__k', lead), { y: 14, autoAlpha: 0, duration: 0.5, stagger: 0.08, clearProps: 'transform,opacity,visibility' }, 0.5);
      tl.from(qa('.aq-budget-bento__incl li', lead), { x: -10, autoAlpha: 0, duration: 0.4, stagger: 0.08, clearProps: 'transform,opacity,visibility' }, 0.9);
    }
    mods.forEach(function (t, i) {
      var at = 0.3 + i * 0.16;
      tl.from(t, { x: 28, autoAlpha: 0, duration: 0.6, clearProps: 'transform,opacity,visibility' }, at);
      tl.from(t.querySelector('.aq-budget-bento__n'), { yPercent: 60, autoAlpha: 0, duration: 0.6, clearProps: 'transform,opacity,visibility' }, at + 0.1);
      var sp = t.querySelector('.aq-budget-bento__spot'); if (sp) tl.fromTo(sp, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 0.7, ease: 'power2.inOut', clearProps: 'clipPath' }, at + 0.2);
    });
    // ranges: ticks rise, the band opens from its centre, the brackets drop on its ends
    qa('.aq-budget-bento__range').forEach(function (r, i) {
      var at = 0.75 + i * 0.14;
      tl.from(qa('line', r), { scaleY: 0, transformOrigin: '50% 100%', duration: 0.3, stagger: { amount: 0.3 }, clearProps: 'transform' }, at);
      tl.from(r.querySelector('.aq-budget-bento__band'), { scaleX: 0, transformOrigin: '50% 50%', duration: 0.7, ease: 'power2.out', clearProps: 'transform' }, at + 0.15);
      tl.from(qa('.aq-budget-bento__bk', r), { y: -8, autoAlpha: 0, duration: 0.35, ease: 'back.out(2.5)', clearProps: 'transform,opacity,visibility' }, at + 0.55);
    });
    var notes = qa('.aq-budget-bento__note');
    notes.forEach(function (n, i) {
      var at = 1.4 + i * 0.3;
      tl.from(qa('.aq-budget-bento__nk', n), { autoAlpha: 0, duration: 0.3, clearProps: 'opacity,visibility' }, at);
      tl.from(qa('.aq-budget-bento__chip', n), { y: 8, scale: 0.94, autoAlpha: 0, duration: 0.35, ease: 'back.out(2)', stagger: 0.05, clearProps: 'transform,opacity,visibility' }, at + 0.05);
    });
    tl.from(qa('.aq-budget-bento__more, .aq-budget-bento > .aq-small'), { autoAlpha: 0, duration: 0.4, clearProps: 'opacity,visibility' }, 2.1);
    m.on(el, function () { tl.play() }, 'top 80%');

    // Ported from Subframe Motion "Spotlight card" (spotlight-card), MIT, (c) 2026 Subframe
    // A soft light follows the pointer inside the tile being read (a spring, stiffness 160 / damping 26 in the library,
    // here gsap.quickTo at 0.45 s power3), so the eye keeps its place on a dense price sheet; it fades in over 200 ms
    // and out a third faster. Mouse only (touch has no pointer to follow); nothing under reduced motion.
    qa('.aq-budget-bento__tile').forEach(function (t) {
      var sp = document.createElement('span'); sp.className = 'aq-budget-bento__spot-light'; sp.setAttribute('aria-hidden', 'true'); t.insertBefore(sp, t.firstChild);
      var qx = gsap.quickTo(sp, 'x', { duration: 0.45, ease: 'power3.out' }), qy = gsap.quickTo(sp, 'y', { duration: 0.45, ease: 'power3.out' });
      t.addEventListener('pointerenter', function (e) { if (e.pointerType !== 'mouse') return; var r = t.getBoundingClientRect(); gsap.set(sp, { x: e.clientX - r.left, y: e.clientY - r.top, display: 'block' }); m.tw(gsap.to(sp, { opacity: 1, duration: 0.2, overwrite: 'auto' })) });
      t.addEventListener('pointermove', function (e) { if (e.pointerType !== 'mouse') return; var r = t.getBoundingClientRect(); qx(e.clientX - r.left); qy(e.clientY - r.top) });
      t.addEventListener('pointerleave', function () { m.tw(gsap.to(sp, { opacity: 0, duration: 0.13, overwrite: 'auto', onComplete: function () { gsap.set(sp, { display: 'none' }) } })) });
    });
  });
});
