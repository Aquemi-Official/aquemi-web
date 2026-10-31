/* Table as "router" -> Router: the buyer picks the situation they are in and sees one route through the columns that
   follow (the water they need, the system, where to start). Fields as a table: cols (first is the situation column,
   the rest name the stations), rows (first cell the situation, each other cell a string or {t, link}).
   One situation is open at a time, the first by default. The whole router sits on a plate. Desktop: situations
   on the left, the open route on the right as stations joined by flow lines with arrowheads, a flow line from the
   chosen situation into it. Phones: each route opens under its situation, its stations down a riser.
   A route whose cells link somewhere (the last link wins, usually "Start with") is clickable as a whole: the frame
   carries a pointer-only overlay to that page; the real link inside stays the keyboard and screen reader target, and
   that station is drawn as the tinted end station. A cell's intent ({t, link, intent}: option labels the linked form
   ticks on arrival) rides on both, so a click anywhere on the route lands with the same options ticked.
   Every route is in the markup (hidden when closed), so nothing is lost to search or screen readers.
   Pending station: a value that opens with a [placeholder] ("[days]; DI runs until release") is a fact still to come,
   drawn with a dashed hairline and a small "To confirm" eyebrow, so it reads as a value on order, not a gap. */
var routerN=0;
TABLE_AS.router=function(b,H){var C=b.cols||[],R=b.rows||[],k=++routerN;
 function lnk(c){return c&&typeof c==='object'&&c.link&&wp(c.link)?c.link:''}
 var inner='<div class="aq-router">'+R.map(function(r,i){var id='route-'+k+'-'+i,s=r[0]&&typeof r[0]==='object'?r[0].t:r[0],st=r.slice(1),go=-1;
  st.forEach(function(c,j){if(lnk(c))go=j});var to=go>=0?lnk(st[go]):'',ti=to&&st[go].intent;
  return '<button type="button" class="aq-router__opt" aria-expanded="'+(i?'false':'true')+'" aria-controls="'+id+'">'+idx(i)+'<span class="aq-router__t">'+tx(s)+'</span></button>'
   +'<div class="aq-router__route'+(to?' is-link':'')+'" id="'+id+'" style="grid-row:1 / span '+R.length+'"'+(i?' hidden':'')+'>'
   +(to?'<a class="aq-router__hit" href="#'+e(to)+'" data-wp="'+e(to)+'"'+(ti?' data-intent="'+e(ti)+'"':'')+' tabindex="-1" aria-hidden="true"></a>':'')
   +'<ol class="aq-router__stations">'+st.map(function(c,j){
    var pend=j!==go&&/^\s*\[/.test(c&&typeof c==='object'?c.t:c),cl=(j===go?' is-go':'')+(pend?' is-pending':'');
    return '<li'+(cl?' class="'+cl.slice(1)+'"':'')+'><p class="aq-router__k">'+tx(C[j+1]||'')+'</p><p class="aq-router__v">'+tcell(c)+(pend?'<span class="aq-router__tbc">To confirm</span>':'')+'</p></li>'}).join('')+'</ol></div>'}).join('')+'</div>';
 return sec(H+wPlate(inner,{block:['Aquemi',b.nav||'Router',R.length+' routes']}));};
document.addEventListener('click',function(ev){var t=ev.target.closest&&ev.target.closest('.aq-router__opt');if(!t)return;var w=t.closest('.aq-router');
 [].forEach.call(w.querySelectorAll('.aq-router__opt'),function(o){var on=o===t;o.setAttribute('aria-expanded',on?'true':'false');document.getElementById(o.getAttribute('aria-controls')).hidden=!on})});
