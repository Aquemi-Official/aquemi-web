/* MembraneAtlas: each row arrives as the table scrolls in: the navy tile wipes up, its numeral rolls up on the
   odometer, the micrograph's damage spreads from the centre (pits, crystals, cake, coat, colonies), and the three
   cells slide in a beat apart. Once per row, under 2 s.
   Then the scope's lens: pointing at a row brings a sharp ring over its micrograph that follows the pointer, the rest
   of the field staying soft; leaving the row lets the ring drift back to rest. Pointer devices only; nothing under
   reduced motion (the micrographs stay soft, everything readable).
   Lens ported from Subframe Motion "Cursor focus lens" (focus-lens), MIT, (c) 2026 Subframe (kept: a soft layer and a
   sharp copy masked by a radial gradient at the lens point, the ring following with exponential smoothing at 18 per
   second, the point clamped inside the plate; replaced: the optical plate with our micrograph). */
AQmotion.fx('MembraneAtlas', function (root, m) {
  root.querySelectorAll('.aq-membrane-atlas').forEach(function (el) {
    if (!m.free(el)) return; m.claim(el);
    var rows = [].slice.call(el.querySelectorAll('.aq-membrane-atlas__plate'));
    rows.forEach(function (p) {
      var tile = p.querySelector('.aq-membrane-atlas__tile'), svg = p.querySelector('.aq-membrane-atlas__scope svg'), num = p.querySelector('.aq-membrane-atlas__n');
      var dmg = svg ? [].slice.call(svg.querySelectorAll('.aq-membrane-atlas__dmg > *')) : [], cells = p.querySelectorAll('.aq-membrane-atlas__td');
      var tl = m.tw(gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } }));
      if (tile) tl.fromTo(tile, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 0.6, ease: 'power3.inOut', clearProps: 'clipPath' }, 0);
      if (num && m.count) tl.add(function () { m.count(num, { duration: 0.8 }) }, 0.2);
      if (dmg.length) {
        dmg.sort(function (a, b) { var A = a.getBBox ? a.getBBox() : { x: 0, y: 0 }, B = b.getBBox ? b.getBBox() : { x: 0, y: 0 }; return (A.x * A.x + A.y * A.y) - (B.x * B.x + B.y * B.y) });
        tl.from(dmg, { autoAlpha: 0, duration: 0.25, stagger: { amount: 0.8 }, ease: 'none', clearProps: 'opacity,visibility' }, 0.4);
      }
      tl.from(cells, { x: 16, autoAlpha: 0, duration: 0.5, stagger: 0.1, clearProps: 'transform,opacity,visibility' }, 0.25);
      m.on(p, function () { tl.play() }, 'top 85%');
    });

    /* the lens */
    if (!(window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches)) return;
    rows.forEach(function (p) {
      var scope = p.querySelector('.aq-membrane-atlas__scope'), svg = scope && scope.querySelector('svg');
      if (!svg || scope.offsetParent === null) return;
      var lens = document.createElement('div'); lens.className = 'aq-membrane-atlas__lens';
      var sharp = svg.cloneNode(true); [].forEach.call(sharp.querySelectorAll('[id]'), function (n) { n.id = n.id + '-l' }); [].forEach.call(sharp.querySelectorAll('[style]'), function (n) { n.removeAttribute('style') });
      [].forEach.call(sharp.querySelectorAll('[clip-path]'), function (n) { n.setAttribute('clip-path', n.getAttribute('clip-path').replace(/\)$/, '-l)')) });
      var ring = document.createElement('span'); ring.className = 'aq-membrane-atlas__ring';
      lens.appendChild(sharp); lens.appendChild(ring); scope.appendChild(lens);
      var REST = { x: 0.46, y: 0.46 }, pt = { x: REST.x, y: REST.y }, tg = { x: REST.x, y: REST.y }, last = 0, running = false;
      function paint() {
        var w = scope.clientWidth, h = scope.clientHeight, x = pt.x * w, y = pt.y * h, r = ring.offsetWidth / 2 || 48;
        var mk = 'radial-gradient(circle ' + r + 'px at ' + x.toFixed(1) + 'px ' + y.toFixed(1) + 'px, #000 0, #000 70%, transparent 100%)';
        sharp.style.maskImage = mk; sharp.style.webkitMaskImage = mk;
        ring.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
      }
      function tick() {
        var now = performance.now(), k = last ? 1 - Math.exp(-Math.min((now - last) / 1000, 0.05) * 18) : 0.18; last = now;
        pt.x += (tg.x - pt.x) * k; pt.y += (tg.y - pt.y) * k; paint();
        if (Math.abs(tg.x - pt.x) + Math.abs(tg.y - pt.y) < 0.0005) { gsap.ticker.remove(tick); running = false; last = 0 }
      }
      function go(x, y) { tg.x = Math.max(0.12, Math.min(0.74, x)); tg.y = Math.max(0.12, Math.min(0.74, y)); if (!running) { running = true; gsap.ticker.add(tick) } }
      p.addEventListener('pointermove', function (ev) { var r = scope.getBoundingClientRect(); go((ev.clientX - r.left) / r.width, (ev.clientY - r.top) / r.height) });
      p.addEventListener('pointerenter', function () { lens.classList.add('is-on') });
      p.addEventListener('pointerleave', function () { lens.classList.remove('is-on'); go(REST.x, REST.y) });
      paint();
      m.tw({ kill: function () { gsap.ticker.remove(tick) } });
    });
  });
});
