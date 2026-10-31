/* Aquemi motion: one GSAP layer over the rendered page (index.html calls AQmotion.run(root) after every render).
   Built by tools/design_system.py from assets/src/motion/core.js + design-system/components/<Name>/motion.js
   -> assets/motion.js. Do not edit assets/motion.js; edit those and rerun the build.

   Blueprint behaviour, never decoration for its own sake:
   - hero headline lines rise out of a mask (SplitText); section titles follow, word by word
   - mono labels (eyebrows) decode once, like an instrument powering up (ScrambleText)
   - solid line work draws itself on (DrawSVG); dashed runs creep once in the flow direction (stops within 5 s)
   - equipment drawings wipe in from the bottom like a print; drawing plates unroll
   - list rows, stations, folders and modules follow in a short stagger
   - key figures count up
   Components add their own choreography in design-system/components/<Name>/motion.js:
     AQmotion.fx('Name', function (root, m) { ... })
   and call m.claim(el) on any element they animate, so the generic layer leaves it (and everything in it) alone.
   Rules for every effect: once (or under 5 s: WCAG 2.2.2); transforms, opacity and clip only; the page is complete
   without JS; nothing runs under prefers-reduced-motion or when GSAP did not load; hover and press feedback may
   repeat because the visitor drives it. */
