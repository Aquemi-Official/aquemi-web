/* Aquemi page renderer: turns a page object from content/pages.json into design-system markup.
   Every class it writes is an Aquemi design-system component (design-system/components/<Name>/README.md);
   styles come from design-system/tokens.css and design-system/components/bundle.css.
   Used by index.html (the site) and design-system.html (the block library). Exposes window.AQ. */
(function(){
var D={web:{pages:[]}};
function e(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
var WP='home',WMENU=false;
var NAVSECT=[['Systems','systems'],['Services','services'],['Industries','industries'],['Compliance','compliance'],['Projects','projects'],['Company','about']];
function W(){return (D.web&&D.web.pages)||[]}
function wp(id){return W().filter(function(p){return p.id===id})[0]}
/* Placeholder: [bracketed facts] in copy */
function tx(s){return e(s).replace(/\[([^\]]{1,140})\]/g,'<span class="aq-ph">[$1]</span>')}
function wlink(id,label){var p=wp(id);return '<a href="#'+e(id)+'" data-wp="'+e(id)+'">'+tx(label||(p&&p.nav_label)||id)+'</a>'}
var ARC='<svg class="aq-arc" viewBox="0 0 420 300" aria-hidden="true"><path class="aq-arc__outer" d="M420 1.5 A 300 300 0 0 0 120 300"/><path class="aq-arc__inner" d="M420 120 A 180 180 0 0 0 240 300"/></svg>';
function sec(inner,cls){return '<section class="aq-section'+(cls?' '+cls:'')+'"><div class="aq-in aq-stack-l">'+inner+'</div></section>'}
function h1(s){return s?'<h2 class="aq-h1">'+tx(s)+'</h2>':''}
/* NavBar */
function wHead(section){var cur=(NAVSECT.filter(function(n){return n[0]===section})[0]||[])[1];
 return '<nav class="aq-nav" aria-label="Main"><a class="aq-nav__home" href="#home" data-wp="home" aria-label="Aquemi home"><img class="aq-nav__logo aq-nav__logo--lockup aq-logo--on-light" src="brand/lockup-navy.svg" alt="aquemi"><img class="aq-nav__logo aq-nav__logo--lockup aq-logo--on-dark" src="brand/lockup-limestone.svg" alt="aquemi"></a><ul class="aq-nav__links">'+NAVSECT.map(function(n){return '<li><a href="#'+n[1]+'" data-wp="'+n[1]+'"'+(n[1]===cur?' aria-current="page"':'')+'>'+n[0]+'</a></li>'}).join('')+'</ul><span class="aq-nav__spacer"></span><a class="aq-btn aq-btn--primary" href="#contact-proposal" data-wp="contact-proposal">Request a proposal</a><button class="aq-btn aq-btn--secondary aq-nav__toggle" type="button" id="wmenu" aria-expanded="'+WMENU+'">Menu</button></nav>'+
 (WMENU?'<div class="aq-menu">'+NAVSECT.concat([['Contact','contact-proposal']]).map(function(n){return '<a href="#'+n[1]+'" data-wp="'+n[1]+'">'+n[0]+'</a>'}).join('')+'</div>':'')}
/* Footer */
function wFoot(){var cols=[['Systems',['sys-pw','sys-wfi-distillation','sys-wfi-membrane','sys-pure-steam','sys-storage','sys-pretreatment','sys-monitoring']],['Services',['svc-design','svc-fabrication','svc-fat-sat','svc-cq','svc-service','svc-upgrades']],['Industries & compliance',['ind-pharma','ind-biotech','ind-meddevice','ind-cdmo','compliance','cmp-documentation','cmp-quality']],['Company',['about','projects','careers','news','contact-proposal','contact-service','contact-locations']]];
 return '<footer class="aq-footer"><div class="aq-in"><div class="aq-footer__cols"><div class="aq-stack"><img class="aq-footer__logo" src="brand/logo-limestone.svg" alt="aquemi"><p class="aq-small">Clean water systems for pharmaceutical manufacturing. Designed, fabricated and tested in <span class="aq-ph">[city], Ontario</span>.</p></div>'+cols.map(function(c){return '<div><h5>'+c[0]+'</h5>'+c[1].filter(wp).map(function(id){return wlink(id)}).join('')+'</div>'}).join('')+'</div><div class="aq-footer__legal"><span>© 2026 Aquemi <span class="aq-ph">[legal entity name]</span></span><span>Privacy · Terms · Accessibility</span></div></div></footer>'}
/* Button */
function wBtn(label,link,kind){return '<a class="aq-btn aq-btn--'+(kind||'primary')+'" href="#'+e(link||'contact-proposal')+'" data-wp="'+e(link||'contact-proposal')+'">'+tx(label)+(kind==='secondary'?'':' <span class="aq-btn__arrow">→</span>')+'</a>'}
/* Hero */
function wHero(p){var home=p.id==='home',img=/^sys-|^svc-|^ind-/.test(p.id)||home;
 var left='<div class="aq-stack">'+(p.eyebrow?'<span class="aq-eyebrow">'+tx(p.eyebrow)+'</span>':'')+'<h1 class="'+(home?'aq-display-xl':'aq-display')+'">'+tx(p.headline)+'</h1>'+(p.lead?'<p class="aq-lead">'+tx(p.lead)+'</p>':'')+
  '<div class="aq-hero__actions">'+(p.primary_cta?wBtn(p.primary_cta,/service/i.test(p.primary_cta)?'contact-service':'contact-proposal'):'')+(p.secondary_cta&&p.secondary_cta.label?'<a class="aq-btn aq-btn--link" href="#'+e(p.secondary_cta.link||'systems')+'" data-wp="'+e(p.secondary_cta.link||'systems')+'">'+tx(p.secondary_cta.label)+' <span class="aq-btn__arrow">→</span></a>':'')+'</div>'+
  (p.tags&&p.tags.length?'<div class="aq-tags">'+p.tags.map(function(t){return '<span class="aq-tag">'+e(t)+'</span>'}).join('')+'</div>':'')+'</div>';
 return '<section class="aq-hero'+(home?' aq-hero--home':'')+'"><div class="aq-in">'+(img?'<div class="aq-hero__grid">'+left+'<div class="aq-photo" role="img" aria-label="Photograph placeholder">[Photograph: '+e(home?'finished skid or installed loop, wide orderly view':(p.nav_label||p.headline))+' · 316L, cool even light]</div></div>':left)+'</div>'+(home?ARC:'')+'</section>'}
/* ProcessDiagram */
function wDiagram(b){var st=b.stages||[],n=st.length,w=170,W=n*w,bh=52;
 var s='<svg viewBox="0 0 '+W+' 110" role="img" aria-label="'+e(st.join(' to '))+'"><defs><marker id="aq-ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto"><path class="aq-diagram__arrow" d="M0 0L8 4L0 8"/></marker></defs>';
 st.forEach(function(t,i){var x=i*w+10,bw=w-34;s+='<rect class="aq-diagram__box" x="'+x+'" y="28" width="'+bw+'" height="'+bh+'"/>';
  var words=String(t).split(' '),l1='',l2='';words.forEach(function(wd){if((l1+' '+wd).trim().length<=15&&!l2)l1=(l1+' '+wd).trim();else l2=(l2+' '+wd).trim()});
  s+='<text class="aq-diagram__label" x="'+(x+bw/2)+'" y="'+(l2?50:58)+'" text-anchor="middle">'+e(l1)+'</text>'+(l2?'<text class="aq-diagram__label" x="'+(x+bw/2)+'" y="67" text-anchor="middle">'+e(l2.slice(0,18))+'</text>':'');
  s+='<text class="aq-diagram__num" x="'+x+'" y="18">'+String(i+1).padStart(2,'0')+'</text>';
  if(i<n-1)s+='<line class="aq-diagram__arrow" x1="'+(x+bw)+'" y1="'+(28+bh/2)+'" x2="'+((i+1)*w+8)+'" y2="'+(28+bh/2)+'" marker-end="url(#aq-ah)"/>'});
 return s+'<line class="aq-diagram__base" x1="10" y1="100" x2="'+(W-24)+'" y2="100"/></svg>'}
/* EnquiryForm fields */
function wField(f,i){var id='wf'+i,lab='<label class="aq-field__label" for="'+id+'">'+tx(f.label)+(f.required?'':' <span class="aq-field__optional">(optional)</span>')+'</label>',help=f.help?'<p class="aq-field__help">'+tx(f.help)+'</p>':'',inp;
 if(f.kind==='select')inp='<select class="aq-field__input" id="'+id+'">'+['Choose…'].concat(f.options||[]).map(function(o){return '<option>'+e(o)+'</option>'}).join('')+'</select>';
 else if(f.kind==='textarea')inp='<textarea class="aq-field__input" id="'+id+'"></textarea>';
 else if(f.kind==='checkbox-group')return '<fieldset class="aq-fieldset aq-field aq-form__full"><legend class="aq-field__label">'+tx(f.label)+'</legend><div class="aq-checks">'+(f.options||[]).map(function(o,j){return '<label><input type="checkbox" id="'+id+'_'+j+'"> '+e(o)+'</label>'}).join('')+'</div>'+help+'</fieldset>';
 else inp=f.unit?'<div class="aq-field__suffix"><input class="aq-field__input" id="'+id+'" inputmode="numeric"><span class="aq-field__unit">'+e(f.unit)+'</span></div>':'<input class="aq-field__input" id="'+id+'" type="'+(f.kind==='email'?'email':f.kind==='tel'?'tel':'text')+'">';
 return '<div class="aq-field'+(f.kind==='textarea'?' aq-form__full':'')+'">'+lab+inp+help+'</div>'}
/* SpecTable cell: a string, or {t, link} to route the reader to another page (link must be a page id) */
function tcell(c){return c&&typeof c==='object'?(c.link&&wp(c.link)?wlink(c.link,c.t):tx(c.t)):tx(c)}
function gridItem(inner,link){return link&&wp(link)?'<a href="#'+e(link)+'" data-wp="'+e(link)+'">'+inner+'</a>':'<div>'+inner+'</div>'}
/* One content section per block type in pages.json */
function wBlock(b){var t=b.type,H=h1(b.h);
 if(t==='prose')return sec(H+'<div class="aq-prose">'+(b.body||[]).map(function(x){return '<p>'+tx(x)+'</p>'}).join('')+'</div>');
 if(t==='grid')return sec('<div class="aq-stack">'+H+(b.intro?'<p class="aq-lead">'+tx(b.intro)+'</p>':'')+'</div><div class="aq-linkgrid">'+(b.items||[]).map(function(it){return gridItem('<span class="aq-h3">'+tx(it.t)+'</span><span class="aq-small">'+tx(it.d)+'</span>'+(it.tag?'<span class="aq-tags"><span class="aq-tag">'+e(it.tag)+'</span></span>':''),it.link)}).join('')+'</div>');
 if(t==='spec'){var cols=b.cols||['Parameter','Specification','Method or reference'];return sec(H+'<div class="aq-stack"><div class="aq-scroll"><table class="aq-spec"><caption>'+tx(b.caption||'')+'</caption><thead><tr>'+cols.map(function(c){return '<th>'+e(c)+'</th>'}).join('')+'</tr></thead><tbody>'+(b.rows||[]).map(function(r){return '<tr'+(r.hl?' class="is-highlight"':'')+'><th scope="row">'+tx(r.p)+'</th><td class="aq-spec__value">'+tx(r.v)+'</td><td class="aq-spec__method">'+tx(r.m||'')+'</td></tr>'}).join('')+'</tbody></table></div>'+(b.note?'<p class="aq-small">'+tx(b.note)+'</p>':'')+'</div>')}
 if(t==='steps')return sec(H+'<div class="aq-steps">'+(b.items||[]).map(function(it){return '<div><span class="aq-h3">'+tx(it.t)+'</span><span class="aq-small">'+tx(it.d)+'</span></div>'}).join('')+'</div>');
 if(t==='diagram')return sec(H+'<div class="aq-diagram">'+wDiagram(b)+'</div>'+(b.caption?'<p class="aq-small aq-prose">'+tx(b.caption)+'</p>':''));
 if(t==='options')return sec(H+'<div class="aq-options">'+(b.items||[]).map(function(it){return '<div><span class="aq-h3">'+tx(it.t)+'</span><span class="aq-small">'+tx(it.d)+'</span></div>'}).join('')+'</div>');
 if(t==='docs')return sec(H+'<ul class="aq-docs">'+(b.items||[]).map(function(x){return '<li>'+tx(typeof x==='string'?x:(x.t||'')+(x.d?' · '+x.d:''))+'</li>'}).join('')+'</ul>','aq-band--sunken');
 if(t==='readout')return '<section class="aq-section"><div class="aq-in aq-readout"><div class="aq-stack"><span class="aq-readout__value">'+tx(b.value)+'</span><span class="aq-eyebrow">'+tx(b.method||'')+'</span></div><p class="aq-lead">'+tx(b.body||'')+'</p></div></section>';
 if(t==='tags')return '<section class="aq-section aq-band--sunken"><div class="aq-in aq-stack">'+(b.h?'<h2 class="aq-h2">'+tx(b.h)+'</h2>':'')+'<div class="aq-tags">'+(b.items||[]).map(function(x){return '<a class="aq-tag" href="#compliance" data-wp="compliance">'+e(x)+'</a>'}).join('')+'</div>'+(b.body?'<p class="aq-small">'+tx(b.body)+'</p>':'')+'</div></section>';
 if(t==='faq')return sec(H+'<div class="aq-faq">'+(b.items||[]).map(function(it){return '<details><summary>'+tx(it.q)+'</summary><p>'+tx(it.a)+'</p></details>'}).join('')+'</div>');
 if(t==='table')return sec(H+'<div class="aq-scroll"><table class="aq-spec"><thead><tr>'+(b.cols||[]).map(function(c){return '<th>'+e(c)+'</th>'}).join('')+'</tr></thead><tbody>'+(b.rows||[]).map(function(r){return '<tr>'+r.map(function(c,i){return i?'<td class="aq-spec__text">'+tcell(c)+'</td>':'<th scope="row">'+tcell(c)+'</th>'}).join('')+'</tr>'}).join('')+'</tbody></table></div>');
 if(t==='band')return '<section class="aq-section aq-band--'+(b.tone==='sunken'?'sunken':'limestone')+'"><div class="aq-in aq-stack"><h2 class="aq-h2">'+tx(b.h)+'</h2>'+(b.body?'<p class="aq-lead">'+tx(b.body)+'</p>':'')+'</div></section>';
 if(t==='form')return sec('<div class="aq-stack">'+H+(b.intro?'<p class="aq-lead">'+tx(b.intro)+'</p>':'')+'</div><form class="aq-form wform" novalidate>'+(b.fields||[]).map(wField).join('')+'<div class="aq-form__actions"><button class="aq-btn aq-btn--primary" type="submit">'+tx(b.submit||'Send')+'</button><span class="aq-small wform-msg" role="status"></span></div></form>');
 if(t==='case')return sec(H+'<div class="aq-cases">'+(b.items||[]).map(function(it){return '<div class="aq-case"><span class="aq-h3">'+tx(it.t)+'</span><dl>'+[['Client',it.client],['Problem',it.problem],['System delivered',it.system],['Measured outcome',it.outcome]].filter(function(x){return x[1]}).map(function(x){return '<dt>'+x[0]+'</dt><dd>'+tx(x[1])+'</dd>'}).join('')+'</dl></div>'}).join('')+'</div>');
 if(t==='related')return sec((b.h?'<h2 class="aq-h2">'+tx(b.h)+'</h2>':'')+'<div class="aq-linkgrid">'+(b.items||[]).filter(wp).map(function(id){var p=wp(id);return gridItem('<span class="aq-eyebrow">'+e(p.section)+'</span><span class="aq-h3">'+tx(p.nav_label)+'</span><span class="aq-small">'+tx(p.lead||'').slice(0,400)+'</span>',id)}).join('')+'</div>');
 return ''}
/* Page: NavBar, Hero, sections, closing Band, Footer */
function wPage(p){var c=p.cta;
 return wHead(p.section)+wHero(p)+(p.blocks||[]).map(wBlock).join('')+
  (c&&c.h?'<section class="aq-section aq-band--navy aq-closing"><div class="aq-in aq-stack"><h2 class="aq-h1">'+tx(c.h)+'</h2>'+(c.body?'<p class="aq-lead">'+tx(c.body)+'</p>':'')+wBtn(c.button||'Request a proposal',c.link||'contact-proposal')+'</div>'+ARC+'</section>':'')+wFoot()}
document.addEventListener('click',function(ev){var t=ev.target.closest('[data-wp]');if(!t)return;ev.preventDefault();WP=t.dataset.wp;WMENU=false;
 AQ.onNav(WP)});
var AQ=window.AQ={e:e,tx:tx,wp:wp,wPage:wPage,wBlock:wBlock,wHead:wHead,wHero:wHero,wFoot:wFoot,wBtn:wBtn,wDiagram:wDiagram,ARC:ARC,
 setPages:function(p){D.web={pages:p}},pages:W,
 get page(){return WP},set page(v){WP=v},
 get menuOpen(){return WMENU},set menuOpen(v){WMENU=v},
 onNav:function(id){location.href='index.html#'+id}};
})();
