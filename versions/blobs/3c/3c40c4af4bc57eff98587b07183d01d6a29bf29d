/* Block "band" -> Band: one statement set large on a limestone or sunken ground, the body as a supporting line, and a
   faint pipework line drawing at the right (desktop only). Fields: h, body, tone ("limestone" default or
   "sunken"), and optional mark: one word or phrase from h to underline with a flow hairline. The mark is only wrapped where
   it appears in h (first match, whole words); if it isn't found, nothing is framed. */
var BAND_MOTIF='<svg class="aq-band__motif" viewBox="0 0 240 320" preserveAspectRatio="xMaxYMid meet" aria-hidden="true" focusable="false">'
  +'<path d="M150 0V320M186 0V320M150 64H96V140M186 96H222V250M96 140H40M96 196V320M150 232H120V320"/>'
  +'<path d="M138 168H162L150 180Z M138 192H162L150 180Z"/>'
  +'<rect x="52" y="112" width="44" height="56"/><rect x="200" y="176" width="22" height="22"/>'
  +'</svg>';
function bandMark(h,mark){
  var s=String(h||''),m=String(mark||'').trim();
  if(!m)return tx(s);
  var r=new RegExp('(^|[^\\w])('+m.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')(?![\\w])'),x=r.exec(s);
  if(!x)return tx(s);
  var i=x.index+x[1].length;
  return tx(s.slice(0,i))+'<span class="aq-band__mark">'+tx(x[2])+'</span>'+tx(s.slice(i+x[2].length));
}
BLOCKS['band']=function(b,H){
  var tone=b.tone==='sunken'?'aq-band--sunken':'aq-band--limestone';
  return '<section class="aq-section '+tone+' aq-band"><div class="aq-in"><div class="aq-band__frame">'
    +'<div class="aq-band__text"><h2 class="aq-band__h">'+bandMark(b.h,b.mark)+'</h2>'
    +(b.body?'<p class="aq-lead aq-band__lead">'+tx(b.body)+'</p>':'')+'</div>'
    +BAND_MOTIF+'</div></div></section>';
};
