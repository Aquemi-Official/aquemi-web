/* Block "spec" -> SpecTable (spec sheet: two-column matrix, the hl row first as a full-width band).
   Fields: h, caption, cols, rows [{p, v, m, hl}], note. The caption is the section's eyebrow (above h) and the table's
   visually hidden <caption>; it is never printed a second time above the table.
   CSS changes the table's display, so explicit ARIA table roles keep its semantics in every browser. */
BLOCKS['spec']=function(b,H){
  var cols=b.cols||['Parameter','Specification','Method or reference'];
  var rows=(b.rows||[]).slice(),k=-1;
  rows.forEach(function(r,i){if(r.hl&&k<0)k=i});
  if(k>0)rows.unshift(rows.splice(k,1)[0]);
  var body=rows.map(function(r,i){
    var hl=k>=0&&i===0;
    return '<tr role="row"'+(hl?' class="is-highlight"':'')+'><th scope="row" role="rowheader">'+tx(r.p)+'</th><td role="cell" class="aq-spec__value">'+tx(r.v)+'</td><td role="cell" class="aq-spec__method">'+tx(r.m||'')+'</td></tr>';
  }).join('');
  var head=wSecHead({eyebrow:b.caption,h:b.h,intro:b.intro});
  return sec(head+'<div class="aq-stack"><table class="aq-spec" role="table"><caption>'+tx(b.caption||b.h||'')+'</caption><thead role="rowgroup"><tr role="row">'+cols.map(function(c){return '<th scope="col" role="columnheader">'+e(c)+'</th>'}).join('')+'</tr></thead><tbody role="rowgroup">'+body+'</tbody></table>'+(b.note?'<p class="aq-small">'+tx(b.note)+'</p>':'')+'</div>');
};
