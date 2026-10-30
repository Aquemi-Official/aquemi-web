/* Block "readout" -> Readout */
BLOCKS['readout']=function(b,H){return '<section class="aq-section"><div class="aq-in aq-readout"><div class="aq-stack"><span class="aq-readout__value">'+tx(b.value)+'</span><span class="aq-eyebrow">'+tx(b.method||'')+'</span></div><p class="aq-lead">'+tx(b.body||'')+'</p></div></section>';};
