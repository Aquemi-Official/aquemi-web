/* Block "docs" -> DocList: the turnover binder. Documents as folder cards in a binder frame, each folder tab carrying the
   index and the short document code (derived from its name); the deciding documents lead, emphasized. Rows on phones. */
/* First match wins, so specific names come before general ones (WPS before weld log, O&M before media, EN 285 before FAT). */
var DOC_CODES=[
  [/^urs\b.*traceability/i,'URS & TM'],[/traceability matrix/i,'TM'],[/user requirement|\burs\b/i,'URS'],
  [/functional and design spec/i,'FDS'],[/functional (design )?spec/i,'FS'],[/hardware and software design/i,'HDS & SDS'],[/basis of design/i,'BOD'],[/mass balance/i,'HMB'],[/steam balance/i,'SB'],[/membrane projection/i,'PRJ'],
  [/design review|\bdq\b/i,'DQ'],[/risk assessment/i,'RA'],[/contamination control/i,'CCS'],
  [/feed ?water (analysis|review)/i,'FWA'],[/demand profile|sizing calc/i,'SIZ'],[/heat balance/i,'HB'],[/hydraulic calc/i,'HYD'],
  [/p&id|instrumentation diagram/i,'P&ID'],[/general arrangement/i,'GA'],[/isometric/i,'ISO'],
  [/instrument and valve list/i,'I&V'],[/alarm and interlock/i,'ALM'],[/electrical drawing/i,'ELE'],
  [/part 11/i,'Part 11'],[/source code/i,'SRC'],[/pressure vessel|\bcrn\b/i,'CRN'],
  [/operation and maintenance/i,'O&M'],[/standard operating procedure|\bsops?\b/i,'SOP'],
  [/fabrication and inspection plan/i,'FIP'],[/fabrication record/i,'FAB'],[/material (cert|log)/i,'MAT'],[/media and resin/i,'MED'],
  [/welding procedure|\bwps\b/i,'WPS & PQR'],[/welder and procedure/i,'WQR & PQR'],[/welder qualif/i,'WQR'],
  [/weld (log|map)/i,'WLD'],[/borescope/i,'BOR'],[/pressure test/i,'PT'],
  [/slope (verif|survey).*dead leg/i,'SLP & DLR'],[/dead leg/i,'DLR'],[/surface finish/i,'SRF'],[/passivation/i,'PAS'],[/slope (verif|survey|check)/i,'SLP'],[/riboflavin|spray ball/i,'RIB'],
  [/integrity test/i,'INT'],[/calibration/i,'CAL'],[/en 285/i,'EN 285'],
  [/executed fat/i,'FAT RPT'],[/\bfat\b.*\bsat\b/i,'FAT & SAT'],[/\bfat\b/i,'FAT'],[/\bsat\b/i,'SAT'],
  [/\biq\b.*\boq\b/i,'IQ & OQ'],[/\biq\b/i,'IQ'],[/\boq\b/i,'OQ'],[/\bpq\b/i,'PQ'],
  [/commissioning/i,'CX'],[/sampling plan/i,'SMP'],[/software version/i,'SVR'],[/computeri[sz]ed system validation/i,'CSV'],[/data integrity/i,'DI'],[/qualification summary/i,'QSR'],[/training/i,'TRN'],
  [/nonconformance/i,'DEV & NCR'],[/deviation/i,'DEV'],[/change control/i,'CC'],[/change impact/i,'CIA'],[/change log/i,'CL'],[/as-built/i,'ASB'],[/like-for-like|like for like/i,'LFL'],[/observation/i,'OBS'],[/annual system review/i,'ASR'],[/trend report/i,'TRD'],[/excursion/i,'EXC'],[/system description/i,'SD'],[/compliance matrix/i,'CM'],[/punch list/i,'PL'],
  [/spare/i,'SPR'],[/parts (replaced|record)/i,'PRT'],[/service report/i,'SVC'],[/health report/i,'AHR'],[/turnover package/i,'TOP']
];
var DOC_STOP=/^(and|or|of|the|for|with|to|in|on|a|an|your|by|from)$/i;
/* Codes: an item's explicit code wins (items [{t, code}]); then this lookup, else an acronym the name already gives in brackets, else initials of its first three words. Second value: matched the lookup. */
function docCode(name){
  for(var i=0;i<DOC_CODES.length;i++)if(DOC_CODES[i][0].test(name))return [DOC_CODES[i][1],true];
  var m=name.match(/\(([A-Z][A-Z&]{1,5})s?\)/);if(m)return [m[1],false];
  return [name.replace(/\(.*?\)/g,'').split(/[\s,\/-]+/).filter(function(w){return w&&!DOC_STOP.test(w)}).slice(0,3).map(function(w){return w.charAt(0).toUpperCase()}).join(''),false];
}
/* Wide cards (span 3 of the 6-column grid) so no row ends short. lead: the first two are key and open the binder as a
   pair, used when the cards after them fill rows of three (or end in a pair). n visible cards; returns indexes that span 3. */
function docWide(n,lead){lead=lead&&(n-2)%3!==1;var w={},s=lead?2:0,m=n-s,i;if(lead){w[0]=w[1]=1}
  var k=m%3===1&&m>=4?4:m%3===2?2:0;for(i=n-k;i<n;i++)w[i]=1;return w}
BLOCKS['docs']=function(b,H){
  var items=(b.items||[]).map(function(x){return typeof x==='string'?{t:x}:{t:x.t||'',d:x.d,code:x.code,key:x.key,link:x.link}});
  var n=items.length,codes=items.map(function(x){return x.code?[x.code,true]:docCode(x.t)});
  /* Codes only when most items are documents the lookup knows; a checklist of other things keeps just its numbers. */
  var coded=codes.filter(function(c){return c[1]}).length*2>=n;
  /* Key (deciding) documents: items marked key: true; else the first b.key (default 2 in a coded list of five or more; key: 0 for none). */
  var marked=items.some(function(x){return x.key}),nk=b.key!=null?+b.key:(coded&&n>=5?2:0);
  var key=items.map(function(x,i){return marked?!!x.key:i<nk});
  var vis=b.fold>0&&n>b.fold?b.fold:n,lead=key[0]&&key[1]&&!key.slice(2).some(Boolean);
  var wo=docWide(n,lead),wf=vis<n?docWide(vis,lead):{};
  return sec(H+wFold(b,n,'<ol class="aq-docs'+(coded?'':' aq-docs--plain')+'">'+items.map(function(x,i){
    var cls=(key[i]?' is-key':'')+(wo[i]?' aq-docs__w':'')+(wf[i]?' aq-docs__wf':''),name=x.link&&wp(x.link)?wlink(x.link,x.t):tx(x.t);
    return fli('<li'+(cls?' class="'+cls.slice(1)+'"':'')+'>',b,i)+'<span class="aq-docs__tab" aria-hidden="true">'+idx(i).replace(' aria-hidden="true"','')
      +(coded?'<span class="aq-docs__code">'+e(codes[i][0])+'</span>':'')+'</span>'
      +'<span class="aq-docs__card"><span class="aq-docs__name">'+name+(x.d?'<span class="aq-docs__d">'+tx(x.d)+'</span>':'')+'</span></span></li>';
  }).join('')+'</ol>',b.fold_noun||'documents'));
};
