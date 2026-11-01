/* Block "contact-routes" -> ContactRoutes (pass 9): the ways into Aquemi as route sheets dealt onto a navy band, after
   inspiration/gemini/62-concept-contact-routes.png. One route line runs under the heading and drops into each sheet's
   folder tab ("Route N", plus "Urgent" / "This page"); every sheet shows what happens after you act as a visible
   sequence: its steps on a water rail, numbered, the rail running on down to the response clock (the terminus), then
   the action.
   Ordinary routes are limestone sheets; the urgent route is the dark sheet with the call bar (the number large in mono,
   a tel: link once it is real). Sheets share one subgrid (tab, head, call, steps, clock, action), so rails, clocks and actions line up.
   Fields: routes [{t, d, steps: [3 strings], clock, link: "<page id>", phone?, urgent?, current?, action?, intent?}].
   The route for the page being read (current: true, or link = this page) is marked "This page" and its action scrolls
   to this page's form; the others link to their pages (action label defaults to that page's nav label; intent ticks
   options on its form). The urgent route comes first in the markup, so phones show it first; desktop keeps the data
   order (--o). Every clock stays the page's own placeholder until confirmed. */
var CR_CLOCK=wIcon('clock','aq-contact-routes__icon');
var CR_PHONE=wIcon('phone','aq-contact-routes__icon');
/* The call line's number: wtel in core.js, the one phone rule (a tel: link once confirmed, the placeholder until then) */
function crPhone(s){return wtel(s,'aq-contact-routes__num')}
BLOCKS['contact-routes']=function(b,H){var R=b.routes||[];
 var p=W().filter(function(q){return (q.blocks||[]).indexOf(b)>=0})[0]||wp(WP)||{},PB=p.blocks||[],fi=-1;
 PB.forEach(function(x,i){if(fi<0&&x.type==='form')fi=i});
 var fid=fi>=0&&PB[fi].nav?jid(PB[fi],fi):'';
 var order=R.map(function(r,i){return i}).sort(function(a,c){return (R[c].urgent?1:0)-(R[a].urgent?1:0)||a-c});
 var cards=order.map(function(i){var r=R[i],cur=!!(r.current||(r.link&&r.link===p.id)),urg=!!r.urgent,S=r.steps||[];
  var go=cur?'<a class="aq-btn aq-btn--primary" href="#'+e(p.id||WP)+'" '+(fid?'data-jump="'+e(fid)+'"':'data-routes-form=""')+'>'+tx(r.action||'Use the form below')+' <span class="aq-btn__arrow" aria-hidden="true">↓</span></a>'
   :r.link&&wp(r.link)?wBtn(r.action||wp(r.link).nav_label||r.link,r.link,'secondary',r.intent):'';
  return '<li class="aq-contact-routes__route'+(urg?' is-urgent':'')+(cur?' is-current':'')+'" style="--o:'+i+'" data-theme="'+(urg?'dark':'light')+'"'+(cur?' aria-current="page"':'')+'>'
   +'<p class="aq-contact-routes__tab"><span class="aq-contact-routes__rn">Route '+(i+1)+'</span>'
    +(urg?'<span class="aq-contact-routes__mark">Urgent</span>':'')
    +(cur?'<span class="aq-contact-routes__mark">This page</span>':'')+'</p>'
   +'<div class="aq-contact-routes__body"><div class="aq-contact-routes__main"><h3 class="aq-contact-routes__t">'+tx(r.t)+'</h3>'
    +(r.d?'<p class="aq-contact-routes__d">'+tx(r.d)+'</p>':'')+'</div>'
   +(r.phone?'<p class="aq-contact-routes__call">'+CR_PHONE+'<span class="aq-contact-routes__k">Call</span>'+crPhone(r.phone)+'</p>':'')
   +(S.length?'<ol class="aq-contact-routes__steps">'+S.map(function(s,k){return '<li><span class="aq-contact-routes__node" aria-hidden="true"></span><span class="aq-contact-routes__n" aria-hidden="true">'+(k<9?'0':'')+(k+1)+'</span><span class="aq-contact-routes__s">'+tx(s)+'</span></li>'}).join('')+'</ol>':'')+'</div>'
   +(r.clock?'<p class="aq-contact-routes__clock"><span class="aq-contact-routes__end" aria-hidden="true">'+CR_CLOCK+'</span><span class="aq-contact-routes__k">Response</span><span class="aq-contact-routes__v">'+tx(r.clock)+'</span></p>':'<span class="aq-contact-routes__clock is-empty" aria-hidden="true"></span>')
   +'<div class="aq-contact-routes__action">'+go+'</div>'
   +'</li>'}).join('');
 return sec(H+'<ul class="aq-contact-routes" style="--routes:'+R.length+'">'+cards+'</ul>','aq-band--navy aq-contact-routes-sec');};
/* Fallback for a page whose form has no nav id: scroll to the first form after the routes */
document.addEventListener('click',function(ev){var a=ev.target.closest&&ev.target.closest('[data-routes-form]');if(!a)return;var f=document.querySelector('.wform');if(!f)return;ev.preventDefault();
 (f.closest('section')||f).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})});
