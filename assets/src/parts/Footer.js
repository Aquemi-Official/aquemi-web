/* Footer: an engineering drawing sheet. Zone frame (aria-hidden), head, four numbered link columns
   (<details open>; footMQ closes them on phones only), a title block and the contact and legal line. */
/* Phones (860 px and below) get collapsed rows; wider screens keep every column open and the summary out of the tab order. */
var footMQ=window.matchMedia?window.matchMedia('(max-width: 860px)'):null;
function footSync(){var ph=!!(footMQ&&footMQ.matches);[].forEach.call(document.querySelectorAll('.aq-footer__col'),function(d){d.open=!ph;var s=d.querySelector('summary');if(s){if(ph)s.removeAttribute('tabindex');else s.setAttribute('tabindex','-1')}})}
if(footMQ){if(footMQ.addEventListener)footMQ.addEventListener('change',footSync);else if(footMQ.addListener)footMQ.addListener(footSync)}
function wFoot(){var ph=!!(footMQ&&footMQ.matches);setTimeout(footSync,0);var cols=[['Systems',['sys-pw','sys-wfi-distillation','sys-wfi-membrane','sys-pure-steam','sys-storage','sys-pretreatment','sys-monitoring']],['Services',['svc-design','svc-fabrication','svc-fat-sat','svc-cq','svc-service','svc-upgrades']],['Industries & compliance',['ind-pharma','ind-biotech','ind-meddevice','ind-cdmo','compliance','cmp-documentation','cmp-quality']],['Company',['about','projects','careers','news','contact-proposal','contact-service','contact-locations']]];
 function zones(side,marks){return '<div class="aq-footer__zones aq-footer__zones--'+side+'" aria-hidden="true">'+marks.map(function(m){return '<span>'+m+'</span>'}).join('')+'</div>'}
 function cell(label,value,cls){return '<div class="aq-footer__cell'+(cls?' '+cls:'')+'"><span class="aq-footer__label">'+label+'</span><span class="aq-footer__value">'+value+'</span></div>'}
 var cur=wp(WP),sheet=cur?tx(cur.nav_label||cur.id):'Home';
 return '<footer class="aq-footer"><div class="aq-in"><div class="aq-footer__sheet">'+zones('top',[1,2,3,4])+zones('left',['A','B','C','D'])
  +'<div class="aq-footer__body">'
  +'<div class="aq-footer__head"><img class="aq-footer__logo" src="brand/logo-limestone.svg" alt="aquemi"><p class="aq-footer__desc">Clean water systems for pharmaceutical manufacturing.</p></div>'
  +'<nav class="aq-footer__cols" aria-label="Site map">'+cols.map(function(c,i){return '<details class="aq-footer__col"'+(ph?'':' open')+'><summary class="aq-footer__colhead"'+(ph?'':' tabindex="-1"')+'><span class="aq-footer__num">0'+(i+1)+'</span> '+e(c[0])+'</summary><div class="aq-footer__links">'+c[1].filter(wp).map(function(id){return wlink(id)}).join('')+'</div></details>'}).join('')+'</nav>'
  +'<div class="aq-footer__block">'
   +cell('Copyright','© 2026 Aquemi','aq-footer__cell--wide')+cell('Rev.','Draft')
   +cell('Legal entity','<span class="aq-ph">[legal entity name]</span>')+cell('Made in','<span class="aq-ph">[city]</span>, Ontario')+cell('Sheet',sheet)
  +'</div>'
  +'<div class="aq-footer__legal"><span><span class="aq-ph">[email address]</span> · <span class="aq-ph">[phone number]</span></span><span>Privacy · Terms · Accessibility</span></div>'
  +'</div>'+zones('right',['A','B','C','D'])+zones('bottom',[1,2,3,4])+'</div></div></footer>'}
