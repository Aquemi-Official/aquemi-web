/* Look "membrane-atlas" -> MembraneAtlas (design-system/components/MembraneAtlas): a feed-water table read as a
   numbered sequence (pass 9b concept sys-pretreatment.2: navy square numeral tiles as row heads turn a three-column
   table into a readable sequence). Each row opens on a navy tile: a huge light slash numeral over a round micrograph
   of the membrane surface showing what that feed condition does to it (pitted by oxidation, slowed by cold and grown
   over in summer, caked by fouling, set with carbonate crystals, glazed with silica, coated with iron, colonised by
   biofilm), held soft until the visitor brings the scope's lens over it; then the condition, its effect on the RO and
   what we design for, under the table's own column names.
   Fields (a table block): h, cols [condition, effect, design], rows [[t, effect, design]], fold, fold_noun.
   New optional field: marks: one micrograph name per row, in row order: "oxidize" | "cold" | "foul" | "scale" |
   "silica" | "coat" | "biofilm" (anything else, or none, draws the clean membrane only).
   Fold: on phones only (desktop shows every row). */
(function(){
var K='aq-membrane-atlas';
function rnd(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
function f1(n){return Math.round(n*10)/10}
function inC(R,r){var a=R()*Math.PI*2,d=Math.sqrt(R())*r;return [d*Math.cos(a),d*Math.sin(a)]}
function blob(x,y,s,R,n){n=n||7;var d='';for(var i=0;i<n;i++){var a=Math.PI*2*i/n,q=s*(0.65+R()*0.55);d+=(i?'L':'M')+f1(x+q*Math.cos(a))+' '+f1(y+q*Math.sin(a))}return d+'Z'}
/* the clean membrane: the ridge-and-valley texture of a polyamide surface, short arcs */
function texture(seed){var R=rnd(seed),d='';for(var i=0;i<120;i++){var p=inC(R,90),a=R()*Math.PI,l=4+R()*6;
 d+='M'+f1(p[0]-l*Math.cos(a))+' '+f1(p[1]-l*Math.sin(a))+'Q'+f1(p[0]+3*Math.sin(a))+' '+f1(p[1]-3*Math.cos(a))+' '+f1(p[0]+l*Math.cos(a))+' '+f1(p[1]+l*Math.sin(a))}
 return '<path class="'+K+'__tex" d="'+d+'"/>'}
var MARK={
 oxidize:function(R){var o='';for(var i=0;i<16;i++){var p=inC(R,78),s=3+R()*9;o+='<path class="'+K+'__hole" d="'+blob(p[0],p[1],s,R,8)+'"/>'}
  var c='';for(var j=0;j<6;j++){var q=inC(R,70),a=R()*Math.PI*2,x=q[0],y=q[1];c+='M'+f1(x)+' '+f1(y);for(var k=0;k<4;k++){a+=R()-0.5;x+=9*Math.cos(a);y+=9*Math.sin(a);c+='L'+f1(x)+' '+f1(y)}}
  return o+'<path class="'+K+'__crack" d="'+c+'"/>'},
 cold:function(R){var o='<path class="'+K+'__split" d="M0 -96V96"/>';
  for(var i=0;i<5;i++){var y=-60+i*30;o+='<path class="'+K+'__perm" d="M-70 '+y+'h'+(14+R()*10)+'"/><circle class="'+K+'__dot" cx="'+f1(-50+R()*8)+'" cy="'+y+'" r="1.6"/>'}
  for(var j=0;j<22;j++){var p=inC(R,80);if(p[0]<10)p[0]=10+R()*70;var a=R()*180;o+='<rect class="'+K+'__rod" x="'+f1(p[0]-4)+'" y="'+f1(p[1]-1.8)+'" width="8" height="3.6" rx="1.8" transform="rotate('+f1(a)+' '+f1(p[0])+' '+f1(p[1])+')"/>'}
  return o},
 foul:function(R){var o='';for(var i=0;i<150;i++){var p=inC(R,86),s=1+R()*3.6;o+='<circle class="'+(R()<0.4?K+'__cake '+K+'__cake--fill':K+'__cake')+'" cx="'+f1(p[0])+'" cy="'+f1(p[1])+'" r="'+f1(s)+'"/>'}return o},
 scale:function(R){var o='';for(var c=0;c<5;c++){var q=inC(R,58);for(var i=0;i<6;i++){var x=q[0]+(R()-0.5)*34,y=q[1]+(R()-0.5)*34,s=4+R()*7,a=R()*180;
  o+='<path class="'+K+'__xtal" d="M'+f1(x-s)+' '+f1(y)+'L'+f1(x-s*0.3)+' '+f1(y-s*0.8)+'L'+f1(x+s)+' '+f1(y)+'L'+f1(x+s*0.3)+' '+f1(y+s*0.8)+'Z" transform="rotate('+f1(a)+' '+f1(x)+' '+f1(y)+')"/>'}}return o},
 silica:function(R){var o='';for(var i=0;i<6;i++){var p=inC(R,56),s=12+R()*16;o+='<path class="'+K+'__glass" d="'+blob(p[0],p[1],s,R,9)+'"/><path class="'+K+'__glint" d="'+blob(p[0]-s*0.15,p[1]-s*0.15,s*0.55,R,9)+'"/>'}return o},
 coat:function(R){var o='';for(var i=0;i<420;i++){var p=inC(R,92);if(p[0]+p[1]*0.4<-40&&R()<0.7)continue;o+='<circle class="'+K+'__rust" cx="'+f1(p[0])+'" cy="'+f1(p[1])+'" r="'+f1(0.7+R()*1.1)+'"/>'}return o},
 biofilm:function(R){var o='';for(var c=0;c<4;c++){var q=inC(R,52);o+='<path class="'+K+'__eps" d="'+blob(q[0],q[1],22+R()*8,R,10)+'"/>';
  for(var i=0;i<9;i++){var x=q[0]+(R()-0.5)*30,y=q[1]+(R()-0.5)*30,a=R()*180;o+='<rect class="'+K+'__rod" x="'+f1(x-4.5)+'" y="'+f1(y-2)+'" width="9" height="4" rx="2" transform="rotate('+f1(a)+' '+f1(x)+' '+f1(y)+')"/>'}}return o}};
function micro(kind,i){var R=rnd(31+i*97),tick='';
 for(var a=0;a<360;a+=10){var r=a%90?100:94,c=a*Math.PI/180;tick+='M'+f1(r*Math.cos(c))+' '+f1(r*Math.sin(c))+'L'+f1(106*Math.cos(c))+' '+f1(106*Math.sin(c))}
 var dm=MARK[kind]?MARK[kind](R):'';
 return '<svg class="'+K+'__svg" viewBox="-112 -112 224 224" aria-hidden="true" focusable="false"><defs><clipPath id="'+K+'-c'+i+'"><circle r="96"/></clipPath></defs>'
  +'<circle class="'+K+'__field" r="96"/><g clip-path="url(#'+K+'-c'+i+')">'+texture(7+i*13)+'<g class="'+K+'__dmg">'+dm+'</g></g>'
  +'<circle class="'+K+'__rim" r="96"/><path class="'+K+'__tick" d="'+tick+'"/><path class="'+K+'__cross" d="M-112 0h10M102 0h10M0 -112v10M0 102v10"/></svg>'}
LOOKS['membrane-atlas']=function(b,H){
 var C=b.cols||[],R=b.rows||[],M=b.marks||[];
 var head='<div class="'+K+'__thead" role="rowgroup"><div class="'+K+'__tr" role="row"><span class="'+K+'__corner" role="columnheader"><span class="'+K+'__vh">No.</span></span>'
  +[0,1,2].map(function(j){return '<span class="'+K+'__th" role="columnheader">'+tx(C[j]||'')+'</span>'}).join('')+'</div></div>';
 var rows=R.map(function(r,i){var n=(i<9?'0':'')+(i+1);
  return fli('<div class="'+K+'__tr '+K+'__plate" role="row" data-mark="'+e(M[i]||'')+'">',b,i)
   +'<div class="'+K+'__tile" role="cell"><span class="'+K+'__n" aria-hidden="true">'+n+'<span class="'+K+'__sl">/</span></span><span class="'+K+'__vh">'+n+'</span>'
   +'<div class="'+K+'__scope" aria-hidden="true">'+micro(M[i],i)+'</div></div>'
   +'<div class="'+K+'__td '+K+'__td--t" role="rowheader"><span class="'+K+'__k" aria-hidden="true">'+tx(C[0]||'')+'</span><span class="'+K+'__t">'+tcell(r[0])+'</span></div>'
   +'<div class="'+K+'__td" role="cell"><span class="'+K+'__k" aria-hidden="true">'+tx(C[1]||'')+'</span><span class="'+K+'__c">'+tcell(r[1])+'</span></div>'
   +'<div class="'+K+'__td '+K+'__td--ours" role="cell"><span class="'+K+'__k" aria-hidden="true">'+tx(C[2]||'')+'</span><span class="'+K+'__c">'+tcell(r[2])+'</span></div></div>'}).join('');
 var grid='<div class="'+K+'" role="table" aria-label="'+e(b.h||'')+'">'+head+'<div class="'+K+'__body" role="rowgroup">'+rows+'</div></div>';
 return sec(H+wFold(b,R.length,grid,b.fold_noun),K+'-sec')};
})();
