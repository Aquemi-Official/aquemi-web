/* PlanTiers: the plan names drop onto their rule one tier after another, each feature row then fills across the
   tiers (label first, plan by plan), the "Fits when" row follows, and only then do the actions rise, the recommended
   plan's tab striking last. Phones: the tier switcher, then the shown plan's rows; pressing a tier slides its values
   in (the visitor drives it, so it may repeat). */
AQmotion.fx('PlanTiers', function (root, m) {
  var vis = function (a) { return [].filter.call(a, function (x) { return x.getClientRects().length }) };
  var done = { clearProps: 'transform,opacity,visibility' };
  root.querySelectorAll('.aq-plan-tiers').forEach(function (el) {
    m.claim(el);
    var phone = m.narrow();
    var tabs = vis(el.querySelectorAll('.aq-plan-tiers__tab'));
    var names = vis(el.querySelectorAll('thead .aq-plan-tiers__name'));
    var rows = vis(el.querySelectorAll('.aq-plan-tiers__row, .aq-plan-tiers__fits'));
    var acts = vis(el.querySelectorAll('.aq-plan-tiers__actions .aq-btn'));
    var mark = vis(el.querySelectorAll('.aq-plan-tiers__mark'));
    var cells = function (r) { return vis(r.children) };
    if (tabs.length || names.length) gsap.set(tabs.concat(names), { autoAlpha: 0, y: -10 });
    rows.forEach(function (r) { gsap.set(cells(r), { autoAlpha: 0, y: phone ? 10 : 0, x: phone ? 0 : -10 }) });
    if (acts.length) gsap.set(acts, { autoAlpha: 0, y: 14 });
    if (mark.length) gsap.set(mark, { autoAlpha: 0, y: 8, scale: 1.2 });
    m.on(el, function () {
      var tl = m.tw(gsap.timeline());
      if (tabs.length || names.length) tl.to(tabs.concat(names), Object.assign({ autoAlpha: 1, y: 0, duration: 0.45, ease: 'power3.out', stagger: 0.1 }, done), 0);
      var t = 0.35;
      rows.forEach(function (r, i) { t = 0.35 + i * (phone ? 0.16 : 0.2); tl.to(cells(r), Object.assign({ autoAlpha: 1, x: 0, y: 0, duration: 0.45, ease: 'power3.out', stagger: 0.08 }, done), t) });
      if (acts.length) tl.to(acts, Object.assign({ autoAlpha: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.1 }, done), t + 0.45);
      if (mark.length) tl.to(mark, Object.assign({ autoAlpha: 1, y: 0, scale: 1, duration: 0.35, ease: 'power4.in' }, done), t + 0.75);
    }, 'top 75%');
    // Tier switcher: the chosen plan's values slide in after the renderer shows them
    el.addEventListener('click', function (ev) {
      if (!ev.target.closest('.aq-plan-tiers__tab')) return;
      requestAnimationFrame(function () { m.tw(gsap.from(vis(el.querySelectorAll('tbody td.aq-plan-tiers__c')), Object.assign({ autoAlpha: 0, x: 18, duration: 0.35, ease: 'power2.out', stagger: 0.04 }, done))) });
    });
  });
});
