/* Closing: the call to action at the end of every page, on the navy band.
   c is the page's cta ({h, body, button, link, intent, include, include_label}); p is the page.
   include: optional checklist of short strings (what to send us, each ≤ 8 words), shown as a compact numbered list under
   the body, so a page's "what to send" docs block can fold into its closing. include_label overrides "What to send us". proof: optional {v, l}, one confirmed figure that evidences what the
   closing asks for (an Aquemi commitment or a test we run). Without it there is no proof box; nothing is taken from the hero.
   returns: optional list of what comes back (each ≤ 8 words: "Sizing note", "Block flow diagram"), shown beside include as
   an exchange: what you send → turnaround → what comes back, each return with a small document mark. returns_label
   overrides "What comes back"; turnaround (a placeholder until confirmed) labels the arrow between the two lists. */
function wClosing(c,p){if(!c||!c.h)return '';
 var f=c.proof&&c.proof.v?c.proof:null,inc=c.include&&c.include.length?c.include:null,ret=inc&&c.returns&&c.returns.length?c.returns:null;
 var list=function(cls,label,items,doc){return '<div class="aq-closing__include'+cls+'"><p class="aq-closing__tag">'+tx(label)+'</p><ol>'+items.map(function(x,i){
  return '<li>'+(doc?'<span class="aq-closing__doc is-'+(i%4+1)+'" aria-hidden="true"></span>':idx(i))+'<span>'+tx(x)+'</span></li>'}).join('')+'</ol></div>'};
 var send=inc?list('',c.include_label||'What to send us',inc):'';
 /* Exchange: a cream drawing plate on the navy (concept 49): what you send, the turnaround arrow, what comes back */
 var swap=ret?wPlate('<div class="aq-closing__swap">'+send+'<p class="aq-closing__turn"><span>'+tx(c.turnaround||'')+'</span></p>'+list(' aq-closing__returns',c.returns_label||'What comes back',ret,true)+'</div>',{light:true,cls:'aq-closing__plate',block:['Aquemi','Send','Return']}):send;
 return '<section class="aq-section aq-band--navy aq-closing"><div class="aq-in"><div class="aq-closing__frame">'+
  '<div class="aq-closing__strip" aria-hidden="true"><span>Aquemi</span><span>Next step · '+e((p&&p.nav_label)||'')+'</span><span>'+(ret?'01 Send · 02 Return':'01 Input')+'</span></div>'+
  '<h2 class="aq-closing__h">'+tx(c.h)+'</h2>'+
  (c.body||swap?'<div class="aq-closing__body">'+(c.body?'<p class="aq-lead">'+tx(c.body)+'</p>':'')+swap+'</div>':'')+
  '<div class="aq-closing__foot">'+(f?'<div class="aq-closing__proof"><span class="aq-closing__tag">Proof</span><span class="aq-closing__value">'+tx(f.v)+'</span>'+(f.l?'<span class="aq-closing__label">'+tx(f.l)+'</span>':'')+'</div>':'')+
  '<div class="aq-closing__action">'+wBtn(c.button||'Request a proposal',c.link||'contact-proposal',null,c.intent)+'</div></div>'+
  '</div></div></section>'}
