/* Table as "plans" -> PlanTiers: service plans side by side, one action per plan. Fields as a table: cols [row label,
   plan A, plan B, …], rows [feature, value per plan]. A row whose label starts "Suits" becomes each plan's one-line
   subtitle under its name; a row starting "Price" shows prominently under it. A column named "No plan…" is the
   baseline: quieter, last, no button. b.recommend (column index or plan name) raises that plan with a quiet
   "Most chosen" marker; only when the page says so. Each plan ends with the page's own CTA (primary_cta, its link and
   intent; else cta.button), so no new intents. Desktop: a label column, then the plans, rows aligned across plans
   (subgrid). Phones: plans stacked, each feature labelled. fold: N shows the first N features in every plan. */
TABLE_AS.plans=function(b,H){var C=b.cols||[],R=b.rows||[],lab=function(r){return String(r[0]&&r[0].t||r[0]||'')};
 var suits=R.filter(function(r){return /^suits/i.test(lab(r))})[0],price=R.filter(function(r){return /^price/i.test(lab(r))})[0];
 var rows=R.filter(function(r){return r!==suits&&r!==price});
 var p=W().filter(function(q){return (q.blocks||[]).indexOf(b)>=0})[0]||wp(WP)||{},c=p.cta||{};
 var label=p.primary_cta||c.button||'Request a proposal',link=p.primary_cta?ctaLink(p):(c.link||'contact-proposal'),intent=p.primary_cta?p.primary_cta_intent:c.intent;
 var rec=typeof b.recommend==='number'?b.recommend:b.recommend?C.map(function(x){return String(x&&x.t||x)}).indexOf(String(b.recommend)):-1;
 var feats=function(r,i){return fli('<div class="aq-plan-tiers__row">',b,i)};
 var plans=C.slice(1).map(function(name,k){var j=k+1,n=String(name&&name.t||name),base=/^no\b/i.test(n);
  return '<article class="aq-plan-tiers__plan'+(j===rec?' is-rec':'')+(base?' is-base':'')+'">'
   +'<header class="aq-plan-tiers__head">'+(j===rec?'<p class="aq-plan-tiers__mark">Most chosen</p>':'')
   +'<h3 class="aq-plan-tiers__name">'+tcell(name)+'</h3>'
   +(suits&&suits[j]?'<p class="aq-plan-tiers__suits">'+tcell(suits[j])+'</p>':'')
   +(price&&price[j]?'<p class="aq-plan-tiers__price"><span class="aq-plan-tiers__k">'+tcell(price[0])+'</span>'+tcell(price[j])+'</p>':'')+'</header>'
   +'<dl class="aq-plan-tiers__rows">'+rows.map(function(r,i){return feats(r,i)+'<dt>'+tcell(r[0])+'</dt><dd>'+tcell(r[j])+'</dd></div>'}).join('')+'</dl>'
   +'<div class="aq-plan-tiers__action">'+(base?'':wBtn(label,link,j===rec?null:'secondary',intent).replace('<a ','<a aria-label="'+e(label+': '+n)+'" '))+'</div></article>'}).join('');
 var labels='<div class="aq-plan-tiers__labels" aria-hidden="true"><div class="aq-plan-tiers__lhead"></div>'+rows.map(function(r,i){return fli('<div class="aq-plan-tiers__label">',b,i)+tcell(r[0])+'</div>'}).join('')+'<div></div></div>';
 return sec(H+wFold(b,rows.length,'<div class="aq-plan-tiers'+(rec>0?' has-rec':'')+'" style="--plan-rows:'+rows.length+'">'+labels+plans+'</div>',b.fold_noun||'features'));};
