/* Block "grid" -> LinkGrid: numbered choices in two staggered columns joined by one routed line (numbers are a CSS counter).
   An item that links to a page is one <a>; one whose link page has a drawing in ART (parts/Hero.js) shows it small, aria-hidden. */
BLOCKS['grid']=function(b,H){return sec('<div class="aq-stack">'+H+(b.intro?'<p class="aq-lead">'+tx(b.intro)+'</p>':'')+'</div><ol class="aq-linkgrid">'+(b.items||[]).map(function(it){
 var l=it.link&&wp(it.link)?it.link:'';
 var inner='<div class="aq-linkgrid__head"><h3 class="aq-h3 aq-linkgrid__t">'+tx(it.t)+'</h3>'+(l&&ART[l]?'<span class="aq-illustration aq-linkgrid__art" aria-hidden="true" style="'+artMask(l)+'"></span>':'')+'</div>'+
  (it.d?'<p class="aq-small aq-linkgrid__d">'+tx(it.d)+'</p>':'')+(it.tag?'<span class="aq-tags"><span class="aq-tag">'+e(it.tag)+'</span></span>':'');
 return '<li>'+(l?'<a class="aq-linkgrid__item" href="#'+e(l)+'" data-wp="'+e(l)+'">'+inner+'</a>':'<div class="aq-linkgrid__item">'+inner+'</div>')+'</li>'}).join('')+'</ol>');};
