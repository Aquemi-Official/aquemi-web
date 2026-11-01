/* Ported from Subframe Motion "Guilloché" (guilloche), MIT, (c) 2026 Subframe
   FxGuilloche: the engraved rosette of a certificate, its petals turning very slowly. The mechanism is the example's:
   rings in polar coordinates whose radius is modulated by two petal waves (12 and 19 lobes, drifting against each
   other), a counter-pattern on 8 lobes, inside a medallion between two hairline rings. Changed for Aquemi: no paper
   or fibres (the host's own ground shows: navy on the first certificate tile), the engraving is the host's ink token
   (on-navy) at --fx-amt, fewer rings (160 to the unit, not 252) so the line work stays clean on a small tile, the
   medallion centred by u_at (fractions of the host, default the middle) and sized by u_size; a third of the example's
   speed, so the petals pass each other once in about three minutes. */
AQgl.def('guilloche', {
  colors: { u_ink: 'on-navy' },
  speed: 0.35, still: 6, scale: 0.75, deriv: true,
  uniforms: function (cv) { if (cv._fxw === innerWidth) return cv._fxu; var s = getComputedStyle(cv); cv._fxw = innerWidth; return cv._fxu = { u_at: [parseFloat(s.getPropertyValue('--fx-x')) || 0.5, parseFloat(s.getPropertyValue('--fx-y')) || 0.5], u_size: parseFloat(s.getPropertyValue('--fx-size')) || 1 } },   // --fx-x, --fx-y, --fx-size from CSS, read once per width
  frag: [
    'uniform vec3 u_ink;uniform vec2 u_at;uniform float u_size;',
    'float band(float v,float lo,float hi){',
    '#ifdef AQ_DERIV',
    ' float w=fwidth(v);return 1.0-smoothstep(lo-w,hi+w,v);',
    '#else',
    ' return 1.0-smoothstep(lo,hi,v);',
    '#endif',
    '}',
    'void main(){',
    ' vec2 p=(gl_FragCoord.xy-u_at*u_res)/(min(u_res.x,u_res.y)*u_size);',
    ' float radius=length(p);',
    ' float angle=atan(p.y,p.x);',
    ' float petals=.036*sin(12.0*angle+.11*u_time);',
    ' petals+=.018*cos(19.0*angle-.075*u_time);',
    ' float phase=160.0*(radius+petals);',
    ' float stroke=band(abs(sin(phase)),.16,.48);',
    ' float counter=band(abs(sin(phase+1.4*sin(8.0*angle))),.12,.4);',
    ' float medallion=smoothstep(.105,.115,radius)*(1.0-smoothstep(.405,.415,radius));',
    ' float perimeter=band(abs(radius-.428),.001,.0035);',
    ' float inner=band(abs(radius-.094),.001,.0035);',
    ' float a=clamp(max(stroke*.8,counter*.54)*medallion+(perimeter+inner)*.9,0.0,1.0)*u_amt;',
    ' gl_FragColor=vec4(u_ink*a,a);',
    '}'].join('\n')
});
