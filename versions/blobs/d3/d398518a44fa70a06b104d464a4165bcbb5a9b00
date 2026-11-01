/* Ported from Subframe Motion "Phosphor trace" (phosphor-trace), MIT, (c) 2026 Subframe
   FxPhosphor: the glow of a phosphor screen under a drawn reading. The mechanism is the example's: the signal is a
   sharp core plus a wide halo by exponential falloff from the trace (exp(-d*620) + 0.23 exp(-d*65)), a fainter
   ghost of the previous sweep, a sweep band that brightens the trace behind the beam, raster lines and a vignette.
   Changed for Aquemi: the trace is not the example's sine but HmiTrend's own reading (the same function as
   hmiTrace() in look-hmi-trend.js, in its 1000 x 320 plot units), so the glow sits exactly under the drawn SVG line and
   the line stays the data; the ghost is the same trace, one raster lower; no grid (the plot draws its own); colour
   from the host's flow token, transparent ground; the beam sweeps the screen once in 10 s, not 6.7 s; u_pen (0..1,
   the canvas's --pen, set by HmiTrend's timeline) holds the glow back until the pen has written the reading. */
AQgl.def('phosphor', {
  colors: { u_ink: 'flow' },
  speed: 1, still: 7, scale: 0.75,
  uniforms: function (cv) { var v = parseFloat(cv.style.getPropertyValue('--pen')); return { u_pen: isNaN(v) ? 1 : v } },
  frag: [
    'uniform vec3 u_ink;uniform float u_pen;',
    // hmiTrace(): n = 7 sin(.071x) + 4 sin(.23x + 1.3) + 5 sin(.013x + .4); after x = 600 it drifts up by 58 ((x-600)/330)^1.6
    'float tr(float x){float n=sin(x*.071)*7.+sin(x*.23+1.3)*4.+sin(x*.013+.4)*5.;float dr=x>600.?pow((x-600.)/330.,1.6)*58.:0.;return 262.+n-dr;}',
    'void main(){',
    ' vec2 uv=gl_FragCoord.xy/u_res;',
    ' float X=uv.x*1000.,Y=(1.-uv.y)*320.;',
    ' float ky=u_res.y/320.,kx=u_res.x/1000.;',
    ' float xa=floor(X/10.)*10.,ya=tr(xa),yb=tr(xa+10.);',   // the SVG is a polyline through every 10th unit: follow it
    ' float y0=mix(ya,yb,(X-xa)/10.),sl=(yb-ya)/10.*ky/kx;',
    ' float d=abs(Y-y0)*ky/sqrt(1.+sl*sl)/min(u_res.x,u_res.y);',
    ' float on=step(X,930.)*step(uv.x,u_pen*.93+.002);',
    ' float signal=(exp(-d*620.)*.5+.23*exp(-d*65.))*on;',
    ' float g=abs(Y+6.-y0)*ky/sqrt(1.+sl*sl)/min(u_res.x,u_res.y);',
    ' float ghost=exp(-g*200.)*.12*on;',
    ' float sweep=.35+.65*(1.-smoothstep(0.,.85,fract(uv.x-.1*u_time)));',
    ' float glow=(signal*sweep+ghost);',
    ' glow*=.94+.06*sin(gl_FragCoord.y*3.14159);',
    ' float vig=.22*pow(length((uv-.5)*1.3),2.);',
    ' float a=clamp(glow,0.,1.)*u_amt;',
    ' float k=vig*u_amt;',
    ' gl_FragColor=vec4(u_ink*a,a+k*(1.-a));',
    '}'].join('\n')
});
