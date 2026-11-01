/* Ported from Subframe Motion "Ripple memory" (ripple-memory), MIT, (c) 2026 Subframe
   FxRipple: a water surface that remembers the pointer. The mechanism is the example's: a damped wave equation on a
   CPU height field (Laplacian 0.44, decay a step, Gaussian disturbances), uploaded as a texture
   each step and lit in the fragment shader (surface normal from the height gradient, a soft box and a specular
   highlight). Changed for Aquemi: the field takes the host's shape (128 cells across) and a drop is
   wider (falloff 420, not 1200: on a full-width band a narrow drop breaks up into grid noise), the light is drawn as a
   transparent ink of the host's on-navy token so the band's navy is the water; moving the pointer over the band trails
   small rings, a press drops a larger one; the automatic drop comes every 6.5 s, not 2.4 s; 60 steps a second, not 90; each step keeps 0.978 of the wave,
   not 0.996, and an edge sponge absorbs it, so a ring fades in about two seconds instead of sloshing round the band;
   the field starts flat (the example seeds two drops).
   Under reduced motion the field stays flat (the band is still navy) and the pointer does nothing. */
AQgl.def('ripple', {
  colors: { u_ink: 'on-navy' },
  fps: 60, still: 0, scale: 0.6,
  sim: function (nx, ny, reduce) {
    var N = nx * ny, h = new Float32Array(N), prev = new Float32Array(N), next = new Float32Array(N), data = new Uint8Array(N * 4);
    var asp = ny / nx, carried = 0, clock = 0, t = 0;
    function disturb(x, y, amp) {
      var r = 0.14, i0 = Math.max(1, Math.floor((x - r) * nx)), i1 = Math.min(nx - 2, Math.ceil((x + r) * nx)),
        j0 = Math.max(1, Math.floor((y - r / asp) * ny)), j1 = Math.min(ny - 2, Math.ceil((y + r / asp) * ny));
      for (var j = j0; j <= j1; j++) for (var i = i0; i <= i1; i++) {
        var dx = i / nx - x, dy = (j / ny - y) * asp;
        h[j * nx + i] += Math.exp(-(dx * dx + dy * dy) * 420) * amp;
      }
    }
    function pack() {
      for (var i = 0; i < N; i++) {
        var v = Math.round(Math.max(0, Math.min(1, h[i] * 0.75 + 0.5)) * 65535);
        data[i * 4] = v >> 8; data[i * 4 + 1] = v & 255; data[i * 4 + 3] = 255;
      }
    }
    // damping per cell: 0.978 inside, falling to 0.85 over the outer 10 cells (a sponge: waves leave the band, they do not bounce back)
    var damp = new Float32Array(N);
    for (var j = 0; j < ny; j++) for (var i = 0; i < nx; i++) { var e = Math.min(i, j, nx - 1 - i, ny - 1 - j) / 10; damp[j * nx + i] = e >= 1 ? 0.978 : 0.85 + 0.128 * e * e }
    function evolve(steps) {
      for (var s = 0; s < steps; s++) {
        for (var y = 1; y < ny - 1; y++) for (var x = 1; x < nx - 1; x++) {
          var i = y * nx + x, lap = h[i - 1] + h[i + 1] + h[i - nx] + h[i + nx] - 4 * h[i];
          next[i] = (2 * h[i] - prev[i] + 0.44 * lap) * damp[i];
        }
        var sw = prev; prev = h; h = next; next = sw;
      }
      pack();
    }
    pack();   // starts flat: the band is calm until a drop or the pointer
    return {
      data: data,
      step: function (dt) {
        if (!dt) return false;
        t += dt; carried += dt * 60; clock += dt;
        if (clock > 6.5) { clock = 0; disturb(0.5 + 0.32 * Math.sin(t * 0.63), 0.5 + 0.28 * Math.cos(t * 0.43), 0.14) }
        var n = Math.min(4, Math.floor(carried)); carried -= n;
        if (n) { evolve(n); return true }
        return false;
      },
      touch: function (x, y, press) { disturb(x, y, press ? 0.22 : 0.05) }
    };
  },
  frag: [
    'uniform vec3 u_ink;',
    'float heightAt(vec2 q){vec2 c=texture2D(u_state,q).rg;return (c.r*65280.+c.g*255.)/65535.;}',
    'void main(){',
    ' vec2 uv=gl_FragCoord.xy/u_res;vec2 d=1./u_state_res;',
    ' float x=heightAt(uv+vec2(d.x,0))-heightAt(uv-vec2(d.x,0));',
    ' float y=heightAt(uv+vec2(0,d.y))-heightAt(uv-vec2(0,d.y));',
    ' vec3 n=normalize(vec3(-x*14.,-y*14.,.36));vec3 r=reflect(vec3(0,0,-1),n);',
    ' float softbox=pow(max(0.,1.-abs(r.x+.18)/.42),7.)*pow(max(0.,r.y+.55),2.);',
    ' float spec=pow(max(dot(n,normalize(vec3(-.5,.7,1.))),0.),64.);',
    ' float shade=clamp(dot(n.xy,vec2(.5,-.7))*.9,0.,1.);',
    ' float a=clamp(softbox*.27+spec*.62,0.,1.)*u_amt;',
    ' float k=shade*.12*u_amt;',
    ' gl_FragColor=vec4(u_ink*a,a+k*(1.-a));',
    '}'].join('\n')
});
