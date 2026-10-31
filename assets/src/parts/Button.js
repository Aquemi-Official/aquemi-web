/* Button: the hero's primary and secondary links (kind "link"), the closing and the contact routes all use it.
   link: a page id, "page#anchor" (opens that page at the block with that anchor; page.js) or "#anchor" (scrolls to that
   block on this page). intent (optional): option labels, "|"-separated, that the linked page's EnquiryForm ticks on
   arrival (data-intent); an in-page "#anchor" link carries none. */
function wBtn(label,link,kind,intent){var j=link&&link.charAt(0)==='#';return '<a class="aq-btn aq-btn--'+(kind||'primary')+'" href="#'+e(j?WP:(link||'contact-proposal'))+'" '+(j?'data-jump="'+e(link.slice(1)):'data-wp="'+e(link||'contact-proposal'))+'"'+(intent&&!j?' data-intent="'+e(intent)+'"':'')+'>'+tx(label)+(kind==='secondary'?'':' <span class="aq-btn__arrow">→</span>')+'</a>'}
