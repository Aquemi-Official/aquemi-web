/* Block "related" -> RelatedLinks: staggered linked cards on one pipe. Eyebrow, title, and the lead's first sentence only when it is 130 characters or fewer.
   Pages with a drawing in ART (parts/Hero.js) show it small in their card. */
BLOCKS['related']=function(b,H){return sec(H+'<ol class="aq-related-links">'+(b.items||[]).filter(wp).map(function(id){var p=wp(id),s=first(p.lead);
 return '<li><a class="aq-related-links__card" href="#'+e(id)+'" data-wp="'+e(id)+'">'+(ART[id]?'<span class="aq-illustration aq-related-links__art" aria-hidden="true" style="'+artMask(id)+'"></span>':'')+
  '<span class="aq-eyebrow">'+e(p.section)+'</span><span class="aq-h3 aq-related-links__title">'+tx(p.nav_label)+'</span>'+(s&&s.length<=130?'<span class="aq-small">'+tx(s)+'</span>':'')+'</a></li>'}).join('')+'</ol>');};
