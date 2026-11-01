/* OptionTaps: the standard train is drawn first and the water runs it (IsoKit choreography: parts draw back to front,
   pipes, then the flow). Then the options appear as what they are, possibilities: each dashed part and its tee fade up
   in turn while its numbered marker drops onto it and the matching card slides up. Once on scroll-in, under 5 s. */
AQmotion.fx('OptionTaps', function (root, m) {
  root.querySelectorAll('.aq-option-taps').forEach(function (el) {
    var fig = el.querySelector('.aq-option-taps__fig'), svg = fig && fig.querySelector('svg.aq-iso');
    if (!svg || !m.free(fig)) return; m.claim(fig); m.claim(el);
    var q = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var ghosts = q('.aq-option-taps__ghost', svg), tees = q('.aq-option-taps__tee', svg), marks = q('.aq-option-taps__mark'), cards = q('.aq-option-taps__card');
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    // the dashed parts draw with the rest but stay invisible until their own beat (their group's opacity)
    var it = window.AQiso && AQiso.timeline(svg, m, { draw: 1.1, pipe: 0.7, flow: 1.3, keep: false });
    if (it) { it.paused(false); tl.add(it, 0) }
    var t0 = it ? Math.min(it.duration(), 3) : 0.4;
    tl.from(q('.aq-option-taps__label'), { autoAlpha: 0, duration: 0.4, stagger: 0.08, clearProps: 'opacity,visibility' }, 0.4);
    ghosts.forEach(function (g, i) {
      var at = t0 + i * 0.16, tee = tees[i], mk = marks[i];
      tl.fromTo(tee ? [tee, g] : [g], { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45, clearProps: 'opacity,visibility' }, at);
      if (mk) tl.from(mk, { y: -14, autoAlpha: 0, duration: 0.4, ease: 'power2.in', clearProps: 'transform,opacity,visibility' }, at + 0.15);
    });
    tl.from(cards, { y: 18, autoAlpha: 0, duration: 0.5, stagger: 0.08, clearProps: 'transform,opacity,visibility' }, t0);
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
