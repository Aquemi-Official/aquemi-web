/* Block "options" -> OptionList: configuration options as rows of the shared list grammar: index, title, one line. */
BLOCKS['options']=function(b,H){var I=b.items||[];return sec(H+wFold(b,I.length,'<ol class="aq-rows aq-options">'+I.map(function(it,i){return fli(wRow(i,it.t,it.d),b,i)}).join('')+'</ol>',b.fold_noun||'options'));};
