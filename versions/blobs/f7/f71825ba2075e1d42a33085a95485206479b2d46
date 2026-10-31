/* Block "standards-map" -> StandardsMap: a plant map of the water system, each zone (generation, storage and distribution,
   pure steam, controls and data, fabrication, qualification) a dashed framed area hanging off one pipe header, labelled with
   the standards that govern it. Fields: zones [{t, codes: ["USP <645>", ...], to, icon}]. to: the id of the section that
   holds the proof (a block's anchor, or its nav id s-N-label); the zone title jumps there. Each code is a chip that scrolls
   to the row naming it: first inside the zone's section, then anywhere on the page; a folded row is unfolded first and
   flashes once. A code may be {t, to} to send that one code to another section. icon: an Icon name (optional; all or none).
   Desktop: the first half of the zones above the pipe, the rest below, a branch from each to the pipe. Phones: zones stacked
   as compact rows on a vertical pipe, codes as chips. Navy ground. Only standards the page already lists. */
BLOCKS['standards-map']=function(b,H){var Z=b.zones||[],top=Math.ceil(Z.length/2),ic=Z.length&&Z.every(function(z){return isIcon(z.icon)});
 return sec(H+'<div class="aq-standards-map"><ol class="aq-standards-map__zones" style="--cols:'+Math.max(top,1)+'">'+Z.map(function(z,i){var up=i<top,
   to=z.to||'',t=to?'<a href="#'+e(WP)+'" data-jump="'+e(to)+'">'+tx(z.t)+'</a>':tx(z.t);
   return '<li class="aq-standards-map__zone '+(up?'is-up':'is-down')+'" style="grid-area:'+(up?1:3)+' / '+((up?i:i-top)+1)+'">'
    +'<div class="aq-standards-map__head">'+(ic?wIcon(z.icon,'aq-standards-map__icon'):idx(i))+'<h3 class="aq-standards-map__t">'+t+'</h3></div>'
    +'<ul class="aq-standards-map__codes">'+(z.codes||[]).map(function(c){var ct=c&&typeof c==='object'?c.t:c,cto=(c&&typeof c==='object'&&c.to)||to;
     return '<li><a class="aq-standards-map__code" href="#'+e(WP)+'" data-smap-code="'+e(ct)+'" data-smap-to="'+e(cto)+'">'+tx(ct)+'</a></li>'}).join('')+'</ul></li>'}).join('')
  +'</ol></div>');};
/* Code chip -> the row that proves it. Rows: EvidenceMap rows (matched on their title), spec and table rows, list rows. */
function smapRow(scope,code){if(!scope)return null;var re=new RegExp('(^|[^A-Za-z0-9])'+code.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'(?![A-Za-z0-9])'),R=scope.querySelectorAll('.aq-evidence__row, tr, li');
 for(var i=0;i<R.length;i++){var r=R[i];if(r.closest('.aq-standards-map,.aq-section-nav,.aq-menu,.aq-hero,.aq-closing,nav,footer'))continue;var t=r.querySelector('.aq-evidence__t'),P=t?[t]:r.children.length?[].slice.call(r.children):[r];/* cell by cell: textContent runs cells together */
  if(P.some(function(x){return re.test(x.textContent)}))return r}return null}
document.addEventListener('click',function(ev){var a=ev.target.closest&&ev.target.closest('[data-smap-code]');if(!a)return;ev.preventDefault();
 var code=a.getAttribute('data-smap-code'),s=document.getElementById(a.getAttribute('data-smap-to')||''),r=smapRow(s,code)||smapRow(document.querySelector('main')||document.body,code),
  rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(!r){if(s)s.scrollIntoView({behavior:rm?'auto':'smooth',block:'start'});return}
 var f=r.classList.contains('aq-fold-x')&&r.closest('.aq-fold');if(f&&!f.classList.contains('is-open')){var btn=f.querySelector('.aq-fold__btn');if(btn)btn.click()}
 r.scrollIntoView({behavior:rm?'auto':'smooth',block:'center'});if(!r.hasAttribute('tabindex'))r.setAttribute('tabindex','-1');r.focus({preventScroll:true});
 r.classList.remove('aq-standards-map-hit');void r.offsetWidth;r.classList.add('aq-standards-map-hit');setTimeout(function(){r.classList.remove('aq-standards-map-hit')},2400)});
