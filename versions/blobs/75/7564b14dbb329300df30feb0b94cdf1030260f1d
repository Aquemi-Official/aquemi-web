/* Look "pq-calendar" -> PqCalendar (design-system/components/PqCalendar): PQ phases read as a year's sampling calendar,
   set as Swiss data graphics on the limestone band. Across the top runs the year, one bar per week, months numbered
   under it: the first phases' weeks are solid (daily sampling), the rest of the year hatched (the reduced routine
   plan) up to the end of the year. A zoom opens from the first weeks down to the sampling grid itself: one dot per
   sample, a row per sample point, a column per day, the phases split by the hold point where your quality unit signs
   for production use. The grid's total (points x days) is set large beside it. The phases' words sit under the parts
   of the calendar they describe.
   Fields (a steps block): h, intro, items [{t, d, hold, days}] (days: the phase's span in days for the grid; a phase
   without days is the routine plan that runs on to the end of the year), grid {points, days, rows, cols, unit}
   (the grid's size and its axis words; points x days is the total shown), year {weeks, months, label} (52, 12).
   Phones: the year strip and the zoom keep the full width; the grid follows, then the total and the phases stacked. */
LOOKS['pq-calendar']=function(b,H){var I=b.items||[],G=b.grid||{},Y=b.year||{},NP=+G.points||12,ND=+G.days||28,NW=+Y.weeks||52,NM=+Y.months||12;
 var grid=I.filter(function(it){return +it.days>0}),rest=I.filter(function(it){return !(+it.days>0)}),acc=0,ends=grid.map(function(it){acc+=+it.days;return acc});
 var wk=Math.ceil(acc/7),uid='pqc'+(Math.random()*1e6|0).toString(36);
 function who(s){s=String(s);return tx(/^[A-Z][a-z]/.test(s)?s.charAt(0).toLowerCase()+s.slice(1):s)}
 /* the year: one bar per week */
 var bars='';for(var w=0;w<NW;w++){var day=w*7,ph=0;while(ph<ends.length&&day>=ends[ph])ph++;
  bars+='<rect class="aq-pq-calendar__wk '+(ph<grid.length?'is-p'+(ph+1):'is-rest')+'" x="'+(w*10)+'" y="'+(ph<grid.length?0:8)+'" width="8" height="'+(ph<grid.length?40:32)+'"'+(ph<grid.length?'':' fill="url(#'+uid+')"')+'/>'}
 var year='<svg class="aq-pq-calendar__year" viewBox="0 0 '+(NW*10-2)+' 40" preserveAspectRatio="none" aria-hidden="true" focusable="false"><defs><pattern id="'+uid+'" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect class="aq-pq-calendar__hatch" width="1.4" height="4"/></pattern></defs>'+bars+'</svg>';
 var months='';for(var k=1;k<=NM;k++)months+='<span>'+k+'</span>';
 var zoom='<svg class="aq-pq-calendar__zoom" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true" focusable="false">'+[58.3,100].map(function(x){var t=(wk/NW*100).toFixed(2),c=x<100?'':' is-wide';return '<path class="aq-pq-calendar__zw'+c+'" d="M0 0L0 10L'+x+' 10L'+t+' 0Z"/><path class="aq-pq-calendar__zl'+c+'" d="M'+t+' 0L'+x+' 10"/>'}).join('')+'</svg>';
 /* the sampling grid: one dot per sample */
 var dots='',R=5,S=16;for(var d=0;d<ND;d++){var ph=0;while(ph<ends.length-1&&d>=ends[ph])ph++;for(var p=0;p<NP;p++)dots+='<circle class="aq-pq-calendar__dot is-p'+(ph+1)+'" data-d="'+d+'" cx="'+(d*S+S/2)+'" cy="'+(p*S+S/2)+'" r="'+R+'"/>'}
 var holdAt=-1;grid.forEach(function(it,i){if(it.hold&&i>0)holdAt=ends[i-1]});
 var hl=holdAt>0?'<line class="aq-pq-calendar__hl" x1="'+(holdAt*S)+'" y1="-10" x2="'+(holdAt*S)+'" y2="'+(NP*S+10)+'"/>':'';
 var mat='<svg class="aq-pq-calendar__grid" viewBox="0 -10 '+(ND*S)+' '+(NP*S+20)+'" aria-hidden="true" focusable="false">'+dots+hl+'</svg>';
 var total=NP*ND;
 var fig='<p class="aq-pq-calendar__total"><span class="aq-pq-calendar__num">'+total+'</span><span class="aq-pq-calendar__unit">'+tx(G.unit||'')+'</span>'
  +'<span class="aq-pq-calendar__eq">'+NP+' '+tx(G.rows||'')+' &times; '+ND+' '+tx(G.cols||'')+'</span></p>';
 function phase(it,i,cls,span){return '<li class="aq-pq-calendar__ph '+cls+'"'+(span?' style="--span:'+span+'"':'')+'>'
  +'<h3 class="aq-pq-calendar__t"><span class="aq-pq-calendar__key" aria-hidden="true"></span>'+tx(it.t)+'</h3>'
  +(it.d?'<p class="aq-pq-calendar__d">'+tx(it.d)+'</p>':'')
  +(it.hold?'<p class="aq-pq-calendar__hold"><span>Hold point</span> Signed by '+who(it.hold)+'</p>':'')+'</li>'}
 var gp=grid.map(function(it,i){return phase(it,i,'is-p'+(i+1),+it.days)}).join(''),rp=rest.map(function(it,i){return phase(it,i,'is-rest')}).join('');
 return sec(H+'<div class="aq-pq-calendar" data-theme="light" style="--wk:'+wk+';--nw:'+NW+'">'
  +'<div class="aq-pq-calendar__strip">'+year+'<div class="aq-pq-calendar__months" aria-hidden="true">'+months+'</div>'
  +(Y.label?'<span class="aq-pq-calendar__ylab" aria-hidden="true">'+tx(Y.label)+'</span>':'')+'</div>'
  +zoom
  +'<div class="aq-pq-calendar__body"><div class="aq-pq-calendar__zoomed">'+mat+'<ol class="aq-pq-calendar__phases" style="--days:'+acc+'">'+gp+'</ol></div>'
  +'<div class="aq-pq-calendar__aside">'+fig+(rp?'<ol class="aq-pq-calendar__phases aq-pq-calendar__phases--rest" start="'+(grid.length+1)+'">'+rp+'</ol>':'')+'</div></div></div>','aq-band--limestone aq-pq-calendar-sec')};
