/* MarketCallouts: the machine is built, the water runs through it once, then each market is called off the part it
   is about. The skid and equipment draw back to front and settle solid (IsoKit
   timeline); the water drops down the feed riser and runs the route, lighting each stage as it arrives. Then, per
   callout in turn, the marker pops on its part (the part lights), the leader draws from the part out to the callout
   and the callout's lines follow the line in. The callouts start as the water reaches the RO; parts settle back at the end; about 4 s.
   Hover or focus inside a callout lights its part, marker and leader (a reading aid; the numbers carry the same link). */
AQmotion.fx('MarketCallouts', function (root, m) {
  root.querySelectorAll('.aq-market-callouts').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var q = function (s, c) { return (c || el).querySelector(s) }, qa = function (s, c) { return [].slice.call((c || el).querySelectorAll(s)) };
    var svg = q('svg.aq-iso'), D = window.DrawSVGPlugin, narrow = m.narrow(), A = window.AQiso;
    var tl = A && svg ? A.timeline(svg, m, { draw: 1.1, pipe: 0.6, flow: 1.2, stagger: 0.06 }) : null;
    if (!tl) { tl = m.tw(gsap.timeline({ paused: true })); if (svg) tl.from(svg, { autoAlpha: 0, duration: 0.6, clearProps: 'opacity,visibility' }, 0) }
    var t0 = tl.labels && tl.labels.flow != null ? tl.labels.flow + 0.2 : 1.6;
    qa('.aq-market-callouts__c').forEach(function (c, i) {
      var id = c.getAttribute('data-c'), mk = q('.aq-market-callouts__mk[data-c="' + id + '"]'), ld = q('.aq-market-callouts__lead[data-c="' + id + '"]');
      var part = mk && mk.getAttribute('data-part'), at = t0 + i * 0.4;
      if (mk) tl.from(mk, { scale: 0, duration: 0.4, ease: 'back.out(2.6)', clearProps: 'transform' }, at);
      if (part && A) tl.call(function () { A.light(svg, part, true) }, null, at);
      var path = ld && [].slice.call(ld.querySelectorAll('path')), dot = ld && ld.querySelector('circle');
      if (path && path.length && D && !narrow) tl.fromTo(path, { drawSVG: '100% 100%' }, { drawSVG: '0% 100%', duration: 0.55, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, at + 0.1);
      else if (path && path.length) tl.from(path, { autoAlpha: 0, duration: 0.3 }, at + 0.1);
      if (dot) tl.from(dot, { scale: 0, transformOrigin: '50% 50%', duration: 0.3, clearProps: 'transform' }, at + 0.6);
      var kids = [].slice.call(c.children);
      tl.from(kids, { x: narrow ? 0 : (c.classList.contains('aq-market-callouts__c--l') ? -16 : 16), y: narrow ? 12 : 0, autoAlpha: 0, duration: 0.5, stagger: 0.08, clearProps: 'transform,opacity,visibility' }, at + (narrow ? 0.1 : 0.55));
      if (part && A) tl.call(function () { A.light(svg, part, false) }, null, at + 1.1);
    });
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
/* Hover or focus within a callout: light its part, marker and leader */
(function () {
  function set(el, id) {
    [].forEach.call(el.querySelectorAll('[data-c]'), function (x) { x.classList.toggle('is-on', id != null && x.getAttribute('data-c') === id) });
    var svg = el.querySelector('svg.aq-iso');
    if (svg && window.AQiso) [].forEach.call(el.querySelectorAll('.aq-market-callouts__mk'), function (mk) { var p = mk.getAttribute('data-part'); if (p) window.AQiso.light(svg, p, id != null && mk.getAttribute('data-c') === id) });
  }
  function over(ev) { var el = ev.target.closest && ev.target.closest('.aq-market-callouts'); if (!el) return; var c = ev.target.closest('.aq-market-callouts__c'); set(el, c ? c.getAttribute('data-c') : null) }
  document.addEventListener('mouseover', over);
  document.addEventListener('mouseout', function (ev) { var el = ev.target.closest && ev.target.closest('.aq-market-callouts'); if (el && !el.contains(ev.relatedTarget)) set(el, null) });
})();
