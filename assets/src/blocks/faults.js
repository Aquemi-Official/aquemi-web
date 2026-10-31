/* Table as "failures" -> FaultList: where things fail and what we design against. Fields as a table: cols [the failure
   column, then the columns revealed when a row opens, usually "Usual cause" and "What we design in"], rows. Each row is
   a native <details>: index, the failure, a +/− sign; open, the other columns sit side by side, each under its column
   name. The first row starts open; a shared name keeps one open at a time. A list on hairlines.
   fold: N shows the first N failures; the rest sit behind "Show all N risks". */
var faultN=0;
TABLE_AS.failures=function(b,H){var C=b.cols||[],R=b.rows||[];faultN++;
 return sec(H+wFold(b,R.length,'<div class="aq-faults">'+R.map(function(r,i){
  return fli('<details name="faults-'+faultN+'"'+(i?'':' open')+'>',b,i)+'<summary>'+idx(i)+'<span class="aq-faults__t">'+tcell(r[0])+'</span><span class="aq-faults__sign" aria-hidden="true"></span></summary>'
   +'<div class="aq-faults__body">'+r.slice(1).map(function(c,j){return '<div><p class="aq-faults__k">'+tx(C[j+1]||'')+'</p><p class="aq-faults__v">'+tcell(c)+'</p></div>'}).join('')+'</div></details>'}).join('')+'</div>',b.fold_noun||'risks'));};
