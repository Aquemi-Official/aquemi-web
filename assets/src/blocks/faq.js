/* Block "faq" -> FAQ: numbered question cards, first one open; a shared name keeps one answer open at a time */
var faqN=0;
BLOCKS['faq']=function(b,H){faqN++;return sec(H+'<div class="aq-faq">'+(b.items||[]).map(function(it,i){return '<details name="faq-'+faqN+'"'+(i?'':' open')+'><summary><span class="aq-faq__tag"></span><span class="aq-faq__q">'+tx(it.q)+'</span></summary><div class="aq-faq__a"><p>'+tx(it.a)+'</p></div></details>'}).join('')+'</div>');};
