/* Block "diagram" -> ProcessDiagram. Fields: stages [names, 5 to 7], optional base (what spans every stage), caption. */
BLOCKS['diagram']=function(b,H){return sec(H+wDiagram(b)+(b.caption?'<p class="aq-small aq-prose">'+tx(b.caption)+'</p>':''));};
