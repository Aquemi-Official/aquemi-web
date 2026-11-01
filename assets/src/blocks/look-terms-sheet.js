/* Look "terms-sheet" -> TermsSheet (design-system/components/TermsSheet): commercial terms set as the terms sheet of a
   contract: one paper sheet on a limestone offset with a ruled head (the section's nav name, the clause count), the terms as numbered
   clauses in two columns, each with its number set large and light, the term, our side of it (a value written
   "a · b" breaks into lines), and the note under a hairline.
   Fields (a spec block): h, intro, cols [term, ours, note], rows [{p, v, m, link, link_label}], fold, fold_noun
   (phones only: desktop shows every clause). Phones: one column of clauses on the sheet. */
LOOKS['terms-sheet']=function(b,H){var C=b.cols||[],R=(b.rows||[]).map(function(r){return Array.isArray(r)?{p:r[0],v:r[1],m:r[2]}:r}),n=R.length;
 var cl=R.map(function(r,i){var V=String(r.v||'').split(/\s+·\s+/).filter(Boolean);
  return fli('<li class="aq-terms-sheet__cl" style="--i:'+i+'">',b,i)+'<span class="aq-terms-sheet__n" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span>'
   +'<div class="aq-terms-sheet__body"><h3 class="aq-terms-sheet__t">'+tx(r.p)+'</h3>'
   +'<ul class="aq-terms-sheet__v" role="list">'+V.map(function(x){return '<li>'+tx(x)+'</li>'}).join('')+'</ul>'
   +(r.m?'<p class="aq-terms-sheet__m"><span class="aq-terms-sheet__mk">'+tx(C[2]||'')+'</span> '+tcell(r.m)+'</p>':'')
   +(r.link&&wp(r.link)?'<p class="aq-terms-sheet__go">'+wlink(r.link,r.link_label)+'</p>':'')+'</div></li>'}).join('');
 var head='<div class="aq-terms-sheet__head" aria-hidden="true"><span>'+tx(b.nav||C[0]||'')+'</span><span>'+n+' '+e(b.fold_noun||'clauses')+'</span></div>';
 return sec(H+'<div class="aq-terms-sheet" data-theme="light">'+head+wFold(b,n,'<ol class="aq-terms-sheet__list" role="list" style="--rows:'+Math.ceil(n/2)+'">'+cl+'</ol>',b.fold_noun||'terms')+'</div>','aq-terms-sheet-sec')};
