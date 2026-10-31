/* CaseStudy: the record is filled in, cause before effect.
   Fact-box case: the facts drop in, the outcome box is cut in, its figure counts up, and the result sentence lands last.
   Project record: facts rows enter; once the drawing has printed (core wipes the illustration) the change pins pop
   onto it one by one, each with its line in "What changed"; the order-to-release line then runs stop by stop, each
   stop ringing as the line reaches it, and the release stop strikes last like a stamp. The measured outcomes rise
   in turn as they scroll in, each figure counting up (a [value] placeholder is written in left to right), its
   method following, and the result sentence lands after the figures. */
AQmotion.fx('CaseStudy', function (root, m) {
  var phone = m.narrow();
  function figure(tl, num, at) {
    if (!num) return;
    if (num.querySelector('.aq-ph') || !/\d/.test(num.textContent)) {
      tl.fromTo(num, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.7, ease: 'power2.inOut', clearProps: 'clipPath' }, at);
    } else tl.call(function () { m.count(num, { now: true, duration: 1.4 }) }, null, at);
  }
  root.querySelectorAll('.aq-case').forEach(function (cs) {
    var record = cs.classList.contains('aq-case--record');
    if (!record) {
      var facts = cs.querySelectorAll('.aq-case__fact'), out = cs.querySelector('.aq-case__outcome');
      if (!out) return;
      var num = out.querySelector('.aq-case__num'), res = out.querySelector('.aq-case__result'), meth = cs.querySelector('.aq-case__method');
      [].forEach.call(facts, m.claim); m.claim(out); if (meth) m.claim(meth);
      gsap.set(facts, { y: 16, autoAlpha: 0 });
      gsap.set(out, { clipPath: 'inset(100% 0 0 0)' });
      if (res) gsap.set(res, { y: 16, autoAlpha: 0 });
      if (meth) gsap.set(meth, { autoAlpha: 0 });
      m.on(cs, function () {
        var tl = m.tw(gsap.timeline());
        tl.to(facts, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1, clearProps: 'transform,opacity,visibility' }, 0)
          .to(out, { clipPath: 'inset(0% 0 0 0)', duration: 0.8, ease: 'power3.inOut', clearProps: 'clipPath' }, 0.25);
        figure(tl, num, 0.8);
        if (res) tl.to(res, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'aq-settle', clearProps: 'transform,opacity,visibility' }, 2.1);
        if (meth) tl.to(meth, { autoAlpha: 1, duration: 0.4, clearProps: 'opacity,visibility' }, 2.3);
      }, 'top 75%');
      return;
    }
    // Project record
    var entries = cs.querySelectorAll('.aq-case__brief .aq-case__entry');
    var pins = [].slice.call(cs.querySelectorAll('.aq-case__pin')), chg = [].slice.call(cs.querySelectorAll('.aq-case__changes li'));
    [].forEach.call(entries, m.claim); pins.forEach(m.claim); chg.forEach(m.claim);
    gsap.set(entries, { y: 14, autoAlpha: 0 }); gsap.set(pins, { scale: 0, autoAlpha: 0 }); gsap.set(chg, { x: -10, autoAlpha: 0 });
    var brief = cs.querySelector('.aq-case__brief');
    if (brief) m.on(brief, function () {
      var tl = m.tw(gsap.timeline());
      tl.to(entries, { y: 0, autoAlpha: 1, duration: 0.55, ease: 'power3.out', stagger: 0.09, clearProps: 'transform,opacity,visibility' }, 0);
      var n = Math.max(pins.length, chg.length);
      for (var i = 0; i < n; i++) {
        var at = (phone ? 1.2 : 1.5) + i * 0.3;
        if (pins[i]) tl.to(pins[i], { scale: 1, autoAlpha: 1, duration: 0.45, ease: 'back.out(3)', clearProps: 'transform,opacity,visibility' }, at);
        if (chg[i]) tl.to(chg[i], { x: 0, autoAlpha: 1, duration: 0.45, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, at + 0.08);
      }
    }, 'top 78%');
    // Measured outcomes: each figure as it scrolls in; the result sentence lands after them
    var outs = cs.querySelector('.aq-case__outcomes');
    if (outs) {
      m.claim(outs);
      var figs = [].slice.call(outs.querySelectorAll('.aq-case__fig')), res2 = outs.querySelector(':scope > .aq-case__result'), lab = outs.querySelector(':scope > .aq-case__label');
      gsap.set(figs, { y: 20, autoAlpha: 0 }); if (res2) gsap.set(res2, { y: 12, autoAlpha: 0 }); if (lab) gsap.set(lab, { autoAlpha: 0 });
      var go = function (list, tl, at0) {
        list.forEach(function (f, i) {
          var at = at0 + i * 0.18;
          tl.to(f, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, at);
          figure(tl, f.querySelector('.aq-case__num'), at + 0.15);
        });
      };
      m.on(outs, function () {
        var tl = m.tw(gsap.timeline());
        if (lab) { tl.to(lab, { autoAlpha: 1, duration: 0.2 }, 0); m.scramble(lab, 0) }
        // Desktop: the whole 2 x 2 grid in one sequence; phones: the first now, each further one as it scrolls in
        var now = phone ? figs.slice(0, 1) : figs;
        go(now, tl, 0.15);
        if (phone) figs.slice(1).forEach(function (f) { m.on(f, function () { go([f], m.tw(gsap.timeline()), 0) }, 'top 90%') });
        if (res2) tl.to(res2, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'aq-settle', clearProps: 'transform,opacity,visibility' }, 0.15 + now.length * 0.18 + 0.6);
      }, 'top 80%');
    }
    // Order to release: the line runs stop by stop; the release stop strikes last
    var line = cs.querySelector('.aq-case__timeline');
    if (line) {
      m.claim(line);
      var ms = [].slice.call(line.querySelectorAll('li'));
      gsap.set(ms, { '--aq-run': 0 });
      ms.forEach(function (li) { gsap.set(li.querySelector('.aq-case__stop'), { autoAlpha: 0, scale: 0.4 }); gsap.set(li.querySelectorAll('.aq-case__mt, .aq-case__when'), { y: 8, autoAlpha: 0 }) });
      m.on(line, function () {
        var tl = m.tw(gsap.timeline()), seg = phone ? 0.22 : 0.3;
        ms.forEach(function (li, i) {
          var t = i * seg, last = i === ms.length - 1, stop = li.querySelector('.aq-case__stop');
          tl.to(li, { '--aq-run': 1, duration: seg, ease: 'none' }, t);
          // The stop sits at the start of its li on phones and at the middle on desktop
          var hit = phone ? t : t + seg * 0.5;
          if (last) tl.fromTo(stop, { scale: 1.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.4, ease: 'power4.in', clearProps: 'transform,opacity,visibility' }, hit + 0.15);
          else tl.to(stop, { scale: 1, autoAlpha: 1, duration: 0.35, ease: 'back.out(2.5)', clearProps: 'transform,opacity,visibility' }, hit);
          tl.to(li.querySelectorAll('.aq-case__mt, .aq-case__when'), { y: 0, autoAlpha: 1, duration: 0.4, ease: 'power3.out', stagger: 0.05, clearProps: 'transform,opacity,visibility' }, hit + 0.05);
        });
      }, 'top 85%');
    }
  });
});
