/* Block "spec" -> SpecTable (spec sheet: two-column matrix).
   Fields: h, caption, cols, rows [{p, v, m, hl, link}], note. Rows keep their order. hl rows at the top of the list are
   full-width bands (is-highlight is-lead); an hl row further down is tinted in place, so sequences are never broken.
   link: a page id, shown as a quiet "Page name →" link after the basis. The caption is the section's eyebrow (above h)
   and the table's visually hidden <caption>; it is never printed a second time above the table.
   CSS changes the table's display, so explicit ARIA table roles keep its semantics in every browser. */
BLOCKS['spec']=function(b,H){
  var cols=b.cols||['Parameter','Specification','Method or reference'];
  var rows=b.rows||[],lead=true;
  var body=rows.map(function(r,i){
    var hl=!!r.hl,cls=hl?(lead?'is-highlight is-lead':'is-highlight'):'';if(!hl)lead=false;
    var lp=r.link&&wp(r.link),lk=lp?'<a class="aq-spec__link" href="#'+e(r.link)+'" data-wp="'+e(r.link)+'">'+tx(lp.nav_label||r.link)+'</a>':'';
    return fli('<tr role="row"'+(cls?' class="'+cls+'"':''),b,i)+'><th scope="row" role="rowheader">'+tx(r.p)+'</th><td role="cell" class="aq-spec__value">'+tx(r.v)+'</td><td role="cell" class="aq-spec__method">'+tx(r.m||'')+(r.m&&lk?' ':'')+lk+'</td></tr>';
  }).join('');
  var head=wSecHead({eyebrow:b.caption,h:b.h,intro:b.intro});
  return sec(head+'<div class="aq-stack">'+wFold(b,rows.length,'<table class="aq-spec" role="table"><caption>'+tx(b.caption||b.h||'')+'</caption><thead role="rowgroup"><tr role="row">'+cols.map(function(c){return '<th scope="col" role="columnheader">'+e(c)+'</th>'}).join('')+'</tr></thead><tbody role="rowgroup">'+body+'</tbody></table>',b.fold_noun||'parameters')+(b.note?'<p class="aq-small">'+tx(b.note)+'</p>':'')+'</div>');
};
