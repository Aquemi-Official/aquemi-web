/* Table as "evidence" -> EvidenceMap: a requirement, how we meet it, and where the proof sits, drawn as a mapping.
   Fields as a table: cols [requirement, how we meet it, then evidence columns], rows. Evidence columns: a column whose
   every cell is a page link becomes the row's quiet link; every other column becomes document chips shaped like files
   (cells split on ";"), grouped under the column name when there is more than one.
   A real table: the requirement is the row header, display-sized with a mono number (01 …); leader lines run from it to
   "how", then fan out to each file chip. Phones: rows stack; the chips keep their files and the fan on the left. */
TABLE_AS.evidence=function(b,H){var C=b.cols||[],R=b.rows||[];
 var go=C.map(function(c,i){return i>1&&R.length>0&&R.every(function(r){var x=r[i];return x&&typeof x==='object'&&x.link})});
 var ev=C.map(function(c,i){return i}).filter(function(i){return i>1&&!go[i]}),many=ev.length>1;
 var head='<thead><tr><th scope="col">'+tx(C[0]||'')+'</th><th scope="col">'+tx(C[1]||'')+'</th><th scope="col">'+(many?'Reference':tx(C[ev[0]]||C[2]||''))+'</th></tr></thead>';
 return sec(H+'<div class="aq-evidence">'+wFold(b,R.length,'<table class="aq-evidence__table">'+head+'<tbody>'+R.map(function(r,ri){
   var files=ev.map(function(i){var c=r[i],t=c&&typeof c==='object'?c.t:c;if(!t)return '';
    return (many?'<p class="aq-evidence__k">'+tx(C[i])+'</p>':'')+'<ul class="aq-evidence__docs">'+String(t).split(/\s*;\s*/).map(function(x){return '<li class="aq-evidence__doc"><span class="aq-evidence__file">'+tx(x.charAt(0).toUpperCase()+x.slice(1))+'</span></li>'}).join('')+'</ul>'}).join('');
   var links=C.map(function(c,i){return go[i]?tcell(r[i]):''}).join('');
   return fli('<tr class="aq-evidence__row">',b,ri)+'<th scope="row" class="aq-evidence__t"><span class="aq-evidence__n" aria-hidden="true">'+(ri<9?'0':'')+(ri+1)+'</span><span class="aq-evidence__name">'+tcell(r[0])+'</span></th>'
    +'<td class="aq-evidence__how">'+tcell(r[1])+'</td>'
    +'<td class="aq-evidence__proof">'+files+(links?'<p class="aq-evidence__go">'+links+'</p>':'')+'</td></tr>'}).join('')+'</tbody></table>',b.fold_noun||'requirements')+'</div>');};
