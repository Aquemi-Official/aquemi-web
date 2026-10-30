/* ProcessDiagram: a treatment train as an interactive piping flow on a drawing plate (also drawn by WaterPath).
   Desktop: one bold row of stations (Spot vignette in a framed box, number tag, name) joined by a thick double-wall
   Flow pipe with arrows; the stations are toggle buttons and the selected one fills its incoming pipe run and opens
   its detail in the panel under the row. Phone: one vertical pipe, the selected detail opens inline under its station.
   The markup is complete without script: every detail is visible until the page script marks the figure is-live. */
var DGLYPH={
 hx:'M8 18h56v20H8zM14 28l6-6 6 12 6-12 6 12 6-12 6 12 6-6M20 18v-8M52 38v8',
 ro:'M6 20h60v16H6zM6 36L66 20M2 28h4M66 28h4M20 36v8M52 36v8',
 edi:'M14 14h44v28H14zM22 14v28M30 14v28M38 14v28M46 14v28M36 14V6M36 42v8',
 uv:'M8 22h56v12H8zM20 22l4-8M36 22V12M52 22l-4-8M20 34l4 8M36 34v10M52 34l-4 8',
 softener:'M8 48V18a8 4 0 0 1 16 0v30M30 48V18a8 4 0 0 1 16 0v30M52 48V28h12v20M4 48h64M24 22h6',
 carbon:'M22 50V14a14 6 0 0 1 28 0v36zM30 26h1M41 30h1M32 36h1M42 41h1M29 44h1M36 8V2',
 filter:'M22 50V14a14 6 0 0 1 28 0v36zM22 28h28M22 36h28M22 44h28M36 8V2',
 column:'M26 52V10a10 6 0 0 1 20 0v42zM26 20h12M34 28h12M26 36h12M34 44h12M46 14h12v8',
 pump:'M22 30a14 14 0 1 0 28 0a14 14 0 1 0-28 0M36 16h26M4 30h18M26 41l-6 9h32l-6-9',
 steam:'M14 50V28h44v22zM24 22c-4-4 4-8 0-12M36 22c-4-4 4-8 0-12M48 22c-4-4 4-8 0-12',
 loop:'M14 14h44a10 10 0 0 1 0 20H14a10 10 0 0 1 0-20M24 34v12M36 34v12M48 34v12',
 tank:'M18 48V18a18 8 0 0 1 36 0v30zM10 48h52M24 32h24M36 10V4',
 instrument:'M22 24a14 14 0 1 0 28 0a14 14 0 1 0-28 0M22 24h28M36 38v12M24 50h24',
 screen:'M10 8h52v32H10zM28 50h16M36 40v10M18 30l8-10 8 6 10-12 8 8',
 plc:'M14 6h44v44H14zM14 16h44M20 22v22M28 22v22M36 22v22M44 22v22M52 22v22M20 11h4M30 11h4',
 network:'M30 10a6 6 0 1 0 12 0a6 6 0 1 0-12 0M8 46a6 6 0 1 0 12 0a6 6 0 1 0-12 0M52 46a6 6 0 1 0 12 0a6 6 0 1 0-12 0M32 26h8v8h-8zM36 16v10M32 33L19 42M40 33l13 9',
 drop:'M36 6c-10 14-16 22-16 30a16 16 0 0 0 32 0c0-8-6-16-16-30zM28 38a8 8 0 0 0 8 8',
 generic:'M12 14h48v28H12zM4 28h8M60 28h8M20 22h20M20 30h28'};
var DKEYS=[['drop',/^(from|to)\b/],['hx',/heat|exchanger|preheat|condens|cooler/],['ro',/\bro\b|reverse osmosis|membrane|ultrafiltr|\buf\b|generation/],['edi',/\bedi\b|electrodeion/],['uv',/\buv\b|ultraviolet/],
 ['softener',/soften/],['carbon',/carbon|bisulfite|dechlor/],['filter',/filt|pretreat|multimedia|cartridge/],['column',/still|column|evaporat|separat|degas|distil/],
 ['pump',/pump/],['steam',/steam|sterili|\bsip\b|header/],['loop',/loop|distribut|point|return|outlet/],['tank',/tank|storage|vessel/],
 ['instrument',/instrument|analy|\btoc\b|conductiv|sensor|monitor/],['plc',/\bplcs?\b|controller|\bi\/o\b/],['network',/network|server|cloud|ethernet/],['screen',/hmi|scada|control|screen|display/],['drop',/feed|water|wfi|\bpw\b/]];
