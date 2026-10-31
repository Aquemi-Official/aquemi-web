/* LimitGauges: each instrument powers up in order. The scale arc draws, the inner arc and crosshairs follow, the ticks
   pop on from zero to full scale, the scale numbers light, the pivot seats and the needle sweeps up from zero while the
   readout counts with it; the needle settles on the limit, the limit tick and pointer flash once in flow, the LIMIT chip
   drops in, then the pass band fills and the basis tags follow. Cells in one row start a beat apart.
   Open dials (value still to come): the bare scale draws, the needle twitches and returns to rest.
   Rule variant: the ruled line runs across, the number decodes, the scale wipes on, the passing band fills from the
   threshold side, the threshold mark drops through the track and flashes, the chip and the rule text follow. */
AQmotion.fx('LimitGauges', function (root, m) {
  var cs = getComputedStyle(document.documentElement), FLOW = cs.getPropertyValue('--flow').trim() || '#2f6fa3';
  var short = m.narrow() ? 0.8 : 1, D = window.DrawSVGPlugin;
  // Timeline that skips empty targets (a dial without numbers, a rule without a scale) instead of warning
  function G(tl) {
    var ok = function (t) { return t && (t.length === undefined || t.length > 0) }, g = {};
    ['from', 'to', 'fromTo'].forEach(function (k) { g[k] = function (t) { if (ok(t)) tl[k].apply(tl, arguments); return g } });
    g.call = function () { tl.call.apply(tl, arguments); return g };
    return g;
  }
  function plain(el) { return el && !el.children.length && el.textContent.trim() }
  function batch(els, play) {
    if (!els.length) return;
    els.forEach(function (el) { m.claim(el); gsap.set(el, { autoAlpha: 0 }) });
    ScrollTrigger.batch(els, { start: 'top 88%', once: true, onEnter: function (b) { b.forEach(function (el, j) { play(el, j * 0.18 * short) }) } }).forEach(m.tw);
  }
  function draw(tl, el, at, dur) {
    if (!el) return;
    if (D) tl.fromTo(el, { drawSVG: '0%' }, { drawSVG: '100%', duration: dur * short, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, at);
    else tl.from(el, { autoAlpha: 0, duration: dur * short }, at);
  }

  function dial(it, delay) {
    var q = function (s) { return it.querySelector(s) }, qa = function (s) { return it.querySelectorAll(s) };
    var svg = q('svg'), open = it.classList.contains('is-open'), needle = q('.aq-limit-gauges__needle');
    var tl = G(m.tw(gsap.timeline({ delay: delay, defaults: { ease: 'power3.out' } })));
    gsap.set(it, { autoAlpha: 1 });
    tl.from(it, { y: 14, duration: 0.5 * short, clearProps: 'transform' }, 0);
    tl.from(q('.aq-limit-gauges__p'), { y: 8, autoAlpha: 0, duration: 0.45, clearProps: 'transform,opacity,visibility' }, 0.05);
    if (!svg) { // readout cell: the value block settles in between its dashed rules
      tl.from(qa('.aq-limit-gauges__spec > div'), { y: 10, autoAlpha: 0, duration: 0.5, stagger: 0.12, clearProps: 'transform,opacity,visibility' }, 0.25);
      return;
    }
    // Scale
    if (open) tl.from(q('.aq-limit-gauges__track'), { autoAlpha: 0, duration: 0.5 * short }, 0.1);
    else draw(tl, q('.aq-limit-gauges__track'), 0.1, 0.7);
    draw(tl, q('.aq-limit-gauges__inner'), 0.25, 0.6);
    tl.from(qa('.aq-limit-gauges__cross line'), { autoAlpha: 0, duration: 0.4, stagger: 0.06 }, 0.2);
    var ticks = qa('.aq-limit-gauges__ticks line');
    tl.from(ticks, { scale: 0, autoAlpha: 0, transformOrigin: '50% 50%', duration: 0.25, ease: 'back.out(3)', stagger: { amount: 0.5 * short } }, 0.35);
    tl.from(qa('.aq-limit-gauges__nums text'), { autoAlpha: 0, y: 3, duration: 0.3, stagger: 0.07 }, 0.5);
    tl.from(q('.aq-limit-gauges__pivot'), { scale: 0, transformOrigin: '50% 50%', duration: 0.35, ease: 'back.out(2.5)' }, 0.55);
    if (!needle) return;
    if (open) { // no value yet: the needle wakes, twitches into the scale and returns to rest
      tl.from(needle, { autoAlpha: 0, duration: 0.3 }, 0.6)
        .to(needle, { rotation: 9, svgOrigin: '120 128', duration: 0.35, ease: 'power2.out' }, 0.8)
        .to(needle, { rotation: 0, svgOrigin: '120 128', duration: 0.9, ease: 'elastic.out(1, 0.45)' }, 1.15);
      return;
    }
    // Needle: from zero up the scale to the limit (its angle comes from the drawn line), the readout counting with it
    var x2 = +needle.getAttribute('x2'), y2 = +needle.getAttribute('y2'), a = Math.atan2(128 - y2, x2 - 120) * 180 / Math.PI;
    var sweep = 1.5 * short;
    tl.fromTo(needle, { rotation: -(160 - a), svgOrigin: '120 128' }, { rotation: 0, svgOrigin: '120 128', duration: sweep, ease: 'elastic.out(1, 0.6)' }, 0.65);
    var read = q('.aq-limit-gauges__read'), num = q('.aq-limit-gauges__num');
    if (read) tl.from(read, { autoAlpha: 0, duration: 0.3 }, 0.6);
    if (num) tl.call(function () { m.count(num, { now: true, duration: 0.9 * short }) }, null, 0.65);
    var cap = q('.aq-limit-gauges__cap'); if (plain(cap) && !m.narrow()) tl.call(function () { m.scramble(cap, 0) }, null, 1.2 * short);
    // Arrival: the limit tick and pointer flash once in flow, the chip drops in beside them
    var hit = 0.65 + 0.75 * short, lim = q('.aq-limit-gauges__limit'), ptr = q('.aq-limit-gauges__ptr');
    if (lim) tl.from(lim, { autoAlpha: 0, duration: 0.15 }, hit - 0.1).fromTo(lim, { stroke: FLOW }, { stroke: getComputedStyle(lim).stroke, duration: 0.6, ease: 'power2.in', clearProps: 'stroke' }, hit);
    if (ptr) tl.from(ptr, { scale: 0, transformOrigin: '50% 100%', duration: 0.35, ease: 'back.out(3)' }, hit - 0.1).fromTo(ptr, { fill: FLOW }, { fill: getComputedStyle(ptr).fill, duration: 0.6, ease: 'power2.in', clearProps: 'fill' }, hit);
    tl.from(qa('.aq-limit-gauges__mark:not(.aq-limit-gauges__mark--second)'), { y: -8, autoAlpha: 0, duration: 0.4, ease: 'back.out(2)', clearProps: 'transform,opacity,visibility' }, hit + 0.05);
    // Effect: the passing side fills, a guaranteed outlet value takes its dashed place, the basis follows
    draw(tl, q('.aq-limit-gauges__pass'), hit + 0.1, 0.8);
    tl.from(qa('.aq-limit-gauges__second, .aq-limit-gauges__mark--second'), { autoAlpha: 0, duration: 0.4, clearProps: 'opacity,visibility' }, hit + 0.6);
    tl.from(qa('.aq-limit-gauges__foot .aq-tag, .aq-limit-gauges__foot .aq-limit-gauges__mt'), { y: 6, autoAlpha: 0, duration: 0.35, stagger: 0.08, clearProps: 'transform,opacity,visibility' }, hit + 0.2);
  }

  function rule(r, delay) {
    var q = function (s) { return r.querySelector(s) }, qa = function (s) { return r.querySelectorAll(s) };
    var tl = G(m.tw(gsap.timeline({ delay: delay, defaults: { ease: 'power3.out' } })));
    gsap.set(r, { autoAlpha: 1 });
    tl.fromTo(r, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.7 * short, ease: 'power2.inOut', clearProps: 'clipPath' }, 0);
    var rn = q('.aq-limit-gauges__rn');
    if (rn && window.ScrambleTextPlugin) tl.to(rn, { duration: 0.6, scrambleText: { text: rn.textContent, chars: '0123456789', speed: 0.8 }, ease: 'none' }, 0.05);
    tl.from(q('.aq-limit-gauges__p'), { y: 10, autoAlpha: 0, duration: 0.5, clearProps: 'transform,opacity,visibility' }, 0.15);
    var bar = q('.aq-limit-gauges__bar');
    if (bar) {
      var up = bar.classList.contains('is-up');
      tl.fromTo(q('.aq-limit-gauges__scale'), { clipPath: 'inset(-50% 100% -50% 0)' }, { clipPath: 'inset(-50% 0% -50% 0)', duration: 0.6 * short, ease: 'power2.inOut', clearProps: 'clipPath' }, 0.25)
        .from(q('.aq-limit-gauges__tick'), { scaleY: 0, transformOrigin: '50% 100%', duration: 0.35, ease: 'back.out(2.5)', clearProps: 'transform' }, 0.7 * short)
        .fromTo(q('.aq-limit-gauges__tick'), { backgroundColor: FLOW }, { backgroundColor: getComputedStyle(q('.aq-limit-gauges__tick')).backgroundColor, duration: 0.6, ease: 'power2.in', clearProps: 'backgroundColor' }, 0.7 * short + 0.3)
        .from(q('.aq-limit-gauges__band'), { scaleX: 0, transformOrigin: up ? '0% 50%' : '100% 50%', duration: 0.6 * short, ease: 'power2.out', clearProps: 'transform' }, 0.75 * short)
        .from(q('.aq-limit-gauges__chip'), { y: 8, autoAlpha: 0, duration: 0.4, ease: 'back.out(2)', clearProps: 'transform,opacity,visibility' }, 0.85 * short)
        .from(qa('.aq-limit-gauges__ends span'), { autoAlpha: 0, duration: 0.3, stagger: 0.1, clearProps: 'opacity,visibility' }, 0.6 * short);
    }
    tl.from(q('.aq-limit-gauges__rt'), { y: 8, autoAlpha: 0, duration: 0.45, clearProps: 'transform,opacity,visibility' }, bar ? 1.0 * short : 0.3);
    tl.from(qa('.aq-limit-gauges__rule > .aq-limit-gauges__m .aq-tag, .aq-limit-gauges__rule > .aq-limit-gauges__m .aq-limit-gauges__mt'), { y: 6, autoAlpha: 0, duration: 0.35, stagger: 0.08, clearProps: 'transform,opacity,visibility' }, bar ? 1.1 * short : 0.45);
  }

  root.querySelectorAll('.aq-limit-gauges').forEach(function (list) {
    if (!m.free(list)) return;
    var rules = list.classList.contains('aq-limit-gauges--rules');
    // folded rows are never animated: they appear whole when the visitor opens the fold
    var els = [].filter.call(list.children, function (li) { return !li.classList.contains('aq-fold-x') });
    m.claim(list);
    batch(els, rules ? rule : dial);
  });
});
