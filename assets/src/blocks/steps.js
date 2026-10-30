/* Block "steps" -> ProcessSteps: a real sequence as rows of the shared list grammar (index, step name, what happens),
   joined by one thin riser through the index column. */
BLOCKS['steps']=function(b,H){var I=b.items||[];return sec(H+wFold(b,I.length,'<ol class="aq-rows aq-steps">'+I.map(function(it,i){return fli(wRow(i,it.t,it.d),b,i)}).join('')+'</ol>','steps'));};
