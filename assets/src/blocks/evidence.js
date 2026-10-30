/* Table as "evidence" -> EvidenceMap: a requirement, how we meet it, and where the proof sits, drawn as a mapping.
   Fields as a table: cols [requirement, how we meet it, then evidence columns], rows. Evidence columns: a column whose
   every cell is a page link becomes the row's quiet link; every other column becomes document chips shaped like files
   (cells split on ";"), grouped under the column name when there is more than one.
   Reference columns: a column listed in b.ref (column names or indexes), or whose every filled cell is only clause
   numbers ("11.10(e)", "7; 17", "6.3, 8.5.6"), prints as mono clause text on the fan, not as file chips.
   Clauses inside cells: a requirement written "Change control · ISO 9001 6.3, 8.5.6" shows the part after " · " as a
   mono reference line under the name; a "how" cell whose every ";" part opens with a clause number ("6.7 no dead legs;
   6.10 WFI > 70 °C") becomes a short clause list, the numbers in a mono column.
   A real table: the requirement is the row header, display-sized with a mono number (01 …); leader lines run from it to
   "how", then fan out to each file chip. Phones: rows stack; the chips keep their files and the fan on the left. */
var EV_CLAUSE=/^\s*(?:§\s*)?\d+(?:\.\d+)*(?:\s?\([a-z0-9]+\))*(?:\s*(?:[,;–-]|and)\s*(?:\(?[a-z0-9]+\)|\d+(?:\.\d+)*(?:\s?\([a-z0-9]+\))*))*\s*$/i;
function evText(c){return c&&typeof c==='object'?c.t:c}
/* Requirement cell: "Name · Standard clause" -> name, then the reference in mono */
function evName(c){var t=String(evText(c)||''),m=t.match(/^(.+?)\s+·\s+(.*\d.*)$/);
 if(!m||typeof c==='object')return '<span class="aq-evidence__name">'+tcell(c)+'</span>';
 return '<span class="aq-evidence__name">'+tx(m[1])+'<span class="aq-evidence__ref">'+tx(m[2])+'</span></span>'}
/* How cell: every ";" part opens with a clause number -> a clause list */
function evHow(c){var t=String(evText(c)||''),P=t.split(/\s*;\s*/),Q=P.map(function(x){return x.match(/^(\d+(?:\.\d+)+)\s+(.+)$/)});
 if(typeof c==='object'||P.length<2||!Q.every(Boolean))return tcell(c);
 return '<ul class="aq-evidence__clauses">'+Q.map(function(q){return '<li><span class="aq-evidence__cl">'+e(q[1])+'</span><span>'+tx(q[2])+'</span></li>'}).join('')+'</ul>'}
TABLE_AS.evidence=function(b,H){var C=b.cols||[],R=b.rows||[],RF=[].concat(b.ref||[]);
 var go=C.map(function(c,i){return i>1&&R.length>0&&R.every(function(r){var x=r[i];return x&&typeof x==='object'&&x.link})});
 var isRef=C.map(function(c,i){if(i<2||go[i])return false;if(RF.indexOf(i)>=0||RF.indexOf(c)>=0)return true;
  var f=R.map(function(r){return evText(r[i])}).filter(Boolean);return f.length>0&&f.every(function(t){return EV_CLAUSE.test(String(t))})});
 var ev=C.map(function(c,i){return i}).filter(function(i){return i>1&&!go[i]}),many=ev.length>1;
 var head='<thead><tr><th scope="col">'+tx(C[0]||'')+'</th><th scope="col">'+tx(C[1]||'')+'</th><th scope="col">'+(many?'Reference':tx(C[ev[0]]||C[2]||''))+'</th></tr></thead>';
 return sec(H+'<div class="aq-evidence">'+wFold(b,R.length,'<table class="aq-evidence__table">'+head+'<tbody>'+R.map(function(r,ri){
   var refs=ev.filter(function(i){return isRef[i]}).map(function(i){var t=evText(r[i]);if(!t)return '';
    return '<li class="aq-evidence__doc is-ref">'+(many?'<span class="aq-evidence__rk">'+tx(C[i])+'</span>':'')+'<span class="aq-evidence__clause">'+tx(t)+'</span></li>'}).join('');
   var files=(refs?'<ul class="aq-evidence__docs aq-evidence__refs">'+refs+'</ul>':'')+ev.filter(function(i){return !isRef[i]}).map(function(i){var c=r[i],t=c&&typeof c==='object'?c.t:c;if(!t)return '';
    return (many?'<p class="aq-evidence__k">'+tx(C[i])+'</p>':'')+'<ul class="aq-evidence__docs">'+String(t).split(/\s*;\s*/).map(function(x){return '<li class="aq-evidence__doc"><span class="aq-evidence__file">'+tx(x.charAt(0).toUpperCase()+x.slice(1))+'</span></li>'}).join('')+'</ul>'}).join('');
   var links=C.map(function(c,i){return go[i]?tcell(r[i]):''}).join('');
   return fli('<tr class="aq-evidence__row">',b,ri)+'<th scope="row" class="aq-evidence__t"><span class="aq-evidence__n" aria-hidden="true">'+(ri<9?'0':'')+(ri+1)+'</span>'+evName(r[0])+'</th>'
    +'<td class="aq-evidence__how">'+evHow(r[1])+'</td>'
    +'<td class="aq-evidence__proof">'+files+(links?'<p class="aq-evidence__go">'+links+'</p>':'')+'</td></tr>'}).join('')+'</tbody></table>',b.fold_noun||'requirements')+'</div>');};
