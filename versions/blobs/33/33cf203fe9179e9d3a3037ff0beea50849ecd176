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

      // Ported from Subframe Motion "Archive folder" (archive-folder), MIT, (c) 2026 Subframe
      // Pointing at (or focusing into) a file opens it for reading: the proof sheets come out of their skewed stack,
      // straighten and spread a step apart, the front ones furthest (480 ms, cubic-bezier(.22,1,.36,1), the library's
      // document values), and the typed slip lifts off the folder; leaving lets them settle back a third faster.
      var sh = [].slice.call(row.querySelectorAll('.aq-proof-folders__sheet')), slip = row.querySelector('.aq-proof-folders__slip');
      var aEase = window.CustomEase ? (CustomEase.get('aq-relief') || CustomEase.create('aq-relief', 'M0,0 C0.22,1 0.36,1 1,1')) : 'power3.out', open = false;
      function file(on) {
        if (on === open || (on && tl.isActive())) return; open = on;
        if (!file.o) file.o = sh.map(function (x) { return { r: gsap.getProperty(x, 'rotation'), x: gsap.getProperty(x, 'x') } });
        var o = file.o, mid = (sh.length - 1) / 2, d = on ? 0.48 : 0.32, clr = on ? '' : 'transform';
        sh.forEach(function (x, j) { m.tw(gsap.to(x, { rotation: on ? (j - mid) * 0.6 : o[j].r, x: on ? o[j].x * 0.4 : o[j].x, y: on ? j * 6 : 0, duration: d, ease: aEase, delay: on ? j * 0.04 : 0, overwrite: 'auto', clearProps: clr })) });
        if (slip) m.tw(gsap.to(slip, { y: on ? -6 : 0, duration: d, ease: aEase, overwrite: 'auto', clearProps: clr }));
        row.classList.toggle('is-open', on);
      }
      row.addEventListener('pointerenter', function () { file(true) }); row.addEventListener('pointerleave', function () { file(false) });
      row.addEventListener('focusin', function () { file(true) }); row.addEventListener('focusout', function (ev) { if (!row.contains(ev.relatedTarget)) file(false) });
    });
  });
});
