/* Block "steps" -> ProcessSteps: a real sequence as rows of the shared list grammar (index, step name, what happens).
   Hold points: an item may carry hold: "<who signs>" ("Your quality unit"). That step gets a stamped hold-point card with
   a signature line, and the list becomes a routed line through the index column with a closed valve at each hold.
   Icons: item icon (Icon component) sits beside the number; a list with hold points keeps plain numbers (the route owns that column). */
function stepHold(who){who=String(who);return '<span class="aq-steps__hold"><span class="aq-steps__stamp">Hold point</span>'
  +'<span class="aq-steps__who">Signed by '+tx(/^[A-Z][a-z]/.test(who)?who.charAt(0).toLowerCase()+who.slice(1):who)+'</span>'
  +'<span class="aq-steps__sign" aria-hidden="true">Sign</span></span>'}
var STEP_VALVE='<svg class="aq-steps__valve" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 1 L12 15 L4 15 L12 1 Z"/><path d="M8 8 H15 M15 4 V12"/></svg>';
BLOCKS['steps']=function(b,H){var I=b.items||[],hold=I.some(function(it){return it.hold}),IC=hold?[]:wIcons(b);
  return sec(H+wFold(b,I.length,'<ol class="aq-rows aq-steps'+(hold?' aq-steps--hold':'')+'">'+I.map(function(it,i){
    var r=wRow(i,it.t,it.d,0,0,0,IC[i],1);
    if(it.hold)r=r.replace(/^<li>/,'<li class="is-hold">').replace(/<\/div><\/li>$/,'<span class="aq-steps__gate">'+STEP_VALVE+'</span>'+stepHold(it.hold)+'</div></li>');
    return fli(r,b,i)}).join('')+'</ol>',b.fold_noun||'steps'));};
