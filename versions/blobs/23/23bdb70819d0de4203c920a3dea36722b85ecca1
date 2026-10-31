/* Table as "router" -> Router: the buyer picks the situation they are in and sees one route through the columns that
   follow (the water they need, the system, where to start). Fields as a table: cols (first is the situation column,
   the rest name the stations), rows (first cell the situation, each other cell a string or {t, link}).
   One situation is open at a time, the first by default. Desktop: situations on the left, the open route on the
   right in a drawing frame, a pipe from the chosen situation to it. Phones: each route opens under its situation.
   Every route is in the markup (hidden when closed), so nothing is lost to search or screen readers. */
var routerN=0;
TABLE_AS.router=function(b,H){var C=b.cols||[],R=b.rows||[],k=++routerN;
 return sec(H+'<div class="aq-router">'+R.map(function(r,i){var id='route-'+k+'-'+i,s=r[0]&&typeof r[0]==='object'?r[0].t:r[0];
  return '<button type="button" class="aq-router__opt" aria-expanded="'+(i?'false':'true')+'" aria-controls="'+id+'">'+idx(i)+'<span class="aq-router__t">'+tx(s)+'</span></button>'
   +'<div class="aq-router__route" id="'+id+'" style="grid-row:1 / span '+R.length+'"'+(i?' hidden':'')+'><ol class="aq-router__stations">'+r.slice(1).map(function(c,j){
    return '<li><p class="aq-router__k">'+tx(C[j+1]||'')+'</p><p class="aq-router__v">'+tcell(c)+'</p></li>'}).join('')+'</ol></div>'}).join('')+'</div>');};
document.addEventListener('click',function(ev){var t=ev.target.closest&&ev.target.closest('.aq-router__opt');if(!t)return;var w=t.closest('.aq-router');
 [].forEach.call(w.querySelectorAll('.aq-router__opt'),function(o){var on=o===t;o.setAttribute('aria-expanded',on?'true':'false');document.getElementById(o.getAttribute('aria-controls')).hidden=!on})});
