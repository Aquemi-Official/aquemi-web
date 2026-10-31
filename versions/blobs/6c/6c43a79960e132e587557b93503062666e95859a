/* Block "grid" -> LinkGrid: choices as rows of the shared list grammar (.aq-rows): index, title, one line, optional tag.
   Fields: h, intro (section head), items [{t, d, link, tag}]. An item that links to a page is one <a>; one whose
   link page has a drawing in ART (parts/Hero.js) shows it small at the row's end on desktop (aria-hidden, hidden on phones). */
BLOCKS['grid']=function(b,H){return sec(H+'<ol class="aq-rows aq-linkgrid">'+(b.items||[]).map(function(it,i){
 return wRow(i,it.t,it.d,it.link,it.link,it.tag)}).join('')+'</ol>');};
