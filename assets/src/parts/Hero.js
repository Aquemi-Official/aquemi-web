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
/* Equipment figure (sys-, svc-, ind- pages with a drawing): the drawing large and dominant, up to four key facts as
   callouts round it, each joined to the drawing by a leader line ending in a dot. Callouts come in two lists: the top
   pair and the bottom pair, so phones can stack them above and below the drawing.
   HERO_AT: the anchor of each slot on the drawing, as fractions of the square drawing box (top left, top right, bottom
   left, bottom right). Every drawing is a centred isometric skid, so the anchors land on equipment.
   Desktop leaders: viewBox 120 x 100 (the figure is 6:5); drawing square x 12-108, y 2-98; callouts 27 % wide and 13 %
   tall in the corners, each with a rule on its drawing side whose inner end starts the leader.
   Phone leaders: viewBox 100 x 80 over the drawing row only (5:4); drawing square x 10-90; leaders start at the inner
   end of the rule under (or over) each callout, on the row's top (or bottom) edge. */
var HERO_AT=[[0.40,0.36],[0.62,0.32],[0.36,0.70],[0.65,0.665]];
function heroLeaders(n,wide){var o='';for(var i=0;i<n;i++){var a=HERO_AT[i],top=i<2,left=i%2===0,x0,y0,x1,y1;
  if(wide){x0=left?32.4:87.6;y0=top?13:87;x1=12+96*a[0];y1=2+96*a[1]}else{x0=left?47:53;y0=top?0:80;x1=10+80*a[0];y1=80*a[1]}
  o+='<line x1="'+x0+'" y1="'+y0+'" x2="'+x1.toFixed(1)+'" y2="'+y1.toFixed(1)+'"/><circle cx="'+x1.toFixed(1)+'" cy="'+y1.toFixed(1)+'" r="'+(wide?0.9:1.1)+'"/><circle class="is-start" cx="'+x0+'" cy="'+y0+'" r="'+(wide?0.6:0.8)+'"/>'}
 return '<svg class="aq-hero__leaders aq-hero__leaders--'+(wide?'wide':'narrow')+'" viewBox="0 0 '+(wide?'120 100':'100 80')+'" preserveAspectRatio="none" aria-hidden="true" focusable="false">'+o+'</svg>'}
function wHeroFigure(p,facts){var n=facts.length,co=function(f){return '<div class="aq-hero__callout"><dt>'+tx(f.l)+'</dt><dd>'+tx(f.v)+'</dd></div>'};
 return '<figure class="aq-hero__figure">'
  +(n?'<dl class="aq-hero__callouts aq-hero__callouts--top">'+facts.slice(0,2).map(co).join('')+'</dl>':'')
  +'<div class="aq-hero__art"><span class="aq-illustration" role="img" aria-label="'+e(ART[p.id])+'" style="'+artMask(p.id)+'"></span>'+(n?heroLeaders(n,true)+heroLeaders(n,false):'')+'</div>'
  +(n>2?'<dl class="aq-hero__callouts aq-hero__callouts--bottom">'+facts.slice(2,4).map(co).join('')+'</dl>':'')+'</figure>'}
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
/* Drawn figure (opt-in hero field "figure", pages with no equipment drawing): a bold decorative device on a blueprint
   frame (dashed frame, registration crosses, fading grid), always aria-hidden; the headline and lead carry the meaning.
   - {"spots": ["ro-skid", "storage-tank", "pure-steam-generator"], "label": "…"}: 2-4 Spot vignettes (an Icon name
     falls back to the icon) set out in a zig-zag and joined along their bases by one drawn flow pipe ending in an arrow,
     each tagged 01, 02 … with its name. An entry may be {"spot": "pid", "t": "Design"} to name it.
   - {"plate": "binder", "label": "Turnover package", "items": [...], "foot": "…"}: a stack of folders, divider tabs
     numbered, the front folder holding the index (items, at most 6).
   - {"plate": "stamp", "label": "Released", "ring": "…", "ring2": "…", "items": [...]}: a release record (items = its checked rows)
     with a large rubber-stamp seal across it.
   - {"plate": "route", "stops": ["Your request", "Engineer review", "Written reply"]}: one route from a start node
     through three numbered stops to an arrow.
   Geometry is in percent of the 6:5 frame; line work in an SVG viewBox 120 x 100 (non-scaling strokes). */
