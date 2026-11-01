/* Look "exploded-service" -> ExplodedService (design-system/components/ExplodedService): service promises as callouts
   on an exploded view of the part that service keeps running, a centrifugal pump drawn on a light drawing sheet
   (IsoKit primitives, drawn here: the kit has an assembled pump, not an exploded one). The pump comes apart along its
   shaft line: motor, adapter and shaft, mechanical seal, back plate, impeller, O-ring, volute casing with a service
   tag hung on its discharge. Three leaders run from three parts to the promises: the impeller (a like-for-like part),
   the motor (energy and running cost), the tag (the signed record). Pointing at a promise lights its part.
   Phones: the drawing on top, the promises stacked under it, numbered to the leaders.
   Fields (a grid block): h, items [{t, d, icon, link, part}]. part: which part the leader points at: "impeller",
   "motor" or "tag" (default in that order). Best for exactly three items. */
function esPump(){var K=2.6,Zc=22,G=[];
 /* one part: builder at the origin, local units, its exploded offset along the shaft (screen units) for motion */
 function part(id,du,fn){var b=isoB(0,0,0,K);fn(b);var g=b.done('es-'+id,{id:id});
  var v=isoP([0,-du*K,0]);return '<g class="aq-exploded-service__piece" data-du="'+isoF(v[0])+','+isoF(v[1])+'">'+g+'</g>'}
 var ax='-y';
 /* back to front: larger u (further up the line) is further back */
 G.push(part('tag',-114,function(b){var z=Zc+30;
  b.line([0,-206,Zc+17+12],[4,-212,z+14],ISO_K.th);
  b.poly([[4,-208,z+14],[4,-224,z+14],[4,-224,z],[4,-208,z]],ISO_K.eq+' aq-iso__eq--sheet');
  b.ring(4,-210.5,z+11.5,'x',1,ISO_K.th);
  [z+9,z+6.5,z+4].forEach(function(q,i){b.line([4,-212.5,q],[4,i===2?-217:-221,q],ISO_K.th)});
  b.add(isoPath(isoPoly([b.p(4,-217.5,z+3.2),b.p(4,-219.5,z+1.6),b.p(4,-222.5,z+5.4)]),'aq-iso__acc'))}));
 G.push(part('casing',-114,function(b){
  b.box(-12,-206,0,24,14,Zc-14);
  b.noz(0,-206,Zc,'-y',14,6.5);
  b.cyl(0,-190,Zc,'-y',16,19);b.band(0,-198,Zc,'y',19);
  b.noz(0,-198,Zc+17,'z',12,5.4);
  b.ring(0,-190,Zc,'y',12,ISO_K.th);b.ring(0,-190,Zc,'y',16.5,ISO_K.th);
  for(var i=0;i<8;i++){var t=i*Math.PI/4;b.ring(Math.cos(t)*17.6,-190,Zc+Math.sin(t)*17.6,'y',0.9,ISO_K.th)}}));
 G.push(part('oring',-98,function(b){b.ring(0,-172,Zc,'y',17,ISO_K.ln);b.ring(0,-172,Zc,'y',15.4,ISO_K.th)}));
 G.push(part('impeller',-78,function(b){var u=150;
  b.cyl(0,-u-6,Zc,'-y',6,5);
  b.cyl(0,-u,Zc,'-y',5,13);
  var d='';for(var k=0;k<6;k++){var a0=k*Math.PI/3,pts=[];for(var j=0;j<=6;j++){var r=4.5+j*1.35,a=a0+j*0.16;pts.push(b.p(Math.cos(a)*r,-u,Zc+Math.sin(a)*r))}d+=isoPoly(pts)}
  b.add(isoPath(d,ISO_K.ln));b.ring(0,-u,Zc,'y',4.2,ISO_K.th);b.ring(0,-u,Zc,'y',1.8,ISO_K.th)}));
 G.push(part('plate',-58,function(b){b.cyl(0,-124,Zc,'-y',3,18);b.cyl(0,-127,Zc,'-y',4,8);
  for(var i=0;i<8;i++){var t=i*Math.PI/4+0.2;b.ring(Math.cos(t)*15,-124,Zc+Math.sin(t)*15,'y',1,ISO_K.th)}b.ring(0,-124,Zc,'y',5,ISO_K.th)}));
 G.push(part('seal',-42,function(b){b.cyl(0,-104,Zc,'-y',6,6.5);[1.5,3,4.5].forEach(function(q){b.band(0,-104-q,Zc,'y',6.5)});b.cyl(0,-110,Zc,'-y',2,4.5)}));
 G.push(part('motor',0,function(b){
  b.box(-14,4,0,28,-50,4);b.box(-11,-2,4,22,-38,Zc-16-4);
  b.cyl(0,-64,Zc,'-y',30,2.4);b.line([0,-80,Zc+2.4],[0,-90,Zc+2.4],ISO_K.th);
  b.cyl(0,-56,Zc,'-y',8,15);b.ring(0,-56,Zc,'y',11,ISO_K.th);
  b.cyl(0,-44,Zc,'-y',12,13);
  b.cyl(0,0,Zc,'-y',44,16);for(var u=6;u<40;u+=3.4)b.band(0,-u,Zc,'y',16);
  b.box(-6,-26,Zc+14.5,12,12,7);b.cyl(0,-20,Zc+21.5,'z',2,1.6);
  b.cyl(0,8,Zc,'-y',8,15);b.ring(0,8,Zc,'y',11,ISO_K.th);b.ring(0,8,Zc,'y',6,ISO_K.th);b.ring(0,8,Zc,'y',2,ISO_K.th)}));
 /* points for the leaders (local units -> world) */
 var L=function(p){return [p[0]*K,p[1]*K,p[2]*K]};
 return {K:K,parts:G.join(''),pts:{motor:L([0,-20,Zc+23]),impeller:L([0,-150,Zc-13]),tag:L([4,-216,Zc+30])},
  axis:[L([0,24,Zc]),L([0,-236,Zc])]}}
