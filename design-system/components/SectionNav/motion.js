/* SectionNav: a flow marker under the jump links slides to the section being read, and a pale highlight glides under
   the link the pointer is on. SectionNav.js already marks the section being read (aria-current) from its scroll-spy;
   the marker follows the mark (a MutationObserver, no loop), scaled to the link's width with transforms only. The
   bar's links settle in once when it first scrolls in.
   Pass 9b, two Subframe Motion ports:
   - Ported from Subframe Motion "Sliding selection" (sliding-tabs), MIT, (c) 2026 Subframe: the marker keeps its
     momentum between links on the example's spring (stiffness 460, damping 34, mass 1: it runs a hair past a far link
     and settles), with m.spring from core.js.
   - Ported from Subframe Motion "Fluid tab rail" (fluid-tab-rail), MIT, (c) 2026 Subframe: hovering a link glides a
     flow-tint highlight to it (exponential smoothing, 65 ms time constant); leaving the links glides it back to the
     link being read and fades it. Keyboard focus moves it instantly (keyboard moves never wait for motion).
   Fine pointers only for the highlight; nothing runs under reduced motion (the underline then marks the link). */
AQmotion.fx('SectionNav', function (root, m) {
  var nav = root.querySelector('.aq-section-nav'); if (!nav) return;
  var ol = nav.querySelector('.aq-section-nav__links'); if (!ol) return;
  m.claim(nav);
  var mark = document.createElement('li'); mark.className = 'aq-section-nav__mark'; mark.setAttribute('aria-hidden', 'true');
  var glow = document.createElement('li'); glow.className = 'aq-section-nav__glow'; glow.setAttribute('aria-hidden', 'true');
  ol.appendChild(mark); ol.insertBefore(glow, ol.firstChild); nav.classList.add('has-mark');
  gsap.set(mark, { autoAlpha: 0, scaleX: 0.2, transformOrigin: '0 50%' });
  function box(a) { var r = a.getBoundingClientRect(), o = ol.getBoundingClientRect(); return { x: r.left - o.left + ol.scrollLeft, y: r.top - o.top, w: r.width, h: r.height } }

  // The marker: a spring on x and width
  var ms = { x: 0, w: 20 }, sp = m.spring(ms, { stiffness: 460, damping: 34, mass: 1 }, function (o) { gsap.set(mark, { x: o.x, scaleX: Math.max(0.01, o.w / 100) }) });
  m.tw({ kill: sp.stop });
  var cur = null;
  function move() {
    var a = ol.querySelector('a[aria-current="true"]');
    if (a === cur) return;
    var first = !cur; cur = a;
    if (!a) { m.tw(gsap.to(mark, { autoAlpha: 0, duration: 0.25 })); return }
    var b = box(a);
    if (first) sp.jump({ x: b.x, w: b.w }); else sp.to({ x: b.x, w: b.w });
    m.tw(gsap.to(mark, { autoAlpha: 1, duration: first ? 0.3 : 0.15 }));
  }
  if (window.MutationObserver) {
    var mo = new MutationObserver(move); mo.observe(ol, { attributes: true, attributeFilter: ['aria-current'], subtree: true });
    m.tw({ kill: function () { mo.disconnect() } });
  }
  move();
  m.tw(ScrollTrigger.create({ trigger: nav, onRefresh: function () { if (cur) { var b = box(cur); sp.jump({ x: b.x, w: b.w }) } } }));

  // The hover highlight: exponential smoothing toward the hovered link, back to the current one on leave
  var gs = { x: 0, y: 0, w: 0, h: 0, k: 0 }, goal = null, fade = 0, on = false, shown = false;
  function paint() { glow.style.transform = 'translate(' + gs.x.toFixed(1) + 'px,' + gs.y.toFixed(1) + 'px)'; glow.style.width = gs.w.toFixed(1) + 'px'; glow.style.height = (gs.k ? gs.h : 0).toFixed(1) + 'px'; glow.style.opacity = gs.k.toFixed(3) }
  function tick(t, dt) {
    var f = 1 - Math.exp(-(dt || 16) / 65), still = true;
    ['x', 'y', 'w', 'h'].forEach(function (p) { if (goal) { gs[p] += (goal[p] - gs[p]) * f; if (Math.abs(goal[p] - gs[p]) > 0.1) still = false } });
    var kk = on ? 1 : 0; gs.k += (kk - gs.k) * (1 - Math.exp(-(dt || 16) / (on ? 90 : 140))); if (Math.abs(kk - gs.k) > 0.005) still = false; else gs.k = kk;
    paint(); if (still) { gsap.ticker.remove(tick); shown = false }
  }
  function glide(a, instant) {
    goal = a ? box(a) : cur ? box(cur) : goal; if (!goal) return;
    if (!gs.w || instant) { gs.x = goal.x; gs.y = goal.y; gs.w = goal.w; gs.h = goal.h }
    if (!shown) { shown = true; gsap.ticker.add(tick) }
  }
  m.tw({ kill: function () { gsap.ticker.remove(tick) } });
  var fine = window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (fine) {
    ol.addEventListener('pointerover', function (ev) { var a = ev.target.closest && ev.target.closest('a'); if (!a || ev.pointerType !== 'mouse') return; on = true; glide(a, gs.k < 0.05) });
    ol.addEventListener('pointerleave', function () { on = false; glide(null) });
  }
  ol.addEventListener('focusin', function (ev) { var a = ev.target.closest && ev.target.closest('a'); if (!a || !a.matches(':focus-visible')) return; on = true; glide(a, true) });
  ol.addEventListener('focusout', function (ev) { if (!ol.contains(ev.relatedTarget)) { on = false; glide(null) } });

  var links = [].slice.call(ol.querySelectorAll('li:not(.aq-section-nav__mark):not(.aq-section-nav__glow)'));
  gsap.set(links, { autoAlpha: 0, y: -6 });
  m.on(nav, function () { m.tw(gsap.to(links, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out', clearProps: 'transform,opacity,visibility' })) }, 'top 98%');
});
