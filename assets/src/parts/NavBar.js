/* NavBar: section links in sentence case, the "Service request" utility link, the proposal button and, on narrow screens,
   a menu: the urgent block (production stopped: the service number and its hours, then the service request row), the
   sections and the page's section jump. The menu's jump links come from navJumps() in SectionNav.js, for the page being
   shown (WP). The service number and hours come from CONTACT (core.js): the number is a tel: link once confirmed and the
   placeholder until then. The hours always travel with the number, so the block never implies round-the-clock help.
   Launch rule (design-system/website.md, Navigation): while the number is unconfirmed the urgent block goes, the
   "Service request" row stays.
   The toggle carries a two-bar mark (aq-nav__burger, aria-hidden) that turns into a cross while the menu is open; its
   label stays the words "Menu" / "Close" (aq-nav__toggle-t). */
function wHead(section){var cur=(NAVSECT.filter(function(n){return n[0]===section})[0]||[])[1],pg=wp(WP),jumps=navJumps(pg);
 var cta=function(extra){return '<span class="aq-nav__frame'+(extra||'')+'"><a class="aq-btn aq-btn--primary" href="#contact-proposal" data-wp="contact-proposal">Request a proposal</a></span>'};
 var svc=function(cls){return '<a class="'+cls+'" href="#contact-service" data-wp="contact-service"'+(WP==='contact-service'?' aria-current="page"':'')+'>Service request</a>'};
 return '<nav class="aq-nav" aria-label="Main"><a class="aq-nav__home" href="#home" data-wp="home" aria-label="Aquemi home"><img class="aq-nav__logo aq-nav__logo--lockup aq-logo--on-light" src="brand/lockup-navy.svg" alt="aquemi"><img class="aq-nav__logo aq-nav__logo--lockup aq-logo--on-dark" src="brand/lockup-limestone.svg" alt="aquemi"></a>'+
  '<ul class="aq-nav__links">'+NAVSECT.map(function(n,i){return '<li><a href="#'+n[1]+'" data-wp="'+n[1]+'"'+(n[1]===cur?' aria-current="page"':'')+'>'+n[0]+'</a></li>'}).join('')+'</ul>'+
  '<span class="aq-nav__spacer"></span>'+svc('aq-nav__service')+cta()+
  '<button class="aq-btn aq-btn--secondary aq-nav__toggle" type="button" id="wmenu" aria-expanded="'+WMENU+'"'+(WMENU?' aria-controls="wmenu-panel"':'')+'><span class="aq-nav__burger" aria-hidden="true"><i></i><i></i></span><span class="aq-nav__toggle-t">'+(WMENU?'Close':'Menu')+'</span></button></nav>'+
 (WMENU?'<div class="aq-menu" id="wmenu-panel">'+
  '<div class="aq-menu__urgent" data-theme="light"><p class="aq-menu__ask">Production stopped?</p>'+wtel(CONTACT.service,'aq-menu__call','<span class="aq-menu__k">Call</span> ')+'<p class="aq-menu__hours">Answered '+tx(CONTACT.hours)+'</p>'+svc('aq-menu__service')+'</div>'+
  '<nav aria-label="Sections"><ol class="aq-menu__list">'+NAVSECT.map(function(n,i){return '<li><a href="#'+n[1]+'" data-wp="'+n[1]+'"'+(n[1]===cur?' aria-current="page"':'')+'>'+n[0]+'</a></li>'}).join('')+'</ol></nav>'+
  (jumps.length?'<nav class="aq-menu__jump" aria-labelledby="wmenu-jump"><p class="aq-menu__label" id="wmenu-jump">Section jump</p><ol class="aq-menu__list aq-menu__list--jump">'+jumps.map(function(j,i){return '<li><a href="#'+e(pg.id)+'" data-jump="'+e(j.id)+'">'+e(j.label)+'</a></li>'}).join('')+'</ol></nav>':'')+
  cta(' aq-menu__cta')+'</div>':'')}
/* Menu behaviour: a section jump closes the menu before the page scrolls; Escape closes it; focus stays on the toggle after it re-renders. */
if(typeof document!=='undefined'){
 document.addEventListener('click',function(ev){var j=ev.target.closest&&ev.target.closest('.aq-menu a[data-jump]');if(!j||!WMENU)return;
  WMENU=false;var m=document.getElementById('wmenu-panel'),t=document.getElementById('wmenu');if(m)m.remove();if(t){t.setAttribute('aria-expanded','false');t.removeAttribute('aria-controls');var tl=t.querySelector('.aq-nav__toggle-t');if(tl)tl.textContent='Menu';else t.textContent='Menu'}},true);
 document.addEventListener('click',function(ev){var b=ev.target&&ev.target.closest&&ev.target.closest('#wmenu');if(b&&!b.isConnected){var t=document.getElementById('wmenu');if(t)t.focus()}});
 document.addEventListener('keydown',function(ev){if(ev.key==='Escape'&&WMENU){var t=document.getElementById('wmenu');if(t){t.click();t=document.getElementById('wmenu');if(t)t.focus()}}});
}
