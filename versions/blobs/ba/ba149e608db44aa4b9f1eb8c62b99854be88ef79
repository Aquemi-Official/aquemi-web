/* BackToTop: a floating button that appears once the reader is a screen and a half down the page and returns them to
   the top. It moves focus to the logo link, so keyboard and screen-reader users land at the start of the page too.
   Smooth scroll unless reduced motion is set. One scroll listener for the whole site; each render writes a fresh button. */
function wBackToTop(){return '<button class="aq-back-to-top" type="button" id="wtop"><span class="aq-back-to-top__arrow" aria-hidden="true">↑</span><span class="aq-back-to-top__label">Back to top</span></button>'}
if(typeof document!=='undefined'){
 var topSync=function(){var b=document.getElementById('wtop');if(b)b.classList.toggle('is-shown',window.scrollY>window.innerHeight*1.5)};
 window.addEventListener('scroll',topSync,{passive:true});window.addEventListener('resize',topSync);
 document.addEventListener('click',function(ev){var b=ev.target.closest&&ev.target.closest('#wtop');if(!b)return;
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({top:0,behavior:reduce?'auto':'smooth'});
  var home=document.querySelector('.aq-nav__home');if(home)home.focus({preventScroll:true});b.classList.remove('is-shown')});
}
