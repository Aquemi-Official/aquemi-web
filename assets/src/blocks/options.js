/* Block "options" -> OptionList: configuration options as rows of the shared list grammar: index, title, one line.
   as: "modules" -> OptionModules: the options drawn as modules around the page's own equipment drawing (the base
   skid), joined to it by dashed connectors. Item fields: t, d, spot (Spot or Icon name, wSpot), tag (category label above
   the box, optional). Block fields: art (page id whose icon, PAGE_ICON, is drawn as the base; default the current page), spot (an Icon or Spot name drawn as the base instead), base (label, default "Base skid"). */
function wOptModule(it,i,b,side){var v=wSpot(it.spot||it.icon,'s','aq-spot--muted aq-option-modules__vig');
 return fli('<li class="aq-option-modules__m aq-option-modules__m--'+side+'">'+(it.tag?'<p class="aq-option-modules__cat">'+tx(it.tag)+'</p>':'')
  +'<div class="aq-option-modules__box'+(v?'':' aq-option-modules__box--bare')+'"><h3 class="aq-option-modules__t"><span>'+tx(it.t)+'</span><span class="aq-option-modules__plus" aria-hidden="true">+</span></h3>'
  +v+(it.d?'<p class="aq-option-modules__d">'+tx(it.d)+'</p>':'')
  +'<svg class="aq-option-modules__wire" aria-hidden="true"><line x1="0" y1="50%" x2="100%" y2="50%"/><circle cx="'+(side==='l'?'100%':'0')+'" cy="50%" r="2.5"/></svg></div></li>',b,i)}
function wOptModules(b,H){var I=b.items||[],art=b.art||WP,pg=wp(art),half=Math.ceil(I.length/2);
 var L=I.slice(0,half),R=I.slice(half);
 var bn=isVig(b.spot)?b.spot:PAGE_ICON[art],hasArt=!!bn;
 var base=hasArt?wPlate('<figure class="aq-option-modules__fig">'+wSpot(bn,'l','aq-option-modules__art aq-option-modules__art--spot')
   +'<figcaption class="aq-option-modules__label"><span>'+tx(b.base||'Base skid')+'</span>'+(pg&&pg.nav_label?'<span>'+tx(pg.nav_label)+'</span>':'')+'</figcaption></figure>',{cls:'aq-option-modules__base'}):'';
 var list=function(X,o,side){return X.length?'<ol class="aq-option-modules__list aq-option-modules__list--'+side+'"'+(o?' start="'+(o+1)+'"':'')+'>'+X.map(function(it,k){return wOptModule(it,o+k,b,side)}).join('')+'</ol>':''};
 var inner='<div class="aq-options aq-option-modules'+(hasArt?'':' aq-option-modules--bare')+'">'+list(L,0,'l')+base+list(R,half,'r')+'</div>';
 return sec(H+wFold(b,I.length,inner,b.fold_noun||'options'))}
/* as: "decisions" -> OptionList decisions: choices the buyer settles (before the URS, before design). Each row: the index
   with a "?" in flow, the decision, its line. A decision named as two options ("Hot loop or ambient",
   "Make media and buffers, or buy") gets a small fork mark; item by: "<stage>" adds a "Decide by: <stage>" caption. */
var OPT_FORK='<svg class="aq-options__fork" viewBox="0 0 32 20" aria-hidden="true" focusable="false"><path d="M1 10 H12 C18 10 18 3 24 3 H31 M12 10 C18 10 18 17 24 17 H31"/><circle cx="12" cy="10" r="2"/></svg>';
function wOptDecide(b,H){var I=b.items||[];
 return sec(H+wFold(b,I.length,'<ol class="aq-rows aq-options aq-options--decide">'+I.map(function(it,i){var fork=/\bor\b/i.test(String(it.t||''));
  return fli('<li><div class="aq-rows__row"><span class="aq-options__q" aria-hidden="true">'+idx(i)+'<span class="aq-options__qt">?</span></span>'
   +'<h3 class="aq-rows__t">'+(fork?OPT_FORK:'')+tx(it.t)+'</h3>'
   +'<p class="aq-rows__d">'+(it.d?tx(it.d):'')+(it.by?'<span class="aq-options__by">Decide by: '+tx(it.by)+'</span>':'')+'</p></div></li>',b,i)}).join('')+'</ol>',b.fold_noun||'decisions'))}
BLOCKS['options']=function(b,H){if(b.as==='modules')return wOptModules(b,H);if(b.as==='decisions')return wOptDecide(b,H);var I=b.items||[],IC=wIcons(b);return sec(H+wFold(b,I.length,'<ol class="aq-rows aq-options">'+I.map(function(it,i){return fli(wRow(i,it.t,it.d,0,0,0,IC[i]),b,i)}).join('')+'</ol>',b.fold_noun||'options'));};
