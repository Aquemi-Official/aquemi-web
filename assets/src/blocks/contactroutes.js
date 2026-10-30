/* Block "contact-routes" -> ContactRoutes: the ways into Aquemi as cards, each with its own next steps (1 → 2 → 3) and
   response clock. Fields: routes [{t, d, steps: [3 strings], clock, link: "<page id>", phone?, urgent?, current?,
   action?, intent?}]. The route for the page being read (current: true, or link = this page) is marked "This page"
   and its action scrolls to this page's form; the others link to their pages (action label defaults to that page's
   nav label; intent ticks options on its form). An urgent route sits on limestone with its phone number set large
   (a tel: link once the number is real) and comes first in the markup, so phones show it first; desktop keeps the
   data order. Every clock stays the page's own placeholder until confirmed. */
var CR_CLOCK='<svg class="aq-contact-routes__icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><circle cx="8" cy="8" r="6.5"/><path d="M8 4.5V8L10.5 9.5"/></svg>';
var CR_PHONE='<svg class="aq-contact-routes__icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M5.5 1.5H3.5A1.5 1.5 0 0 0 2 3C2 9 7 14 13 14A1.5 1.5 0 0 0 14.5 12.5V10.5L11.5 9.5L10 11C8 10 6 8 5 6L6.5 4.5Z"/></svg>';
function crPhone(s){s=String(s||'');var n=s.replace(/[^\d+]/g,'');
 return s.indexOf('[')<0&&n.length>=7?'<a class="aq-contact-routes__num" href="tel:'+e(n)+'">'+tx(s)+'</a>':'<span class="aq-contact-routes__num">'+tx(s)+'</span>'}
BLOCKS['contact-routes']=function(b,H){var R=b.routes||[];
 var p=W().filter(function(q){return (q.blocks||[]).indexOf(b)>=0})[0]||wp(WP)||{},PB=p.blocks||[],fi=-1;
 PB.forEach(function(x,i){if(fi<0&&x.type==='form')fi=i});
 var fid=fi>=0&&PB[fi].nav?jid(PB[fi],fi):'';
 var order=R.map(function(r,i){return i}).sort(function(a,c){return (R[c].urgent?1:0)-(R[a].urgent?1:0)||a-c});
 var cards=order.map(function(i){var r=R[i],cur=!!(r.current||(r.link&&r.link===p.id)),urg=!!r.urgent,S=r.steps||[];
  var go=cur?'<a class="aq-btn aq-btn--'+(urg?'secondary':'primary')+'" href="#'+e(p.id||WP)+'" '+(fid?'data-jump="'+e(fid)+'"':'data-routes-form=""')+'>'+tx(r.action||'Use the form below')+' <span class="aq-btn__arrow" aria-hidden="true">↓</span></a>'
   :r.link&&wp(r.link)?wBtn(r.action||wp(r.link).nav_label||r.link,r.link,'secondary',r.intent):'';
  return '<li class="aq-contact-routes__route'+(urg?' is-urgent':'')+(cur?' is-current':'')+'" style="--o:'+i+'"'+(urg?' data-theme="light"':'')+(cur?' aria-current="page"':'')+'>'
   +(cur||urg?'<p class="aq-contact-routes__mark">'+(urg?'<span class="aq-contact-routes__dot" aria-hidden="true"></span>Urgent':'')+(urg&&cur?' · ':'')+(cur?'This page':'')+'</p>':'')
   +'<h3 class="aq-contact-routes__t">'+tx(r.t)+'</h3>'
   +(r.d?'<p class="aq-contact-routes__d">'+tx(r.d)+'</p>':'')
   +(r.phone?'<p class="aq-contact-routes__phone">'+CR_PHONE+'<span class="aq-contact-routes__k">Call</span>'+crPhone(r.phone)+'</p>':'')
   +(S.length?'<ol class="aq-contact-routes__steps">'+S.map(function(s,k){return '<li><span class="aq-contact-routes__n" aria-hidden="true">'+(k+1)+'</span><span class="aq-contact-routes__s">'+tx(s)+'</span></li>'}).join('')+'</ol>':'')
   +(r.clock?'<p class="aq-contact-routes__clock">'+CR_CLOCK+'<span class="aq-contact-routes__k">Response</span><span class="aq-contact-routes__v">'+tx(r.clock)+'</span></p>':'')
   +(go?'<div class="aq-contact-routes__action">'+go+'</div>':'')+'</li>'}).join('');
 return sec(H+'<ul class="aq-contact-routes" style="--routes:'+R.length+'">'+cards+'</ul>');};
/* Fallback for a page whose form has no nav id: scroll to the first form after the routes */
document.addEventListener('click',function(ev){var a=ev.target.closest&&ev.target.closest('[data-routes-form]');if(!a)return;var f=document.querySelector('.wform');if(!f)return;ev.preventDefault();
 (f.closest('section')||f).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})});
