/* WaterPath: the system families as stations on one pipe, feed to point of use, drawn by the ProcessDiagram flow
   (wFlow in parts/ProcessDiagram.js) with the aq-water-path modifier. Each station shows its item's spot (or icon);
   without one, the linked page's icon (PAGE_ICON in core.js). The detail panel carries the item's line, tag and link. */
function wPath(b){var I=(b.items||[]).slice(0,7);
 return wFlow(I,{cls:'aq-water-path',from:b.from||'Feed water',to:b.to||'Point of use',icon:function(x){return PAGE_ICON[x.link]},block:['Water path',I.length+' systems']})}
