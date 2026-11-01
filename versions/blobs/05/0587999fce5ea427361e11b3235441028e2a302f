/* Look "spool-dossier" -> SpoolDossier (design-system/components/SpoolDossier): a dossier set beside the as-built
   isometric it indexes. On a limestone sheet: the title huge and light at the top left, an isometric polypropylene
   spool at the right (IsoKit pipes: a run with a tee and a branch, two bends, flanged ends, each joint dotted and
   numbered J-01 …, each length tagged with its lot L1 …, dimension lines without figures), and the dossier's parts in
   a hairline grid underneath. Pointing at (or focusing) a part shows what it records on the spool: joint records light
   the joints and their numbers, the material log lights each length and its lot tag, the procedure and welder
   qualifications ring every joint, the test and cleaning certificates run the water through the spool to the test cap.
   Fields (a docs block): h, intro, items [{t, d, key, link, intent, layer}]. layer (optional): joints, lots, quals,
   test (default from the part's words). Phones: title, spool, then the parts in one column. */
LOOKS['spool-dossier']=(function(){
 var R=7;
 function pick(t){t=String(t||'');return /pressure|clean|rinse|test/i.test(t)?'test':/joint record|joint map/i.test(t)?'joints':/procedure|welder|qualif/i.test(t)?'quals':/material|lot|certif/i.test(t)?'lots':''}
 function spool(){var o=[],J=[[0,0,40],[80,0,40],[120,0,40],[100,0,22],[200,-60,40],[200,-120,110],[100,60,-20]],JO=[[-14,-10,1],[-12,-16,1],[12,-18,0],[-16,10,1],[14,-14,0],[16,-4,0],[-14,16,1]];
  /* lengths, back to front: the riser and the far run, the main run, the tee, the branch */
  var L=[
   {id:'L3',p:[[200,-60,40],[200,-120,40],[200,-120,110]],tag:[200,-120,66],o:[14,-4]},
   {id:'L2',p:[[120,0,40],[200,0,40],[200,-60,40]],tag:[160,0,40]},
   {id:'L1',p:[[0,0,40],[80,0,40]],tag:[40,0,40]},
   {id:'L4',p:[[100,0,22],[100,0,-20],[100,60,-20]],tag:[100,34,-20],o:[12,16]}];
  L.forEach(function(l,i){var f=i===0?'end':i===2?'start':i===3?'end':false;
   o.push(isoPipe(l.p,{r:R,bend:R*3,flanges:f?'ends':false,caps:false,id:'spool',cls:'aq-spool-dossier__len'}).toString().replace('class="aq-iso__pipe aq-spool-dossier__len"','class="aq-iso__pipe aq-spool-dossier__len" data-lot="'+l.id+'"'));
   if(i===1)o.push(isoPipe([[78,0,40],[122,0,40]],{r:R+2,caps:true,flow:false,cls:'aq-spool-dossier__fit'})+isoPipe([[100,0,40],[100,0,20]],{r:R+2,caps:'end',flow:false,cls:'aq-spool-dossier__fit'}))});
  /* the test cap and its gauge on the riser's end */
  o.push(isoPart('gauge',200,-120,124,1.3,{value:0.55,id:'cap'}));
  /* dimensions, no figures */
  o.push(isoDim([0,0,40],[80,0,40],{off:[0,34,0]}),isoDim([120,0,40],[200,0,40],{off:[0,34,0]}),isoDim([200,-60,40],[200,-120,40],{off:[34,0,0]}));
  /* lot tags and joints */
  var tags=L.map(function(l){var p=isoP(l.tag),o=l.o||[14,-12];return '<g class="aq-spool-dossier__lot" data-lot="'+l.id+'"><text x="'+(p[0]+o[0]).toFixed(1)+'" y="'+(p[1]+o[1]).toFixed(1)+'"'+(l.end?' text-anchor="end"':'')+'>'+l.id+'</text></g>'}).join('');
  var js=J.map(function(q,i){var p=isoP(q),n='J-0'+(i+1),o=JO[i],lx=p[0]+o[0],ly=p[1]+o[1];
   return '<g class="aq-spool-dossier__j"><circle class="aq-spool-dossier__ring" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="13"/><circle class="aq-spool-dossier__dot" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="4"/>'
    +'<text x="'+lx.toFixed(1)+'" y="'+ly.toFixed(1)+'"'+(o[2]?' text-anchor="end"':'')+'>'+n+'</text></g>'}).join('');
  return o.join('')+tags+js}
 return function(b,H){var items=(b.items||[]).map(function(x){return typeof x==='string'?{t:x}:x}),n=items.length;
  var bx=isoBounds([[-10,0,40],[0,0,80],[200,-130,150],[210,-120,40],[100,70,-20],[100,0,-34],[0,40,40],[220,0,40]],30),W=Math.round(bx.w),Hh=Math.round(bx.h);
  var svg=isoSvg(W,Hh,spool(),'aq-iso--limestone aq-spool-dossier__svg',{origin:[-bx.x,-bx.y]});
  var li=items.map(function(x,i){var t=String(x.t||''),L=x.layer||pick(t),num=(i<9?'0':'')+(i+1);
   var name=x.link&&wp(x.link)?wlink(x.link,t,x.intent):tx(t);
   return fli('<li class="aq-spool-dossier__item'+(x.key?' is-key':'')+'"'+(L?' data-layer="'+L+'" tabindex="0"':'')+'>',b,i)
    +'<span class="aq-spool-dossier__n" aria-hidden="true">'+num+'</span>'
    +'<h3 class="aq-spool-dossier__t">'+name+'</h3>'+(x.d?'<p class="aq-spool-dossier__d">'+tx(x.d)+'</p>':'')+'</li>'}).join('');
  var more=b.link&&wp(b.link)?'<p class="aq-spool-dossier__more">'+wBtn(b.link_label||wlabel(b.link),b.link,'link',b.intent)+'</p>':'';
  return sec('<div class="aq-spool-dossier" data-theme="light"><div class="aq-spool-dossier__head">'+H+'</div>'
   +'<div class="aq-spool-dossier__fig">'+svg+'</div>'
   +'<div class="aq-spool-dossier__parts">'+wFold(b,n,'<ol class="aq-spool-dossier__list" role="list" style="--n:'+n+'">'+li+'</ol>',b.fold_noun||'documents')+more+'</div>'
   +'</div>','aq-band--limestone aq-spool-dossier-sec')}
})();
/* SpoolDossier: pointing at (or focusing) a part shows its layer on the spool; the last one stays shown.
   Ported from Subframe Motion "Hover image preview list" (project-index), MIT, (c) 2026 Subframe
   (kept: selection on pointer enter (mouse only) and on focus, the selection persisting after the pointer leaves, the
   active entry marked and the preview changing in 240 ms on cubic-bezier(.2,.85,.25,1), instant under reduced
   motion; replaced: the reel of stills with layers of the one drawing). */
(function(){function sel(it){var r=it.closest('.aq-spool-dossier'),L=it.getAttribute('data-layer');if(!r||!L)return;
 [].forEach.call(r.querySelectorAll('.aq-spool-dossier__item.is-on'),function(x){x.classList.remove('is-on')});it.classList.add('is-on');
 var f=r.querySelector('.aq-spool-dossier__fig');if(f)f.setAttribute('data-layer',L)}
 document.addEventListener('pointerover',function(ev){if(ev.pointerType!=='mouse')return;var it=ev.target.closest&&ev.target.closest('.aq-spool-dossier__item');if(it)sel(it)});
 document.addEventListener('focusin',function(ev){var it=ev.target.closest&&ev.target.closest('.aq-spool-dossier__item');if(it)sel(it)});
 document.addEventListener('click',function(ev){var it=ev.target.closest&&ev.target.closest('.aq-spool-dossier__item');if(it)sel(it)})})();
