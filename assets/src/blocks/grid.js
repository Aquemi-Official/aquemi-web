/* Block "grid" -> LinkGrid: choices as rows of the shared list grammar (.aq-rows): index, title, one line, optional tag.
   Fields: h, intro (section head), items [{t, d, link, tag}]; "as": "route" (below). An item that links to a page is one <a>; one whose
   link page has a drawing in ART (parts/Hero.js) shows it small at the row's end on desktop (aria-hidden, hidden on phones). */
BLOCKS['grid']=function(b,H){if(b.as==='route'&&(b.items||[]).length)return BLOCKS['grid'].route(b,H);var I=b.items||[],IC=wIcons(b);return sec(H+wFold(b,I.length,'<ol class="aq-rows aq-linkgrid">'+I.map(function(it,i){
 return fli(wRow(i,it.t,it.d,it.link,it.link,it.tag,IC[i]),b,i)}).join('')+'</ol>',b.fold_noun||'items'));};
/* "as": "route" -> VisitRoute: the items as numbered stops on one dashed route (a visit's order). Desktop: rows of
   3 or 4 stops that run left to right, then right to left, joined by U-turns; phones: one vertical route. DOM order is
   the route order. Items keep {t, d, link}; "end": true on the last item makes it the sign-off (a tick, not a number).
   No fold: a route shows every stop. */
BLOCKS['grid'].route=function(b,H){var I=b.items||[],n=I.length,C=n<=4?n:(n%4===0||n%4===3)?4:3;
 return sec(H+'<ol class="aq-visit-route" style="--cols:'+C+'">'+I.map(function(it,i){var r=Math.floor(i/C),k=i%C,rtl=r%2===1,inRow=Math.min(C,n-r*C),
  c=rtl?C-k:k+1,cls=['aq-visit-route__stop',rtl?'is-rtl':'is-ltr'];
  if(k===0&&i>0)cls.push('is-in');if(i===n-1)cls.push('is-last');else if(k===inRow-1)cls.push('is-turn');if(it.end&&i===n-1)cls.push('is-end');
  var mark=it.end&&i===n-1?'<span class="aq-visit-route__n" aria-hidden="true"><svg viewBox="0 0 16 16" focusable="false"><path d="M3 8.5 6.5 12 13 4.5"/></svg></span>':'<span class="aq-visit-route__n" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span>',
   inner=mark+'<h3 class="aq-visit-route__t">'+tx(it.t)+'</h3>'+(it.d?'<p class="aq-visit-route__d">'+tx(it.d)+'</p>':'');
  return '<li class="'+cls.join(' ')+'" style="--c:'+c+';--r:'+(r+1)+'">'+(it.link&&wp(it.link)?'<a class="aq-visit-route__body" href="#'+e(it.link)+'" data-wp="'+e(it.link)+'">'+inner+'</a>':'<div class="aq-visit-route__body">'+inner+'</div>')+'</li>'}).join('')+'</ol>');};
