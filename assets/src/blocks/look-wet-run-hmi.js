/* Look "wet-run-hmi" -> WetRunHmi (design-system/components/WetRunHmi): an explainer (prose, as "explainer") set as the
   test bay's operator screen. A dark HMI panel carries a flat process mimic of the skid under test: feed, pump,
   reverse osmosis, the outlet's conductivity and TOC elements, the three-way divert valve to outlet or drain, and the
   data record under it with its trend. A two-position switch on the screen's status bar runs the same skid dry or with
   water: dry, the lines stay empty, the readouts blank and the numbered findings unlit; with water, the water runs
   the mimic, the readouts trace and each finding lights on the part where water shows it. The points are the alarm
   list beside the screen; pointing at one lights its marker on the mimic.
   Fields (a prose block): h, points [{t, d, part}] (part: "divert", "outlet" or "record", the mimic part the point
   is about; a point without one takes the next free part), modes [dry label, wet label] (the switch's two words,
   default "Dry", "Water"). at and figure are the fallback renderer's and are ignored here.
   Phones: the screen first, the alarm list under it; the mimic keeps its HTML markers and drops its drawing labels. */
var WRH_AT={divert:[80,43],outlet:[71.5,18.6],record:[59,60]};
function wrhMimic(){
 var P='aq-wet-run-hmi'+'__',ln=P+'ln',fl=P+'fl',eq=P+'eq',tg=P+'tag';
 function L(d,c,id){return '<path class="'+c+'" d="'+d+'"'+(id?' data-run="'+id+'"':'')+'/>'}
 function T(x,y,s,a){return '<text class="'+tg+'" x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+s+'</text>'}
 var s='';
 /* grid of the screen */
 s+='<path class="'+P+'grid" d="'+[60,120,180,240,300,360].map(function(y){return 'M0 '+y+'H800'}).join('')+'"/>';
 /* pipe runs: line first (empty pipe), water over it in the order the water reaches it */
 var runs=[['M20 140H98',1],['M142 140H200',2],['M360 140H578',3],['M622 140H780',4],['M600 162V300',5]];
 runs.forEach(function(r){s+=L(r[0],ln)});
 /* pump */
 s+='<circle class="'+eq+'" cx="120" cy="140" r="22"/>'+L('M106 123L142 140L106 157',P+'thin')+T(120,190,'PUMP','middle');
 /* RO */
 s+='<rect class="'+eq+'" x="200" y="108" width="160" height="64"/>'+L('M200 172L360 108',P+'thin')+T(280,196,'RO','middle');
 /* outlet elements: conductivity and TOC bubbles on stems */
 [[440,'COND'],[516,'TOC']].forEach(function(b){s+=L('M'+b[0]+' 140V102',P+'thin')+'<circle class="'+eq+'" cx="'+b[0]+'" cy="78" r="24"/>'+T(b[0],83,b[1],'middle')});
 /* three-way divert valve: two triangles on the run, one down to drain, actuator on top */
 s+='<path class="'+eq+'" d="M578 128L600 140L578 152Z M622 128L600 140L622 152Z M588 162L600 140L612 162Z"/>'+L('M600 140V116M590 116H610',P+'thin');
 s+=T(780,128,'OUTLET','end')+L('M770 134L780 140L770 146',P+'thin');
 s+=L('M584 300H616M590 308H610M596 316H604',P+'thin')+T(628,312,'DRAIN');
 runs.forEach(function(r){s+=L(r[0],fl,r[1])});
 /* readouts beside the elements */
 [440,516].forEach(function(x,i){s+='<rect class="'+P+'rd" x="'+(x-20)+'" y="34" width="40" height="6"/>'
  +'<rect class="'+P+'rdv" x="'+(x-20)+'" y="34" width="'+(i?22:30)+'" height="6"/>'});
 /* the record: a trend window with three log lines */
 s+='<rect class="'+eq+'" x="40" y="252" width="420" height="150"/>'+L('M40 276H460',P+'thin')+T(52,269,'RECORD');
 s+=L('M60 372H300M60 338H300M60 304H300',P+'grid2');
 s+='<polyline class="'+P+'trend" points="60,352 84,348 108,350 132,346 156,349 180,345 204,347 228,344 252,346 276,343 300,345"/>';
 s+='<polyline class="'+P+'flat" points="60,372 300,372"/>';
 s+=L('M326 300H440M326 322H420M326 344H436M326 366H410',P+'log');
 s+=L('M250 252V200H600V162',P+'sig');
 return '<svg class="'+P+'svg" viewBox="0 0 800 420" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet">'+s+'</svg>'}
LOOKS['wet-run-hmi']=function(b,H){var Pt=b.points||[],M=b.modes||['Dry','Water'],used={},free=['divert','outlet','record'];
 var parts=Pt.map(function(p){var k=WRH_AT[p.part]?p.part:'';if(!k||used[k])k=free.filter(function(f){return !used[f]})[0]||'record';used[k]=1;return k});
 var marks=Pt.map(function(p,i){var a=WRH_AT[parts[i]];return '<span class="aq-wet-run-hmi__mk" data-part="'+parts[i]+'" style="left:'+a[0]+'%;top:'+a[1]+'%" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span>'}).join('');
 var list=Pt.map(function(p,i){return '<li class="aq-wet-run-hmi__pt" data-part="'+parts[i]+'" tabindex="0">'
  +'<span class="aq-wet-run-hmi__n" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span>'
  +'<h3 class="aq-wet-run-hmi__t">'+tx(p.t)+'</h3>'+(p.d?'<p class="aq-wet-run-hmi__d">'+tx(p.d)+'</p>':'')+'</li>'}).join('');
 var sw='<div class="aq-wet-run-hmi__switch" role="group" aria-label="'+e(M[0]+' / '+M[1])+'">'
  +'<button type="button" class="aq-wet-run-hmi__mode" data-wrh-mode="dry" aria-pressed="false">'+tx(M[0])+'</button>'
  +'<button type="button" class="aq-wet-run-hmi__mode" data-wrh-mode="wet" aria-pressed="true">'+tx(M[1])+'</button></div>';
 var screen='<div class="aq-wet-run-hmi__screen is-wet">'
  +'<div class="aq-wet-run-hmi__bar"><span class="aq-wet-run-hmi__lamp" aria-hidden="true"></span>'+sw+'</div>'
  +'<div class="aq-wet-run-hmi__mimic">'+wrhMimic()+marks+'</div></div>';
 return '<section class="aq-section aq-wet-run-hmi-sec" data-theme="dark"><div class="aq-in"><div class="aq-wet-run-hmi">'
  +'<div class="aq-wet-run-hmi__side">'+H+'<ol class="aq-wet-run-hmi__list">'+list+'</ol></div>'+screen+'</div></div></section>'};
/* the switch: dry or with water (the page reads complete in the "with water" state without script) */
document.addEventListener('click',function(ev){var t=ev.target.closest&&ev.target.closest('[data-wrh-mode]');if(!t)return;
 var s=t.closest('.aq-wet-run-hmi__screen'),wet=t.getAttribute('data-wrh-mode')==='wet';if(!s)return;
 s.classList.toggle('is-wet',wet);s.classList.toggle('is-dry',!wet);
 [].forEach.call(s.querySelectorAll('[data-wrh-mode]'),function(x){x.setAttribute('aria-pressed',x===t?'true':'false')})});
