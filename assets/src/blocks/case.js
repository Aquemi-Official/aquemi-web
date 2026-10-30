/* Block "case" -> CaseStudy. Optional per item: status (label above the title), profile [{v,l}] (KeyFacts strip of headline KPIs),
   standard (Standard met) and method (How it was measured). Block layout "sheet" stacks one case per row as a spec sheet. */
BLOCKS['case']=function(b,H){
  return sec(H+(b.intro?'<p class="aq-lead">'+tx(b.intro)+'</p>':'')+'<div class="aq-cases'+(b.layout==='sheet'?' aq-cases--sheet':'')+'">'+(b.items||[]).map(function(it){
    return '<div class="aq-case">'+(it.status?'<span class="aq-case__status">'+tx(it.status)+'</span>':'')+'<span class="aq-h3">'+tx(it.t)+'</span>'
      +(it.profile&&it.profile.length?'<dl class="aq-key-facts aq-case__profile">'+it.profile.map(function(f){return '<div><dt>'+tx(f.l)+'</dt><dd>'+tx(f.v)+'</dd></div>'}).join('')+'</dl>':'')
      +'<dl>'+[['Client',it.client],['Problem',it.problem],['System delivered',it.system],['Standard met',it.standard],['Measured outcome',it.outcome],['How it was measured',it.method]].filter(function(x){return x[1]}).map(function(x){return '<dt>'+x[0]+'</dt><dd>'+tx(x[1])+'</dd>'}).join('')+'</dl></div>';
  }).join('')+'</div>');
};
