/* Look "strike-gaps" -> StrikeGaps (design-system/components/StrikeGaps): gaps in older controls set as a before and
   after in large light type. Each row reads left to right: the gap as it stands today, struck through (the way a
   drawing revision strikes what it replaces); in the middle the requirement it misses, in mono, on
   an arrow; on the right what the upgrade does, at full strength. The column names head the three columns.
   Fields as a failures table: h, intro, cols [gap, requirement, what the upgrade does], rows, fold, fold_noun.
   Phones: each row stacks: struck gap, the requirement on a short down arrow, the fix. */
LOOKS['strike-gaps']=function(b,H){var C=b.cols||[],R=b.rows||[],K='aq-strike-gaps';
 var head='<div class="'+K+'__heads" aria-hidden="true"><span>'+tx(C[0]||'')+'</span><span>'+tx(C[1]||'')+'</span><span>'+tx(C[2]||'')+'</span></div>';
 var rows=R.map(function(r,i){return fli('<li class="'+K+'__row">'+idx(i)
  +'<p class="'+K+'__was"><span class="'+K+'__k">'+tx(C[0]||'')+': </span><span class="'+K+'__wt">'+tcell(r[0])+'</span></p>'
  +'<p class="'+K+'__req"><span class="'+K+'__k">'+tx(C[1]||'')+': </span><span class="'+K+'__rt">'+tcell(r[1])+'</span><span class="'+K+'__arrow" aria-hidden="true"><span class="'+K+'__shaft"></span><span class="'+K+'__tip"></span></span></p>'
  +'<p class="'+K+'__now"><span class="'+K+'__k">'+tx(C[2]||'')+': </span>'+tcell(r[2])+'</p></li>',b,i)}).join('');
 return sec(H+wFold(b,R.length,'<div class="'+K+'">'+head+'<ol class="'+K+'__rows" role="list">'+rows+'</ol></div>',b.fold_noun||'gaps'),K+'-sec')};
