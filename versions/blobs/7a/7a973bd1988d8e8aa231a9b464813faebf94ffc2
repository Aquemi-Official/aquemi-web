/* SectionNav: a flow marker under the jump links slides to the section being read. SectionNav.js already marks that
   link (aria-current) from its scroll-spy; the marker follows the mark (a MutationObserver, no loop), scaled to the
   link's width with transforms only. The bar's links settle in once when it first scrolls in. */
AQmotion.fx('SectionNav', function (root, m) {
  var nav = root.querySelector('.aq-section-nav'); if (!nav) return;
  var ol = nav.querySelector('.aq-section-nav__links'); if (!ol) return;
  m.claim(nav);
  var mark = document.createElement('li'); mark.className = 'aq-section-nav__mark'; mark.setAttribute('aria-hidden', 'true');
  ol.appendChild(mark); nav.classList.add('has-mark');
  gsap.set(mark, { autoAlpha: 0, scaleX: 0.2, transformOrigin: '0 50%' });
  var cur = null;
  function move() {
    var a = ol.querySelector('a[aria-current="true"]');
    if (a === cur) return;
    var first = !cur; cur = a;
    if (!a) { m.tw(gsap.to(mark, { autoAlpha: 0, duration: 0.25 })); return }
    var r = a.getBoundingClientRect(), x = r.left - ol.getBoundingClientRect().left + ol.scrollLeft, w = r.width;
    if (first) gsap.set(mark, { x: x, scaleX: w / 100 });
    m.tw(gsap.to(mark, { x: x, scaleX: w / 100, autoAlpha: 1, duration: first ? 0.3 : 0.5, ease: 'aq-settle' }));
  }
  if (window.MutationObserver) {
    var mo = new MutationObserver(move); mo.observe(ol, { attributes: true, attributeFilter: ['aria-current'], subtree: true });
    m.tw({ kill: function () { mo.disconnect() } });
  }
  move();
  m.tw(ScrollTrigger.create({ trigger: nav, onRefresh: function () { cur = null; move() } }));
  var links = [].slice.call(ol.querySelectorAll('li:not(.aq-section-nav__mark)'));
  gsap.set(links, { autoAlpha: 0, y: -6 });
  m.on(nav, function () { m.tw(gsap.to(links, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out', clearProps: 'transform,opacity,visibility' })) }, 'top 98%');
});
