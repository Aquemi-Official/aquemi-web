/* Look "revision-register" -> RevisionRegister (design-system/components/RevisionRegister): technical notes kept as a
   drawing office keeps its revision register. On a navy band lies one limestone register sheet: a title strip with
   the topic tabs (real filter buttons, with counts), then two fields. Left, the lead note set as an editorial page:
   its number huge and light, the reader's question it answers set large as a quotation, its title, standard and the
   page that applies it, with the note's line drawing (Spot) as a figure plate and a revision triangle. Right, the
   register itself: one ruled line per note (status, number, topic, title as the link, standard), the lead note's line
   marked with the same triangle.
   Fields (a register block): h, intro, topics, items [{t, topic, std, date, link, featured, spot, d}], fold,
   fold_noun. Same rules as NotesRegister: never a date that is not given (a mono "Planned" status instead); the lead
   note is the featured one, else the first of the first topic. Filtering shows every matching note, folded or not,
   and a polite live line says how many show. Phones: the lead note first, the register lines on two rows. */
(function(){
var RR_SPOT={'sys-monitoring':'toc','sys-pw':'ro-skid','sys-storage':'storage-tank','sys-pretreatment':'pretreatment'};
LOOKS['revision-register']=function(b,H){var I=b.items||[],T=b.topics||[];if(!I.length)return sec(H);
 var no=function(i){return (i<9?'0':'')+(i+1)},st=function(it){return it.date?tx(it.date):'<span class="aq-revision-register__planned">Planned</span>'};
 var fi=-1;I.forEach(function(it,i){if(fi<0&&it.featured)fi=i});if(fi<0)I.forEach(function(it,i){if(fi<0&&it.topic===T[0])fi=i});if(fi<0)fi=0;
 var f=I[fi],fl=f.link&&wp(f.link),pg=wsplit(f.link)[0],sp=f.spot||RR_SPOT[pg]||pageIcon(pg)||'';sp=isVig(sp)?sp:'';
 var tri='<svg class="aq-revision-register__tri" viewBox="0 0 24 22" aria-hidden="true" focusable="false"><path d="M12 2L22 20H2Z"/></svg>';
 var tabs='<div class="aq-revision-register__tabs" role="group" aria-label="Filter notes by topic"><button type="button" class="aq-revision-register__tab" aria-pressed="true" data-topic="">All <span aria-hidden="true">'+I.length+'</span></button>'
  +T.map(function(t){var n=I.filter(function(it){return it.topic===t}).length;return '<button type="button" class="aq-revision-register__tab" aria-pressed="false" data-topic="'+e(t)+'">'+tx(t)+' <span aria-hidden="true">'+n+'</span></button>'}).join('')+'</div>';
 var lead='<aside class="aq-revision-register__lead" aria-label="'+(f.date?'Latest note':'Next planned note')+'">'
  +'<p class="aq-revision-register__lk"><span>'+(f.date?'Latest':'Next planned')+'</span>'+(f.date?'<span>'+tx(f.date)+'</span>':'')+'</p>'
  +'<p class="aq-revision-register__big" aria-hidden="true">'+tri+'<span class="aq-revision-register__bign">'+no(fi)+'</span></p>'
  +(f.d?'<blockquote class="aq-revision-register__q"><p>'+tx(f.d)+'</p></blockquote>':'')
  +'<h3 class="aq-revision-register__lt">'+tx(f.t)+'</h3>'
  +(f.std?'<p class="aq-revision-register__lstd">'+tx(f.std)+'</p>':'')
  +(sp?'<span class="aq-revision-register__fig" aria-hidden="true">'+wSpot(sp,'l','aq-revision-register__spot')+'</span>':'')
  +(fl?'<p class="aq-revision-register__go">Applied on '+wlink(f.link)+'</p>':'')+'</aside>';
 var rows=I.map(function(it,i){var tt=it.link&&wp(it.link)?wlink(it.link,it.t):tx(it.t);
  return fli('<tr class="aq-revision-register__row'+(i===fi?' is-lead':'')+'" data-topic="'+e(it.topic||'')+'" style="--i:'+i+'">',b,i)
   +'<td class="aq-revision-register__st">'+st(it)+'</td><td class="aq-revision-register__no">'+(i===fi?tri:'')+no(i)+'</td>'
   +'<td class="aq-revision-register__topic">'+tx(it.topic||'')+'</td><th scope="row" class="aq-revision-register__t">'+tt+'</th>'
   +'<td class="aq-revision-register__std">'+tx(it.std||'')+'</td></tr>'}).join('');
 var table='<table class="aq-revision-register__table"><thead><tr><th scope="col">Status</th><th scope="col">No.</th><th scope="col">Topic</th><th scope="col">Title</th><th scope="col">Standard</th></tr></thead><tbody>'+rows+'</tbody></table>';
 return sec(H+'<div class="aq-revision-register" data-theme="light"><div class="aq-revision-register__strip">'+tabs+'<p class="aq-revision-register__count" aria-live="polite">'+I.length+' notes</p></div>'
  +'<div class="aq-revision-register__body">'+lead+'<div class="aq-revision-register__reg">'+wFold(b,I.length,table,b.fold_noun||'notes')+'</div></div></div>','aq-band--navy aq-revision-register-sec')};
document.addEventListener('click',function(ev){var c=ev.target.closest&&ev.target.closest('.aq-revision-register__tab');if(!c)return;
 var r=c.closest('.aq-revision-register'),t=c.getAttribute('data-topic'),n=0,fd=r.querySelector('.aq-fold'),R=r.querySelectorAll('tbody tr');
 var fl=window.Flip&&window.gsap&&!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches),S=fl&&Flip.getState(R);
 r.querySelectorAll('.aq-revision-register__tab').forEach(function(x){x.setAttribute('aria-pressed',x===c?'true':'false')});
 R.forEach(function(tr){var on=!t||tr.getAttribute('data-topic')===t;tr.hidden=!on;if(on)n++});
 if(fd)fd.classList.toggle('is-filtered',!!t);
 r.querySelector('.aq-revision-register__count').textContent=n+(n===1?' note':' notes')+(t?' in '+t:'');
 if(S)Flip.from(S,{targets:R,duration:0.45,ease:'power2.inOut',onEnter:function(x){return gsap.fromTo(x,{autoAlpha:0,x:-12},{autoAlpha:1,x:0,duration:0.4,stagger:0.03,clearProps:'transform,opacity,visibility'})}})});
})();
