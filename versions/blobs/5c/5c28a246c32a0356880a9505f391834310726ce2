/* Look "washer-trace" -> WasherTrace (design-system/components/WasherTrace): an explainer (prose, as "explainer") with
   an art figure, told as the water's way into the machine. On a navy band the page's equipment drawing (assets/
   illustrations/<art>.webp, painted limestone) stays pinned at the left while the points scroll past on the right;
   each point owns a numbered hotspot on the drawing (its at: [x, y] in % of the drawing), and the water route runs
   hotspot to hotspot in point order, as piping (down or up, then across). As a point reaches the middle of the screen its hotspot lights and the route
   fills up to it. Without script, under reduced motion or on phones every hotspot and the whole route show.
   Fields: h, intro, figure {kind: "art", art, ratio: [w, h] (the drawing's pixel size, default [740, 813])}, points [{t, d, at}]. Concept: compliance.3 (sticky cutaway beside a
   rail of cards) with sys-pw.3's hotspots on the equipment. */
(function(){
LOOKS['washer-trace']=function(b,H){var P=b.points||[],art=(b.figure&&b.figure.art)||WP,pts=P.filter(function(p){return p.at&&p.at.length===2});
 var RW=(b.figure&&b.figure.ratio||[740,813])[0],RH=(b.figure&&b.figure.ratio||[740,813])[1];
 var Q=pts.map(function(p){return [p.at[0]*RW/100,p.at[1]*RH/100]}),d='',stops=[0],acc=0;
 /* the route runs as piping: down (or up) from each hotspot, then across to the next */
 Q.forEach(function(q,i){if(!i){d='M'+q[0].toFixed(1)+' '+q[1].toFixed(1);return}var a=Q[i-1];d+='L'+a[0].toFixed(1)+' '+q[1].toFixed(1)+'L'+q[0].toFixed(1)+' '+q[1].toFixed(1);acc+=Math.abs(q[1]-a[1])+Math.abs(q[0]-a[0]);stops.push(Math.round(acc))});
 var hots=P.map(function(p,i){return p.at&&p.at.length===2?'<span class="aq-washer-trace__hot" data-k="'+i+'" style="left:'+(+p.at[0])+'%;top:'+(+p.at[1])+'%" aria-hidden="true"><span>'+(i+1)+'</span></span>':''}).join('');
 var route=d?'<svg class="aq-washer-trace__route" viewBox="0 0 '+RW+' '+RH+'" aria-hidden="true" focusable="false"><path class="aq-washer-trace__pipe" d="'+d+'"/><path class="aq-washer-trace__water" d="'+d+'" data-stops="'+stops.join(' ')+'"/></svg>':'';
 var fig='<div class="aq-washer-trace__stage"><div class="aq-washer-trace__fig" style="--ratio:'+RW+' / '+RH+'"><span class="aq-illustration aq-washer-trace__art" role="img" aria-label="'+e(ART[art]||'')+'" style="'+artMask(art)+'"></span>'+route+hots+'</div>'
  +'<p class="aq-washer-trace__cap" aria-hidden="true"><span>Aquemi</span><span>'+e(b.nav||'')+'</span><span>'+P.length+' points</span></p></div>';
 var steps=P.map(function(p,i){return '<li class="aq-washer-trace__step" data-k="'+i+'"><span class="aq-washer-trace__n" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span>'
  +'<h3 class="aq-washer-trace__t">'+tx(p.t)+'</h3>'+(p.d?'<p class="aq-washer-trace__d">'+tx(p.d)+'</p>':'')+'</li>'}).join('');
 return sec(H+'<div class="aq-washer-trace">'+fig+'<ol class="aq-washer-trace__steps">'+steps+'</ol></div>','aq-band--navy aq-washer-trace-sec')};
})();
