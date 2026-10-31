/* KeyFacts: the measurement strip under the Hero. facts = [{l, v}].
   Label "Conductivity at 25 °C · USP <645>" -> dt name + a second dd for the source (after the last " · ").
   Value "≤ 1.3 µS/cm" -> comparator, figure, unit; the unit is split off only when the tail after the last space
   (outside [placeholders]) has no digits and follows a figure, so "Part 11", "GAMP 5" and "[Ra, µm]" stay whole.
   A quiet strip between line hairlines on the section's own ground; no index, frame or decoration. */
function kfParts(v){
 v=String(v==null?'':v);
 var cmp='',m=/^([<>≤≥])\s+/.exec(v);
 if(m&&/[\d\[]/.test(v.charAt(m[0].length))){cmp=m[1];v=v.slice(m[0].length)}
 /* A leading number keeps a short unit tail whole at its first space: "10 CFU/100 mL" -> "10" + "CFU/100 mL" */
 var n=/^(\d[\d.,]*) ([^\d\s\[][^\[]*)$/.exec(v);
 if(n&&n[2].length<=12&&n[2].indexOf(' · ')<0&&n[2].indexOf(',')<0)return {cmp:cmp,fig:n[1],unit:n[2]};
 var unit='',d=0,cut=-1;
 for(var i=0;i<v.length;i++){var c=v.charAt(i);if(c==='[')d++;else if(c===']'&&d)d--;else if(c===' '&&!d)cut=i}
 if(cut>0){var head=v.slice(0,cut),tail=v.slice(cut+1);
  if(tail.length<=8&&!/[0-9\[\]]/.test(tail)&&/[0-9\]]$/.test(head)){unit=tail;v=head}}
 return {cmp:cmp,fig:v,unit:unit};
}
function kfValue(v){var p=kfParts(v);
 return (p.cmp?'<span class="aq-key-facts__cmp">'+e(p.cmp)+'</span> ':'')+'<span class="aq-key-facts__fig">'+tx(p.fig)+'</span>'+(p.unit?' <span class="aq-key-facts__unit">'+tx(p.unit)+'</span>':'');
}
/* A figure that is words or a placeholder rather than a number ("USP + Ph. Eur.", "[founding year]") is set smaller.
   Only the figure is measured, so a short number with a long unit ("10 CFU/100 mL") stays large. */
function kfLong(v){var f=kfParts(v).fig;return f.length>7||/^\[/.test(f)}
function wKeyFacts(facts){
 if(!facts||!facts.length)return '';
 return '<dl class="aq-key-facts">'+facts.map(function(f){
  var l=String(f.l==null?'':f.l),k=l.lastIndexOf(' · '),name=k>0?l.slice(0,k):l,src=k>0?l.slice(k+3):'';
  return '<div><dt>'+tx(name)+'</dt><dd class="aq-key-facts__value'+(kfLong(f.v)?' is-long':'')+'">'+kfValue(f.v)+'</dd>'+(src?'<dd class="aq-key-facts__src">'+tx(src)+'</dd>':'')+'</div>';
 }).join('')+'</dl>';
}
