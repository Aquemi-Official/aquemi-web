/* Block "spec" -> SpecTable (spec sheet: two-column matrix).
   Fields: h, caption, cols, rows [{p, v, m, hl, link}], note. Rows keep their order. hl rows at the top of the list are
   full-width bands (is-highlight is-lead); an hl row further down is tinted in place, so sequences are never broken.
   link: a page id, shown as a quiet "Page name →" link after the basis. The caption is the section's eyebrow (above h)
   and the table's visually hidden <caption>; it is never printed a second time above the table.
   CSS changes the table's display, so explicit ARIA table roles keep its semantics in every browser.
   Shapes (field as): "gauges" -> LimitGauges, "callouts" -> ParameterCallouts (below). */
function wSpecTable(b,rows,foldAt,noun){var cols=b.cols||['Parameter','Specification','Method or reference'],lead=true;
  var body=rows.map(function(r,i){
    var hl=!!r.hl,cls=hl?(lead?'is-highlight is-lead':'is-highlight'):'';if(!hl)lead=false;
    var lp=r.link&&wp(r.link),lk=lp?'<a class="aq-spec__link" href="#'+e(r.link)+'" data-wp="'+e(r.link)+'">'+tx(lp.nav_label||r.link)+'</a>':'';
    return fli('<tr role="row"'+(cls?' class="'+cls+'"':''),{fold:foldAt===0?-1:foldAt},i)+'><th scope="row" role="rowheader">'+tx(r.p)+'</th><td role="cell" class="aq-spec__value">'+tx(r.v)+'</td><td role="cell" class="aq-spec__method">'+tx(r.m||'')+(r.m&&lk?' ':'')+lk+'</td></tr>';
  }).join('');
  var t='<table class="aq-spec'+(foldAt===0?' aq-fold-x':'')+'" role="table"><caption>'+tx(b.caption||b.h||'')+'</caption><thead role="rowgroup"><tr role="row">'+cols.map(function(c){return '<th scope="col" role="columnheader">'+e(c)+'</th>'}).join('')+'</tr></thead><tbody role="rowgroup">'+body+'</tbody></table>';
  if(!(foldAt>=0)||rows.length<=foldAt)return t;
  /* foldAt 0 (every remaining row folded, the callouts above already show the first ones): "Show 5 more parameters" */
  var id='fold-'+(++foldN),all=(foldAt?'Show all ':'Show ')+rows.length+(foldAt?' ':' more ')+(noun||'parameters');
  return '<div class="aq-fold" id="'+id+'">'+t+'<button type="button" class="aq-fold__btn" aria-expanded="false" aria-controls="'+id+'" data-more="'+e(all)+'">'+e(all)+'</button></div>'}
BLOCKS['spec']=function(b,H){
  var rows=b.rows||[],head=wSecHead({eyebrow:b.caption,h:b.h,intro:b.intro}),note=b.note?'<p class="aq-small">'+tx(b.note)+'</p>':'';
  if(b.as==='gauges')return sec(head+'<div class="aq-stack">'+wGauges(b,rows)+note+'</div>');
  if(b.as==='callouts'&&ART[WP]){var c=wCallouts(b,rows);if(c)return sec(head+c+note)}
  return sec(head+'<div class="aq-stack">'+(b.fold>0?wSpecTable(b,rows,b.fold,b.fold_noun):wSpecTable(b,rows))+note+'</div>');
};

/* ---------- "as": "gauges" -> LimitGauges ----------
   Each row becomes a small instrument: an arc scale with the limit marked at three quarters of the arc and the side
   that passes drawn in flow (below the limit for ≤ and <, above it for ≥ and >). Only the row's own number is used:
   the first "≤ 1.3 µS/cm" in v (outside [placeholders]), or a v that opens with a number (an action level, read as an
   upper limit). The scale has no other numbers, so nothing is invented. A row with no number (placeholder, "Not
   required") is a plain readout cell. A row named "outlet" or "guaranteed" whose v has a number in the same unit as a
   limit below it adds a second marker on that gauge, in proportion; a placeholder adds nothing.
   The basis (m) prints under the value with standard names (USP <645>, Ph. Eur. 0008, EN 285 …) as tags. */
