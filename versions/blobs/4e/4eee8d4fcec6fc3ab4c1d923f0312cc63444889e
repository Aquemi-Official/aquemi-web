/* Closing: the last screen of every page, played once as the band scrolls in.
   The water line runs along the band's top edge, the headline lines rise out of their mask, the lead and the button
   follow (one nudge of its arrow). Then the exchange runs as a process, in the order the water would: the send rows
   list themselves and their stubs run into the manifold bus, the pipe is laid across, a droplet travels it with the
   water filling behind it, the turnaround label lands on the pipe, and the returned sheets drop out of the far
   manifold one by one. A proof figure counts up when it is a plain number. Calm on purpose: it ends every page.
   Everything ends static within about 3.5 s; nothing runs under reduced motion (all custom properties default to 1). */
AQmotion.fx('Closing', function (root, m) {
  root.querySelectorAll('.aq-closing').forEach(function (sec) {
    m.claim(sec);
    var q = function (s) { return sec.querySelector(s) }, qa = function (s) { return [].slice.call(sec.querySelectorAll(s)) };
    var h = q('.aq-closing__h'), lead = q('.aq-closing__lead'), btn = q('.aq-closing__action .aq-btn'), arrow = btn && btn.querySelector('.aq-btn__arrow');
    var tags = qa('.aq-closing__include > .aq-closing__tag'), send = qa('.aq-closing__include:not(.aq-closing__returns) li'), back = qa('.aq-closing__returns li');
    var turn = q('.aq-closing__turn'), pipe = q('.aq-closing__pipe'), drop = pipe && pipe.querySelector('i'), label = q('.aq-closing__turn-t'), docs = qa('.aq-closing__doc');
    var proof = q('.aq-closing__proof'), val = q('.aq-closing__value'), narrow = m.narrow();
    var vis = function (els) { return els.filter(function (el) { return !!el.offsetParent }) };
    send = vis(send); back = vis(back);
    var s = h && m.split(h, { type: 'lines', mask: 'lines', linesClass: 'aq-m-line' });
    gsap.set(sec, { '--aq-c-run': 0 });
    if (s) gsap.set(s.lines, { yPercent: 105 });
    gsap.set([lead, btn, label, proof].concat(tags).filter(Boolean), { autoAlpha: 0 });
    gsap.set(send.concat(back), { '--aq-stub': 0, '--aq-bus': 0 });
    gsap.set(send.concat(back).map(function (li) { return li.querySelector('.aq-closing__t') }).filter(Boolean), { autoAlpha: 0, x: function (i, el) { return el.closest('.aq-closing__returns') ? 10 : -10 } });
    if (pipe) gsap.set(pipe, { '--aq-pipe': 0, '--aq-water': 0 });
    if (docs.length) gsap.set(docs, { autoAlpha: 0, y: -10, rotation: -8 });
    m.on(sec, function () {
      var tl = m.tw(gsap.timeline({ defaults: { ease: 'power3.out' } })), at;
      tl.timeScale(1.35); /* the band is the last thing on the page: it should be complete soon after it shows */
      tl.to(sec, { '--aq-c-run': 1, duration: 1.2, ease: 'power2.inOut' }, 0);
      if (s) tl.to(s.lines, { yPercent: 0, duration: 0.9, stagger: 0.1, ease: 'power4.out' }, 0.1);
      if (lead) tl.fromTo(lead, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.6, clearProps: 'transform,opacity,visibility' }, 0.45);
      if (btn) {
        tl.fromTo(btn, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.6, clearProps: 'transform,opacity,visibility' }, 0.6);
        if (arrow) tl.to(arrow, { x: 6, duration: 0.22, yoyo: true, repeat: 1, ease: 'power1.inOut', clearProps: 'transform' }, 1.2);
      }
      at = 0.9;
      if (tags[0]) tl.to(tags[0], { autoAlpha: 1, duration: 0.3, clearProps: 'opacity,visibility' }, at);
      send.forEach(function (li, i) {
        var t = at + 0.1 + i * 0.08, txt = li.querySelector('.aq-closing__t');
        if (txt) tl.to(txt, { autoAlpha: 1, x: 0, duration: 0.45, clearProps: 'transform,opacity,visibility' }, t);
        tl.to(li, { '--aq-stub': 1, duration: 0.25, ease: 'power2.out' }, t + 0.15).to(li, { '--aq-bus': 1, duration: 0.2, ease: 'none' }, t + 0.3);
      });
      at += 0.2 + send.length * 0.08 + 0.25;
      if (pipe) {
        var dir = narrow ? { top: '100%' } : { left: '100%' };
        tl.to(pipe, { '--aq-pipe': 1, duration: 0.45, ease: 'power2.inOut' }, at);
        if (label) tl.fromTo(label, { autoAlpha: 0, y: narrow ? 0 : 6 }, { autoAlpha: 1, y: 0, duration: 0.4, clearProps: 'transform,opacity,visibility' }, at + 0.3);
        tl.to(pipe, { '--aq-water': 1, duration: 0.8, ease: 'power1.inOut' }, at + 0.4);
        if (drop) tl.fromTo(drop, { autoAlpha: 1, left: narrow ? '50%' : '0%', top: narrow ? '0%' : '50%' }, Object.assign({ duration: 0.8, ease: 'power1.inOut' }, dir), at + 0.4)
          .to(drop, { autoAlpha: 0, duration: 0.2, clearProps: 'left,top,opacity,visibility' }, at + 1.2);
        at += 1.2;
      }
      if (tags[1]) tl.to(tags[1], { autoAlpha: 1, duration: 0.3, clearProps: 'opacity,visibility' }, at - 0.1);
      back.forEach(function (li, i) {
        var t = at + i * 0.12, txt = li.querySelector('.aq-closing__t'), d = li.querySelector('.aq-closing__doc');
        tl.to(li, { '--aq-bus': 1, duration: 0.15, ease: 'none' }, t).to(li, { '--aq-stub': 1, duration: 0.2, ease: 'power2.out' }, t + 0.1);
        if (d) tl.to(d, { autoAlpha: 1, y: 0, rotation: 0, duration: 0.45, ease: 'back.out(2)', clearProps: 'transform,opacity,visibility' }, t + 0.2);
        if (txt) tl.to(txt, { autoAlpha: 1, x: 0, duration: 0.45, clearProps: 'transform,opacity,visibility' }, t + 0.25);
      });
      // rows hidden on phones (beyond the first few) are set back at once so nothing stays hidden
      tl.add(function () { gsap.set(qa('.aq-closing__t, .aq-closing__doc'), { clearProps: 'transform,opacity,visibility' }) }, '+=0.05');
      if (proof) { tl.fromTo(proof, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.5, clearProps: 'transform,opacity,visibility' }, 1.2); if (val && /^[<>≤≥]?\s*\d[\d.,]*(\s|$)/.test(val.textContent.trim())) tl.add(function () { m.count(val, { now: true, duration: 1.1 }) }, 1.2) }
    }, 'top 95%');
  });
});
