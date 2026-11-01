/* Look "clause-crosswalk" -> ClauseCrosswalk (design-system/components/ClauseCrosswalk): a table of requirements met
   against two regulations' clauses (requirement, how we meet it, clause column A, clause column B), set as an
   editorial crosswalk. The requirements run down the middle, large, with how we meet them beside; each regulation is a
   spine on its side, its name set big and vertical along the outer edge and every clause it cites as a mono chip in
   clause order; a wire runs from each requirement to each of its clauses on both sides, so a clause cited twice draws
   two wires and the shape of the mapping reads at a glance. Hover a requirement to light its wires and clauses, or a
   clause to light every requirement that cites it. Each row also carries its clause references as text (visually
   hidden on desktop, shown on phones), so nothing depends on the wires.
   Fields: h, intro, cols [requirement, how, regulation A, regulation B], rows [[t, how, clausesA, clausesB]] (clauses
   split on "," and ";", a "(g)" after "11.10(d)" reads 11.10(g)), fold (phones only), fold_noun. */
function cwTok(c){var out=[],base='';String(c&&typeof c==='object'?c.t:c||'').split(/\s*[,;]\s*/).forEach(function(t){t=t.trim();if(!t)return;
  if(t.charAt(0)==='('&&base)t=base+t;else base=t.replace(/\(.*$/,'');out.push(t)});return out}
function cwKey(t){return (String(t).match(/\d+|[a-z]/gi)||[]).map(function(x){return /\d/.test(x)?('0000'+x).slice(-5):x})}
function cwCmp(a,b){var A=cwKey(a),B=cwKey(b);for(var i=0;i<Math.max(A.length,B.length);i++){if(A[i]===B[i])continue;if(A[i]==null)return -1;if(B[i]==null)return 1;return A[i]<B[i]?-1:1}return 0}
LOOKS['clause-crosswalk']=function(b,H){
 var C=b.cols||[],R=b.rows||[],N=R.length;if(N<1||C.length<4)return BLOCKS.table(b,H);
 var sides=[2,3].map(function(ci){var all={};R.forEach(function(r,i){cwTok(r[ci]).forEach(function(t){(all[t]=all[t]||[]).push(i)})});
  var ks=Object.keys(all).sort(cwCmp);return {ci:ci,keys:ks,rows:all}});
 var Y=1000,ry=function(i){return ((i+0.5)/N*Y).toFixed(1)};
 function spine(s,k){var M=s.keys.length;
  var chips=s.keys.map(function(t,j){return '<li class="aq-clause-crosswalk__node" data-cwn="'+k+j+'" data-rows="'+s.rows[t].join(' ')+'">'+tx(t)+'</li>'}).join('');
  return '<div class="aq-clause-crosswalk__spine aq-clause-crosswalk__spine--'+k+'" aria-hidden="true"><p class="aq-clause-crosswalk__reg">'+tx(C[s.ci])+'</p><ol class="aq-clause-crosswalk__nodes">'+chips+'</ol></div>'}
 function wires(s,k){var M=s.keys.length,d='';
  s.keys.forEach(function(t,j){var ny=((j+0.5)/M*Y).toFixed(1);s.rows[t].forEach(function(i){var a=k==='a'?'M0 '+ny+'C55 '+ny+' 45 '+ry(i)+' 100 '+ry(i):'M0 '+ry(i)+'C55 '+ry(i)+' 45 '+ny+' 100 '+ny;
   d+='<path class="aq-clause-crosswalk__wire" data-cw="'+i+'" data-cwn="'+k+j+'" d="'+a+'"/>'})});
  return '<svg class="aq-clause-crosswalk__wires aq-clause-crosswalk__wires--'+k+'" viewBox="0 0 100 '+Y+'" preserveAspectRatio="none" aria-hidden="true" focusable="false">'+d+'</svg>'}
 var rows=R.map(function(r,i){var refs=sides.map(function(s){var t=cwTok(r[s.ci]);return t.length?'<span class="aq-clause-crosswalk__ref"><span class="aq-clause-crosswalk__rk">'+tx(C[s.ci])+'</span> '+t.map(function(x){return '<span class="aq-clause-crosswalk__chip">'+tx(x)+'</span>'}).join(' ')+'</span>':''}).join('');
  return fli('<li class="aq-clause-crosswalk__row" data-cw="'+i+'">'+idx(i)+'<h3 class="aq-clause-crosswalk__t">'+tcell(r[0])+'</h3><p class="aq-clause-crosswalk__how">'+tcell(r[1])+'</p><p class="aq-clause-crosswalk__refs">'+refs+'</p></li>',b,i)}).join('');
 var head='<div class="aq-clause-crosswalk__heads" aria-hidden="true"><span>'+tx(C[0])+'</span><span>'+tx(C[1])+'</span></div>';
 var inner='<div class="aq-clause-crosswalk" style="--cw-n:'+N+'">'+spine(sides[0],'a')+wires(sides[0],'a')
  +head+'<div class="aq-clause-crosswalk__mid"><ol class="aq-clause-crosswalk__rows" role="list">'+rows+'</ol></div>'+wires(sides[1],'b')+spine(sides[1],'b')+'</div>';
 return sec(H+wFold(b,N,inner,b.fold_noun||'requirements'),'aq-clause-crosswalk-sec')};
(function(){
 function set(root,rows,nodes){var on=rows||nodes;root.classList.toggle('has-hot',!!on);
  [].forEach.call(root.querySelectorAll('[data-cw],[data-cwn]'),function(el){var r=el.getAttribute('data-cw'),n=el.getAttribute('data-cwn'),rs=el.getAttribute('data-rows');
   var hot=!!on&&((rows&&r!=null&&rows.indexOf(r)>=0)||(nodes&&n!=null&&nodes.indexOf(n)>=0)||(rows&&rs&&rs.split(' ').some(function(x){return rows.indexOf(x)>=0})));el.classList.toggle('is-hot',hot)})}
 document.addEventListener('mouseover',function(ev){var root=ev.target.closest&&ev.target.closest('.aq-clause-crosswalk');if(!root)return;
  var row=ev.target.closest('.aq-clause-crosswalk__row'),node=ev.target.closest('.aq-clause-crosswalk__node');
  if(row)set(root,[row.getAttribute('data-cw')],null);else if(node)set(root,node.getAttribute('data-rows').split(' '),[node.getAttribute('data-cwn')]);else set(root,null,null)});
 document.addEventListener('mouseout',function(ev){var root=ev.target.closest&&ev.target.closest('.aq-clause-crosswalk');if(root&&!root.contains(ev.relatedTarget))set(root,null,null)});
})();
