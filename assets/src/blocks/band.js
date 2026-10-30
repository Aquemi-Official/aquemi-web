/* Block "band" -> Band */
BLOCKS['band']=function(b,H){return '<section class="aq-section aq-band--'+(b.tone==='sunken'?'sunken':'limestone')+'"><div class="aq-in aq-stack"><h2 class="aq-h2">'+tx(b.h)+'</h2>'+(b.body?'<p class="aq-lead">'+tx(b.body)+'</p>':'')+'</div></section>';};
