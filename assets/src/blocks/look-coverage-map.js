/* Look "coverage-map" -> CoverageMap (design-system/components/CoverageMap): a coverage table by region (a router table:
   region, then the columns that answer for it) read off a map. Left, held in view as you read: a tile map of the country
   on a limestone sheet, one square per province or territory at its rough place (the block's map field: no invented
   places, only the tiles it lists), the base marked; every tile belongs to one row. Right, the regions as rows: index,
   the region set large and light, the tile codes it covers, then each column as a labelled field. Pointing at, focusing
   or (on desktop, with motion) scrolling to a row lights its tiles in flow; pressing a tile lights it and brings its row
   into view. Every row is always shown: the map only points.
   Fields, as a table: cols, rows, nav, and
     map: [{c: "ON", n: "Ontario", x: 4, y: 1, r: 0}] one tile per region: code, name, column and row on the grid, and
          r, the index of the row that covers it;
     base: {c: "ON", label: "Based in Ontario"} (optional) the tile marked as home, with its label (copy from the page).
   Design system: components/CoverageMap. */
(function(){
var covN=0;
LOOKS['coverage-map']=function(b,H){var C=b.cols||[],R=b.rows||[],M=b.map||[],B=b.base||null,k=++covN;
 var cols=M.reduce(function(a,t){return Math.max(a,(+t.x||0)+1)},1),rws=M.reduce(function(a,t){return Math.max(a,(+t.y||0)+1)},1);
 function rid(i){return 'cov-'+k+'-'+i}
 var tiles=M.map(function(t){var home=B&&B.c===t.c,r=+t.r,has=r>=0&&r<R.length;
  return '<li class="aq-coverage-map__tile'+(home?' is-home':'')+'" style="grid-column:'+((+t.x||0)+1)+';grid-row:'+((+t.y||0)+1)+'" data-r="'+(has?r:'')+'">'
   +(has?'<button type="button" class="aq-coverage-map__btn" data-cov="'+e(rid(r))+'" aria-label="'+e(t.n||t.c)+'">':'<span class="aq-coverage-map__btn">')
   +'<span class="aq-coverage-map__code" aria-hidden="true">'+e(t.c)+'</span>'+(has?'<span class="aq-coverage-map__ri" aria-hidden="true">'+(r<9?'0':'')+(r+1)+'</span>':'')
   +(has?'</button>':'</span>')+'</li>'}).join('');
 var base=B&&B.label?'<p class="aq-coverage-map__base"><span class="aq-coverage-map__pin" aria-hidden="true"></span>'+tx(B.label)+'</p>':'';
 var sheet='<div class="aq-coverage-map__sheet" data-theme="light"><p class="aq-coverage-map__title" aria-hidden="true"><span>Aquemi</span><span>'+tx(b.nav||'')+'</span></p>'
  +'<ol class="aq-coverage-map__grid" style="--cols:'+cols+';--rows:'+rws+'" aria-label="'+e(C[0]||'Map')+'">'+tiles+'</ol>'+base+'</div>';
 var rows=R.map(function(r,i){var codes=M.filter(function(t){return +t.r===i}).map(function(t){return e(t.c)});
  return '<li class="aq-coverage-map__row" id="'+rid(i)+'" data-r="'+i+'" tabindex="-1">'
   +'<div class="aq-coverage-map__rh"><span class="aq-coverage-map__i" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span><h3 class="aq-coverage-map__t">'+tcell(r[0])+'</h3>'
   +(codes.length?'<p class="aq-coverage-map__codes" aria-hidden="true">'+codes.map(function(c){return '<span>'+c+'</span>'}).join('')+'</p>':'')+'</div>'
   +'<dl class="aq-coverage-map__dl">'+r.slice(1).map(function(c,j){return '<div><dt>'+tx(C[j+1]||'')+'</dt><dd>'+tcell(c)+'</dd></div>'}).join('')+'</dl></li>'}).join('');
 return sec(H+'<div class="aq-coverage-map"><div class="aq-coverage-map__map">'+sheet+'</div><ol class="aq-coverage-map__rows">'+rows+'</ol></div>','aq-coverage-map-sec')};
/* Light a row's tiles: pointing at or focusing a row, or pressing a tile (which also brings its row into view) */
function lit(w,r){[].forEach.call(w.querySelectorAll('[data-r]'),function(x){x.classList.toggle('is-on',r!==''&&x.getAttribute('data-r')===String(r))})}
window.AQcoverage=lit;
document.addEventListener('mouseover',function(ev){var row=ev.target.closest&&ev.target.closest('.aq-coverage-map__row,.aq-coverage-map__tile');if(!row)return;var w=row.closest('.aq-coverage-map');if(w)lit(w,row.getAttribute('data-r'))});
document.addEventListener('focusin',function(ev){var row=ev.target.closest&&ev.target.closest('.aq-coverage-map__row,.aq-coverage-map__tile');if(!row)return;var w=row.closest('.aq-coverage-map');if(w)lit(w,row.getAttribute('data-r'))});
document.addEventListener('click',function(ev){var t=ev.target.closest&&ev.target.closest('[data-cov]');if(!t)return;var row=document.getElementById(t.getAttribute('data-cov'));if(!row)return;
 var w=t.closest('.aq-coverage-map');if(w)lit(w,row.getAttribute('data-r'));
 row.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'})});
})();
