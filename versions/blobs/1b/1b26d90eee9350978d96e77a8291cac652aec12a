/* Look "signal-dial" -> SignalDial (design-system/components/SignalDial): a spec block of signals as the instrument
   schedule (the real table, left) beside one multi-channel transmitter dial (right). Every row is a channel: a stop
   on the dial's bezel numbered like the row. The bezel turns to bring the chosen channel under the fixed index and the
   face reads that channel out: the channel number large and light, the signal's name, a limit line, the design value
   under it and the basis on an outlined tag. Choosing a row (hover, click, focus) turns the dial to it; the dial is
   also a slider (drag, arrow keys, Home, End). The readout copies the chosen row's own cells, so no copy lives here.
   Concept: research/pass9b/concepts/sys-monitoring.2.png (signals table beside a tick-dial readout).
   Fields: h, caption (eyebrow, as SpecTable prints it), cols [signal, value, basis], rows [{p, v, m, link,
   link_label, intent}], note, fold, fold_noun. Desktop shows every row; the fold applies on phones.
   Phones: the dial first (smaller), the rows stacked under it. Without JS: channel 01 is shown, the table is whole. */
var SD_STEP=24;
function sdDial(n){var C=200,s='',t,a,r1,r2,cls;
 /* the turning bezel: a tick every 3 degrees, a stop every 24 degrees from 12 o'clock for each channel */
 for(t=0;t<120;t++){a=t*3;var st=t%8===0&&t/8<n;r1=192;r2=st?172:t%4===0?182:186;cls=st?'aq-signal-dial__tk aq-signal-dial__tk--stop':t%4===0?'aq-signal-dial__tk aq-signal-dial__tk--mid':'aq-signal-dial__tk';
  var rad=(a-90)*Math.PI/180,c=Math.cos(rad),si=Math.sin(rad);
  s+='<path class="'+cls+'"'+(st?' data-sd="'+(t/8)+'"':'')+' d="M'+(C+c*r1).toFixed(1)+' '+(C+si*r1).toFixed(1)+'L'+(C+c*r2).toFixed(1)+' '+(C+si*r2).toFixed(1)+'"/>'}
 for(var i=0;i<n;i++){a=(i*SD_STEP-90)*Math.PI/180;s+='<text class="aq-signal-dial__sn" data-sd="'+i+'" x="'+(C+Math.cos(a)*158).toFixed(1)+'" y="'+(C+Math.sin(a)*158+4).toFixed(1)+'" transform="rotate('+(i*SD_STEP)+' '+(C+Math.cos(a)*158).toFixed(1)+' '+(C+Math.sin(a)*158).toFixed(1)+')">'+(i<9?'0':'')+(i+1)+'</text>'}
 /* the fixed face: inner scale, a fine 120-step ring, the index at 12 o'clock */
 var f='';for(t=0;t<60;t++){a=(t*6-90)*Math.PI/180;var rr=t%5===0?128:132;f+='M'+(C+Math.cos(a)*138).toFixed(1)+' '+(C+Math.sin(a)*138).toFixed(1)+'L'+(C+Math.cos(a)*rr).toFixed(1)+' '+(C+Math.sin(a)*rr).toFixed(1)}
 return '<svg class="aq-signal-dial__svg" viewBox="0 0 400 400" aria-hidden="true" focusable="false">'
  +'<circle class="aq-signal-dial__rim" cx="200" cy="200" r="197"/><circle class="aq-signal-dial__rim2" cx="200" cy="200" r="146"/>'
  +'<g class="aq-signal-dial__ring">'+s+'</g>'
  +'<path class="aq-signal-dial__fine" d="'+f+'"/>'
  +'<path class="aq-signal-dial__index" d="M200 0V30M194 0H206L200 9Z"/></svg>'}
