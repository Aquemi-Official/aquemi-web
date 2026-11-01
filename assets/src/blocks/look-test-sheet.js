/* Look "test-sheet" -> TestSheet (design-system/components/TestSheet): ordered steps set as the protocol's own test
   sheet, lying on a limestone table. The heading sits on the table; the sheet is a paper form with a header strip
   (mono column names), one ruled row per step (step number set large, the step, what happens) and a sign-off cell at
   the right. A plain step's cell is a tick box; a step with hold ("<who signs>") is a hold point: a signature line
   with a hand-drawn signature, "Signed by <who>", and a HOLD stamp struck across the cell. The last step is torn off
   along a perforation: it happens elsewhere (the site). A title block closes the sheet.
   Fields (a steps block): h, intro, items [{t, d, hold, link}], cols (optional header strip: [step, action, sign-off];
   omitted, no strip), hold_label (the hold cell's label, default "Hold point"), tear (true: the last step sits below a
   perforation; default true when there are three or more steps).
   Phones: the sheet fills the width; each row's sign-off cell drops under its text. */
var TS_SIG=['M4 30C14 8 22 6 20 22S12 40 26 24 38 4 44 18 50 34 58 20 66 10 72 22 80 30 92 14',
 'M4 26C10 10 18 8 22 20S26 36 34 22 44 6 52 20 60 32 70 16 84 26 96 12',
 'M6 28C16 6 26 10 22 24S30 34 40 18 48 8 56 22 66 30 78 14 88 24'];
LOOKS['test-sheet']=function(b,H){var I=b.items||[],n=I.length,C=b.cols||[],tear=b.tear!=null?!!b.tear:n>=3,hk=b.hold_label||'Hold point';
 function who(s){s=String(s);return tx(/^[A-Z][a-z]/.test(s)?s.charAt(0).toLowerCase()+s.slice(1):s)}
 var rows=I.map(function(it,i){var nm=it.link&&wp(it.link)?'<a href="#'+e(it.link)+'" data-wp="'+e(it.link)+'">'+tx(it.t)+'</a>':tx(it.t);
  var sign=it.hold?'<div class="aq-test-sheet__hold"><span class="aq-test-sheet__hk">'+tx(hk)+'</span>'
    +'<svg class="aq-test-sheet__sig" viewBox="0 0 100 40" aria-hidden="true" focusable="false"><path d="'+TS_SIG[i%TS_SIG.length]+'"/></svg>'
    +'<span class="aq-test-sheet__who">Signed by '+who(it.hold)+'</span><span class="aq-test-sheet__stamp" aria-hidden="true">Hold</span></div>'
   :'<span class="aq-test-sheet__box" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span>';
  return '<li class="aq-test-sheet__row'+(it.hold?' is-hold':'')+(tear&&i===n-1?' is-torn':'')+'">'
   +'<span class="aq-test-sheet__n" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span>'
   +'<div class="aq-test-sheet__body"><h3 class="aq-test-sheet__t">'+nm+'</h3>'+(it.d?'<p class="aq-test-sheet__d">'+tx(it.d)+'</p>':'')+'</div>'
   +'<div class="aq-test-sheet__sign">'+sign+'</div></li>'}).join('');
 var strip=C.length?'<div class="aq-test-sheet__strip" aria-hidden="true">'+C.map(function(c){return '<span>'+tx(c)+'</span>'}).join('')+'</div>':'';
 var foot='<div class="aq-test-sheet__foot" aria-hidden="true"><span>Aquemi</span><span>'+tx(b.nav||'')+'</span><span>'+e(wCount(b,n,'steps'))+'</span></div>';
 return sec('<div class="aq-test-sheet" style="--n:'+n+'">'+H+'<div class="aq-test-sheet__paper">'+strip
  +'<ol class="aq-test-sheet__rows">'+rows+'</ol>'+foot+'</div></div>','aq-band--limestone aq-test-sheet-sec')};
