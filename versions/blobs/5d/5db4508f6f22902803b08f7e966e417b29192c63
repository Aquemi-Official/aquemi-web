/* Block "prose" -> Prose in SplitSection: heading left, text right. Fields: h, body (paragraphs); "as": "explainer" (below).
   The first sentence of body[0] is set as the lead; the rest follow as plain paragraphs. No grid, frame or margin notes
   (an old "notes" field is ignored). Standards and figures stay inline in the text. */
(function(){
var ABBR=/(?:^|[\s(])(?:Ph|Eur|e\.g|i\.e|No|St|Dr|vs|etc|approx|Fig|Inc|Ltd|Co)$/;
/* [start,end) ranges inside square brackets, nesting-aware */
function holes(s){var r=[],d=0,st=0;for(var i=0;i<s.length;i++){var c=s.charAt(i);if(c==='['){if(!d)st=i;d++}else if(c===']'&&d){d--;if(!d)r.push([st,i+1])}}if(d)r.push([st,s.length]);return r}
function inHole(h,a,b){for(var i=0;i<h.length;i++)if(a<h[i][1]&&b>h[i][0])return true;return false}
/* Split off the first sentence: ends at . ! ? outside brackets, before a capital, digit or bracket, not after an abbreviation */
function lead(s){var h=holes(s);for(var i=0;i<s.length;i++){var c=s.charAt(i);if((c==='.'||c==='!'||c==='?')&&!inHole(h,i,i+1)){var m=s.slice(i+1).match(/^\s+(?=[A-Z0-9\[“"])/);if(m&&!ABBR.test(s.slice(0,i)))return [s.slice(0,i+1),s.slice(i+1+m[0].length)]}}return [s,'']}
BLOCKS['prose']=function(b,H){
 if(b.as==='explainer'&&(b.points||[]).length)return explainer(b,H);
 var body=(b.body||[]).filter(function(x){return x}).map(String);
 if(!body.length)return split(H,'<div class="aq-prose"></div>');
 var l=lead(body[0]),paras=(l[1]?[l[1]]:[]).concat(body.slice(1));
 return split(H,'<div class="aq-prose aq-prose--sheet"><p class="aq-prose__lead">'+tx(l[0])+'</p>'+paras.map(function(p){return '<p>'+tx(p)+'</p>'}).join('')+'</div>');
};
/* "as": "explainer" -> Explainer: one idea as a figure plus 3-4 numbered callouts instead of paragraphs (heading above,
   full width). Fields: h, points [{t, d, at}] (d <= 25 words; at: [x%, y%] puts the point's number on an art figure),
   figure (optional): {kind: "levels", limit: {v, unit, label}, bars: [{label, v, level, note, n}]} draws bars against a
   dashed limit (v in the limit's unit sets the height and is printed on the plot, which is
   aria-hidden, so say the value in the note too; without v, level "below" | "at" | "above" draws
   it unnumbered; n puts a point's number on the bar), or {kind: "art", art: "<page id>"} shows that page's equipment
   drawing (ART in parts/Hero.js) with the points' numbers on it. No figure: the callouts alone, two columns. */
function exNum(n){return '<span class="aq-explainer__mark" aria-hidden="true">'+n+'</span>'}
/* Point heads are set in uppercase mono; units keep their case ("EU/mL", not "EU/ML"). */
var EX_UNIT=/(EU\/mL|µS\/cm|mg\/L|ng\/L|cfu\/\d+\s?mL|mL|ppb|ppm|pH|°C|m³\/h|L\/h|kg|nm)/;
function exHead(t){return String(t||'').split(EX_UNIT).map(function(x,i){return i%2?'<span class="aq-explainer__unit">'+tx(x)+'</span>':tx(x)}).join('')}
/* Levels: test-tube columns with a scale, filled to a value; the limit a dashed fail rule labelled in fail. Each bar is
   annotated from its own position against the limit: below it a dimension line marks the margin, at or above it
   "No margin". */
function exLevels(f){var L=f.limit||{},u=L.unit?' '+L.unit:'',AT=70;
 var bars=(f.bars||[]).map(function(r){var h,lv=r.level,num=typeof r.v==='number'&&typeof L.v==='number'&&L.v>0;
  if(num){var q=r.v/L.v;h=Math.max(6,Math.min(96,AT*q));lv=q<1?'below':q>1?'above':'at'}else h=lv==='at'?AT:lv==='above'?92:AT*0.4;
  return {r:r,h:Math.round(h),lv:lv||'below',num:num}});
 return '<figure class="aq-explainer__fig aq-levels" style="--cols:'+bars.length+'">'
  +'<div class="aq-levels__plot" aria-hidden="true" style="--at:'+AT/100+'"><div class="aq-levels__limit"><span>'+tx(L.label||((L.v!=null?L.v:'')+u+' limit'))+'</span></div>'
  +bars.map(function(x){return '<div class="aq-levels__col"><span class="aq-levels__tube" style="--h:'+x.h+'%"><span class="aq-levels__glass"><span class="aq-levels__fill is-'+x.lv+'"></span></span>'
   +'<span class="aq-levels__top">'+(x.r.n?exNum(x.r.n):'')+(x.num?'<span class="aq-levels__v">'+tx((x.r.shown||x.r.v)+u)+'</span>':'')+'</span>'
   +(x.lv==='below'?'<span class="aq-levels__gap is-margin"><span>Margin</span></span>':'<span class="aq-levels__gap is-none"><span>No margin</span></span>')
   +'</span></div>'}).join('')+'</div>'
  +'<figcaption class="aq-levels__keys">'+bars.map(function(x){return '<p class="aq-levels__key"><span class="aq-levels__label">'+exHead(x.r.label)+'</span>'
   +(x.r.note?'<span class="aq-levels__note">'+tx(x.r.note)+'</span>':'')+'</p>'}).join('')+'</figcaption></figure>'}
function exArt(f,P){var id=f.art;if(!id||!ART[id])return '';
 return '<figure class="aq-explainer__fig aq-explainer__fig--art"><span class="aq-illustration" role="img" aria-label="'+e(ART[id])+'" style="'+artMask(id)+'"></span>'
  +P.map(function(p,i){var a=p.at;return a&&a.length===2?'<span class="aq-explainer__pin" style="left:'+(+a[0])+'%;top:'+(+a[1])+'%">'+exNum(i+1)+'</span>':''}).join('')+'</figure>'}
/* The figure sits on a cream drawing Plate (wPlate light) with the section's nav name in its title block. */
function explainer(b,H){var P=b.points.slice(0,4),f=b.figure||{},fig=f.kind==='levels'?exLevels(f):f.kind==='art'?exArt(f,P):'';
 if(fig)fig=wPlate(fig,{light:true,cls:'aq-explainer__plate',block:['Aquemi',b.nav||'Figure']});
 return sec(H+'<div class="aq-explainer'+(fig?'':' aq-explainer--bare')+'">'+fig+'<ol class="aq-explainer__points">'+P.map(function(p,i){
  return '<li>'+idx(i).replace('aq-index','aq-index aq-explainer__n')+'<h3 class="aq-explainer__t">'+exHead(p.t)+'</h3>'+(p.d?'<p class="aq-explainer__d">'+tx(p.d)+'</p>':'')+'</li>'}).join('')+'</ol></div>')}
})();
