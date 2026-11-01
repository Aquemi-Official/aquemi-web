/* Aquemi motion: one GSAP layer over the rendered page (index.html calls AQmotion.run(root) after every render).
   Built by tools/design_system.py from assets/src/motion/core.js + design-system/components/<Name>/motion.js
   -> assets/motion.js. Do not edit assets/motion.js; edit those and rerun the build.

   Blueprint behaviour, never decoration for its own sake:
   - hero headline lines rise out of a mask (SplitText); section titles land word by word (word-reveal)
   - mono labels (eyebrows) decode once, like an instrument powering up (ScrambleText)
   - solid line work draws itself on (DrawSVG); dashed runs creep once in the flow direction (stops within 5 s)
   - equipment drawings wipe in from the bottom like a print; drawing plates unroll
   - list rows, stations, folders and modules follow in a short stagger
   - key figures roll up on odometer wheels (sliding-number)
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
  /* Key figures roll in on an odometer.
     Ported from Subframe Motion "Digits on a roll" (sliding-number), MIT, (c) 2026 Subframe
     (adapted from Motion Primitives' sliding-number, MIT, (c) 2024 ibelick).
     The first number in el's first numeric text node becomes a row of digit wheels: each wheel is a column of numerals
     that rolls up to its digit; the lower places turn over more often (the ones wheel two full turns, the tens one),
     like a meter coming up to its reading, on the example's firm, non-bouncy spring (stiffness 280, damping 22, mass 0.3:
     overdamped, so power3.out). Separators (".", ",") and the text around the number (comparator, unit) stay put;
     [placeholders] are never touched. Each wheel holds an invisible copy of its final digit in flow (tabular figures),
     so the width and baseline never jump, and the wheels are clipped with clip-path (not overflow) so the baseline holds.
     Screen readers hear the real value (a visually hidden copy; the wheels are aria-hidden), and when the roll ends the
     original text node goes back, so the finished page is exactly the static markup. Before the trigger the wheels
     show a blank leading place and 0s, as the count-up showed 0. Same call as before: count(el, {now, delay, duration}). */
  var SR = 'position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap';
  function count(el, opt) {
    opt = opt || {};
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), t;
    while ((t = w.nextNode())) {
      var m = t.nodeValue.match(/^(\D*?)(\d+(?:[.,]\d+)*)(.*)$/); if (!m || t.parentElement.closest('.aq-ph')) continue;
      var node = t, parent = t.parentNode, chars = m[2].split(''), nd = chars.filter(function (c) { return /\d/.test(c) }).length;
      var intLen = (m[2].match(/^\d+/) || [''])[0].length, fs = parseFloat(getComputedStyle(parent).fontSize) || 16;
      var odo = document.createElement('span'), sr = document.createElement('span'), wheels = [], r = nd;
      odo.setAttribute('aria-hidden', 'true'); odo.style.cssText = 'display:inline-block;white-space:nowrap;font-variant-numeric:tabular-nums';
      sr.style.cssText = SR; sr.textContent = m[2];
      chars.forEach(function (c, i) {
        if (!/\d/.test(c)) { odo.appendChild(document.createTextNode(c)); return }
        r--; var d = +c, turns = Math.max(0, 2 - r), lead = i < intLen - 1, seq = lead ? [' '] : [];
        for (var k = 0; k < turns; k++) for (var j = 0; j < 10; j++) seq.push(j);
        for (var q = 0; q <= d; q++) seq.push(q);
        var col = document.createElement('span'), ghost = document.createElement('span'), strip = document.createElement('span');
        col.style.cssText = 'display:inline-block;position:relative;clip-path:inset(-0.12em -0.25em)';
        ghost.style.visibility = 'hidden'; ghost.textContent = c;
        strip.style.cssText = 'position:absolute;left:0;right:0;top:0;display:flex;flex-direction:column;align-items:center;will-change:transform';
        seq.forEach(function (n) { var s = document.createElement('span'); s.textContent = n; strip.appendChild(s) });
        col.appendChild(ghost); col.appendChild(strip); odo.appendChild(col);
        wheels.push({ strip: strip, steps: seq.length - 1, r: r });
      });
      var before = m[1] ? document.createTextNode(m[1]) : null, after = m[3] ? document.createTextNode(m[3]) : null;
      [before, sr, odo, after].forEach(function (n) { if (n) parent.insertBefore(n, node) });
      parent.removeChild(node);
      // the pitch between numerals: one line, plus a gap so a neighbour never shows inside the clip
      var lh = (wheels.length && wheels[0].strip.parentNode.getBoundingClientRect().height) || fs * 1.2, pitch = lh + 0.3 * fs;
      wheels.forEach(function (wh) { [].forEach.call(wh.strip.children, function (s) { s.style.cssText = 'display:block;height:' + lh + 'px;margin-bottom:' + (pitch - lh) + 'px' }) });
      (function (node, parent, before, sr, odo, after, wheels, pitch) {
        var done = false;
        function restore() {
          if (done || !odo.parentNode) return; done = true;
          parent.insertBefore(node, odo); [before, sr, odo, after].forEach(function (n) { if (n && n.parentNode) n.parentNode.removeChild(n) });
        }
        var go = function () {
          var dur = Math.min(opt.duration || 1.3, 1.4), tl = gsap.timeline({ delay: opt.delay || 0, onComplete: restore });
          wheels.forEach(function (wh) { tl.to(wh.strip, { y: -wh.steps * pitch, duration: dur * Math.max(0.6, 1 - 0.12 * wh.r), ease: 'power3.out' }, 0) });
          live.push({ kill: function () { tl.kill(); restore() } });
        };
        if (opt.now) go(); else on(el, go);
      })(node, parent, before, sr, odo, after, wheels, pitch);
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

  /* A real spring for indicators that should keep their momentum (sliding-tabs: stiffness 460, damping 34, mass 1).
     spring(state, {stiffness, damping, mass}, onUpdate) -> {to(goals), jump(goals)}: state's numeric keys follow the
     goals on the GSAP ticker (4 ms sub-steps) and the ticker lets go once every key has settled. */
  function spring(o, cfg, upd) {
    var k = cfg.stiffness || 460, c = cfg.damping || 34, ms = cfg.mass || 1, v = {}, goal = {}, running = false;
    function tick(t, dt) {
      var left = Math.min(dt || 16, 48) / 1000, moving = false;
      while (left > 0) { var h = Math.min(0.004, left); left -= h; for (var key in goal) { var a = (-k * (o[key] - goal[key]) - c * (v[key] || 0)) / ms; v[key] = (v[key] || 0) + a * h; o[key] += v[key] * h } }
      for (var key2 in goal) { if (Math.abs(v[key2]) > 0.02 || Math.abs(o[key2] - goal[key2]) > 0.02) moving = true }
      if (!moving) { for (var key3 in goal) { o[key3] = goal[key3]; v[key3] = 0 } gsap.ticker.remove(tick); running = false }
      upd(o);
    }
    return {
      to: function (g) { for (var key in g) goal[key] = g[key]; if (!running) { running = true; gsap.ticker.add(tick) } },
      jump: function (g) { for (var key in g) { goal[key] = o[key] = g[key]; v[key] = 0 } upd(o) },
      stop: function () { gsap.ticker.remove(tick); running = false }
    };
  }

  var M = { on: on, tw: tw, claim: claim, free: free, split: split, lines: lines, draw: draw, drawSvg: drawSvg, count: count, scramble: scramble, narrow: narrow, spring: spring };

  var gen = 0, lastPage = null, CHROME = ['NavBar', 'Hero', 'KeyFacts', 'SectionNav'];
  // Wait for the webfonts so SplitText measures the real lines (Geist Light wraps differently from the fallback)
  function run(root) {
    kill();
    if (window.AQgl) AQgl.scan(root);   // ambient WebGL layers: a still frame under reduced motion, so they mount first
    if (reduce || !window.gsap || !window.ScrollTrigger || !root) return;
    var g = ++gen;
    // fonts.status can read 'loaded' before a face has been requested, so also ask for the display face by name;
    // then wait until no face is still loading (SplitText measures lines), never longer than 0.8 s (the fonts are self-hosted and preloaded)
    var F = document.fonts, t0 = Date.now(), h = root.querySelector('.aq-hero h1');
    function settled() { return !F || (F.status === 'loaded' && (!F.check || F.check('300 40px "Geist"'))) }
    function go() { if (g !== gen) return; g = -1; if (h) gsap.set(h, { autoAlpha: 1 }); start(root) }
    function wait() { if (g !== gen) return; if (settled() || Date.now() - t0 > 800) return go(); F.load('300 40px "Geist"').then(function () { return F.ready }).then(function () { requestAnimationFrame(wait) }, go) }
    if (!settled()) { if (h) gsap.set(h, { autoAlpha: 0 }); setTimeout(go, 800); requestAnimationFrame(wait); return }
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

    /* Section heads: the mono eyebrow decodes; the title lands word by word; the intro follows the last word.
       Ported from Subframe Motion "Word reveal" (word-reveal), MIT, (c) 2026 Subframe: each word rises a full line
       out of its own mask and fades up (0.52 s, cubic-bezier(0.22, 1, 0.36, 1), 75 ms apart); the mask is padded
       0.12 em below so descenders are never cut. Long titles keep the whole landing under about 1.4 s. The split is
       reverted when the words have landed, so the heading ends as its static markup. */
    if (window.CustomEase && !CustomEase.get('aq-word')) CustomEase.create('aq-word', 'M0,0 C0.22,1 0.36,1 1,1');
    root.querySelectorAll('.aq-section').forEach(function (sec) {
      if (sec.closest('.aq-hero')) return;
      var head = sec.querySelector('.aq-sec-head');
      if (head && free(head)) {
        var t = head.querySelector('.aq-h1, h2'), eb = head.querySelector('.aq-eyebrow');
        var others = [].filter.call(head.children, function (c) { return c !== t && c !== eb });
        var st = t && split(t, { type: 'words', mask: 'words', wordsClass: 'aq-m-word' });
        if (st && st.masks) st.masks.forEach(function (k) { k.style.paddingBottom = '0.12em'; k.style.marginBottom = '-0.12em' });
        if (st) gsap.set(st.words, { yPercent: 100, autoAlpha: 0 }); else if (t) gsap.set(t, { y: 24, autoAlpha: 0 });
        if (eb) gsap.set(eb, { autoAlpha: 0 });
        if (others.length) gsap.set(others, { y: 16, autoAlpha: 0 });
        (function (st, t, eb, others) {
          on(sec, function () {
            var tl = tw(gsap.timeline()), n = st ? st.words.length : 0, gap = n > 1 ? Math.min(0.075, 0.9 / (n - 1)) : 0, land = 0.05 + gap * Math.max(0, n - 1) + 0.52;
            if (eb) { tl.to(eb, { autoAlpha: 1, duration: 0.2 }, 0); scramble(eb, 0) }
            if (st) tl.to(st.words, { yPercent: 0, autoAlpha: 1, duration: 0.52, ease: window.CustomEase ? 'aq-word' : 'expo.out', stagger: gap, onComplete: function () { try { st.revert() } catch (x) {} } }, 0.05);
            else if (t) tl.to(t, { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, 0);
            if (others.length) tl.to(others, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out', stagger: 0.07, clearProps: 'transform,opacity,visibility' }, st ? Math.min(land - 0.25, 1) : 0.3);
          }, 'top 88%');
        })(st, t, eb, others);
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

    // Key figures roll up on odometer wheels
    root.querySelectorAll('.aq-key-facts__value, [class*="__v"] > .aq-num, .aq-case__val').forEach(function (el) { if (free(el)) count(el) });

    ScrollTrigger.refresh();
  }
  window.AQmotion = { run: run, kill: kill, fx: function (name, fn) { fx.push({ name: name, fn: fn }) } };
})();
