/* NavBar: the phone menu unrolls from the bar (clip-path) and its rows drop in one after another; Close rolls it back
   up before the page re-renders without it. The section numbers on the wide bar decode once on a new page. */
(function () {
  var closing = false, lastPage = null;
  // Close: let the panel roll up first, then run the toggle's own handler (which re-renders), then restore focus
  if (typeof document !== 'undefined') document.addEventListener('click', function (ev) {
    var t = ev.target && ev.target.closest && ev.target.closest('#wmenu'), panel = document.getElementById('wmenu-panel');
    if (!t || !panel || !window.gsap || closing || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) || typeof t.onclick !== 'function') return;
    ev.stopImmediatePropagation(); ev.preventDefault(); closing = true;
    var fn = t.onclick;
    gsap.to(panel, { clipPath: 'inset(0 0 100% 0)', duration: 0.28, ease: 'power2.in', onComplete: function () {
      closing = false; fn.call(t); var n = document.getElementById('wmenu'); if (n) n.focus();
    } });
  }, true);

  AQmotion.fx('NavBar', function (root, m) {
    var nav = root.querySelector('.aq-nav'); if (!nav) return;
    var page = window.AQ ? AQ.page : location.hash, fresh = page !== lastPage; lastPage = page;
    var panel = root.querySelector('#wmenu-panel');
    if (panel) {
      m.claim(panel);
      var rows = [].slice.call(panel.querySelectorAll('.aq-menu__list li, .aq-menu__label, .aq-menu__cta'));
      var tl = m.tw(gsap.timeline());
      tl.fromTo(panel, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.4, ease: 'power3.out', clearProps: 'clipPath' }, 0);
      if (rows.length) tl.from(rows, { y: -10, autoAlpha: 0, duration: 0.3, stagger: 0.035, ease: 'power2.out', clearProps: 'transform,opacity,visibility' }, 0.08);
    }
    if (fresh && !m.narrow()) [].forEach.call(nav.querySelectorAll('.aq-nav__links .aq-nav__num'), function (n, i) { m.scramble(n, 0.1 + i * 0.06) });
  });
})();
