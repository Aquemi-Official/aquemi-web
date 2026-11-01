/* Closing: the call to action at the end of every page, on the navy band.
   c is the page's cta ({h, body, button, link, intent, include, include_label}); p is the page.
   include: optional checklist of short strings (what to send us, each ≤ 8 words), shown as a compact numbered list under
   the body, so a page's "what to send" docs block can fold into its closing. include_label overrides "What to send us". proof: optional {v, l}, one confirmed figure that evidences what the
   closing asks for (an Aquemi commitment or a test we run). Without it there is no proof box; nothing is taken from the hero.
   returns: optional list of what comes back (each ≤ 8 words: "Sizing note", "Block flow diagram"), shown beside include as
   an exchange: what you send → turnaround → what comes back. returns_label
   overrides "What comes back"; turnaround (a placeholder until confirmed) labels the arrow between the two lists. */
function wClosing(c,p){if(!c||!c.h)return '';
 var f=c.proof&&c.proof.v?c.proof:null,inc=c.include&&c.include.length?c.include:null,ret=inc&&c.returns&&c.returns.length?c.returns:null;
 var list=function(cls,label,items){return '<div class="aq-closing__include'+cls+'"><p class="aq-closing__tag">'+tx(label)+'</p><ol>'+items.map(function(x,i){
  return '<li>'+idx(i)+'<span>'+tx(x)+'</span></li>'}).join('')+'</ol></div>'};
 var send=inc?list('',c.include_label||'What to send us',inc):'';
 /* Exchange: what you send, the turnaround, what comes back, as two hairline lists on the navy */
 var swap=ret?'<div class="aq-closing__plate"><div class="aq-closing__swap">'+send+'<p class="aq-closing__turn"><span class="aq-closing__arrow" aria-hidden="true">→</span><span>'+tx(c.turnaround||'')+'</span></p>'+list(' aq-closing__returns',c.returns_label||'What comes back',ret)+'</div></div>':send;
 /* The original closing: one centred headline, lead and button, with the brand mark large and faint, cut by the top-left corner.
    A checklist or exchange, when the page has one, sits below the button under a hairline. */
 return '<section class="aq-section aq-band--navy aq-closing">'+MARK_CLOSE+'<div class="aq-in"><div class="aq-closing__frame">'+
  '<h2 class="aq-closing__h">'+tx(c.h)+'</h2>'+
  (c.body?'<p class="aq-lead aq-closing__lead">'+tx(c.body)+'</p>':'')+
  '<div class="aq-closing__action">'+wBtn(c.button||'Request a proposal',c.link||'contact-proposal',null,c.intent)+'</div>'+
  (swap||f?'<div class="aq-closing__more">'+swap+(f?'<div class="aq-closing__proof"><span class="aq-closing__tag">Proof</span><span class="aq-closing__value">'+tx(f.v)+'</span>'+(f.l?'<span class="aq-closing__label">'+tx(f.l)+'</span>':'')+'</div>':'')+'</div>':'')+
  '</div></div></section>'}
/* The brand mark, large and faint, cut by the band's top-left corner (the mark's supplied path, never redrawn). */
var MARK_CLOSE='<svg class="aq-closing__mark" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M233.32 159.66A73.66 73.66 0 1 1 86.00 159.66A73.66 73.66 0 1 1 233.32 159.66ZM233.32 352.34A73.66 73.66 0 1 1 159.66 278.68A119.03 119.03 0 0 0 278.68 159.66A73.66 73.66 0 1 1 352.34 233.32A119.03 119.03 0 0 0 233.32 352.34ZM426.00 352.34A73.66 73.66 0 1 1 278.68 352.34A73.66 73.66 0 1 1 426.00 352.34Z"/></svg>';
