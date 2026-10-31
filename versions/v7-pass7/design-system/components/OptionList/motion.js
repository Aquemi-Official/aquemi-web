/* OptionList (plain and decisions; the modules shape belongs to OptionModules): a drawn schedule filling in. Rows
   come in reading order, each hairline ruling across first; the big index decodes digit by digit, the option lands,
   then its line follows. Decisions: the fork mark draws from its stem out to both branches, and the framed "?" strikes
   last like a stamp, the open question set on the row. "Decide by" fades in under the line. */
AQmotion.fx('OptionList', function (root, m) {
  var short = m.narrow() ? 0.8 : 1;
  root.querySelectorAll('ol.aq-rows.aq-options').forEach(function (ol) {
    if (!m.free(ol) || ol.classList.contains('aq-option-modules')) return;
    m.claim(ol);
    var rows = [].filter.call(ol.children, function (li) { return !li.classList.contains('aq-fold-x') });
    if (!rows.length) return;
    gsap.set(rows, { autoAlpha: 0 });
    ScrollTrigger.batch(rows, { start: 'top 92%', once: true, onEnter: function (b) {
      b.forEach(function (li, j) {
        var q = function (s) { return li.querySelector(s) };
        var tl = m.tw(gsap.timeline({ delay: j * 0.12 * short, defaults: { ease: 'power3.out', clearProps: 'transform,opacity,visibility' } }));
        gsap.set(li, { autoAlpha: 1 });
        tl.fromTo(li, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.6 * short, ease: 'power2.out', clearProps: 'clipPath' }, 0);
        var n = q('.aq-index');
        if (n && window.ScrambleTextPlugin) tl.to(n, { duration: 0.5, scrambleText: { text: n.textContent, chars: '0123456789', speed: 0.8 }, ease: 'none', clearProps: '' }, 0.05);
        var t = q('.aq-rows__t'), d = q('.aq-rows__d'), ic = q('.aq-rows__lead, .aq-icon');
        if (ic) tl.from(ic, { scale: 0.8, autoAlpha: 0, duration: 0.45 }, 0.1);
        if (t) tl.from(t, { y: 10, autoAlpha: 0, duration: 0.5 }, 0.15);
        if (d) tl.from(d, { y: 8, autoAlpha: 0, duration: 0.5 }, 0.3);
        var fork = q('.aq-options__fork');
        if (fork) {
          var fp = fork.querySelector('path'), fc = fork.querySelector('circle');
          if (fp && window.DrawSVGPlugin) tl.fromTo(fp, { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.6, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, 0.2);
          if (fc) tl.from(fc, { scale: 0, transformOrigin: '50% 50%', duration: 0.3, ease: 'back.out(3)' }, 0.35);
        }
        var qt = q('.aq-options__qt');
        if (qt) tl.from(qt, { scale: 1.8, rotation: -8, autoAlpha: 0, duration: 0.32, ease: 'power4.in' }, 0.55);
        var by = q('.aq-options__by');
        if (by) tl.from(by, { autoAlpha: 0, duration: 0.4 }, 0.6);
      });
    } }).forEach(m.tw);
  });
});
