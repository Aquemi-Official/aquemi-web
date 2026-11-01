/* Look "redline-sheet" -> RedlineSheet (design-system/components/RedlineSheet): qualification failures caught on paper.
   One limestone drawing sheet (border, zone numbers, title block) carries a column per failure, each a design-review
   markup: a revision triangle and what fails at qualification on top, a small drawing of the design with the mistake
   ringed by a revision cloud (fail ink, with the design mistake struck through under it), and the correction drawn into
   the same figure in flow with what we design in as the markup note.
   Fields, as a table: cols [fails at qualification, design mistake, what we design in], rows (cells strings or {t, link}).
   Optional: figs (one per row: "peak", "deadleg", "setpoint" or "sheet"; default from the row's words), block (title
   block cells; default ["Aquemi", nav]). Phones: the sheet holds the markups one under the other. */
LOOKS['redline-sheet']=(function(){
 function cloud(cx,cy,rx,ry,n){var d='',p=[];for(var i=0;i<=n;i++){var t=-Math.PI/2+i*2*Math.PI/n;p.push([cx+rx*Math.cos(t),cy+ry*Math.sin(t)])}
  d='M'+p[0][0].toFixed(1)+' '+p[0][1].toFixed(1);for(var j=1;j<p.length;j++){var a=p[j-1],c=p[j],ch=Math.hypot(c[0]-a[0],c[1]-a[1]);d+='A'+(ch*0.62).toFixed(1)+' '+(ch*0.62).toFixed(1)+' 0 0 1 '+c[0].toFixed(1)+' '+c[1].toFixed(1)}return d}
 function P(d,c){return '<path class="aq-redline-sheet'+'__'+c+'" d="'+d+'"/>'}
 function T(x,y,s,c,a){return '<text class="aq-redline-sheet__lbl'+(c?' aq-redline-sheet'+'__lbl--'+c:'')+'" x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+e(s)+'</text>'}
 function rev(x,y,n){return '<g class="aq-redline-sheet__tri">'+P('M'+x+' '+(y-11)+'L'+(x+11)+' '+(y+8)+'L'+(x-11)+' '+(y+8)+'Z','cl')+T(x,y+5,n,'fail','middle')+'</g>'}
 var FIG={
  /* demand over a day: the average line the loop was sized on, the peaks clouded, the peak line drawn in */
  peak:function(n){var v=[2,2,2,2,3,6,9,7,5,4,4,5,6,5,4,4,5,7,9,10,6,4,3,2],o='';
   v.forEach(function(h,i){o+='<rect class="aq-redline-sheet__bar" x="'+(28+i*11)+'" y="'+(160-h*12)+'" width="7" height="'+(h*12)+'"/>'});
   return P('M20 160H306M20 22V160','ln')+o+P('M20 104H306','avg')+T(306,98,'avg','','end')
    +'<g class="aq-redline-sheet__mark">'+P(cloud(238,66,40,38,11),'cl')+rev(286,26,n)+'</g>'
    +'<g class="aq-redline-sheet__fixg">'+P('M20 40H306','fixln')+T(24,34,'peak','flow')+'</g>'},
  /* a branch off the loop, drawn without its length: the length clouded, then dimensioned */
  deadleg:function(n){
   return P('M10 58H310M10 74H142M158 74H310','ln')+P('M142 74V130M158 74V130','ln')
    +P('M140 130H160L150 142ZM140 154H160L150 142Z','ln')+P('M150 142H174M174 134V150','thin')+P('M44 66H74M68 61L74 66L68 71','flw')
    +'<g class="aq-redline-sheet__mark">'+P(cloud(150,104,42,40,11),'cl')+T(70,118,'L = ?','fail','middle')+rev(206,62,n)+'</g>'
    +'<g class="aq-redline-sheet__fixg">'+P('M226 74V142M220 74H232M220 142H232','fixln')+T(234,112,'L','flow')+P('M142 172H158M142 166V178M158 166V178','fixln')+T(166,176,'D','flow')+'</g>'},
  /* the specification: a sentence with no setpoint, clouded, then the setpoint and the divert valve written in */
  setpoint:function(n){var o='',L=[[34,120],[50,138],[66,96],[98,132],[114,110],[130,140],[146,84]];
   L.forEach(function(l){o+=P('M32 '+l[0]+'H'+(32+l[1]),'txt')});
   return '<rect class="aq-redline-sheet__paper" x="20" y="16" width="176" height="152"/>'+o+P('M32 82H88','txt')+P('M94 82H170','gap')
    +P('M206 92H240M262 92H300M251 70V40M251 114V146','ln')+P('M240 82L262 102V82L240 102Z','ln')+P('M251 92V70','thin')+P('M241 70H261','thin')+P('M240 146H262L251 158Z','thin')+T(251,176,'drain','','middle')
    +'<g class="aq-redline-sheet__mark">'+P(cloud(132,82,52,20,10),'cl')+T(70,74,'?','fail','middle')+rev(186,42,n)+'</g>'
    +'<g class="aq-redline-sheet__fixg">'+P('M94 82H170','fixln')+T(132,100,'SP','flow','middle')+P('M251 114V146','fixln')+'</g>'},
  sheet:function(n){var o='';for(var i=0;i<7;i++)o+=P('M40 '+(34+i*18)+'H'+(240-(i*23)%90),'txt');
   return '<rect class="aq-redline-sheet__paper" x="24" y="16" width="272" height="152"/>'+o+'<g class="aq-redline-sheet__mark">'+P(cloud(160,88,64,24,12),'cl')+rev(240,50,n)+'</g>'}
 };
 function pick(r){var s=r.map(function(c){return String(c&&typeof c==='object'?c.t:c||'')}).join(' ');
  return /peak|average|turbulent|demand/i.test(s)?'peak':/dead leg|branch/i.test(s)?'deadleg':/setpoint|divert|drain|interlock/i.test(s)?'setpoint':'sheet'}
 return function(b,H){var C=b.cols||[],R=b.rows||[],F=b.figs||[],blk=(b.block||['Aquemi',b.nav||'']).filter(Boolean);
  var k=function(i,c){return '<p class="aq-redline-sheet__k'+(c?' aq-redline-sheet__k--'+c:'')+'">'+tx(C[i]||'')+'</p>'};
  var zones='<div class="aq-redline-sheet__zones" aria-hidden="true">'+[1,2,3,4,5,6].map(function(z){return '<span>'+z+'</span>'}).join('')+'</div>';
  var list='<ol class="aq-redline-sheet__list" role="list">'+R.map(function(r,i){var f=FIG[F[i]]?F[i]:pick(r),n=String(i+1);
   return '<li class="aq-redline-sheet__item" style="--i:'+i+'">'
    +'<div class="aq-redline-sheet__head"><span class="aq-redline-sheet__rev" aria-hidden="true">'+n+'</span>'+k(0,'fail')+'<h3 class="aq-redline-sheet__fail">'+tcell(r[0])+'</h3></div>'
    +'<figure class="aq-redline-sheet__fig" aria-hidden="true"><svg viewBox="0 0 320 190" focusable="false">'+FIG[f](n)+'</svg></figure>'
    +(r[1]!=null?'<div class="aq-redline-sheet__err">'+k(1)+'<p class="aq-redline-sheet__mistake">'+tcell(r[1])+'</p></div>':'')
    +(r[2]!=null?'<div class="aq-redline-sheet__fix">'+k(2,'flow')+'<p class="aq-redline-sheet__note">'+tcell(r[2])+'</p></div>':'')
    +'</li>'}).join('')+'</ol>';
  var tb=blk.length?'<div class="aq-redline-sheet__block" aria-hidden="true">'+blk.map(function(c){return '<span>'+e(c)+'</span>'}).join('')+'<span>'+R.length+' markups</span></div>':'';
  return sec(H+'<div class="aq-redline-sheet" data-theme="light">'+zones+list+tb+'</div>','aq-redline-sheet-sec')}
})();
