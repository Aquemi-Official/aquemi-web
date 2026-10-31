/* Block "register" -> NotesRegister: technical notes as a drawing register (revision table). Fields: h, intro (section
   head); topics ["Standards", …] (filter chips, in order); items [{t, topic, std, date, link, featured, d}].
   - Chips: "All" plus one per topic, real buttons with aria-pressed; pressing one hides the other rows client-side
     (and shows every matching row, folded or not). A polite live line says how many notes show.
   - Rows: date (or a mono "Planned" status when the item has none: never invent a date), note number (its position,
     01…), topic, title (a link to item.link when it is a page id), standard. Phones: two-line rows, title, then
     topic · standard · status.
   - Featured panel beside the register (above it on phones): the item with featured: true, else the first item of
     the first topic, labelled "Latest" when it has a date, "Next planned" when not. Shows its number, title, d (one
     line), standard and the page it links to; an equipment Spot vignette (item.spot, else REG_SPOT by its link page),
     aria-hidden.
   - On the page ground, no plate: topic chips as quiet controls in a row, the register a table on line hairlines.
   - fold: N shows the first N rows under "All"; fold_noun names them ("Show all 24 notes"). */
var REG_SPOT={'sys-monitoring':'toc','sys-pw':'ro-skid','sys-wfi-membrane':'ro-skid','sys-wfi-distillation':'still','sys-pure-steam':'pure-steam-generator',
 'sys-storage':'storage-tank','sys-pretreatment':'pretreatment','svc-service':'filter-service','svc-fabrication':'orbital-welder','svc-fat-sat':'test-bay','svc-design':'design-desk','svc-cq':'signed-report','cmp-documentation':'binder-docs'};
BLOCKS['register']=function(b,H){var I=b.items||[],T=b.topics||[];if(!I.length)return sec(H);
 var no=function(i){return (i<9?'0':'')+(i+1)},st=function(it){return it.date?tx(it.date):'<span class="aq-notes-register__planned">Planned</span>'};
 var fi=-1;I.forEach(function(it,i){if(fi<0&&it.featured)fi=i});if(fi<0)I.forEach(function(it,i){if(fi<0&&it.topic===T[0])fi=i});if(fi<0)fi=0;
 var f=I[fi],fl=f.link&&wp(f.link),sp=f.spot||REG_SPOT[f.link]||'';sp=isVig(sp)?sp:'';
 var chips='<div class="aq-notes-register__filter" role="group" aria-label="Filter notes by topic"><span class="aq-notes-register__fk" aria-hidden="true">Filter</span><button type="button" class="aq-notes-register__chip" aria-pressed="true" data-topic="">All <span aria-hidden="true">'+I.length+'</span></button>'
  +T.map(function(t){var n=I.filter(function(it){return it.topic===t}).length;return '<button type="button" class="aq-notes-register__chip" aria-pressed="false" data-topic="'+e(t)+'">'+tx(t)+' <span aria-hidden="true">'+n+'</span></button>'}).join('')+'</div>';
 var panel='<aside class="aq-notes-register__feature" aria-label="'+(f.date?'Latest note':'Next planned note')+'">'
  +'<p class="aq-notes-register__flabel"><span>'+(f.date?'Latest':'Next planned')+'</span><span>No. '+no(fi)+'</span>'+(f.date?'<span>'+tx(f.date)+'</span>':'')+'</p>'
  +'<h3 class="aq-notes-register__ft">'+tx(f.t)+'</h3>'+(f.d?'<p class="aq-notes-register__fd">'+tx(f.d)+'</p>':'')
  +(f.std?'<p class="aq-tags"><span class="aq-tag">'+e(f.std)+'</span></p>':'')
  +(sp?'<span class="aq-notes-register__vig">'+wSpot(sp,'l','aq-notes-register__spot')+'</span>':'')
  +(fl?'<p class="aq-notes-register__go">Applied on '+wlink(f.link)+'</p>':'')+'</aside>';
 var rows=I.map(function(it,i){var tt=it.link&&wp(it.link)?wlink(it.link,it.t):tx(it.t);
  return fli('<tr'+(i===fi?' class="is-featured"':'')+' data-topic="'+e(it.topic||'')+'">',b,i)
   +'<td class="aq-notes-register__date">'+st(it)+'</td><td class="aq-notes-register__no">'+no(i)+'</td>'
   +'<td class="aq-notes-register__topic">'+tx(it.topic||'')+'</td><th scope="row" class="aq-notes-register__t">'+tt+'</th>'
   +'<td class="aq-notes-register__std">'+tx(it.std||'')+'</td></tr>'}).join('');
 var table='<table class="aq-notes-register__table"><thead><tr><th scope="col">Date</th><th scope="col">No.</th><th scope="col">Topic</th><th scope="col">Title</th><th scope="col">Standard</th></tr></thead><tbody>'+rows+'</tbody></table>';
 return sec(H+'<div class="aq-notes-register__plate"><div class="aq-notes-register">'+chips+'<p class="aq-notes-register__count" aria-live="polite">'+I.length+' notes</p>'+panel
  +'<div class="aq-notes-register__reg">'+wFold(b,I.length,table,b.fold_noun||'notes')+'</div></div></div>');};
document.addEventListener('click',function(ev){var c=ev.target.closest&&ev.target.closest('.aq-notes-register__chip');if(!c)return;
 var r=c.closest('.aq-notes-register'),t=c.getAttribute('data-topic'),n=0,fd=r.querySelector('.aq-fold');
 /* With GSAP Flip (and motion allowed) the rows that stay glide to their new places and the ones that join fade in */
 var R=r.querySelectorAll('tbody tr'),fl=window.Flip&&window.gsap&&!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches),S=fl&&Flip.getState(R);
 r.querySelectorAll('.aq-notes-register__chip').forEach(function(x){x.setAttribute('aria-pressed',x===c?'true':'false')});
 r.querySelectorAll('tbody tr').forEach(function(tr){var on=!t||tr.getAttribute('data-topic')===t;tr.hidden=!on;if(on)n++});
 if(fd)fd.classList.toggle('is-filtered',!!t);
 r.querySelector('.aq-notes-register__count').textContent=n+(n===1?' note':' notes')+(t?' in '+t:'');
 if(S)Flip.from(S,{targets:R,duration:0.45,ease:'power2.inOut',onEnter:function(x){return gsap.fromTo(x,{autoAlpha:0,x:-12},{autoAlpha:1,x:0,duration:0.4,stagger:0.03,clearProps:'transform,opacity,visibility'})}})});
