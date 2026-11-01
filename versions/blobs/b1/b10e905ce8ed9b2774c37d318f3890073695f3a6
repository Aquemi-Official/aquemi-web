/* Look "retrofit-plant" -> RetrofitPlant (design-system/components/RetrofitPlant): common upgrades shown on the running
   plant, drawn the way a retrofit drawing is: existing equipment faint, the new work bold. A navy blueprint sheet
   carries the whole PW plant (IsoKit, the scene shared with look "visit-plan"); under it the upgrades are a tab list
   set large on the left and the picked upgrade's terms on the right (what changes, requalification, site downtime,
   where to start). Picking an upgrade turns the sheet to that retrofit: everything else drops to "existing", the
   stages the upgrade changes light up in flow. The first upgrade is shown (and lit) as rendered.
   Fields as a router table: h, intro, cols [upgrade, what changes, requalification, downtime, start with], rows (the
   last cell {t, link}). parts (optional): one entry per row naming the stage(s) it changes, space-separated (pre,
   gen, tank, loop, uv, toc, panel); a row without parts leaves the whole plant as existing.
   Phones: no tabs; every upgrade is a card with its terms and its stage drawn small. */
var rpN=0;
LOOKS['retrofit-plant']=function(b,H){var C=b.cols||[],R=b.rows||[],P=b.parts||[],K='aq-retrofit-plant',pl=vpPlant(),S=pl.S,id='rp'+(++rpN);
 var order=pl.order.filter(function(x){var s=String(x);return s.indexOf('data-iso-id="report"')<0});
 var allP=[];Object.keys(S).forEach(function(k){if(k!=='report')allP=allP.concat(S[k].pts)});
 var bx=isoBounds(allP,26),VW=1080,sc=VW/bx.w,VH=Math.round(bx.h*sc+16),org=[-bx.x,-bx.y+8/sc];
 var on0=String(P[0]||'').split(/\s+/);
 var drawing='<g transform="scale('+sc.toFixed(4)+') translate('+org[0].toFixed(1)+' '+org[1].toFixed(1)+')">'+order.join('').replace(/<g class="(aq\-iso__(?:part|pipe)[^"]*)"([^>]*?data-iso-(?:id|to)="([^"]+)")/g,function(m,c,rest,k){return on0.indexOf(k)>=0?'<g class="'+c+' is-lit"'+rest:m})+'</g>';
 var sheet=isoSheet(VW,VH,{grid:'iso',gridStep:22,title:false,m:0,band:8,cols:9,rows:3});
 var stg=function(i){return String(P[i]||'').split(/\s+/).filter(function(k){return S[k]})};
 var svg='<svg class="aq-iso aq-iso--navy '+K+'__svg is-retro" viewBox="0 0 '+VW+' '+VH+'" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" data-on="'+stg(0).join(' ')+'">'+sheet+drawing+'</svg>';
 var legend='<p class="'+K+'__legend" aria-hidden="true"><span class="'+K+'__sw '+K+'__sw--old"></span>Existing<span class="'+K+'__sw '+K+'__sw--new"></span>This upgrade</p>';
 var tabs='<div class="'+K+'__tabs" role="tablist" aria-label="'+e(C[0]||'Upgrade')+'">'+R.map(function(r,i){return '<button type="button" role="tab" class="'+K+'__tab" id="'+id+'-t'+i+'" aria-controls="'+id+'-p'+i+'" aria-selected="'+(i?'false':'true')+'" tabindex="'+(i?'-1':'0')+'" data-on="'+stg(i).join(' ')+'">'
  +'<span class="'+K+'__tn" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span><span class="'+K+'__tt">'+tcell(r[0])+'</span></button>'}).join('')+'</div>';
 var panels=R.map(function(r,i){var ps=stg(i),mini=ps.length&&S[ps[0]].mini.length?vpMini(S[ps[0]],'aq-iso--navy '+K+'__mini'):'';
  var terms=[1,2,3].filter(function(j){return r[j]!=null&&r[j]!==''}).map(function(j){return '<div class="'+K+'__term '+K+'__term--'+j+'"><dt>'+tx(C[j]||'')+'</dt><dd>'+tcell(r[j])+'</dd></div>'}).join('');
  var go=r[4]?'<p class="'+K+'__go"><span class="'+K+'__gk">'+tx(C[4]||'')+'</span>'+tcell(r[4])+'</p>':'';
  return '<div class="'+K+'__panel'+(i?' is-off':'')+'" role="tabpanel" id="'+id+'-p'+i+'" aria-labelledby="'+id+'-t'+i+'">'+(mini?'<span class="'+K+'__mfig" aria-hidden="true">'+mini+'</span>':'')
   +'<h3 class="'+K+'__pt"><span class="'+K+'__tn" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span>'+tcell(r[0])+'</h3><dl class="'+K+'__terms">'+terms+'</dl>'+go+'</div>'}).join('');
 return sec(H+'<div class="'+K+'"><div class="'+K+'__sheet">'+svg+legend+'</div><div class="'+K+'__pick">'+tabs+'<div class="'+K+'__panels">'+panels+'</div></div></div>','aq-band--navy '+K+'-sec')};
/* Tabs: pick an upgrade, light its stages; arrow keys move between tabs */
(function(){function lit(r,on){var svg=r.querySelector('.aq-retrofit-plant__svg');if(!svg)return;[].forEach.call(svg.querySelectorAll('.is-lit'),function(el){el.classList.remove('is-lit')});
  String(on||'').split(' ').forEach(function(k){if(k)[].forEach.call(svg.querySelectorAll('[data-iso-id="'+k+'"],[data-iso-to="'+k+'"]'),function(el){el.classList.add('is-lit')})})}
 function pick(t){var r=t.closest('.aq-retrofit-plant');[].forEach.call(r.querySelectorAll('.aq-retrofit-plant__tab'),function(x){var on=x===t;x.setAttribute('aria-selected',on?'true':'false');x.tabIndex=on?0:-1;
  var p=document.getElementById(x.getAttribute('aria-controls'));if(p)p.classList.toggle('is-off',!on)});lit(r,t.getAttribute('data-on'));var s=r.querySelector('.aq-retrofit-plant__svg');if(s)s.setAttribute('data-on',t.getAttribute('data-on')||'')}
 document.addEventListener('click',function(ev){var t=ev.target.closest&&ev.target.closest('.aq-retrofit-plant__tab');if(t)pick(t)});
 document.addEventListener('keydown',function(ev){var t=ev.target.closest&&ev.target.closest('.aq-retrofit-plant__tab');if(!t||['ArrowDown','ArrowUp','ArrowRight','ArrowLeft','Home','End'].indexOf(ev.key)<0)return;
  var a=[].slice.call(t.parentNode.querySelectorAll('.aq-retrofit-plant__tab')),i=a.indexOf(t),n=ev.key==='Home'?0:ev.key==='End'?a.length-1:(i+(/Down|Right/.test(ev.key)?1:a.length-1))%a.length;ev.preventDefault();a[n].focus();pick(a[n])});
})();
