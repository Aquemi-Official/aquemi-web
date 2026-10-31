/* DocList: the binder is filled. The plate unrolls, then the folders slide down into it one by one in index order,
   each landing with a slight settle; its tab rises out of the folder's top edge just after it lands; the title block
   is stamped last. Phones: folders land as they scroll in, and the folders a "Show all" reveals slide in the same way. */
AQmotion.fx('DocList', function (root, m) {
  function shown(el) { return !!el.offsetParent }
  function drop(tl, lis, at, o) {
    lis.forEach(function (li, i) {
      var t = at + i * o.gap, tab = li.querySelector('.aq-docs__tab');
      tl.fromTo(li, { y: -o.y, rotation: o.rot ? (i % 2 ? 1.2 : -1.2) : 0, autoAlpha: 0 }, { y: 0, rotation: 0, autoAlpha: 1, duration: o.dur, ease: 'aq-settle', clearProps: 'transform,opacity,visibility' }, t);
      if (tab) tl.fromTo(tab, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 0.35, ease: 'power2.out', clearProps: 'clipPath' }, t + o.dur * 0.55);
    });
  }
  root.querySelectorAll('.aq-docs-binder').forEach(function (bd) {
    var plate = bd.querySelector('.aq-plate'), lis = [].filter.call(bd.querySelectorAll('.aq-docs > li'), shown);
    if (!plate || !lis.length) return;
    m.claim(bd);
    var block = plate.querySelector('.aq-plate__block'), phone = m.narrow();
    gsap.set(plate, { clipPath: 'inset(0 0 100% 0)' });
    gsap.set(lis, { autoAlpha: 0 });
    if (block) gsap.set(block, { autoAlpha: 0, scale: 1.25, transformOrigin: '100% 100%' });
    var o = phone ? { y: 20, gap: 0.08, dur: 0.55, rot: false } : { y: 36, gap: 0.075, dur: 0.7, rot: true };
    m.on(bd, function () {
      var tl = m.tw(gsap.timeline());
      tl.to(plate, { clipPath: 'inset(0 0 0% 0)', duration: phone ? 0.6 : 0.85, ease: 'power3.inOut', clearProps: 'clipPath' }, 0);
      // Desktop: one timeline for the whole binder. Phones: the folders in view now, the rest as they scroll in.
      var now = phone ? lis.filter(function (li) { return li.getBoundingClientRect().top < innerHeight }) : lis;
      drop(tl, now, phone ? 0.3 : 0.45, o);
      if (phone) lis.filter(function (li) { return now.indexOf(li) < 0 }).forEach(function (li) {
        m.on(li, function () { var t = m.tw(gsap.timeline()); drop(t, [li], 0, o) }, 'top 92%');
      });
      if (block) tl.to(block, { autoAlpha: 1, scale: 1, duration: 0.35, ease: 'power4.in', clearProps: 'transform,opacity,visibility' }, phone ? 0.5 : 0.45 + now.length * o.gap + 0.3);
    }, 'top 78%');
    // Phone fold: the folders "Show all" reveals slide into the binder in order
    var btn = bd.parentElement && bd.parentElement.querySelector(':scope > .aq-fold__btn');
    if (btn && !btn.dataset.aqm) {
      btn.dataset.aqm = '1';
      btn.addEventListener('click', function () {
        requestAnimationFrame(function () {
          var w = btn.closest('.aq-fold'); if (!w || !w.classList.contains('is-open')) return;
          var xs = [].filter.call(bd.querySelectorAll('.aq-docs > li.aq-fold-x'), shown); if (!xs.length) return;
          var tl = m.tw(gsap.timeline()); drop(tl, xs, 0, { y: 20, gap: 0.07, dur: 0.5, rot: false });
        });
      });
    }
  });
});