LOOKS['signal-dial']=function(b,H){
 var R=b.rows||[],C=b.cols||['Signal','Design value','Basis'],n=R.length;if(!n)return BLOCKS.spec(b,H);
 if(b.caption&&!b.eyebrow)H=wSecHead({h:b.h,intro:b.intro,eyebrow:b.caption});
 var pad=function(i){return (i<9?'0':'')+(i+1)};
 var rows=R.map(function(r,i){
  var go=r.link&&wp(r.link)?' <span class="aq-signal-dial__go">'+wlink(r.link,r.link_label||'More',r.intent)+'</span>':'';
  return fli('<tr class="aq-signal-dial__row'+(i?'':' is-on')+'" data-sd="'+i+'"><th scope="row"><button type="button" class="aq-signal-dial__pick" data-sd="'+i+'" aria-pressed="'+(i?'false':'true')+'">'
   +'<span class="aq-signal-dial__n" aria-hidden="true">'+pad(i)+'</span><span class="aq-signal-dial__p">'+tx(r.p)+'</span></button></th>'
   +'<td class="aq-signal-dial__v">'+tx(r.v||'')+'</td><td class="aq-signal-dial__m">'+(r.m?tx(r.m):'')+go+'</td></tr>',b,i)}).join('');
 var r0=R[0];
 var read='<div class="aq-signal-dial__read" aria-hidden="true"><span class="aq-signal-dial__ch">CH</span>'
  +'<span class="aq-signal-dial__num"><span class="aq-signal-dial__digits">'+pad(0)+'</span><span class="aq-signal-dial__of">/ '+pad(n-1)+'</span></span>'
  +'<span class="aq-signal-dial__name">'+tx(r0.p)+'</span><span class="aq-signal-dial__lim"></span>'
  +'<span class="aq-signal-dial__val">'+tx(r0.v||'')+'</span><span class="aq-signal-dial__tag"'+(r0.m?'':' hidden')+'>'+(r0.m?tx(r0.m):'')+'</span></div>';
 var dial='<div class="aq-signal-dial__dial" role="slider" tabindex="0" aria-label="Signal channel" aria-valuemin="1" aria-valuemax="'+n+'" aria-valuenow="1" aria-valuetext="'+e(pad(0)+' '+r0.p)+'" style="--sd-a:0">'
  +sdDial(n)+read+'</div>';
 var inner='<div class="aq-signal-dial" data-n="'+n+'" data-step="'+SD_STEP+'"><div class="aq-signal-dial__fig">'+dial+'<p class="aq-signal-dial__hint" aria-hidden="true">Turn the dial or pick a row</p></div>'
  +'<table class="aq-signal-dial__table"><thead><tr><th scope="col">'+tx(C[0]||'')+'</th><th scope="col">'+tx(C[1]||'')+'</th><th scope="col">'+tx(C[2]||'')+'</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
 return sec(H+wFold(b,n,inner,b.fold_noun||'signals')+(b.note?'<p class="aq-signal-dial__note">'+tx(b.note)+'</p>':''),'aq-signal-dial-sec')};
/* The dial's behaviour (works without GSAP and under reduced motion; CSS does the turning, and stands still under
   reduced motion). Ported from Subframe Motion "Exposure dial control" (camera-wheel), MIT, (c) 2026 Subframe:
   a role=slider that follows a horizontal drag (54 px a step, the example's scale), snaps to the nearest stop on
   release, and takes Arrow keys, Home and End; the readout swaps like Subframe's "Stock price ticker" (quote-tick):
   the new figure rises 8 px (or drops, turning back) from 0.2 opacity in 0.22 s. */
