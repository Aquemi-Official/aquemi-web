/* ProcessSteps: water fills the pipe stage by stage. Hold flow and stage strip: every station starts unlit (number
   dim, text down); a drop of water (one flow dot, made here and removed when it is done) runs each pipe as the pipe
   is laid behind it (clip-path), the station it reaches lights (number up, frame and icon wipe in, text rises), a
   valve on the run into a hold station closes; the hold line comes in with the station's text, with no stamp or shake. Row
   returns elbow in before the next row. One timeline per flow on desktop (under 4 s); phones run the same beat per
   station as each one scrolls in, the pipe filling downwards. Plain rows: rows rise in order, each index decodes. */
AQmotion.fx('ProcessSteps', function (root, m) {
  function shown(el) { return !!(el && el.offsetParent) && getComputedStyle(el).display !== 'none' }
  function vertical(el) { var r = el.getBoundingClientRect(); return r.height > r.width }
  var CLEAR = 'transform,opacity,visibility';

  // Pipe piece laid in the flow direction
  function lay(tl, el, at, dur, from) {
    tl.fromTo(el, { clipPath: from }, { clipPath: 'inset(0% 0% 0% 0%)', duration: dur, ease: 'none', clearProps: 'clipPath' }, at);
  }
  // A station lights as the water reaches it; returns the time its text has settled
  function light(tl, st, at) {
    var n = st.querySelector('.aq-steps__n'), fr = st.querySelector('.aq-steps__frame'), ic = fr && fr.querySelector('.aq-icon'),
      body = st.querySelector('.aq-steps__body');
    if (fr) tl.fromTo(fr, { scale: 0.86, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.35, ease: 'back.out(2)', clearProps: CLEAR }, at);
    if (ic) tl.fromTo(ic, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 0.45, ease: 'power2.out', clearProps: 'clipPath' }, at + 0.1);
    if (n) tl.fromTo(n, { autoAlpha: 0.18, scale: 0.92, transformOrigin: '0% 50%' }, { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'power2.out', clearProps: CLEAR }, at);
    if (body) tl.fromTo(body, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45, ease: 'power3.out', clearProps: CLEAR }, at + 0.08);
    var end = at + 0.45;
    return end;
  }
  // Hide what will light (only inside fx, so reduced motion and no-JS keep the finished drawing)
  function prime(st) {
    var n = st.querySelector('.aq-steps__n'), fr = st.querySelector('.aq-steps__frame'), body = st.querySelector('.aq-steps__body');
    if (n) gsap.set(n, { autoAlpha: 0.18 });
    if (fr) gsap.set(fr, { autoAlpha: 0 });
    if (body) gsap.set(body, { autoAlpha: 0 });
    st.querySelectorAll(':scope > .aq-steps__run, :scope > .aq-steps__turn').forEach(function (p) { if (shown(p)) gsap.set(p, { clipPath: vertical(p) ? 'inset(0 0 100% 0)' : 'inset(0 100% 0 0)' }) });
    st.querySelectorAll('.aq-steps__valve').forEach(function (v) { gsap.set(v, { autoAlpha: 0 }) });
  }
  function drop(ol) {
    var d = document.createElement('span'); d.className = 'aq-steps__drop'; d.setAttribute('aria-hidden', 'true'); ol.appendChild(d);
    gsap.set(d, { autoAlpha: 0, x: 0, y: 0 }); return d;
  }
  function pt(ol, el, fx, fy) { var o = ol.getBoundingClientRect(), r = el.getBoundingClientRect(); return { x: r.left - o.left + r.width * fx, y: r.top - o.top + r.height * fy } }

  // Water runs one pipe: the drop travels it while the pipe is laid behind it, the valve on it snaps shut at the end
  function run(tl, ol, dot, p, at, dur) {
    var v = vertical(p), a = v ? pt(ol, p, 0.5, 0) : pt(ol, p, 0, 0.5), b = v ? pt(ol, p, 0.5, 1) : pt(ol, p, 1, 0.5);
    lay(tl, p, at, dur, v ? 'inset(0 0 100% 0)' : 'inset(0 100% 0 0)');
    tl.set(dot, { x: a.x, y: a.y, autoAlpha: 1 }, at).to(dot, { x: b.x, y: b.y, duration: dur, ease: 'none' }, at).set(dot, { autoAlpha: 0 }, at + dur);
    var valve = p.querySelector('.aq-steps__valve');
    if (valve) tl.fromTo(valve, { autoAlpha: 0, scale: 0.3 }, { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'back.out(3)', clearProps: 'opacity,visibility' }, at + dur * 0.55);
    return at + dur;
  }

  root.querySelectorAll('.aq-steps--hold, .aq-steps--stages').forEach(function (ol) {
    var sts = [].filter.call(ol.querySelectorAll(':scope > .aq-steps__st'), shown); if (!sts.length) return;
    m.claim(ol);
    var rets = [].filter.call(ol.querySelectorAll(':scope > .aq-steps__ret'), shown);
    sts.forEach(prime);
    rets.forEach(function (r) { gsap.set(r, { clipPath: 'inset(0 0 0 100%)' }); r.querySelectorAll('.aq-steps__valve').forEach(function (v) { gsap.set(v, { autoAlpha: 0 }) }) });
    var dot = drop(ol), phone = m.narrow() || vertical(ol.querySelector('.aq-steps__run') || ol);

    if (phone) {
      // Phones: each station lights as it scrolls in, then fills its pipe down to the next. Stations already in view
      // queue behind the water (a station never lights before the pipe into it has filled).
      var ready = 0;
      sts.forEach(function (st, i) {
        m.on(st, function () {
          var now = performance.now() / 1000, wait = Math.min(0.6, Math.max(0, ready - now));
          var tl = m.tw(gsap.timeline({ delay: wait })), t = light(tl, st, 0), p = st.querySelector(':scope > .aq-steps__run'), end = 0.3;
          if (p && shown(p)) end = run(tl, ol, dot, p, 0.3, 0.5);
          ready = now + wait + end;
          if (i === sts.length - 1) tl.call(function () { dot.remove() });
        }, 'top 82%');
      });
      return;
    }
    m.on(ol, function () {
      var tl = m.tw(gsap.timeline({ delay: 0.45 })), t = 0, pipe = 0.42;
      [].forEach.call(ol.children, function (li) {
        if (li === dot) return;
        if (li.classList.contains('aq-steps__ret')) {
          if (!shown(li)) return;
          // the return runs right to left under the row
          tl.fromTo(li, { clipPath: 'inset(0 0 0 100%)' }, { clipPath: 'inset(0 0 0 0%)', duration: 0.5, ease: 'power1.inOut', clearProps: 'clipPath' }, t);
          li.querySelectorAll('.aq-steps__valve').forEach(function (v) { tl.fromTo(v, { autoAlpha: 0, scale: 0.3 }, { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'back.out(3)', clearProps: 'opacity,visibility' }, t + 0.3) });
          t += 0.5; return;
        }
        if (sts.indexOf(li) < 0) return;
        var tin = li.querySelector(':scope > .aq-steps__turn--in');
        if (tin && shown(tin)) { lay(tl, tin, t, 0.3, 'inset(0 100% 100% 0)'); t += 0.3 }
        var settled = light(tl, li, t), p = li.querySelector(':scope > .aq-steps__run'), turn = li.querySelector(':scope > .aq-steps__turn:not(.aq-steps__turn--in)');
        t += 0.3;
        if (p && shown(p)) t = run(tl, ol, dot, p, t, pipe);
        if (turn && shown(turn)) { lay(tl, turn, t, 0.4, 'inset(0 100% 100% 0)'); t += 0.4 }
        t = Math.max(t, settled - 0.35);
      });
      tl.call(function () { dot.remove() });
      // long flows (eight stations, two returns) stay under 4 s
      var total = tl.duration(); if (total > 3.8) tl.timeScale(total / 3.8);
    }, 'top 80%');
  });

  // Plain rows: rows rise in order, each index decodes like a counter
  root.querySelectorAll('.aq-rows.aq-steps').forEach(function (ol) {
    var lis = [].filter.call(ol.querySelectorAll(':scope > li'), shown); if (!lis.length) return;
    m.claim(ol);
    gsap.set(lis, { y: 16, autoAlpha: 0 });
    m.on(ol, function () {
      var tl = m.tw(gsap.timeline());
      lis.forEach(function (li, i) {
        tl.to(li, { y: 0, autoAlpha: 1, duration: 0.55, ease: 'power3.out', clearProps: CLEAR }, i * 0.11);
        var ix = li.querySelector('.aq-index'), ic = li.querySelector('.aq-rows__lead .aq-icon');
        if (ix && window.ScrambleTextPlugin) tl.to(ix, { duration: 0.5, scrambleText: { text: ix.textContent, chars: '0123456789', speed: 0.8 }, ease: 'none' }, i * 0.11);
        if (ic) tl.fromTo(ic, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 0.5, ease: 'power2.out', clearProps: 'clipPath' }, i * 0.11 + 0.1);
      });
    }, 'top 85%');
  });
});
