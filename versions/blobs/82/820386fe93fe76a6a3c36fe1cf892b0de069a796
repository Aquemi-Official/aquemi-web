/* Block "related" -> RelatedLinks: the pages to read next. items: page ids. Each is one linked card under a hairline: the
   index, a thumbnail of the target page, "01 / Systems" as an eyebrow label and the page's title with an arrow.
   Thumbnail: the target page's icon (PAGE_ICON in core.js). Desktop: up to four to a row; phones: one column of rows. */
function relThumb(id){return PAGE_ICON[id]?wIcon(PAGE_ICON[id],'aq-related-links__thumb aq-related-links__icon'):''}
BLOCKS['related']=function(b,H){var I=(b.items||[]).filter(wp);
 return sec(H+'<ol class="aq-related-links" style="--n:'+I.length+'">'+I.map(function(id,i){var p=wp(id),n=(i<9?'0':'')+(i+1);
 return '<li><a class="aq-related-links__card" href="#'+e(id)+'" data-wp="'+e(id)+'"><span class="aq-related-links__n" aria-hidden="true">'+n+'</span>'+relThumb(id)
  +'<span class="aq-related-links__group"><span aria-hidden="true">'+n+' / </span>'+e(p.section)+'</span>'
  +'<span class="aq-related-links__title">'+tx(p.nav_label)+'<span class="aq-related-links__arrow" aria-hidden="true">→</span></span></a></li>'}).join('')+'</ol>');};
