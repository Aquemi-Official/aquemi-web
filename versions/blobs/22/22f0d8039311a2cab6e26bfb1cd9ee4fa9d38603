/* Look "tank-tiles" -> TankTiles (design-system/components/TankTiles): fabrication parameters split across a Swiss
   grid of square tiles in a navy and limestone checkerboard (pass 9b concept sys-storage.3). The section head sits in
   the first navy tile; every row is one tile led by a huge light slash numeral, then the parameter, the design value
   and the basis under a hairline (and the row's link); one steel-blue blueprint tile, the storage tank cut in half
   (hatched wall, level, spray ball wetting the head, vent filter, legs, H and ID dimensions), anchors the top row.
   The fold (fold, fold_noun) applies on phones only: desktop shows every tile, so the grid stays whole.
   Fields (a spec block): h, caption (eyebrow), intro, rows [{p, v, m, link, link_label}], fold, fold_noun. */
(function(){
var K='aq-tank-tiles';function P(d,c,x){return '<path class="'+K+'__'+c+'"'+(x||'')+' d="'+d+'"/>'}
var uid=0;
function tank(){var id='tt'+(++uid),OUT='M92 84C92 60 116 50 150 50C184 50 208 60 208 84V226C208 242 184 250 150 250C116 250 92 242 92 226Z',
 IN='M98 86C98 66 120 57 150 57C180 57 202 66 202 86V224C202 237 180 244 150 244C120 244 98 237 98 224Z';
 var g='<defs><pattern id="'+id+'h" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path class="'+K+'__hl" d="M0 0V6"/></pattern><clipPath id="'+id+'c"><path d="'+IN+'"/></clipPath></defs>';
 g+=P(OUT+IN,'wall',' fill="url(#'+id+'h)" fill-rule="evenodd"')+P(OUT,'ln')+P(IN,'ln');
 var w='';for(var y=142;y<=240;y+=12)w+=P('M98 '+y+'H202','water');
 g+='<g class="'+K+'__water" clip-path="url(#'+id+'c)">'+P('M98 130H202','level')+w+'</g>';
 g+=P('M146 30V92M154 30V92','ln')+'<circle class="'+K+'__eq" cx="150" cy="98" r="6"/>'
  +'<g class="'+K+'__jets">'+[[104,112],[108,132],[126,140],[150,142],[174,140],[192,132],[196,112],[118,86],[182,86]].map(function(q){return P('M150 98L'+q[0]+' '+q[1],'jet')}).join('')+'</g>';
 g+=P('M176 56V36M184 56V36','ln')+P('M170 14H190V36H170Z','eq')+P('M175 18V32M180 18V32M185 18V32','thin');
 g+=P('M108 238V272M116 242V272M100 272H124M184 242V272M192 238V272M176 272H200','ln')+P('M146 248V262H250M154 248V256H250','ln')+P('M30 272H270','thin');
 g+=P('M150 50H60M150 250H60M66 50V250M61 55L71 45M61 255L71 245','dim')+P('M98 190H202M93 195L103 185M197 195L207 185','dim')
  +'<text class="'+K+'__tx" x="150" y="184">ID</text><text class="'+K+'__tx" x="56" y="154" transform="rotate(-90 56 154)">H</text>';
 return '<svg class="'+K+'__svg" viewBox="0 0 300 300" aria-hidden="true" focusable="false">'+g+'</svg>'}
LOOKS['tank-tiles']=function(b,H){
 var R=b.rows||[],head=wSecHead({eyebrow:b.caption,h:b.h,intro:b.intro});
 /* grid cells in reading order: the head takes cell 0, the blueprint cell 2; rows fill the rest */
 var cells=[],c=0;R.forEach(function(){while(c===0||c===2)c++;cells.push(c++)});
 var tiles=R.map(function(r,i){var cc=cells[i],tone=((Math.floor(cc/4)+cc%4)%2)?'is-stone':'is-navy',n=(i<9?'0':'')+(i+1);
  var lk=r.link&&wp(r.link)?'<a class="'+K+'__link" href="#'+e(r.link)+'" data-wp="'+e(r.link)+'">'+tx(r.link_label||wlabel(r.link))+'</a>':'';
  return fli('<li class="'+K+'__tile '+tone+'">'
   +'<p class="'+K+'__n" aria-hidden="true">'+n+'<span class="'+K+'__sl">/</span></p>'
   +'<h3 class="'+K+'__p">'+tx(r.p)+'</h3><p class="'+K+'__v">'+tx(r.v)+'</p>'
   +(r.m||lk?'<p class="'+K+'__m">'+(r.m?'<span>'+tx(r.m)+'</span>':'')+lk+'</p>':'')+'</li>',b,i)}).join('');
 var grid='<div class="'+K+'"><div class="'+K+'__head">'+head+'</div><div class="'+K+'__bp" aria-hidden="true">'+tank()+'<span class="'+K+'__bpt">'+tx(b.caption||'')+'</span></div>'
  +'<ol class="'+K+'__list" role="list">'+tiles+'</ol></div>';
 return sec(wFold(b,R.length,grid,b.fold_noun||'parameters'),K+'-sec')};
})();
