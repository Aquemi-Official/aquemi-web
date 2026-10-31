/* One content section per block type in pages.json */
function wBlock(b){var f=BLOCKS[b.type];return f?f(b,wSecHead(b)):''}
/* Page: NavBar, Hero, SectionNav, sections separated by hairlines on alternating surface and surface-sunken, Closing, Footer, BackToTop.
   A block with a nav label or an anchor gets its section id (jid: the anchor, else s-N-label), so jumps and page#anchor links find it. */
function wPage(p){var c=p.cta,out='';
 if(WAT&&WAT[0]===p.id){wgoat(WAT[1]);WAT=null}
 /* Alternating grounds: between the hero and the closing, every second plain section sits on surface-sunken
    (aq-section--alt), so sections read apart. A section with its own ground (a Limestone, sunken or navy band) keeps
    it and restarts the count, so the section after it is on surface again. */
 var alt=0;
 (p.blocks||[]).forEach(function(b,i){var h=wBlock(b);if(b.nav||b.anchor)h=h.replace('<section class=','<section id="'+jid(b,i)+'" class=');
  var open=(h.match(/^<section[^>]*>/)||[''])[0];
  if(/aq-band--/.test(open))alt=0;else if(/class="aq-section/.test(open)){if(alt++%2)h=h.replace('class="aq-section','class="aq-section aq-section--alt')}
  out+=h});
 return wHead(p.section)+wHero(p)+wSectionNav(p)+out+wClosing(c,p)+wFoot()+wBackToTop()}
/* Page plus anchor (DR-008 rule 6): a link written page#anchor, or an address index.html#page#anchor, opens the page at
   the block whose anchor (or nav id) matches. WAT holds [page, anchor] until that page renders; wPage then asks for the
   jump, which runs once the page is in the document (next frame). It is instant (a new page, not a scroll within one),
   respects the SectionNav's scroll-margin, and moves focus to the block's heading so keyboard and screen reader users
   land there too. If the webfonts were still loading it re-aligns once they settle, unless the reader has scrolled.
   No matching block: the page opens at the top. */
var WAT=null;
function wgoat(id){if(typeof requestAnimationFrame==='undefined'||!id)return;requestAnimationFrame(function(){var s=document.getElementById(id);if(!s)return;
 s.scrollIntoView({block:'start'});var y=window.scrollY,f=s.querySelector('h2')||s;if(!f.hasAttribute('tabindex'))f.setAttribute('tabindex','-1');f.focus({preventScroll:true});
 if(document.fonts&&document.fonts.status!=='loaded')document.fonts.ready.then(function(){if(s.isConnected&&Math.abs(window.scrollY-y)<2)s.scrollIntoView({block:'start'})})})}
document.addEventListener('click',function(ev){var g=ev.target.closest('[data-step-go]');if(g){var fm=g.closest('form'),to=+g.dataset.stepGo;fm.querySelectorAll('.aq-form__step').forEach(function(s){s.hidden=+s.dataset.step!==to});fm.querySelectorAll('.aq-form__progress li').forEach(function(l,i){if(i===to)l.setAttribute('aria-current','step');else l.removeAttribute('aria-current')});var lg=fm.querySelector('[data-step="'+to+'"] legend');if(lg){lg.tabIndex=-1;lg.focus()}fm.scrollIntoView({block:'start'});return}
 /* A jump within the page; with an intent (a hero or closing button's "#anchor") it first ticks those options on the form there (wTick) */
 var j=ev.target.closest('[data-jump]');if(j){var s=document.getElementById(j.dataset.jump);if(s){ev.preventDefault();if(j.dataset.intent)wTick(s,j.dataset.intent);s.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}return}
 var t=ev.target.closest('[data-wp]');if(!t)return;ev.preventDefault();var to=wsplit(t.dataset.wp);WP=to[0];WAT=to[1]?to:null;WMENU=false;WINTENT=t.dataset.intent||'';
 AQ.onNav(t.dataset.wp)});
var AQ=window.AQ={e:e,tx:tx,wp:wp,wPage:wPage,wBlock:wBlock,wHead:wHead,wHero:wHero,wFoot:wFoot,wBtn:wBtn,wDiagram:wDiagram,wPath:wPath,ARC:ARC,
 setPages:function(p){D.web={pages:p}},pages:W,
 /* page: the page id being shown; set it to "page#anchor" and the page opens at that anchor when it renders */
 get page(){return WP},set page(v){var s=wsplit(v);WP=s[0];if(s[1])WAT=s},
 get menuOpen(){return WMENU},set menuOpen(v){WMENU=v},
 get intent(){return WINTENT},set intent(v){WINTENT=v||''},
 onNav:function(id){location.href='index.html#'+id}};
})();
