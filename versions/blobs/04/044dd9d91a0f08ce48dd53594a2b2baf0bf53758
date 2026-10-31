/* Block "readout" -> Readout: one large figure in Geist Mono with its unit, the method on a limit tag, the body as
   caption. The value string is only split, never
   changed: "< 0.25 EU/mL" -> comparator "<", figure "0.25", unit "EU/mL"; "≤ 1.3 µS/cm @ 25 °C" adds condition
   "@ 25 °C". A value that doesn't start with a number (a [placeholder]) is shown whole as the figure.
   The unit and condition start with a no-break space so figure, unit and condition read as one phrase. */
BLOCKS['readout']=function(b,H){
  var v=String(b.value||''),m=/^\s*([<>≤≥]=?)?\s*(\d[\d.,]*)\s*(.*)$/.exec(v),fig,unit='',cond='';
  if(m){
    var rest=m[3].split(/\s+(?=@\s)/);unit=rest[0]||'';cond=rest.slice(1).join(' ');
    fig=(m[1]?'<span class="aq-readout__cmp">'+e(m[1])+' </span>':'')+e(m[2]);
  } else fig=tx(v);
  var limit=!!(m&&m[1]);
  return '<section class="aq-section"><div class="aq-in"><div class="aq-readout'+(limit?' aq-readout--limit':'')+'">'
    +'<div class="aq-readout__head"><p class="aq-readout__reading"><span class="aq-readout__figure">'+fig+'</span>'
    +(unit?'<span class="aq-readout__unit">&nbsp;'+tx(unit)+'</span>':'')
    +(cond?'<span class="aq-readout__cond">&nbsp;'+tx(cond)+'</span>':'')+'</p>'
    +(b.method?'<div class="aq-readout__ref"><span class="aq-readout__tag">'+tx(b.method)+'</span></div>':'')+'</div>'
    +(b.body?'<p class="aq-lead aq-readout__caption">'+tx(b.body)+'</p>':'')
    +'</div></div></section>';
};
