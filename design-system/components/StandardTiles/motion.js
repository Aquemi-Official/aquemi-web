/* StandardTiles: the tiles are cut into the row like a poster (each wipes down from the top in turn), the count
   decodes, the tag types itself in (ScrambleText to its own text) and the icon prints up; the title and line rise
   last. One timeline, once on scroll-in, under 3 s. */
AQmotion.fx('StandardTiles', function (root, m) {
  root.querySelectorAll('.aq-standard-tiles').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    el.querySelectorAll('.aq-standard-tiles__tile').forEach(function (t, i) {
      var at = i * 0.15, tag = t.querySelector('.aq-standard-tiles__tag');
      tl.fromTo(t, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'power3.inOut', clearProps: 'clipPath' }, at);
      if (tag && window.ScrambleTextPlugin) { var txt = tag.textContent; tag.setAttribute('aria-label', txt); tl.to(tag, { duration: 0.9, scrambleText: { text: txt, chars: '<>0123456789', speed: 0.5, revealDelay: 0.2 }, ease: 'none' }, at + 0.3) }
      tl.from(t.querySelector('.aq-standard-tiles__ic'), { y: 16, autoAlpha: 0, duration: 0.6, clearProps: 'transform,opacity,visibility' }, at + 0.35);
      tl.from(t.querySelectorAll('.aq-standard-tiles__t, .aq-standard-tiles__d, .aq-standard-tiles__arrow'), { y: 12, autoAlpha: 0, duration: 0.5, stagger: 0.06, clearProps: 'transform,opacity,visibility' }, at + 0.5);
    });
    m.on(el, function () { tl.play() }, 'top 80%');
  });
});
