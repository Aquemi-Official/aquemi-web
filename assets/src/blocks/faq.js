/* Block "faq" -> FAQ: hairline accordion rows (index, question, +/−), all closed; a shared name keeps one answer open.
   Desktop: heading left, questions right (SplitSection). */
var faqN=0;
BLOCKS['faq']=function(b,H){faqN++;return split(H,'<div class="aq-faq">'+(b.items||[]).map(function(it,i){return '<details name="faq-'+faqN+'"><summary>'+idx(i)+'<span class="aq-faq__q">'+tx(it.q)+'</span><span class="aq-faq__sign" aria-hidden="true"></span></summary><div class="aq-faq__a"><p>'+tx(it.a)+'</p></div></details>'}).join('')+'</div>');};
