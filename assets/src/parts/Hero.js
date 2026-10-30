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
/* Hub and company pages: an index of the other pages in this page's section, in pages.json order.
   A page whose first section already lists those pages (systems: the seven-families grid) sets "hero_index": false; its hero is then the text stack alone.
   A page alone in its section (projects) lists its own section headings instead; they link only when the block has a nav anchor. */
function heroIndex(p){var sib=W().filter(function(q){return q.section===p.section&&q.id!==p.id}),hub=NAVSECT.filter(function(n){return n[1]===p.id})[0];
 if(sib.length)return {label:hub?p.section+' · '+sib.length+' pages':'Also in '+p.section,aria:hub?'Pages in '+p.section:'Other pages in '+p.section,
  items:sib.map(function(q){return {t:q.nav_label||q.headline,wp:q.id}})};
 var bs=(p.blocks||[]),items=[];bs.forEach(function(b,i){if(b.h&&b.type!=='related'&&items.length<7)items.push({t:b.h,jump:b.nav?jid(b,i):''})});
 return items.length>1?{label:'On this page',aria:'On this page',items:items}:null}
/* System index (opt-in hero field "index", concept 35): the hub's child pages as a large numbered index on a framed area
   with corner crosses. index: true takes the other pages of this page's section (as heroIndex); index: ["sys-pw", …]
   lists those page ids in that order. Overrides hero_index. Returns heroIndex-shaped data with big: true, or null. */
function heroBigIndex(p){var v=p.index,pages=Array.isArray(v)?v.map(wp).filter(Boolean):v===true?W().filter(function(q){return q.section===p.section&&q.id!==p.id}):[];
 return pages.length?{big:true,label:p.section+' index · '+pages.length+' pages',aria:'Pages in '+p.section,items:pages.map(function(q){return {t:q.nav_label||q.headline,wp:q.id}})}:null}
function wHeroIndex(x){var n=x.items.length;
 return '<nav class="aq-hero__index'+(x.big?' aq-hero__index--big':'')+'" aria-label="'+e(x.aria)+'"><p class="aq-hero__index-label">'+e(x.label)+'</p><ol>'+x.items.map(function(it,i){
  var t='<span class="aq-hero__index-t">'+tx(it.t)+'</span>';
  return '<li>'+(it.wp?'<a class="aq-hero__index-item" href="#'+e(it.wp)+'" data-wp="'+e(it.wp)+'">'+t+'</a>':it.jump?'<a class="aq-hero__index-item" href="#'+e(WP)+'" data-jump="'+e(it.jump)+'">'+t+'</a>':'<span class="aq-hero__index-item">'+t+'</span>')+
   (x.big&&i<n-1?'<span class="aq-hero__index-down" aria-hidden="true"></span>':'')+'</li>'}).join('')+'</ol></nav>'}
/* Home: fine-line drawing of a figure-eight distribution loop (viewBox 440 x 520). Strokes are currentColor and tokens in style.css.
   Annotations are the home page's own standards and its endotoxin fact; nothing else is claimed. */