var SPOT_NAME={'ro-skid':'RO skid','edi-stack':'EDI stack','pure-steam-generator':'Pure steam generator','storage-tank':'Storage tank','heat-exchanger':'Heat exchanger','uv-ozone':'UV and ozone',pid:'P&ID',edi:'EDI',toc:'TOC',uv:'UV','ro-membrane':'RO membrane','carbon-filter':'Carbon filter','pure-steam':'Pure steam'};
var SPOT_AT={2:[[30,46,40],[72,58,40]],3:[[19,58,36],[50,38,36],[81,58,36]],4:[[16,42,27],[39,60,27],[62,42,27],[85,60,27]]};
function spotName(n){return SPOT_NAME[n]||(n.charAt(0).toUpperCase()+n.slice(1).replace(/-/g,' '))}
function heroFrame(kind,inner,label){return '<figure class="aq-hero__drawn aq-hero__drawn--'+kind+'" aria-hidden="true">'+(label?'<span class="aq-hero__drawn-label">'+tx(label)+'</span>':'')+inner+'</figure>'}
function wHeroSpots(f){var sp=(f.spots||[]).map(function(s){return typeof s==='string'?{spot:s}:s}).filter(function(s){return s&&isVig(s.spot)}).slice(0,4),n=sp.length;if(n<2)return '';
 var at=SPOT_AT[n],pts=at.map(function(a){return [a[0]*1.2,a[1]+a[2]*0.6*0.86]}),d='M2,'+pts[0][1].toFixed(1)+' H'+pts[0][0].toFixed(1),dots='';
 for(var i=1;i<n;i++){var m=((pts[i-1][0]+pts[i][0])/2).toFixed(1);d+=' H'+m+' V'+pts[i][1].toFixed(1)+' H'+pts[i][0].toFixed(1)}
 d+=' H114';pts.forEach(function(q){dots+='<circle cx="'+q[0].toFixed(1)+'" cy="'+q[1].toFixed(1)+'" r="1.1"/>'});
 var y=pts[n-1][1].toFixed(1),svg='<svg class="aq-hero__pipe" viewBox="0 0 120 100" preserveAspectRatio="none" focusable="false"><path class="aq-hero__pipe-run" d="'+d+'"/><path class="aq-hero__pipe-arrow" d="M113,'+(+y-2.2).toFixed(1)+' L118,'+y+' L113,'+(+y+2.2).toFixed(1)+' Z"/>'+dots+'</svg>';
 var cells=sp.map(function(s,i){var a=at[i],pos='left:'+a[0]+'%;top:'+a[1]+'%;--w:'+a[2]+'%';
  return '<span class="aq-hero__vig" style="'+pos+'">'+wSpot(s.spot,'l','aq-spot--muted')+'<span class="aq-hero__vig-t"><b>'+(i<9?'0':'')+(i+1)+'</b> '+tx(s.t||spotName(s.spot))+'</span></span>'}).join('');
 return heroFrame('spots',svg+cells,f.label)}
function wHeroBinder(f){var it=(f.items||[]).slice(0,6),k=Math.max(3,Math.min(4,it.length||3)),back='';
 for(var i=k-1;i>0;i--)back+='<span class="aq-hero__folder" style="--k:'+i+'"><span class="aq-hero__folder-tab">'+(i<9?'0':'')+(i+1)+'</span></span>';
 var list=it.map(function(t,i){return '<li><b>'+(i<9?'0':'')+(i+1)+'</b><span>'+tx(t)+'</span></li>'}).join('');
 return heroFrame('binder','<div class="aq-hero__binder" data-theme="light">'+back+'<div class="aq-hero__folder is-front" style="--k:0"><span class="aq-hero__folder-tab">01</span><div class="aq-hero__folder-body">'
  +'<div class="aq-hero__folder-head"><span class="aq-hero__folder-n">'+tx(f.label||'Turnover package')+'</span>'+(isIcon('binder')?wIcon('binder'):'')+'</div>'
  +(list?'<ol class="aq-hero__folder-list">'+list+'</ol>':'')+(f.foot?'<span class="aq-hero__folder-foot">'+tx(f.foot)+'</span>':'')+'</div></div></div>')}
function wHeroStamp(f){var it=(f.items||['Inspection','Test','Documents']).slice(0,4);
 var rec='<div class="aq-hero__record" data-theme="light"><span class="aq-hero__record-h">'+tx(f.title||'Release record')+'</span><ul>'+it.map(function(t){return '<li><span>'+tx(t)+'</span><i></i></li>'}).join('')+'</ul><span class="aq-hero__record-sign">Signed · QA</span></div>';
 var svg='<svg class="aq-hero__stamp" viewBox="0 0 240 240" focusable="false"><defs><path id="hero-stamp-top" d="M36,120 A84,84 0 0,1 204,120"/><path id="hero-stamp-bot" d="M26,120 A94,94 0 0,0 214,120"/></defs>'
  +'<circle class="aq-hero__stamp-o" cx="120" cy="120" r="112"/><circle cx="120" cy="120" r="104"/><circle cx="120" cy="120" r="66"/>'
  +'<text class="aq-hero__stamp-ring"><textPath href="#hero-stamp-top" startOffset="50%" text-anchor="middle">'+e(f.ring||'Quality unit · Inspected')+'</textPath></text>'
  +'<text class="aq-hero__stamp-ring"><textPath href="#hero-stamp-bot" startOffset="50%" text-anchor="middle">'+e(f.ring2||'Tested · Reviewed')+'</textPath></text>'
  +'<rect class="aq-hero__stamp-band" x="10" y="96" width="220" height="48"/><text class="aq-hero__stamp-word" x="120" y="133" text-anchor="middle" textLength="190" lengthAdjust="spacingAndGlyphs">'+e(f.label||'Released')+'</text>'
  +'<path class="aq-hero__stamp-tick" d="M104,76 l10,10 l22,-22"/><text class="aq-hero__stamp-sub" x="120" y="170" text-anchor="middle">'+e(f.sub||'QA')+'</text></svg>';
 return heroFrame('stamp',rec+svg,f.caption)}
