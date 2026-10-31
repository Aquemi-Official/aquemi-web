/* Block "prose" -> Prose in SplitSection: heading left, text right. Fields: h, body (paragraphs).
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
 var body=(b.body||[]).filter(function(x){return x}).map(String);
 if(!body.length)return split(H,'<div class="aq-prose"></div>');
 var l=lead(body[0]),paras=(l[1]?[l[1]]:[]).concat(body.slice(1));
 return split(H,'<div class="aq-prose aq-prose--sheet"><p class="aq-prose__lead">'+tx(l[0])+'</p>'+paras.map(function(p){return '<p>'+tx(p)+'</p>'}).join('')+'</div>');
};
})();
