/* Ported from Subframe Motion "Truchet ribbon" (truchet-ribbon), MIT, (c) 2026 Subframe
   FxTruchet: a ground of pipe tiles, the Truchet quarter-arc tiling of the example (each cell flipped by a hash, two
   arcs per cell, so every run joins its neighbours into one endless pipework) drifting slowly sideways. Changed for
   Aquemi: the ribbon is drawn as a twin-wall pipe (two hairlines either side of the arc's centre line, as the
   ManifoldRouter manifold is drawn), not a filled honey ribbon; no fill colours, the walls are the host's ink token
   (on-limestone-muted) at --fx-amt on a transparent ground; larger cells (5 to the short side, not 7); a third of the
   example's drift, one cell every 50 s or so. No state texture (the example's u_state and mode are unused here). */
AQgl.def('truchet', {
  colors: { u_ink: 'on-limestone-muted' },
  speed: 0.35, still: 4, scale: 0.75, deriv: true,
  frag: [
    'uniform vec3 u_ink;',
    'float hash(vec2 p){return fract(sin(dot(p,vec2(83.17,217.43)))*19731.731);}',
    'void main(){',
    ' vec2 p=(gl_FragCoord.xy-.5*u_res)/min(u_res.x,u_res.y)*5.+vec2(u_time*.055,0.);',
    ' vec2 id=floor(p),q=fract(p);',
    ' if(hash(id)>.5)q.x=1.-q.x;',
    ' float d=min(abs(length(q)-.5),abs(length(q-1.)-.5));',
    ' float width=.11;',
    ' float e=abs(d-width);',
    '#ifdef AQ_DERIV',
    ' float px=fwidth(d);',
    '#else',
    ' float px=5./min(u_res.x,u_res.y);',
    '#endif',
    ' float wall=1.-smoothstep(px*.6,px*1.6,e);',
    ' float bore=(1.-smoothstep(width-px,width,d))*.18;',
    ' float a=clamp(wall+bore,0.,1.)*u_amt;',
    ' gl_FragColor=vec4(u_ink*a,a);',
    '}'].join('\n')
});
