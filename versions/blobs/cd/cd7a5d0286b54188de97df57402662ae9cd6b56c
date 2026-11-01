/* Look "market-callouts" -> MarketCallouts (design-system/components/MarketCallouts): one machine, several markets.
   A single PW package (IsoKit: feed riser, cartridge filter, RO rack, EDI stack, panel on a skid, product water out)
   stands centred on a navy ground, drawn as a solid limestone object; each option is a callout around it, its leader
   running to the part of the machine its note is about, with a numbered marker on that part.
   Item fields: t, and either d or the parts of d: scope (opening scope line, usually a [placeholder]), tags (standards,
   drawn as tags), note (the technical sentence); part: the drawing anchor the leader ends on ("feed", "filter",
   "ro", "edi", "panel", "outlet"; default by position). Desktop: callouts left, right, left around the machine.
   Phones: the drawing, cropped to the machine with its numbered markers, then the callouts in order. */
LOOKS['market-callouts']=(function(){
 var VW=1200,VH=660;
 function scene(){
  /* drawn in world space, then mirrored so the feed comes down on the right and the product water leaves upper left */
  var sk=isoPart('skid',0,0,0,1,{w:196,d:76}),ro=isoPart('ro',40,8,9,1,{id:'ro'}),ed=isoPart('edi',162,22,9,1,{id:'edi'}),
   fi=isoPart('filter',18,52,9,1,{id:'filter'}),pa=isoPart('panel',178,60,9,1,{id:'panel'});
  var top=[fi.ports.in[0],fi.ports.in[1],150];
  var feed=isoPipe(isoRoute(top,fi.ports.in,'zxy'),{to:'filter',caps:'start'});
  var p1=isoPipe(isoRoute(fi.ports.out,ro.ports.in,'zxy'),{to:'ro'});
  var p2=isoPipe(isoRoute(ro.ports.out,ed.ports.in,'xzy',{via:[[ro.ports.out[0]+8,ro.ports.out[1],ro.ports.out[2]]]}),{to:'edi'});
  var o=ed.ports.out,end=[o[0]+8,-72,o[2]+56];
  var p3=isoPipe(isoRoute(o,end,'xzy'),{to:'outlet',flanges:'ends',id:'outlet',caps:'end'});
  var inner=[p3,sk,ro,ed,feed,fi,p1,p2,pa,isoArrow([top[0],top[1],120],'-z',{size:6}),isoArrow([end[0],-46,end[2]],'-y',{size:6})].join('');
  var A={feed:[top[0],top[1],130],filter:fi.ports.top,ro:[96,34,9+46],edi:ed.ports.top,panel:pa.ports.top,outlet:[end[0],-58,end[2]]};
  var bx=isoBounds([[0,0,0],[196,76,0],[0,76,0],[196,0,0],top,end,[40,8,80],[162,22,50]],6),S=Math.min(640/bx.w,600/bx.h),
   ox=VW/2+(bx.x+bx.w/2)*S,oy=VH/2-(bx.y+bx.h/2)*S;
  function at(k){var p=isoP(A[k]||A.ro);return [ox-p[0]*S,oy+p[1]*S]}
  return {g:'<g transform="translate('+ox.toFixed(1)+' '+oy.toFixed(1)+') scale('+(-S).toFixed(3)+' '+S.toFixed(3)+')">'+inner+'</g>',at:at}}
 var SLOTS=[{x:0,y:3,side:'l'},{x:76,y:33,side:'r'},{x:0,y:63,side:'l'},{x:76,y:70,side:'r'}],DEF=['outlet','ro','edi','filter'];
 return function(b,H){var I=b.items||[],sc=scene(),lead='',marks='';
  var list=I.map(function(it,i){var s=SLOTS[i%SLOTS.length],part=it.part||DEF[i%DEF.length],p=sc.at(part),n=(i<9?'0':'')+(i+1);
   var ax=s.side==='l'?(s.x+24)*VW/100:s.x*VW/100-12,ay=s.y*VH/100+14,bend=s.side==='l'?Math.max(ax+40,p[0]-60):Math.min(ax-40,p[0]+60);
   var ld='M'+ax.toFixed(1)+' '+ay.toFixed(1)+'H'+bend.toFixed(1)+'L'+p[0].toFixed(1)+' '+p[1].toFixed(1);
   lead+='<g class="aq-market-callouts__lead" data-c="'+i+'"><path class="aq-market-callouts__halo" d="'+ld+'"/><path d="'+ld+'"/><circle cx="'+ax.toFixed(1)+'" cy="'+ay.toFixed(1)+'" r="3"/></g>';
   marks+='<span class="aq-market-callouts__mk" data-c="'+i+'" data-part="'+e(part)+'" style="left:'+(100*p[0]/VW).toFixed(2)+'%;top:'+(100*p[1]/VH).toFixed(2)+'%">'+n+'</span>';
   var body=it.scope||it.tags||it.note?(it.scope?'<p class="aq-market-callouts__scope">'+tx(it.scope)+'</p>':'')
     +(it.tags&&it.tags.length?'<p class="aq-tags aq-market-callouts__tags">'+it.tags.map(function(t){return '<span class="aq-tag">'+tx(t)+'</span>'}).join('')+'</p>':'')
     +(it.note?'<p class="aq-market-callouts__note">'+tx(it.note)+'</p>':''):(it.d?'<p class="aq-market-callouts__note">'+tx(it.d)+'</p>':'');
   return '<li class="aq-market-callouts__c aq-market-callouts__c--'+s.side+'" data-c="'+i+'" style="--x:'+s.x+'%;--y:'+s.y+'%">'
    +'<h3 class="aq-market-callouts__t"><span class="aq-market-callouts__n" aria-hidden="true">'+n+' /</span> '+tx(it.t)+'</h3>'+body+'</li>'}).join('');
  var svg=isoSvg(VW,VH,sc.g+'<g class="aq-market-callouts__leads">'+lead+'</g>','aq-iso--limestone aq-market-callouts__svg',{});
  return sec(H+'<div class="aq-market-callouts"><div class="aq-market-callouts__stage"><div class="aq-market-callouts__plane" aria-hidden="true">'
   +svg+marks+'</div>'
   +'<ol class="aq-market-callouts__list">'+list+'</ol></div></div>','aq-band--navy aq-market-callouts-band')}
})();
