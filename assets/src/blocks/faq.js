/* Block "faq" -> FAQ in SplitSection */
BLOCKS['faq']=function(b,H){return split(H,'<div class="aq-faq">'+(b.items||[]).map(function(it){return '<details><summary>'+tx(it.q)+'</summary><p>'+tx(it.a)+'</p></details>'}).join('')+'</div>');};
