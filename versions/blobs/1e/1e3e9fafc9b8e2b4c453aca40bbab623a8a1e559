/* Look "trace-lines" -> TraceLines (design-system/components/TraceLines): a traceability table drawn as transit lines.
   Each requirement (a column after the first) is a line that starts at its code, set large, and runs down through
   one station per document (the rows): a node where the document answers it, a dashed pass where it does not
   ("Not applicable"), a terminus at the last. A cell that opens "Met." shows that status as a word chip; sentences
   that open with a test step ("FAT: …", "SAT and OQ: …") branch into a chip per step. The documents are the station
   names down the left, each row a hairline across both lines like an interchange. Pointing at a line dims the other.
   Fields, as a table: cols [row name, requirement…] ("URS-012: conductivity …": the code before the first colon),
   rows (cells strings or {t, link}). Phones: one line after the other, each station with its document name. */
LOOKS['trace-lines']=(function(){
 function str(c){return String(c&&typeof c==='object'?c.t:c==null?'':c)}
 function cell(c){var s=str(c),o='',met=/^Met\.\s*/.test(s);if(c&&typeof c==='object'&&c.link)return '<p class="aq-trace-lines__p">'+tcell(c)+'</p>';
  if(met){o+='<span class="aq-trace-lines__met">Met</span> ';s=s.replace(/^Met\.\s*/,'')}
  var parts=s.split(/(?:\.)\s+(?=[A-Z])/).map(function(p,i,a){return i<a.length-1?p+'.':p}),steps=[];
  parts.forEach(function(p){var m=p.match(/^((?:[A-Z]{2,4})(?:,? (?:and )?[A-Z]{2,4})*): (.*)$/);if(m)steps.push(m);else o+=tx(p)+' '});
  o=o?'<p class="aq-trace-lines__p">'+o.trim()+'</p>':'';
  if(steps.length)o+='<ul class="aq-trace-lines__tests">'+steps.map(function(m){return '<li><span class="aq-trace-lines__step">'+tx(m[1])+'</span> <span>'+tx(m[2])+'</span></li>'}).join('')+'</ul>';
  return o}
 return function(b,H){var C=b.cols||[],R=b.rows||[],k=C.length-1,n=R.length;
  var docs='<div class="aq-trace-lines__docs" aria-hidden="true"><span class="aq-trace-lines__dh" style="grid-row:1">'+tx(C[0]||'')+'</span>'
   +R.map(function(r,i){return '<span class="aq-trace-lines__doc" style="grid-row:'+(i+2)+'"><span class="aq-trace-lines__dn">'+(i<9?'0':'')+(i+1)+'</span>'+tcell(r[0])+'</span>'}).join('')+'</div>';
  var lines='';
  for(var j=1;j<=k;j++){var h=str(C[j]),m=h.match(/^([^:]{2,16}):\s*(.+)$/);
   lines+='<div class="aq-trace-lines__line" data-line="'+(j-1)+'" style="--col:'+(j+1)+'">'
    +'<div class="aq-trace-lines__head" style="grid-row:1">'+(m?'<span class="aq-trace-lines__code">'+tx(m[1])+'</span>':'')+'<h3 class="aq-trace-lines__req">'+tx(m?m[2]:h)+'</h3></div>'
    +'<ol class="aq-trace-lines__stops" role="list">'+R.map(function(r,i){var s=str(r[j]),na=/^not applicable\.?$/i.test(s.trim());
     return '<li class="aq-trace-lines__st'+(na?' is-na':'')+(i===n-1?' is-end':'')+'" style="grid-row:'+(i+2)+'">'
      +'<span class="aq-trace-lines__k">'+tcell(r[0])+'</span>'+(na?'<p class="aq-trace-lines__p">'+tx(s)+'</p>':cell(r[j]))+'</li>'}).join('')+'</ol></div>'}
  return sec(H+'<div class="aq-trace-lines" style="--k:'+k+';--n:'+n+'">'+docs+lines+'</div>','aq-trace-lines-sec')}
})();
