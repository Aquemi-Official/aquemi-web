/* TankTiles: the checkerboard opens like shutters. Every tile is covered by slats of the opposite tone that retract
   upward in a diagonal wave from the head tile (the blueprint tile with seven slats, the others with four); as a tile
   opens its slash numeral rolls up on the odometer and the tank's lines draw on. Once, about 2 s; the slats are
   removed at the end. Reduced motion: nothing runs, the grid is complete.
   Ported from Subframe Motion "Staggered shutter reveal" (shutter-scene), MIT, (c) 2026 Subframe
   (kept: the slats retracting with scaleY from the top, 820 ms on cubic-bezier(.16,1,.3,1), 45 ms between slats;
   replaced: the scene swap button with a once-on-scroll wave across the tile grid). */
AQmotion.fx('TankTiles', function (root, m) {
  root.querySelectorAll('.aq-tank-tiles').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var ease = window.CustomEase ? (CustomEase.get('aq-shutter') || CustomEase.create('aq-shutter', '.16,1,.3,1')) : 'expo.out';
    var cells = [el.querySelector('.aq-tank-tiles__head'), el.querySelector('.aq-tank-tiles__bp')].concat(qa('.aq-tank-tiles__tile')).filter(function (c) { return c && c.offsetParent !== null });
    var x0 = el.getBoundingClientRect(), W = (x0.width / 4) || 1;
    var tl = m.tw(gsap.timeline({ paused: true })), D = !!window.DrawSVGPlugin, blinds = [];
    cells.forEach(function (c) {
      var r = c.getBoundingClientRect(), col = Math.round((r.left - x0.left) / W), row = Math.round((r.top - x0.top) / (r.height || W)), at = Math.min(1.2, (col + row) * 0.09);
      var bp = c.classList.contains('aq-tank-tiles__bp'), n = bp ? 7 : 4, navy = c.classList.contains('is-navy') || c.classList.contains('aq-tank-tiles__head');
      var b = document.createElement('div'); b.className = 'aq-tank-tiles__blinds' + (navy || bp ? ' is-on-navy' : ''); b.setAttribute('aria-hidden', 'true');
      for (var i = 0; i < n; i++) b.appendChild(document.createElement('span'));
      c.appendChild(b); blinds.push(b);
      tl.fromTo(b.children, { scaleY: 1 }, { scaleY: 0, transformOrigin: '50% 0%', duration: 0.82, ease: ease, stagger: 0.045 }, at);
      var num = c.querySelector('.aq-tank-tiles__n');
      if (num && m.count) tl.add(function () { m.count(num, { duration: 0.8 }) }, at + 0.15);
      if (bp && D) tl.from(qa('.aq-tank-tiles__ln, .aq-tank-tiles__dim, .aq-tank-tiles__thin, .aq-tank-tiles__level', c), { drawSVG: '0%', duration: 0.9, stagger: 0.03, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, at + 0.2);
      if (bp) tl.from(qa('.aq-tank-tiles__jet, .aq-tank-tiles__tx', c), { autoAlpha: 0, duration: 0.3, stagger: 0.03, clearProps: 'opacity,visibility' }, at + 0.9);
    });
    tl.add(function () { blinds.forEach(function (b) { if (b.parentNode) b.parentNode.removeChild(b) }) });
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
