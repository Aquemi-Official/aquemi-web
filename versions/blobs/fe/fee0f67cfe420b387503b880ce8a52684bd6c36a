/* One content section per block type in pages.json */
function wBlock(b){var f=BLOCKS[b.type];return f?f(b,h1(b.h)):''}
/* Page: NavBar, Hero, SectionNav, sections, closing Band, Footer */
function wPage(p){var c=p.cta;
 return wHead(p.section)+wHero(p)+wSectionNav(p)+(p.blocks||[]).map(function(b,i){var h=wBlock(b);return b.nav?h.replace('<section class=','<section id="'+jid(b,i)+'" class='):h}).join('')+
  (c&&c.h?'<section class="aq-section aq-band--navy aq-closing"><div class="aq-in aq-stack"><h2 class="aq-h1">'+tx(c.h)+'</h2>'+(c.body?'<p class="aq-lead">'+tx(c.body)+'</p>':'')+wBtn(c.button||'Request a proposal',c.link||'contact-proposal')+'</div>'+ARC+'</section>':'')+wFoot()}
document.addEventListener('click',function(ev){var g=ev.target.closest('[data-step-go]');if(g){var fm=g.closest('form'),to=+g.dataset.stepGo;fm.querySelectorAll('.aq-form__step').forEach(function(s){s.hidden=+s.dataset.step!==to});fm.querySelectorAll('.aq-form__progress li').forEach(function(l,i){if(i===to)l.setAttribute('aria-current','step');else l.removeAttribute('aria-current')});var lg=fm.querySelector('[data-step="'+to+'"] legend');if(lg){lg.tabIndex=-1;lg.focus()}fm.scrollIntoView({block:'start'});return}
 var j=ev.target.closest('[data-jump]');if(j){var s=document.getElementById(j.dataset.jump);if(s){ev.preventDefault();s.scrollIntoView({behavior:'smooth',block:'start'})}return}
 var t=ev.target.closest('[data-wp]');if(!t)return;ev.preventDefault();WP=t.dataset.wp;WMENU=false;
 AQ.onNav(WP)});
var AQ=window.AQ={e:e,tx:tx,wp:wp,wPage:wPage,wBlock:wBlock,wHead:wHead,wHero:wHero,wFoot:wFoot,wBtn:wBtn,wDiagram:wDiagram,wPath:wPath,ARC:ARC,
 setPages:function(p){D.web={pages:p}},pages:W,
 get page(){return WP},set page(v){WP=v},
 get menuOpen(){return WMENU},set menuOpen(v){WMENU=v},
 onNav:function(id){location.href='index.html#'+id}};
})();
