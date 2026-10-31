/* Table as "grades" -> GradeLanes: the minimum water grade, step by step. Fields as a table; the grade column is the
   first whose name says grade or water (or b.grade, its index). Each row: index, the step (first other column), the
   other columns as quieter lines, the grade cell in mono, and three lanes at the right (Potable, PW, WFI) running the
   height of the list like pipes. The first grade named in the cell gets a filled tap, any alternative an open one;
   a cell that names none ("same grade as the product") leaves the lanes empty. Phones keep the lanes. */
var LANES=[['Potable',/potable|softened|drinking/i],['PW',/\bPW\b|purified/i],['WFI',/\bWFI\b|for injection/i]];
TABLE_AS.grades=function(b,H){var C=b.cols||[],R=b.rows||[];
 var g=b.grade!=null?b.grade:C.map(function(c,i){return /grade|water/i.test(c)?i:-1}).filter(function(i){return i>=0})[0];if(g==null)g=C.length-1;
 var other=C.map(function(c,i){return i}).filter(function(i){return i!==g});
 function lanes(cell){var s=String(cell&&cell.t||cell||''),hit=LANES.map(function(l){var m=l[1].exec(s);return m?m.index:-1}),first=Math.min.apply(null,hit.filter(function(x){return x>=0}));
  return LANES.map(function(l,i){return '<span class="aq-grades__lane"><span class="aq-grades__tap'+(hit[i]<0?'':hit[i]===first?' is-min':' is-alt')+'"></span></span>'}).join('')}
 return sec(H+'<div class="aq-grades"><div class="aq-grades__head"><span>'+tx(C[other[0]]||'')+'</span><span class="aq-grades__lanes">'+LANES.map(function(l){return '<span>'+l[0]+'</span>'}).join('')+'</span></div>'
  +'<ol class="aq-grades__rows">'+R.map(function(r,i){var s=String(r[g]&&r[g].t||r[g]||'');
   return fli('<li class="aq-grades__row">',b,i)+idx(i)+'<div class="aq-grades__step"><h3 class="aq-grades__t">'+tcell(r[other[0]])+'</h3>'
    +other.slice(1).map(function(k){return r[k]?'<p class="aq-grades__d">'+tcell(r[k])+'</p>':''}).join('')
    +'<p class="aq-grades__g">'+tcell(r[g])+'</p></div>'
    +'<span class="aq-grades__lanes" role="img" aria-label="'+e(s)+'">'+lanes(r[g])+'</span></li>'}).join('')+'</ol></div>');};
