/* SectionNav: sticky jump links to blocks that carry a short nav label (four or more). Block section ids come from jid(). */
function ctaLink(p){return p.primary_cta_link||(/service/i.test(p.primary_cta)?'contact-service':'contact-proposal')}
function jid(b,i){return b.anchor||'s-'+i+'-'+String(b.nav).toLowerCase().replace(/[^a-z0-9]+/g,'-')}
function wSectionNav(p){var bs=(p.blocks||[]),n=bs.filter(function(b){return b.nav});if(n.length<4)return '';
 return '<nav class="aq-section-nav" aria-label="On this page"><div class="aq-in"><span class="aq-section-nav__label">On this page</span>'+bs.map(function(b,i){return b.nav?'<a href="#'+e(p.id)+'" data-jump="'+jid(b,i)+'">'+e(b.nav)+'</a>':''}).join('')+
  (p.primary_cta&&ctaLink(p).charAt(0)!=='#'?'<a class="aq-section-nav__cta" href="#'+e(ctaLink(p))+'" data-wp="'+e(ctaLink(p))+'">'+tx(p.primary_cta)+' →</a>':'')+'</div></nav>'}
