/* Table as "roles" -> RoleMatrix: who writes, does or approves each document, like the signature blocks on a controlled
   document. Fields as a table: cols [document, then one column per role], rows. Each role cell is a stamp labelled
   with its column name; a cell that starts with "Aquemi" is ours (tinted flow), one that starts with "You" or "Your" is
   yours (outlined), anything else is shared (dashed). On a drawing plate, under a key strip. Each document is a framed
   signature block: desktop, index and document in the first cell, then one ruled cell per role (label above stamp);
   phones, the document as the block's header bar and the role cells side by side under it.
   Plate caption: "Aquemi · <nav> · N documents" by default; caption_noun names the rows when they are not all documents
   ("6 requests": a row may be a consultant), "caption_noun": "" drops the count (the router's rule, wCount in core.js).
   The fold button names them the same way: fold_noun, else caption_noun, else "documents". */
function roleParty(c){var s=String(c&&c.t||c||'');return /^aquemi/i.test(s)?'ours':/^(you|your)\b/i.test(s)?'yours':'shared'}
TABLE_AS.roles=function(b,H){var C=b.cols||[],R=b.rows||[];
 return sec(H+wPlate('<div class="aq-roles"><p class="aq-roles__key" aria-hidden="true"><span class="aq-roles__keyk">Key</span><span class="aq-roles__stamp is-ours">Aquemi</span><span class="aq-roles__stamp is-yours">Your team</span><span class="aq-roles__stamp is-shared">Shared</span></p>'
  +wFold(b,R.length,'<ol class="aq-roles__rows">'+R.map(function(r,i){return fli('<li class="aq-roles__row">',b,i)+idx(i)+'<h3 class="aq-roles__t">'+tcell(r[0])+'</h3><div class="aq-roles__stamps">'
   +r.slice(1).map(function(c,j){return '<div class="aq-roles__cell"><p class="aq-roles__k">'+tx(C[j+1]||'')+'</p><p class="aq-roles__stamp is-'+roleParty(c)+'">'+tcell(c)+'</p></div>'}).join('')+'</div></li>'}).join('')+'</ol>',b.fold_noun||b.caption_noun||'documents')+'</div>',{block:['Aquemi',b.nav||'Roles',wCount(b,R.length,'documents')]}));};
