/* Button */
function wBtn(label,link,kind){var j=link&&link.charAt(0)==='#';return '<a class="aq-btn aq-btn--'+(kind||'primary')+'" href="#'+e(j?WP:(link||'contact-proposal'))+'" '+(j?'data-jump="'+e(link.slice(1)):'data-wp="'+e(link||'contact-proposal'))+'">'+tx(label)+(kind==='secondary'?'':' <span class="aq-btn__arrow">→</span>')+'</a>'}
