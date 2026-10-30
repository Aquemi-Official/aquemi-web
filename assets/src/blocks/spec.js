/* Block "spec" -> SpecTable (spec sheet: two-column matrix).
   Fields: h, caption, cols, rows [{p, v, m, hl, link}], note. Rows keep their order. hl rows at the top of the list are
   full-width bands (is-highlight is-lead); an hl row further down is tinted in place, so sequences are never broken.
   link: a page id, shown as a quiet "Page name →" link after the basis. The caption is the section's eyebrow (above h)
   and the table's visually hidden <caption>; it is never printed a second time above the table.
   CSS changes the table's display, so explicit ARIA table roles keep its semantics in every browser.
   A lead hl row whose value holds a number is a readout: its limit set huge on a navy panel (aria-hidden; the value
   cell still carries the full text).
   Shapes (field as): "gauges" -> LimitGauges, "rules" -> LimitGauges rule bars (rules.js), "callouts" -> ParameterCallouts (below). */
function wSpecTable(b,rows,foldAt,noun){var cols=b.cols||['Parameter','Specification','Method or reference'],lead=true;
  var body=rows.map(function(r,i){
    var hl=!!r.hl,cls=hl?(lead?'is-highlight is-lead':'is-highlight'):'';if(!hl)lead=false;
    var lp=r.link&&wp(r.link),lk=lp?'<a class="aq-spec__link" href="#'+e(r.link)+'" data-wp="'+e(r.link)+'">'+tx(lp.nav_label||r.link)+'</a>':'';
    /* Lead rows with a number become a readout (concept 26): the limit huge in condensed figures on a navy panel */
    var g=hl&&lead?gaugeParse(r.v):null,rd=g?'<td class="aq-spec__read" aria-hidden="true"><span class="aq-spec__read-n">'+e((g.c?g.c+' ':'')+g.t)+'</span>'+(g.u?'<span class="aq-spec__read-u">'+tx(g.u)+'</span>':'')+'</td>':'';
    return fli('<tr role="row"'+(cls?' class="'+cls+(rd?' is-readout" data-theme="dark"':'"'):''),{fold:foldAt===0?-1:foldAt},i)+'>'+rd+'<th scope="row" role="rowheader">'+tx(r.p)+'</th><td role="cell" class="aq-spec__value">'+tx(r.v)+'</td><td role="cell" class="aq-spec__method">'+tx(r.m||'')+(r.m&&lk?' ':'')+lk+'</td></tr>';
  }).join('');
  var t='<table class="aq-spec'+(foldAt===0?' aq-fold-x':'')+'" role="table"><caption>'+tx(b.caption||b.h||'')+'</caption><thead role="rowgroup"><tr role="row">'+cols.map(function(c){return '<th scope="col" role="columnheader">'+e(c)+'</th>'}).join('')+'</tr></thead><tbody role="rowgroup">'+body+'</tbody></table>';
  if(!(foldAt>=0)||rows.length<=foldAt)return t;
  /* foldAt 0 (every remaining row folded, the callouts above already show the first ones): "Show 5 more parameters" */
  var id='fold-'+(++foldN),all=(foldAt?'Show all ':'Show ')+rows.length+(foldAt?' ':' more ')+(noun||'parameters');
  return '<div class="aq-fold" id="'+id+'">'+t+'<button type="button" class="aq-fold__btn" aria-expanded="false" aria-controls="'+id+'" data-more="'+e(all)+'">'+e(all)+'</button></div>'}
BLOCKS['spec']=function(b,H){
  var rows=b.rows||[],head=wSecHead({eyebrow:b.caption,h:b.h,intro:b.intro}),note=b.note?'<p class="aq-small">'+tx(b.note)+'</p>':'';
  if(b.as==='gauges')return sec(head+'<div class="aq-stack">'+wGauges(b,rows)+note+'</div>');
  if(b.as==='rules')return sec(head+'<div class="aq-stack">'+wRules(b,rows)+note+'</div>');/* blocks/rules.js */
  if(b.as==='callouts'&&ART[WP]){var c=wCallouts(b,rows);if(c)return sec(head+c+note)}
  return sec(head+'<div class="aq-stack">'+(b.fold>0?wSpecTable(b,rows,b.fold,b.fold_noun):wSpecTable(b,rows))+note+'</div>');
};

/* ---------- "as": "gauges" -> LimitGauges ----------
   Each row becomes an instrument face on a cream drawing plate: a heavy scale arc with major and minor ticks and scale
   numbers, the limit as an ink pointer with a "LIMIT ≤ 1.3" tag, a needle from the pivot resting on the limit (there is
   no measured value, so the needle never shows a reading), the side that passes as a flow band (below the limit for ≤
   and <, above it for ≥ and >), the limit as a large mono readout bottom right and the full value and basis as a small
   spec list bottom left. Only the row's own number is used: the first "≤ 1.3 µS/cm" in v (outside [placeholders]), or a
   v that opens with a number (an action level, read as an upper limit). The scale is derived from that limit alone:
   0 to the next round number at least 20 % above it (5 % for ≥ and >), so its numbers are a ruler, not data.
   A row with no number (placeholder, "Not required") is a readout cell: the same cell, the value as the readout, no dial.
   A row named "outlet" or "guaranteed" whose v has a number in the same unit as a limit adds a dashed second marker on
   that dial, at its place on the scale; a placeholder adds nothing.
   The basis (m) prints with standard names (USP <645>, Ph. Eur. 0008, EN 285 …) as tags. */
