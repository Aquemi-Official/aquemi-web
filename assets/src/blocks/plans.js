/* Table as "plans" -> PlanTiers: service plans compared in one table on a plate, one action per plan.
   Fields as a table: cols [row label, plan A, plan B, …], rows [feature, value per plan]. A row whose label starts
   "Suits" becomes the "Fits when" row under the table; every other row is a numbered feature row (01, 02 …). A column
   named "No plan…" is the baseline: quieter, last, no button. b.recommend (column index or plan name) frames that
   plan as the one flow-tint column with "Recommended" above its name; only when the page says so. Each plan
   ends with the page's own CTA (primary_cta, its link and intent; else cta.button). Per-tier intent: a plan's column
   head may be {t, intent} ({"t": "[tier 1 plan name]", "intent": "Service plan quote|[tier 1 plan name]"}); that
   plan's button then carries its own intent in place of the page's, so it lands on the form with its tier ticked. Use
   it only when the linked form has an option per tier (check warns on labels that tick nothing).
   Desktop: a real table, label column then one column per plan. Phones: a tier switcher (buttons with aria-pressed)
   shows one plan's column at a time; every tier stays in the DOM and the renderer only sets data-show, so with no
   script all tiers show, each value captioned with its plan. fold: N shows the first N feature rows. */
TABLE_AS.plans=function(b,H){var C=b.cols||[],R=b.rows||[],lab=function(r){return String(r[0]&&r[0].t||r[0]||'')};
 var suits=R.filter(function(r){return /^suits/i.test(lab(r))})[0],rows=R.filter(function(r){return r!==suits});
 var p=W().filter(function(q){return (q.blocks||[]).indexOf(b)>=0})[0]||wp(WP)||{},c=p.cta||{};
 var label=p.primary_cta||c.button||'Request a proposal',link=p.primary_cta?ctaLink(p):(c.link||'contact-proposal'),intent=p.primary_cta?p.primary_cta_intent:c.intent;
 var names=C.map(function(x){return String(x&&x.t||x||'')});
 var rec=typeof b.recommend==='number'?b.recommend:b.recommend?names.indexOf(String(b.recommend)):-1;
 var T=C.slice(1).map(function(x,k){var j=k+1;return {j:j,n:names[j],base:/^no\b/i.test(names[j]),rec:j===rec,it:x&&typeof x==='object'&&x.intent||''}});
 var show=rec>0?rec:(T.filter(function(t){return !t.base})[0]||T[0]||{j:1}).j;
 var cls=function(t,x){return ' class="aq-plan-tiers__c t'+t.j+(t.rec?' is-rec':'')+(t.base?' is-base':'')+(x?' '+x:'')+'"'};
 var cap=function(t){return '<span class="aq-plan-tiers__cap" aria-hidden="true">'+tx(t.n)+'</span>'};
 var head='<thead><tr><td class="aq-plan-tiers__corner"></td>'+T.map(function(t){return '<th scope="col"'+cls(t,'aq-plan-tiers__name')+'>'
  +(t.rec?'<span class="aq-plan-tiers__mark">Recommended</span>':'')+tx(t.n)+'</th>'}).join('')+'</tr></thead>';
 var body='<tbody>'+rows.map(function(r,i){return fli('<tr class="aq-plan-tiers__row">',b,i)
  +'<th scope="row" class="aq-plan-tiers__label"><span class="aq-index" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span><span>'+tcell(r[0])+'</span></th>'
  +T.map(function(t){return '<td'+cls(t)+'>'+cap(t)+'<span class="aq-plan-tiers__v">'+tcell(r[t.j])+'</span></td>'}).join('')+'</tr>'}).join('')+'</tbody>';
 var foot='<tbody class="aq-plan-tiers__foot">'+(suits?'<tr class="aq-plan-tiers__fits"><th scope="row" class="aq-plan-tiers__label"><span>Fits when</span></th>'
  +T.map(function(t){return '<td'+cls(t)+'>'+cap(t)+(suits[t.j]?tcell(suits[t.j]):'')+'</td>'}).join('')+'</tr>':'')
  +'<tr class="aq-plan-tiers__actions"><td class="aq-plan-tiers__corner"></td>'+T.map(function(t){return '<td'+cls(t)+'>'
  +(t.base?'':wBtn(label,link,t.rec?null:'secondary',t.it||intent).replace('<a ','<a aria-label="'+e(label+': '+t.n)+'" '))+'</td>'}).join('')+'</tr></tbody>';
 var sw='<div class="aq-plan-tiers__switch" role="group" aria-label="Show one plan">'+T.map(function(t){return '<button type="button" class="aq-plan-tiers__tab'+(t.rec?' is-rec':'')+'" data-tier="'+t.j+'" aria-pressed="'+(t.j===show?'true':'false')+'">'
  +(t.rec?'<span class="aq-plan-tiers__tabmark">Recommended</span>':'')+'<span>'+tx(t.n)+'</span></button>'}).join('')+'</div>';
 var table='<div class="aq-plan-tiers'+(rec>0?' has-rec':'')+'" data-show="'+show+'" style="--tiers:'+T.length+'">'+sw
  +'<table class="aq-plan-tiers__table">'+head+body+foot+'</table></div>';
 return sec(H+wPlate(wFold(b,rows.length,table,b.fold_noun||'features'),{cls:'aq-plan-tiers__plate',block:['Aquemi',b.nav||'Plans',T.length+' plans']}));};
/* Tier switcher (phones): show the pressed plan's column; arrow keys move between the buttons */
document.addEventListener('click',function(ev){var t=ev.target.closest&&ev.target.closest('.aq-plan-tiers__tab');if(!t)return;var w=t.closest('.aq-plan-tiers');
 w.setAttribute('data-show',t.getAttribute('data-tier'));w.querySelectorAll('.aq-plan-tiers__tab').forEach(function(x){x.setAttribute('aria-pressed',x===t?'true':'false')})});
document.addEventListener('keydown',function(ev){var t=ev.target.closest&&ev.target.closest('.aq-plan-tiers__tab');if(!t||(ev.key!=='ArrowRight'&&ev.key!=='ArrowLeft'))return;
 var a=[].slice.call(t.parentNode.querySelectorAll('.aq-plan-tiers__tab')),n=a[(a.indexOf(t)+(ev.key==='ArrowRight'?1:a.length-1))%a.length];ev.preventDefault();n.focus();n.click()});
