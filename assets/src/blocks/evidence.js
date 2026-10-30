/* Table as "evidence" -> EvidenceMap: a requirement, how we meet it, and where the proof sits. Fields as a table:
   cols [requirement, how we meet it, then evidence columns], rows. Evidence columns: a column whose every cell is a page
   link becomes the row's quiet link; every other column becomes document tags (cells split on ";"), labelled with the
   column name when there is more than one. Desktop: requirement | how | a leader line to the tags. Phones: stacked. */
TABLE_AS.evidence=function(b,H){var C=b.cols||[],R=b.rows||[];
 var go=C.map(function(c,i){return i>1&&R.length>0&&R.every(function(r){var x=r[i];return x&&typeof x==='object'&&x.link})});
 var ev=C.map(function(c,i){return i}).filter(function(i){return i>1&&!go[i]}),many=ev.length>1;
 return sec(H+'<div class="aq-evidence"><div class="aq-evidence__head" aria-hidden="true"><span>'+tx(C[0]||'')+'</span><span>'+tx(C[1]||'')+'</span><span>'+(many?'Reference':tx(C[ev[0]]||''))+'</span></div>'
  +wFold(b,R.length,'<ol class="aq-evidence__rows">'+R.map(function(r,ri){
   var tags=ev.map(function(i){var c=r[i],t=c&&typeof c==='object'?c.t:c;if(!t)return '';
    return (many?'<span class="aq-evidence__k">'+tx(C[i])+'</span>':'')+String(t).split(/\s*;\s*/).map(function(x){return '<span class="aq-evidence__doc">'+tx(x.charAt(0).toUpperCase()+x.slice(1))+'</span>'}).join('')}).join('');
   var links=C.map(function(c,i){return go[i]?tcell(r[i]):''}).join('');
   return fli('<li class="aq-evidence__row">',b,ri)+'<h3 class="aq-evidence__t">'+tcell(r[0])+'</h3><p class="aq-evidence__how">'+tcell(r[1])+'</p>'
    +'<p class="aq-evidence__proof">'+tags+(links?'<span class="aq-evidence__go">'+links+'</span>':'')+'</p></li>'}).join('')+'</ol>',b.fold_noun||'requirements')+'</div>');};
