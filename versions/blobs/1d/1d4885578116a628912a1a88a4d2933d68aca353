/* Ported from Subframe Motion "Kiln section" (kiln-section), MIT, (c) 2026 Subframe
   FxCutaway: the body of a cylindrical element behind its drawn end face, cut open to show what is inside. The
   mechanism is the example's: a ray-marched signed-distance solid, cut by planes, with the cut faces ("caps") shaded
   differently from the outer skin and a diffuse light. Changed for Aquemi: the solid is the spiral-wound RO element of
   MembraneFace (pressure vessel wall, permeate tube bore), not a fluted ceramic column; the camera is an oblique
   parallel projection, so the element's front end stays a true circle exactly under the SVG face the look draws
   (u_c, u_r: its centre and radius, measured from that SVG every frame) and the body runs back to the lower right;
   the front end itself is left transparent (the drawing is the face); a quarter of the body is cut away behind the
   face and its two cut faces show the wound leaves as lines along the element; everything is drawn as the host's ink
   token (limestone) at low alpha over the navy tile. No shadows, ambient occlusion pass or edge filter (cost); 64
   march steps, not 160. The cut breathes slowly along the element (one cycle about 20 s) where the example has a
   slider. Strength per placement from --fx-amt. */
AQgl.def('cutaway', {
  colors: { u_ink: 'limestone' },
  speed: 1, still: 2.4, scale: 0.6,
  uniforms: function (cv) {
    var svg = cv.parentElement && cv.parentElement.querySelector('svg'); if (!svg) return { u_c: [0, 0], u_r: 0 };
    var a = cv.getBoundingClientRect(), b = svg.getBoundingClientRect(), k = cv.width / (a.width || 1);
    // the face drawing: viewBox -30 -30 460 460, vessel wall r 178 round (200, 200), i.e. the svg's centre
    return { u_c: [(b.left + b.width / 2 - a.left) * k, (a.bottom - b.top - b.height / 2) * k], u_r: 178 / 460 * (svg.clientWidth || b.width) * k };
  },
  frag: [
    'uniform vec3 u_ink;uniform vec2 u_c;uniform float u_r;',
    'const float L=2.8;',
    'float zc;',
    'float solid(vec3 p){',
    ' float r=length(p.xy);',
    ' float body=max(r-1.,max(p.z,-L-p.z));',
    ' body=max(body,-(r-.14));',
    ' float cut=max(max(-p.x,p.y),p.z+zc);',
    ' return max(body,-cut);',
    '}',
    'vec3 nrm(vec3 p){vec2 e=vec2(.002,0.);return normalize(vec3(solid(p+e.xyy)-solid(p-e.xyy),solid(p+e.yxy)-solid(p-e.yxy),solid(p+e.yyx)-solid(p-e.yyx)));}',
    'void main(){',
    ' if(u_r<1.){gl_FragColor=vec4(0.);return;}',
    ' zc=.55+.3*sin(u_time*.31);',
    ' vec2 s=(gl_FragCoord.xy-u_c)/u_r;',
    ' vec3 d=normalize(vec3(-.42,.42,-1.));',
    ' vec3 o=vec3(s,.02);',
    ' float t=0.;bool hit=false;',
    ' for(int i=0;i<64;i++){float h=solid(o+d*t);if(h<.002){hit=true;break;}t+=max(h*.9,.004);if(t>5.)break;}',
    ' if(!hit){gl_FragColor=vec4(0.);return;}',
    ' vec3 p=o+d*t;',
    ' if(p.z>-.01){gl_FragColor=vec4(0.);return;}',
    ' vec3 n=nrm(p);',
    ' float dif=max(dot(n,normalize(vec3(-.6,.8,.9))),0.);',
    ' float r=length(p.xy),a;',
    ' bool cap=p.z<-zc+.004&&((abs(p.x)<.004&&p.y<0.)||(abs(p.y)<.004&&p.x>0.)||(abs(p.z+zc)<.004&&p.x>0.&&p.y<0.));',
    ' if(cap){',
    '  float leaf=1.-smoothstep(.0,.012,abs(fract((r-.17)/.069+.5)-.5)*.069);',
    '  leaf*=step(.17,r)*step(r,.87);',
    '  float wall=step(.93,r);',
    '  float tube=step(r,.17);',
    '  a=.16+.10*dif+.34*leaf+.22*wall+.14*tube;',
    ' } else {',
    '  a=.06+.18*dif+.12*pow(max(dot(reflect(d,n),normalize(vec3(-.6,.8,.9))),0.),24.);',
    ' }',
    ' a=clamp(a,0.,1.)*u_amt;',
    ' gl_FragColor=vec4(u_ink*a,a);',
    '}'].join('\n')
});
