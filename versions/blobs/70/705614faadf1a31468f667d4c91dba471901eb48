/* LinkGrid: the route is walked. The spine draws down from the top (scaleY through --aq-spine); as it reaches each
   row the row's flow node snaps on (--aq-node), the number decodes, the icon frame or drawing wipes in and the title
   and line rise; the arrowhead lands when the spine ends. One timeline per list, about 0.35 s a row (under 3 s). */
AQmotion.fx('LinkGrid', function (root, m) {
  root.querySelectorAll('.aq-linkgrid').forEach(function (ol) {
    var lis = [].filter.call(ol.querySelectorAll(':scope > li'), function (li) { return !!li.offsetParent }); if (!lis.length) return;
    m.claim(ol);
    var H = ol.getBoundingClientRect().height || 1, top = ol.getBoundingClientRect().top, per = Math.min(0.38, 2.4 / lis.length);
    gsap.set(ol, { '--aq-spine': 0, '--aq-head': 0 });
    gsap.set(lis, { '--aq-node': 0 });
    lis.forEach(function (li) { var tx = li.querySelectorAll('.aq-rows__t, .aq-rows__d'), fig = li.querySelectorAll('.aq-rows__lead, .aq-rows__art'); if (tx.length) gsap.set(tx, { y: 14, autoAlpha: 0 }); if (fig.length) gsap.set(fig, { autoAlpha: 0 }) });
    m.on(ol, function () {
      var tl = m.tw(gsap.timeline({ delay: 0.15 })), dur = per * lis.length + 0.3;
      tl.to(ol, { '--aq-spine': 1, duration: dur, ease: 'none' }, 0);
      lis.forEach(function (li) {
        // the row lights when the spine passes its node
        var at = Math.max(0, (li.getBoundingClientRect().top - top + 24) / H) * dur;
        tl.to(li, { '--aq-node': 1, duration: 0.35, ease: 'back.out(3)' }, at);
        var lead = li.querySelector('.aq-rows__lead'), ix = li.querySelector('.aq-rows__row > .aq-index'), art = li.querySelector('.aq-rows__art');
        if (lead) tl.fromTo(lead, { autoAlpha: 0, clipPath: 'inset(100% 0 0 0)' }, { autoAlpha: 1, clipPath: 'inset(0% 0 0 0)', duration: 0.45, ease: 'power2.out', clearProps: 'clipPath,opacity,visibility' }, at);
        if (ix && window.ScrambleTextPlugin) tl.to(ix, { duration: 0.45, scrambleText: { text: ix.textContent, chars: '0123456789', speed: 0.8 }, ease: 'none' }, at);
        var tx = li.querySelectorAll('.aq-rows__t, .aq-rows__d'); if (tx.length) tl.to(tx, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.out', stagger: 0.08, clearProps: 'transform,opacity,visibility' }, at + 0.05);
        if (art) tl.fromTo(art, { autoAlpha: 0, clipPath: 'inset(100% 0 0 0)' }, { autoAlpha: 1, clipPath: 'inset(0% 0 0 0)', duration: 0.7, ease: 'power3.inOut', clearProps: 'clipPath,opacity,visibility' }, at + 0.1);
      });
      tl.to(ol, { '--aq-head': 1, duration: 0.2 }, dur - 0.05);
    }, 'top 82%');
  });
});
