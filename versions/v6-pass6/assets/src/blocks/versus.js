/* Table as "versus" -> Versus: two routes facing each other across a spine of factors (hot or ambient WFI, multi-effect
   or vapour compression). Fields as a table with exactly three columns: cols [factor label, route A, route B], rows
   [factor, A, B]. A row whose factor starts "Fits when" (or "Choose") becomes the verdict: two closing lines,
   "Choose <A> when …" and "Choose <B> when …", under the rows. Desktop: A right-aligned against the spine, the factor
   on the spine, B left-aligned. Phones: each factor with A and B under it, each line tagged with its route.
   Drawn on a plate (wPlate): the two route names face each other across an "or" node, each factor is a numbered node on
   the spine with leader lines out to both answers.
   fold: N shows the first N factors (the verdict always shows); put the deciding factors first.
   conclusion: [label, A, B] (or a string): a closing line that is not a choice (what carries into IQ/OQ), drawn as a
   footer band across the plate under the factors, the label on the spine. ground: "light" sets it on the cream sheet
   (the plate goes sunken so it still reads as a drawing on the sheet). */
TABLE_AS.versus=function(b,H){var C=b.cols||[],R=b.rows||[],A=tcell(C[1]),B=tcell(C[2]);
 var fit=R.filter(function(r){return /^(fits when|choose)/i.test(String(r[0]&&r[0].t||r[0]))})[0],rows=R.filter(function(r){return r!==fit});
 return sec(H+wPlate('<div class="aq-versus"><div class="aq-versus__head" aria-hidden="true"><p class="aq-versus__name">'+A+'</p><span class="aq-versus__vs">or</span><p class="aq-versus__name">'+B+'</p></div>'
  +wFold(b,rows.length,'<dl class="aq-versus__rows">'+rows.map(function(r,i){return fli('<div class="aq-versus__row">',b,i)+'<dt><span class="aq-versus__n" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span>'+tcell(r[0])+'</dt><dd data-k="'+e(C[1])+'">'+tcell(r[1])+'</dd><dd data-k="'+e(C[2])+'">'+tcell(r[2])+'</dd></div>'}).join('')+'</dl>',b.fold_noun||'factors')
  +(fit?'<div class="aq-versus__verdict"><div><p class="aq-eyebrow">Choose '+A+' when</p><p>'+tcell(fit[1])+'</p></div><div><p class="aq-eyebrow">Choose '+B+' when</p><p>'+tcell(fit[2])+'</p></div></div>':'')+wVsEnd(b.conclusion,C)+'</div>',{block:['Aquemi',b.nav||'Comparison',rows.length+' factors'],cls:b.ground==='light'?'aq-versus-plate--light':''}));};
function wVsEnd(c,C){if(!c)return '';var one=typeof c==='string'||c.length<3;
 return '<div class="aq-versus__end'+(one?' is-one':'')+'"><p class="aq-versus__end-k">'+(one?'Either way':tcell(c[0]))+'</p>'
  +(one?'<p class="aq-versus__end-v">'+tcell(typeof c==='string'?c:c[c.length-1])+'</p>':'<p class="aq-versus__end-v" data-k="'+e(C[1])+'">'+tcell(c[1])+'</p><p class="aq-versus__end-v" data-k="'+e(C[2])+'">'+tcell(c[2])+'</p>')+'</div>'}
