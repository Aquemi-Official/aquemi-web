/* Block "related" -> RelatedLinks: the pages to read next. items: page ids. Pass 9: one pipe runs along the top of the
   row and every page hangs off it by a drop and a node, as a tile: the index and section label, the target page's
   picture (its equipment drawing from ART when it has one, else its page icon drawn large as a Spot; aria-hidden), and
   the page's title with an arrow. The whole tile is the link. Desktop: up to four to a row; phones: one column of rows
   off a rail down the left. */
function relVis(id){var s=wsplit(id)[0],n=pageIcon(id);
 if(ART[s])return '<span class="aq-related-links__vis is-art" aria-hidden="true"><span class="aq-illustration aq-related-links__art" style="'+artMask(s)+'"></span></span>';
 return n?'<span class="aq-related-links__vis" aria-hidden="true">'+wSpot(n,'l','aq-related-links__spot')+'</span>':''}
BLOCKS['related']=function(b,H){var I=(b.items||[]).filter(wp);
 return sec(H+'<ol class="aq-related-links" style="--n:'+I.length+'">'+I.map(function(id,i){var p=wp(id),n=(i<9?'0':'')+(i+1);
 return '<li><a class="aq-related-links__card" href="#'+e(id)+'" data-wp="'+e(id)+'"><span class="aq-related-links__n" aria-hidden="true">'+n+'</span>'
  +'<span class="aq-related-links__group"><span aria-hidden="true">'+n+' / </span>'+e(p.section)+'</span>'+relVis(id)
  +'<span class="aq-related-links__title">'+tx(p.nav_label)+'<span class="aq-related-links__arrow" aria-hidden="true">→</span></span></a></li>'}).join('')+'</ol>');};
