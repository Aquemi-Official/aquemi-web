/* Block "case" -> CaseStudy: fact boxes beside one large measured-outcome figure.
   Item fields: t, client, problem, system, outcome, and optional figure + unit (the headline number, supplied by Aquemi).
   With no figure the slot shows a [bracketed] placeholder; a number is never derived or invented here.
   Optional per item: status (label above the title, e.g. a template awaiting a real project), profile [{v,l}] (a KeyFacts strip of
   headline KPIs under the title), standard (a "Standard met" fact box) and method ("How it was measured", full width under the boxes).
   Optional on the block: intro (in the standard section head). */
BLOCKS['case']=function(b,H){return sec(H+'<div class="aq-cases">'+(b.items||[]).map(function(it){
  var facts=[['Client',it.client],['Problem',it.problem],['System delivered',it.system],['Standard met',it.standard]].filter(function(x){return x[1]}).map(function(x){return '<div class="aq-case__fact"><dt>'+x[0]+'</dt><dd>'+tx(x[1])+'</dd></div>'}).join('');
  var fig=it.figure!=null&&String(it.figure)!==''
    ?'<span class="aq-case__figure"><span class="aq-case__num">'+tx(it.figure)+'</span>'+(it.unit?'<span class="aq-case__unit">'+tx(it.unit)+'</span>':'')+'</span>'
    :'<span class="aq-case__figure is-empty"><span class="aq-ph">[headline figure, unit]</span></span>';
  var prof=it.profile&&it.profile.length?wKeyFacts(it.profile).replace('<dl class="aq-key-facts">','<dl class="aq-key-facts aq-case__profile">'):'';
  return '<article class="aq-case">'+(it.status?'<span class="aq-case__status">'+tx(it.status)+'</span>':'')+(it.t?'<h3 class="aq-h3 aq-case__title">'+tx(it.t)+'</h3>':'')+prof
   +'<dl class="aq-case__facts">'+facts+'<div class="aq-case__outcome"><dt>Measured outcome</dt><dd>'+fig+(it.outcome?'<span class="aq-case__result">'+tx(it.outcome)+'</span>':'')+'</dd></div>'
   +(it.method?'<div class="aq-case__method"><dt>How it was measured</dt><dd>'+tx(it.method)+'</dd></div>':'')+'</dl></article>';
}).join('')+'</div>');};
