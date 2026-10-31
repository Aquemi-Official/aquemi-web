/* Closing: the last sheet is laid down. The frame unrolls, the title strip decodes, the headline lines rise out of
   their mask, the lead follows; then the exchange runs in order: what you send lists itself row by row, the
   turnaround arrow shoots across, what comes back lands document by document, and the button arrives last with one
   nudge of its arrow. A checklist alone lists itself after the lead; the proof figure counts up. */
AQmotion.fx('Closing', function (root, m) {
  root.querySelectorAll('.aq-closing').forEach(function (sec) {
    m.claim(sec);
    var q = function (s) { return sec.querySelector(s) }, qa = function (s) { return [].slice.call(sec.querySelectorAll(s)) };
    var frame = q('.aq-closing__frame'), strip = qa('.aq-closing__strip span'), h = q('.aq-closing__h'), lead = q('.aq-closing__body > .aq-lead');
    var plate = q('.aq-closing__plate'), send = qa('.aq-closing__include:not(.aq-closing__returns) li'), tags = qa('.aq-closing__include > .aq-closing__tag'), turn = q('.aq-closing__turn');
    var back = qa('.aq-closing__returns li'), docs = qa('.aq-closing__doc'), proof = q('.aq-closing__proof'), val = q('.aq-closing__value'), btn = q('.aq-closing__action .aq-btn'), arrow = btn && btn.querySelector('.aq-btn__arrow');
    var s = h && m.split(h, { type: 'lines', mask: 'lines', linesClass: 'aq-m-line' });
    var narrow = m.narrow();
    if (frame && !narrow) gsap.set(frame, { clipPath: 'inset(-16px -16px 100% -16px)' });
    if (s) gsap.set(s.lines, { yPercent: 105 });
    var fade = [lead, plate, turn, proof, btn].concat(tags).filter(Boolean);
    gsap.set(fade, { autoAlpha: 0 });
    gsap.set(send.concat(back), { autoAlpha: 0, x: function (i, el) { return el.closest('.aq-closing__returns') ? 12 : -12 } });
    m.on(sec, function () {
      var tl = m.tw(gsap.timeline({ defaults: { ease: 'power3.out' } })), at;
      if (frame && !narrow) tl.to(frame, { clipPath: 'inset(-16px -16px -16px -16px)', duration: 1, ease: 'power3.inOut', clearProps: 'clipPath' }, 0);
      strip.forEach(function (sp, i) { tl.add(function () { m.scramble(sp, 0) }, 0.15 + i * 0.12) });
      if (s) tl.to(s.lines, { yPercent: 0, duration: 0.9, stagger: 0.1, ease: 'power4.out' }, 0.2);
      if (lead) tl.fromTo(lead, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.6, clearProps: 'transform,opacity,visibility' }, 0.55);
      at = 0.7;
      if (plate) { tl.fromTo(plate, { autoAlpha: 1, clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: narrow ? 0.01 : 0.8, ease: 'power3.inOut', clearProps: 'clipPath,opacity,visibility' }, at); at += narrow ? 0 : 0.5 }
      if (tags[0]) tl.to(tags[0], { autoAlpha: 1, duration: 0.3, clearProps: 'opacity,visibility' }, at);
      if (send.length) { tl.to(send, { autoAlpha: 1, x: 0, duration: 0.45, stagger: 0.09, clearProps: 'transform,opacity,visibility' }, at + 0.1); at += 0.1 + send.length * 0.09 + 0.2 }
      if (turn) { tl.fromTo(turn, { autoAlpha: 1, scaleX: 0, transformOrigin: '0% 50%' }, { scaleX: 1, duration: 0.5, ease: 'power2.inOut', clearProps: 'transform,opacity,visibility' }, at); at += 0.45 }
      if (tags[1]) tl.to(tags[1], { autoAlpha: 1, duration: 0.3, clearProps: 'opacity,visibility' }, at);
      if (back.length) { tl.to(back, { autoAlpha: 1, x: 0, duration: 0.45, stagger: 0.12, clearProps: 'transform,opacity,visibility' }, at + 0.1); at += 0.1 + back.length * 0.12 }
      if (docs.length) tl.from(docs, { y: -8, rotation: -6, duration: 0.5, stagger: 0.12, ease: 'back.out(2)', clearProps: 'transform' }, at - back.length * 0.12);
      if (proof) { tl.fromTo(proof, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.5, clearProps: 'transform,opacity,visibility' }, Math.min(at, 1.2)); if (val && /^[<>≤≥]?\s*\d[\d.,]*(\s|$)/.test(val.textContent.trim())) tl.add(function () { m.count(val, { now: true, duration: 1.1 }) }, Math.min(at, 1.2)) }
      if (btn) {
        var b = Math.min(at + 0.1, 2.4);
        tl.fromTo(btn, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.6, clearProps: 'transform,opacity,visibility' }, b);
        if (arrow) tl.to(arrow, { x: 6, duration: 0.22, yoyo: true, repeat: 1, ease: 'power1.inOut', clearProps: 'transform' }, b + 0.6);
      }
    }, 'top 80%');
  });
});
