/* Block "prose" -> Prose as a drawing sheet, in SplitSection.
   Fields: h (heading), body (paragraphs), optional notes (strings quoted verbatim from body; [] turns notes off).
   The first sentence of body[0] becomes the lead; the rest sits in a narrow column with margin notes.
   Notes only ever quote the text: given in `notes`, or found automatically (named standards, figures with units).
   Nothing inside a [placeholder] is annotated. */
(function(){
var ABBR=/(?:^|[\s(])(?:Ph|Eur|e\.g|i\.e|No|St|Dr|vs|etc|approx|Fig|Inc|Ltd|Co)$/;
var STD='USP ?<\\d+>|USP|Ph\\. ?Eur\\.(?: monograph \\d{3,4})?|European Pharmacopoeia|EU GMP Annex \\d+|Annex \\d+|GAMP ?\\d|ISO \\d{3,5}(?::\\d{4})?|ASME BPE(?:-\\d{4})?|21 CFR Part \\d+|EN \\d{3,5}|ICH Q\\d+[A-Z]?|US EPA|WHO TRS \\d+|Guidelines for Canadian Drinking Water Quality';
var UNIT='°C|[µμ]S\\/cm|mS\\/cm|MΩ·cm|L\\/h|L\\/min|m[³3]\\/h|ppb|ppm|mg\\/L|[µμ]g\\/L|EU\\/mL|CFU\\/mL|cfu\\/mL|kWh|kW|barg|bar|psi|[µμ]m';
var NUM='\\d+(?:[.,]\\d+)?(?: ?[–-] ?\\d+(?:[.,]\\d+)?)? ?(?:'+UNIT+')';
var AUTO_MAX=3;
/* [start,end) ranges inside square brackets, nesting-aware */
function holes(s){var r=[],d=0,st=0;for(var i=0;i<s.length;i++){var c=s.charAt(i);if(c==='['){if(!d)st=i;d++}else if(c===']'&&d){d--;if(!d)r.push([st,i+1])}}if(d)r.push([st,s.length]);return r}
function inHole(h,a,b){for(var i=0;i<h.length;i++)if(a<h[i][1]&&b>h[i][0])return true;return false}
/* Split off the first sentence: ends at . ! ? outside brackets, before a capital, digit or bracket, not after an abbreviation */
function lead(s){var h=holes(s);for(var i=0;i<s.length;i++){var c=s.charAt(i);if((c==='.'||c==='!'||c==='?')&&!inHole(h,i,i+1)){var m=s.slice(i+1).match(/^\s+(?=[A-Z0-9\[“"])/);if(m&&!ABBR.test(s.slice(0,i)))return [s.slice(0,i+1),s.slice(i+1+m[0].length)]}}return [s,'']}
function word(c){return /[A-Za-z0-9µμ]/.test(c||'')}
function auto(paras){var seen={};return paras.map(function(p){var h=holes(p),out=[],re=new RegExp(STD+'|'+NUM,'g'),m;
 while((m=re.exec(p))&&out.length<AUTO_MAX){var a=m.index,b=a+m[0].length,k=m[0].toLowerCase();
  if(word(p.charAt(a-1))||p.charAt(a-1)==='.'||(word(p.charAt(b))&&p.charAt(b-1)!=='.')||inHole(h,a,b)||seen[k])continue;
  seen[k]=1;out.push({a:a,b:b})}
 return out})}
function given(notes,paras){var out=paras.map(function(){return []});
 notes.forEach(function(t){t=String(t||'');if(!t)return;paras.some(function(p,i){var h=holes(p),a=p.indexOf(t);
  while(a>-1&&inHole(h,a,a+t.length))a=p.indexOf(t,a+1);
  if(a>-1&&!out[i].some(function(m){return a<m.b&&a+t.length>m.a})){out[i].push({a:a,b:a+t.length});return true}})});
 return out.map(function(ms){return ms.sort(function(x,y){return x.a-y.a})})}
BLOCKS['prose']=function(b,H){
 var body=(b.body||[]).filter(function(x){return x}).map(String);
 if(!body.length)return split(H,'<div class="aq-prose"></div>');
 var l=lead(body[0]),paras=(l[1]?[l[1]]:[]).concat(body.slice(1));
 var marks=Array.isArray(b.notes)?given(b.notes,paras):auto(paras),n=0;
 var rows=paras.map(function(p,i){var html='',notes='',at=0;
  marks[i].forEach(function(m){n++;var k=(n<10?'0':'')+n,q=tx(p.slice(m.a,m.b));
   html+=tx(p.slice(at,m.a))+'<span class="aq-prose__ref" data-n="'+k+'">'+q+'</span>';at=m.b;
   notes+='<li><span class="aq-prose__n">'+k+'</span><span class="aq-prose__q">'+q+'</span></li>'});
  html+=tx(p.slice(at));
  return '<div class="aq-prose__row"><p>'+html+'</p>'+(notes?'<ol class="aq-prose__notes" aria-hidden="true">'+notes+'</ol>':'')+'</div>'});
 return split(H,'<div class="aq-prose aq-prose--sheet"><p class="aq-prose__lead">'+tx(l[0])+'</p>'+rows.join('')+'</div>');
};
})();
