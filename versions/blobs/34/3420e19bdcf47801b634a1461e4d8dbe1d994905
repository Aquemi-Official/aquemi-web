/* One content section per block type in pages.json */
function wBlock(b){var f=BLOCKS[b.type];return f?f(b,h1(b.h)):''}
/* Page: NavBar, Hero, sections, closing Band, Footer */
function wPage(p){var c=p.cta;
 return wHead(p.section)+wHero(p)+(p.blocks||[]).map(wBlock).join('')+
  (c&&c.h?'<section class="aq-section aq-band--navy aq-closing"><div class="aq-in aq-stack"><h2 class="aq-h1">'+tx(c.h)+'</h2>'+(c.body?'<p class="aq-lead">'+tx(c.body)+'</p>':'')+wBtn(c.button||'Request a proposal',c.link||'contact-proposal')+'</div>'+ARC+'</section>':'')+wFoot()}
document.addEventListener('click',function(ev){var t=ev.target.closest('[data-wp]');if(!t)return;ev.preventDefault();WP=t.dataset.wp;WMENU=false;
 AQ.onNav(WP)});
var AQ=window.AQ={e:e,tx:tx,wp:wp,wPage:wPage,wBlock:wBlock,wHead:wHead,wHero:wHero,wFoot:wFoot,wBtn:wBtn,wDiagram:wDiagram,wPath:wPath,ARC:ARC,
 setPages:function(p){D.web={pages:p}},pages:W,
 get page(){return WP},set page(v){WP=v},
 get menuOpen(){return WMENU},set menuOpen(v){WMENU=v},
 onNav:function(id){location.href='index.html#'+id}};
})();
