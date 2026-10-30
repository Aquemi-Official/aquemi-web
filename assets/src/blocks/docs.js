/* Block "docs" -> DocList: numbered document tiles, each with a short document code derived from its name */
/* First match wins, so specific names come before general ones (WPS before weld log, O&M before media, EN 285 before FAT). */
var DOC_CODES=[
  [/^urs\b.*traceability/i,'URS & TM'],[/traceability matrix/i,'TM'],[/user requirement|\burs\b/i,'URS'],
  [/functional (design )?spec/i,'FS'],[/hardware and software design/i,'HDS & SDS'],[/basis of design/i,'BOD'],
  [/design review|\bdq\b/i,'DQ'],[/risk assessment/i,'RA'],[/contamination control/i,'CCS'],
  [/feed water analysis/i,'FWA'],[/demand profile|sizing calc/i,'SIZ'],[/heat balance/i,'HB'],[/hydraulic calc/i,'HYD'],
  [/p&id|instrumentation diagram/i,'P&ID'],[/general arrangement/i,'GA'],[/isometric/i,'ISO'],
  [/instrument and valve list/i,'I&V'],[/alarm and interlock/i,'ALM'],[/electrical drawing/i,'ELE'],
  [/part 11/i,'Part 11'],[/source code/i,'SRC'],[/pressure vessel|\bcrn\b/i,'CRN'],
  [/operation and maintenance/i,'O&M'],[/standard operating procedure|\bsop\b/i,'SOP'],
  [/material cert/i,'MAT'],[/media and resin/i,'MED'],
  [/welding procedure/i,'WPS & PQR'],[/welder and procedure/i,'WQR & PQR'],[/welder qualif/i,'WQR'],
  [/weld (log|map)/i,'WLD'],[/borescope/i,'BOR'],[/pressure test/i,'PT'],
  [/surface finish/i,'SRF'],[/passivation/i,'PAS'],[/slope verif/i,'SLP'],[/riboflavin|spray ball/i,'RIB'],
  [/integrity test/i,'INT'],[/calibration/i,'CAL'],[/en 285/i,'EN 285'],
  [/executed fat/i,'FAT RPT'],[/\bfat\b.*\bsat\b/i,'FAT & SAT'],[/\bfat\b/i,'FAT'],[/\bsat\b/i,'SAT'],
  [/\biq\b.*\boq\b/i,'IQ & OQ'],[/\biq\b/i,'IQ'],[/\boq\b/i,'OQ'],[/\bpq\b/i,'PQ'],
  [/commissioning/i,'CX'],[/qualification summary/i,'QSR'],[/training/i,'TRN'],
  [/nonconformance/i,'DEV & NCR'],[/deviation/i,'DEV'],[/change control/i,'CC'],[/punch list/i,'PL'],
  [/spare/i,'SPR'],[/parts replaced/i,'PRT'],[/service report/i,'SVC'],[/health report/i,'AHR'],[/turnover package/i,'TOP']
];
var DOC_STOP=/^(and|or|of|the|for|with|to|in|on|a|an|your|by|from)$/i;
/* Lookup code, else an acronym the name already gives in brackets, else initials of its first three words. Second value: matched the lookup. */
function docCode(name){
  for(var i=0;i<DOC_CODES.length;i++)if(DOC_CODES[i][0].test(name))return [DOC_CODES[i][1],true];
  var m=name.match(/\(([A-Z][A-Z&]{1,5})s?\)/);if(m)return [m[1],false];
  return [name.replace(/\(.*?\)/g,'').split(/[\s,\/-]+/).filter(function(w){return w&&!DOC_STOP.test(w)}).slice(0,3).map(function(w){return w.charAt(0).toUpperCase()}).join(''),false];
}
BLOCKS['docs']=function(b,H){
  var items=(b.items||[]).map(function(x){return typeof x==='string'?{t:x}:{t:x.t||'',d:x.d}});
  var codes=items.map(function(x){return docCode(x.t)});
  /* Codes only when most items are documents the lookup knows; a checklist of other things keeps just its numbers. */
  var coded=codes.filter(function(c){return c[1]}).length*2>=items.length;
  return sec(H+'<ol class="aq-docs'+(coded?'':' aq-docs--plain')+'">'+items.map(function(x,i){
    var n=(i<9?'0':'')+(i+1);
    return '<li><span class="aq-docs__code" aria-hidden="true"><span class="aq-docs__n">'+n+'</span>'+(coded?'<span class="aq-docs__sep"> / </span>'+e(codes[i][0]):'')+'</span>'
      +'<span class="aq-docs__name">'+tx(x.t)+(x.d?'<span class="aq-docs__d">'+tx(x.d)+'</span>':'')+'</span></li>';
  }).join('')+'</ol>','aq-band--sunken');
};
