/* ProcessDiagram: treatment train as numbered stage boxes on one serpentine Flow pipe.
   Desktop: rows of three (four with --4, chosen by dCols so no stage sits alone), alternate rows run right to left
   (CSS direction), joined by vertical drops. Phone: compact hairline rows on one vertical pipe. No run-time measuring. */
var DGLYPH={
 hx:'M8 18h56v20H8zM14 28l6-6 6 12 6-12 6 12 6-12 6 12 6-6M20 18v-8M52 38v8',
 ro:'M6 20h60v16H6zM6 36L66 20M2 28h4M66 28h4M20 36v8M52 36v8',
 edi:'M14 14h44v28H14zM22 14v28M30 14v28M38 14v28M46 14v28M36 14V6M36 42v8',
 uv:'M8 22h56v12H8zM20 22l4-8M36 22V12M52 22l-4-8M20 34l4 8M36 34v10M52 34l-4 8',
 softener:'M8 48V18a8 4 0 0 1 16 0v30M30 48V18a8 4 0 0 1 16 0v30M52 48V28h12v20M4 48h64M24 22h6',
 carbon:'M22 50V14a14 6 0 0 1 28 0v36zM30 26h1M41 30h1M32 36h1M42 41h1M29 44h1M36 8V2',
 filter:'M22 50V14a14 6 0 0 1 28 0v36zM22 28h28M22 36h28M22 44h28M36 8V2',
 column:'M26 52V10a10 6 0 0 1 20 0v42zM26 20h12M34 28h12M26 36h12M34 44h12M46 14h12v8',
 pump:'M22 30a14 14 0 1 0 28 0a14 14 0 1 0-28 0M36 16h26M4 30h18M26 41l-6 9h32l-6-9',
 steam:'M14 50V28h44v22zM24 22c-4-4 4-8 0-12M36 22c-4-4 4-8 0-12M48 22c-4-4 4-8 0-12',
 loop:'M14 14h44a10 10 0 0 1 0 20H14a10 10 0 0 1 0-20M24 34v12M36 34v12M48 34v12',
 tank:'M18 48V18a18 8 0 0 1 36 0v30zM10 48h52M24 32h24M36 10V4',
 instrument:'M22 24a14 14 0 1 0 28 0a14 14 0 1 0-28 0M22 24h28M36 38v12M24 50h24',
 screen:'M10 8h52v32H10zM28 50h16M36 40v10M18 30l8-10 8 6 10-12 8 8',
 drop:'M36 6c-10 14-16 22-16 30a16 16 0 0 0 32 0c0-8-6-16-16-30zM28 38a8 8 0 0 0 8 8',
 generic:'M12 14h48v28H12zM4 28h8M60 28h8M20 22h20M20 30h28'};
var DKEYS=[['drop',/^(from|to)\b/],['hx',/heat|exchanger|preheat|condens|cooler/],['ro',/\bro\b|reverse osmosis|membrane|ultrafiltr|\buf\b|generation/],['edi',/\bedi\b|electrodeion/],['uv',/\buv\b|ultraviolet/],
 ['softener',/soften/],['carbon',/carbon|bisulfite|dechlor/],['filter',/filt|pretreat|multimedia|cartridge/],['column',/still|column|evaporat|separat|degas|distil/],
 ['pump',/pump/],['steam',/steam|sterili|\bsip\b|header/],['loop',/loop|distribut|point|return|outlet/],['tank',/tank|storage|vessel/],
 ['instrument',/instrument|analy|\btoc\b|conductiv|sensor|monitor/],['screen',/plc|hmi|scada|network|historian|control/],['drop',/feed|water|wfi|\bpw\b/]];
function dGlyph(t){var s=String(t).toLowerCase();for(var i=0;i<DKEYS.length;i++)if(DKEYS[i][1].test(s))return DGLYPH[DKEYS[i][0]];return DGLYPH.generic}
/* Pipe fittings between stages: a valve, then an instrument bubble, alternating */
var DVALVE='<svg class="aq-diagram__fitting" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6v12l18-12v12z"/></svg>';
var DINST='<svg class="aq-diagram__fitting" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12V11M6.5 5.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M6.5 5.5h11"/></svg>';
/* Stages per desktop row: three, or four when that balances the rows (4 -> one row, 7 -> 4 + 3, 8 -> 4 + 4) */
function dCols(n){return n===4||n>=7?4:3}
function wDiagram(b){var st=b.stages||[],n=st.length,k=0,s='',c=dCols(n);
 function link(cls){var c='aq-diagram__link'+cls;var f=k%2?DINST:DVALVE;k++;return '<span class="'+c+'">'+f+'</span>'}
 function stage(t,i){return '<div class="aq-diagram__stage"><span class="aq-diagram__num">'+String(i+1).padStart(2,'0')+'</span><svg class="aq-diagram__glyph" viewBox="0 0 72 56" aria-hidden="true"><path d="'+dGlyph(t)+'"/></svg><span class="aq-diagram__label">'+tx(t)+'</span></div>'}
 for(var r=0;r*c<n;r++){var rev=r%2?' aq-diagram__row--rev':'';
  if(r)s+='<div class="aq-diagram__row aq-diagram__row--turn'+rev+'">'+link(' aq-diagram__link--turn')+'</div>';
  s+='<div class="aq-diagram__row'+rev+'">';
  st.slice(r*c,r*c+c).forEach(function(t,j){var i=r*c+j;if(j)s+=link('');s+=stage(t,i)});
  s+='</div>'}
 var alt='Treatment train, '+n+' stages in order: '+st.map(function(t,i){return (i+1)+' '+t}).join(', ')+(b.base?'. Across all stages: '+b.base:'');
 return '<div class="aq-diagram'+(c===4?' aq-diagram--4':'')+(b.base?' aq-diagram--base':'')+'" role="img" aria-label="'+e(alt)+'"><div class="aq-diagram__train">'+s+'</div>'+(b.base?'<div class="aq-diagram__base"><svg class="aq-diagram__fitting" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0M3 12h18"/></svg><span>'+e(b.base)+'</span></div>':'')+'</div>'}
