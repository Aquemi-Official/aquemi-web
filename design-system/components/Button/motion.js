/* Button: visitor-driven feedback on every aq-btn the site draws (hero, closing, contact routes, forms, nav). Document-level
   listeners, so buttons drawn by any later render get it too; nothing runs until a pointer or key reaches a button, and
   nothing at all under reduced motion (the press then stays the plain CSS state change, Button style.css).
   - Primary: magnetic pull (magnetic-button). On a fine pointer the button leans toward the pointer while it is over the
     button or within 28 px of it, then springs back to rest.
   - Secondary: the label rolls (slide-text-button). On hover the label slides up out of the button and its copy rolls
     in from below (a text-shadow copy one button-height down, so the accessible name and the markup stay one label).
   - Every button: press depth (press-depth). The button tips a few degrees toward the point pressed while it sinks; the
     press and release run in CSS (Button style.css, --aq-px / --aq-py set here).
   Hover 200 ms, release a third faster; no loops. Touch gets the press, never a stuck hover state. */
(function () {
  if (typeof document === 'undefined' || window.__aqBtn) return; window.__aqBtn = 1;
  var mq = function (q) { return window.matchMedia && matchMedia(q).matches };
  var still = function () { return mq('(prefers-reduced-motion: reduce)') || !window.gsap };
  var fine = function (ev) { return ev.pointerType === 'mouse' && mq('(hover: hover) and (pointer: fine)') };
  function btn(ev, sel) { var b = ev.target && ev.target.closest && ev.target.closest(sel); return b && !b.classList.contains('aq-btn--pending') && !b.disabled ? b : null }

  /* Ported from Subframe Motion "Magnetic button" (magnetic-button), MIT, (c) 2026 Subframe.
     Pull = offset from the button's centre x max(0, 1 - distance / 160) x 0.28, followed on the example's spring
     (stiffness 180, damping 18, mass 0.3: overdamped, so a 0.4 s power3.out follow). */
  var pulling = null;
  function magnet(b) {
    if (pulling && pulling.b === b) return;
    if (pulling) pulling.stop();
    var st = { x: 0, y: 0 }, set = function () { b.style.setProperty('--aq-mx', st.x.toFixed(2)); b.style.setProperty('--aq-my', st.y.toFixed(2)) };
    var qx = gsap.quickTo(st, 'x', { duration: 0.4, ease: 'power3.out', onUpdate: set }), qy = gsap.quickTo(st, 'y', { duration: 0.4, ease: 'power3.out', onUpdate: set });
    b.classList.add('is-magnet');
    function move(ev) {
      if (!b.isConnected) return stop();
      var r = b.getBoundingClientRect(), cx = r.left + r.width / 2 - st.x, cy = r.top + r.height / 2 - st.y, dx = ev.clientX - cx, dy = ev.clientY - cy;
      if (Math.abs(dx) > r.width / 2 + 28 || Math.abs(dy) > r.height / 2 + 28) return stop();
      var k = Math.max(0, 1 - Math.hypot(dx, dy) / 160) * 0.28; qx(dx * k); qy(dy * k);
    }
    function stop() {
      window.removeEventListener('pointermove', move); if (pulling && pulling.b === b) pulling = null;
      gsap.to(st, { x: 0, y: 0, duration: 0.3, ease: 'power3.out', overwrite: true, onUpdate: set, onComplete: function () { b.classList.remove('is-magnet'); b.style.removeProperty('--aq-mx'); b.style.removeProperty('--aq-my') } });
    }
    window.addEventListener('pointermove', move, { passive: true });
    pulling = { b: b, stop: stop };
  }

  /* Ported from Subframe Motion "Slide text button" (slide-text-button), MIT, (c) 2026 Subframe.
     The track moves one face up (cubic-bezier(0.645, 0.045, 0.355, 1)); 200 ms in, 140 ms back. */
  function roll(b, on) {
    var lab = b.querySelector(':scope > .aq-btn__label');
    if (!lab) {
      if (!on) return;
      lab = document.createElement('span'); lab.className = 'aq-btn__label';
      while (b.firstChild) lab.appendChild(b.firstChild); b.appendChild(lab);
    }
    if (window.CustomEase && !CustomEase.get('aq-slide')) CustomEase.create('aq-slide', 'M0,0 C0.645,0.045 0.355,1 1,1');
    var h = b.clientHeight; lab.style.textShadow = '0 ' + h + 'px currentColor';
    gsap.to(lab, { y: on ? -h : 0, duration: on ? 0.2 : 0.14, ease: window.CustomEase ? 'aq-slide' : 'power2.inOut', overwrite: true });
  }

  document.addEventListener('pointerover', function (ev) {
    if (still() || !fine(ev)) return;
    var p = btn(ev, '.aq-btn--primary'); if (p) magnet(p);
    var s = btn(ev, '.aq-btn--secondary:not(.aq-nav__toggle)'); if (s && !s.contains(ev.relatedTarget)) roll(s, true);
  });
  document.addEventListener('pointerout', function (ev) {
    var s = btn(ev, '.aq-btn--secondary:not(.aq-nav__toggle)'); if (s && !s.contains(ev.relatedTarget) && window.gsap) roll(s, false);
  });

  /* Ported from Subframe Motion "Press depth" (press-depth), MIT, (c) 2026 Subframe.
     The press point, -1..1 on each axis, tips the button toward it (CSS: up to 3 deg, perspective 340 px). */
  document.addEventListener('pointerdown', function (ev) {
    if (ev.pointerType === 'mouse' && ev.button !== 0) return;
    var b = btn(ev, '.aq-btn:not(.aq-btn--link)'); if (!b || still()) return;
    var r = b.getBoundingClientRect(), c = function (v) { return Math.max(-1, Math.min(1, v)).toFixed(2) };
    b.style.setProperty('--aq-px', c((ev.clientX - r.left) / r.width * 2 - 1));
    b.style.setProperty('--aq-py', c((ev.clientY - r.top) / r.height * 2 - 1));
  }, { passive: true });
})();
