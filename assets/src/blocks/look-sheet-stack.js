/* Look "sheet-stack" -> SheetStack (design-system/components/SheetStack): the documents delivered with a system as an
   exploded stack of drawing sheets. On the left the sheets lie flat in isometric, one above the other along a dashed
   axis, each showing in miniature what it is (a calculation with a bar per section past a dashed limit line, a
   register of tees, an isometric pipe run, a certificate with its seal) and its code in a title block; beside each
   sheet, its row: index, code, name, what it holds. Key documents carry their code in flow. Pointing at a row lifts
   its sheet. Phones: a smaller sheet beside each row.
   Fields (a docs block): h, items [{t, d, key, code, sheet, link, intent}], link, link_label, intent, fold, fold_noun.
   sheet: "calc", "register", "iso" or "cert" (default from the document code: HYD, DLR, P&ID or ISO, MAT). */
(function(){
var BY={HYD:'calc',DLR:'register','P&ID':'iso',ISO:'iso',MAT:'cert'};
var K='aq-sheet-stack';function P(d,c){return '<path class="'+K+'__'+(c||'ln')+'" d="'+d+'"/>'}
var ART={
 calc:function(){var o=P('M16 20H180','ln')+P('M16 30H120','th'),L=[118,142,104,160,130,150];
  L.forEach(function(l,i){var y=48+i*18;o+=P('M16 '+y+'H52','th')+P('M64 '+y+'H'+(64+l),'bar')});return o+P('M150 40V160','lim')},
 register:function(){var o=P('M16 20H264M16 44H264M16 160H264M70 44V160M150 44V160M210 44V160','th');
  for(var i=0;i<5;i++){var y=56+i*21;o+=P('M24 '+(y+10)+'H58M41 '+(y+10)+'V'+(y),'ln')+P('M84 '+(y+6)+'H136M164 '+(y+6)+'H198M222 '+(y+6)+'H250','th')}return o},
 iso:function(){return P('M20 120H70M96 120H150M170 120H250M250 120V60H200M160 60H40V120','ln')+P('M70 112L96 128V112L70 128Z','ln')+P('M150 112L170 128V112L150 128Z','ln')
  +'<circle class="aq-sheet-stack__seal" cx="180" cy="60" r="16"/>'+P('M180 76V120','th')+P('M20 120H70M96 120H150M170 120H250','flow')+P('M120 140l40 6M150 140l10 6l-10 4','th')},
 cert:function(){var o=P('M60 24H220','ln')+P('M80 36H200','th');for(var y=56;y<=110;y+=12)o+=P('M28 '+y+'H'+(y%24?250:220),'th');
  return o+'<circle class="aq-sheet-stack__seal" cx="60" cy="142" r="20"/><circle class="aq-sheet-stack__seal" cx="60" cy="142" r="13"/>'+P('M100 150c10 -16 18 8 28 -6s14 4 22 -4','ln')}
};
function sheet(kind,code){return '<span class="aq-sheet-stack__sheet" aria-hidden="true"><svg viewBox="0 0 280 198" focusable="false">'+(ART[kind]?ART[kind]():'')
 +'<path class="aq-sheet-stack__frame" d="M8 8H272V190H8Z"/><path class="aq-sheet-stack__tb" d="M188 166H272V190H188Z"/><text x="230" y="183">'+e(code)+'</text></svg></span>'}
LOOKS['sheet-stack']=function(b,H){
 var I=(b.items||[]).map(function(x){return typeof x==='string'?{t:x}:x}),n=I.length;
 var rows=I.map(function(x,i){var code=x.code||docCode(x.t||'')[0],kind=x.sheet||BY[code]||'calc',name=x.link&&wp(x.link)?wlink(x.link,x.t,x.intent):tx(x.t);
  return fli('<li class="aq-sheet-stack__row'+(x.key?' is-key':'')+'" style="--i:'+i+'">',b,i)+'<span class="aq-sheet-stack__slot">'+sheet(kind,code)+'</span>'
   +'<div class="aq-sheet-stack__text"><p class="aq-sheet-stack__code" aria-hidden="true"><span class="aq-sheet-stack__i">'+(i<9?'0':'')+(i+1)+'</span><span class="aq-sheet-stack__k">'+e(code)+'</span></p>'
   +'<h3 class="aq-sheet-stack__t">'+name+'</h3>'+(x.d?'<p class="aq-sheet-stack__d">'+tx(x.d)+'</p>':'')+'</div></li>'}).join('');
 var more=b.link&&wp(b.link)?'<p class="aq-sheet-stack__more">'+wBtn(b.link_label||wlabel(b.link),b.link,'link',b.intent)+'</p>':'';
 return sec(H+'<div class="aq-sheet-stack" style="--n:'+n+'"><span class="aq-sheet-stack__axis" aria-hidden="true"></span>'+wFold(b,n,'<ol class="aq-sheet-stack__rows" role="list">'+rows+'</ol>',b.fold_noun||'documents')+more+'</div>','aq-sheet-stack-sec')};
})();