(function(){
 if(typeof document==='undefined')return;
 var pad=function(i){return (i<9?'0':'')+(i+1)};
 function cell(tr,sel){var c=tr&&tr.querySelector(sel);return c?c.innerHTML:''}
 function set(root,i,o){o=o||{};var n=+root.getAttribute('data-n')||1,st=+root.getAttribute('data-step')||24;i=Math.max(0,Math.min(n-1,i));
  var dial=root.querySelector('.aq-signal-dial__dial'),prev=+(root.getAttribute('data-on')||0);
  if(!o.free)dial.style.setProperty('--sd-a',(-i*st).toFixed(2));
  if(i===prev&&!o.force)return;root.setAttribute('data-on',i);
  var tr=root.querySelector('tr[data-sd="'+i+'"]');
  [].forEach.call(root.querySelectorAll('[data-sd]'),function(el){var on=+el.getAttribute('data-sd')===i;el.classList.toggle('is-on',on);if(el.classList.contains('aq-signal-dial__pick'))el.setAttribute('aria-pressed',on?'true':'false')});
  var rd=root.querySelector('.aq-signal-dial__read'),q=function(s){return rd.querySelector(s)};
  q('.aq-signal-dial__digits').textContent=pad(i);
  q('.aq-signal-dial__name').innerHTML=cell(tr,'.aq-signal-dial__p');
  q('.aq-signal-dial__val').innerHTML=cell(tr,'.aq-signal-dial__v');
  var m=tr&&tr.querySelector('.aq-signal-dial__m'),mt=m?m.cloneNode(true):null;if(mt)[].forEach.call(mt.querySelectorAll('.aq-signal-dial__go'),function(g){g.remove()});
  var tag=q('.aq-signal-dial__tag');tag.innerHTML=mt?mt.innerHTML.trim():'';tag.hidden=!tag.innerHTML;
  dial.setAttribute('aria-valuenow',i+1);dial.setAttribute('aria-valuetext',pad(i)+' '+(tr?tr.querySelector('.aq-signal-dial__p').textContent:''));
  rd.style.setProperty('--sd-dir',i>prev?'8px':'-8px');rd.classList.remove('is-tick');void rd.offsetWidth;rd.classList.add('is-tick')}
 function rootOf(t){return t&&t.closest&&t.closest('.aq-signal-dial')}
 var drag=null;
 document.addEventListener('click',function(ev){var p=ev.target.closest&&ev.target.closest('.aq-signal-dial__pick');if(p)set(rootOf(p),+p.getAttribute('data-sd'))});
 document.addEventListener('focusin',function(ev){var p=ev.target.closest&&ev.target.closest('.aq-signal-dial__pick');if(p)set(rootOf(p),+p.getAttribute('data-sd'))});
 document.addEventListener('mouseover',function(ev){if(drag)return;var r=ev.target.closest&&ev.target.closest('.aq-signal-dial__row');if(r&&!(ev.relatedTarget&&r.contains(ev.relatedTarget)))set(rootOf(r),+r.getAttribute('data-sd'))});
 document.addEventListener('keydown',function(ev){var d=ev.target.closest&&ev.target.closest('.aq-signal-dial__dial');if(!d)return;
  var root=rootOf(d),n=+root.getAttribute('data-n'),i=+(root.getAttribute('data-on')||0),k=ev.key;
  if(['ArrowLeft','ArrowRight','ArrowDown','ArrowUp','Home','End'].indexOf(k)<0)return;ev.preventDefault();
  set(root,k==='Home'?0:k==='End'?n-1:i+(k==='ArrowRight'||k==='ArrowUp'?1:-1))});
 document.addEventListener('pointerdown',function(ev){var d=ev.target.closest&&ev.target.closest('.aq-signal-dial__dial');if(!d||ev.button!==0||drag)return;
  ev.preventDefault();d.focus({preventScroll:true});var root=rootOf(d);
  drag={d:d,root:root,x:ev.clientX,v:+(root.getAttribute('data-on')||0),id:ev.pointerId,n:+root.getAttribute('data-n'),st:+root.getAttribute('data-step')};
  d.classList.add('is-drag');try{d.setPointerCapture(ev.pointerId)}catch(x){}});
 document.addEventListener('pointermove',function(ev){if(!drag||ev.pointerId!==drag.id)return;
  var sc=drag.d.offsetWidth/(drag.d.getBoundingClientRect().width||1),v=Math.max(0,Math.min(drag.n-1,drag.v-(ev.clientX-drag.x)*sc/54));
  drag.d.style.setProperty('--sd-a',(-v*drag.st).toFixed(2));set(drag.root,Math.round(v),{free:true})});
 function up(ev){if(!drag||ev.pointerId!==drag.id)return;var r=drag.root;drag.d.classList.remove('is-drag');drag=null;set(r,+(r.getAttribute('data-on')||0),{force:true})}
 document.addEventListener('pointerup',up);document.addEventListener('pointercancel',up);
})();