function wHomeLoop(p){
 var ef=(p.facts||[]).filter(function(f){return /EU\/mL/.test(f.v)})[0],tick='',i;
 for(i=0;i<=44;i++){var y=30+i*10,m=i%5===0;tick+='<line x1="'+(m?422:427)+'" y1="'+y+'" x2="434" y2="'+y+'"/>'}
 for(i=0;i<=16;i++){var x=140+i*10,mm=i%4===0;tick+='<line x1="'+x+'" y1="514" x2="'+x+'" y2="'+(mm?506:510)+'"/>'}
 var arrow=function(x,y,r){return '<path class="aq-loop__arrow" d="M-5,-3.5 L4,0 L-5,3.5 Z" transform="translate('+x+' '+y+') rotate('+r+')"/>'};
 var label=function(x,y,s,a){return '<text x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+e(s)+'</text>'};
 return '<figure class="aq-hero__loop" role="img" aria-label="Line drawing of a figure-eight distribution loop: a filter and a heat exchanger on the loop, conductivity and TOC sensors on the return, flow arrows and a scale rule'+(ef?', endotoxin '+e(ef.v)+' at the furthest point of use':'')+'.">'+
 '<svg viewBox="0 0 440 520" aria-hidden="true" focusable="false">'+
 '<g class="aq-loop__guide"><line x1="220" y1="8" x2="220" y2="492"/><line x1="120" y1="110" x2="320" y2="110"/><line x1="120" y1="390" x2="320" y2="390"/><circle cx="220" cy="110" r="30"/><circle cx="220" cy="110" r="52"/><circle cx="220" cy="390" r="30"/><circle cx="220" cy="390" r="52"/></g>'+
 '<g class="aq-loop__rule">'+tick+'<line x1="434" y1="30" x2="434" y2="470"/><line x1="140" y1="514" x2="300" y2="514"/></g>'+
 '<path class="aq-loop__pipe" d="M140,390 A80,80 0 0 0 300,390 L300,340 C300,270 140,230 140,160 L140,110 A80,80 0 0 1 300,110 L300,160 C300,230 140,270 140,340 Z"/>'+
 arrow(220,30,0)+arrow(180,459.3,30)+arrow(275,292,224)+arrow(275,208,136)+
 '<g class="aq-loop__part"><rect x="133" y="113" width="14" height="44" rx="7"/><line x1="136" y1="125" x2="144" y2="125"/><line x1="136" y1="135" x2="144" y2="135"/><line x1="136" y1="145" x2="144" y2="145"/>'+
 '<rect x="129" y="354" width="22" height="22"/><line x1="129" y1="354" x2="151" y2="376"/><line x1="151" y1="354" x2="129" y2="376"/>'+
 '<line x1="300" y1="118" x2="324" y2="118"/><circle cx="336" cy="118" r="12"/><line x1="300" y1="152" x2="324" y2="152"/><circle cx="336" cy="152" r="12"/>'+
 '<path d="M220,470 L220,480 M206,480 L206,492 L234,480 L234,492 Z"/></g>'+
 '<g class="aq-loop__lead"><line x1="80" y1="135" x2="130" y2="135"/><line x1="80" y1="365" x2="126" y2="365"/></g>'+
 '<g class="aq-loop__text">'+label(0,14,'Distribution loop · ASME BPE')+
  '<text class="aq-loop__tag" x="336" y="121" text-anchor="middle">CE</text><text class="aq-loop__tag" x="336" y="155" text-anchor="middle">TOC</text>'+
  label(352,122,'USP <645>')+label(352,156,'USP <643>')+
  label(76,132,'Filter','end')+label(76,362,'Heat','end')+label(76,374,'exchanger','end')+
  label(244,483,'Furthest point of use')+(ef?label(244,497,'Endotoxin '+ef.v):'')+
 '</g></svg></figure>'}
function wHero(p){var home=p.id==='home',art=!!ART[p.id]&&!home,detail=/^sys-|^svc-|^ind-/.test(p.id),idx=home||detail?null:p.index?heroBigIndex(p):p.hero_index!==false?heroIndex(p):null;
 var left='<div class="aq-stack">'+(p.eyebrow?'<span class="aq-eyebrow">'+tx(p.eyebrow)+'</span>':'')+'<h1 class="'+(home?'aq-display-xl':'aq-display')+'">'+tx(p.headline)+'</h1>'+(p.lead?'<p class="aq-lead">'+tx(p.lead)+'</p>':'')+
  '<div class="aq-hero__actions">'+(p.primary_cta?wBtn(p.primary_cta,ctaLink(p),null,p.primary_cta_intent):'')+(p.secondary_cta&&p.secondary_cta.label?'<a class="aq-btn aq-btn--link" href="#'+e(p.secondary_cta.link||'systems')+'" data-wp="'+e(p.secondary_cta.link||'systems')+'">'+tx(p.secondary_cta.label)+' <span class="aq-btn__arrow">→</span></a>':'')+'</div>'+
  (p.tags&&p.tags.length?'<div class="aq-tags">'+p.tags.map(function(t){return '<span class="aq-tag">'+e(t)+'</span>'}).join('')+'</div>':'')+'</div>';
 var all=p.facts||[],callouts=art?all.slice(0,4):[],rest=art?all.slice(4):all;
 var right=home?wHomeLoop(p):art?wHeroFigure(p,callouts):detail?'<div class="aq-photo" role="img" aria-label="Photograph placeholder">[Photograph: '+e(p.nav_label||p.headline)+' · 316L, cool even light]</div>':idx?wHeroIndex(idx):'';
 var mod=home?' aq-hero__grid--loop':art?' aq-hero__grid--figure':idx?' aq-hero__grid--index'+(idx.big?' aq-hero__grid--big-index':''):'';
 return '<section class="aq-hero'+(home?' aq-hero--home':'')+'"><div class="aq-in">'+(right?'<div class="aq-hero__grid'+mod+'">'+left+right+'</div>':left)+wKeyFacts(rest)+'</div></section>'}
