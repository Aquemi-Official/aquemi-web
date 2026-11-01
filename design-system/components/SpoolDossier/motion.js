/* SpoolDossier: the spool is drawn the IsoKit way (lengths back to front, the water through it once), then the joints
   are dotted and numbered in order, the lot tags print, and the dossier's parts rise in turn under it. One timeline,
   once, about 3.4 s. The layer each part shows on hover or focus is the project-index port in the renderer. */
AQmotion.fx('SpoolDossier', function (root, m) {
  root.querySelectorAll('.aq-spool-dossier').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var svg = el.querySelector('svg.aq-iso'), items = qa('.aq-spool-dossier__item').filter(function (r) { return r.offsetParent });
    var tl = svg && window.AQiso ? AQiso.timeline(svg, m, { draw: 1.1, pipe: 0.9, flow: 1.2 }) : null;
    if (!tl) tl = m.tw(gsap.timeline({ paused: true }));
    var at = tl.labels && tl.labels.flow != null ? tl.labels.flow : 0.6;
    if (svg) tl.from(qa('.aq-spool-dossier__dot', svg), { scale: 0, transformOrigin: '50% 50%', transformBox: 'fill-box', duration: 0.3, stagger: 0.12, ease: 'back.out(3)', clearProps: 'transform' }, at)
      .from(qa('.aq-spool-dossier__j text, .aq-spool-dossier__lot text', svg), { autoAlpha: 0, duration: 0.25, stagger: 0.07, clearProps: 'opacity,visibility' }, at + 0.1);
    if (items.length) tl.from(items, { y: 16, autoAlpha: 0, duration: 0.55, stagger: 0.09, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, 0.4);
    m.on(el, function () { tl.play() }, 'top 70%');
  });
});
