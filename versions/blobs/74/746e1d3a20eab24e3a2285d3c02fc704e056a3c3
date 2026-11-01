/* Look "binder-spines" -> BinderSpines (design-system/components/BinderSpines): an evidence table (as: "evidence":
   who, what they read, where we answer it) as the QA shelf, one ring binder per inspector standing on it. Each spine
   carries the inspector on its paper label, the clause they cite set large in Geist Mono, what they read under it,
   the finger hole, and at the foot the page where we answer it. Binders alternate navy and limestone.
   Fields, as the evidence table: cols, rows [who, read, {t, link, intent}], fold, fold_noun (phones only).
   Added: spines [{code, read}] (one per row, optional): the clause shown large, and the reading without it; a row
   without one shows its whole reading. Concept: 51-concept-turnover-binder and compliance.2.v2 (tactile records). */
(function(){
LOOKS['binder-spines']=function(b,H){var C=b.cols||[],R=b.rows||[],S=b.spines||[],n=R.length;
 var books=R.map(function(r,i){var s=S[i]||{},go=r[2],lk=go&&typeof go==='object'&&go.link&&wp(go.link);
  var foot=lk?'<a class="aq-binder-spines__go" href="#'+e(go.link)+'" data-wp="'+e(go.link)+'"'+(go.intent?' data-intent="'+e(go.intent)+'"':'')+'><span class="aq-binder-spines__k">'+tx(C[2]||'')+'</span><span class="aq-binder-spines__to">'+tx(go.t)+'</span></a>'
   :'<p class="aq-binder-spines__go"><span class="aq-binder-spines__k">'+tx(C[2]||'')+'</span><span class="aq-binder-spines__to">'+tcell(go)+'</span></p>';
  return fli('<li class="aq-binder-spines__book'+(i%2?' is-lime':'')+'" style="--h:'+[100,93,98,90,96,94][i%6]+'%">'
   +'<span class="aq-binder-spines__cap" aria-hidden="true"></span>'
   +'<div class="aq-binder-spines__label"><span class="aq-binder-spines__k">'+tx(C[0]||'')+'</span><h3 class="aq-binder-spines__who">'+tx(r[0])+'</h3></div>'
   +'<div class="aq-binder-spines__read">'+(s.code?'<p class="aq-binder-spines__code">'+tx(s.code)+'</p>':'')+'<p class="aq-binder-spines__d">'+tx(s.read||r[1])+'</p></div>'
   +'<span class="aq-binder-spines__hole" aria-hidden="true"></span>'+foot+'<span class="aq-binder-spines__cap" aria-hidden="true"></span></li>',b,i)}).join('');
 var shelf='<div class="aq-binder-spines"><ol class="aq-binder-spines__row" style="--n:'+n+'">'+books+'</ol><span class="aq-binder-spines__shelf" aria-hidden="true"></span></div>';
 return sec(H+wFold(b,n,shelf,b.fold_noun),'aq-binder-spines-sec')};
})();
