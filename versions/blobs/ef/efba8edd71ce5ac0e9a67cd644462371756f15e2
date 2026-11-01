/* Look "site-plates" -> SitePlates (design-system/components/SitePlates): a table of sites (site, what happens here,
   address, contact and hours) set as figure plates, two to a row. Each site is a plate: a small isometric drawing of
   what stands there (IsoKit, on a limestone panel with a faint grid), its index and place, the kind of site set large
   and light, then what happens here, the address and the contact lines (a cell's " · " parts each on its own line).
   The first cell is split at its first ", " into the kind ("Shop and test bay") and the place ("[shop location, city and
   province]"); a {t, link} first cell links the kind. Fields, as a table: cols, rows, fold, fold_noun, and optional
   art: one drawing key per row ("office", "shop", "service", "parts"; any other key or none draws no figure).
   Drawings are drawn here from IsoKit parts (building; skid, RO rack and panel; truck; crates are boxes drawn with the
   kit's box primitive next to a pump and valve). Design system: components/SitePlates. */
(function(){
function eq(d){return '<path class="aq-iso__eq" d="'+d+'"/>'}
var SCENES={
 office:function(){return {inner:isoPart('building',0,0,0,1,{w:84,d:56,h:52}),box:[[0,0,0],[84,0,0],[0,56,0],[84,56,0],[0,0,68],[84,0,68],[0,56,68]]}},
 shop:function(){var sk=isoPart('skid',0,0,0,1,{w:150,d:70}),ro=isoPart('ro',8,6,9,1,{id:'ro'}),pn=isoPart('panel',124,48,9,0.9,{id:'pn'});
  return {inner:[sk,ro,pn].join(''),box:[[0,0,0],[150,0,0],[0,70,0],[150,70,0],[0,0,70],[150,0,70],[0,70,70]]}},
 service:function(){return {inner:isoPart('truck',0,0,0,1,{load:false}),box:[[0,0,0],[96,0,0],[0,30,0],[96,30,0],[0,0,40],[96,0,40],[0,30,40]]}},
 parts:function(){var o=[];[[0,0,0,30,26,22],[34,0,0,30,26,22],[0,0,22,30,26,22],[34,0,22,30,26,18],[68,0,0,24,26,16]].forEach(function(c){o.push(eq(isoBoxD([c[0],c[1],c[2]],c[3],c[4],c[5])))});
  o.push(isoPart('pump',30,52,0,0.9,{id:'pump'}));o.push(isoPart('valve',86,46,6,1.1,{id:'valve'}));
  return {inner:o.join(''),box:[[0,0,0],[96,0,0],[0,70,0],[96,70,0],[0,0,48],[96,0,48],[0,70,48]]}}
};
function scene(k){var f=SCENES[k];if(!f)return '';var s=f(),bx=isoBounds(s.box,18),W=Math.round(bx.w),H=Math.round(bx.h);
 return '<div class="aq-site-plates__fig" aria-hidden="true" data-theme="light">'+isoSvg(W,H,s.inner,'aq-iso--limestone aq-site-plates__svg',{origin:[-bx.x,-bx.y]})+'</div>'}
function lines(c){if(c&&typeof c==='object')return tcell(c);return String(c==null?'':c).split(/\s+·\s+/).map(function(x){return '<span>'+tx(x)+'</span>'}).join('')}
LOOKS['site-plates']=function(b,H){var C=b.cols||[],R=b.rows||[],A=b.art||[];
 var li=R.map(function(r,i){var c0=r[0],t=c0&&typeof c0==='object'?c0.t:String(c0||''),k=t.indexOf(', '),kind=k>0?t.slice(0,k):t,place=k>0?t.slice(k+2):'';
  var kh=c0&&typeof c0==='object'&&c0.link&&wp(c0.link)?wlink(c0.link,kind,c0.intent):tx(kind);
  var dl=[1,2,3].map(function(j){var v=r[j];if(v==null||v==='')return '';return '<div><dt>'+tx(C[j]||'')+'</dt><dd>'+lines(v)+'</dd></div>'}).join('');
  return fli('<li class="aq-site-plates__plate">',b,i)+scene(A[i])
   +'<div class="aq-site-plates__text"><p class="aq-site-plates__at"><span class="aq-site-plates__i" aria-hidden="true">'+(i<9?'0':'')+(i+1)+'</span>'+(place?'<span>'+tx(place)+'</span>':'')+'</p>'
   +'<h3 class="aq-site-plates__t">'+kh+'</h3><dl class="aq-site-plates__dl">'+dl+'</dl></div></li>'}).join('');
 return sec(H+wFold(b,R.length,'<ol class="aq-site-plates">'+li+'</ol>',b.fold_noun||'rows'),'aq-site-plates-sec')};
})();
