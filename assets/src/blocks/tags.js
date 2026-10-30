/* Block "tags" -> StandardTag band */
BLOCKS['tags']=function(b,H){return '<section class="aq-section aq-band--sunken"><div class="aq-in aq-stack">'+H+'<div class="aq-tags">'+(b.items||[]).map(function(x){return '<a class="aq-tag" href="#compliance" data-wp="compliance">'+e(x)+'</a>'}).join('')+'</div>'+(b.body?'<p class="aq-small">'+tx(b.body)+'</p>':'')+'</div></section>';};
