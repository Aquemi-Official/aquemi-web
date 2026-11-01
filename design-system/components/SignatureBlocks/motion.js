/* SignatureBlocks: the documents are routed for signature. The key's three boxes stamp in, then the blocks follow in
   reading order: each frame draws in (clip from its top left), the "written" party fills its box, its
   signature line is ruled, then the reviewer's box fills and its line is ruled, so every block reads written first,
   reviewed second. Each block plays as it scrolls in, under 1.5 s. */
AQmotion.fx('SignatureBlocks', function (root, m) {
  [].forEach.call(root.querySelectorAll('.aq-signature-blocks'), function (el) {
    m.claim(el);
    var blocks = [].slice.call(el.querySelectorAll('.aq-signature-blocks__b')), key = el.querySelectorAll('.aq-signature-blocks__key span');
    function play(tl, b, at) {
      var f = b.querySelectorAll('.aq-signature-blocks__f');
      tl.fromTo(b, { clipPath: 'inset(0 100% 100% 0)' }, { clipPath: 'inset(0 0% 0% 0)', duration: 0.5, ease: 'power2.inOut', clearProps: 'clipPath' }, at);
      [].forEach.call(f, function (x, k) {
        var v = x.querySelector('.aq-signature-blocks__v'), ln = x.querySelector('.aq-signature-blocks__line'), t = at + 0.35 + k * 0.35;
        tl.from(v, { autoAlpha: 0, duration: 0.3, clearProps: 'opacity,visibility' }, t);
        if (ln) tl.fromTo(ln, { scaleX: 0 }, { scaleX: 1, duration: 0.35, ease: 'power2.out', clearProps: 'transform' }, t + 0.15);
      });
    }
    if (key.length) { var k = gsap.timeline({ paused: true }); m.tw(k); k.from(key, { scale: 1.3, autoAlpha: 0, duration: 0.3, stagger: 0.1, ease: 'power3.in', clearProps: 'transform,opacity,visibility' }); m.on(el, function () { k.play() }) }
    // each block on its own trigger, so a block never plays off screen
    blocks.forEach(function (b) { var t = gsap.timeline({ paused: true }); m.tw(t); play(t, b, 0); m.on(b, function () { t.play() }, 'top 88%') });
  });
});
