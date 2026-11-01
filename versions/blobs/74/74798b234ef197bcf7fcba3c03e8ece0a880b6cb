/* Look "marking-match" -> MarkingMatch (design-system/components/MarkingMatch): supplier control seen from the auditor's
   chair. Each supply is drawn as the thing that arrives (PP pipe and fittings with their print line, a gasket ring with
   its compound tag, PVC pipe with its socket, a membrane element with its serial plate, a vessel with its nameplate),
   its marking ringed in flow; across the row lies the paper it must match, what we require set as the certificate;
   between the two, a double-ended check line with how we verify it. Reading across is the receiving check itself.
   Fields, as a table: cols [supply, what we require, how we verify it], rows (cells strings or {t, link}),
   figs (optional, one per row: pipe, gasket, pvc, membrane, vessel; default from the supply's words), fold, fold_noun
   (phones only). Phones: the part, then the check line turned down, then the paper. */
LOOKS['marking-match']=(function(){
 function P(d,c){return '<path class="aq-marking-match'+'__'+(c||'ln')+'" d="'+d+'"/>'}
 var FIG={
  pipe:function(){return P('M18 34H140M18 58H140','ln')+'<ellipse class="aq-marking-match__ln" cx="18" cy="46" rx="5" ry="12"/>'+'<ellipse class="aq-marking-match__eq" cx="140" cy="46" rx="5" ry="12"/>'
   +P('M145 34H156A26 26 0 0 1 182 60V84M145 58H156A2 2 0 0 1 158 60V84','ln')+P('M154 30V62M152 84H188','thin')
   +P('M30 46H44M50 46H70M76 46H86','print')+'<rect class="aq-marking-match__mark" x="92" y="40" width="34" height="12"/>'+P('M96 46H122','print')},
  gasket:function(){return '<ellipse class="aq-marking-match__ln" cx="80" cy="50" rx="58" ry="22"/><ellipse class="aq-marking-match__ln" cx="80" cy="50" rx="38" ry="13"/>'
   +P('M22 50V56A58 22 0 0 0 138 56V50','ln')+P('M132 40L162 30','thin')+'<rect class="aq-marking-match__mark" x="160" y="20" width="30" height="20"/>'+P('M166 27H184M166 33H178','print')},
  pvc:function(){return P('M14 36H112M14 60H112','ln')+'<ellipse class="aq-marking-match__ln" cx="14" cy="48" rx="5" ry="12"/>'
   +P('M112 30H176M112 66H176M112 30V66M176 30V66','ln')+'<ellipse class="aq-marking-match__eq" cx="176" cy="48" rx="6" ry="18"/>'
   +P('M24 48H40M46 48H58','print')+'<rect class="aq-marking-match__mark" x="64" y="42" width="40" height="12"/>'+P('M68 48H100','print')},
  membrane:function(){return '<ellipse class="aq-marking-match__ln" cx="22" cy="46" rx="7" ry="22"/>'+P('M22 24H156M22 68H156','ln')+'<ellipse class="aq-marking-match__eq" cx="156" cy="46" rx="7" ry="22"/>'
   +'<ellipse class="aq-marking-match__thin" cx="156" cy="46" rx="2.5" ry="7"/>'+P('M48 24V68M134 24V68','thin')
   +'<rect class="aq-marking-match__mark" x="70" y="36" width="44" height="20"/>'+P('M76 43H106M76 49H96','print')},
  vessel:function(){return P('M40 22A22 10 0 0 1 84 22V70A22 10 0 0 1 40 70Z','eq')+P('M40 22A22 10 0 0 0 84 22','thin')+P('M46 78V88M78 78V88','ln')
   +'<rect class="aq-marking-match__mark" x="50" y="40" width="24" height="16"/>'+P('M54 46H70M54 51H64','print')
   +'<rect class="aq-marking-match__eq" x="118" y="14" width="58" height="74"/>'+P('M147 14V88','thin')+'<rect class="aq-marking-match__mark" x="124" y="22" width="18" height="10"/>'+P('M126 27H140','print')}};
 function fig(s){s=String(s||'');return /elastomer|gasket/i.test(s)?'gasket':/PVC|pretreat/i.test(s)?'pvc':/membrane|EDI|resin/i.test(s)?'membrane':/vessel|panel|tank/i.test(s)?'vessel':'pipe'}
 return function(b,H){var C=b.cols||[],R=b.rows||[],F=b.figs||[];
  var k=function(i){return C[i]?'<p class="aq-marking-match__k">'+tx(C[i])+'</p>':''};
  var cols='<div class="aq-marking-match__cols" aria-hidden="true"><span>'+tx(C[0]||'')+'</span><span>'+tx(C[2]||'')+'</span><span>'+tx(C[1]||'')+'</span></div>';
  var list=R.map(function(r,i){var name=String(r[0]&&typeof r[0]==='object'?r[0].t:r[0]||''),f=FIG[F[i]]?F[i]:fig(name);
   return fli('<li class="aq-marking-match__row" style="--i:'+i+'">',b,i)
    +'<div class="aq-marking-match__sup"><svg class="aq-marking-match__fig" viewBox="0 0 200 96" aria-hidden="true" focusable="false">'+FIG[f]()+'</svg>'
    +'<h3 class="aq-marking-match__name">'+idx(i)+' '+tcell(r[0])+'</h3></div>'
    +'<div class="aq-marking-match__req">'+k(1)+'<div class="aq-marking-match__paper" data-theme="light"><span class="aq-marking-match__seal" aria-hidden="true"></span><span class="aq-marking-match__head" aria-hidden="true"></span>'
    +'<p class="aq-marking-match__rq">'+tcell(r[1])+'</p></div></div>'
    +'<div class="aq-marking-match__ver">'+k(2)+'<span class="aq-marking-match__line" aria-hidden="true"><span class="aq-marking-match__ok"></span></span><p class="aq-marking-match__how">'+tcell(r[2])+'</p></div>'
    +'</li>'}).join('');
  return sec(H+'<div class="aq-marking-match">'+cols+wFold(b,R.length,'<ol class="aq-marking-match__list" role="list">'+list+'</ol>',b.fold_noun||'supplies')+'</div>','aq-marking-match-sec')}})();
