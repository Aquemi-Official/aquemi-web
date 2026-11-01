/* Look "site-tiles" -> SiteTiles (design-system/components/SiteTiles): a short grid of what changes for a site, set as
   a Swiss row of tiles, each opened by a small flat figure plate that draws the change instead of naming it: a
   pressure gauge read at the test (gauge), a registration stamp's imprint (stamp), a year of feed temperature with
   the winter dip (softener: the pretreatment sized for it), a route from a service base to the site (wrench). Under
   the plate, the number large and light, the title, the line and the link.
   Fields (a grid block): h, intro, items [{t, d, link, icon, fig}]. fig (optional): gauge, stamp, season, route;
   default from icon (gauge, stamp, softener -> season, wrench -> route), else the item's line icon as a Spot. */
(function(){
function S(inner){return '<svg class="aq-site-tiles__svg" viewBox="0 0 240 120" aria-hidden="true" focusable="false">'+inner+'</svg>'}
function P(d,c){return '<path class="aq-site-tiles'+'__'+(c||'ln')+'" d="'+d+'"/>'}
function C(x,y,r,c){return '<circle class="aq-site-tiles'+'__'+(c||'ln')+'" cx="'+x+'" cy="'+y+'" r="'+r+'"/>'}
var ST_FIG={
 gauge:function(){var t='';for(var k=0;k<=10;k++){var a=Math.PI*(1.15-k*0.13),r1=44,r2=k%5?39:35;t+='M'+(120+r1*Math.cos(a)).toFixed(1)+' '+(78-r1*Math.sin(a)).toFixed(1)+'L'+(120+r2*Math.cos(a)).toFixed(1)+' '+(78-r2*Math.sin(a)).toFixed(1)}
  return C(120,78,52)+P(t,'thin')+'<g class="aq-site-tiles__needle">'+P('M120 78L148 52','flow')+'</g>'+C(120,78,4,'dot')+P('M120 130V112','ln')},
 stamp:function(){return '<g class="aq-site-tiles__imprint">'+C(120,60,44)+C(120,60,36,'thin')+P('M96 62L112 78L146 42','flow')+'</g>'+P('M28 108H212','thin')},
 season:function(){var d='M16 92',i;for(i=1;i<=48;i++){var x=16+i*4.4,y=62+30*Math.cos((i/48)*Math.PI*2);d+='L'+x.toFixed(1)+' '+y.toFixed(1)}
  var m='';for(i=0;i<=12;i++)m+='M'+(16+i*17.6).toFixed(1)+' 104V'+(i%3?100:96);
  return P('M16 104H228','ln')+P(m,'thin')+P('M16 74H228','limit')+P(d,'flow')+P('M16 30V104','thin')},
 route:function(){return P('M30 88C70 88 70 40 112 40S160 70 206 34','hid')+P('M30 88C70 88 70 40 112 40S160 70 206 34','flow')+'<rect class="aq-site-tiles__dot" x="22" y="80" width="16" height="16"/>'+C(206,34,9)+C(206,34,3,'dot')}
};
var ST_AUTO={gauge:'gauge',stamp:'stamp',softener:'season',wrench:'route'};
LOOKS['site-tiles']=function(b,H){var I=b.items||[],num=function(i){return (i<9?'0':'')+(i+1)};
 var li=I.map(function(it,i){var f=ST_FIG[it.fig]?it.fig:ST_AUTO[it.icon],go=it.link&&wp(it.link);
  var fig=f?S(ST_FIG[f]()):(isIcon(it.icon)?wSpot(it.icon,'m','aq-site-tiles__spot'):'');
  return '<li class="aq-site-tiles__tile'+(f?' is-'+f:'')+'" style="--i:'+i+'"><div class="aq-site-tiles__plate" aria-hidden="true">'+fig+'</div>'
   +'<span class="aq-site-tiles__n" aria-hidden="true"><span>'+num(i)+'</span></span><h3 class="aq-site-tiles__t">'+tx(it.t)+'</h3>'
   +(it.d?'<p class="aq-site-tiles__d">'+tx(it.d)+'</p>':'')
   +(go?'<p class="aq-site-tiles__go"><a href="#'+e(it.link)+'" data-wp="'+e(it.link)+'">'+tx(it.link_label||wlabel(it.link))+'</a></p>':'')+'</li>'}).join('');
 return sec(H+'<ol class="aq-site-tiles" role="list" style="--n:'+I.length+'">'+li+'</ol>','aq-site-tiles-sec')};
})();