LOOKS['exploded-service']=function(b,H){var I=(b.items||[]).slice(0,3),P=esPump(),W=1200,Hh=590,org=[300,515];
 var slots={motor:{to:[300,232],shelf:250},impeller:{to:[720,490],shelf:260},tag:{to:[910,265],shelf:250}},order=['impeller','motor','tag'];
 var pick=I.map(function(it,i){return it.part&&slots[it.part]?it.part:order[i]});
 var leads=pick.map(function(k,i){var s=slots[k];return isoLeader(P.pts[k],[s.to[0]-org[0],s.to[1]-org[1]],{shelf:s.shelf,cls:'aq-exploded-service__lead','dot':2.2})});
 var cl=P.axis.map(isoP),axisLine='<path class="aq-exploded-service__axis" d="M'+isoT(cl[0])+'L'+isoT(cl[1])+'"/>';
 var inner=axisLine+P.parts+leads.map(function(l,i){return '<g data-lead="'+i+'">'+l+'</g>'}).join('');
 var sheet=isoSheet(W,Hh,{title:{w:250,h:48},cols:6,rows:4,m:1,band:12});
 var svg=isoSvg(W,Hh,inner,'aq-exploded-service__svg',{origin:org,under:sheet});
 var nums=leads.map(function(l,i){var p=isoPct(l.start,W,Hh,org);return '<span class="aq-exploded-service__pin" style="left:'+p.left+';top:'+p.top+'">'+(i+1)+'</span>'}).join('');
 var calls=I.map(function(it,i){var l=leads[i],s=slots[pick[i]],a=isoPct(l.side==='left'?l.end:[l.end[0]-s.shelf,l.end[1]],W,Hh,org),w=(s.shelf/W*100).toFixed(2);
  var go=it.link&&wp(it.link),t=go?wlink(it.link,it.t):tx(it.t);
  return '<li class="aq-exploded-service__call aq-exploded-service__call--'+l.side+'" data-part="'+pick[i]+'" data-lead="'+i+'" style="left:'+a.left+';top:'+a.top+';width:'+w+'%">'
   +'<p class="aq-exploded-service__code"><span class="aq-exploded-service__n" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span>'+(isIcon(it.icon)?wIcon(it.icon,'aq-exploded-service__ic'):'')+'</p>'
   +'<h3 class="aq-exploded-service__t">'+t+'</h3>'+(it.d?'<p class="aq-exploded-service__d">'+tx(it.d)+'</p>':'')+'</li>'}).join('');
 return sec(H+'<div class="aq-exploded-service"><div class="aq-exploded-service__fig" aria-hidden="true"><div class="aq-exploded-service__art">'+svg+nums+'</div></div><ol class="aq-exploded-service__calls">'+calls+'</ol></div>')};
/* Pointing at (or focusing) a promise lights its part and leader */
(function(){function hl(ev,on){var c=ev.target.closest&&ev.target.closest('.aq-exploded-service__call');if(!c||c.contains(ev.relatedTarget))return;var r=c.closest('.aq-exploded-service');
 [].forEach.call(r.querySelectorAll('[data-iso-id="'+c.getAttribute('data-part')+'"], .aq-exploded-service__svg [data-lead="'+c.getAttribute('data-lead')+'"]'),function(el){el.classList.toggle('is-lit',on)})}
 document.addEventListener('mouseover',function(ev){hl(ev,true)});document.addEventListener('mouseout',function(ev){hl(ev,false)});
 document.addEventListener('focusin',function(ev){hl(ev,true)});document.addEventListener('focusout',function(ev){hl(ev,false)})})();
