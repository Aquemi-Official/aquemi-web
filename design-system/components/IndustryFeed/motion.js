/* Ported from Subframe Motion "Departure board" (departure-board), MIT, (c) 2026 Subframe
   The evidence (a standard code) arrives like a split-flap board: each character is a cell whose leaf, showing a
   blank glyph on its front and the real character on its back, turns over the cell's centre line (rotateX 0 to
   -180 deg, 440 ms, cubic-bezier(.4,0,.2,1), 45 ms between cells, the library's values). Pointing at or focusing a
   destination turns its board over once more, faster (visitor-driven). The real text stays in the DOM for readers
   (a visually hidden copy while the cells turn, plain text again when they rest); placeholders never flip. */
function aqFlapEase() { if (window.CustomEase && !CustomEase.get('aq-flap')) CustomEase.create('aq-flap', 'M0,0 C0.4,0 0.2,1 1,1'); return window.CustomEase ? 'aq-flap' : 'power2.inOut' }
function flap(ev, dur, step) {
  if (!ev || ev.children.length && !ev.querySelector('.aq-flap')) return;
  if (ev._flap) { ev._flap.progress(1) }
  var txt = ev.getAttribute('data-flap') || ev.textContent; ev.setAttribute('data-flap', txt);
  var G = '0123456789<>-·', h = '<span class="aq-industry-feed__sr">' + txt.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</span>';
  [].forEach.call(txt, function (c) {
    var ch = c === ' ' ? ' ' : c.replace(/&/g, '&amp;').replace(/</g, '&lt;'), g = c === ' ' ? ' ' : G[(Math.random() * G.length) | 0].replace(/</g, '&lt;');
    h += '<span class="aq-flap" aria-hidden="true"><span class="aq-flap__s">' + ch + '</span><span class="aq-flap__leaf"><span class="aq-flap__f">' + g + '</span><span class="aq-flap__b">' + ch + '</span></span><span class="aq-flap__seam"></span></span>';
  });
  ev.innerHTML = h;
  var leaves = [].slice.call(ev.querySelectorAll('.aq-flap__leaf'));
  ev._flap = gsap.timeline({ onComplete: function () { ev.textContent = txt; ev._flap = null } })
    .fromTo(leaves, { rotationX: 0 }, { rotationX: -180, duration: dur, ease: aqFlapEase(), stagger: step });
  return ev._flap;
}
/* IndustryFeed: the water arrives from the page edge, runs the trunk with a droplet at its head, and tees down into
   each destination in turn as it passes: the drop fills, the node seats with a ring, the evidence decodes like a
   readout and the name and line rise under it. Phones: the line fills down the left edge, each branch lighting its
   item. One timeline, once, under 3 s. */
AQmotion.fx('IndustryFeed', function (root, m) {
  root.querySelectorAll('.aq-industry-feed').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var qa = function (s, r) { return [].slice.call((r || el).querySelectorAll(s)) };
    var items = qa('.aq-industry-feed__item'), trunk = el.querySelector('.aq-industry-feed__trunk .aq-industry-feed__water'), drip = el.querySelector('.aq-industry-feed__drip');
    var FLOW = getComputedStyle(document.documentElement).getPropertyValue('--flow').trim();
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    function arrive(it, at) {
      var w = it.querySelector('.aq-industry-feed__drop .aq-industry-feed__water'), node = it.querySelector('.aq-industry-feed__node'), ev = it.querySelector('.aq-industry-feed__ev');
      var rest = qa('.aq-industry-feed__code, .aq-industry-feed__t, .aq-industry-feed__d', it);
      tl.fromTo(w, { scaleY: 0 }, { scaleY: 1, duration: 0.45, ease: 'power1.in', clearProps: 'transform' }, at)
        .fromTo(node, { scale: 0 }, { scale: 1, duration: 0.5, ease: 'back.out(2.4)', clearProps: 'transform' }, at + 0.4)
        .fromTo(node, { boxShadow: '0 0 0 14px ' + FLOW }, { boxShadow: '0 0 0 0px rgba(0,0,0,0)', duration: 0.6, ease: 'power2.out', clearProps: 'boxShadow' }, at + 0.45)
        .from(rest, { y: 18, autoAlpha: 0, duration: 0.6, stagger: 0.07, clearProps: 'transform,opacity,visibility' }, at + 0.3);
      if (ev && !ev.children.length) {
        gsap.set(ev, { autoAlpha: 0 });
        tl.set(ev, { autoAlpha: 1 }, at + 0.4).add(function () { flap(ev, 0.44, 0.045) }, at + 0.4);
      } else if (ev) tl.from(ev, { autoAlpha: 0, y: 12, duration: 0.5, clearProps: 'transform,opacity,visibility' }, at + 0.4);
    }
    // Pointing at or focusing a destination turns its board over again (after the entrance has finished)
    items.forEach(function (it) {
      var card = it.querySelector('.aq-industry-feed__card'), ev = it.querySelector('.aq-industry-feed__ev');
      function go() { if (!tl.isActive() && tl.progress() === 1) flap(ev, 0.3, 0.03) }
      if (card && ev) { card.addEventListener('pointerenter', go); card.addEventListener('focus', go) }
    });
    if (m.narrow() || !trunk) {
      items.forEach(function (it, i) { arrive(it, 0.1 + i * 0.5) });
      m.on(el, function () { tl.play() }, 'top 75%');
      return;
    }
    // the water's speed along the trunk is constant; each drop opens when the head passes its x
    var run = 1.5, t0 = 0.1, tb = trunk.parentNode.getBoundingClientRect(), W = tb.width || 1;
    tl.fromTo(trunk, { scaleX: 0 }, { scaleX: 1, duration: run, ease: 'none', clearProps: 'transform' }, t0);
    items.forEach(function (it) {
      var d = it.querySelector('.aq-industry-feed__drop'), x = d ? d.getBoundingClientRect().left + d.offsetWidth / 2 - tb.left : 0;
      arrive(it, t0 + run * Math.min(1, Math.max(0, x / W)) - 0.05);
    });
    if (drip) {
      var px = { x: 0 }, lastX = function () { return trunk.parentNode.offsetWidth - drip.offsetWidth / 2 };
      tl.set(drip, { autoAlpha: 1 }, t0)
        .to(px, { x: 1, duration: run, ease: 'none', onUpdate: function () { gsap.set(drip, { x: (trunk.parentNode.offsetLeft) + px.x * lastX() }) } }, t0)
        .to(drip, { autoAlpha: 0, scale: 2, duration: 0.35 }, t0 + run).set(drip, { display: 'none' });
    }
    m.on(el, function () { tl.play() }, 'top 70%');
  });
});
