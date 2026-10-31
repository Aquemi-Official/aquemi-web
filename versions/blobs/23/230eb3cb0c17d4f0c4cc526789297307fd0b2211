/* Aquemi motion: one GSAP layer over the rendered page (index.html calls AQmotion.run(root) after every render).
   Blueprint behaviour, never decoration for its own sake:
   - section heads rise in; list rows, stations, folders and modules follow in a short stagger
   - solid line work in drawings draws itself on (pipes, gauge arcs, leaders, routes)
   - dashed runs (routes, flow mains) creep slowly in the flow direction, like water moving
   - equipment drawings (Spot, Illustration masks) wipe in from the bottom like a print
   - gauge needles sweep up to the limit; key figures count up
   - the home loop carries flow dots round the figure of eight
   Everything is skipped under prefers-reduced-motion and when GSAP did not load; the page is complete without it. */
(function () {
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var live = [];
  function kill() { live.forEach(function (t) { try { t.kill() } catch (x) {} }); live = []; if (window.ScrollTrigger) ScrollTrigger.getAll().forEach(function (s) { s.kill() }) }
  function on(el, fn, start) { live.push(ScrollTrigger.create({ trigger: el, start: start || 'top 85%', once: true, onEnter: fn })) }
  function tw(t) { live.push(t); return t }

  function len(el) { try { return el.getTotalLength ? el.getTotalLength() : 0 } catch (x) { return 0 } }
  function stroked(el) { var cs = getComputedStyle(el); return cs.stroke && cs.stroke !== 'none' && parseFloat(cs.strokeWidth) > 0 }
  function dashed(el) { var d = getComputedStyle(el).strokeDasharray; return d && d !== 'none' && d !== '0' && d !== '0px' }

  function drawSvg(svg) {
    var solid = [], dash = [];
    svg.querySelectorAll('path,line,polyline,polygon,circle,ellipse').forEach(function (el) {
      if (!stroked(el) || el.closest('defs,marker,mask,clipPath')) return;
      var L = len(el); if (L < 24) return;
      if (dashed(el)) { if (L > 120) dash.push(el); return }
      el.style.strokeDasharray = L; el.style.strokeDashoffset = L; solid.push(el);
    });
    if (!solid.length && !dash.length) return;
    on(svg, function () {
      if (solid.length) tw(gsap.to(solid, { strokeDashoffset: 0, duration: 1.4, ease: 'power2.inOut', stagger: { amount: 0.6 },
        onComplete: function () { solid.forEach(function (el) { el.style.strokeDasharray = ''; el.style.strokeDashoffset = '' }) } }));
      dash.forEach(function (el) {
        var d = getComputedStyle(el).strokeDasharray.split(/[ ,]+/).reduce(function (a, v) { return a + (parseFloat(v) || 0) }, 0) || 12;
        tw(gsap.fromTo(el, { strokeDashoffset: 0 }, { strokeDashoffset: -d * 4, duration: 3.2, ease: 'none', repeat: -1 }));
      });
    });
  }

  function run(root) {
    kill();
    if (reduce || !window.gsap || !window.ScrollTrigger || !root) return;
    gsap.registerPlugin(ScrollTrigger); if (window.MotionPathPlugin) gsap.registerPlugin(MotionPathPlugin);

    // Hero: headline lines rise, the rest follows
    var hero = root.querySelector('.aq-hero');
    if (hero) {
      var parts = hero.querySelectorAll('.aq-eyebrow, h1, .aq-lead, .aq-hero__actions, .aq-btn, .aq-key-facts, .aq-hero__index');
      tw(gsap.from(parts, { y: 28, autoAlpha: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08, clearProps: 'transform,opacity,visibility' }));
    }

    // Section heads and their content
    root.querySelectorAll('.aq-section').forEach(function (s) {
      if (s.closest('.aq-hero')) return;
      var head = s.querySelector('.aq-sec-head');
      if (head) { var hp = head.children; gsap.set(hp, { y: 24, autoAlpha: 0 }); on(s, function () { tw(gsap.to(hp, { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out', stagger: 0.07, clearProps: 'transform,opacity,visibility' })) }, 'top 88%') }
      var plate = s.querySelectorAll('.aq-plate');
      if (plate.length) { gsap.set(plate, { clipPath: 'inset(0 0 100% 0)' }); plate.forEach(function (p) { on(p, function () { tw(gsap.to(p, { clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'power3.inOut', clearProps: 'clipPath' })) }, 'top 90%') }) }
    });

    // Rows, stations, folders, modules: short stagger in reading order
    var items = root.querySelectorAll('.aq-section li, .aq-section tbody tr, [class*="__station"], [class*="__module"], [class*="__folder"], [class*="__stop"], [class*="__zone"], [class*="__cell"]');
    var seen = new Set(), list = [];
    items.forEach(function (el) { if (el.closest('.aq-hero, nav, footer, .aq-section-nav') || el.parentElement.closest('[class*="__station"],[class*="__module"],[class*="__folder"],[class*="__stop"],[class*="__zone"],[class*="__cell"]') || seen.has(el)) return; seen.add(el); list.push(el) });
    if (list.length) {
      gsap.set(list, { y: 18, autoAlpha: 0 });
      live.push.apply(live, ScrollTrigger.batch(list, { start: 'top 92%', once: true, onEnter: function (b) { tw(gsap.to(b, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power2.out', stagger: 0.06, clearProps: 'transform,opacity,visibility' })) } }));
    }

    // Line work draws on
    root.querySelectorAll('svg').forEach(function (svg) { if (svg.closest('nav, .aq-nav, button, .aq-btn') || svg.getBoundingClientRect().width < 40) return; drawSvg(svg) });

    // Equipment drawings wipe in like a print
    root.querySelectorAll('.aq-spot, .aq-illustration').forEach(function (el) {
      if (el.closest('.aq-hero')) { tw(gsap.from(el, { clipPath: 'inset(100% 0 0 0)', duration: 1.6, ease: 'power3.inOut', delay: 0.3, clearProps: 'clipPath' })); return }
      gsap.set(el, { clipPath: 'inset(100% 0 0 0)' });
      on(el, function () { tw(gsap.to(el, { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power3.inOut', clearProps: 'clipPath' })) }, 'top 92%');
    });

    // Gauge needles sweep up from the bottom of the scale to the limit
    root.querySelectorAll('.aq-limit-gauges__needle').forEach(function (n) {
      gsap.set(n, { rotation: -75, svgOrigin: '120 128' });
      on(n.ownerSVGElement || n, function () { tw(gsap.to(n, { rotation: 0, svgOrigin: '120 128', duration: 1.8, ease: 'elastic.out(1, 0.55)', delay: 0.4 })) });
    });

    // Key figures count up (integers and one-decimal values only; text and placeholders untouched)
    root.querySelectorAll('.aq-key-facts__value, [class*="__v"] > .aq-num, .aq-case__val').forEach(function (el) {
      var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), t;
      while ((t = w.nextNode())) {
        var m = t.nodeValue.match(/^(\D*?)(\d+(?:[.,]\d+)?)(.*)$/); if (!m || t.parentElement.closest('.aq-ph')) continue;
        var end = parseFloat(m[2].replace(',', '.')), dec = (m[2].split(/[.,]/)[1] || '').length, node = t, o = { v: 0 };
        node.nodeValue = m[1] + (0).toFixed(dec) + m[3];
        (function (node, m, end, dec, o) { on(el, function () { tw(gsap.to(o, { v: end, duration: 1.6, ease: 'power2.out', onUpdate: function () { node.nodeValue = m[1] + o.v.toFixed(dec) + m[3] } })) }) })(node, m, end, dec, o);
        break;
      }
    });

    // Home loop: flow dots travel the figure of eight
    var pipe = root.querySelector('.aq-loop__pipe');
    if (pipe && window.MotionPathPlugin) {
      var svg = pipe.ownerSVGElement, ns = 'http://www.w3.org/2000/svg';
      for (var i = 0; i < 4; i++) {
        var c = document.createElementNS(ns, 'circle'); c.setAttribute('r', '3.5'); c.setAttribute('class', 'aq-loop__dot'); c.setAttribute('aria-hidden', 'true'); svg.appendChild(c);
        tw(gsap.to(c, { duration: 9, repeat: -1, ease: 'none', delay: -i * 2.25, motionPath: { path: pipe, align: pipe, alignOrigin: [0.5, 0.5] } }));
      }
    }
    ScrollTrigger.refresh();
  }
  window.AQmotion = { run: run, kill: kill };
})();
