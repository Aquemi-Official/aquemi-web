/* Block "steps" -> ProcessSteps: a real sequence as rows of the shared list grammar (index, step name, what happens).
   Hold points: an item may carry hold: "<who signs>" ("Your quality unit"). The block then draws as a process flow on a
   cream drawing plate: numbered stations joined by pipe runs, left to right in rows that return under each other, a
   closed valve on the run into every hold station, and hold stations double-framed with a tilted HOLD stamp naming who
   signs and a SIGN line. Phones: one vertical pipe with the stations along it. Every step's name and text stay real text.
   Icons: item icon (Icon component) sits beside the number in a plain list; a flow keeps plain numbers. */
function stepWho(who){who=String(who);return tx(/^[A-Z][a-z]/.test(who)?who.charAt(0).toLowerCase()+who.slice(1):who)}
var STEP_VALVE='<svg class="aq-steps__valve" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6 L21 18 L21 6 L3 18 Z"/><path d="M12 12 V3 M7 3 H17"/></svg>';
/* Stations per row: up to 4 in one row; longer flows split into two even rows (6 -> 3+3, 7 -> 4+3, 8 -> 4+4). */
function stepFlow(b,H){var I=b.items||[],n=I.length,cols=n<=4?n:Math.ceil(n/2),o='';
 I.forEach(function(it,i){var c=i%cols,last=i===n-1,eol=!last&&c===cols-1,bol=i>0&&c===0,next=I[i+1];
  o+='<li class="aq-steps__st'+(it.hold?' is-hold':'')+(eol?' is-eol':'')+(bol?' is-bol':'')+'">'
   +'<span class="aq-steps__n" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span>'
   +'<div class="aq-steps__body"><h3 class="aq-steps__t">'+tx(it.t)+'</h3>'+(it.d?'<p class="aq-steps__d">'+tx(it.d)+'</p>':'')
   +(it.hold?'<p class="aq-steps__hold"><span class="aq-steps__stamp"><span class="aq-steps__stamp-k">Hold</span> <span class="aq-steps__who">Signed by '+stepWho(it.hold)+'</span></span>'
     +'<span class="aq-steps__sign" aria-hidden="true">Sign:</span></p>':'')+'</div>'
   +(last?'':'<span class="aq-steps__run'+(next&&next.hold?' is-valve':'')+'" aria-hidden="true">'+(next&&next.hold?STEP_VALVE:'')+'</span>')
   +(eol?'<span class="aq-steps__turn" aria-hidden="true"></span>':'')+(bol?'<span class="aq-steps__turn aq-steps__turn--in" aria-hidden="true"></span>':'')
   +'</li>'+(eol?'<li class="aq-steps__ret" aria-hidden="true"><span class="aq-steps__ret-arrow"></span>'+(next&&next.hold?STEP_VALVE:'')+'</li>':'')});
 return sec(H+wPlate('<ol class="aq-steps aq-steps--hold" style="--cols:'+cols+'">'+o+'</ol>',{light:true,block:['Aquemi',b.nav||'Sequence']}))}
/* Stage strip (as: "stages", steps without holds, every item with an icon): stations in one row of up to six (longer lists
   wrap in rows of four), each an icon in a framed square, a big mono number, the name in uppercase mono and its text,
   joined by the hold flow's pipe runs. Phones: the hold flow's vertical pipe, the framed icon beside each number. Keeps fold. */
function stepStages(b,H,IC){var I=b.items||[],n=I.length,cols=n<=6?n:4;
 return sec(H+wFold(b,n,'<ol class="aq-steps aq-steps--stages" style="--cols:'+cols+'">'+I.map(function(it,i){var eol=i<n-1&&i%cols===cols-1;
  return fli('<li class="aq-steps__st'+(eol?' is-eol':'')+'"><span class="aq-steps__frame" aria-hidden="true">'+wIcon(IC[i],'aq-icon--ink')+'</span>'
   +'<span class="aq-steps__n" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span>'
   +'<div class="aq-steps__body"><h3 class="aq-steps__t">'+tx(it.t)+'</h3>'+(it.d?'<p class="aq-steps__d">'+tx(it.d)+'</p>':'')+'</div>'
   +(i<n-1?'<span class="aq-steps__run" aria-hidden="true"></span>':'')+'</li>',b,i)}).join('')+'</ol>',b.fold_noun||'steps'))}
BLOCKS['steps']=function(b,H){var I=b.items||[];if(I.some(function(it){return it.hold}))return stepFlow(b,H);var IC=wIcons(b);
  if(b.as==='stages'&&I.length&&IC.every(Boolean))return stepStages(b,H,IC);
  return sec(H+wFold(b,I.length,'<ol class="aq-rows aq-steps">'+I.map(function(it,i){
    return fli(wRow(i,it.t,it.d,0,0,0,IC[i],1),b,i)}).join('')+'</ol>',b.fold_noun||'steps'));};
