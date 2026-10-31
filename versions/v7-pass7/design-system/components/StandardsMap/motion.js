/* StandardsMap: the plant is piped up in flow order. The main header draws left to right (top to bottom on phones);
   as it passes each zone a node seats on it, the branch grows out to the zone, the zone's dashed area opens from the
   pipe side, its equipment drawing prints in, the leader runs to the name, the name lands and the zone's code chips
   follow one by one. The arrow at the end of the main lights last. Pipe, branches, nodes and leaders are
   pseudo-elements, drawn through custom properties (--aq-pipe, --aq-branch, --aq-node, --aq-lead: scale only). */
AQmotion.fx('StandardsMap', function (root, m) {
  root.querySelectorAll('.aq-standards-map').forEach(function (map) {
    if (!m.free(map)) return;
    var ol = map.querySelector('.aq-standards-map__zones'); if (!ol) return;
    var zones = [].slice.call(ol.querySelectorAll(':scope > .aq-standards-map__zone')); if (!zones.length) return;
    m.claim(map);
    var narrow = m.narrow(), up = zones.filter(function (z) { return z.classList.contains('is-up') }).length || 1;
    var pipeDur = narrow ? 1.6 : 1.4;
    gsap.set(ol, { '--aq-pipe': 0, '--aq-arrow': 0 });
    // each zone is clipped to nothing but the strip on its pipe side (the branch and node live outside its box)
    var X = '-80px', clip = function (z, open) {
      if (narrow) return open ? 'inset(0% 0% 0% ' + X + ')' : 'inset(0% 100% 0% ' + X + ')';
      return z.classList.contains('is-up') ? (open ? 'inset(0% 0% ' + X + ' 0%)' : 'inset(100% 0% ' + X + ' 0%)') : (open ? 'inset(' + X + ' 0% 0% 0%)' : 'inset(' + X + ' 0% 100% 0%)');
    };
    gsap.set(zones, { '--aq-branch': 0, '--aq-node': 0, '--aq-lead': 0 });
    zones.forEach(function (z) { gsap.set(z, { clipPath: clip(z, false) }) });
    m.on(map, function () {
      var tl = m.tw(gsap.timeline({ delay: 0.2 }));
      tl.to(ol, { '--aq-pipe': 1, duration: pipeDur, ease: 'power1.inOut' }, 0)
        .to(ol, { '--aq-arrow': 1, duration: 0.3 }, pipeDur - 0.1);
      zones.forEach(function (z, i) {
        var isUp = z.classList.contains('is-up'), col = isUp ? i : i - up;
        // when the pipe front passes this zone's branch (desktop: its column; phone: its place down the stack)
        var at = narrow ? pipeDur * (i + 0.3) / zones.length : pipeDur * (col + 0.15) / up;
        var q = function (s) { return z.querySelector(s) }, qa = function (s) { return z.querySelectorAll(s) };
        tl.to(z, { '--aq-node': 1, duration: 0.3, ease: 'back.out(3)' }, at)
          .to(z, { '--aq-branch': 1, duration: 0.3, ease: 'power2.out' }, at + 0.1)
          .to(z, { clipPath: clip(z, true), duration: 0.6, ease: 'power3.inOut', clearProps: 'clipPath' }, at + 0.3);
        var fig = q('.aq-standards-map__fig');
        if (fig) tl.fromTo(fig, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 0.8, ease: 'power3.inOut', clearProps: 'clipPath' }, at + 0.5);
        tl.to(z, { '--aq-lead': 1, duration: 0.35, ease: 'power2.out' }, at + 0.7);
        var head = q('.aq-standards-map__head');
        if (head) tl.from(head, { x: -10, autoAlpha: 0, duration: 0.45, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, at + 0.75);
        var codes = qa('.aq-standards-map__codes > li');
        if (codes.length) tl.from(codes, { y: 6, autoAlpha: 0, duration: 0.3, ease: 'power2.out', stagger: 0.05, clearProps: 'transform,opacity,visibility' }, at + 0.85);
      });
      // custom properties back to their CSS default once drawn
      tl.call(function () { gsap.set(ol, { clearProps: '--aq-pipe,--aq-arrow' }); gsap.set(zones, { clearProps: '--aq-branch,--aq-node,--aq-lead' }) });
    }, 'top 80%');
  });
});
