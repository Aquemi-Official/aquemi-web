/* Hero */
/* Pages with an equipment drawing in assets/illustrations/<page id>.png. Adding one is one line: 'page-id': 'what the drawing shows' (its aria-label).
   Used by the Hero figure and by WaterPath stops. */
var ART={
 'sys-pretreatment':'Pretreatment skid: multimedia filter, softener and carbon vessels with feed pump',
 'sys-pw':'Purified Water skid: RO pressure vessels, high-pressure pump and EDI stack',
 'sys-wfi-distillation':'Multi-effect WFI still: five columns, condenser and feed pump on one skid',
 'sys-wfi-membrane':'WFI membrane skid: double-pass RO, EDI, heat exchangers and ultrafilter',
 'sys-pure-steam':'Pure steam generator: evaporator column, separator, preheater and control panel',
 'sys-storage':'WFI storage tank with distribution pump, heat exchanger and loop with point-of-use valves',
 'sys-monitoring':'Wall-mounted analyser panel: TOC and conductivity transmitters, controller and sample line',
 'svc-design':'Skid design: a 3D frame model standing on its P&ID sheet, with scale rule and pencil',
 'svc-fabrication':'Orbital weld head clamped on a sanitary tube, with tri-clamp fittings, gaskets and an elbow',
 'svc-fat-sat':'Water treatment skid hosed to a wheeled test cart with gauges, flow meter and laptop',
 'svc-service':'Field service kit: open toolbox, wrenches, spare filter cartridge, replacement pump and tri-clamp',
 'svc-upgrades':'Existing storage tank joined to a new skid module by flanged spools, one still on the hoist',
 'svc-cq':'Qualification kit: tabbed protocol binder, checklist clipboard and calibrated temperature probe',
 'ind-pharma':'Sterile vial filling machine: enclosure with open doors, filling needles and vial conveyor',
 'ind-biotech':'Jacketed bioprocess vessel with agitator drive, sanitary piping, valves and control box',
 'ind-meddevice':'Washer-disinfector with instrument racks and spray arms, fed by a purified water line',
 'ind-cdmo':'Two-room cleanroom suite with process vessels, a pass-through hatch and a shared water loop'
};
function artMask(id){var u='url(assets/illustrations/'+id+'.png)';return '-webkit-mask-image:'+u+';mask-image:'+u}
/* Callout leaders in the figure's 125 x 100 viewBox: [start on the callout rule, anchor on the drawing]. Slot order: top left, top right, bottom left, bottom right. */
var HERO_LEAD=[[37.5,0,54,38],[87.5,0,73,35],[37.5,100,51,67],[87.5,100,75,64]];
function wHeroFigure(p,facts){
 var lines=facts.map(function(f,i){var s=HERO_LEAD[i];return '<line x1="'+s[0]+'" y1="'+s[1]+'" x2="'+s[2]+'" y2="'+s[3]+'"/><circle cx="'+s[2]+'" cy="'+s[3]+'" r="0.9"/>'}).join('');
 return '<figure class="aq-hero__figure"><span class="aq-illustration" role="img" aria-label="'+e(ART[p.id])+'" style="'+artMask(p.id)+'"></span>'+
  (facts.length?'<svg class="aq-hero__leaders" viewBox="0 0 125 100" preserveAspectRatio="none" aria-hidden="true">'+lines+'</svg><dl class="aq-hero__callouts">'+facts.map(function(f){return '<div class="aq-hero__callout"><dt>'+tx(f.l)+'</dt><dd>'+tx(f.v)+'</dd></div>'}).join('')+'</dl>':'')+'</figure>'}
function wHero(p){var home=p.id==='home',art=!!ART[p.id]&&!home,img=/^sys-|^svc-|^ind-/.test(p.id)||home;
 var left='<div class="aq-stack">'+(p.eyebrow?'<span class="aq-eyebrow">'+tx(p.eyebrow)+'</span>':'')+'<h1 class="'+(home?'aq-display-xl':'aq-display')+'">'+tx(p.headline)+'</h1>'+(p.lead?'<p class="aq-lead">'+tx(p.lead)+'</p>':'')+
  '<div class="aq-hero__actions">'+(p.primary_cta?wBtn(p.primary_cta,/service/i.test(p.primary_cta)?'contact-service':'contact-proposal'):'')+(p.secondary_cta&&p.secondary_cta.label?'<a class="aq-btn aq-btn--link" href="#'+e(p.secondary_cta.link||'systems')+'" data-wp="'+e(p.secondary_cta.link||'systems')+'">'+tx(p.secondary_cta.label)+' <span class="aq-btn__arrow">→</span></a>':'')+'</div>'+
  (p.tags&&p.tags.length?'<div class="aq-tags">'+p.tags.map(function(t){return '<span class="aq-tag">'+e(t)+'</span>'}).join('')+'</div>':'')+'</div>';
 var all=p.facts||[],callouts=art?all.slice(0,4):[],rest=art?all.slice(4):all;
 var facts=rest.length?'<dl class="aq-key-facts">'+rest.map(function(f){return '<div><dt>'+tx(f.l)+'</dt><dd>'+tx(f.v)+'</dd></div>'}).join('')+'</dl>':'';
 var right=art?wHeroFigure(p,callouts):'<div class="aq-photo" role="img" aria-label="Photograph placeholder">[Photograph: '+e(home?'finished skid or installed loop, wide orderly view':(p.nav_label||p.headline))+' · 316L, cool even light]</div>';
 return '<section class="aq-hero'+(home?' aq-hero--home':'')+'"><div class="aq-in">'+(img?'<div class="aq-hero__grid'+(art?' aq-hero__grid--figure':'')+'">'+left+right+'</div>':left)+facts+'</div>'+(home?ARC:'')+'</section>'}
