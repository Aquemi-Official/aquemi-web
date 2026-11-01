/* Look "fidelity-ladder" -> FidelityLadder (design-system/components/FidelityLadder): design stages as one drawing
   gaining detail, on a navy blueprint band. Each stage is a sheet showing the same water package at that stage's level
   of drawing: a requirements matrix, a block route with its alternative, a P&ID, a dimensioned isometric, the frozen
   isometric under its approval stamp, and finally the spools with their joints marked for the shop. Under each sheet
   the stage's number, name and what you approve; a run with a node per stage ties them in order, a closed valve on the
   run before every hold station and a "Hold point" stamp naming who signs.
   Fields (a steps block): h, intro, items [{t, d, hold, link, sheet}]. sheet (optional): the drawing level, one of
   matrix, route, pid, iso, freeze, joints (default: that order by position). Phones: one column, the run down the left. */
LOOKS['fidelity-ladder']=(function(){
 function P(d,c){return '<path class="aq-fidelity-ladder'+'__'+(c||'ln')+'" d="'+d+'"/>'}
 function T(x,y,s,a){return '<text class="aq-fidelity-ladder__lbl" x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+e(s)+'</text>'}
 function flat(inner){return '<svg class="aq-fidelity-ladder__svg" viewBox="0 0 360 200" focusable="false" aria-hidden="true">'+inner+'</svg>'}
 /* the isometric spool every later sheet redraws: a run, two elbows and a branch */
 var SP=[[0,0,64],[160,0,64],[160,-128,64],[160,-128,128]],BR=[[80,0,64],[80,0,14]];
 function spool(extra){var o=isoPipe(SP,{r:6,flanges:'ends',caps:true})+isoPipe(BR,{r:5,flanges:'ends',caps:'end'});return isoSvg(360,200,o+(extra||''),'aq-iso--navy aq-fidelity-ladder__svg',{origin:[58,142]})}
 var SHEET={
  matrix:function(){var o='',r,c;for(r=0;r<6;r++)o+=P('M24 '+(30+r*26)+'H336','grid');o+=P('M24 30V160M150 30V160M262 30V160M336 30V160','grid');
   for(r=0;r<5;r++){o+=P('M34 '+(43+r*26)+'H'+(80+(r*37)%60),'txt')+P('M160 '+(43+r*26)+'H'+(200+(r*29)%50),'txt');
    o+=r===2?P('M290 '+(36+r*26)+'L308 '+(50+r*26)+'M308 '+(36+r*26)+'L290 '+(50+r*26),'flow'):P('M288 '+(44+r*26)+'L296 '+(50+r*26)+'L310 '+(36+r*26),'ln')}
   return flat(o+'<circle class="aq-fidelity-ladder__flow" cx="299" cy="95" r="16"/>'+P('M24 180H120','txt'))},
  route:function(){var bx=function(x,y,w,s,c){return '<rect class="aq-fidelity-ladder'+'__'+(c||'box')+'" x="'+x+'" y="'+y+'" width="'+w+'" height="34"/>'+T(x+w/2,y+21,s,'middle')},
   ar=function(x1,x2,y,c){return P('M'+x1+' '+y+'H'+x2+'M'+(x2-6)+' '+(y-4)+'L'+x2+' '+y+'L'+(x2-6)+' '+(y+4),c)};
   return flat(bx(18,46,62,'PRE')+ar(80,104,63)+bx(104,46,58,'RO')+ar(162,186,63)+bx(186,46,58,'EDI')+ar(244,268,63)+bx(268,46,74,'TANK')
    +bx(104,120,58,'RO','alt')+ar(162,186,137,'hid')+bx(186,120,58,'RO','alt')+P('M49 80V137H104','hid')+P('M244 137H305V80','hid')
    +P('M133 80V96M215 80V96','thin')+T(140,96,'Q')+T(222,96,'Q')+P('M18 172H120','txt'))},
  pid:function(){
   return flat(P('M20 60H70','flow')+'<circle class="aq-fidelity-ladder__ln" cx="88" cy="60" r="16"/>'+P('M80 46L104 60L80 74','thin')+P('M104 60H140','flow')
    +P('M140 52L156 68V52L140 68Z','ln')+P('M156 60H200','flow')+'<rect class="aq-fidelity-ladder__box" x="200" y="34" width="44" height="96" rx="0"/>'+P('M200 40Q222 26 244 40','thin')
    +P('M244 112H300V170H40V120','flow')+P('M268 104L284 120V104L268 120Z','ln')+P('M276 112V92','thin')
    +'<circle class="aq-fidelity-ladder__ln" cx="276" cy="80" r="12"/>'+P('M264 80H288','thin')+T(276,77,'CIT','middle')
    +'<circle class="aq-fidelity-ladder__ln" cx="120" cy="30" r="12"/>'+P('M120 42V60','thin')+P('M108 30H132','thin')+T(120,27,'PI','middle')
    +P('M40 120L52 132H28Z','thin')+P('M170 170V186','thin')+P('M162 186H178','thin'))},
  iso:function(){var d1=isoDim(SP[0],SP[1],{off:[0,26,0]}),d2=isoDim(SP[1],SP[2],{off:[26,0,0]}),d3=isoDim(BR[0],BR[1],{off:[0,24,0]});return spool(d1+d2+d3)},
  freeze:function(){var d1=isoDim(SP[0],SP[1],{off:[0,26,0]}),d2=isoDim(SP[1],SP[2],{off:[26,0,0]});
   var rb='<rect class="aq-fidelity-ladder__box" x="200" y="-6" width="92" height="48"/><path class="aq-fidelity-ladder__thin" d="M200 10H292M200 26H292M222 -6V42"/><path class="aq-fidelity-ladder__txt" d="M230 2H270M230 18H260"/><path class="aq-fidelity-ladder__flow" d="M206 34L211 38L218 30M230 34H276"/>';
   return spool(d1+d2+rb)},
  joints:function(){var J=[SP[1],SP[2],BR[0],[40,0,64]],o='';
   J.forEach(function(p,i){var ax=i===1?'y':i===2?'z':'x';o+='<path class="aq-iso__acc" d="'+isoRingD(p,ax,9)+'"/>';var q=isoP(p),lx=q[0]+(i===1?18:-4),ly=q[1]-(i===1?4:20);
    o+='<g class="aq-fidelity-ladder__j"><circle class="aq-fidelity-ladder__jc" cx="'+isoF(lx)+'" cy="'+isoF(ly)+'" r="10"/><text class="aq-fidelity-ladder__lbl" x="'+isoF(lx)+'" y="'+isoF(ly+3.5)+'" text-anchor="middle">J'+(i+1)+'</text></g>'});
   return spool(o)}
 };
 var ORDER=['matrix','route','pid','iso','freeze','joints'],NAME={matrix:'Matrix',route:'Route',pid:'P&ID',iso:'Isometric',freeze:'Frozen',joints:'Spools'};
 var VALVE='<svg class="aq-fidelity-ladder__valve" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 6 L21 18 L21 6 L3 18 Z"/><path d="M12 12 V3 M7 3 H17"/></svg>';
 return function(b,H){var I=b.items||[],n=I.length,cols=n<=4?n:Math.ceil(n/2);
  var li=I.map(function(it,i){var s=SHEET[it.sheet]?it.sheet:ORDER[i%ORDER.length],num=(i<9?'0':'')+(i+1),eol=(i%cols===cols-1)&&i<n-1,last=i===n-1;
   return '<li class="aq-fidelity-ladder__st'+(it.hold?' is-hold':'')+(eol?' is-eol':'')+(i%cols===0&&i>0?' is-bol':'')+(last?' is-last':'')+'" style="--i:'+i+'">'
    +'<div class="aq-fidelity-ladder__sheet" aria-hidden="true">'+SHEET[s]()+'<span class="aq-fidelity-ladder__no">Sheet '+num+'</span><span class="aq-fidelity-ladder__lvl">'+e(NAME[s])+'</span>'
     +(s==='freeze'?'<span class="aq-fidelity-ladder__frz"><span>DQ</span></span>':'')+'</div>'
    +'<span class="aq-fidelity-ladder__run" aria-hidden="true">'+(it.hold?VALVE:'')+'<span class="aq-fidelity-ladder__node"></span></span>'
    +'<div class="aq-fidelity-ladder__body"><span class="aq-fidelity-ladder__n" aria-hidden="true">'+num+'</span><h3 class="aq-fidelity-ladder__t">'+stepTitle(it)+'</h3>'
     +(it.d?'<p class="aq-fidelity-ladder__d">'+tx(it.d)+'</p>':'')
     +(it.hold?'<p class="aq-fidelity-ladder__hold"><span class="aq-fidelity-ladder__stamp"><span class="aq-fidelity-ladder__stamp-k">Hold point</span> <span>Signed by '+stepWho(it.hold)+'</span></span></p>':'')+'</div>'
    +'</li>'}).join('');
  return sec(H+'<ol class="aq-fidelity-ladder" style="--cols:'+cols+'">'+li+'</ol>','aq-band--navy aq-fidelity-ladder-sec')}
})();