function dGlyph(t){var s=String(t).toLowerCase();for(var i=0;i<DKEYS.length;i++)if(DKEYS[i][1].test(s))return DGLYPH[DKEYS[i][0]];return DGLYPH.generic}
function dSvg(d){return '<svg class="aq-diagram__glyph" viewBox="0 0 72 56" aria-hidden="true"><path d="'+d+'"/></svg>'}
var FLN=0;
/* wFlow(items, o): items [{t, d, tag, link, spot, icon}] in flow order. o: cls (extra root class), from / to (pipe-end
   labels), base (what spans every stage), glyph(item) (fallback line drawing path), block (plate title block cells). */
function wFlow(I,o){o=o||{};var n=I.length,id='fl'+(++FLN),num=function(i){return (i<9?'0':'')+(i+1)};
 var st='',k=n<10?'0'+n:''+n;
 I.forEach(function(x,i){var sid=id+'-s'+i,did=id+'-d'+i,on=i===0,
   fig=isVig(x.spot)?wSpot(x.spot,'s','aq-diagram__spot'):isVig(x.icon)?wSpot(x.icon,'s','aq-diagram__spot'):dSvg((o.glyph&&o.glyph(x))||dGlyph(x.t));
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
 if(!anim||reduce||!window.gsap)return;var f=b.querySelector('.aq-diagram__fill'),d=document.getElementById(b.getAttribute('aria-controls')),v=f&&f.offsetHeight>f.offsetWidth;
 if(f)gsap.fromTo(f,v?{scaleY:0}:{scaleX:0},{scaleX:1,scaleY:1,duration:0.55,ease:'power2.out',clearProps:'transform'});
 if(d)gsap.fromTo(d,{autoAlpha:0,y:8},{autoAlpha:1,y:0,duration:0.35,delay:0.15,ease:'power2.out',clearProps:'opacity,visibility,transform'})}
function flInit(){[].forEach.call(document.querySelectorAll('.aq-diagram:not(.is-live)'),function(w){w.classList.add('is-live');
 var b=w.querySelector('.aq-diagram__st[aria-pressed="true"]')||w.querySelector('.aq-diagram__st');if(b)flSel(w,b,false)})}
if(typeof document!=='undefined'&&document.addEventListener){
 document.addEventListener('click',function(ev){var b=ev.target.closest&&ev.target.closest('.aq-diagram__st');if(!b)return;var w=b.closest('.aq-diagram');
  if(b.getAttribute('aria-pressed')!=='true')flSel(w,b,true)});
 document.addEventListener('keydown',function(ev){var b=ev.target.closest&&ev.target.closest('.aq-diagram__st');if(!b)return;
  var L=[].slice.call(b.closest('.aq-diagram').querySelectorAll('.aq-diagram__st')),i=L.indexOf(b),j={ArrowRight:i+1,ArrowDown:i+1,ArrowLeft:i-1,ArrowUp:i-1,Home:0,End:L.length-1}[ev.key];
  if(j==null)return;ev.preventDefault();j=Math.max(0,Math.min(L.length-1,j));if(j!==i){L[j].focus();flSel(b.closest('.aq-diagram'),L[j],true)}});
 if(typeof MutationObserver!=='undefined'){var flQ=0;new MutationObserver(function(){if(flQ)return;flQ=1;setTimeout(function(){flQ=0;flInit()},0)}).observe(document.documentElement,{childList:true,subtree:true})}
 if(document.readyState!=='loading')setTimeout(flInit,0);else document.addEventListener('DOMContentLoaded',flInit)}
