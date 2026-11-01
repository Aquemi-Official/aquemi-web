/* Look "check-ledger" -> CheckLedger (design-system/components/CheckLedger): a router table of checks a buyer can run
   (what you check, route, what it does not prove, time to arrange) set as a two-sided ledger on a navy band. One seam
   runs down the middle: on its left, what each check lets you see, set large and light; on its right, what it does
   not prove, quieter, behind an outlined marker; on the seam itself, the route as a square button with the time to
   arrange under it. The seam is the line between evidence and claim; each row's node sits on it.
   Fields (a table, as "router"): h, intro, cols [check, route, does not prove, time], rows (cells strings or
   {t, link, intent}). Phones: one card per check, the seam becomes a rule down the left edge. */
LOOKS['check-ledger']=function(b,H){var C=b.cols||[],R=b.rows||[],num=function(i){return (i<9?'0':'')+(i+1)};
 var k=function(j){return '<span class="aq-check-ledger__k">'+tx(C[j]||'')+'</span>'};
 var head='<div class="aq-check-ledger__head" aria-hidden="true"><span class="aq-check-ledger__hl"><i class="aq-check-ledger__sq is-fill"></i>'+tx(C[0]||'')+'</span>'
  +'<span class="aq-check-ledger__hm">'+tx(C[1]||'')+'</span><span class="aq-check-ledger__hr"><i class="aq-check-ledger__sq"></i>'+tx(C[2]||'')+'</span></div>';
 var rows=R.map(function(r,i){var go=r[1],gl=go&&typeof go==='object'&&go.link&&wp(go.link);
  var btn=gl?'<a class="aq-check-ledger__go" href="#'+e(go.link)+'" data-wp="'+e(go.link)+'"'+(go.intent?' data-intent="'+e(go.intent)+'"':'')+'><span>'+tx(go.t)+'</span></a>':'<span class="aq-check-ledger__go is-plain">'+tcell(go)+'</span>';
  return fli('<li class="aq-check-ledger__row" style="--i:'+i+'">',b,i)
   +'<div class="aq-check-ledger__l"><span class="aq-check-ledger__n" aria-hidden="true">'+num(i)+'</span>'+k(0)+'<h3 class="aq-check-ledger__t">'+tcell(r[0])+'</h3></div>'
   +'<div class="aq-check-ledger__m"><span class="aq-check-ledger__pipe" aria-hidden="true"><span class="aq-check-ledger__flow"></span></span><span class="aq-check-ledger__node" aria-hidden="true"></span>'+k(1)+btn+(r[3]?'<p class="aq-check-ledger__time">'+k(3)+tcell(r[3])+'</p>':'')+'</div>'
   +'<div class="aq-check-ledger__r">'+k(2)+'<p class="aq-check-ledger__no"><i class="aq-check-ledger__sq" aria-hidden="true"></i>'+tcell(r[2])+'</p></div></li>'}).join('');
 var body='<div class="aq-check-ledger">'+head+'<ol class="aq-check-ledger__rows" role="list">'+rows+'</ol></div>';
 return sec(H+wFold(b,R.length,body,b.fold_noun||'checks'),'aq-band--navy aq-check-ledger-sec')};
