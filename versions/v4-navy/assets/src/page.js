/* One content section per block type in pages.json */
function wBlock(b){var f=BLOCKS[b.type];return f?f(b,wSecHead(b)):''}
/* Ground: the page is a navy blueprint (data-theme="dark" on the page). Reading blocks (spec rows, tables, documents,
   prose, FAQ, forms, case studies) are laid on light drawing sheets; diagrams, routes, options, grids and related links
   stay on the navy. A block may set ground: "light" or "dark" to override. Consecutive light blocks share one sheet,
   which ends in a small title block (page name, sheet number) like a drawing sheet. */
var LIGHT={spec:1,table:1,docs:1,prose:1,faq:1,form:1,'case':1,failures:1,evidence:1};/* keyed by table shape (as) or block type */
function ground(b){return b.ground==='light'||b.ground==='dark'?b.ground:LIGHT[b.as||b.type]?'light':'dark'}
function wSheet(inner,p,n){return '<div class="aq-sheet" data-theme="light">'+inner+'<div class="aq-sheet__block" aria-hidden="true"><span>Aquemi</span><span>'+e(p.nav_label||p.id)+'</span><span>Sheet '+(n<10?'0':'')+n+'</span></div></div>'}
/* Page: NavBar, Hero, SectionNav, sections (navy ground and light sheets), Closing, Footer */
function wPage(p){var c=p.cta,out='',run='',n=0;
 (p.blocks||[]).forEach(function(b,i){var h=wBlock(b);if(b.nav)h=h.replace('<section class=','<section id="'+jid(b,i)+'" class=');
  if(ground(b)==='light'){run+=h;return}
  if(run){out+=wSheet(run,p,++n);run=''}out+=h});
 if(run)out+=wSheet(run,p,++n);
 return wHead(p.section)+wHero(p)+wSectionNav(p)+out+wClosing(c,p)+wFoot()}
document.addEventListener('click',function(ev){var g=ev.target.closest('[data-step-go]');if(g){var fm=g.closest('form'),to=+g.dataset.stepGo;fm.querySelectorAll('.aq-form__step').forEach(function(s){s.hidden=+s.dataset.step!==to});fm.querySelectorAll('.aq-form__progress li').forEach(function(l,i){if(i===to)l.setAttribute('aria-current','step');else l.removeAttribute('aria-current')});var lg=fm.querySelector('[data-step="'+to+'"] legend');if(lg){lg.tabIndex=-1;lg.focus()}fm.scrollIntoView({block:'start'});return}
 var j=ev.target.closest('[data-jump]');if(j){var s=document.getElementById(j.dataset.jump);if(s){ev.preventDefault();s.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}return}
 var t=ev.target.closest('[data-wp]');if(!t)return;ev.preventDefault();WP=t.dataset.wp;WMENU=false;WINTENT=t.dataset.intent||'';
 AQ.onNav(WP)});
var AQ=window.AQ={e:e,tx:tx,wp:wp,wPage:wPage,wBlock:wBlock,wHead:wHead,wHero:wHero,wFoot:wFoot,wBtn:wBtn,wDiagram:wDiagram,wPath:wPath,ARC:ARC,
 setPages:function(p){D.web={pages:p}},pages:W,
 get page(){return WP},set page(v){WP=v},
 get menuOpen(){return WMENU},set menuOpen(v){WMENU=v},
 get intent(){return WINTENT},set intent(v){WINTENT=v||''},
 onNav:function(id){location.href='index.html#'+id}};
})();
