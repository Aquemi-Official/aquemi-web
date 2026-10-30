/* Block "diagram" -> ProcessDiagram */
BLOCKS['diagram']=function(b,H){return sec(H+'<div class="aq-diagram">'+wDiagram(b)+'</div>'+(b.caption?'<p class="aq-small aq-prose">'+tx(b.caption)+'</p>':''));};
