/* Look "loop-circuit" -> LoopCircuit (design-system/components/LoopCircuit): how a storage and distribution loop works,
   drawn as the loop's own control screen (an HMI mimic on a dark navy band). The tank is shown in section: vent filter
   on the head, spray ball wetting the head space, the water level inside. Generation feeds it from the left; the loop
   leaves at the bottom through the pump and heat exchanger, runs out and up, back along the top past the points of use
   (zero-static valves, each with its drop) and the return sensors (instrument bubbles CE, TE, FE and a dashed AE for
   TOC), and comes home through the spray ball. Each stage has a numbered tag on the screen; the stages are listed
   under the screen in the same order, and pointing at one lights its tag and equipment.
   Phones: the screen gives way to a vertical circuit: the stages down a flow rail with their line glyphs, a return
   line running back up to the tank.
   Fields (a diagram block): h, stages (or items) [{t, d, spot | icon, node}]. node: which part of the mimic the stage
   is: gen, tank, pump, hx, pou, sensors, spray (default by position in that order). Optional block field screen:
   the screen's title (default the page's nav label). */
(function(){
var NODE=['gen','tank','pump','hx','pou','sensors','spray'];
/* tag centre, leader end (or none) and the point on the water path where the stage sits */
var TAG={gen:{c:[64,30],at:[0,60]},tank:{c:[340,320],l:[284,320],at:[200,440]},pump:{c:[360,540],l:[360,510],at:[360,480]},
 hx:{c:[540,540],l:[540,512],at:[540,480]},pou:{c:[820,206],l:[820,180],at:[820,110]},sensors:{c:[470,18],l:[470,30],at:[470,110]},
 spray:{c:[64,194],l:[190,194],at:[200,194]}};
var LOOP='M200 440V480H1100A40 40 0 0 0 1140 440V150A40 40 0 0 0 1100 110H240V178H200V186',FEED='M0 60H160V156';
var K='aq-loop-circuit';function P(d,c,x){return '<path class="'+K+'__'+c+'"'+(x||'')+' d="'+d+'"/>'}
function mimic(nodes,nums){
 var g='';
 /* pipes, then the water line over them; equipment is filled, so it sits over both */
 g+=P(FEED,'pipe')+P('M200 440V480H1100A40 40 0 0 0 1140 440V150A40 40 0 0 0 1100 110H240V156','pipe');
 g+=P(FEED,'flow aq-loop-circuit__flow--feed')+P(LOOP,'flow aq-loop-circuit__flow--loop');
 [[700,480,'r'],[940,480,'r'],[1140,300,'u'],[1060,110,'l'],[600,110,'l'],[300,110,'l']].forEach(function(a){var x=a[0],y=a[1],d=a[2]==='r'?'M'+(x-5)+' '+(y-6)+'l8 6l-8 6':a[2]==='l'?'M'+(x+5)+' '+(y-6)+'l-8 6l8 6':'M'+(x-6)+' '+(y+5)+'l6 -8l6 8';g+=P(d,'chev')});
 /* tank in section */
 var tank='<g class="aq-loop-circuit__node" data-node="tank">'
  +P('M120 200C120 162 160 150 200 150C240 150 280 162 280 200V400C280 430 240 440 200 440C160 440 120 430 120 400Z','eq')
  +'<g class="aq-loop-circuit__water">'+P('M124 260H276','level');
 for(var y=276;y<=420;y+=16)tank+=P('M'+(y>396?150:126)+' '+y+'H'+(y>396?250:274),'hatch');
 tank+='</g>'+P('M160 156V140M152 140H168M240 156V140M232 140H248','ln')+'</g>';
 var vent=P('M200 150V128','ln')+P('M186 84H214V128H186Z','eq')+P('M192 90V122M196 90V122M200 90V122M204 90V122M208 90V122','thin')+P('M200 80V64M195 69L200 64L205 69','thin');
 var spray='<g class="aq-loop-circuit__node" data-node="spray">'+P('M240 156V178H200V186','hid')
  +'<g class="aq-loop-circuit__spray">'+[[128,236],[136,262],[160,252],[200,246],[240,252],[264,262],[272,236],[150,206],[250,206]].map(function(q){return P('M200 194L'+q[0]+' '+q[1],'jet')}).join('')+'</g>'
  +'<circle class="aq-loop-circuit__eq" cx="200" cy="194" r="8"/></g>';
 var pump='<g class="aq-loop-circuit__node" data-node="pump"><circle class="aq-loop-circuit__eq" cx="360" cy="480" r="26"/>'+P('M360 454H386','ln')+P('M348 466L376 480L348 494Z','ln')+'</g>';
 var hx='<g class="aq-loop-circuit__node" data-node="hx">'+P('M540 454V438M540 506V522','thin')+'<circle class="aq-loop-circuit__eq" cx="540" cy="480" r="26"/>'+P('M514 480L522 470L532 490L542 470L552 490L560 470L566 480','ln')+'</g>';
 var pou='<g class="aq-loop-circuit__node" data-node="pou">'+P('M640 180H1000M640 174V186M1000 174V186','thin')+[1000,880,760,640].map(function(x){
  return P('M'+(x-8)+' 118H'+(x+8)+'L'+(x-8)+' 136H'+(x+8)+'Z','eq')+P('M'+x+' 136V150','ln')+P('M'+x+' 158q-3 5 0 8q3-3 0-8','drop')}).join('')+'</g>';
 var sens='<g class="aq-loop-circuit__node" data-node="sensors">'+P('M380 30H560M380 24V36M560 24V36','thin')+[['CE',560],['TE',500],['FE',440],['AE',380]].map(function(q,i){
  return P('M'+q[1]+' 74V110','ln')+'<circle class="aq-loop-circuit__eq'+(i===3?' is-opt':'')+'" cx="'+q[1]+'" cy="58" r="16"/><text class="aq-loop-circuit__tx" x="'+q[1]+'" y="62">'+q[0]+'</text>'}).join('')+'</g>';
 var gen='<g class="aq-loop-circuit__node" data-node="gen">'+P('M0 52V68','thin')+'</g>';
 g+=gen+tank+vent+spray+pump+hx+pou+sens;
 /* stage tags: numbered boxes with a short leader to the part */
 g+=nodes.map(function(n,i){var T=TAG[n];if(!T)return '';var c=T.c;
  return '<g class="aq-loop-circuit__tag" data-node="'+n+'" data-at="'+T.at.join(',')+'">'+(T.l?P('M'+(n==='tank'?c[0]-20:n==='spray'?c[0]+20:c[0])+' '+(n==='tank'||n==='spray'?c[1]:c[1]+(T.l[1]>c[1]?11:-11))+'L'+T.l[0]+' '+T.l[1],'lead'):'')
   +'<rect x="'+(c[0]-20)+'" y="'+(c[1]-11)+'" width="40" height="22"/><text x="'+c[0]+'" y="'+(c[1]+5)+'">'+nums[i]+'</text></g>'}).join('');
 return '<svg class="aq-loop-circuit__svg" viewBox="0 0 1200 560" aria-hidden="true" focusable="false">'+g+'</svg>'}
LOOKS['loop-circuit']=function(b,H){
 var I=b.stages||b.items||[],n=I.length,pg=wp(WP),nodes=I.map(function(it,i){return it.node||NODE[i]||''}),nums=I.map(function(it,i){return (i<9?'0':'')+(i+1)});
 var head='<div class="aq-loop-circuit__bar" aria-hidden="true"><span class="aq-loop-circuit__lamp"></span><span>'+tx(b.screen||(pg&&pg.nav_label)||'')+'</span><span class="aq-loop-circuit__count">'+n+' '+e(b.fold_noun||'stages')+'</span></div>';
 var screen='<div class="aq-loop-circuit__screen">'+head+'<div class="aq-loop-circuit__mimic">'+mimic(nodes,nums)+'</div></div>';
 var list=I.map(function(it,i){var g=wSpot(it.spot||it.icon,'','aq-spot--on-navy aq-loop-circuit__glyph');
  return '<li class="aq-loop-circuit__stage" data-node="'+e(nodes[i])+'"><span class="aq-loop-circuit__mark" aria-hidden="true">'+g+'</span>'
   +'<p class="aq-loop-circuit__no" aria-hidden="true">'+nums[i]+'</p><h3 class="aq-loop-circuit__t">'+tx(it.t)+'</h3>'+(it.d?'<p class="aq-loop-circuit__d">'+tx(it.d)+'</p>':'')+'</li>'}).join('');
 var html=sec(H+'<div class="aq-loop-circuit" style="--n:'+n+'">'+screen+'<ol class="aq-loop-circuit__stages" role="list">'+list+'</ol></div>','aq-band--navy aq-loop-circuit-sec');
 return html.replace(/^<section class="([^"]*)"/,'<section class="$1" data-theme="dark"')};
/* Pointing at a stage lights its tag and equipment on the screen (colour only) */
function hl(ev,on){var s=ev.target.closest&&ev.target.closest('.aq-loop-circuit__stage');if(!s||s.contains(ev.relatedTarget))return;var r=s.closest('.aq-loop-circuit'),id=s.getAttribute('data-node');
 [].forEach.call(r.querySelectorAll('.aq-loop-circuit__svg [data-node="'+id+'"]'),function(el){el.classList.toggle('is-hot',on)});s.classList.toggle('is-hot',on)}
document.addEventListener('mouseover',function(ev){hl(ev,true)});document.addEventListener('mouseout',function(ev){hl(ev,false)});
})();
