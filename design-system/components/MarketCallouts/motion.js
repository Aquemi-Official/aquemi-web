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

    // Ported from Subframe Motion "Guided inspection" (guided-inspection), MIT, (c) 2026 Subframe
    // Reading a market's callout puts the machine under an inspection spotlight: the drawing dims round the part that
    // callout is about and the lit window glides from part to part as the reader moves between callouts (550 ms,
    // cubic-bezier(.22,.75,.22,1), the library's camera values; no zoom, so the leaders stay on their parts).
    // Pointer or keyboard focus; leaving the callouts lifts the spotlight. Wide screens only.
    var plane = q('.aq-market-callouts__plane'); if (!plane || narrow || !svg || !A) return;
    var dim = document.createElement('span'); dim.className = 'aq-market-callouts__dim'; dim.setAttribute('aria-hidden', 'true');
    dim.innerHTML = '<span class="aq-market-callouts__spot"></span>'; plane.appendChild(dim);
    var spot = dim.firstChild, gEase = window.CustomEase ? (CustomEase.get('aq-inspect') || CustomEase.create('aq-inspect', 'M0,0 C0.22,0.75 0.22,1 1,1')) : 'power3.out', on = false, cur = null;
    function look(id) {
      if (id === cur) return; cur = id;
      var mk = id != null && q('.aq-market-callouts__mk[data-c="' + id + '"]'), part = mk && mk.getAttribute('data-part');
      var els = part ? qa('[data-iso-id="' + part + '"]', svg) : [];
      if (!els.length || tl.isActive()) { on = false; m.tw(gsap.to(dim, { autoAlpha: 0, duration: 0.2, overwrite: 'auto', onComplete: function () { if (!on) gsap.set(dim, { display: 'none' }) } })); return }
      var pr = plane.getBoundingClientRect(), r = null;
      els.concat(mk ? [mk] : []).forEach(function (e) { var b = e.getBoundingClientRect(); if (!b.width && !b.height) return; r = r ? { l: Math.min(r.l, b.left), t: Math.min(r.t, b.top), r: Math.max(r.r, b.right), b: Math.max(r.b, b.bottom) } : { l: b.left, t: b.top, r: b.right, b: b.bottom } });
      if (!r) return;
      var pad = 14, box = { left: r.l - pr.left - pad, top: r.t - pr.top - pad, width: r.r - r.l + 2 * pad, height: r.b - r.t + 2 * pad };
      if (!on) { gsap.set(spot, box); gsap.set(dim, { display: 'block' }); m.tw(gsap.to(dim, { autoAlpha: 1, duration: 0.3, overwrite: 'auto' })); on = true }
      else m.tw(gsap.to(spot, Object.assign({ duration: 0.55, ease: gEase, overwrite: 'auto' }, box)));
    }
    qa('.aq-market-callouts__c').forEach(function (c) {
      var id = c.getAttribute('data-c');
      c.addEventListener('pointerenter', function () { look(id) }); c.addEventListener('focusin', function () { look(id) });
    });
    var list = q('.aq-market-callouts__list') || el;
    qa('.aq-market-callouts__c').forEach(function (c) { c.addEventListener('pointerleave', function (ev) { if (!(ev.relatedTarget && ev.relatedTarget.closest && ev.relatedTarget.closest('.aq-market-callouts__c'))) look(null) }) });
    el.addEventListener('focusout', function (ev) { if (!el.contains(ev.relatedTarget)) look(null) });
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
