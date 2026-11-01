/* Look "stage-stacks" -> StageStacks (design-system/components/StageStacks): what each project stage issues, drawn as the
   turnover package building up. On a navy ground the stages stand along one project axis, left to right; above each
   stage its documents are stacked as sheets of paper, one sheet per document, so each stack's height is what that stage
   adds to the file; under the axis, the stage's name with its clause, then your step and who approves it on a signature
   rule. The table's column names label the three bands once, in the margin left of the first stage. Pointing at a stage lifts its stack.
   Fields, as a table: cols [stage, your step and who approves, documents issued], rows [[stage, step, documents]]
   (cells strings or {t, link}); stage cells "Name · clause" set the clause under the name; documents are split at ";".
   fold, fold_noun: on phones only (desktop shows the whole axis). Phones: the axis runs down the left, each stage's
   sheets wrap beside it, then its step. */
function stDocs(c){return String(c&&typeof c==='object'?c.t:c||'').split(/\s*;\s*/).filter(Boolean)}
LOOKS['stage-stacks']=function(b,H){var C=b.cols||[],R=b.rows||[];
 var k=function(i,cls){return '<p class="aq-stage-stacks__k'+(cls?' '+cls:'')+'">'+tx(C[i]||'')+'</p>'};
 var list=R.map(function(r,i){var s=String(r[0]&&typeof r[0]==='object'?r[0].t:r[0]||''),p=s.split(/\s+·\s+/),num=(i<9?'0':'')+(i+1);
  var docs=stDocs(r[2]).map(function(d,j){return '<li class="aq-stage-stacks__doc" style="--j:'+j+'">'+tx(d)+'</li>'}).join('');
  return fli('<li class="aq-stage-stacks__stage" style="--i:'+i+'">',b,i)
   +'<div class="aq-stage-stacks__head">'+k(0,'is-ph')+'<h3 class="aq-stage-stacks__name"><span class="aq-stage-stacks__no" aria-hidden="true">'+num+'</span><span class="aq-stage-stacks__nm">'+(r[0]&&typeof r[0]==='object'?tcell({t:p[0],link:r[0].link}):tx(p[0]))+'</span>'
    +(p[1]?'<span class="aq-stage-stacks__ref">'+tx(p.slice(1).join(' · '))+'</span>':'')+'</h3></div>'
   +'<div class="aq-stage-stacks__pile">'+k(2,'is-ph')+'<ul class="aq-stage-stacks__docs" role="list" data-theme="light">'+docs+'</ul></div>'
   +'<span class="aq-stage-stacks__axis" aria-hidden="true"><span class="aq-stage-stacks__run"></span><span class="aq-stage-stacks__node"></span></span>'
   +'<div class="aq-stage-stacks__who">'+k(1,'is-ph')+'<p class="aq-stage-stacks__step">'+tcell(r[1])+'</p></div></li>'}).join('');
 return sec(H+'<div class="aq-stage-stacks" style="--n:'+R.length+'">'+wFold(b,R.length,'<ol class="aq-stage-stacks__list" role="list">'+list+'</ol>',b.fold_noun||'stages')+'</div>','aq-band--navy aq-stage-stacks-sec')};
