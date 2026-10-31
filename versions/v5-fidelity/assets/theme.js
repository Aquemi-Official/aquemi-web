/* Theme switch: "" follows the system, "light" or "dark" sets data-theme on <html>. Remembered per browser. */
(function(){
var KEY='aquemi-theme';
function get(){try{return localStorage.getItem(KEY)||''}catch(x){return ''}}
function apply(v){if(v)document.documentElement.setAttribute('data-theme',v);else document.documentElement.removeAttribute('data-theme')}
apply(get());
window.AQTheme={bind:function(sel){if(!sel)return;sel.value=get();sel.onchange=function(){try{localStorage.setItem(KEY,sel.value)}catch(x){}apply(sel.value)}}};
})();
