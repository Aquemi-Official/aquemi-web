/* Button */
function wBtn(label,link,kind){return '<a class="aq-btn aq-btn--'+(kind||'primary')+'" href="#'+e(link||'contact-proposal')+'" data-wp="'+e(link||'contact-proposal')+'">'+tx(label)+(kind==='secondary'?'':' <span class="aq-btn__arrow">→</span>')+'</a>'}
