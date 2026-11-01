/* Ported from Subframe Motion "Contour terrain" (contour-terrain), MIT, (c) 2026 Subframe
   FxContour: a topographic sheet, contour lines of a slowly drifting terrain. The mechanism is the example's: the
   terrain is two Gaussian hills less a valley plus a fine sine ripple, drifting on two slow sines, cut into 15 bands.
   Changed for Aquemi: no orange bands or crosses; only the contour lines are drawn, as hairlines of the host's ink
   token (on-limestone on a limestone sheet) on a transparent ground, every fifth an index contour a little heavier,
   as on a survey sheet; the lines are kept one device pixel wide with fwidth where the GPU has it. A third of the
   example's speed: the hills breathe once in about two minutes. Strength per placement from --fx-amt. */
AQgl.def('contour', {
  colors: { u_ink: 'on-limestone' },
  speed: 0.35, still: 3, scale: 0.75, deriv: true,
  frag: [
    'uniform vec3 u_ink;',
    'float terrain(vec2 p){',
    ' p+=.045*vec2(sin(u_time*.17),cos(u_time*.13));',
    ' float a=exp(-dot(p-vec2(.22,.12),p-vec2(.22,.12))*4.0);',
    ' float b=.72*exp(-dot(p-vec2(-.4,-.2),p-vec2(-.4,-.2))*7.5);',
    ' float valley=.37*exp(-dot(p-vec2(-.02,-.25),p-vec2(-.02,-.25))*18.0);',
    ' return a+b-valley+.027*sin(p.x*18.0+sin(p.y*12.0));',
    '}',
    'void main(){',
    ' vec2 p=(gl_FragCoord.xy-.5*u_res)/min(u_res.x,u_res.y);',
    ' float alt=terrain(p*1.6)*15.0;',
    ' float edge=fract(alt);',
    ' float d=min(edge,1.0-edge);',
    '#ifdef AQ_DERIV',
    ' float w=max(fwidth(alt),1e-4);',
    ' float line=1.0-smoothstep(.5,1.5,d/w);',
    '#else',
    ' float line=1.0-smoothstep(.02,.07,d);',
    '#endif',
    ' float index=1.0-step(.5,mod(floor(alt+.5),5.0));',
    ' float a=line*mix(.55,1.0,index)*u_amt;',
    ' gl_FragColor=vec4(u_ink*a,a);',
    '}'].join('\n')
});
