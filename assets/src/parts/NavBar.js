/* NavBar: section links in sentence case, the "Service request" utility link, the proposal button and, on narrow screens,
   a menu: the urgent block (production stopped: the service number, then the service request row), the sections and the
   page's section jump. The menu's jump links come from navJumps() in SectionNav.js, for the page being shown (WP).
   The service number comes from CONTACT (core.js): a tel: link once confirmed, the placeholder until then. */
function wHead(section){var cur=(NAVSECT.filter(function(n){return n[0]===section})[0]||[])[1],pg=wp(WP),jumps=navJumps(pg);
 var cta=function(extra){return '<span class="aq-nav__frame'+(extra||'')+'"><a class="aq-btn aq-btn--primary" href="#contact-proposal" data-wp="contact-proposal">Request a proposal</a></span>'};
 var svc=function(cls){return '<a class="'+cls+'" href="#contact-service" data-wp="contact-service"'+(WP==='contact-service'?' aria-current="page"':'')+'>Service request</a>'};
 return '<nav class="aq-nav" aria-label="Main"><a class="aq-nav__home" href="#home" data-wp="home" aria-label="Aquemi home"><img class="aq-nav__logo aq-nav__logo--lockup aq-logo--on-light" src="brand/lockup-navy.svg" alt="aquemi"><img class="aq-nav__logo aq-nav__logo--lockup aq-logo--on-dark" src="brand/lockup-limestone.svg" alt="aquemi"></a>'+
  '<ul class="aq-nav__links">'+NAVSECT.map(function(n,i){return '<li><a href="#'+n[1]+'" data-wp="'+n[1]+'"'+(n[1]===cur?' aria-current="page"':'')+'>'+n[0]+'</a></li>'}).join('')+'</ul>'+
  '<span class="aq-nav__spacer"></span>'+svc('aq-nav__service')+cta()+
  '<button class="aq-btn aq-btn--secondary aq-nav__toggle" type="button" id="wmenu" aria-expanded="'+WMENU+'"'+(WMENU?' aria-controls="wmenu-panel"':'')+'>'+(WMENU?'Close':'Menu')+'</button></nav>'+
 (WMENU?'<div class="aq-menu" id="wmenu-panel">'+
  '<div class="aq-menu__urgent" data-theme="light"><p class="aq-menu__ask">Production stopped?</p>'+wtel(CONTACT.service,'aq-menu__call','<span class="aq-menu__k">Call</span> ')+svc('aq-menu__service')+'</div>'+
  '<nav aria-label="Sections"><ol class="aq-menu__list">'+NAVSECT.map(function(n,i){return '<li><a href="#'+n[1]+'" data-wp="'+n[1]+'"'+(n[1]===cur?' aria-current="page"':'')+'>'+n[0]+'</a></li>'}).join('')+'</ol></nav>'+
  (jumps.length?'<nav class="aq-menu__jump" aria-labelledby="wmenu-jump"><p class="aq-menu__label" id="wmenu-jump">Section jump</p><ol class="aq-menu__list aq-menu__list--jump">'+jumps.map(function(j,i){return '<li><a href="#'+e(pg.id)+'" data-jump="'+e(j.id)+'">'+e(j.label)+'</a></li>'}).join('')+'</ol></nav>':'')+
  cta(' aq-menu__cta')+'</div>':'')}
/* Menu behaviour: a section jump closes the menu before the page scrolls; Escape closes it; focus stays on the toggle after it re-renders. */
if(typeof document!=='undefined'){
 document.addEventListener('click',function(ev){var j=ev.target.closest&&ev.target.closest('.aq-menu a[data-jump]');if(!j||!WMENU)return;
  WMENU=false;var m=document.getElementById('wmenu-panel'),t=document.getElementById('wmenu');if(m)m.remove();if(t){t.setAttribute('aria-expanded','false');t.removeAttribute('aria-controls');t.textContent='Menu'}},true);
 document.addEventListener('click',function(ev){if(ev.target&&ev.target.id==='wmenu'&&!ev.target.isConnected){var t=document.getElementById('wmenu');if(t)t.focus()}});
 document.addEventListener('keydown',function(ev){if(ev.key==='Escape'&&WMENU){var t=document.getElementById('wmenu');if(t){t.click();t=document.getElementById('wmenu');if(t)t.focus()}}});
}
