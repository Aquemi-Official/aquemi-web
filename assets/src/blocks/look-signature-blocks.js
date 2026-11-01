/* Look "signature-blocks" -> SignatureBlocks (design-system/components/SignatureBlocks): a roles table (who writes,
   who reviews) set as the signature blocks at the foot of each document. On a navy ground every document or activity
   is a block: its index and name over two fields, the first column's role ("Written or done by") and the second's
   ("Reviewed by"), each a ruled box with the party typed in and a signature line under it. Who is in a field shows in
   its style: Aquemi in a flow-ruled field, your side in a limestone-ruled box, both teams split. A key strip names
   the three. Blocks run in a two-column grid; the fold (fold, fold_noun) applies on phones only.
   Fields, as the roles table: cols [document, written, reviewed], rows [[document, written, reviewed]] (strings or
   {t, link}), fold, fold_noun, key (optional [Aquemi, your side, both] labels; default "Aquemi", "Your team", "Shared").
   Party: a cell starting "Aquemi" is ours; "You"/"Your" is yours; "Both" or "You, or Aquemi" is shared. */
function sbParty(c){var t=String(c&&typeof c==='object'?c.t:c||'');return /^(both|you, or aquemi)/i.test(t)?'both':/^aquemi/i.test(t)?'us':/^you/i.test(t)?'you':'both'}
LOOKS['signature-blocks']=function(b,H){var C=b.cols||[],R=b.rows||[],K=b.key||['Aquemi','Your team','Shared'];
 function field(lab,c){var p=sbParty(c);return '<div class="aq-signature-blocks__f is-'+p+'"><span class="aq-signature-blocks__lab">'+tx(lab||'')+'</span>'
  +'<span class="aq-signature-blocks__v">'+tcell(c)+'</span><span class="aq-signature-blocks__line" aria-hidden="true"></span></div>'}
 var blocks=R.map(function(r,i){return fli('<li class="aq-signature-blocks__b">'
  +'<div class="aq-signature-blocks__head"><span class="aq-signature-blocks__n" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span><h3 class="aq-signature-blocks__t">'+tcell(r[0])+'</h3></div>'
  +'<div class="aq-signature-blocks__fields">'+field(C[1],r[1])+field(C[2],r[2])+'</div></li>',b,i)}).join('');
 var key='<p class="aq-signature-blocks__key"><span class="is-us">'+tx(K[0])+'</span><span class="is-you">'+tx(K[1])+'</span><span class="is-both">'+tx(K[2])+'</span></p>';
 return sec(H+'<div class="aq-signature-blocks">'+key+wFold(b,R.length,'<ol class="aq-signature-blocks__list">'+blocks+'</ol>',b.fold_noun||'documents')+'</div>','aq-signature-blocks-sec')
  .replace(/^<section class="([^"]*)"/,'<section class="$1" data-theme="dark"')};
