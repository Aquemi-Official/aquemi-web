/* ProcessDiagram: a treatment train as an interactive piping flow in a Plate (also drawn by WaterPath).
   Desktop: one row of stations (Spot vignette in a hairline box, index, name) joined by a double-hairline
   flow pipe with arrows; the stations are toggle buttons and the selected one tints the pipe up to it and opens
   its detail in the panel under the row. Phone: one vertical pipe, the selected detail opens inline under its station.
   The markup is complete without script: every detail is visible until the page script marks the figure is-live. */
/* Stage icon by keyword, when a stage names no spot or icon: the first key whose pattern matches the stage name. */
var DICON={drop:'droplet',hx:'heat-exchanger',ro:'ro-membrane',edi:'edi',uv:'uv',softener:'softener',carbon:'carbon-filter',filter:'carbon-filter',
 column:'still',pump:'pump',steam:'pure-steam',loop:'loop',tank:'tank',instrument:'conductivity',plc:'cpu',network:'network',screen:'monitor'};
var DKEYS=[['drop',/^(from|to)\b/],['hx',/heat|exchanger|preheat|condens|cooler/],['ro',/\bro\b|reverse osmosis|membrane|ultrafiltr|\buf\b|generation/],['edi',/\bedi\b|electrodeion/],['uv',/\buv\b|ultraviolet/],
 ['softener',/soften/],['carbon',/carbon|bisulfite|dechlor/],['filter',/filt|pretreat|multimedia|cartridge/],['column',/still|column|evaporat|separat|degas|distil/],
 ['pump',/pump/],['steam',/steam|sterili|\bsip\b|header/],['loop',/loop|distribut|point|return|outlet/],['tank',/tank|storage|vessel/],
 ['instrument',/instrument|analy|\btoc\b|conductiv|sensor|monitor/],['plc',/\bplcs?\b|controller|\bi\/o\b/],['network',/network|server|cloud|ethernet/],['screen',/hmi|scada|control|screen|display/],['drop',/feed|water|wfi|\bpw\b/]];
function dIcon(t){var s=String(t).toLowerCase();for(var i=0;i<DKEYS.length;i++)if(DKEYS[i][1].test(s))return DICON[DKEYS[i][0]];return 'pid'}
var FLN=0;
/* wFlow(items, o): items [{t, d, tag, link, spot, icon}] in flow order. o: cls (extra root class), from / to (pipe-end
   labels), base (what spans every stage), icon(item) (fallback icon name), block (plate title block cells). */
function wFlow(I,o){o=o||{};var n=I.length,id='fl'+(++FLN),num=function(i){return (i<9?'0':'')+(i+1)};
 var st='',k=n<10?'0'+n:''+n;
 I.forEach(function(x,i){var sid=id+'-s'+i,did=id+'-d'+i,on=i===0,
   fig=wSpot(isVig(x.spot)?x.spot:isVig(x.icon)?x.icon:(o.icon&&o.icon(x))||dIcon(x.t),'s','aq-diagram__spot');
  st+='<button type="button" class="aq-diagram__st'+(i===n-1?' is-last':'')+'" id="'+sid+'" aria-pressed="'+on+'" aria-controls="'+did+'" style="--i:'+i+'">'
   +'<span class="aq-diagram__run" aria-hidden="true"><span class="aq-diagram__fill"></span></span>'
   +'<span class="aq-diagram__fig" aria-hidden="true">'+fig+'</span>'
   +'<span class="aq-diagram__n">'+num(i)+'</span><span class="aq-diagram__t">'+tx(x.t)+'</span></button>';
  var io=(i?'<span><b>In</b> '+tx(I[i-1].t)+'</span>':o.from?'<span><b>In</b> '+tx(o.from)+'</span>':'')+(i<n-1?'<span><b>Out</b> '+tx(I[i+1].t)+'</span>':o.to?'<span><b>Out</b> '+tx(o.to)+'</span>':'');
  st+='<div class="aq-diagram__d" id="'+did+'" role="region" aria-labelledby="'+sid+'" style="--i:'+i+'">'
   +'<span class="aq-diagram__dn" aria-hidden="true">'+num(i)+'<small>/'+k+'</small></span>'
   +'<div class="aq-diagram__db"><p class="aq-diagram__dt">'+tx(x.t)+'</p>'
   +(x.d?'<p class="aq-diagram__dd">'+tx(x.d)+'</p>':'')
   +(x.tag||(x.link&&wp(x.link))?'<p class="aq-diagram__dx">'+(x.tag?'<span class="aq-tag">'+e(x.tag)+'</span>':'')+(x.link&&wp(x.link)?wlink(x.link):'')+'</p>':'')
   +'</div>'+(io?'<p class="aq-diagram__io">'+io+'</p>':'')+'</div>'});
 var ends=o.from||o.to?'<p class="aq-diagram__ends"><span>'+e(o.from||'')+'</span><span>'+e(o.to||'')+'</span></p>':'';
 var base=o.base?'<p class="aq-diagram__base"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0M3 12h18"/></svg><span>'+e(o.base)+'</span></p>':'';
 return wPlate('<div class="aq-diagram'+(o.base?' aq-diagram--base':'')+(o.cls?' '+o.cls:'')+'" style="--n:'+n+'">'+ends
  +'<div class="aq-diagram__line" role="group" aria-label="'+e(n+' stages in flow order; choose one to see its detail')+'">'+st+'</div>'+base+'</div>',{cls:'aq-diagram__plate',block:o.block})}
