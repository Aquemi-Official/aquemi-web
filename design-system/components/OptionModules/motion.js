/* OptionModules: the base skid comes first (its plate unrolls and the drawing prints in), then every wire runs out
   from the skid to its module: the node lights on the plate edge, the dashed line extends, and the module it reaches
   opens away from the skid; its drawing and line follow. Left and right columns alternate down the drawing. One timeline, < 4 s. */
AQmotion.fx('OptionModules', function (root, m) {
  root.querySelectorAll('.aq-option-modules').forEach(function (w) {
    m.claim(w);
    var plate = w.querySelector('.aq-option-modules__base'), art = w.querySelector('.aq-option-modules__art'), label = w.querySelector('.aq-option-modules__label');
    var L = [].slice.call(w.querySelectorAll('.aq-option-modules__m--l')), R = [].slice.call(w.querySelectorAll('.aq-option-modules__m--r')), mods = [];
    for (var i = 0; i < Math.max(L.length, R.length); i++) { if (L[i]) mods.push(L[i]); if (R[i]) mods.push(R[i]) }
    var phone = m.narrow();
    if (plate) gsap.set(plate, { clipPath: 'inset(0 0 100% 0)' });
    if (art) gsap.set(art, { clipPath: 'inset(100% 0 0 0)' });
    if (label) gsap.set(label.children, { autoAlpha: 0, y: 8 });
    mods.forEach(function (mo) {
      var left = mo.classList.contains('aq-option-modules__m--l'), wire = mo.querySelector('.aq-option-modules__wire');
      /* the node sits on the skid side of the wire (cx 100% on left modules, 0 on right); reveal from that side.
         clip-path works in the wire's own coordinates, so the phone's mirrored wire needs nothing extra */
      if (wire) { gsap.set(wire, { clipPath: left ? 'inset(-4px -4px -4px 100%)' : 'inset(-4px 100% -4px -4px)' }); gsap.set(wire.querySelector('circle'), { scale: 0, transformOrigin: '50% 50%' }) }
      var box = mo.querySelector('.aq-option-modules__box'), cat = mo.querySelector('.aq-option-modules__cat');
      /* the box (its wire hangs outside it) is clipped to the wire's strip, then opens away from the skid */
      var fromR = !phone && left;
      mo._aqClip = fromR ? ['inset(-8px -64px -8px 100%)', 'inset(-8px -64px -8px 0%)'] : ['inset(-8px 100% -8px -64px)', 'inset(-8px 0% -8px -64px)'];
      gsap.set(box, { clipPath: mo._aqClip[0] });
      if (cat) gsap.set(cat, { autoAlpha: 0 });
      gsap.set(box.querySelectorAll('.aq-option-modules__vig, .aq-option-modules__d'), { autoAlpha: 0 });
    });
    m.on(w, function () {
      var tl = m.tw(gsap.timeline({ defaults: { ease: 'power3.out' } }));
      if (plate) tl.to(plate, { clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: 'power3.inOut' }, 0);
      if (art) tl.to(art, { clipPath: 'inset(0% 0 0 0)', duration: 1, ease: 'power3.inOut' }, 0.35);
      if (label) tl.to(label.children, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.08 }, 1);
      var t0 = phone ? 0.6 : 1.1, gap = Math.min(0.28, 1.6 / Math.max(mods.length, 1));
      mods.forEach(function (mo, i) {
        var t = t0 + i * gap, wire = mo.querySelector('.aq-option-modules__wire'), box = mo.querySelector('.aq-option-modules__box');
        if (wire) tl.to(wire.querySelector('circle'), { scale: 1, duration: 0.3, ease: 'back.out(3)' }, t)
          .to(wire, { clipPath: 'inset(-4px -4px -4px -4px)', duration: 0.35, ease: 'power1.inOut' }, t + 0.1);
        tl.to(box, { clipPath: mo._aqClip[1], duration: 0.55, ease: 'power2.inOut' }, t + 0.4);
        if (mo.querySelector('.aq-option-modules__cat')) tl.to(mo.querySelector('.aq-option-modules__cat'), { autoAlpha: 1, duration: 0.3 }, t + 0.6);
        tl
          .to(box.querySelectorAll('.aq-option-modules__vig, .aq-option-modules__d'), { autoAlpha: 1, duration: 0.4, stagger: 0.08 }, t + 0.55);
      });
      tl.add(function () {
        gsap.set([plate, art].concat(label ? [].slice.call(label.children) : []).filter(Boolean), { clearProps: 'opacity,visibility,transform,clipPath' });
        mods.forEach(function (mo) { gsap.set([mo].concat([].slice.call(mo.querySelectorAll('*'))), { clearProps: 'opacity,visibility,transform,clipPath' }) });
      });
    }, 'top 75%');
  });
});