var GAUGE_STD=/(USP <\d+>|Ph\. Eur\. \d[\d.]*|EN \d+|ASTM [A-Z]\d+|Annex 1(?:, \d+\.\d+)?|ISO \d+|ASME BPE|GAMP 5|21 CFR Part 11)/;
/* q: the rest of the value around "≤ 1.3 µS/cm" (qualifiers such as "@ 25 °C (stage 1)"); a unit too long for the
   readout (over 8 characters) stays in q. Placeholders are blanked at their own length so indexes match v. */
function gaugeParse(v){v=String(v||'');var s=v.replace(/\[[^\]]*\]/g,function(x){return Array(x.length+1).join(' ')}),m=s.match(/([≤<≥>])\s*(\d+(?:\.\d+)?)\s*([^@(;,]*)/),c;
  if(m)c=m[1];else{m=s.match(/^\s*()(\d+(?:\.\d+)?)\s*([^@(;,]*)/);c=''}
  if(!m)return null;
  var u=m[3].replace(/\s+(on|of|at|in|for|to|when|before|after)\s.*$/,'').trim(),k=m.index+m[0].length-m[3].length,
   end=u&&u.length<=8?k+m[3].indexOf(u)+u.length:k,pre=v.slice(0,m.index).trim(),post=v.slice(end).trim();
  return {c:c,n:parseFloat(m[2]),t:m[2],u:u,q:(pre&&post?pre+' · '+post:pre||post)}}
function gaugeBasis(m){var p=String(m||'').split(GAUGE_STD);return p.map(function(s,i){return i%2?'<span class="aq-tag">'+e(s)+'</span>':i&&i<p.length-1&&/^\s*;\s*$/.test(s)?' ':/\S/.test(s)?'<span class="aq-limit-gauges__mt">'+tx(s)+'</span>':tx(s)}).join('')}
/* Scale from the limit only: [max, major divisions]. Round maxima 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8 (x 10^k). */
function gaugeScale(n,up){var t=n>0?n*(up?1.05:1.2):1,k=Math.pow(10,Math.floor(Math.log(t)/Math.LN10)),M=[[1,5],[1.5,3],[2,4],[2.5,5],[3,3],[4,4],[5,5],[6,3],[8,4],[10,5]];
  for(var i=0;i<M.length;i++)if(M[i][0]*k>=t*(1-1e-9))return [M[i][0]*k,M[i][1]];return [10*k,5]}
function gaugeNum(v){return String(parseFloat(v.toFixed(6)))}
/* Geometry: viewBox 0 10 240 144, pivot (120,128), the scale sweeps 160° to 20°. The readout sits bottom right on a
   hairline at y 146 run from the pivot's vertical (number above it, caption below), as on a panel meter. */
function gaugePt(f,r){var a=(160-140*f)*Math.PI/180;return [120+r*Math.cos(a),128-r*Math.sin(a)]}
function gaugeArc(f0,f1,r){var p=gaugePt(f0,r),q=gaugePt(f1,r);return 'M'+p[0].toFixed(1)+' '+p[1].toFixed(1)+' A'+r+' '+r+' 0 0 1 '+q[0].toFixed(1)+' '+q[1].toFixed(1)}
function gaugeLn(f,r0,r1,cls){var p=gaugePt(f,r0),q=gaugePt(f,r1);return '<line'+(cls?' class="'+cls+'"':'')+' x1="'+p[0].toFixed(1)+'" y1="'+p[1].toFixed(1)+'" x2="'+q[0].toFixed(1)+'" y2="'+q[1].toFixed(1)+'"/>'}
function wDial(g,second,read){var up=g.c==='≥'||g.c==='>',S=gaugeScale(g.n,up),max=S[0],div=S[1],L=Math.min(g.n/max,1),i,ticks='',nums='';
  for(i=0;i<=div*5;i++){var f=i/(div*5),maj=i%5===0;ticks+=gaugeLn(f,96,maj?85:90,maj?'is-major':'');
    if(maj&&Math.abs(f-L)>0.09){var p=gaugePt(f,107);nums+='<text'+(i===0||i===div*5?' class="is-end"':'')+' x="'+p[0].toFixed(1)+'" y="'+(p[1]+3).toFixed(1)+'">'+gaugeNum(max*i/(div*5))+'</text>'}}
  var a=(160-140*L)*Math.PI/180,tip=gaugePt(L,97),w1=gaugePt(L,104),ca=Math.cos(a),sa=Math.sin(a),
   ptr='M'+tip[0].toFixed(1)+' '+tip[1].toFixed(1)+' L'+(w1[0]-4*sa).toFixed(1)+' '+(w1[1]-4*ca).toFixed(1)+' L'+(w1[0]+4*sa).toFixed(1)+' '+(w1[1]+4*ca).toFixed(1)+'Z';
  /* Limit chip: beside the pointer on the left half of the arc; past the crown it parks in the dial's top right corner,
     clear of the scale, so it never sits on the ticks of a limit near the end of the scale */
  var tag=gaugePt(L,112),right=tag[0]>150,pos=right?'right:0;top:0':'left:'+(tag[0]/2.4).toFixed(1)+'%;top:'+((tag[1]-10)/144*100).toFixed(1)+'%';
  var two=second?gaugeLn(Math.min(second.f,1),96,66,'aq-limit-gauges__second'):'',p2=second&&gaugePt(Math.min(second.f,1),58);
  return '<div class="aq-limit-gauges__dial" aria-hidden="true"><svg viewBox="0 10 240 144" focusable="false">'
   +'<path class="aq-limit-gauges__inner" d="'+gaugeArc(0,1,68)+'"/>'
   +'<path class="aq-limit-gauges__pass" d="'+(up?gaugeArc(L,1,76):gaugeArc(0,L,76))+'"/>'
   +'<path class="aq-limit-gauges__track" d="'+gaugeArc(0,1,96)+'"/><g class="aq-limit-gauges__ticks">'+ticks+'</g>'
   +'<g class="aq-limit-gauges__nums">'+nums+'</g>'+two
   +'<g class="aq-limit-gauges__cross"><line x1="106" y1="128" x2="134" y2="128"/><line x1="120" y1="104" x2="120" y2="154"/><line x1="120" y1="146" x2="240" y2="146"/></g>'
   +gaugeLn(L,0,92,'aq-limit-gauges__needle')+'<circle class="aq-limit-gauges__pivot" cx="120" cy="128" r="3"/>'
   +gaugeLn(L,96,82,'aq-limit-gauges__limit')+'<path class="aq-limit-gauges__ptr" d="'+ptr+'"/></svg>'
   +'<span class="aq-limit-gauges__mark'+(right?' is-right':'')+'" style="'+pos+'"><span class="aq-limit-gauges__mark-k">Limit </span>'+e((g.c?g.c+' ':'')+g.t)+'</span>'
   +(second?'<span class="aq-limit-gauges__mark aq-limit-gauges__mark--second" style="left:'+(p2[0]/2.4).toFixed(1)+'%;top:'+((p2[1]-10)/144*100).toFixed(1)+'%">'+e(second.t)+'</span>':'')+(read||'')+'</div>'}
function wGauges(b,rows){
  var P=rows.map(function(r){return gaugeParse(r.v)}),outlet=/outlet|guarantee/i,sec2={};
  rows.forEach(function(r,i){var o=P[i];if(!o||!outlet.test(r.p))return;
    P.forEach(function(g,j){if(sec2[j]||j===i||!g||outlet.test(rows[j].p)||g.u!==o.u||g.c==='≥'||g.c==='>'||!(o.n<g.n))return;sec2[j]={f:o.n/gaugeScale(g.n,false)[0],t:o.t}});P[i]=null});
  var list=rows.map(function(r,i){var g=P[i],up=g&&(g.c==='≥'||g.c==='>');
    /* Readout: the limit with a short unit; a long one ("mL per 100 mL") stays in the spec list only */
    var read=g?'<span class="aq-limit-gauges__read"><span class="aq-limit-gauges__line"><span class="aq-limit-gauges__num">'+e((g.c?g.c+' ':'')+g.t)+'</span>'+(g.u&&g.u.length<=8?' <span class="aq-limit-gauges__unit">'+tx(g.u)+'</span>':'')
      +'</span><span class="aq-limit-gauges__cap'+(g.q?' is-q">'+tx(g.q):'">'+(up?'Lower limit':'Upper limit'))+'</span></span>':'';
    /* With a dial the chip and readout show the limit, so the full value is kept for screen readers only */
    var spec='<dl class="aq-limit-gauges__spec"><div'+(g?' class="aq-limit-gauges__sr"':'')+'><dt>'+(g?'Limit':'Value')+'</dt><dd class="aq-limit-gauges__v">'+tx(r.v)+'</dd></div>'
      +(r.m?'<div><dt>Basis</dt><dd class="aq-limit-gauges__m">'+gaugeBasis(r.m)+'</dd></div>':'')+'</dl>';
    return fli('<li class="aq-limit-gauges__item'+(g?'':' is-readout')+(r.hl?' is-key':'')+'">',b,i)
     +'<h3 class="aq-limit-gauges__p">'+tx(r.p)+'</h3>'+(g?wDial(g,sec2[i],read):'')
     +'<div class="aq-limit-gauges__foot">'+spec+'</div></li>'}).join('');
  return wPlate(wFold(b,rows.length,'<ul class="aq-limit-gauges" role="list">'+list+'</ul>',b.fold_noun||'limits'),{light:true,block:['Aquemi',b.caption||'Limits']})}

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
