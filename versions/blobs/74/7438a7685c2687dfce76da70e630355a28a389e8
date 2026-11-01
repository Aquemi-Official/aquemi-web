/* Look "option-taps" -> OptionTaps (design-system/components/OptionTaps): options drawn where they would join the
   train. A blueprint sheet on navy carries the standard train in solid isometric line (IsoKit, left to right), and each
   option as a dashed part (the drawing convention for "optional") on its own dashed tee off the main line, at the stage
   it serves, in a row behind or in front of the train. A numbered marker sits on each dashed part; the option cards
   under the sheet carry the same numbers. Hovering a card lights its part.
   Fields (an options block): h, items [{t, d, spot, at, part, row}], train [{part, label}], fold, fold_noun.
   New optional fields: train: the standard train left to right (part: an IsoKit kind, label: a short drawing label);
   per item: at (position along the train, 0 = first part, fractions between), part (the IsoKit kind drawn dashed;
   default filter), row ("back" or "front", default alternating).
   Phones: the sheet stays (markers keep the pairing), cards stack under it. */
(function(){
var K='aq-option-taps',S=230;
/* the card's own drawing of its dashed part (phones, where the sheet is small) */
function mini(it){var pt=isoPart(it.part||'filter',0,0,0,1,{cls:K+'__ghost',r:it.r,h:it.h}),bx=isoBounds([[-40,-40,0],[40,40,0],[-40,40,90],[40,-40,90]],4);
 return isoSvg(Math.round(bx.w),Math.round(bx.h),pt,'aq-iso--navy '+K+'__mini',{origin:[-bx.x,-bx.y]})}
function pos(j,dy){return [j*S/2,-j*S/2+(dy||0),0]}
LOOKS['option-taps']=function(b,H){
 var T=b.train||[],I=b.items||[],sc=1.7,back='',main='',front='',labels=[],marks=[];
 var line=function(j){var p=pos(j,46);return [p[0],p[1],14]};
 var j0=-0.55,j1=Math.max(T.length-1,0)+0.5;
 /* the standard train */
 T.forEach(function(t,j){var p=pos(j),pt=isoPart(t.part||'filter',p[0]+(t.part==='ro'?-50:0),p[1]+(t.part==='ro'?-6:0),0,t.part==='ro'?1.2:sc,{id:'t'+j,r:t.r,h:t.h});
  main+=pt;labels.push({at:pt.at,t:t.label,dy:t.ly})});
 var trunk=isoPipe([line(j0),line(j1)],{r:4,caps:true,flanges:'ends',to:'t0'});
 /* the options: dashed parts on dashed tees */
 I.forEach(function(it,i){var row=it.row||(i%2?'front':'back'),j=it.at!=null?+it.at:i,d=row==='back'?-95:95,p=pos(j);p=[p[0]+d,p[1]+d,0];
  var pt=isoPart(it.part||'filter',p[0],p[1],0,sc*0.9,{id:'o'+i,cls:K+'__ghost',r:it.r,h:it.h});
  var a=line(j),q=[p[0],p[1]+(row==='back'?20:-20),14];
  var tee=isoPipe([a,[q[0],a[1],14],q],{r:3,flow:false,caps:'end',cls:K+'__tee',id:'tee'+i});
  if(row==='back')back+=tee+pt;else front+=tee+pt;
  marks.push({at:pt.at,i:i})});
 var inner=back+trunk+main+isoArrow(line(j0+0.25),[1,-1,0],{size:8})+isoArrow(line(j1-0.1),[1,-1,0],{size:8})+front;
 var Wd=1180,Hd=500,org=[150,310];
 var svg=isoSvg(Wd,Hd,inner,'aq-iso--navy '+K+'__svg',{origin:org,under:isoSheet(Wd,Hd,{grid:'iso',gridStep:28,title:{w:220,h:40},m:10})});
 var pc=function(p,dy){var q=isoPct([p[0],p[1]+(dy||0)],Wd,Hd,org);return 'left:'+q.left+';top:'+q.top};
 var lab=labels.map(function(l){return '<span class="'+K+'__label" aria-hidden="true" style="'+pc(l.at,l.dy!=null?+l.dy:-14)+'">'+tx(l.t||'')+'</span>'}).join('');
 var mk=marks.map(function(m){return '<span class="'+K+'__mark" data-i="'+m.i+'" aria-hidden="true" style="'+pc(m.at,-22)+'">'+(m.i<9?'0':'')+(m.i+1)+'</span>'}).join('');
 var cards=I.map(function(it,i){return fli('<li class="'+K+'__card" data-i="'+i+'">',b,i)
  +'<p class="'+K+'__no" aria-hidden="true"><span>'+(i<9?'0':'')+(i+1)+'</span><span class="'+K+'__opt">Option</span></p>'
  +mini(it)+'<h3 class="'+K+'__t">'+tx(it.t)+'</h3>'+(it.d?'<p class="'+K+'__d">'+tx(it.d)+'</p>':'')+'</li>'}).join('');
 var fig='<div class="'+K+'__fig aq-iso-figure aq-iso-figure--navy">'+svg+lab+mk+'</div>';
 return sec(H+'<div class="'+K+'" style="--n:'+I.length+'">'+fig+wFold(b,I.length,'<ol class="'+K+'__cards" role="list">'+cards+'</ol>',b.fold_noun)+'</div>','aq-band--navy '+K+'-sec')};
if(typeof document!=='undefined')['mouseover','mouseout'].forEach(function(ev){document.addEventListener(ev,function(x){
 var c=x.target.closest&&x.target.closest('.'+K+'__card');if(!c)return;var w=c.closest('.'+K),i=c.getAttribute('data-i'),on=ev==='mouseover';
 var part=w&&w.querySelector('[data-iso-id="o'+i+'"]'),tee=w&&w.querySelector('[data-iso-id="tee'+i+'"]'),mk=w&&w.querySelector('.'+K+'__mark[data-i="'+i+'"]');
 [part,tee].forEach(function(p){if(p)p.classList.toggle('is-lit',on)});if(mk)mk.classList.toggle('is-on',on);c.classList.toggle('is-on',on)})});
})();
