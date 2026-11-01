/* Look "section-train" -> SectionTrain (design-system/components/SectionTrain): a pretreatment train as one sectional
   elevation on a limestone sheet. Every vessel is cut in half (hatched walls) so its bed shows: graded media, resin
   beads, carbon granules, a pleated cartridge. A lens at the feed shows what the water carries (particles, hardness,
   chlorine); each bed holds what it caught; a second lens at the outlet shows the water the RO receives, clean.
   One pipe runs the train (down through each vessel, under, up the gap, into the next), with the monitoring bus under
   it. Under the drawing, a column per stage: number, name, line, and a "catches" chip with the glyph its bed holds.
   Phones: the elevation is cut into one frame per stage, run down the page on a pipe rail.
   Fields (a diagram block): h, stages [{t, d, link, cut, catch}], base. New optional per stage:
   cut: the drawing for that column: "feed" | "tank" | "media" | "softener" | "carbon" | "cartridge" | "out"
   (default by position: first feed, last out, else media);
   catch: {g, t}: the glyph its bed holds (g: "p" particles, "h" hardness, "c" chlorine, "f" fines) and its short name.
   A link on a stage makes its name the link (the "To RO" stage opens sys-pw). */
(function(){
var CW=200,VH=400,TOP=40,RUN=330,V0=70,V1=300,K='aq-section-train';
function rnd(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
function f1(n){return Math.round(n*10)/10}
/* contaminant glyphs: p particle (solid dot), h hardness (hexagon crystal), c chlorine (cross), f fines (tiny dot) */
function glyph(g,x,y,k){k=k||1;x=f1(x);y=f1(y);
 if(g==='p')return '<circle class="'+K+'__g '+K+'__g--p" cx="'+x+'" cy="'+y+'" r="'+f1(3.4*k)+'"/>';
 if(g==='f')return '<circle class="'+K+'__g '+K+'__g--f" cx="'+x+'" cy="'+y+'" r="'+f1(1.6*k)+'"/>';
 if(g==='h'){var r=4.6*k,d='';for(var i=0;i<6;i++){var a=Math.PI/3*i+Math.PI/6;d+=(i?'L':'M')+f1(x+r*Math.cos(a))+' '+f1(y+r*Math.sin(a))}return '<path class="'+K+'__g '+K+'__g--h" d="'+d+'Z"/>'}
 var s=3.6*k;return '<path class="'+K+'__g '+K+'__g--c" d="M'+f1(x-s)+' '+f1(y-s)+'L'+f1(x+s)+' '+f1(y+s)+'M'+f1(x+s)+' '+f1(y-s)+'L'+f1(x-s)+' '+f1(y+s)+'"/>'}
function chipGlyph(g){return '<svg class="'+K+'__cg" viewBox="-7 -7 14 14" aria-hidden="true" focusable="false">'+glyph(g,0,0,1.2)+'</svg>'}
/* vessel outline with domed heads (x0..x1, y0..y1) */
function shell(x0,x1,y0,y1,dh){var c=(x0+x1)/2;
 return 'M'+x0+' '+(y0+dh)+'Q'+x0+' '+y0+' '+c+' '+y0+'Q'+x1+' '+y0+' '+x1+' '+(y0+dh)+'V'+(y1-dh)+'Q'+x1+' '+y1+' '+c+' '+y1+'Q'+x0+' '+y1+' '+x0+' '+(y1-dh)+'Z'}
/* a cut vessel: hatched wall ring, the interior on the sheet colour */
function cutVessel(x0,x1,y0,y1,dh,hid,t){t=t||6;
 return '<path class="'+K+'__wall" d="'+shell(x0,x1,y0,y1,dh)+'" fill="url(#'+hid+')"/><path class="'+K+'__in" d="'+shell(x0+t,x1-t,y0+t,y1-t,dh-t*0.6)+'"/>'}
/* granular fill: n marks in the box, drawn by fn(x, y, r) */
function fill(box,n,seed,fn){var R=rnd(seed),o='';for(var i=0;i<n;i++)o+=fn(box[0]+R()*(box[2]-box[0]),box[1]+R()*(box[3]-box[1]),R());return o}
function pebble(cls,s){return function(x,y,r){var k=s*(0.7+r*0.6);return '<ellipse class="'+K+'__'+cls+'" cx="'+f1(x)+'" cy="'+f1(y)+'" rx="'+f1(k)+'" ry="'+f1(k*0.75)+'"/>'}}
function grain(x,y,r){var d='',n=5,s=3+r*2.5;for(var i=0;i<n;i++){var a=Math.PI*2*i/n+r*3,q=s*(0.7+((i*7+r*10)%3)*0.15);d+=(i?'L':'M')+f1(x+q*Math.cos(a))+' '+f1(y+q*Math.sin(a))}return '<path class="'+K+'__grain" d="'+d+'Z"/>'}
function caught(g,box,n,seed){var R=rnd(seed),o='';for(var i=0;i<n;i++)o+=glyph(g,box[0]+R()*(box[2]-box[0]),box[1]+R()*(box[3]-box[1]));return '<g class="'+K+'__caught" data-g="'+g+'">'+o+'</g>'}
/* the lens: a magnified sample of the water at that point */
function lens(cx,cy,gs,seed){var R=rnd(seed),o='',r=58,waves='';
 for(var k=-2;k<=2;k++){var y=cy+k*20;waves+='M'+(cx-r)+' '+y+'C'+(cx-r/2)+' '+(y-6)+' '+(cx-r/4)+' '+(y+6)+' '+cx+' '+y+'S'+(cx+r/2)+' '+(y-6)+' '+(cx+r)+' '+y}
 gs.forEach(function(g,i){var n=g==='f'?10:4;for(var j=0;j<n;j++){var a=R()*Math.PI*2,d=Math.sqrt(R())*(r-12);o+=glyph(g,cx+d*Math.cos(a),cy+d*Math.sin(a))}});
 return '<g class="'+K+'__lens"><circle class="'+K+'__lens-rim" cx="'+cx+'" cy="'+cy+'" r="'+(r+6)+'"/><circle class="'+K+'__lens-face" cx="'+cx+'" cy="'+cy+'" r="'+r+'"/>'
  +'<path class="'+K+'__lens-water" d="'+waves+'" clip-path="url(#'+LID+'-'+cx+')"/>'+o
  +'<path class="'+K+'__lead" d="M'+cx+' '+(cy+r+6)+'V'+(RUN-10)+'"/><circle class="'+K+'__dot" cx="'+cx+'" cy="'+(RUN-8)+'" r="2.5"/></g>'}
/* one column's drawing, in the elevation's coordinates (column i spans x = 200i .. 200i + 200) */
function art(kind,i,hid,catchG){var cx=CW*i+CW/2,o='',bed;
 if(kind==='feed')return lens(cx,170,['p','h','c'],11);
 if(kind==='out')return lens(cx,170,[],23)+'<path class="'+K+'__arrow" d="M'+(CW*i+CW-26)+' '+(RUN-8)+'L'+(CW*i+CW-12)+' '+RUN+'L'+(CW*i+CW-26)+' '+(RUN+8)+'"/>';
 if(kind==='tank'){var x0=cx-55,x1=cx+55;
  o+='<path class="'+K+'__wall" d="M'+x0+' 84V'+V1+'H'+x1+'V84H'+(x1-6)+'V'+(V1-6)+'H'+(x0+6)+'V84Z" fill="url(#'+hid+')"/>'
   +'<path class="'+K+'__in" d="M'+(x0+6)+' 84H'+(x1-6)+'V'+(V1-6)+'H'+(x0+6)+'Z"/>'
   +'<path class="'+K+'__level" d="M'+(x0+6)+' 132H'+(x1-6)+'"/>'
   +[160,190,220,250].map(function(y){return '<path class="'+K+'__ripple" d="M'+(x0+16)+' '+y+'h22M'+(x0+50)+' '+y+'h14M'+(x1-34)+' '+y+'h20"/>'}).join('')
   /* air break between the spout and the water, and the double-check backflow preventer on the top run */
   +'<path class="'+K+'__gap" d="M'+(cx-14)+' 104H'+(cx+14)+'M'+(cx-14)+' 128H'+(cx+14)+'"/>'
   +'<path class="'+K+'__valve" d="M'+(cx-70)+' '+(TOP-9)+'L'+(cx-52)+' '+(TOP+9)+'V'+(TOP-9)+'L'+(cx-34)+' '+(TOP+9)+'V'+(TOP-9)+'L'+(cx-70)+' '+(TOP+9)+'Z"/>';
  return o}
 if(kind==='softener'){var a0=cx-52,b0=cx+6;
  o+=cutVessel(a0,a0+46,V0+10,V1,14,hid,5)+cutVessel(b0,b0+46,V0+10,V1,14,hid,5);
  o+='<g class="'+K+'__bed">'+fill([a0+8,V0+56,a0+38,V1-14],70,7,pebble('bead',2.4))+'</g>';
  o+='<g class="'+K+'__bed '+K+'__bed--idle">'+fill([b0+8,V0+56,b0+38,V1-14],70,9,pebble('bead',2.4))+'</g>';
  o+='<path class="'+K+'__level" d="M'+(a0+6)+' '+(V0+50)+'H'+(a0+40)+'M'+(b0+6)+' '+(V0+50)+'H'+(b0+40)+'"/>';
  o+='<path class="'+K+'__regen" d="M'+(b0+12)+' '+(V0+36)+'v-14l-4 5m4-5 4 5"/>';
  return o+caught(catchG||'h',[a0+10,V0+58,a0+36,V0+110],7,5)}
 if(kind==='cartridge'){var c0=cx-34,c1=cx+34,pl='';
  o+=cutVessel(c0,c1,V0+30,V1,10,hid,5)+'<path class="'+K+'__head" d="M'+(c0-8)+' '+(V0+30)+'H'+(c1+8)+'V'+(V0+44)+'H'+(c0-8)+'Z"/>';
  for(var y=V0+60;y<V1-24;y+=8)pl+=(y===V0+60?'M':'L')+(cx-14)+' '+y+'L'+(cx-6)+' '+(y+4);
  var pr='';for(var y2=V0+60;y2<V1-24;y2+=8)pr+=(y2===V0+60?'M':'L')+(cx+14)+' '+y2+'L'+(cx+6)+' '+(y2+4);
  o+='<path class="'+K+'__pleat" d="'+pl+'"/><path class="'+K+'__pleat" d="'+pr+'"/><path class="'+K+'__core" d="M'+(cx-3)+' '+(V0+56)+'V'+(V1-20)+'M'+(cx+3)+' '+(V0+56)+'V'+(V1-20)+'"/>';
  return o+caught(catchG||'f',[cx-24,V0+64,cx-16,V1-30],8,3)+caught(catchG||'f',[cx+16,V0+64,cx+24,V1-30],8,4)}
 var x0=cx-55,x1=cx+55;o+=cutVessel(x0,x1,V0,V1,26,hid,6);
 if(kind==='carbon'){
  o+='<path class="'+K+'__level" d="M'+(x0+8)+' '+(V0+58)+'H'+(x1-8)+'"/>';
  o+='<g class="'+K+'__bed">'+fill([x0+12,V0+64,x1-12,V1-28],70,13,grain)+'</g>';
  return o+caught(catchG||'c',[x0+16,V0+66,x1-16,V0+112],7,8)}
 /* media: freeboard, fine sand, coarse sand, gravel, underdrain */
 o+='<path class="'+K+'__level" d="M'+(x0+8)+' '+(V0+64)+'H'+(x1-8)+'M'+(x0+7)+' 196H'+(x1-7)+'M'+(x0+7)+' 236H'+(x1-7)+'"/>';
 o+='<g class="'+K+'__bed">'+fill([x0+10,V0+70,x1-10,192],90,17,function(x,y){return '<circle class="'+K+'__sand" cx="'+f1(x)+'" cy="'+f1(y)+'" r="0.9"/>'})
  +fill([x0+12,200,x1-12,232],26,19,pebble('pebble',3))+fill([x0+14,242,x1-14,V1-28],14,23,pebble('pebble',5.5))+'</g>'
  +'<path class="'+K+'__drain" d="M'+(x0+14)+' '+(V1-20)+'H'+(x1-14)+'M'+(cx-30)+' '+(V1-20)+'v5M'+(cx-10)+' '+(V1-20)+'v5M'+(cx+10)+' '+(V1-20)+'v5M'+(cx+30)+' '+(V1-20)+'v5"/>';
 return o+caught(catchG||'p',[x0+14,V0+56,x1-14,V0+66],12,2)}
/* the water route: down through each vessel, out under, up the gap, into the next. Returns path data and, per column,
   the fraction of the route at which the water reaches it */
function route(kinds){var P=[[0,RUN],[CW,RUN]],at=[0],i;
 for(i=1;i<kinds.length;i++){var cx=CW*i+CW/2,k=kinds[i];if(k==='softener')cx-=29;
  if(k==='out'){P.push([CW*i+CW,RUN]);at.push(P.length-2);break}
  P.push([CW*i,RUN]);P.push([CW*i,TOP]);P.push([cx,TOP]);at.push(P.length-1);P.push([cx,V1]);P.push([cx,RUN])}
 /* drop repeated points */
 P=P.filter(function(p,j){return !j||p[0]!==P[j-1][0]||p[1]!==P[j-1][1]});
 var L=[0];for(i=1;i<P.length;i++)L.push(L[i-1]+Math.abs(P[i][0]-P[i-1][0])+Math.abs(P[i][1]-P[i-1][1]));
 var T=L[L.length-1],fr=[0];
 for(i=1;i<kinds.length;i++){var cx2=CW*i+CW/2-(kinds[i]==='softener'?29:0),j;
  if(kinds[i]==='out'){fr.push(1);continue}
  for(j=0;j<P.length;j++)if(P[j][0]===cx2&&P[j][1]===TOP)break;
  fr.push(j<P.length?L[j]/T:i/kinds.length)}
 var d=P.map(function(p,j){return (j?'L':'M')+p[0]+' '+p[1]}).join('');
 return {d:d,fr:fr}}
var hatchN=0,LID='';
LOOKS['section-train']=function(b,H){
 var I=b.stages||b.items||[],n=I.length,W=CW*n,hid=K+'-h'+(++hatchN);
 var kinds=I.map(function(it,i){return it.cut||(i===0?'feed':i===n-1?'out':'media')});
 var R=route(kinds);LID=hid+'-c';
 var clips=kinds.map(function(k,i){return k==='feed'||k==='out'?'<clipPath id="'+LID+'-'+(CW*i+CW/2)+'"><circle cx="'+(CW*i+CW/2)+'" cy="170" r="58"/></clipPath>':''}).join('');
 var defs='<defs>'+clips+'<pattern id="'+hid+'" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)"><rect class="'+K+'__hatch-bg" width="6" height="6"/><path class="'+K+'__hatch" d="M0 0V6"/></pattern></defs>';
 var cols=I.map(function(it,i){var c=it.catch||{},k=kinds[i],x=CW*i+CW/2-(k==='softener'?29:0),sp=k==='feed'||k==='out'?'':'<path class="'+K+'__seep" d="M'+x+' '+(k==='tank'?140:V0+20)+'V'+(V1-12)+'"/>';return '<g class="'+K+'__col" data-k="'+i+'">'+art(k,i,hid,c.g)+sp+'</g>'});
 var bus=[],bx=[];kinds.forEach(function(k,i){var cx=CW*i+CW/2;if(k==='softener'||k==='carbon')bx.push(CW*i+CW+40);if(k==='cartridge')bx.push(cx)});
 var busD=bx.length?'<path class="'+K+'__bus" d="M'+(Math.min.apply(0,bx)-60)+' 372H'+(Math.max.apply(0,bx)+60)+'"/>'
  +bx.map(function(x){return '<path class="'+K+'__tap" d="M'+x+' '+(RUN+6)+'V362"/><circle class="'+K+'__bubble" cx="'+x+'" cy="372" r="10"/><path class="'+K+'__tap" d="M'+(x-10)+' 372H'+(x+10)+'"/>'}).join(''):'';
 var pipe='<path class="'+K+'__pipe" d="'+R.d+'"/><path class="'+K+'__bore" d="'+R.d+'"/>';
 var swarm='<g class="'+K+'__swarm">'+[['p',-9,-3],['p',6,4],['p',-2,8],['h',10,-7],['h',-12,7],['c',2,-9],['c',-6,-1]].map(function(s){return '<g data-g="'+s[0]+'">'+glyph(s[0],s[1],s[2],0.8)+'</g>'}).join('')+'</g>';
 var svg='<svg class="'+K+'__defs" aria-hidden="true" focusable="false">'+defs+'</svg><svg class="'+K+'__svg" viewBox="0 0 '+W+' '+VH+'" aria-hidden="true" focusable="false">'+pipe
  +'<path class="'+K+'__flow" d="'+R.d+'"/>'+cols.join('')+busD+swarm+'<circle class="'+K+'__drop" r="5" cx="0" cy="'+RUN+'"/></svg>';
 var li=I.map(function(it,i){var c=it.catch,cx=CW*i+CW/2,t=it.link&&wp(it.link)?wlink(it.link,it.t):tx(it.t);
  var mini='<svg class="'+K+'__mini" viewBox="'+(cx-100)+' 20 200 '+(VH-50)+'" aria-hidden="true" focusable="false">'+art(kinds[i],i,hid,c&&c.g)+'</svg>';
  return '<li class="'+K+'__stage" data-at="'+R.fr[i].toFixed(3)+'" data-cut="'+e(kinds[i])+'">'+mini
   +'<div class="'+K+'__text"><p class="'+K+'__no">'+idx(i)+'</p><h3 class="'+K+'__t">'+t+'</h3>'
   +(it.d?'<p class="'+K+'__d">'+tx(it.d)+'</p>':'')
   +(c&&c.t?'<p class="'+K+'__catch">'+chipGlyph(c.g)+'<span>'+tx(c.t)+'</span></p>':'')+'</div></li>'}).join('');
 var base=b.base?'<p class="'+K+'__base"><span class="'+K+'__base-mark" aria-hidden="true"></span>'+tx(b.base)+'</p>':'';
 return sec(H+'<div class="'+K+'" data-theme="light" style="--n:'+n+'">'+svg+'<ol class="'+K+'__stages">'+li+'</ol>'+base+'</div>','aq-band--limestone '+K+'-sec')};
})();
