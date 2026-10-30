/* Block "case" -> CaseStudy: fact boxes beside one large measured-outcome figure.
   Item fields: t, client, problem, system, outcome, and optional figure + unit (the headline number, supplied by Aquemi).
   With no figure the slot shows a [bracketed] placeholder; a number is never derived or invented here.
   Optional per item: status (label above the title, e.g. a template awaiting a real project), profile [{v,l}] (a KeyFacts strip of
   headline KPIs under the title), standard (a "Standard met" fact box) and method ("How it was measured", full width under the boxes).
   Optional on the block: intro (in the standard section head).
   Project record (opt-in per item): an item with art, outcomes or timeline renders as an engineering record instead:
   art "<page id>" (the equipment drawing from ART in parts/Hero.js) with changed [{t, at:[x%,y%]}] marked on it,
   the facts as hairline rows beside it, outcomes [{v, unit, l, method}] as large figures with the method beneath (3-4),
   and timeline [{t, when}] as order-to-release milestones. Values are printed as given; [brackets] stay placeholders. */
(function(){
function facts(it,cls){return [['Client',it.client],['Problem',it.problem],['System delivered',it.system],['Standard met',it.standard]].filter(function(x){return x[1]}).map(function(x){return '<div class="'+cls+'"><dt>'+x[0]+'</dt><dd>'+tx(x[1])+'</dd></div>'}).join('')}
function mark(n){return '<span class="aq-case__mark" aria-hidden="true">'+n+'</span>'}
function head(it){var prof=it.profile&&it.profile.length?wKeyFacts(it.profile).replace('<dl class="aq-key-facts">','<dl class="aq-key-facts aq-case__profile">'):'';
 return (it.status?'<span class="aq-case__status">'+tx(it.status)+'</span>':'')+(it.t?'<h3 class="aq-h3 aq-case__title">'+tx(it.t)+'</h3>':'')+prof}
function card(it){
  var fig=it.figure!=null&&String(it.figure)!==''
    ?'<span class="aq-case__figure"><span class="aq-case__num">'+tx(it.figure)+'</span>'+(it.unit?'<span class="aq-case__unit">'+tx(it.unit)+'</span>':'')+'</span>'
    :'<span class="aq-case__figure is-empty"><span class="aq-ph">[headline figure, unit]</span></span>';
  return '<article class="aq-case">'+head(it)
   +'<dl class="aq-case__facts">'+facts(it,'aq-case__fact')+'<div class="aq-case__outcome"><dt>Measured outcome</dt><dd>'+fig+(it.outcome?'<span class="aq-case__result">'+tx(it.outcome)+'</span>':'')+'</dd></div>'
   +(it.method?'<div class="aq-case__method"><dt>How it was measured</dt><dd>'+tx(it.method)+'</dd></div>':'')+'</dl></article>';
}
function record(it){
  var ch=(it.changed||[]).slice(0,4),art=it.art&&ART[it.art]?it.art:'';
  var drawing=art?'<figure class="aq-case__drawing"><div class="aq-case__art"><div class="aq-case__plate"><span class="aq-illustration" role="img" aria-label="'+e(ART[art])+'" style="'+artMask(art)+'"></span>'
     +ch.map(function(c,i){var a=c.at;return a&&a.length===2?'<span class="aq-case__pin" style="left:'+(+a[0])+'%;top:'+(+a[1])+'%">'+mark(i+1)+'</span>':''}).join('')+'</div></div>'
     +(ch.length?'<figcaption class="aq-case__changes"><p class="aq-case__label">What changed</p><ol>'+ch.map(function(c,i){return '<li>'+mark(i+1)+'<span>'+tx(c.t)+'</span></li>'}).join('')+'</ol></figcaption>':'')+'</figure>':'';
  var f=facts(it,'aq-case__entry'),O=(it.outcomes||[]).slice(0,4),T=it.timeline||[];
  var outs=O.length?'<div class="aq-case__outcomes"><p class="aq-case__label">Measured outcomes</p>'+(it.outcome?'<p class="aq-case__result">'+tx(it.outcome)+'</p>':'')
     +'<dl class="aq-case__figures" style="--n:'+O.length+'">'+O.map(function(o){return '<div class="aq-case__fig"><dt>'+tx(o.l||'')+'</dt><dd><span class="aq-case__val"><span class="aq-case__num">'+tx(o.v!=null&&o.v!==''?o.v:'[value]')+'</span>'
       +(o.unit?'<span class="aq-case__unit">'+tx(o.unit)+'</span>':'')+'</span>'+(o.method?'<span class="aq-case__how">'+tx(o.method)+'</span>':'')+'</dd></div>'}).join('')+'</dl></div>':'';
  var line=T.length?'<div class="aq-case__timeline"><p class="aq-case__label">Order to release</p><ol style="--n:'+T.length+'">'+T.map(function(m){return '<li><span class="aq-case__stop" aria-hidden="true"></span><span class="aq-case__mt">'+tx(m.t)+'</span>'+(m.when?'<span class="aq-case__when">'+tx(m.when)+'</span>':'')+'</li>'}).join('')+'</ol></div>':'';
  return '<article class="aq-case aq-case--record">'+head(it)
   +((drawing||f)?'<div class="aq-case__brief'+(drawing?'':' is-bare')+'">'+(f?'<dl class="aq-case__entries">'+f+'</dl>':'')+drawing+'</div>':'')
   +outs+line+(it.method?'<dl class="aq-case__entries"><div class="aq-case__method"><dt>How it was measured</dt><dd>'+tx(it.method)+'</dd></div></dl>':'')+'</article>';
}
BLOCKS['case']=function(b,H){return sec(H+'<div class="aq-cases">'+(b.items||[]).map(function(it){
  return it.art||(it.outcomes&&it.outcomes.length)||(it.timeline&&it.timeline.length)?record(it):card(it);
}).join('')+'</div>');};
})();
