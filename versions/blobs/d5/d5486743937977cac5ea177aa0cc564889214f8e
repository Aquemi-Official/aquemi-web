/* AQgl: ambient WebGL layers (water surfaces, flow fields, guilloché, contours) for the site.
   Most shaders are ported from the Subframe Motion library (https://www.subframe.com/motion, MIT); each keeps its
   licence header and credit in its component's motion.js. The runtime is ours.

     AQgl.def('name', { frag: '<GLSL fragment source>', colors: { u_ink: 'flow', u_ground: 'navy' },
                        uniforms: function (canvas, t, st) { return { u_amp: 0.4 } },   // optional, per frame
                        still: 3.2,         // the time drawn under reduced motion (one frame, never animated)
                        speed: 0.5,         // time scale: ambient layers drift, they never hurry (default 1)
                        fps: 30,            // frame cap (default 30: slow drifts need no more; pointer-driven 60)
                        pointer: true,      // optional: u_pointer (0..1, eased) follows the pointer over the host
                        deriv: true,        // optional: enables OES_standard_derivatives (fwidth for crisp hairlines)
                        sim: function (nx, ny) { … },   // optional: a CPU field uploaded as u_state (see below)
                        scale: 0.75 })      // render scale, capped at 0.75 (the canvas is upscaled; grounds need no more)

   Markup: <canvas class="aq-fx-shader" data-gl="name" aria-hidden="true"></canvas> as the first child of a positioned
   host (class aq-fx-host; the style is in components/FxShader/style.css). Every fragment shader gets u_res (px),
   u_time (s), u_pointer, u_dark (0/1), u_amt (the canvas's CSS custom property --fx-amt, default 1: each placement
   sets its strength per theme in CSS) and the colours it names in `colors`, read from the design tokens on the host
   (light and dark theme) as vec3. The canvas is premultiplied: a shader writes vec4(colour * a, a).
   sim (a feedback field, e.g. ripples): called once with a grid size, returns { data: Uint8Array(nx*ny*4),
   step: function (dt) { return changed }, touch: function (x, y, press) {} }; the runtime uploads data as the
   texture u_state (u_state_res = grid size) after each step that changed it, and passes pointer moves and presses
   over the host to touch (0..1, y up). Under reduced motion the field holds its first state.
   Rules: an ambient layer runs only while it is on screen and the tab is visible, only the most visible layer on the
   page moves (the others hold their frame), at most two layers per page (a canvas marked data-gl-optional is dropped
   when the page already has two others), never behind body text at more than a faint contrast, and under
   prefers-reduced-motion it renders one still frame. Low-power phones get a lower render scale. If WebGL is missing
   the canvas stays empty: the host's own ground shows, so the page is complete without it. */
