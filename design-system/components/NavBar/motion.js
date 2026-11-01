/* NavBar: the phone menu drops like a curtain and pushes the page down, its rows following one after another, the urgent
   block first; Close lifts it before the page re-renders without it. The section numbers on the wide bar decode once
   on a new page. Pass 9b, three Subframe Motion ports:
   - Ported from Subframe Motion "Curtain index" (curtain-index), MIT, (c) 2026 Subframe: the panel opens top-down
     (its height from 0, so the page below is pushed rather than covered) on the example's curtain ease
     (cubic-bezier(0.76, 0, 0.24, 1), 380 ms); the entries fade and slide down 12 px, 100 ms in and 35 ms apart
     (cubic-bezier(0.2, 0.8, 0.2, 1), 300 ms). Close: the entries fade in 120 ms while the curtain lifts (280 ms).
   - The toggle's two bars turn into a cross (curtain-index's toggle; icon-morph "menu-close"), 220 ms, and back on close.
   - Ported from Subframe Motion "Sliding selection" (sliding-tabs), MIT, (c) 2026 Subframe: on the wide bar one flow
     rule rests under the current section and slides on its spring (stiffness 460, damping 34) to the link the pointer
     or keyboard focus is on, then back; on a new page it slides from the section just left to the new one.
   All current behaviour stays: the urgent "Production stopped?" block, Escape, focus back on the toggle, the jump
   links closing the menu. Under reduced motion the menu opens and closes at once and the rule just sits. */
(function () {
  var closing = false, lastPage = null, lastBox = null;
  function ease(n, d) { if (window.CustomEase && !CustomEase.get(n)) CustomEase.create(n, d); return window.CustomEase ? n : 'power3.inOut' }
  function bars(t, open, dur) {
    var b = t && t.querySelectorAll('.aq-nav__burger > i'); if (!b || b.length < 2) return;
    var on = [{ y: 3, rotation: 45 }, { y: -3, rotation: -45 }], off = [{ y: 0, rotation: 0 }, { y: 0, rotation: 0 }];
    [0, 1].forEach(function (i) { b[i].style.transition = 'none'; gsap.fromTo(b[i], open ? off[i] : on[i], Object.assign({ duration: dur, ease: ease('aq-snap', 'M0,0 C0.2,0.8 0.2,1 1,1'), clearProps: open ? 'transform,transition' : 'transition' }, open ? on[i] : off[i])) });
  }
  // Close: let the curtain lift first, then run the toggle's own handler (which re-renders), then restore focus
  if (typeof document !== 'undefined') document.addEventListener('click', function (ev) {
    var t = ev.target && ev.target.closest && ev.target.closest('#wmenu'), panel = document.getElementById('wmenu-panel');
    if (!t || !panel || !window.gsap || closing || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) || typeof t.onclick !== 'function') return;
    ev.stopImmediatePropagation(); ev.preventDefault(); closing = true;
    var fn = t.onclick, rows = panel.querySelectorAll('.aq-menu__urgent, .aq-menu__list li, .aq-menu__label, .aq-menu__cta');
    bars(t, false, 0.22);
    gsap.to(rows, { autoAlpha: 0, duration: 0.12, ease: 'power1.out' });
    gsap.fromTo(panel, { height: panel.offsetHeight, overflow: 'hidden' }, { height: 0, paddingTop: 0, paddingBottom: 0, duration: 0.28, ease: ease('aq-curtain', 'M0,0 C0.76,0 0.24,1 1,1'), onComplete: function () {
      closing = false; fn.call(t); var n = document.getElementById('wmenu'); if (n) n.focus();
    } });
  }, true);

  AQmotion.fx('NavBar', function (root, m) {
    var nav = root.querySelector('.aq-nav'); if (!nav) return;
    var page = window.AQ ? AQ.page : location.hash, fresh = page !== lastPage; lastPage = page;
    var panel = root.querySelector('#wmenu-panel');
    if (panel) {
      m.claim(panel);
      bars(root.querySelector('#wmenu'), true, 0.22);
      var rows = [].slice.call(panel.querySelectorAll('.aq-menu__urgent, .aq-menu__list li, .aq-menu__label, .aq-menu__cta'));
      var tl = m.tw(gsap.timeline());
      tl.fromTo(panel, { height: 0, overflow: 'hidden' }, { height: 'auto', duration: 0.38, ease: ease('aq-curtain', 'M0,0 C0.76,0 0.24,1 1,1'), clearProps: 'height,overflow' }, 0);
      if (rows.length) tl.fromTo(rows, { y: -12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.3, stagger: 0.035, ease: ease('aq-snap', 'M0,0 C0.2,0.8 0.2,1 1,1'), clearProps: 'transform,opacity,visibility' }, 0.1);
    }
    if (fresh && !m.narrow()) [].forEach.call(nav.querySelectorAll('.aq-nav__links .aq-nav__num'), function (n, i) { m.scramble(n, 0.1 + i * 0.06) });

    // The sliding rule on the wide bar
    var ul = nav.querySelector('.aq-nav__links'); if (!ul || !ul.offsetParent) return;
    var mark = document.createElement('li'); mark.className = 'aq-nav__mark'; mark.setAttribute('aria-hidden', 'true');
    ul.appendChild(mark); nav.classList.add('has-mark');
    function box(a) { var r = a.getBoundingClientRect(), o = ul.getBoundingClientRect(); return { x: r.left - o.left, w: r.width } }
    var st = { x: 0, w: 0, k: 0 }, sp = m.spring(st, { stiffness: 460, damping: 34, mass: 1 }, function (o) {
      mark.style.transform = 'translateX(' + o.x.toFixed(1) + 'px) scaleX(' + Math.max(0, o.w / 100).toFixed(4) + ')'; mark.style.opacity = Math.max(0, Math.min(1, o.k)).toFixed(3);
      if (cur) lastBox = { x: o.x, w: o.w };
    });
    m.tw({ kill: sp.stop });
    var cur = ul.querySelector('a[aria-current="page"]'), rest = cur ? box(cur) : null;
    if (rest && lastBox && fresh) { sp.jump({ x: lastBox.x, w: lastBox.w, k: 1 }); sp.to({ x: rest.x, w: rest.w }) }
    else if (rest) sp.jump({ x: rest.x, w: rest.w, k: 1 });
    else sp.jump({ x: 0, w: 0, k: 0 });
    function go(a, instant) {
      var b = a ? box(a) : rest;
      if (!b) { sp.to({ k: 0 }); return }
      if (!st.k && !rest) { sp.jump({ x: b.x, w: b.w * 0.6 }) }
      (instant ? sp.jump : sp.to)({ x: b.x, w: b.w, k: 1 });
    }
    ul.addEventListener('pointerover', function (ev) { var a = ev.target.closest && ev.target.closest('a'); if (a && ev.pointerType === 'mouse') go(a) });
    ul.addEventListener('pointerleave', function () { go(null) });
    ul.addEventListener('focusin', function (ev) { var a = ev.target.closest && ev.target.closest('a'); if (a && a.matches(':focus-visible')) go(a, true) });
    ul.addEventListener('focusout', function (ev) { if (!ul.contains(ev.relatedTarget)) go(null, true) });
  });
})();
