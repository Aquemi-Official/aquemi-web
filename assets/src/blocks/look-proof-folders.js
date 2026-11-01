/* Look "proof-folders" -> ProofFolders (design-system/components/ProofFolders): an evidence table as a drawer of manila
   folders, one per standard, stacked so each tab shows over the folder in front of it. The standard is set large on
   the ground beside its folder; inside, what we design to is typed on a slip, the proof is a fan of clipped sheets
   (one per ";" item) struck with a rubber stamp of the standard's code, and where we show it is the folder's navy
   index label (the row's link).
   Fields, as a table: cols [standard, what we design to, proof, where we show it], rows (cells strings or {t, link}),
   fold, fold_noun. The code on the tab and the stamp is the standard cell up to its number ("USP <645>", "Ph. Eur.
   0008"), else its first word ("EMA"); the rest of the cell is the standard's title under it.
   Phones: each folder takes the full width, the standard on the folder, then slip, sheets and label stacked. */
function pfCode(s){s=String(s||'');var m=s.match(/^(.*?(?:<\d+>|\b\d[\d.]*))\s+(\S.*)$/);return m?[m[1],m[2]]:[s.split(/\s+/)[0],s.slice(s.split(/\s+/)[0].length).trim()]}
LOOKS['proof-folders']=function(b,H){var C=b.cols||[],R=b.rows||[];
 var k=function(i){return '<p class="aq-proof-folders__k">'+tx(C[i]||'')+'</p>'};
 var heads='<div class="aq-proof-folders__cols" aria-hidden="true">'+C.slice(0,4).map(function(c){return '<span>'+tx(c)+'</span>'}).join('')+'</div>';
 var list='<ol class="aq-proof-folders__list" role="list">'+R.map(function(r,i){
  var name=String(r[0]&&typeof r[0]==='object'?r[0].t:r[0]||''),c=pfCode(name),proof=String(r[2]&&typeof r[2]==='object'?r[2].t:r[2]||'');
  var sheets=proof.split(/\s*;\s*/).filter(Boolean).map(function(x,j){return '<li class="aq-proof-folders__sheet" style="--j:'+j+'">'+tx(x.charAt(0).toUpperCase()+x.slice(1))+'</li>'}).join('');
  var go=r[3]!=null?tcell(r[3]):'';
  return fli('<li class="aq-proof-folders__row" style="--i:'+i+'">',b,i)
   +idx(i)+'<div class="aq-proof-folders__std"><h3 class="aq-proof-folders__name"><span class="aq-proof-folders__code">'+tx(c[0])+'</span>'+(c[1]?' <span class="aq-proof-folders__title">'+tx(c[1])+'</span>':'')+'</h3></div>'
   +'<div class="aq-proof-folders__folder" data-theme="light">'
    +'<span class="aq-proof-folders__tab" aria-hidden="true">'+tx(c[0])+'</span>'
    +'<div class="aq-proof-folders__how">'+k(1)+'<p class="aq-proof-folders__slip">'+tcell(r[1])+'</p></div>'
    +'<div class="aq-proof-folders__proof">'+k(2)+'<span class="aq-proof-folders__clip" aria-hidden="true"></span><ul class="aq-proof-folders__sheets">'+sheets+'</ul>'
     +'<span class="aq-proof-folders__stamp" aria-hidden="true"><span>'+tx(c[0])+'</span><span>'+tx(C[2]||'')+'</span></span></div>'
    +(go?'<div class="aq-proof-folders__go">'+k(3)+'<p class="aq-proof-folders__label">'+go+'</p></div>':'')
   +'</div></li>'}).join('')+'</ol>';
 return sec(H+'<div class="aq-proof-folders">'+heads+wFold(b,R.length,list,b.fold_noun||'standards')+'</div>','aq-proof-folders-sec')};
