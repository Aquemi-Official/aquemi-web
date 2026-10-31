/* Block "faq" -> FAQ: hairline accordion rows (index, question, +/−), all closed; a shared name keeps one answer open.
   The sign is [ glyph ]: a drawn plus whose upright turns flat (minus) when open. FAQ/motion.js eases the height on open/close.
   Desktop: heading left, questions right (SplitSection).
   One link per answer (DR-009: one line and a link): an item may carry link (a page id or page#anchor), link_label (its
   words; default the linked block's heading, else the page's name, wlabel) and intent (options the linked form ticks
   on arrival). It follows the answer as the Button link variant (wBtn), so page#anchor and intents work as on every
   button. Answer text stays plain: no markup is parsed out of "a". A link to a missing page renders nothing. */
var faqN=0;
function faqMore(it){return it.link&&wp(it.link)?'<p class="aq-faq__more">'+wBtn(it.link_label||wlabel(it.link),it.link,'link',it.intent)+'</p>':''}
BLOCKS['faq']=function(b,H){faqN++;return split(H,'<div class="aq-faq">'+(b.items||[]).map(function(it,i){return '<details name="faq-'+faqN+'"><summary>'+idx(i)+'<span class="aq-faq__q">'+tx(it.q)+'</span><span class="aq-faq__sign" aria-hidden="true"><span class="aq-faq__glyph"></span></span></summary><div class="aq-faq__a"><p>'+tx(it.a)+'</p>'+faqMore(it)+'</div></details>'}).join('')+'</div>');};
