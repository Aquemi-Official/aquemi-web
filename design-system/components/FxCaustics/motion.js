/* Ported from Subframe Motion "Tidal caustics" (tidal-caustics), MIT, (c) 2026 Subframe
   FxCaustics: light through moving water, drawn as a faint ink of the flow token on the host's own ground. The
   mechanism is the example's: three warped sine lattices, each rotated 0.7 rad and scaled 1.09, summed through a sharp
   ridge (pow 12). Changed for Aquemi: no pool tiles, seams or grain; the light is the only mark and it is
   transparent, so the section's ground (surface or navy) shows through; half the example's speed (steady flow, the
   lattice drifts once in about a minute); strength per placement from --fx-amt. */
AQgl.def('caustics', {
  colors: { u_ink: 'flow' },
  speed: 0.5, still: 3, scale: 0.6,
  frag: [
    'uniform vec3 u_ink;',
    'mat2 rotate(float a){return mat2(cos(a),-sin(a),sin(a),cos(a));}',
    'void main(){',
    ' vec2 p=(gl_FragCoord.xy-.5*u_res)/min(u_res.x,u_res.y);',
    ' vec2 q=p*5.0;',
    ' float t=u_time*.17;',
    ' float light=0.0;',
    ' for(int i=0;i<3;i++){',
    '  float f=float(i);',
    '  vec2 v=q+vec2(sin(q.y*1.3+t+f*2.1),cos(q.x*1.7-t+f*2.6))*.8;',
    '  float s=sin(v.x*2.0+t)+cos(v.y*2.1-t*.8);',
    '  light+=pow(max(0.0,1.0-abs(s)*.9),12.0)/3.0;',
    '  q=rotate(.7)*q*1.09;',
    ' }',
    ' float a=clamp(light*1.6,0.0,1.0)*u_amt;',
    ' gl_FragColor=vec4(u_ink*a,a);',
    '}'].join('\n')
});