(function () {
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var live = [], splits = [], fx = [];
  function kill() {
    live.forEach(function (t) { try { t.kill() } catch (x) {} }); live = [];
    splits.forEach(function (s) { try { s.revert() } catch (x) {} }); splits = [];
    if (window.ScrollTrigger) ScrollTrigger.getAll().forEach(function (s) { s.kill() });
  }
  function on(el, fn, start) { live.push(ScrollTrigger.create({ trigger: el, start: start || 'top 85%', once: true, onEnter: fn })) }
  function tw(t) { live.push(t); return t }
  function claim(el) { if (el && el.setAttribute) el.setAttribute('data-aqm', ''); return el }
  function free(el) { return !el.closest('[data-aqm]') }
  function split(el, o) { if (!window.SplitText) return null; var s = new SplitText(el, o); splits.push(s); return s }
  function len(el) { try { return el.getTotalLength ? el.getTotalLength() : 0 } catch (x) { return 0 } }
  function stroked(el) { var cs = getComputedStyle(el); return cs.stroke && cs.stroke !== 'none' && parseFloat(cs.strokeWidth) > 0 }
  function dashed(el) { var d = getComputedStyle(el).strokeDasharray; return d && d !== 'none' && d !== '0' && d !== '0px' }
  var narrow = function () { return innerWidth < 860 };

  // Line work: solid strokes draw on, dashed runs creep once. Returns {solid, dash} so a component can time it itself.
  function lines(svg) {
    var solid = [], dash = [];
    svg.querySelectorAll('path,line,polyline,polygon,rect,circle,ellipse').forEach(function (el) {
      if (!stroked(el) || el.closest('defs,marker,mask,clipPath')) return;
      var L = len(el); if (L < 24) return;
      if (dashed(el)) { if (L > 120) dash.push(el); return }
      solid.push(el);
    });
    return { solid: solid, dash: dash };
  }
  function draw(set, o) {
    o = o || {};
    if (set.solid.length) {
      if (window.DrawSVGPlugin) { gsap.set(set.solid, { drawSVG: '0%' }); tw(gsap.to(set.solid, { drawSVG: '100%', duration: o.duration || 1.4, ease: o.ease || 'power2.inOut', delay: o.delay || 0, stagger: o.stagger || { amount: 0.6 }, clearProps: 'strokeDasharray,strokeDashoffset' })) }
    }
    set.dash.forEach(function (el) {
      var d = getComputedStyle(el).strokeDasharray.split(/[ ,]+/).reduce(function (a, v) { return a + (parseFloat(v) || 0) }, 0) || 12;
      tw(gsap.fromTo(el, { strokeDashoffset: 0 }, { strokeDashoffset: -d * 6, duration: 5, ease: 'power1.out', delay: o.delay || 0 }));
    });
  }
  function drawSvg(svg) {
    var set = lines(svg); if (!set.solid.length && !set.dash.length) return;
    if (window.DrawSVGPlugin) gsap.set(set.solid, { drawSVG: '0%' });
    on(svg, function () { draw(set) });
  }
  // Count a number up inside el (integers and one-decimal values only; text and placeholders untouched)
  function count(el, opt) {
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), t;
    while ((t = w.nextNode())) {
      var m = t.nodeValue.match(/^(\D*?)(\d+(?:[.,]\d+)?)(.*)$/); if (!m || t.parentElement.closest('.aq-ph')) continue;
      var end = parseFloat(m[2].replace(',', '.')), dec = (m[2].split(/[.,]/)[1] || '').length, sep = m[2].indexOf(',') > -1 ? ',' : '.', node = t, o = { v: 0 };
      if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', el.textContent.trim());
      node.nodeValue = m[1] + (0).toFixed(dec).replace('.', sep) + m[3];
      (function (node, m, end, dec, o) {
        var go = function () { tw(gsap.to(o, { v: end, duration: (opt && opt.duration) || 1.6, ease: 'power2.out', delay: (opt && opt.delay) || 0, onUpdate: function () { node.nodeValue = m[1] + o.v.toFixed(dec).replace('.', sep) + m[3] } })) };
        if (opt && opt.now) go(); else on(el, go);
      })(node, m, end, dec, o);
      return true;
    }
    return false;
  }
  // Mono label decodes once (keeps its accessible name)
  function scramble(el, delay) {
    if (!window.ScrambleTextPlugin || !el.textContent.trim()) return;
    var txt = el.textContent; if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', txt.trim());
    tw(gsap.to(el, { duration: Math.min(1.2, 0.3 + txt.length * 0.03), delay: delay || 0, scrambleText: { text: txt, chars: 'upperCase', speed: 0.6, revealDelay: 0.1 }, ease: 'none' }));
  }

  var M = { on: on, tw: tw, claim: claim, free: free, split: split, lines: lines, draw: draw, drawSvg: drawSvg, count: count, scramble: scramble, narrow: narrow };

  var gen = 0, lastPage = null, CHROME = ['NavBar', 'Hero', 'KeyFacts', 'SectionNav'];
  // Wait for the webfonts so SplitText measures the real lines (Geist Light wraps differently from the fallback)
  function run(root) {
    kill();
    if (reduce || !window.gsap || !window.ScrollTrigger || !root) return;
    var g = ++gen;
    // fonts.status can read 'loaded' before a face has been requested, so also ask for the display face by name;
    // then wait until no face is still loading (SplitText measures lines), never longer than 2 s
    var F = document.fonts, t0 = Date.now(), h = root.querySelector('.aq-hero h1');
    function settled() { return !F || (F.status === 'loaded' && (!F.check || F.check('300 40px "Geist"'))) }
    function go() { if (g !== gen) return; g = -1; if (h) gsap.set(h, { autoAlpha: 1 }); start(root) }
    function wait() { if (g !== gen) return; if (settled() || Date.now() - t0 > 2000) return go(); F.load('300 40px "Geist"').then(function () { return F.ready }).then(function () { requestAnimationFrame(wait) }, go) }
    if (!settled()) { if (h) gsap.set(h, { autoAlpha: 0 }); setTimeout(go, 2000); requestAnimationFrame(wait); return }
    start(root);
  }
  function start(root) {
    [window.ScrollTrigger, window.MotionPathPlugin, window.SplitText, window.DrawSVGPlugin, window.ScrambleTextPlugin, window.CustomEase, window.Flip].forEach(function (p) { if (p) gsap.registerPlugin(p) });
    if (window.CustomEase && !CustomEase.get('aq-settle')) CustomEase.create('aq-settle', 'M0,0 C0.16,0.9 0.3,1.02 0.52,1.01 0.72,1 0.86,1 1,1');

    // A re-render of the same page (the phone menu opening or closing) keeps the page still: only the chrome
    // components that handle the menu themselves run; nothing else replays
    var page = window.AQ ? AQ.page : location.hash, still = page === lastPage; lastPage = page; M.still = still;
    if (still) { fx.forEach(function (f) { if (CHROME.indexOf(f.name) > -1) try { f.fn(root, M) } catch (e) {} }); return }

    // Components first: they claim what they animate
    fx.forEach(function (f) { try { f.fn(root, M) } catch (e) { if (window.console) console.warn('motion ' + f.name, e) } });

    // Hero: headline lines rise out of a mask, the rest follows
    var hero = root.querySelector('.aq-hero');
    if (hero && free(hero)) {
      var h1 = hero.querySelector('h1'), s = h1 && split(h1, { type: 'lines', mask: 'lines', linesClass: 'aq-m-line' });
      var tl = tw(gsap.timeline({ defaults: { ease: 'power3.out' } }));
      if (s) tl.from(s.lines, { yPercent: 105, duration: 1, stagger: 0.09, ease: 'power4.out' }, 0.05);
      var eb = hero.querySelector('.aq-eyebrow'); if (eb) { tl.from(eb, { autoAlpha: 0, duration: 0.3 }, 0); scramble(eb, 0) }
      var rest = [].filter.call(hero.querySelectorAll('.aq-lead, .aq-hero__actions, .aq-key-facts, .aq-hero__index'), free);
      if (rest.length) tl.from(rest, { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.08, clearProps: 'transform,opacity,visibility' }, 0.35);
      if (!s && h1) tl.from(h1, { y: 28, autoAlpha: 0, duration: 0.9 }, 0);
    }

    // Section heads: eyebrow decodes, title words rise out of a mask, intro follows
    root.querySelectorAll('.aq-section').forEach(function (sec) {
      if (sec.closest('.aq-hero')) return;
      var head = sec.querySelector('.aq-sec-head');
      if (head && free(head)) {
        var t = head.querySelector('.aq-h1, h2'), eb = head.querySelector('.aq-eyebrow');
        var others = [].filter.call(head.children, function (c) { return c !== t && c !== eb });
        var st = t && split(t, { type: 'words', mask: 'words', wordsClass: 'aq-m-word' });
        if (st) gsap.set(st.words, { yPercent: 110 }); else if (t) gsap.set(t, { y: 24, autoAlpha: 0 });
        if (eb) gsap.set(eb, { autoAlpha: 0 });
        if (others.length) gsap.set(others, { y: 20, autoAlpha: 0 });
        on(sec, function () {
          var tl = tw(gsap.timeline());
          if (eb) { tl.to(eb, { autoAlpha: 1, duration: 0.2 }, 0); scramble(eb, 0) }
          if (st) tl.to(st.words, { yPercent: 0, duration: 0.9, ease: 'power4.out', stagger: 0.05 }, 0.05);
          else if (t) tl.to(t, { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, 0);
          if (others.length) tl.to(others, { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out', stagger: 0.07, clearProps: 'transform,opacity,visibility' }, 0.3);
        }, 'top 88%');
      }
      // Drawing plates unroll top to bottom
      sec.querySelectorAll('.aq-plate').forEach(function (p) {
        if (!free(p)) return;
        gsap.set(p, { clipPath: 'inset(0 0 100% 0)' });
        on(p, function () { tw(gsap.to(p, { clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'power3.inOut', clearProps: 'clipPath' })) }, 'top 90%');
      });
    });

    // Rows, stations, folders, modules: short stagger in reading order
    var items = root.querySelectorAll('.aq-section li, .aq-section tbody tr, [class*="__station"], [class*="__module"], [class*="__folder"], [class*="__stop"], [class*="__zone"], [class*="__cell"]');
    var seen = new Set(), list = [];
    items.forEach(function (el) { if (!free(el) || el.closest('.aq-hero, nav, footer, .aq-section-nav') || el.parentElement.closest('[class*="__station"],[class*="__module"],[class*="__folder"],[class*="__stop"],[class*="__zone"],[class*="__cell"]') || seen.has(el)) return; seen.add(el); list.push(el) });
    if (list.length) {
      gsap.set(list, { y: 18, autoAlpha: 0 });
      live.push.apply(live, ScrollTrigger.batch(list, { start: 'top 92%', once: true, onEnter: function (b) { tw(gsap.to(b, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power2.out', stagger: 0.06, clearProps: 'transform,opacity,visibility' })) } }));
    }

    // Line work draws on
    root.querySelectorAll('svg').forEach(function (svg) { if (!free(svg) || svg.closest('nav, .aq-nav, button, .aq-btn') || svg.getBoundingClientRect().width < 40) return; drawSvg(svg) });

    // Equipment drawings wipe in like a print
    root.querySelectorAll('.aq-spot, .aq-illustration').forEach(function (el) {
      if (!free(el)) return;
      if (el.closest('.aq-hero')) { tw(gsap.from(el, { clipPath: 'inset(100% 0 0 0)', duration: 1.6, ease: 'power3.inOut', delay: 0.3, clearProps: 'clipPath' })); return }
      gsap.set(el, { clipPath: 'inset(100% 0 0 0)' });
      on(el, function () { tw(gsap.to(el, { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power3.inOut', clearProps: 'clipPath' })) }, 'top 92%');
    });

    // Key figures count up
    root.querySelectorAll('.aq-key-facts__value, [class*="__v"] > .aq-num, .aq-case__val').forEach(function (el) { if (free(el)) count(el) });

    ScrollTrigger.refresh();
  }
  window.AQmotion = { run: run, kill: kill, fx: function (name, fn) { fx.push({ name: name, fn: fn }) } };
})();
