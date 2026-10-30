/* Block "related" -> RelatedLinks: the pages to read next (concept 17). items: page ids. Each is one linked card hung
   from a drawn pipe: a junction node, a large flow number, a thumbnail of the target page, "01 / Systems" as a mono
   label and the page's title in condensed capitals with an arrow. Thumbnail: the target page's Spot (REL_SPOT), else its
   equipment drawing (ART in parts/Hero.js), else a fitting Icon (REL_ICON), else none. Desktop: up to four to a row,
   every second card hung lower so the pipe reads as a route; phones: one vertical spine with a node per card. */
var REL_SPOT={'sys-pretreatment':'pretreatment','sys-pw':'ro-skid','sys-wfi-distillation':'still','sys-wfi-membrane':'edi-stack','sys-pure-steam':'pure-steam-generator','sys-storage':'storage-tank'};
var REL_ICON={'systems':'loop','services':'wrench','industries':'tank','compliance':'stamp','cmp-documentation':'binder','cmp-quality':'magnifier','projects':'pid','about':'weld','careers':'calendar','news':'calendar','contact-proposal':'pid','contact-service':'wrench','contact-locations':'gauge'};
function relThumb(id){if(REL_SPOT[id])return wSpot(REL_SPOT[id],'m','aq-related-links__thumb');
 if(ART[id])return '<span class="aq-illustration aq-related-links__thumb aq-related-links__art" aria-hidden="true" style="'+artMask(id)+'"></span>';
 if(REL_ICON[id])return wIcon(REL_ICON[id],'aq-related-links__thumb aq-related-links__icon');return ''}
BLOCKS['related']=function(b,H){var I=(b.items||[]).filter(wp);
 return sec(H+'<ol class="aq-related-links" style="--n:'+I.length+'">'+I.map(function(id,i){var p=wp(id),n=(i<9?'0':'')+(i+1);
 return '<li><a class="aq-related-links__card" href="#'+e(id)+'" data-wp="'+e(id)+'"><span class="aq-related-links__n" aria-hidden="true">'+n+'</span>'+relThumb(id)
  +'<span class="aq-related-links__group"><span aria-hidden="true">'+n+' / </span>'+e(p.section)+'</span>'
  +'<span class="aq-related-links__title">'+tx(p.nav_label)+'</span></a></li>'}).join('')+'</ol>');};
