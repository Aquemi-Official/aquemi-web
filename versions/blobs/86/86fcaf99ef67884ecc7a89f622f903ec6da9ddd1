/* ---------- spec "as": "rules" -> LimitGauges, rule variant ----------
   Design rules that are not release limits (L/D ≤ 2, return velocity ≥ x, sanitization ≥ 65 °C), on the gauges' cream
   plate: one ruled row per rule, its big mono number, the rule name, then a compact horizontal threshold bar (the scale
   with ticks, the threshold mark with its chip, the passing side shaded flow) with the rule as written under it, and the
   basis with standard names as tags. A rule without a threshold (a part, a method) keeps the row with its value between
   dashed rules, so the sheet reads as one list.
   Threshold: the row's rule field ("≥ [design minimum return velocity, m/s]", "≤ 2") or else its value: a ≤ < ≥ >
   sign, or "at least / minimum / no less than" (≥) or "at most / maximum / no more than / up to" (≤), followed by a
   number with its unit or a [placeholder]. A number sets the scale (0 to the next round number above it, gaugeScale:
   a ruler, not data). A placeholder draws the same bar unnumbered with the mark at mid-scale and the placeholder as the
   chip: the shape of the rule, its value still to come. */
var RULE_UP=/\b(at least|minimum|min\.|no less than|not less than)/i,RULE_DN=/\b(at most|maximum|max\.|no more than|not more than|up to)/i;
function ruleParse(r){var v=String(r.rule||r.v||''),m=v.match(/([≤<≥>])\s*/),c='',k;
  if(m){c=m[1]==='<'?'≤':m[1]==='>'?'≥':m[1];k=m.index+m[0].length}
  else{var bare=v.replace(/\[[^\]]*\]/g,function(x){return Array(x.length+1).join(' ')}),u=bare.match(RULE_UP),d=bare.match(RULE_DN),w=u&&(!d||u.index<d.index)?u:d;
    if(!w)return null;c=w===u?'≥':'≤';k=w.index+w[0].length}
  var rest=v.slice(k).replace(/^\s+/,''),p=rest.match(/^\[[^\]]*\]/);
  if(p)return {c:c,ph:p[0]};
  var n=rest.match(/^(\d+(?:\.\d+)?)\s*([^\s;,(]*(?:\s?\/\s?[^\s;,(]+)?)/);
  if(!n)return null;return {c:c,n:parseFloat(n[1]),t:n[1],u:n[2]&&n[2].length<=8?n[2]:''}}
function wRuleBar(g){var up=g.c==='≥',f,ends='';
  if(g.ph)f=0.5;else{var S=gaugeScale(g.n,up);f=Math.min(g.n/S[0],1);ends='<span class="aq-limit-gauges__ends"><span>0</span><span>'+gaugeNum(S[0])+'</span></span>'}
  var chip=e(g.c)+' '+(g.ph?tx(g.ph):e(g.t)+(g.u?' '+tx(g.u):''));
  return '<div class="aq-limit-gauges__bar'+(up?' is-up':'')+(g.ph?' is-open':'')+'" aria-hidden="true" style="--f:'+f.toFixed(3)+'">'
   +'<span class="aq-limit-gauges__chip">'+chip+'</span><span class="aq-limit-gauges__scale"><span class="aq-limit-gauges__band"></span><span class="aq-limit-gauges__tick"></span></span>'+ends+'</div>'}
function wRules(b,rows){
  var list=rows.map(function(r,i){var g=ruleParse(r);
    return fli('<li class="aq-limit-gauges__rule'+(g?'':' is-text')+(r.hl?' is-key':'')+'">',b,i)
     +'<span class="aq-limit-gauges__rn" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span>'
     +'<h3 class="aq-limit-gauges__p">'+tx(r.p)+'</h3>'
     +'<div class="aq-limit-gauges__rv">'+(g?wRuleBar(g):'')+'<p class="aq-limit-gauges__rt">'+tx(r.v)+'</p></div>'
     +(r.m?'<p class="aq-limit-gauges__m">'+gaugeBasis(r.m)+'</p>':'')+'</li>'}).join('');
  return wPlate(wFold(b,rows.length,'<ol class="aq-limit-gauges aq-limit-gauges--rules" role="list">'+list+'</ol>',b.fold_noun||'rules'),{light:true,block:['Aquemi',b.caption||'Design rules']})}
