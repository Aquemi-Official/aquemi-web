/* WitnessPlan: the bay is drawn, then each way of witnessing is shown in turn. The walls draw on from the door, the
   floor grid and remote edge fade up, the skid and panel draw; then the plan steps through the cards (each card's rule
   slides in as its people, cameras and screen come up on the plan, about half a second each) and comes to rest on the
   first, pressed card, as the page reads without script. Under 5 s, once. The reader drives it after that (press or
   point at a card; CSS fades the actors). */
AQmotion.fx('WitnessPlan', function (root, m) {
  var D = window.DrawSVGPlugin;
  [].forEach.call(root.querySelectorAll('.aq-witness-plan'), function (el) {
    var board = el.querySelector('.aq-witness-plan__board'); if (!board) return; m.claim(board); m.claim(el.querySelector('.aq-witness-plan__list'));
    var qa = function (s) { return [].slice.call(el.querySelectorAll(s)) };
    var opts = qa('.aq-witness-plan__opt'), acts = qa('[data-actor]');
    var now = el.querySelector('.aq-witness-plan__now');
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
      tl.add(function () { opts.forEach(function (x) { x.setAttribute('aria-pressed', x === o ? 'true' : 'false') }); show(o.getAttribute('data-scene')); cap(o) }, at + i * 0.55);
    });
    tl.add(function () { opts.forEach(function (x, k) { x.setAttribute('aria-pressed', k ? 'false' : 'true') }); show(opts[0] ? opts[0].getAttribute('data-scene') : ''); cap(opts[0]) }, at + opts.length * 0.55);
    m.on(board, function () { tl.play() }, 'top 70%');
  });
});
