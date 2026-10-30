/* Hero */
function wHero(p){var home=p.id==='home',img=/^sys-|^svc-|^ind-/.test(p.id)||home;
 var left='<div class="aq-stack">'+(p.eyebrow?'<span class="aq-eyebrow">'+tx(p.eyebrow)+'</span>':'')+'<h1 class="'+(home?'aq-display-xl':'aq-display')+'">'+tx(p.headline)+'</h1>'+(p.lead?'<p class="aq-lead">'+tx(p.lead)+'</p>':'')+
  '<div class="aq-hero__actions">'+(p.primary_cta?wBtn(p.primary_cta,ctaLink(p)):'')+(p.secondary_cta&&p.secondary_cta.label?'<a class="aq-btn aq-btn--link" href="#'+e(p.secondary_cta.link||'systems')+'" data-wp="'+e(p.secondary_cta.link||'systems')+'">'+tx(p.secondary_cta.label)+' <span class="aq-btn__arrow">→</span></a>':'')+'</div>'+
  (p.tags&&p.tags.length?'<div class="aq-tags">'+p.tags.map(function(t){return '<span class="aq-tag">'+e(t)+'</span>'}).join('')+'</div>':'')+'</div>';
 var facts=p.facts&&p.facts.length?'<dl class="aq-key-facts">'+p.facts.map(function(f){return '<div><dt>'+tx(f.l)+'</dt><dd>'+tx(f.v)+'</dd></div>'}).join('')+'</dl>':'';
 return '<section class="aq-hero'+(home?' aq-hero--home':'')+'"><div class="aq-in">'+(img?'<div class="aq-hero__grid">'+left+'<div class="aq-photo" role="img" aria-label="Photograph placeholder">[Photograph: '+e(home?'finished skid or installed loop, wide orderly view':(p.nav_label||p.headline))+' · 316L, cool even light]</div></div>':left)+facts+'</div>'+(home?ARC:'')+'</section>'}