var GAUGE_STD=/(USP <\d+>|Ph\. Eur\. \d[\d.]*|EN \d+|ASTM [A-Z]\d+|Annex 1(?:, \d+\.\d+)?|ISO \d+|ASME BPE|GAMP 5|21 CFR Part 11)/;
function gaugeParse(v){var s=String(v||'').replace(/\[[^\]]*\]/g,' '),m=s.match(/([≤<≥>])\s*(\d+(?:\.\d+)?)\s*([^@(;,]*)/),c;
  if(m)c=m[1];else{m=s.match(/^\s*()(\d+(?:\.\d+)?)\s*([^@(;,]*)/);c=''}
  if(!m)return null;
  return {c:c,n:parseFloat(m[2]),t:m[2],u:m[3].replace(/\s+(on|of|at|in|for|to|when|before|after)\s.*$/,'').trim()}}
function gaugeBasis(m){var p=String(m||'').split(GAUGE_STD);return p.map(function(s,i){return i%2?'<span class="aq-tag">'+e(s)+'</span>':i&&i<p.length-1&&/^\s*;\s*$/.test(s)?' ':tx(s)}).join('')}
function gaugePt(f,r){var a=(160-140*f)*Math.PI/180;return [100+r*Math.cos(a),98-r*Math.sin(a)]}
function gaugeArc(f0,f1,r){var p=gaugePt(f0,r),q=gaugePt(f1,r);return 'M'+p[0].toFixed(1)+' '+p[1].toFixed(1)+' A'+r+' '+r+' 0 0 1 '+q[0].toFixed(1)+' '+q[1].toFixed(1)}
function wDial(g,second){var L=0.75,up=g.c==='≥'||g.c==='>',ticks='',i;
  for(i=0;i<=20;i++){var f=i/20,maj=i%5===0,p=gaugePt(f,86),q=gaugePt(f,maj?77:81);ticks+='<line x1="'+p[0].toFixed(1)+'" y1="'+p[1].toFixed(1)+'" x2="'+q[0].toFixed(1)+'" y2="'+q[1].toFixed(1)+'"'+(maj?' class="is-major"':'')+'/>'}
  var a=gaugePt(L,92),b2=gaugePt(L,62),pos=function(f){var p=gaugePt(f,92);return 'left:'+(p[0]/2).toFixed(1)+'%;top:'+((p[1]+14)/94*100).toFixed(1)+'%'};
  var two=second?'<line class="aq-limit-gauges__second" x1="'+gaugePt(second.f,92)[0].toFixed(1)+'" y1="'+gaugePt(second.f,92)[1].toFixed(1)+'" x2="'+gaugePt(second.f,62)[0].toFixed(1)+'" y2="'+gaugePt(second.f,62)[1].toFixed(1)+'"/>':'';
  return '<div class="aq-limit-gauges__dial" aria-hidden="true"><svg viewBox="0 -14 200 94" focusable="false">'
   +'<path class="aq-limit-gauges__track" d="'+gaugeArc(0,1,86)+'"/><g class="aq-limit-gauges__ticks">'+ticks+'</g>'
   +'<path class="aq-limit-gauges__pass" d="'+(up?gaugeArc(L,1,70):gaugeArc(0,L,70))+'"/>'
   +two+'<line class="aq-limit-gauges__limit" x1="'+a[0].toFixed(1)+'" y1="'+a[1].toFixed(1)+'" x2="'+b2[0].toFixed(1)+'" y2="'+b2[1].toFixed(1)+'"/></svg>'
   +'<span class="aq-limit-gauges__mark" style="'+pos(L)+'">'+e((g.c?g.c+' ':'')+g.t)+'</span>'
   +(second?'<span class="aq-limit-gauges__mark aq-limit-gauges__mark--second" style="'+pos(second.f)+'">'+e(second.t)+'</span>':'')+'</div>'}
function wGauges(b,rows){
  var P=rows.map(function(r){return gaugeParse(r.v)}),outlet=/outlet|guarantee/i,sec2={};
  rows.forEach(function(r,i){var o=P[i];if(!o||!outlet.test(r.p))return;
    P.forEach(function(g,j){if(sec2[j]||j===i||!g||outlet.test(rows[j].p)||g.u!==o.u||g.c==='≥'||g.c==='>'||!(o.n<g.n))return;sec2[j]={f:0.75*o.n/g.n,t:o.t}});P[i]=null});
  var list=rows.map(function(r,i){var g=P[i];
    return fli('<li class="aq-limit-gauges__item'+(g?'':' is-readout')+(r.hl?' is-key':'')+'">',b,i)
     +'<h3 class="aq-limit-gauges__p">'+tx(r.p)+'</h3>'+(g?wDial(g,sec2[i]):'')
     +'<p class="aq-limit-gauges__v">'+tx(r.v)+'</p>'+(r.m?'<p class="aq-limit-gauges__m">'+gaugeBasis(r.m)+'</p>':'')+'</li>'}).join('');
  return wFold(b,rows.length,'<ul class="aq-limit-gauges" role="list">'+list+'</ul>',b.fold_noun||'limits')}

/* ---------- "as": "callouts" -> ParameterCallouts ----------
   The page's own equipment drawing (ART[page id], the Illustration mask the hero uses) with leader lines to numbered
   labels, the hero's callout approach at section scale. A row becomes a callout when it has at: [x, y], the point on
   the drawing it names in percent of the square drawing box, and sits inside the fold. Up to three callouts per side
   (left of the middle goes left); labels on each side run top to bottom in the order of their points, so leaders never
   cross, and are numbered in that reading order (left column, then right). Every other row, folded ones included, lists underneath as normal spec rows. Phones: the drawing with its
   numbers on top, the numbered list below (the same numbers). Desktop geometry: a 200 x 100 box, labels 0-50 and
   150-200, the drawing 50-150. */
function wCallouts(b,rows){
  var lim=b.fold>0?b.fold:rows.length,pick=[],rest=[],side={l:[],r:[]};
  rows.forEach(function(r,i){var a=r.at,s=a&&(a[0]<50?'l':'r');
    if(a&&i<lim&&side[s].length<3){side[s].push(pick.length);pick.push(r)}else rest.push({r:r,i:i})});
  if(!pick.length)return '';
  var slot={},lines='';
  ['l','r'].forEach(function(s){var n=side[s].sort(function(x,y){return pick[x].at[1]-pick[y].at[1]});
    n.forEach(function(k,j){var y=n.length===1?0:j===n.length-1?100:j*35,x0=s==='l'?50:150,a=pick[k].at,ax=50+a[0],ay=a[1];
      slot[k]={s:s,y:y};lines+='<line x1="'+x0+'" y1="'+y+'" x2="'+ax+'" y2="'+ay+'"/>'})});
  var ord=side.l.concat(side.r);/* numbered in reading order: left column top to bottom, then right */
  var pins=ord.map(function(k,j){var r=pick[k];return '<span class="aq-parameter-callouts__pin" style="left:'+r.at[0]+'%;top:'+r.at[1]+'%">'+(j<9?'0':'')+(j+1)+'</span>'}).join('');
  var labels=ord.map(function(k,j){var r=pick[k],p=slot[k],up=p.y===100;
    return '<li class="aq-parameter-callouts__item is-'+p.s+(up?' is-up':'')+'" style="'+(up?'bottom:0':'top:'+p.y+'%')+'">'+idx(j)
     +'<h3 class="aq-parameter-callouts__p">'+tx(r.p)+'</h3><p class="aq-parameter-callouts__v">'+tx(r.v)+'</p>'+(r.m?'<p class="aq-parameter-callouts__m">'+tx(r.m)+'</p>':'')+'</li>'}).join('');
  var fig='<div class="aq-parameter-callouts"><div class="aq-parameter-callouts__fig"><svg class="aq-parameter-callouts__leaders" viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">'+lines+'</svg>'
   +'<div class="aq-parameter-callouts__art"><span class="aq-illustration" role="img" aria-label="'+e(ART[WP])+'" style="'+artMask(WP)+'"></span>'+'<span class="aq-parameter-callouts__pins" aria-hidden="true">'+pins+'</span></div>'
   +'<ol class="aq-parameter-callouts__list" role="list">'+labels+'</ol></div>';
  if(rest.length){var k=b.fold>0?rest.filter(function(x){return x.i<b.fold}).length:-1;
    fig+=wSpecTable(b,rest.map(function(x){return x.r}),k,b.fold_noun)}
  return fig+'</div>'}
