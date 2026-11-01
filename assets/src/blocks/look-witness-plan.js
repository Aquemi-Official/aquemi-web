/* Look "witness-plan" -> WitnessPlan (design-system/components/WitnessPlan): the ways to witness a FAT read off one
   plan of the test bay. A navy board shows the bay from above (walls, door, the skid with its membrane housings, the
   control panel with its door open) and a remote strip outside the wall. Each way of witnessing is a card in the list
   beside it; choosing one (press, or point at it) puts its people and equipment on the plan: you at the panel, your
   delegate at the skid, cameras with their fields of view, the remote screen, the package of raw data and video
   leaving by the door. One way is shown at a time, the first by default (complete without script).
   Fields (an options block): h, intro, items [{t, d, scene}], zones [bay label, remote label] (short drawing labels,
   aria-hidden). scene: the actors the way puts on the plan, any of "you", "delegate", "camera", "screen", "record"
   (space-separated or a list); an item without one shows the bay alone.
   Phones: the plan on top, the cards under it as a list of full-width buttons. */
function wpScene(s){return (Array.isArray(s)?s:String(s||'').split(/[\s,]+/)).filter(function(a){return /^(you|delegate|camera|screen|record)$/.test(a)})}
function wpPlan(z,on){var P='aq-witness-plan'+'__';
 function A(k,inner){return '<g class="'+P+'actor'+(on.indexOf(k)>-1?' is-on':'')+'" data-actor="'+k+'">'+inner+'</g>'}
 function T(x,y,s,a){return s?'<text class="'+P+'zone" x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+e(s)+'</text>':''}
 var s='';
 /* floor grid */
 var g='';for(var x=60;x<440;x+=30)g+='M'+x+' 30V410';for(var y=60;y<410;y+=30)g+='M30 '+y+'H440';s+='<path class="'+P+'grid" d="'+g+'"/>';
 /* walls with the door gap, the remote strip */
 s+='<path class="'+P+'wall" d="M300 410H30V30H440V410H360"/>'+'<path class="'+P+'door" d="M360 410A60 60 0 0 0 300 350"/>';
 s+='<path class="'+P+'edge" d="M480 20V420"/>'+T(44,22,z[0])+T(590,22,z[1],'end');
 /* the skid: frame, four membrane housings, pump */
 s+='<rect class="'+P+'eq" x="110" y="160" width="210" height="110"/><rect class="'+P+'thin" x="118" y="168" width="194" height="94"/>';
 [180,198,216,234].forEach(function(y){s+='<rect class="'+P+'thin" x="132" y="'+y+'" width="140" height="12" rx="6"/>'});
 s+='<circle class="'+P+'thin" cx="294" cy="246" r="12"/>';
 /* the control panel, its door open */
 s+='<rect class="'+P+'eq" x="350" y="170" width="34" height="90"/><path class="'+P+'thin" d="M384 170L410 186"/><path class="'+P+'hid" d="M384 170A30 30 0 0 1 410 186"/>';
 /* actors */
 s+=A('you','<circle class="'+P+'cone" cx="420" cy="230" r="34"/><ellipse class="'+P+'man" cx="420" cy="230" rx="8" ry="15"/><circle class="'+P+'head" cx="420" cy="230" r="6.5"/>');
 s+=A('delegate','<circle class="'+P+'cone" cx="215" cy="318" r="34"/><ellipse class="'+P+'man" cx="215" cy="318" rx="15" ry="8"/><circle class="'+P+'head" cx="215" cy="318" r="6.5"/><rect class="'+P+'badge" x="208" y="330" width="14" height="9"/>');
 s+=A('camera','<path class="'+P+'fov" d="M52 52L200 150L150 200Z"/><path class="'+P+'fov" d="M418 392L330 270L270 330Z"/>'
  +'<rect class="'+P+'cam" x="40" y="40" width="20" height="14" transform="rotate(45 50 47)"/><rect class="'+P+'cam" x="410" y="386" width="20" height="14" transform="rotate(45 420 393)"/>');
 s+=A('screen','<path class="'+P+'sig" d="M60 40C200 -10 470 40 520 120"/><rect class="'+P+'cam" x="506" y="120" width="68" height="44"/><path class="'+P+'thin" d="M540 164V176M524 178H556"/><path class="'+P+'trace" d="M514 150L528 138L540 146L552 132L566 140"/>');
 s+=A('record','<path class="'+P+'sig" d="M330 400C330 440 450 430 506 330"/><path class="'+P+'cam" d="M506 300H548L556 308H574V352H506Z"/><path class="'+P+'thin" d="M516 318H562M516 328H556M516 338H560"/>');
 return '<svg class="'+P+'svg" viewBox="0 0 600 440" aria-hidden="true" focusable="false">'+s+'</svg>'}
LOOKS['witness-plan']=function(b,H){var I=b.items||[],Z=b.zones||['',''],sc=I.map(function(it){return wpScene(it.scene)});
 var list=I.map(function(it,i){return '<li><button type="button" class="aq-witness-plan__opt" data-scene="'+e(sc[i].join(' '))+'" aria-pressed="'+(i?'false':'true')+'">'
  +'<span class="aq-witness-plan__n" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span>'
  +'<span class="aq-witness-plan__t">'+tx(it.t)+'</span>'+(it.d?'<span class="aq-witness-plan__d">'+tx(it.d)+'</span>':'')+'</button></li>'}).join('');
 return sec('<div class="aq-witness-plan">'+'<div class="aq-witness-plan__side">'+H+'<ol class="aq-witness-plan__list">'+list+'</ol></div>'
  +'<div class="aq-witness-plan__board">'+wpPlan(Z,sc[0]||[])
  +(I[0]?'<p class="aq-witness-plan__now" aria-hidden="true"><span class="aq-witness-plan__now-n">01</span><span class="aq-witness-plan__now-t">'+tx(I[0].t)+'</span></p>':'')+'</div></div>','aq-witness-plan-sec')};
/* choose a way: put its actors on the plan (press pins it; pointing previews it, leaving restores the pinned one) */
(function(){function show(w,sc,o){[].forEach.call(w.querySelectorAll('[data-actor]'),function(a){a.classList.toggle('is-on',(' '+sc+' ').indexOf(' '+a.getAttribute('data-actor')+' ')>-1)});
  /* the board's caption names the way on show */
  var c=w.querySelector('.aq-witness-plan__now'),n=o&&o.querySelector('.aq-witness-plan__n'),t=o&&o.querySelector('.aq-witness-plan__t');
  if(c&&n&&t){c.querySelector('.aq-witness-plan__now-n').textContent=n.textContent;c.querySelector('.aq-witness-plan__now-t').innerHTML=t.innerHTML}}
 document.addEventListener('click',function(ev){var t=ev.target.closest&&ev.target.closest('.aq-witness-plan__opt');if(!t)return;var w=t.closest('.aq-witness-plan');
  [].forEach.call(w.querySelectorAll('.aq-witness-plan__opt'),function(o){o.setAttribute('aria-pressed',o===t?'true':'false')});show(w,t.getAttribute('data-scene'),t)});
 document.addEventListener('pointerover',function(ev){var t=ev.target.closest&&ev.target.closest('.aq-witness-plan__opt');if(!t||ev.pointerType==='touch')return;show(t.closest('.aq-witness-plan'),t.getAttribute('data-scene'),t)});
 document.addEventListener('pointerout',function(ev){var t=ev.target.closest&&ev.target.closest('.aq-witness-plan__list');if(!t||(ev.relatedTarget&&t.contains(ev.relatedTarget)))return;
  var w=t.closest('.aq-witness-plan'),p=w.querySelector('.aq-witness-plan__opt[aria-pressed="true"]');show(w,p?p.getAttribute('data-scene'):'',p)})})();
