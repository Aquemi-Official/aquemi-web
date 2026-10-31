/* FAQ: on scroll-in the spine draws down and each question card is hung from it in turn (node pops, connector runs out,
   card slides off the spine). Open and close ease the answer's height with GSAP; the [ + ] glyph turns in CSS.
   Native <details> stays the source of truth: without JS or under reduced motion it opens and closes instantly, and
   Enter/Space on the summary go through the same click handler. */
AQmotion.fx('FAQ', function (root, m) {
  root.querySelectorAll('.aq-faq').forEach(function (faq) {
    var cards = [].filter.call(faq.children, function (d) { return d.tagName === 'DETAILS' && d.offsetParent });
    if (!cards.length) return;
    m.claim(faq);
    var short = m.narrow();
    gsap.set(faq, { '--aq-spine': 0 });
    gsap.set(cards, { '--aq-node': 0, '--aq-link': 0, x: -12, autoAlpha: 0, clipPath: 'inset(0 100% 0 -48px)' });
    m.on(faq, function () {
      var tl = m.tw(gsap.timeline());
      var per = short ? 0.1 : 0.14;
      tl.to(faq, { '--aq-spine': 1, duration: 0.25 + cards.length * per, ease: 'none' }, 0);
      cards.forEach(function (d, i) {
        var at = 0.1 + i * per;
        tl.to(d, { '--aq-node': 1, duration: 0.3, ease: 'back.out(3)' }, at)
          .to(d, { '--aq-link': 1, duration: 0.2, ease: 'power2.out' }, at + 0.1)
          .to(d, { x: 0, autoAlpha: 1, clipPath: 'inset(0 0% 0 -48px)', duration: short ? 0.5 : 0.6, ease: 'power3.out', clearProps: 'transform,opacity,visibility,clipPath' }, at + 0.18);
      });
    }, 'top 82%');
  });
});
(function () {
  if (window.__aqFaq) return; window.__aqFaq = 1;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function body(d) { return d.querySelector(':scope > .aq-faq__a') }
  function done(d, a) {
    d.classList.remove('is-closing');
    if (d.dataset.aqName) { d.setAttribute('name', d.dataset.aqName); delete d.dataset.aqName }
    gsap.set(a, { clearProps: 'height,opacity,overflow' });
  }
  function close(d) {
    var a = body(d); if (!a) { d.open = false; return }
    // Out of its name group while it closes, so opening another card does not snap this one shut
    if (d.getAttribute('name')) { d.dataset.aqName = d.getAttribute('name'); d.removeAttribute('name') }
    d.classList.add('is-closing'); gsap.killTweensOf(a);
    gsap.fromTo(a, { height: a.offsetHeight, overflow: 'hidden' }, { height: 0, opacity: 0, duration: 0.34, ease: 'power2.inOut', onComplete: function () { d.open = false; done(d, a) } });
  }
  function open(d) {
    var a = body(d), nm = d.getAttribute('name') || d.dataset.aqName, from = 0;
    if (nm) document.querySelectorAll('details[name="' + nm.replace(/"/g, '') + '"][open]').forEach(function (o) { if (o !== d) close(o) });
    if (d.classList.contains('is-closing')) { from = a.offsetHeight; gsap.killTweensOf(a); done(d, a) }
    d.open = true; if (!a) return;
    gsap.fromTo(a, { height: from, opacity: from ? 1 : 0, overflow: 'hidden' }, { height: 'auto', opacity: 1, duration: 0.46, ease: 'aq-settle', onComplete: function () { gsap.set(a, { clearProps: 'height,opacity,overflow' }) } });
  }
  document.addEventListener('click', function (ev) {
    var s = ev.target.closest && ev.target.closest('.aq-faq > details > summary');
    if (!s || reduce || !window.gsap || ev.target.closest('a')) return;
    var d = s.parentElement; ev.preventDefault();
    if (d.open && !d.classList.contains('is-closing')) close(d); else open(d);
  });
})();
