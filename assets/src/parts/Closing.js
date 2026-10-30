/* Closing: the call to action at the end of every page, on the navy band.
   c is the page's cta ({h, body, button, link, intent, include, include_label}); p is the page.
   include: optional checklist of short strings (what to send us, each ≤ 8 words), shown as a compact numbered list under
   the body, so a page's "what to send" docs block can fold into its closing. include_label overrides "What to send us". proof: optional {v, l}, one confirmed figure that evidences what the
   closing asks for (an Aquemi commitment or a test we run). Without it there is no proof box; nothing is taken from the hero.
   returns: optional list of what comes back (each ≤ 8 words: "Sizing note", "Block flow diagram"), shown beside include as
   an exchange: what you send → turnaround → what comes back, each return with a small document mark. returns_label
   overrides "What comes back"; turnaround (a placeholder until confirmed) labels the arrow between the two lists. */
function wClosing(c,p){if(!c||!c.h)return '';
 var f=c.proof&&c.proof.v?c.proof:null;
 return '<section class="aq-section aq-band--navy aq-closing"><div class="aq-in"><div class="aq-closing__frame">'+
  '<h2 class="aq-closing__h">'+tx(c.h)+'</h2>'+
  '<div class="aq-closing__body">'+(c.body?'<p class="aq-lead">'+tx(c.body)+'</p>':'')+
  (c.include&&c.include.length?(c.returns&&c.returns.length?'<div class="aq-closing__swap">':'')+'<div class="aq-closing__include"><p class="aq-closing__tag">'+tx(c.include_label||'What to send us')+'</p><ol>'+c.include.map(function(x,i){return '<li>'+idx(i)+'<span>'+tx(x)+'</span></li>'}).join('')+'</ol></div>'
   +(c.returns&&c.returns.length?'<p class="aq-closing__turn"><span>'+tx(c.turnaround||'')+'</span></p><div class="aq-closing__include aq-closing__returns"><p class="aq-closing__tag">'+tx(c.returns_label||'What comes back')+'</p><ol>'+c.returns.map(function(x){return '<li><span class="aq-closing__doc" aria-hidden="true"></span><span>'+tx(x)+'</span></li>'}).join('')+'</ol></div></div>':''):'')+
  (f?'<div class="aq-closing__proof"><span class="aq-closing__tag">Proof</span><span class="aq-closing__value">'+tx(f.v)+'</span>'+(f.l?'<span class="aq-closing__label">'+tx(f.l)+'</span>':'')+'</div>':'')+
  '</div><div class="aq-closing__action">'+wBtn(c.button||'Request a proposal',c.link||'contact-proposal',null,c.intent)+'</div>'+
  '</div></div></section>'}
