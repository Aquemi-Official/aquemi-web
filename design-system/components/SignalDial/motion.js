/* SignalDial: the transmitter powers up. The bezel's ticks come on round the dial while the bezel sweeps back from
   the last channel to channel 01 (the drag/turn mechanism ported from Subframe Motion "Exposure dial control",
   camera-wheel, MIT, (c) 2026 Subframe; its 600 ms settle is the CSS transition the visitor's turns use), the index
   drops onto 12 o'clock, the channel number rolls up on its odometer, the limit line runs out and the schedule rows
   follow. One timeline, once, < 3 s. Turning the dial and picking rows is the visitor's to repeat (renderer). */
AQmotion.fx('SignalDial', function (root, m) {
  root.querySelectorAll('.aq-signal-dial').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var q = function (s) { return el.querySelector(s) }, qa = function (s) { return [].slice.call(el.querySelectorAll(s)) };
    var dial = q('.aq-signal-dial__dial'), n = +el.getAttribute('data-n') || 1, st = +el.getAttribute('data-step') || 24;
    var ticks = qa('.aq-signal-dial__tk'), rows = qa('.aq-signal-dial__row'), lim = q('.aq-signal-dial__lim');
    var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
    gsap.set(ticks, { opacity: 0 });
    tl.call(function () { dial.classList.add('is-drag') }, null, 0);
    tl.fromTo(dial, { '--sd-a': (n - 1) * st + 60 }, { '--sd-a': -(+el.getAttribute('data-on') || 0) * st, duration: 1.6, ease: 'power3.inOut' }, 0);
    tl.call(function () { dial.classList.remove('is-drag') }, null, 1.6);
    tl.to(ticks, { opacity: function (i, t) { return t.classList.contains('aq-signal-dial__tk--stop') || t.classList.contains('aq-signal-dial__tk--mid') ? 1 : 0.6 }, duration: 0.2, stagger: { amount: 1.1 }, ease: 'none', clearProps: 'opacity' }, 0.05);
    tl.from(qa('.aq-signal-dial__sn'), { autoAlpha: 0, duration: 0.3, stagger: 0.08, clearProps: 'opacity,visibility' }, 0.6);
    tl.from(q('.aq-signal-dial__index'), { y: -12, autoAlpha: 0, duration: 0.5, clearProps: 'transform,opacity,visibility' }, 1.2);
    tl.from(qa('.aq-signal-dial__ch, .aq-signal-dial__name, .aq-signal-dial__val, .aq-signal-dial__tag'), { y: 8, autoAlpha: 0, duration: 0.5, stagger: 0.08, clearProps: 'transform,opacity,visibility' }, 1.3);
    if (lim) tl.from(lim, { scaleX: 0, duration: 0.6, ease: 'power2.inOut', clearProps: 'transform' }, 1.4);
    tl.call(function () { m.count(q('.aq-signal-dial__digits'), { now: true, duration: 0.9 }) }, null, 1.2);
    tl.from(rows, { y: 12, autoAlpha: 0, duration: 0.5, stagger: 0.07, clearProps: 'transform,opacity,visibility' }, 0.3);
    m.on(el, function () { tl.play() }, 'top 75%');
  });
});
