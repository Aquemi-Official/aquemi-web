/* SitePlates: each plate is printed. The hairline over it draws across, the drawing's panel wipes up and its line work
   draws on (stroke), then the index, the kind and the fields rise in. Plates follow one another; folded plates appear
   as they are. One timeline, once on scroll-in, under 3 s; nothing under reduced motion. */
AQmotion.fx('SitePlates', function (root, m) {
  var CLEAR = 'transform,opacity,visibility';
  root.querySelectorAll('.aq-site-plates').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var plates = [].slice.call(el.querySelectorAll('.aq-site-plates__plate')).filter(function (p) { return p.offsetParent !== null });
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    plates.forEach(function (p, i) {
      var at = i * 0.35, fig = p.querySelector('.aq-site-plates__fig'), svg = p.querySelector('svg'),
        words = p.querySelectorAll('.aq-site-plates__at, .aq-site-plates__t, .aq-site-plates__dl > div');
      if (fig) tl.fromTo(fig, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 0.8, ease: 'power3.inOut', clearProps: 'clipPath' }, at);
      if (svg && window.DrawSVGPlugin) {
        var set = m.lines(svg);
        if (set.solid.length) tl.fromTo(set.solid, { drawSVG: '0%' }, { drawSVG: '100%', duration: 1.2, ease: 'power2.inOut', stagger: { amount: 0.5 }, clearProps: 'strokeDasharray,strokeDashoffset' }, at + 0.3);
      }
      if (words.length) tl.fromTo(words, { y: 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.07, clearProps: CLEAR }, at + 0.25);
    });
    var total = tl.duration(); if (total > 3) tl.timeScale(total / 3);
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
