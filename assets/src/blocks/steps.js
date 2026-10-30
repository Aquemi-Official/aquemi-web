/* Block "steps" -> ProcessSteps: a real sequence as rows of the shared list grammar (index, step name, what happens),
   joined by one thin riser through the index column. */
BLOCKS['steps']=function(b,H){return sec(H+'<ol class="aq-rows aq-steps">'+(b.items||[]).map(function(it,i){return wRow(i,it.t,it.d)}).join('')+'</ol>');};
