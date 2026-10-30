/* Block "options" -> OptionList: configuration options as rows of the shared list grammar: index, title, one line.
   as: "modules" -> OptionModules: the options drawn as framed modules around the page's own equipment drawing (the base
   skid), joined to it by dashed connectors. Item fields: t, d, spot (Spot or Icon name, wSpot), tag (category label above
   the box, optional). Block fields: art (drawing page id, default the current page), spot (a Spot name drawn as the base instead, so a page that already shows its drawing in the hero and callouts does not repeat it), base (label, default "Base skid"). */
function wOptModule(it,i,b,side){var v=wSpot(it.spot||it.icon,'s','aq-spot--on-navy aq-option-modules__vig');
 return fli('<li class="aq-option-modules__m aq-option-modules__m--'+side+'">'+(it.tag?'<p class="aq-option-modules__cat">'+tx(it.tag)+'</p>':'')
  +'<div class="aq-option-modules__box'+(v?'':' aq-option-modules__box--bare')+'"><h3 class="aq-option-modules__t"><span>'+tx(it.t)+'</span><span class="aq-option-modules__plus" aria-hidden="true">[+]</span></h3>'
  +v+(it.d?'<p class="aq-option-modules__d">'+tx(it.d)+'</p>':'')
  +'<svg class="aq-option-modules__wire" aria-hidden="true"><line x1="0" y1="50%" x2="100%" y2="50%"/><circle cx="'+(side==='l'?'100%':'0')+'" cy="50%" r="2.5"/></svg></div></li>',b,i)}
function wOptModules(b,H){var I=b.items||[],art=b.art||WP,pg=wp(art),half=Math.ceil(I.length/2),hasArt=!!ART[art];
 var L=I.slice(0,half),R=I.slice(half);
 var bs=b.spot&&isSpot(b.spot);hasArt=hasArt||bs;
 var base=hasArt?wPlate('<figure class="aq-option-modules__fig">'+(bs?wSpot(b.spot,'l','aq-option-modules__art aq-option-modules__art--spot'):'<span class="aq-illustration aq-option-modules__art" role="img" aria-label="'+e(ART[art])+'" style="'+artMask(art)+'"></span>')
   +'<figcaption class="aq-option-modules__label"><span>'+tx(b.base||'Base skid')+'</span>'+(pg&&pg.nav_label?'<span>'+tx(pg.nav_label)+'</span>':'')+'</figcaption></figure>',{cls:'aq-option-modules__base'}):'';
 var list=function(X,o,side){return X.length?'<ol class="aq-option-modules__list aq-option-modules__list--'+side+'"'+(o?' start="'+(o+1)+'"':'')+'>'+X.map(function(it,k){return wOptModule(it,o+k,b,side)}).join('')+'</ol>':''};
 var inner='<div class="aq-options aq-option-modules'+(hasArt?'':' aq-option-modules--bare')+'">'+list(L,0,'l')+base+list(R,half,'r')+'</div>';
 return sec(H+wFold(b,I.length,inner,b.fold_noun||'options'))}
BLOCKS['options']=function(b,H){if(b.as==='modules')return wOptModules(b,H);var I=b.items||[],IC=wIcons(b);return sec(H+wFold(b,I.length,'<ol class="aq-rows aq-options">'+I.map(function(it,i){return fli(wRow(i,it.t,it.d,0,0,0,IC[i]),b,i)}).join('')+'</ol>',b.fold_noun||'options'));};
