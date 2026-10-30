/* Block "related" -> LinkGrid of related pages */
BLOCKS['related']=function(b,H){return sec(H+'<div class="aq-linkgrid">'+(b.items||[]).filter(wp).map(function(id){var p=wp(id);return gridItem('<span class="aq-eyebrow">'+e(p.section)+'</span><span class="aq-h3">'+tx(p.nav_label)+'</span><span class="aq-small">'+tx(first(p.lead))+'</span>',id)}).join('')+'</div>');};
