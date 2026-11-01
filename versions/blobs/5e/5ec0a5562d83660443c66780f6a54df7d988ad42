/* Look "hire-path" -> HirePath (design-system/components/HirePath): the steps into a role as one path walked left to
   right. A single track runs across the section; each step stands on it as a huge light outline numeral (a gate),
   with the step's name and line under it. Where a step names the work it tests (the practical interview), its
   exercises are drawn as a row of line icons under the text, one per exercise. The track ends past the last step.
   Fields (a steps block): h, intro, items [{t, d, icons}]. icons (optional): line icon names (Icon set) drawn under
   the step, in the order the step's text names them. Phones: the track runs down the left edge. */
LOOKS['hire-path']=function(b,H){var I=b.items||[],num=function(i){return (i<9?'0':'')+(i+1)};
 var li=I.map(function(it,i){var ic=(it.icons||[]).filter(isIcon);
  return '<li class="aq-hire-path__step" style="--i:'+i+'"><span class="aq-hire-path__gate" aria-hidden="true"><span class="aq-hire-path__num">'+num(i)+'</span><span class="aq-hire-path__node"></span></span>'
   +'<h3 class="aq-hire-path__t">'+tx(it.t)+'</h3>'+(it.d?'<p class="aq-hire-path__d">'+tx(it.d)+'</p>':'')
   +(ic.length?'<p class="aq-hire-path__icons" aria-hidden="true">'+ic.map(function(n){return '<span class="aq-hire-path__ic">'+wIcon(n)+'</span>'}).join('')+'</p>':'')+'</li>'}).join('');
 return sec(H+'<div class="aq-hire-path" style="--n:'+I.length+'"><span class="aq-hire-path__track" aria-hidden="true"><span class="aq-hire-path__water"></span></span>'
  +'<ol class="aq-hire-path__steps" role="list">'+li+'</ol></div>','aq-hire-path-sec')};
