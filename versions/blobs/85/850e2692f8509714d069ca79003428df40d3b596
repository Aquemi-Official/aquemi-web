/* NotesRegister: the register is drawn up like a drawing office ledger. The cream plate unrolls, the filter chips
   click in left to right, the featured panel is cut in from the top with its vignette printing in after, then the
   ruled rows are entered one by one (each wipes left to right, as if ruled with a pen), the featured row last to
   settle its flow number. Filtering (register.js) moves the rows with Flip. */
AQmotion.fx('NotesRegister', function (root, m) {
  root.querySelectorAll('.aq-notes-register__plate').forEach(function (plate) {
    var reg = plate.querySelector('.aq-notes-register'); if (!reg) return;
    m.claim(plate);
    var phone = m.narrow();
    var chips = reg.querySelectorAll('.aq-notes-register__fk, .aq-notes-register__chip');
    var panel = reg.querySelector('.aq-notes-register__feature'), spot = reg.querySelector('.aq-notes-register__spot');
    var inner = panel ? panel.querySelectorAll('.aq-notes-register__flabel, .aq-notes-register__ft, .aq-notes-register__fd, .aq-tags, .aq-notes-register__go') : [];
    var head = reg.querySelector('thead tr');
    var rows = [].filter.call(reg.querySelectorAll('tbody tr'), function (tr) { return !!tr.offsetParent });
    var fold = reg.querySelector('.aq-fold__btn'), block = plate.querySelector(':scope > .aq-plate__block');
    gsap.set(plate, { clipPath: 'inset(0 0 100% 0)' });
    gsap.set(chips, { y: 8, autoAlpha: 0 });
    if (panel) gsap.set(panel, { clipPath: 'inset(0 0 100% 0)' });
    gsap.set(inner, { y: 12, autoAlpha: 0 });
    if (spot) gsap.set(spot, { clipPath: 'inset(100% 0 0 0)' });
    if (head) gsap.set(head, { autoAlpha: 0 });
    gsap.set(rows, { clipPath: 'inset(0 100% 0 0)' });
    if (fold) gsap.set(fold, { autoAlpha: 0 });
    if (block) gsap.set(block, { autoAlpha: 0 });
    m.on(plate, function () {
      var tl = m.tw(gsap.timeline());
      tl.to(plate, { clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: 'power3.inOut', clearProps: 'clipPath' }, 0)
        .to(chips, { y: 0, autoAlpha: 1, duration: 0.4, ease: 'power2.out', stagger: 0.05, clearProps: 'transform,opacity,visibility' }, 0.45);
      if (panel) tl.to(panel, { clipPath: 'inset(0 0 0% 0)', duration: 0.7, ease: 'power3.inOut', clearProps: 'clipPath' }, 0.6)
        .to(inner, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.out', stagger: 0.07, clearProps: 'transform,opacity,visibility' }, 0.85);
      if (spot) tl.to(spot, { clipPath: 'inset(0% 0 0 0)', duration: 0.9, ease: 'power3.inOut', clearProps: 'clipPath' }, 1.05);
      if (!phone) ledger(tl, 0.75); else if (block) tl.to(block, { autoAlpha: 1, duration: 0.3, clearProps: 'opacity,visibility' }, 1.2);
    }, 'top 80%');
    // Phones: the register sits under the panel, so its rows are entered when the table itself scrolls in
    if (phone) m.on(reg.querySelector('table') || reg, function () { ledger(m.tw(gsap.timeline()), 0) }, 'top 85%');
    function ledger(tl, r0) {
      var gap = phone ? 0.08 : 0.1, end = r0 + 0.15 + rows.length * gap + 0.3;
      if (head) tl.to(head, { autoAlpha: 1, duration: 0.3, clearProps: 'opacity,visibility' }, r0);
      tl.to(rows, { clipPath: 'inset(0 0% 0 0)', duration: 0.45, ease: 'power2.inOut', stagger: gap, clearProps: 'clipPath' }, r0 + 0.15);
      var f = reg.querySelector('tr.is-featured .aq-notes-register__no');
      if (f) tl.fromTo(f, { autoAlpha: 0.2 }, { autoAlpha: 1, duration: 0.5, ease: 'power2.out', clearProps: 'opacity,visibility' }, end - 0.1);
      if (fold) tl.to(fold, { autoAlpha: 1, duration: 0.3, clearProps: 'opacity,visibility' }, end);
      if (block && !phone) tl.to(block, { autoAlpha: 1, duration: 0.3, clearProps: 'opacity,visibility' }, end);
    }
  });
});
