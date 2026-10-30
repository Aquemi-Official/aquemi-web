/* Table as "roles" -> RoleMatrix: who writes, does or approves each document, like the signature blocks on a controlled
   document. Fields as a table: cols [document, then one column per role], rows. Each role cell is a stamp labelled
   with its column name; a cell that starts with "Aquemi" is ours (tinted flow), one that starts with "You" or "Your" is
   yours (outlined), anything else is shared (dashed). Desktop: index | document | stamps in a row. Phones: the stamps
   sit side by side under the document. */
function roleParty(c){var s=String(c&&c.t||c||'');return /^aquemi/i.test(s)?'ours':/^(you|your)\b/i.test(s)?'yours':'shared'}
TABLE_AS.roles=function(b,H){var C=b.cols||[],R=b.rows||[];
 return sec(H+'<div class="aq-roles"><p class="aq-roles__key" aria-hidden="true"><span class="aq-roles__stamp is-ours">Aquemi</span><span class="aq-roles__stamp is-yours">Your team</span><span class="aq-roles__stamp is-shared">Shared</span></p>'
  +'<ol class="aq-roles__rows">'+R.map(function(r,i){return fli('<li class="aq-roles__row">',b,i)+idx(i)+'<h3 class="aq-roles__t">'+tcell(r[0])+'</h3><div class="aq-roles__stamps">'
   +r.slice(1).map(function(c,j){return '<p class="aq-roles__stamp is-'+roleParty(c)+'"><span class="aq-roles__k">'+tx(C[j+1]||'')+'</span>'+tcell(c)+'</p>'}).join('')+'</div></li>'}).join('')+'</ol></div>');};