function wDiagram(b){var I=(b.stages||[]).map(function(s){return typeof s==='string'?{t:s}:s});
 return wFlow(I,{base:b.base,from:b.from,to:b.to,block:['Process flow',I.length+' stages']})}
/* Selecting a stage: one pressed station; its detail shown, the rest hidden; its pipe run fills (GSAP when loaded, < 1 s, once). */
function flSel(w,b,anim){[].forEach.call(w.querySelectorAll('.aq-diagram__st'),function(x){var on=x===b,d=document.getElementById(x.getAttribute('aria-controls'));
  x.setAttribute('aria-pressed',on?'true':'false');if(d)d.hidden=!on});
 var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(!anim||reduce||!window.gsap)return;
 /* One short timeline (< 1 s): the water runs on from the station that was selected to the new one (each run between
    fills in turn; going back upstream only the new run fills), the new station settles, then its detail rises. */
 var L=[].slice.call(w.querySelectorAll('.aq-diagram__st')),j=L.indexOf(b),i0=anim.from==null?j:anim.from,a=i0<j?i0+1:j,d=document.getElementById(b.getAttribute('aria-controls')),
  F=L.slice(a,j+1).map(function(x){return x.querySelector('.aq-diagram__fill')}).filter(Boolean),v=F[0]&&F[0].offsetHeight>F[0].offsetWidth,each=Math.min(0.3,0.6/F.length);
 var tl=gsap.timeline({defaults:{ease:'none'}});
 if(w._aqTl)w._aqTl.progress(1);w._aqTl=tl;[].forEach.call(w.querySelectorAll('.is-flowing'),function(x){x.classList.remove('is-flowing')});
 /* runs the water passes through show it in full Flow (is-flowing) and drain behind it; the new station's run stays */
 F.forEach(function(f,k){var last=k===F.length-1,st=f.closest('.aq-diagram__st');
  if(!last)st.classList.add('is-flowing');
  tl.fromTo(f,v?{scaleY:0,transformOrigin:'center top'}:{scaleX:0,transformOrigin:'left center'},{scaleX:1,scaleY:1,duration:each,clearProps:last?'transform,transformOrigin':''},k*each);
  if(!last)tl.to(f,v?{scaleY:0,transformOrigin:'center bottom',duration:each*1.5,ease:'power1.in'}:{scaleX:0,transformOrigin:'right center',duration:each*1.5,ease:'power1.in'},(k+1)*each)
   .add(function(){st.classList.remove('is-flowing');gsap.set(f,{clearProps:'transform,transformOrigin'})})});

 var t=F.length*each,fig=b.querySelector('.aq-diagram__fig'),td=Math.min(Math.max(0,t-0.15),0.3);
 if(fig)tl.fromTo(fig,{scale:0.94},{scale:1,duration:0.45,ease:'back.out(2)',clearProps:'transform'},Math.max(0,t-0.1));
 if(d){tl.fromTo(d,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:0.35,ease:'power2.out',clearProps:'opacity,visibility,transform'},td);
  var dn=d.querySelector('.aq-diagram__dn');if(dn)tl.fromTo(dn,{yPercent:35,autoAlpha:0},{yPercent:0,autoAlpha:1,duration:0.4,ease:'power3.out',clearProps:'opacity,visibility,transform'},td+0.1)}}
function flAt(w){var L=[].slice.call(w.querySelectorAll('.aq-diagram__st'));for(var i=0;i<L.length;i++)if(L[i].getAttribute('aria-pressed')==='true')return i;return null}
function flInit(){[].forEach.call(document.querySelectorAll('.aq-diagram:not(.is-live)'),function(w){w.classList.add('is-live');
 var b=w.querySelector('.aq-diagram__st[aria-pressed="true"]')||w.querySelector('.aq-diagram__st');if(b)flSel(w,b,false)})}
if(typeof document!=='undefined'&&document.addEventListener){
 document.addEventListener('click',function(ev){var b=ev.target.closest&&ev.target.closest('.aq-diagram__st');if(!b)return;var w=b.closest('.aq-diagram');
  if(b.getAttribute('aria-pressed')!=='true')flSel(w,b,{from:flAt(w)})});
 document.addEventListener('keydown',function(ev){var b=ev.target.closest&&ev.target.closest('.aq-diagram__st');if(!b)return;
  var L=[].slice.call(b.closest('.aq-diagram').querySelectorAll('.aq-diagram__st')),i=L.indexOf(b),j={ArrowRight:i+1,ArrowDown:i+1,ArrowLeft:i-1,ArrowUp:i-1,Home:0,End:L.length-1}[ev.key];
  if(j==null)return;ev.preventDefault();j=Math.max(0,Math.min(L.length-1,j));if(j!==i){L[j].focus();flSel(b.closest('.aq-diagram'),L[j],{from:flAt(b.closest('.aq-diagram'))})}});
 if(typeof MutationObserver!=='undefined'){var flQ=0;new MutationObserver(function(){if(flQ)return;flQ=1;setTimeout(function(){flQ=0;flInit()},0)}).observe(document.documentElement,{childList:true,subtree:true})}
 if(document.readyState!=='loading')setTimeout(flInit,0);else document.addEventListener('DOMContentLoaded',flInit)}
