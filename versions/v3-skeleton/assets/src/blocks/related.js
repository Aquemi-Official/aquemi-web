/* Block "related" -> RelatedLinks: the pages to read next. items: page ids. Each is one linked row: index, title, the
   page's section as a mono label, and an arrow. Desktop: three to a row (four for 4, 7 or 8), each with its drawing from ART (parts/Hero.js)
   when the page has one. Phones: compact rows, no drawings. */
BLOCKS['related']=function(b,H){return sec(H+'<ol class="aq-related-links">'+(b.items||[]).filter(wp).map(function(id,i){var p=wp(id);
 return '<li><a class="aq-related-links__card" href="#'+e(id)+'" data-wp="'+e(id)+'">'+idx(i)
  +'<span class="aq-related-links__title">'+tx(p.nav_label)+'</span><span class="aq-related-links__group">'+e(p.section)+'</span>'
  +(ART[id]?'<span class="aq-illustration aq-related-links__art" aria-hidden="true" style="'+artMask(id)+'"></span>':'')+'</a></li>'}).join('')+'</ol>');};
