/* Look "grade-editorial" -> GradeEditorial (design-system/components/GradeEditorial): a short path set as an editorial
   spread. The heading runs oversized on a navy mast; below, on limestone, a geometric pipe collage (Swiss poster
   tiles, a hollow pipe with the water running through a tank and a pump to an outlet) faces five asymmetric fact
   blocks. Each block is a grid item {t, d, link} that may carry display fields instead of its sentence d:
   big [{v, pre, l}] (a grade word or figure set huge, a small word before it, its label under it), span [from, to]
   (a drawn run from one end of the scope to the other), list [lines] (a breakdown on leader rules), bars [labels]
   with bars_note (small bars whose values are still to come: dashed tracks and the placeholder), kicker (one line
   above the list) and panel (true: the block sits on navy). An item with none of these shows d.
   Phones: mast, collage band, then the blocks one per row. */
LOOKS['grade-editorial']=(function(){
 var U=80;
 function tile(c,r,w,h,body){return '<g class="aq-grade-editorial__tile" transform="translate('+c*U+' '+r*U+')"><g>'+body(w*U,h*U)+'</g></g>'}
 function R(x,y,w,h,cls){return '<rect class="'+cls+'" x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'"/>'}
 function Q(w,h,cls,o){var p=['M0 0H'+w+'A'+w+' '+h+' 0 0 1 0 '+h+'Z','M'+w+' 0V'+h+'A'+w+' '+h+' 0 0 1 0 0Z','M'+w+' '+h+'H0A'+w+' '+h+' 0 0 1 '+w+' 0Z','M0 '+h+'V0A'+w+' '+h+' 0 0 1 '+w+' '+h+'Z'][o];return '<path class="'+cls+'" d="'+p+'"/>'}
 var N='aq-grade-editorial__n',W='aq-grade-editorial__w',S='aq-grade-editorial__s',F='aq-grade-editorial__f';
 function collage(){var t=[
  tile(0,0,1,1,function(w,h){return R(0,0,w,h,N)+'<path class="'+W+'" d="M40 14 66 44H52V70H28V44H14Z"/>'}),
  tile(1,0,1,1,function(w,h){return R(0,0,w,h,W)+Q(w,h,N,2)}),
  tile(2,0,2,1,function(w,h){return R(0,0,w,h,W)+'<path class="'+S+'" d="M0 60H'+w+'"/>'}),
  tile(4,0,1,1,function(w,h){return R(0,0,w,h,F)}),
  tile(5,0,1,1,function(w,h){return R(0,0,w,h,W)+Q(w,h,N,3)}),
  tile(0,1,1,1,function(w,h){return R(0,0,w,h,W)+Q(w,h,N,0)}),
  tile(1,1,2,2,function(w,h){return R(0,0,w,h,W)+[70,54,38,22].map(function(r,i){return '<circle class="'+(i===3?N:S)+'" cx="80" cy="80" r="'+r+'"/>'}).join('')+'<path class="'+S+'" d="M80 80H150"/>'}),
  tile(3,1,1,1,function(w,h){return R(0,0,w,h,N)+'<path class="'+W+'" d="M0 0 80 40 0 80Z"/>'}),
  tile(5,1,1,1,function(w,h){return R(0,0,w,h,N)+'<path class="'+W+'" d="M0 80A40 40 0 0 1 80 80Z"/>'}),
  tile(0,2,1,1,function(w,h){return R(0,0,w,h,N)+'<circle class="'+F+'" cx="40" cy="40" r="10"/>'}),
  tile(3,2,1,1,function(w,h){return R(0,0,w,h,W)+'<path class="'+N+'" d="M12 22 40 40 12 58Z M68 22 40 40 68 58Z"/><path class="'+S+'" d="M40 40V12M28 12H52"/>'}),
  tile(5,2,1,1,function(w,h){return R(0,0,w,h,W)+'<circle class="'+S+'" cx="40" cy="40" r="22"/><circle class="'+S+'" cx="40" cy="40" r="10"/>'}),
  tile(0,3,2,1,function(w,h){return R(0,0,w,h,W)+'<path class="'+N+'" d="M0 80A40 40 0 0 1 80 80Z M80 0A40 40 0 0 0 160 0Z"/>'}),
  tile(5,3,1,1,function(w,h){return R(0,0,w,h,F)+Q(w,h,N,1)}),
  tile(0,4,1,1,function(w,h){return R(0,0,w,h,N)+Q(w,h,W,2)}),
  tile(1,4,1,1,function(w,h){return R(0,0,w,h,W)+'<path class="'+N+'" d="M0 80 80 0 80 80Z"/>'}),
  tile(4,4,1,1,function(w,h){return R(0,0,w,h,N)}),
  tile(5,4,1,1,function(w,h){return R(0,0,w,h,W)+'<path class="'+S+'" d="M20 20H60V60H20Z"/>'}),
  tile(0,5,2,2,function(w,h){return R(0,0,w,h,W)+Q(w,h,N,3)+'<path class="'+W+'" d="M160 104A56 56 0 0 0 104 160H160Z"/>'}),
  tile(2,5,1,1,function(w,h){return R(0,0,w,h,N)+[30,18].map(function(r){return '<circle class="aq-grade-editorial__sw" cx="40" cy="40" r="'+r+'"/>'}).join('')}),
  tile(3,5,1,1,function(w,h){return R(0,0,w,h,F)}),
  tile(4,5,1,1,function(w,h){return R(0,0,w,h,W)+Q(w,h,N,0)}),
  tile(2,6,2,1,function(w,h){return R(0,0,w,h,W)}),
  tile(4,6,1,1,function(w,h){return R(0,0,w,h,N)})
 ].join('');
  var path='M120 -12V40H360V200V320H240V440H440V536';
  var pipe='<g class="aq-grade-editorial__pipe"><path class="aq-grade-editorial__po" d="'+path+'"/><path class="aq-grade-editorial__pi" d="'+path+'"/><path class="aq-grade-editorial__water" d="'+path+'"/></g>';
  /* equipment drawn over the pipe: a tank and a pump the water passes through */
  var eq='<g class="aq-grade-editorial__eq aq-grade-editorial__tank"><path class="'+W+' aq-grade-editorial__edge" d="M324 120A36 36 0 0 1 396 120V316H324Z"/><path class="aq-grade-editorial__lvl" d="M324 196H396"/><path class="aq-grade-editorial__edge" d="M336 316V332M384 316V332"/></g>'
   +'<g class="aq-grade-editorial__eq aq-grade-editorial__pump"><circle class="'+N+'" cx="240" cy="320" r="64"/><circle class="'+W+'" cx="240" cy="320" r="26"/><path class="'+W+'" d="M240 320 262 306"/><circle class="'+N+'" cx="240" cy="320" r="6"/></g>'
   +'<circle class="aq-grade-editorial__drop" cx="440" cy="548" r="6"/>';
  return '<svg class="aq-grade-editorial__svg" viewBox="0 -16 480 580" aria-hidden="true" focusable="false">'+t+pipe+eq+'</svg>'}
 function item(it,i){var lk=it.link&&wp(it.link),o='',has=it.big||it.span||it.list||it.bars||it.kicker;
  o+='<h3 class="aq-grade-editorial__t">'+(lk?'<a href="#'+e(it.link)+'" data-wp="'+e(it.link)+'">'+tx(it.t)+'</a>':tx(it.t))+'</h3>';
  (it.big||[]).forEach(function(g){o+='<div class="aq-grade-editorial__big"><p class="aq-grade-editorial__word">'+(g.pre?'<span class="aq-grade-editorial__pre">'+tx(g.pre)+'</span>':'')+'<span class="aq-grade-editorial__v">'+tx(g.v)+'</span></p>'+(g.l?'<p class="aq-grade-editorial__l">'+tx(g.l)+'</p>':'')+'</div>'});
  if(it.span&&it.span.length>1)o+='<div class="aq-grade-editorial__span"><span class="aq-grade-editorial__end">'+tx(it.span[0])+'</span><span class="aq-grade-editorial__run" aria-hidden="true"><i></i></span><span class="aq-grade-editorial__end">'+tx(it.span[1])+'</span></div>';
  if(it.kicker)o+='<p class="aq-grade-editorial__kicker">'+tx(it.kicker)+'</p>';
  if(it.list&&it.list.length)o+='<ul class="aq-grade-editorial__list'+(it.span?' aq-grade-editorial__list--plain':'')+'">'+it.list.map(function(l){return '<li>'+tx(l)+'</li>'}).join('')+'</ul>';
  if(it.bars&&it.bars.length)o+='<ul class="aq-grade-editorial__bars">'+it.bars.map(function(l){return '<li><span class="aq-grade-editorial__bl">'+tx(l)+'</span><span class="aq-grade-editorial__track" aria-hidden="true"></span></li>'}).join('')+'</ul>'+(it.bars_note?'<p class="aq-grade-editorial__note">'+tx(it.bars_note)+'</p>':'');
  if(!has&&it.d)o+='<p class="aq-grade-editorial__d">'+tx(it.d)+'</p>';
  return '<div class="aq-grade-editorial__item'+(it.panel?' aq-grade-editorial__item--panel':'')+'" data-i="'+i+'">'+o+'</div>'}
 return function(b,H){var I=b.items||[];
  return sec('<div class="aq-grade-editorial__mast">'+H+'</div><div class="aq-grade-editorial" data-n="'+I.length+'"><figure class="aq-grade-editorial__art" aria-hidden="true">'+collage()+'</figure>'
   +'<div class="aq-grade-editorial__grid">'+I.map(item).join('')+'</div></div>','aq-band--limestone aq-grade-editorial-band')}
})();
