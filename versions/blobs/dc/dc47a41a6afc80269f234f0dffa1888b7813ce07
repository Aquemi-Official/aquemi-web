/* EnquiryForm: the data sheet is drawn up, then filled in by the visitor. Pass 9: the progress is a pipeline; on
   Continue the water runs along the line just passed and the ring (the step marker) slides on to the new node.
   Scroll-in: the title rule rules across, the progress steps (stepped form) or section legends wipe in from the left
   with their numbers decoding, the fields of the open step rise in reading order, the revision strip settles last.
   Continue / Back (stepped form): the step marker under the progress list slides to the new step (Flip), the new
   step slides in from the side it was asked for and its fields follow. A blocked Continue or Send ("aq:invalid" from
   parts/EnquiryForm.js): each field that needs attention gives a short shake (0.35 s). TextField's focus colours are CSS. */
AQmotion.fx('EnquiryForm', function (root, m) {
  var CLEAR = 'transform,opacity,visibility';
  function fieldsOf(scope) { return [].filter.call(scope.querySelectorAll('.aq-form__grid > *'), function (f) { return !!f.offsetParent }) }
  root.querySelectorAll('.wform').forEach(function (fm) {
    m.claim(fm);
    var title = fm.querySelector('.aq-form__title'), prog = fm.querySelector('.aq-form__progress'), strip = fm.querySelector('.aq-form__strip'),
      open = fm.querySelector('.aq-form__step:not([hidden])') || fm, legends = [].filter.call(fm.querySelectorAll('.aq-form__legend'), function (l) { return !!l.offsetParent }),
      fields = fieldsOf(fm).slice(0, 12), acts = [].filter.call(fm.querySelectorAll('.aq-form__actions'), function (a) { return !!a.offsetParent }),
      pli = prog ? [].slice.call(prog.children) : [];
    // one marker under the current step, moved with Flip
    var mark = null;
    if (prog && window.Flip) {
      mark = document.createElement('span'); mark.className = 'aq-form__mark'; mark.setAttribute('aria-hidden', 'true');
      var cur = prog.querySelector('[aria-current="step"]') || pli[0]; if (cur) { cur.appendChild(mark); prog.classList.add('has-mark') }
    }
    if (title) gsap.set(title, { clipPath: 'inset(0 100% 0 0)' });
    var wipe = pli.concat(legends), rise = fields.concat(acts);
    if (wipe.length) gsap.set(wipe, { clipPath: 'inset(0 100% 0 0)' });
    if (rise.length) gsap.set(rise, { y: 14, autoAlpha: 0 });
    if (strip) gsap.set(strip, { autoAlpha: 0 });
    m.on(fm, function () {
      var tl = m.tw(gsap.timeline({ delay: 0.2 }));
      if (title) tl.to(title, { clipPath: 'inset(0 0% 0 0)', duration: 0.7, ease: 'power3.inOut', clearProps: 'clipPath' }, 0);
      if (wipe.length) tl.to(wipe, { clipPath: 'inset(0 0% 0 0)', duration: 0.5, ease: 'power2.out', stagger: 0.1, clearProps: 'clipPath' }, 0.3);
      legends.forEach(function (l, i) { var n = l.querySelector('.aq-form__num'); if (n && window.ScrambleTextPlugin) tl.to(n, { duration: 0.4, scrambleText: { text: n.textContent, chars: '0123456789', speed: 0.8 }, ease: 'none' }, 0.3 + i * 0.1) });
      if (fields.length) tl.to(fields, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.out', stagger: Math.min(0.06, 0.9 / (fields.length || 1)), clearProps: CLEAR }, 0.5);
      if (acts.length) tl.to(acts, { y: 0, autoAlpha: 1, duration: 0.45, ease: 'power3.out', clearProps: CLEAR }, 0.9);
      if (strip) tl.to(strip, { autoAlpha: 1, duration: 0.4, clearProps: 'opacity,visibility' }, 1.1);
      // fields beyond the first twelve (long single sheets) follow as they scroll in
      fieldsOf(fm).slice(12).forEach(function (f) { gsap.set(f, { y: 14, autoAlpha: 0 }); m.on(f, function () { m.tw(gsap.to(f, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.out', clearProps: CLEAR })) }, 'top 92%') });
    }, 'top 80%');
    // Step change: capture the marker before page.js swaps the step, animate after it has
    fm.addEventListener('click', function (ev) {
      var g = ev.target.closest && ev.target.closest('[data-step-go]'); if (!g) return;
      var from = fm.querySelector('.aq-form__step:not([hidden])'), state = mark && window.Flip ? Flip.getState(mark) : null;
      requestAnimationFrame(function () {
        var to = fm.querySelector('.aq-form__step:not([hidden])'); if (!to || to === from) return;
        var dir = +to.dataset.step > +(from && from.dataset.step) ? 1 : -1;
        if (state) { var li = prog.querySelector('[aria-current="step"]'); if (li) { li.appendChild(mark); m.tw(Flip.from(state, { duration: 0.5, ease: 'power3.inOut', delay: dir > 0 ? 0.25 : 0 })) } }
        // forward: the water runs along the line just passed, then the ring arrives at the new node
        if (dir > 0 && prog) { var was = pli[+to.dataset.step - 1]; if (was) m.tw(gsap.fromTo(was, { '--aq-fill': 0 }, { '--aq-fill': 1, duration: 0.5, ease: 'power2.inOut' })) }
        var tl = m.tw(gsap.timeline());
        tl.fromTo(to, { x: 32 * dir, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.45, ease: 'power3.out', clearProps: CLEAR }, 0);
        var lg = to.querySelector('.aq-form__legend'); if (lg) tl.fromTo(lg, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.45, ease: 'power2.out', clearProps: 'clipPath' }, 0.05);
        var nf = fieldsOf(to); if (nf.length) tl.fromTo(nf, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.4, ease: 'power3.out', stagger: 0.05, clearProps: CLEAR }, 0.15);
      });
    });
    // Blocked Continue / Send: the fields that need attention shake once
    fm.addEventListener('aq:invalid', function (ev) {
      (ev.detail || []).forEach(function (f, i) { m.tw(gsap.fromTo(f, { x: 0 }, { keyframes: { x: [0, -6, 5, -3, 2, 0] }, duration: 0.35, ease: 'none', delay: i * 0.04, clearProps: 'transform' })) });
    });
  });
});
