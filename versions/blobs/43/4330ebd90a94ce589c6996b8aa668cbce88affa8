/* Table as "grades" -> GradeLanes: the minimum water grade, step by step. Fields as a table; the grade column is the
   first whose name says grade or water (or b.grade, its index). Each row: index, the step (first other column), the
   other columns as quieter lines, the grade cell in mono, and three lanes at the right (Potable, PW, WFI) running the
   height of the list like pipes. The first grade named in the cell gets a filled tap, any alternative an open one;
   a branch pipe runs from the step to that tap. A cell that names none but says "same" ("same grade as the product") gets
   an open dashed tap on every lane under a "= product" mark; any other cell leaves the lanes empty. On a plate; phones
   keep the lanes. Plate caption: "Aquemi · <nav>", then "N <noun>" only when the block names its rows (caption_noun,
   else fold_noun; wCount in core.js), so a table of products never reads "4 steps". */
var LANES=[['Potable',/potable|softened|drinking/i],['PW',/\bPW\b|purified/i],['WFI',/\bWFI\b|for injection/i]];
TABLE_AS.grades=function(b,H){var C=b.cols||[],R=b.rows||[];
 var g=b.grade!=null?b.grade:C.map(function(c,i){return /grade|water/i.test(c)?i:-1}).filter(function(i){return i>=0})[0];if(g==null)g=C.length-1;
 var other=C.map(function(c,i){return i}).filter(function(i){return i!==g});
 function lanes(cell){var s=String(cell&&cell.t||cell||''),hit=LANES.map(function(l){var m=l[1].exec(s);return m?m.index:-1}),pos=hit.filter(function(x){return x>=0}),first=Math.min.apply(null,pos);
  if(!pos.length&&/same/i.test(s))return '<span class="aq-grades__lanes is-same" aria-label="'+e(s)+'" role="img">'+LANES.map(function(){return '<span class="aq-grades__lane"><span class="aq-grades__tap is-same"></span></span>'}).join('')+'<span class="aq-grades__same" aria-hidden="true">= product</span></span>';
  var m=hit.indexOf(first);
  return '<span class="aq-grades__lanes'+(pos.length?' is-hit-'+m:'')+'" role="img" aria-label="'+e(s)+'">'+LANES.map(function(l,i){return '<span class="aq-grades__lane"><span class="aq-grades__tap'+(hit[i]<0?'':hit[i]===first?' is-min':' is-alt')+'"></span></span>'}).join('')+'</span>'}
 return sec(H+wPlate('<div class="aq-grades"><div class="aq-grades__head"><span>'+tx(C[other[0]]||'')+'</span><span class="aq-grades__lanes">'+LANES.map(function(l){return '<span>'+l[0]+'</span>'}).join('')+'</span></div>'
  +wFold(b,R.length,'<ol class="aq-grades__rows">'+R.map(function(r,i){var s=String(r[g]&&r[g].t||r[g]||'');
   return fli('<li class="aq-grades__row">',b,i)+idx(i)+'<div class="aq-grades__step"><h3 class="aq-grades__t">'+tcell(r[other[0]])+'</h3>'
    +other.slice(1).map(function(k){return r[k]?'<p class="aq-grades__d">'+tcell(r[k])+'</p>':''}).join('')
    +'<p class="aq-grades__g">'+tcell(r[g])+'</p></div>'
    +lanes(r[g])+'</li>'}).join('')+'</ol>',b.fold_noun||'steps')+'</div>',{block:['Aquemi',b.nav||'Water grades',wCount(b,R.length)]}));};
