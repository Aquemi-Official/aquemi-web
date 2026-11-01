/* Look "standard-tiles" -> StandardTiles (design-system/components/StandardTiles): a short grid of linked items, each
   carrying a standard or control tag, set as a Swiss row of tall tiles where the tag is the hero: set large in Geist
   Mono Light at the top of the tile, the item's line icon drawn large beside the count, the title and one line under a
   hairline, an arrow at the foot. The first tile is navy. Each tile is one link.
   Fields, as grid: h, intro, items [{t, d, icon, tag, link}]. Concept: sys-pw.2 (Swiss tiles, oversized values) and
   home's industry-feed (the standard set huge as the evidence). */
(function(){
LOOKS['standard-tiles']=function(b,H){var I=b.items||[],n=I.length;
 var tiles=I.map(function(it,i){var ic=isIcon(it.icon)?wIcon(it.icon,'aq-standard-tiles__ic'):'';
  var inner='<span class="aq-standard-tiles__top" aria-hidden="true"><span class="aq-standard-tiles__no">'+(i<9?'0':'')+(i+1)+' / '+(n<10?'0':'')+n+'</span>'+ic+'</span>'
   +(it.tag?'<span class="aq-standard-tiles__tag'+(/\d/.test(it.tag)?'':' is-word')+'">'+tx(it.tag)+'</span>':'<span></span>')
   +'<div class="aq-standard-tiles__body"><h3 class="aq-standard-tiles__t">'+tx(it.t)+'</h3>'+(it.d?'<span class="aq-standard-tiles__d">'+tx(it.d)+'</span>':'')+'</div>'
   +(it.link&&wp(it.link)?'<span class="aq-standard-tiles__arrow" aria-hidden="true"></span>':'<span></span>');
  return '<li class="aq-standard-tiles__tile'+(i===0?' is-lead':'')+'">'+(it.link&&wp(it.link)?'<a class="aq-standard-tiles__in" href="#'+e(it.link)+'" data-wp="'+e(it.link)+'">'+inner+'</a>':'<div class="aq-standard-tiles__in">'+inner+'</div>')+'</li>'}).join('');
 return sec(H+'<ol class="aq-standard-tiles" style="--n:'+n+'">'+tiles+'</ol>','aq-standard-tiles-sec')};
})();
