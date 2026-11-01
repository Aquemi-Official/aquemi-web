/* ProofFolders: the files are pulled from the drawer one by one. Each folder rises into place with its tab, the
   standard's name slides in beside it, the typed slip drops onto the folder and turns to its angle, the proof sheets
   fan out from under the clip, then the stamp strikes (in large and light, down hard, a small jolt through the folder)
   and the index label slides in from the edge. Folders behind a fold play when opened (they have no trigger of their
   own until shown). One timeline per folder, once, each under 2.5 s. The section heading is left to the core. */
AQmotion.fx('ProofFolders', function (root, m) {
  root.querySelectorAll('.aq-proof-folders').forEach(function (el) {
    var list = el.querySelector('.aq-proof-folders__list'); if (!list || !m.free(list)) return;
    m.claim(list); var cols = el.querySelector('.aq-proof-folders__cols'); if (cols) m.claim(cols);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    if (cols) { gsap.set(cols.children, { autoAlpha: 0, y: 8 }); m.on(cols, function () { m.tw(gsap.to(cols.children, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08, clearProps: 'transform,opacity,visibility' })) }, 'top 90%') }
    qa('.aq-proof-folders__row').forEach(function (row, i) {
      var folder = row.querySelector('.aq-proof-folders__folder'), std = row.querySelector('.aq-proof-folders__std'), slip = row.querySelector('.aq-proof-folders__slip'),
        sheets = qa('.aq-proof-folders__sheet', row), stamp = row.querySelector('.aq-proof-folders__stamp'), clip = row.querySelector('.aq-proof-folders__clip'),
        label = row.querySelector('.aq-proof-folders__label');
      var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
      tl.from(folder, { y: 70, autoAlpha: 0, duration: 0.8, ease: 'power4.out', clearProps: 'transform,opacity,visibility' }, 0)
        .from(std, { x: -24, autoAlpha: 0, duration: 0.6, clearProps: 'transform,opacity,visibility' }, 0.15);
      if (slip) tl.from(slip, { y: -28, rotation: -5, autoAlpha: 0, duration: 0.6, ease: 'back.out(1.6)', clearProps: 'transform,opacity,visibility' }, 0.35);
      if (sheets.length) tl.from(sheets, { y: function (k) { return -k * 24 }, rotation: 0, x: 0, autoAlpha: 0, duration: 0.5, stagger: 0.09, clearProps: 'transform,opacity,visibility' }, 0.5);
      if (clip) tl.from(clip, { y: -12, autoAlpha: 0, duration: 0.3, clearProps: 'transform,opacity,visibility' }, 0.75);
      if (stamp) {
        tl.fromTo(stamp, { scale: 2.4, autoAlpha: 0 }, { scale: 1, autoAlpha: 0.88, duration: 0.22, ease: 'power4.in', clearProps: 'transform,opacity,visibility' }, 1.0)
          .to(folder, { y: 3, duration: 0.06, yoyo: true, repeat: 1, ease: 'power1.inOut', clearProps: 'transform' }, 1.22);
      }
      if (label) tl.from(label, { clipPath: 'inset(0 0 0 100%)', duration: 0.5, ease: 'power2.inOut', clearProps: 'clipPath' }, 1.1);
      m.on(row, function () { tl.play() }, 'top 88%');
    });
  });
});
