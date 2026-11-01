/* Look "project-run" -> ProjectRun (design-system/components/ProjectRun): ordered steps told as one run you scroll
   along. Desktop with motion: the steps scroll past on the left, large, while a sticky stage on the right holds the
   current step's drawing (the linked page's equipment illustration), its number set huge, and the run itself: a pipe
   along the bottom with a stop per step that the water fills as you scroll, lighting each stop it reaches.
   Without motion (no script, reduced motion) and on phones the same steps stack down a vertical run, each with its
   drawing beside it, so nothing depends on scrolling.
   Fields (a steps block): h, items [{t, d, link, art, label}]. art: an illustration id from ART (Hero.js); default
   the link's page when it has one. label: short stop name on the run (default t). */
LOOKS['project-run']=function(b,H){var I=b.items||[],n=I.length;
 function art(it){var a=it.art||wsplit(it.link||'')[0];return ART[a]?a:''}
 function pic(it,cls){var a=art(it);return a?'<span class="aq-illustration aq-illustration--ink '+cls+'" aria-hidden="true" style="'+artMask(a)+'"></span>':''}
 var num=function(i){return (i<9?'0':'')+(i+1)};
 var stage='<div class="aq-project-run__stage" aria-hidden="true">'
  +'<p class="aq-project-run__num"><span class="aq-project-run__cur">01</span><span class="aq-project-run__of">/ '+num(n-1)+'</span></p>'
  +'<div class="aq-project-run__arts">'+I.map(function(it,i){return pic(it,'aq-project-run__art'+(i?'':' is-on'))}).join('')+'</div>'
  +'<div class="aq-project-run__run"><span class="aq-project-run__pipe"><span class="aq-project-run__water"></span><span class="aq-project-run__drop"></span></span>'
  +I.map(function(it,i){return '<span class="aq-project-run__stop'+(i?'':' is-on')+'" style="--k:'+i+'"><i class="aq-project-run__dot"></i><span class="aq-project-run__lab">'+tx(it.label||it.t)+'</span></span>'}).join('')+'</div></div>';
 var steps=I.map(function(it,i){var go=it.link&&wp(it.link);
  return '<li class="aq-project-run__step'+(i?'':' is-on')+'" style="--k:'+i+'"><span class="aq-project-run__node" aria-hidden="true">'+num(i)+'</span>'
   +pic(it,'aq-project-run__pic')
   +'<div class="aq-project-run__text"><p class="aq-project-run__code" aria-hidden="true">'+num(i)+' / '+num(n-1)+'</p>'
   +'<h3 class="aq-project-run__t">'+(go?wlink(it.link,it.t):tx(it.t))+'</h3>'+(it.d?'<p class="aq-project-run__d">'+tx(it.d)+'</p>':'')+'</div></li>'}).join('');
 return sec(H+'<div class="aq-project-run" style="--n:'+n+'">'+stage+'<ol class="aq-project-run__steps">'+steps+'</ol></div>')};
