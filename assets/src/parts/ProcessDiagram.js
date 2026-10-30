/* ProcessDiagram */
function wDiagram(b){var st=b.stages||[],n=st.length,w=170,W=n*w,bh=52;
 var H=b.base?124:96,s='<svg viewBox="0 0 '+W+' '+H+'" width="'+W+'" height="'+H+'" role="img" aria-label="'+e(st.join(' to '))+'"><defs><marker id="aq-ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto"><path class="aq-diagram__arrow" d="M0 0L8 4L0 8"/></marker></defs>';
 st.forEach(function(t,i){var x=i*w+10,bw=w-34;s+='<rect class="aq-diagram__box" x="'+x+'" y="28" width="'+bw+'" height="'+bh+'"/>';
  var words=String(t).split(' '),l1='',l2='';words.forEach(function(wd){if((l1+' '+wd).trim().length<=15&&!l2)l1=(l1+' '+wd).trim();else l2=(l2+' '+wd).trim()});
  s+='<text class="aq-diagram__label" x="'+(x+bw/2)+'" y="'+(l2?50:58)+'" text-anchor="middle">'+e(l1)+'</text>'+(l2?'<text class="aq-diagram__label" x="'+(x+bw/2)+'" y="67" text-anchor="middle">'+e(l2.slice(0,18))+'</text>':'');
  s+='<text class="aq-diagram__num" x="'+x+'" y="18">'+String(i+1).padStart(2,'0')+'</text>';
  if(i<n-1)s+='<line class="aq-diagram__arrow" x1="'+(x+bw)+'" y1="'+(28+bh/2)+'" x2="'+((i+1)*w+8)+'" y2="'+(28+bh/2)+'" marker-end="url(#aq-ah)"/>'});
 return s+(b.base?'<line class="aq-diagram__base" x1="10" y1="100" x2="'+(W-24)+'" y2="100"/><text class="aq-diagram__num" x="10" y="118">'+e(String(b.base).toUpperCase())+'</text>':'')+'</svg>'}
