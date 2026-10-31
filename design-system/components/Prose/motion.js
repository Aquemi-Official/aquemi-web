/* Prose (plain sheet): the lead sentence rises line by line out of a mask, then each annotated paragraph follows in
   reading order. The explainer path (Explainer component) has its own motion. */
AQmotion.fx('Prose', function (root, m) {
  root.querySelectorAll('.aq-prose--sheet').forEach(function (pr) {
    var lead = pr.querySelector('.aq-prose__lead'), rest = pr.querySelectorAll(':scope > p:not(.aq-prose__lead)');
    if (!lead) return;
    m.claim(pr);
    var s = m.split(lead, { type: 'lines', mask: 'lines', linesClass: 'aq-m-line' });
    if (s) gsap.set(s.lines, { yPercent: 105 }); else gsap.set(lead, { y: 16, autoAlpha: 0 });
    gsap.set(rest, { y: 14, autoAlpha: 0 });
    m.on(pr, function () {
      var tl = m.tw(gsap.timeline());
      if (s) tl.to(s.lines, { yPercent: 0, duration: 0.8, ease: 'power4.out', stagger: 0.08 }, 0);
      else tl.to(lead, { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, 0);
      tl.to(rest, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out', stagger: 0.12, clearProps: 'transform,opacity,visibility' }, 0.35);
    }, 'top 85%');
  });
});
