/* EnquiryForm fields. ref is the data-sheet item number ("1.3"), shown before the label and hidden from screen readers. */
function wSlug(s){return String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
function wField(f,i,ref){var id='wf'+i,nm=wSlug(f.label),req=f.required?' required':'',hid=id+'_help',
 num=ref?'<span class="aq-form__ref" aria-hidden="true">'+e(ref)+'</span>':'',
 lab='<label class="aq-field__label" for="'+id+'">'+num+tx(f.label)+(f.required?'':' <span class="aq-field__optional">(optional)</span>')+'</label>',
 help=f.help?'<p class="aq-field__help" id="'+hid+'">'+tx(f.help)+'</p>':'',desc=f.help?' aria-describedby="'+hid+'"':'',inp;
 if(f.kind==='select')inp='<select class="aq-field__input" id="'+id+'" name="'+nm+'"'+req+desc+'>'+'<option value="">Choose…</option>'+(f.options||[]).map(function(o){return '<option>'+e(o)+'</option>'}).join('')+'</select>';
 else if(f.kind==='textarea')inp='<textarea class="aq-field__input" id="'+id+'" name="'+nm+'"'+req+desc+'></textarea>';
 else if(f.kind==='checkbox-group')return '<fieldset class="aq-fieldset aq-field aq-form__full"'+(f.help?' aria-describedby="'+hid+'"':'')+'><legend class="aq-field__label">'+num+tx(f.label)+(f.required?'':' <span class="aq-field__optional">(optional)</span>')+'</legend><div class="aq-checks">'+(f.options||[]).map(function(o,j){return '<label><input type="checkbox" id="'+id+'_'+j+'" name="'+nm+'" value="'+e(o)+'"> '+e(o)+'</label>'}).join('')+'</div>'+help+'</fieldset>';
 else inp=f.unit?'<div class="aq-field__suffix"><input class="aq-field__input" id="'+id+'" name="'+nm+'" inputmode="numeric"'+req+desc+'><span class="aq-field__unit">'+e(f.unit)+'</span></div>':'<input class="aq-field__input" id="'+id+'" name="'+nm+'" type="'+(f.kind==='email'?'email':f.kind==='tel'?'tel':'text')+'"'+(f.kind==='email'?' autocomplete="email"':f.kind==='tel'?' autocomplete="tel"':'')+req+desc+'>';
 return '<div class="aq-field'+(f.kind==='textarea'?' aq-form__full':'')+'">'+lab+inp+help+'</div>'}
