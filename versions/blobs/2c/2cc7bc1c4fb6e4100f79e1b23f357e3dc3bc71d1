/* Block "steps" -> ProcessSteps: a real sequence as rows of the shared list grammar (index, step name, what happens).
   Hold points: an item may carry hold: "<who signs>" ("Your quality unit"). The block then draws as a process flow in a
   Plate: numbered stations joined by pipe runs, left to right in rows that return under each other, a closed valve on
   the run into every hold station, and hold stations on surface in a hairline frame with a "Hold" line naming who
   signs and a signature line. Phones: one vertical pipe with the stations along it. Every step's name and text stay real text.
   No icons: the number is the information in a sequence.
   Station link: an item's link (a page id or page#anchor) makes its station's title the link, in the shared link grammar
   (the title ending in a flow arrow, flow on hover): "Factory and site acceptance tests (FAT and SAT) →" to svc-fat-sat.
   Hold stations and plain stations alike; the station frame, hold line and pipes stay drawing. A missing page leaves
   the title plain. */
function stepTitle(it){var t=tx(it.t);return it.link&&wp(it.link)?'<a class="aq-steps__go" href="#'+e(it.link)+'" data-wp="'+e(it.link)+'">'+t+'</a>':t}
function stepWho(who){who=String(who);return tx(/^[A-Z][a-z]/.test(who)?who.charAt(0).toLowerCase()+who.slice(1):who)}
var STEP_VALVE='<svg class="aq-steps__valve" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6 L21 18 L21 6 L3 18 Z"/><path d="M12 12 V3 M7 3 H17"/></svg>';
/* Stations per row: up to 4 in one row; longer flows split into two even rows (6 -> 3+3, 7 -> 4+3, 8 -> 4+4). */
function stepFlow(b,H){var I=b.items||[],n=I.length,cols=n<=4?n:Math.ceil(n/2),o='';
 I.forEach(function(it,i){var c=i%cols,last=i===n-1,eol=!last&&c===cols-1,bol=i>0&&c===0,next=I[i+1];
  o+='<li class="aq-steps__st'+(it.hold?' is-hold':'')+(eol?' is-eol':'')+(bol?' is-bol':'')+'">'
   +'<span class="aq-steps__n" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span>'
   +'<div class="aq-steps__body"><h3 class="aq-steps__t">'+stepTitle(it)+'</h3>'+(it.d?'<p class="aq-steps__d">'+tx(it.d)+'</p>':'')
   +(it.hold?'<p class="aq-steps__hold"><span class="aq-steps__stamp"><span class="aq-steps__stamp-k">Hold</span> <span class="aq-steps__who">Signed by '+stepWho(it.hold)+'</span></span>'
     +'<span class="aq-steps__sign" aria-hidden="true">Sign:</span></p>':'')+'</div>'
   +(last?'':'<span class="aq-steps__run'+(next&&next.hold?' is-valve':'')+'" aria-hidden="true">'+(next&&next.hold?STEP_VALVE:'')+'</span>')
   +(eol?'<span class="aq-steps__turn" aria-hidden="true"></span>':'')+(bol?'<span class="aq-steps__turn aq-steps__turn--in" aria-hidden="true"></span>':'')
   +'</li>'+(eol?'<li class="aq-steps__ret" aria-hidden="true"><span class="aq-steps__ret-arrow"></span>'+(next&&next.hold?STEP_VALVE:'')+'</li>':'')});
 return sec(H+wPlate('<ol class="aq-steps aq-steps--hold" style="--cols:'+cols+'">'+o+'</ol>',{block:['Aquemi',b.nav||'Sequence']}))}
/* Row (as: "row"): a short sequence read across, as the site first drew "How we work": a rule on top, then one column
   per step with its flow number, name and one sentence. Columns wrap to fit; phones read two, then one, across. */
function stepRow(b,H){var I=b.items||[];
 return sec(H+'<ol class="aq-steps-row">'+I.map(function(it,i){return '<li><span class="aq-steps-row__n" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span>'
  +'<h3 class="aq-steps-row__t">'+tx(it.t)+'</h3>'+(it.d?'<p class="aq-steps-row__d">'+tx(it.d)+'</p>':'')+'</li>'}).join('')+'</ol>')}
/* Plain rows: an item's link (a page id or page#anchor) makes its row a link, the shared row grammar's (wRow): the
   whole row is the link, its title ends in a flow arrow, hover turns it flow ("Factory and site acceptance tests (FAT
   and SAT) →" to svc-fat-sat). In the hold flow the station's title carries it (stepTitle); the row shape draws no link,
   an item's link is ignored there. */
BLOCKS['steps']=function(b,H){var I=b.items||[];
  if(b.as==='row')return stepRow(b,H);
  if(I.some(function(it){return it.hold}))return stepFlow(b,H);
  return sec(H+wFold(b,I.length,'<ol class="aq-rows aq-steps">'+I.map(function(it,i){
    return fli(wRow(i,it.t,it.d,it.link),b,i)}).join('')+'</ol>',b.fold_noun||'steps'));};
