/* Block "table" -> CompareTable. cols: header labels (first is the row-label column); rows: cells, each a string or {t, link}.
   Three or more columns: a numbered matrix on desktop. A column whose every cell is a page link ("Where we show it") is a
   link column (aq-compare-table__go): on phones its link sits at the foot of the row, unlabelled, never a tab.
   Phones, up to three value columns: every row is a record, the first cell its title and each other cell one
   "Label: value" line (aq-compare-table__k carries the label, hidden on desktop), so nothing needs a tap.
   Phones, four or more value columns (--tabs): one tab per value column on a single scrolling strip, one column shown.
   Two columns: the numbered row list (--list). The CSS changes table display on phones, so explicit ARIA roles are set. */
BLOCKS['table']=function(b,H){var C=b.cols||[],R=b.rows||[],list=C.length<=2;
 var go=C.map(function(c,i){return i>0&&R.length>0&&R.every(function(r){var x=r[i];return x&&typeof x==='object'&&x.link})});
 var vals=C.map(function(c,i){return i}).filter(function(i){return i>0&&!go[i]}),tabs=!list&&vals.length>=4;
 function cell(c,i){if(list)return '<td role="cell">'+tcell(c)+'</td>';
  var v=tcell(c);return '<td role="cell"'+(go[i]?' class="aq-compare-table__go"':'')+(v?'':' data-empty')+'>'+(go[i]||tabs||!C[i]?'':'<span class="aq-compare-table__k" aria-hidden="true">'+tx(C[i])+'</span>')+v+'</td>'}
 var strip=tabs?'<div class="aq-compare-table__tabs" role="group" aria-label="Column shown">'+vals.map(function(i,k){return '<button type="button" class="aq-compare-table__tab" data-col="'+i+'" aria-pressed="'+(k?'false':'true')+'">'+tx(C[i])+'</button>'}).join('')+'</div>':'';
 return sec(H+'<div class="aq-compare-table'+(list?' aq-compare-table--list':'')+(tabs?' aq-compare-table--tabs" data-col="'+vals[0]:'')+'">'+strip
  +'<table class="aq-compare-table__table" role="table"><thead role="rowgroup"><tr role="row">'+C.map(function(c){return '<th scope="col" role="columnheader">'+tx(c)+'</th>'}).join('')+'</tr></thead>'
  +'<tbody role="rowgroup">'+R.map(function(r){return '<tr role="row">'+r.map(function(c,i){return i?cell(c,i):'<th scope="row" role="rowheader">'+tcell(c)+'</th>'}).join('')+'</tr>'}).join('')+'</tbody></table></div>');};
/* CompareTable tabs (--tabs, phones): show the pressed column */
document.addEventListener('click',function(ev){var t=ev.target.closest&&ev.target.closest('.aq-compare-table__tab');if(!t)return;var w=t.closest('.aq-compare-table');w.setAttribute('data-col',t.getAttribute('data-col'));[].forEach.call(w.querySelectorAll('.aq-compare-table__tab'),function(x){x.setAttribute('aria-pressed',x===t?'true':'false')})});
