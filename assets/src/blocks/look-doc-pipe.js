/* Look "doc-pipe" -> DocPipe (design-system/components/DocPipe): a short document list where the pipe route is the
   list (pass 9b concept sys-pretreatment.4). On a navy band under a display-scale heading, one double-line pipe with
   valves snakes across the band: under the first document, up and over the second, down under the third, and so on;
   each document sits in its bend: number, name, line and its code (deciding documents keep DocList's rule: their
   code turns flow). The block link ("Full index") sits at the end of the heading row.
   The pipe is drawn per column (each column's own SVG piece, riser at its left), so it reflows with the grid.
   Phones: the pipe runs down the left as a vertical line with a valve per document; the documents stack beside it.
   Fields (a docs block): h, intro, items [{t, d, code, key, link, intent, tag}], key, fold, fold_noun, link,
   link_label, intent. */
(function(){
var K='aq-doc-pipe',LO=330,HI=50,MID=190,R=14;
/* one column's pipe piece in a 300 x 380 box: in at the left on the previous level, a riser, a run at its own level */
function piece(i,n){var y=i%2?HI:LO,yp=i?(i%2?LO:HI):MID,d,s=yp<y?1:-1;
 d='M0 '+yp+'H'+(28-R)+'Q28 '+yp+' 28 '+(yp+s*R)+'V'+(y-s*R)+'Q28 '+y+' '+(28+R)+' '+y+'H'+(i===n-1?272:300);
 return d}
function valve(dn){return '<svg class="'+K+'__vsvg" viewBox="-14 -26 28 52" aria-hidden="true" focusable="false"><path class="'+K+'__vb" d="M-11 -8V8L11 -8V8Z"/>'
 +'<g class="'+K+'__stem"><path class="'+K+'__vs" d="M0 0V'+(dn?18:-18)+'M-7 '+(dn?18:-18)+'H7"/></g></svg>'}
LOOKS['doc-pipe']=function(b,H){
 var items=(b.items||[]).map(function(x){return typeof x==='string'?{t:x}:x}),n=items.length;
 var marked=items.some(function(x){return x.key}),nk=b.key!=null?+b.key:0;
 var li=items.map(function(x,i){var c=x.code?[x.code,true]:docCode(x.t),key=marked?!!x.key:i<nk,tag=x.tag||c[0];if(tag&&!/[A-Za-z0-9]/.test(tag))tag='';
  var name=x.link&&wp(x.link)?wlink(x.link,x.t,x.intent):tx(x.t),hi=i%2===1,d=piece(i,n);
  var svg='<svg class="'+K+'__pipe" viewBox="0 0 300 380" preserveAspectRatio="none" aria-hidden="true" focusable="false">'
   +'<path class="'+K+'__wall" d="'+d+'"/><path class="'+K+'__bore" d="'+d+'"/><path class="'+K+'__flow" d="'+d+'"/>'
   +(i===n-1?'<path class="'+K+'__cap" d="M272 '+(hi?HI-12:LO-12)+'V'+(hi?HI+12:LO+12)+'M278 '+(hi?HI-12:LO-12)+'V'+(hi?HI+12:LO+12)+'"/>':'')+'</svg>';
  return fli('<li class="'+K+'__item'+(key?' is-key':'')+(hi?' is-hi':' is-lo')+'" style="--i:'+i+'">',b,i)
   +svg+'<span class="'+K+'__valve" aria-hidden="true">'+valve(!hi)+'</span>'
   +'<div class="'+K+'__txt"><span class="'+K+'__num" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span>'
   +'<h3 class="'+K+'__t">'+name+'</h3>'+(x.d?'<p class="'+K+'__d">'+tx(x.d)+'</p>':'')
   +(tag?'<p class="'+K+'__code">'+e(tag)+'</p>':'')+'</div></li>'}).join('');
 var more=b.link&&wp(b.link)?'<p class="'+K+'__more">'+wBtn(b.link_label||wlabel(b.link),b.link,'link',b.intent)+'</p>':'';
 var html=sec('<div class="'+K+'__top">'+H+more+'</div>'+wFold(b,n,'<ol class="'+K+'" role="list" style="--n:'+n+'">'+li+'</ol>',b.fold_noun||'documents'),'aq-band--navy '+K+'-sec');
 return html.replace(/^<section class="([^"]*)"/,'<section class="$1" data-theme="dark"')};
})();
