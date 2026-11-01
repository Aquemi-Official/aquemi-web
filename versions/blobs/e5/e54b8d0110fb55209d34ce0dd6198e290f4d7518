/* Look "colophon" -> Colophon (design-system/components/Colophon): a spec block of company facts set as a measured
   editorial colophon. The first highlighted row is the statement: its value set at display size in light type, the
   sentence that says what we do not do set after it, smaller and quieter (split at its first full stop, words
   unchanged). Every other row is a line of the colophon on a measuring rule: a major tick and the row number in the
   gutter, the item as a small label, the fact large and light, the evidence as a margin note with the row's link.
   Fields: h, caption (eyebrow), intro, rows [{p, v, m, hl, link, link_label, intent}], note, fold, fold_noun. */
function cphGo(r){return r.link&&wp(r.link)?'<a class="aq-colophon__go" href="#'+e(r.link)+'" data-wp="'+e(r.link)+'"'+(r.intent?' data-intent="'+e(r.intent)+'"':'')+'>'+tx(r.link_label||wlabel(r.link))+'</a>':''}
LOOKS['colophon']=function(b,H){var R=b.rows||[],li=-1;R.some(function(r,i){if(r.hl){li=i;return true}});
 var L=li>=0?R[li]:null,rest=R.filter(function(r,i){return i!==li}),num=function(i){return (i<9?'0':'')+(i+1)};
 var lead='';if(L){var v=String(L.v||''),k=v.search(/\.\s+(?=[A-Z\[])/),a=k<0?v:v.slice(0,k+1),z=k<0?'':v.slice(k+1).trim();
  lead='<div class="aq-colophon__lead"><span class="aq-colophon__tick" aria-hidden="true"></span><p class="aq-colophon__lk"><span class="aq-colophon__n" aria-hidden="true">'+num(0)+'</span><span>'+tx(L.p)+'</span></p>'
   +'<p class="aq-colophon__lv">'+tx(a)+'</p>'+(z?'<p class="aq-colophon__lz">'+tx(z)+'</p>':'')
   +(L.m||cphGo(L)?'<p class="aq-colophon__lm">'+(L.m?'<span>'+tx(L.m)+'</span>':'')+cphGo(L)+'</p>':'')+'</div>'}
 /* the fold counts the rows under the statement */
 var fb={fold:b.fold>1?b.fold-(L?1:0):b.fold};
 var items=rest.map(function(r,i){var n=L?i+1:i;
  return fli('<li class="aq-colophon__row" style="--i:'+i+'">',fb,i)+'<span class="aq-colophon__n" aria-hidden="true">'+num(n)+'</span>'
   +'<h3 class="aq-colophon__p">'+tx(r.p)+'</h3><p class="aq-colophon__v">'+tx(r.v)+'</p>'
   +'<p class="aq-colophon__m">'+(r.m?'<span class="aq-colophon__ev">'+tx(r.m)+'</span>':'')+cphGo(r)+'</p></li>'}).join('');
 var list='<ol class="aq-colophon__rows" role="list">'+items+'</ol>';
 return sec(H+'<div class="aq-colophon">'+lead+wFold(fb,rest.length,list,b.fold_noun||'facts')+wSpecNote(b)+'</div>','aq-colophon-sec')};