(function () {
  var defs = {}, live = [], mq = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)'), reduce = !!(mq && mq.matches);
  var VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
  var nav = navigator, low = (nav.deviceMemory && nav.deviceMemory <= 4) || (nav.hardwareConcurrency && nav.hardwareConcurrency <= 4);
  var probe = document.createElement('canvas').getContext('2d');
  function rgb(v) {
    if (!probe) return [0, 0, 0];
    probe.fillStyle = '#000'; probe.fillStyle = (v || '').trim() || '#000';
    var s = probe.fillStyle, m;
    if (s[0] === '#') return [parseInt(s.slice(1, 3), 16) / 255, parseInt(s.slice(3, 5), 16) / 255, parseInt(s.slice(5, 7), 16) / 255];
    m = s.match(/[\d.]+/g) || [0, 0, 0]; return [m[0] / 255, m[1] / 255, m[2] / 255];
  }
  function sh(gl, type, src) {
    var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { if (window.console) console.warn('AQgl', gl.getShaderInfoLog(s)); return null }
    return s;
  }
  function release(st) { st.stop(); try { var x = st.gl.getExtension('WEBGL_lose_context'); if (x) x.loseContext() } catch (e) {} }
  function mount(cv) {
    var d = defs[cv.getAttribute('data-gl')]; if (!d || cv._aqgl) return;
    var gl = cv.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false, powerPreference: 'low-power' });
    if (!gl) return;
    var head = '';
    if (d.deriv) { if (gl.getExtension('OES_standard_derivatives')) head = '#extension GL_OES_standard_derivatives : enable\n#define AQ_DERIV 1\n' }
    head += 'precision highp float;uniform vec2 u_res;uniform float u_time;uniform vec2 u_pointer;uniform float u_dark;uniform float u_amt;\n';
    if (d.sim) head += 'uniform sampler2D u_state;uniform vec2 u_state_res;\n';
    var vs = sh(gl, gl.VERTEX_SHADER, VS), fs = sh(gl, gl.FRAGMENT_SHADER, head + d.frag);
    if (!vs || !fs) return;
    var pr = gl.createProgram(); gl.attachShader(pr, vs); gl.attachShader(pr, fs); gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { if (window.console) console.warn('AQgl link', gl.getProgramInfoLog(pr)); return }
    gl.useProgram(pr);
    var b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    var U = {}; function u(n) { return n in U ? U[n] : (U[n] = gl.getUniformLocation(pr, n)) }
    var host = cv.parentElement || cv;
    var st = { cv: cv, gl: gl, d: d, host: host, vis: 0, t: d.still != null ? d.still : 3, last: 0, drawn: 0, raf: 0, px: 0.5, py: 0.5, tx: 0.5, ty: 0.5, cols: {}, dk: 0, amt: 1, w: 0, h: 0, ms: 0 };
    var speed = d.speed || 1, gap = 1000 / (d.fps || 30) - 2, scale = Math.min(d.scale || 0.75, 0.75);
    function colors() {
      var cs = getComputedStyle(host), s = rgb(cs.getPropertyValue('--surface'));
      st.dk = (s[0] + s[1] + s[2]) / 3 < 0.4 ? 1 : 0;
      var a = parseFloat(getComputedStyle(cv).getPropertyValue('--fx-amt')); st.amt = isNaN(a) ? 1 : a;
      Object.keys(d.colors || {}).forEach(function (k) { st.cols[k] = rgb(cs.getPropertyValue('--' + d.colors[k])) });
    }
    function measure() { var r = cv.getBoundingClientRect(); st.w = r.width; st.h = r.height }
    function size() {
      var k = Math.min(window.devicePixelRatio || 1, 1.5) * scale * (innerWidth < 860 ? 0.8 : 1) * (low ? 0.75 : 1);
      var w = Math.max(1, Math.round(st.w * k)), h = Math.max(1, Math.round(st.h * k));
      if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h }
    }
    // Feedback field (sim): a texture on unit 0, rebuilt when the host's shape changes a lot
    var tex = null, S = null, sAsp = 0, sDirty = false;
    function simFit() {
      if (!d.sim || !st.w || !st.h) return;
      var asp = st.w / st.h; if (S && Math.abs(asp / sAsp - 1) < 0.2) return;
      var nx = 128, ny = Math.max(32, Math.min(128, Math.round(128 / asp)));
      if (asp < 1) { ny = 128; nx = Math.max(32, Math.round(128 * asp)) }
      S = st.sim = d.sim(nx, ny, reduce); S.nx = nx; S.ny = ny; sAsp = asp; sDirty = true;
      if (!tex) {
        tex = gl.createTexture(); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.uniform1i(u('u_state'), 0);
      }
    }
    function frame() {
      if (st.lost) return;
      var t0 = performance.now();
      if (!st.w) measure();
      size(); gl.viewport(0, 0, cv.width, cv.height);
      if (S && sDirty) { gl.bindTexture(gl.TEXTURE_2D, tex); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, S.nx, S.ny, 0, gl.RGBA, gl.UNSIGNED_BYTE, S.data); gl.uniform2f(u('u_state_res'), S.nx, S.ny); sDirty = false }
      gl.uniform2f(u('u_res'), cv.width, cv.height); gl.uniform1f(u('u_time'), st.t);
      gl.uniform2f(u('u_pointer'), st.px, st.py); gl.uniform1f(u('u_dark'), st.dk); gl.uniform1f(u('u_amt'), st.amt);
      Object.keys(st.cols).forEach(function (k) { var c = st.cols[k]; gl.uniform3f(u(k), c[0], c[1], c[2]) });
      var x = d.uniforms ? d.uniforms(cv, st.t, st) : null;
      if (x) Object.keys(x).forEach(function (k) { var v = x[k]; if (typeof v === 'number') gl.uniform1f(u(k), v); else if (v.length === 2) gl.uniform2f(u(k), v[0], v[1]); else if (v.length === 3) gl.uniform3f(u(k), v[0], v[1], v[2]) });
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      st.ms = performance.now() - t0;   // CPU-side submit time (GPU cost: AQgl.bench)
    }
    function loop(now) {
      st.raf = 0; if (!st.on()) { st.last = 0; return }
      st.raf = requestAnimationFrame(loop);
      if (st.drawn && now - st.drawn < gap) return;
      var dt = st.last ? Math.min(0.05, (now - st.last) / 1000) : 0;
      st.last = now; st.drawn = now; st.t += dt * speed;
      st.px += (st.tx - st.px) * Math.min(1, dt * 4); st.py += (st.ty - st.py) * Math.min(1, dt * 4);
      if (S && S.step(dt)) sDirty = true;
      frame();
    }
    st.on = function () { return !reduce && !st.lost && !document.hidden && st.vis > 0 && top() === st };
    st.wake = function () { if (!st.raf && st.on()) { st.last = 0; st.drawn = 0; st.raf = requestAnimationFrame(loop) } };
    st.stop = function () { if (st.raf) cancelAnimationFrame(st.raf); st.raf = 0; if (st.io) st.io.disconnect(); if (st.ro) st.ro.disconnect(); st.dead = true };
    st.recolor = function () { colors(); if (!st.raf) frame() };
    st.redraw = function () { if (!st.raf) frame() };
    function at(e) { var r = cv.getBoundingClientRect(); return [(e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height] }
    if (d.pointer || d.sim) {
      var lx = -1, ly = -1;
      host.addEventListener('pointermove', function (e) {
        var p = at(e); st.tx = p[0]; st.ty = p[1];
        if (S && !reduce && S.touch && (Math.abs(p[0] - lx) * st.w + Math.abs(p[1] - ly) * st.h > 14)) { lx = p[0]; ly = p[1]; S.touch(p[0], p[1], false); st.wake() }
      }, { passive: true });
      host.addEventListener('pointerdown', function (e) { if (!S || reduce || !S.touch) return; var p = at(e); S.touch(p[0], p[1], true); st.wake() }, { passive: true });
      host.addEventListener('pointerleave', function () { st.tx = 0.5; st.ty = 0.5; lx = ly = -1 });
    }
    cv.addEventListener('webglcontextlost', function (e) { e.preventDefault(); st.lost = true; st.stop(); cv.classList.remove('is-on') });
    cv._aqgl = st; measure(); colors(); simFit(); frame(); cv.classList.add('is-on');
    // vis: the share of the viewport the layer fills (the biggest one on screen is the one that moves)
    if (window.IntersectionObserver) {
      st.io = new IntersectionObserver(function (es) { es.forEach(function (e) { var r = e.intersectionRect; st.vis = e.isIntersecting ? Math.max(1e-4, r.width * r.height / (innerWidth * innerHeight)) : 0 }); live.forEach(function (s) { s.wake() }) }, { threshold: [0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] });
      st.io.observe(cv);
    } else st.vis = 1;
    if (window.ResizeObserver) { st.ro = new ResizeObserver(function () { measure(); simFit(); if (!st.raf) frame() }); st.ro.observe(cv) }
    live.push(st);
  }
  // Only the most visible layer moves; the others hold their last frame
  function top() { var best = null; live.forEach(function (s) { if (s.vis > 0 && (!best || s.vis > best.vis)) best = s }); return best }
  function scan(root) {
    // Layers whose canvas left the page are released (a browser keeps only a few WebGL contexts); kept ones stay live
    live = live.filter(function (s) { if (s.cv.isConnected && !s.dead) return true; release(s); return false });
    var all = [].slice.call((root || document).querySelectorAll('canvas.aq-fx-shader[data-gl]'));
    var must = all.filter(function (c) { return !c.hasAttribute('data-gl-optional') });
    all.forEach(function (c) { if (!c.hasAttribute('data-gl-optional')) return; if (must.length >= 2) c.remove(); else must.push(c) });
    all.forEach(function (c) { if (c.isConnected) mount(c) });
  }
  function each(fn) { live.forEach(function (s) { fn(s) }) }
  document.addEventListener('visibilitychange', function () { each(function (s) { s.wake() }) });
  if (window.MutationObserver) new MutationObserver(function () { each(function (s) { s.recolor() }) }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });
  if (window.matchMedia) {
    var cs = matchMedia('(prefers-color-scheme: dark)'), on = function (q, f) { if (q.addEventListener) q.addEventListener('change', f); else if (q.addListener) q.addListener(f) };
    on(cs, function () { each(function (s) { s.recolor() }) });
    if (mq) on(mq, function () { reduce = mq.matches; each(function (s) { s.wake() }) });
  }
  /* GPU cost of a layer, for checks: draws it n times and waits for the GPU; returns ms per frame at its real size */
  function bench(cv, n) {
    var st = cv && cv._aqgl; if (!st) return null; n = n || 30;
    var px = new Uint8Array(4), t0 = performance.now();
    for (var i = 0; i < n; i++) { st.t += 0.016; st.redraw() }
    st.gl.readPixels(0, 0, 1, 1, st.gl.RGBA, st.gl.UNSIGNED_BYTE, px);
    return { ms: (performance.now() - t0) / n, w: cv.width, h: cv.height };
  }
  window.AQgl = { def: function (n, o) { defs[n] = o }, scan: scan, defs: defs, live: function () { return live }, bench: bench };
})();
