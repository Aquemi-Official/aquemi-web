/* Look "review-reticles" -> ReviewReticles (design-system/components/ReviewReticles): what an assessment reviews, each
   area seen through an inspection viewfinder. On a limestone band, a Swiss grid of viewfinders (corner brackets, a
   crosshair, the area's index "01 / 06" in mono), each framing the thing reviewed drawn in IsoKit line art (binders
   for records, an analyser for water data, the RO rack, a storage tank, a heat exchanger, a control panel); under
   each, the area's name set large and the one line of what is checked. On scroll-in a scan line sweeps each frame
   and the brackets close on the drawing.
   Fields (a grid block, as: "route"): h, items [{t, d, spot, part, link}]. part: an IsoKit part kind to draw; without
   it the spot picks one (binder, toc -> analyzer, ro-skid -> ro, storage-tank -> tank, heat-exchanger -> hx,
   cpu -> panel, pump, uv), else the spot's line icon. A link makes the card a link. Phones: two columns, then one. */
var RR_KIND={binder:'binder',toc:'analyzer','ro-skid':'ro','storage-tank':'tank','heat-exchanger':'hx',cpu:'panel',pump:'pump',uv:'uv',pretreatment:'softener','edi-stack':'edi'};
/* the solid each part occupies (its ports alone undersize some parts) */
var RR_BOX={binder:[[-32,-16,0],[24,26,36]],analyzer:[[-9,-6,0],[24,6,46]],ro:[[-4,-2,0],[116,30,68]],tank:[[-22,-22,0],[22,22,96]],hx:[[-6,-2,0],[56,26,50]],panel:[[-17,-8,0],[17,8,60]],pump:[[-18,-10,0],[40,10,36]],uv:[[0,-8,0],[60,8,36]],softener:[[-24,-14,0],[24,24,62]],edi:[[-6,-2,0],[46,24,44]]};
function rrDraw(it){var k=it.part||RR_KIND[it.spot];if(k&&ISO_PARTS[k]){var p=isoPart(k,0,0,0,1,{}),P=[];for(var q in p.ports)P.push(p.ports[q]);
  var B=RR_BOX[k];if(B){for(var a=0;a<8;a++)P.push([B[a&1][0],B[(a>>1)&1][1],B[(a>>2)&1][2]])}
  var bx=isoBounds(P,10),s=Math.max(bx.w,bx.h);return isoSvg(s,s,String(p),'aq-iso--limestone aq-review-reticles__iso',{origin:[-bx.x+(s-bx.w)/2,-bx.y+(s-bx.h)/2]})}
 var n=isSpot(it.spot)?SPOT_ICON[it.spot]:it.spot;return isIcon(n)?wIcon(n,'aq-review-reticles__ic'):''}
LOOKS['review-reticles']=function(b,H){var I=b.items||[],K='aq-review-reticles',N=(I.length<10?'0':'')+I.length;
 var cards=I.map(function(it,i){var inner='<span class="'+K+'__vf" aria-hidden="true"><span class="'+K+'__br '+K+'__br--tl"></span><span class="'+K+'__br '+K+'__br--tr"></span><span class="'+K+'__br '+K+'__br--bl"></span><span class="'+K+'__br '+K+'__br--br"></span>'
   +'<span class="'+K+'__cross"></span><span class="'+K+'__no">'+(i<9?'0':'')+(i+1)+' / '+N+'</span><span class="'+K+'__pic">'+rrDraw(it)+'</span><span class="'+K+'__scan"></span></span>'
   +'<h3 class="'+K+'__t">'+tx(it.t)+'</h3>'+(it.d?'<p class="'+K+'__d">'+tx(it.d)+'</p>':'');
  return '<li class="'+K+'__item">'+(it.link&&wp(it.link)?'<a class="'+K+'__body" href="#'+e(it.link)+'" data-wp="'+e(it.link)+'">'+inner+'</a>':'<div class="'+K+'__body">'+inner+'</div>')+'</li>'}).join('');
 return sec(H+'<ol class="'+K+'" role="list" style="--n:'+I.length+'">'+cards+'</ol>','aq-band--limestone '+K+'-sec" data-theme="light')};
