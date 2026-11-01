/* Block "faq" -> FAQ: question rows (index, question, a square +/− key), all closed; a shared name keeps one answer open.
   FAQ/motion.js eases the height on open/close.
   Desktop: heading left, questions right (SplitSection). Pass 9: under the heading a large outline counter, the dial
   (aq-faq__dial, aria-hidden): the number of questions at rest, the open question's number while one is open ("02 of
   06"), turned over by FAQ/motion.js; the head column stays in view while the rows scroll.
   One link per answer (DR-009: one line and a link): an item may carry link (a page id or page#anchor), link_label (its
   words; default the linked block's heading, else the page's name, wlabel) and intent (options the linked form ticks
   on arrival). It follows the answer as the Button link variant (wBtn), so page#anchor and intents work as on every
   button. Answer text stays plain: no markup is parsed out of "a". A link to a missing page renders nothing. */
var faqN=0;
function faqMore(it){return it.link&&wp(it.link)?'<p class="aq-faq__more">'+wBtn(it.link_label||wlabel(it.link),it.link,'link',it.intent)+'</p>':''}
function faqDial(n){var t=(n<10?'0':'')+n;return '<div class="aq-faq__dial" aria-hidden="true" data-total="'+t+'"><span class="aq-faq__dial-n"><span>'+t+'</span></span><span class="aq-faq__dial-of"><span class="aq-faq__dial-k">'+(n===1?'question':'questions')+'</span></span></div>'}
BLOCKS['faq']=function(b,H){faqN++;var I=b.items||[];return split(H+faqDial(I.length),'<div class="aq-faq">'+I.map(function(it,i){return '<details name="faq-'+faqN+'"><summary>'+idx(i)+'<span class="aq-faq__q">'+tx(it.q)+'</span><span class="aq-faq__sign" aria-hidden="true"><span class="aq-faq__glyph"></span></span></summary><div class="aq-faq__a"><p>'+tx(it.a)+'</p>'+faqMore(it)+'</div></details>'}).join('')+'</div>','aq-faq-section');};
