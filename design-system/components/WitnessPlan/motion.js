/* WitnessPlan: the bay is drawn, then each way of witnessing is shown in turn. The walls draw on from the door, the
   floor grid and remote edge fade up, the skid and panel draw; then the plan steps through the cards (each card's rule
   slides in as its people, cameras and screen come up on the plan, about half a second each) and comes to rest on the
   first, pressed card, as the page reads without script. Under 5 s, once. The reader drives it after that (press or
   point at a card; CSS fades the actors): one raised panel with the flow rule springs from card to card (arrow keys
   jump it), and the board's caption slides in from the side the new way lies on.
   Ported from Subframe Motion "Sliding segmented control" (sliding-tabs), MIT, (c) 2026 Subframe (kept: one shared
   highlight on a spring, stiffness 460, damping 34, mass 1, no travel for keyboard input; replaced: layoutId with the
   core spring on translateY and height).
   Ported from Subframe Motion "Sliding content panel" (transition-panel), MIT, (c) 2026 Subframe (kept: the new
   panel enters 18 px from the side of travel at opacity 0, 0.24 s, ease cubic-bezier(.25,1,.5,1), none for keyboard
   input; replaced: AnimatePresence with a MutationObserver on the caption, the blur dropped). */
AQmotion.fx('WitnessPlan', function (root, m) {
  var D = window.DrawSVGPlugin;
  [].forEach.call(root.querySelectorAll('.aq-witness-plan'), function (el) {
    var board = el.querySelector('.aq-witness-plan__board'); if (!board) return; m.claim(board); m.claim(el.querySelector('.aq-witness-plan__list'));
    var qa = function (s) { return [].slice.call(el.querySelectorAll(s)) };
    var opts = qa('.aq-witness-plan__opt'), acts = qa('[data-actor]');
    var now = el.querySelector('.aq-witness-plan__now'), ind = function () {};
    var cap24 = window.CustomEase ? (CustomEase.get('aq-panel') || CustomEase.create('aq-panel', 'M0,0 C0.25,1 0.5,1 1,1')) : 'power3.out';
    function show(sc) { acts.forEach(function (a) { a.classList.toggle('is-on', (' ' + sc + ' ').indexOf(' ' + a.getAttribute('data-actor') + ' ') > -1) }) }
    function cap(o) { if (!now || !o) return; now.querySelector('.aq-witness-plan__now-n').textContent = o.querySelector('.aq-witness-plan__n').textContent; now.querySelector('.aq-witness-plan__now-t').innerHTML = o.querySelector('.aq-witness-plan__t').innerHTML }
    var tl = gsap.timeline({ paused: true }); m.tw(tl);
    tl.add(function () { show('') }, 0);
    if (D) tl.fromTo(qa('.aq-witness-plan__wall'), { drawSVG: '0%' }, { drawSVG: '100%', duration: 1.0, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' }, 0);
    tl.from(qa('.aq-witness-plan__grid, .aq-witness-plan__edge, .aq-witness-plan__zone, .aq-witness-plan__door'), { autoAlpha: 0, duration: 0.6, clearProps: 'opacity,visibility' }, 0.2);
    if (D) tl.fromTo(qa('.aq-witness-plan__eq, .aq-witness-plan__thin, .aq-witness-plan__hid').filter(function (p) { return !p.closest('[data-actor]') }), { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.8, stagger: 0.03, ease: 'power2.out', clearProps: 'strokeDasharray,strokeDashoffset' }, 0.5);
    tl.from(opts, { autoAlpha: 0, x: -12, duration: 0.45, stagger: 0.08, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, 0.3);
    var at = 1.4;
    opts.forEach(function (o, i) {
      tl.add(function () { opts.forEach(function (x) { x.setAttribute('aria-pressed', x === o ? 'true' : 'false') }); show(o.getAttribute('data-scene')); cap(o); ind() }, at + i * 0.55);
    });
    tl.add(function () { opts.forEach(function (x, k) { x.setAttribute('aria-pressed', k ? 'false' : 'true') }); show(opts[0] ? opts[0].getAttribute('data-scene') : ''); cap(opts[0]); ind() }, at + opts.length * 0.55);
    m.on(board, function () { tl.play() }, 'top 70%');

    /* the indicator springs to the chosen card (jumps for keyboard input) */
    var list = el.querySelector('.aq-witness-plan__list'), bar = list && list.querySelector('.aq-witness-plan__ind'), kb = false;
    if (bar && opts.length) {
      var st = { y: 0, h: 0 }, sp = m.spring(st, { stiffness: 460, damping: 34, mass: 1 }, function (o) { bar.style.transform = 'translateY(' + o.y.toFixed(1) + 'px)'; bar.style.height = Math.max(0, o.h).toFixed(1) + 'px' });
      ind = function (jump) { var p = list.querySelector('.aq-witness-plan__opt[aria-pressed="true"]'); if (!p) return; var lb = list.getBoundingClientRect(), b = p.getBoundingClientRect(), g = { y: b.top - lb.top, h: b.height }; if (jump || kb) sp.jump(g); else sp.to(g) };
      list.classList.add('has-ind'); ind(true);
      list.addEventListener('click', function (ev) { if (ev.target.closest('.aq-witness-plan__opt')) requestAnimationFrame(function () { ind() }) });
      list.addEventListener('keydown', function () { kb = true });
      list.addEventListener('pointerdown', function () { kb = false });
      if (window.ResizeObserver) new ResizeObserver(function () { ind(true) }).observe(list);
    }
    /* the caption slides in from the side the new way lies on */
    var capT = now && now.querySelector('.aq-witness-plan__now-t'), capN = now && now.querySelector('.aq-witness-plan__now-n'), last = capN ? +capN.textContent : 1;
    if (capT && window.MutationObserver) new MutationObserver(function () {
      var k = +capN.textContent, d = k > last ? 1 : k < last ? -1 : 0; last = k; if (!d || kb) return;
      gsap.fromTo([capN, capT], { x: 18 * d, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.24, ease: cap24, overwrite: true, clearProps: 'transform,opacity,visibility' });
    }).observe(capT, { childList: true, characterData: true, subtree: true });
  });
});
