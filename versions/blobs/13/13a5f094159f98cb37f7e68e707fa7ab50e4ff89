/* OptionTags: the options are laid on the table. The label card is set down first; then each tag drops onto its place
   from above, turning as it falls and settling at its own tilt, its string pulling out from the eyelet; the round
   stamp strikes a beat later; the folders slide in from the right onto the navy strip; the two vials roll in last.
   Hover picks a tag up (CSS). One timeline, once, under 5 s. Folded tiles (phones) appear whole when opened. */
AQmotion.fx('OptionTags', function (root, m) {
  root.querySelectorAll('.aq-option-tags').forEach(function (el) {
    if (!m.free(el)) return;
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var items = qa('.aq-option-tags__item').filter(function (t) { return t.offsetParent !== null }), label = el.querySelector('.aq-option-tags__label');
    qa('.aq-option-tags__list, .aq-option-tags__vial').forEach(m.claim);
    if (label) m.claim(label.querySelector('.aq-option-tags__base'));
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })), short = m.narrow() ? 0.75 : 1;
    if (label) tl.from(label.querySelector('.aq-option-tags__base'), { autoAlpha: 0, y: 8, duration: 0.5, clearProps: 'transform,opacity,visibility' }, 0.4);
    var k = 0;
    items.forEach(function (it, i) {
      var folder = it.classList.contains('aq-option-tags__item--folder'), r = parseFloat(it.style.getPropertyValue('--r')) || 0;
      var at = 0.2 + i * 0.28 * short, str = it.querySelector('.aq-option-tags__string'), stamp = it.querySelector('.aq-option-tags__stamp');
      if (folder) tl.from(it, { x: 160, rotation: r + 6, autoAlpha: 0, duration: 0.9, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, at);
      else tl.from(it, { y: -110, rotation: r + (k++ % 2 ? 14 : -12), autoAlpha: 0, duration: 0.85, ease: 'back.out(1.3)', clearProps: 'transform,opacity,visibility' }, at);
      if (str) {
        var round = it.classList.contains('aq-option-tags__item--round');
        tl.fromTo(str, { clipPath: round ? 'inset(100% -50% 0 -50%)' : 'inset(-50% 0 -50% 100%)' }, { clipPath: round ? 'inset(0% -50% 0 -50%)' : 'inset(-50% 0 -50% 0%)', duration: 0.5, ease: 'power2.out', clearProps: 'clipPath' }, at + 0.45);
      }
      if (stamp) tl.from(stamp, { scale: 2.2, autoAlpha: 0, duration: 0.3, ease: 'power4.in', clearProps: 'transform,opacity,visibility' }, at + 0.6)
        .fromTo(stamp, { scale: 1 }, { scale: 1.08, duration: 0.08, yoyo: true, repeat: 1, ease: 'power1.out', clearProps: 'transform' }, at + 0.9);
    });
    var vials = qa('.aq-option-tags__vial').filter(function (v) { return v.offsetParent !== null || getComputedStyle(v).display !== 'none' });
    if (vials.length) tl.from(vials, { x: -60, autoAlpha: 0, duration: 0.9, stagger: 0.15, ease: 'power2.out', clearProps: 'opacity,visibility' }, 0.6 + items.length * 0.2);
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
