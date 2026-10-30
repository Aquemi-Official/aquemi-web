/* Block "table" -> CompareTable. cols: header labels (first is the row-label column); rows: cells, each a string or {t, link}.
   Three or more columns: a numbered matrix, with column tabs on phones. Two columns: the numbered row list (aq-compare-table--list).
   The CSS changes table display on phones, so explicit ARIA table roles are set. */
BLOCKS['table']=function(b,H){var C=b.cols||[],list=C.length<=2,
 tabs=list?'':'<div class="aq-compare-table__tabs" role="group" aria-label="Column shown">'+C.slice(1).map(function(c,i){return '<button type="button" class="aq-compare-table__tab" data-col="'+(i+1)+'" aria-pressed="'+(i?'false':'true')+'">'+tx(c)+'</button>'}).join('')+'</div>';
 return sec(H+'<div class="aq-compare-table'+(list?' aq-compare-table--list':'')+'"'+(list?'':' data-col="1"')+'>'+tabs
  +'<table class="aq-compare-table__table" role="table"><thead role="rowgroup"><tr role="row">'+C.map(function(c){return '<th scope="col" role="columnheader">'+tx(c)+'</th>'}).join('')+'</tr></thead>'
  +'<tbody role="rowgroup">'+(b.rows||[]).map(function(r){return '<tr role="row">'+r.map(function(c,i){return i?'<td role="cell">'+tcell(c)+'</td>':'<th scope="row" role="rowheader">'+tcell(c)+'</th>'}).join('')+'</tr>'}).join('')+'</tbody></table></div>');};
/* CompareTable tabs: show the pressed column on phones */
document.addEventListener('click',function(ev){var t=ev.target.closest&&ev.target.closest('.aq-compare-table__tab');if(!t)return;var w=t.closest('.aq-compare-table');w.setAttribute('data-col',t.getAttribute('data-col'));[].forEach.call(w.querySelectorAll('.aq-compare-table__tab'),function(x){x.setAttribute('aria-pressed',x===t?'true':'false')})});
