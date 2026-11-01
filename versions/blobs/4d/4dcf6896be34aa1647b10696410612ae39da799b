/* FAQ: on scroll-in the dial's outline numerals roll up to the number of questions while the rows wipe in from the
   left one after another, each question rising a step behind its hairline. Open and close ease the answer's height
   with GSAP; the dial turns over to the open question's number ("02", "of 06") and back to the count when all are
   closed. Native <details> stays the source of truth: without JS or under reduced motion it opens and closes
   instantly (the dial then just switches its number), and Enter/Space on the summary go through the same handler. */
AQmotion.fx('FAQ', function (root, m) {
  root.querySelectorAll('.aq-faq').forEach(function (faq) {
    var cards = [].filter.call(faq.children, function (d) { return d.tagName === 'DETAILS' && d.offsetParent });
    if (!cards.length) return;
    m.claim(faq);
    var sec = faq.closest('section'), dial = sec && sec.querySelector('.aq-faq__dial'), num = dial && dial.querySelector('.aq-faq__dial-n > span');
    if (dial && dial.offsetParent) m.claim(dial); else num = null;
    var short = m.narrow();
    gsap.set(cards, { clipPath: 'inset(0 100% 0 0)' });
    gsap.set(cards.map(function (d) { return d.querySelector('.aq-faq__q') }), { y: 12, autoAlpha: 0 });
    if (num) gsap.set(num, { yPercent: 100 });
    m.on(faq, function () {
      var tl = m.tw(gsap.timeline());
      var per = short ? 0.08 : 0.1;
      if (num) tl.to(num, { yPercent: 0, duration: 0.9, ease: 'power4.out', clearProps: 'transform' }, 0);
      cards.forEach(function (d, i) {
        var at = 0.1 + i * per;
        tl.to(d, { clipPath: 'inset(0 0% 0 0)', duration: 0.7, ease: 'power3.inOut', clearProps: 'clipPath' }, at)
          .to(d.querySelector('.aq-faq__q'), { y: 0, autoAlpha: 1, duration: 0.55, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, at + 0.25);
      });
    }, 'top 82%');
  });
});
(function () {
  if (window.__aqFaq) return; window.__aqFaq = 1;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function body(d) { return d.querySelector(':scope > .aq-faq__a') }
  /* The dial follows the open row: its number and "of NN", or the count of questions when none is open */
  function dial(faq) {
    var sec = faq && faq.closest('section'), dl = sec && sec.querySelector('.aq-faq__dial'); if (!dl) return;
    var rows = [].filter.call(faq.children, function (d) { return d.tagName === 'DETAILS' }), on = -1;
    rows.forEach(function (d, i) { if (d.open && !d.classList.contains('is-closing')) on = i });
    var tot = dl.getAttribute('data-total'), want = on < 0 ? tot : (on < 9 ? '0' : '') + (on + 1);
    var n = dl.querySelector('.aq-faq__dial-n > span'), k = dl.querySelector('.aq-faq__dial-k'); if (!n || n.textContent === want && dl.classList.contains('is-open') === on >= 0) return;
    dl.classList.toggle('is-open', on >= 0);
    if (k) k.textContent = on < 0 ? (tot === '01' ? 'question' : 'questions') : 'of ' + tot;
    if (n.textContent === want) return;
    if (reduce || !window.gsap || !dl.offsetParent) { n.textContent = want; return }
    var up = on < 0 || +want > +n.textContent ? 1 : -1;
    gsap.killTweensOf(n);
    gsap.timeline().to(n, { yPercent: -100 * up, duration: 0.18, ease: 'power2.in' })
      .add(function () { n.textContent = want })
      .fromTo(n, { yPercent: 100 * up }, { yPercent: 0, duration: 0.42, ease: 'power3.out', clearProps: 'transform' });
  }
  document.addEventListener('toggle', function (ev) { var d = ev.target; if (d && d.tagName === 'DETAILS' && d.parentElement && d.parentElement.classList.contains('aq-faq')) dial(d.parentElement) }, true);
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
    dial(d.parentElement);
  });
})();
