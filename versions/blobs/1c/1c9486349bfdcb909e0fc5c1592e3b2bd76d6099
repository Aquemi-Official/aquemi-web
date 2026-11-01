/* Look "record-anatomy" -> RecordAnatomy (design-system/components/RecordAnatomy): an explainer (prose, as
   "explainer") of what a published record carries, drawn as the anatomy of one specimen record. Left, a limestone
   record sheet in zones, one per point, each zone a small drawing of that part of the record with its number stamped
   in the margin; right, the points themselves; a leader runs from each zone's number to its point. Nothing on the
   sheet is a value: the figure is an empty bracket against a dashed limit, the method a sampling map and a row of
   sample ticks, the report a numbered document, the approval two signature lines and a stamp.
   Fields: h, intro, points [{t, d, fig}]. fig (optional): figure, method, report, approval, the zone's drawing
   (default by order). Phones: each zone sits above its point, the leader drops down between them. */
(function(){
function S(inner){return '<svg class="aq-record-anatomy__svg" viewBox="0 0 360 120" preserveAspectRatio="xMinYMid meet" aria-hidden="true" focusable="false">'+inner+'</svg>'}
function P(d,c){return '<path class="aq-record-anatomy'+'__'+(c||'ln')+'" d="'+d+'"/>'}
var RA_FIG={
 /* the figure: an empty value in brackets, a bar standing under a dashed limit line */
 figure:function(){return '<text class="aq-record-anatomy__br" x="0" y="92">[</text><text class="aq-record-anatomy__br" x="128" y="92">]</text>'
  +P('M30 96H124','hid')+P('M30 104H70','thin')
  +P('M196 108H352','ln')+P('M196 34H352','limit')+P('M226 108V70H262V108','fill')+P('M292 108V58H328V108','ln')
  +P('M196 108V30','thin')+P('M192 34H196M192 58H196M192 82H196','thin')},
 /* the method: a loop with its sampling points, then the samples over the period as ticks on a time line */
 method:function(){var t='';for(var i=0;i<14;i++)t+='M'+(176+i*12)+' 92V'+(i%7===0?72:80);
  return P('M14 30H128V96H14Z','ln')+P('M14 30H128','flow')+'<circle class="aq-record-anatomy__pt" cx="52" cy="30" r="5"/><circle class="aq-record-anatomy__pt" cx="128" cy="62" r="5"/><circle class="aq-record-anatomy__pt" cx="70" cy="96" r="5"/>'
   +P('M170 92H346','ln')+P(t,'tick')+P('M170 106H346','thin')+P('M170 101V111M346 101V111','thin')},
 /* the report: a document with its number, ruled text and a results table */
 report:function(){return P('M20 8H104L124 28V114H20Z','sheet')+P('M104 8V28H124','ln')+P('M34 26H74','flow')+P('M34 44H108M34 54H100M34 64H108','thin')+P('M34 78H110V104H34ZM34 91H110M60 78V104M86 78V104','thin')
  +P('M170 40H346','ln')+P('M170 40V22H232V40','thin')+'<text class="aq-record-anatomy__no" x="178" y="35">No.</text>'+P('M244 31H340','hid')+P('M170 72H300M170 86H330M170 100H280','thin')},
 /* the approval: two signature lines, the second engineer's and the client's quality unit, and a stamp */
 approval:function(){return P('M14 82C30 60 40 92 56 72S80 64 96 78','flow')+P('M10 92H150','ln')+P('M10 100H60','thin')
  +P('M180 76C194 56 208 90 222 66S244 70 262 74','flow')+P('M176 92H316','ln')+P('M176 100H226','thin')
  +'<g class="aq-record-anatomy__stamp"><circle class="aq-record-anatomy__ln" cx="320" cy="44" r="26"/><circle class="aq-record-anatomy__thin" cx="320" cy="44" r="20"/>'+P('M308 45L317 54L334 34','flow')+'</g>'}
};
var RA_ORDER=['figure','method','report','approval'];
LOOKS['record-anatomy']=function(b,H){var Pt=(b.points||[]).slice(0,4),num=function(i){return (i<9?'0':'')+(i+1)};
 var rows=Pt.map(function(p,i){var f=RA_FIG[p.fig]?p.fig:RA_ORDER[i%4];
  return '<li class="aq-record-anatomy__row is-'+f+'" style="--i:'+i+'">'
   +'<div class="aq-record-anatomy__zone" aria-hidden="true" data-theme="light"><span class="aq-record-anatomy__mark">'+num(i)+'</span>'+S(RA_FIG[f]())+'</div>'
   +'<span class="aq-record-anatomy__lead" aria-hidden="true"><i></i></span>'
   +'<div class="aq-record-anatomy__pt-t"><h3 class="aq-record-anatomy__t"><span class="aq-record-anatomy__n" aria-hidden="true">'+num(i)+'</span>'+tx(p.t)+'</h3>'
   +(p.d?'<p class="aq-record-anatomy__d">'+tx(p.d)+'</p>':'')+'</div></li>'}).join('');
 return sec(H+'<div class="aq-record-anatomy"><ol class="aq-record-anatomy__rows" role="list">'+rows+'</ol></div>','aq-record-anatomy-sec')};
})();