function wHeroRoute(f){var st=(f.stops||['Request','Review','Reply']).slice(0,3),P=[[22,30],[52,58],[84,32]];
 var d='M3,12 H'+(P[0][0]*1.2).toFixed(1)+' V'+P[0][1]+' V'+P[1][1]+' H'+(P[1][0]*1.2).toFixed(1)+' H'+(P[2][0]*1.2-14).toFixed(1)+' V'+P[2][1]+' H'+(P[2][0]*1.2).toFixed(1)+' V84 H115';
 var svg='<svg class="aq-hero__route" viewBox="0 0 120 100" preserveAspectRatio="none" focusable="false"><path class="aq-hero__route-guide" d="M3,92 H117"/><path class="aq-hero__route-run" d="'+d+'"/><circle class="aq-hero__route-start" cx="3" cy="12" r="1.6"/><path class="aq-hero__route-arrow" d="M113,81.6 L118,84 L113,86.4 Z"/></svg>';
 var stops=st.map(function(t,i){return '<span class="aq-hero__stop aq-hero__stop--'+['r','b','t'][i]+'" style="left:'+P[i][0]+'%;top:'+P[i][1]+'%"><b>'+(i+1)+'</b><span>'+tx(t)+'</span></span>'}).join('');
 return heroFrame('route',svg+stops,f.label)}
function wHeroDrawn(f){if(!f||typeof f!=='object')return '';return f.spots?wHeroSpots(f):f.plate==='binder'?wHeroBinder(f):f.plate==='stamp'?wHeroStamp(f):f.plate==='route'?wHeroRoute(f):''}
function wHero(p){var home=p.id==='home',art=!!ART[p.id]&&!home,detail=/^sys-|^svc-|^ind-/.test(p.id),drawn=home||art?'':wHeroDrawn(p.figure),idx=home||detail||drawn?null:p.index?heroBigIndex(p):p.hero_index!==false?heroIndex(p):null;
 var left='<div class="aq-stack">'+(p.eyebrow?'<span class="aq-eyebrow">'+tx(p.eyebrow)+'</span>':'')+'<h1 class="'+(home?'aq-display-xl':'aq-display')+'">'+tx(p.headline)+'</h1>'+(p.lead?'<p class="aq-lead">'+tx(p.lead)+'</p>':'')+
  '<div class="aq-hero__actions">'+(p.primary_cta?wBtn(p.primary_cta,ctaLink(p),null,p.primary_cta_intent):'')+(p.secondary_cta&&p.secondary_cta.label?'<a class="aq-btn aq-btn--link" href="#'+e(p.secondary_cta.link||'systems')+'" data-wp="'+e(p.secondary_cta.link||'systems')+'">'+tx(p.secondary_cta.label)+' <span class="aq-btn__arrow">→</span></a>':'')+'</div>'+
  (p.tags&&p.tags.length?'<div class="aq-tags">'+p.tags.map(function(t){return '<span class="aq-tag">'+e(t)+'</span>'}).join('')+'</div>':'')+'</div>';
 /* Callouts round the drawing only on sys-* pages, where the facts are measured values; service and industry pages
    keep their facts (often counts) in the KeyFacts strip under the drawing. */
 var all=p.facts||[],co=art&&/^sys-/.test(p.id),callouts=co?all.slice(0,4):[],rest=co?all.slice(4):all;
 var right=home?wHomeLoop(p):art?wHeroFigure(p,callouts):drawn?drawn:detail?'<div class="aq-photo" role="img" aria-label="Photograph placeholder">[Photograph: '+e(p.nav_label||p.headline)+' · 316L, cool even light]</div>':idx?wHeroIndex(idx):'';
 var mod=home?' aq-hero__grid--loop':art?' aq-hero__grid--figure':drawn?' aq-hero__grid--figure aq-hero__grid--drawn':idx?' aq-hero__grid--index'+(idx.big?' aq-hero__grid--big-index':''):'';
 return '<section class="aq-hero'+(home?' aq-hero--home':'')+'"><div class="aq-in">'+(right?'<div class="aq-hero__grid'+mod+'">'+left+right+'</div>':left)+wKeyFacts(rest)+'</div></section>'}
