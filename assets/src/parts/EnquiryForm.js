/* EnquiryForm fields */
function wField(f,i){var id='wf'+i,lab='<label class="aq-field__label" for="'+id+'">'+tx(f.label)+(f.required?'':' <span class="aq-field__optional">(optional)</span>')+'</label>',help=f.help?'<p class="aq-field__help">'+tx(f.help)+'</p>':'',inp;
 if(f.kind==='select')inp='<select class="aq-field__input" id="'+id+'">'+['Choose…'].concat(f.options||[]).map(function(o){return '<option>'+e(o)+'</option>'}).join('')+'</select>';
 else if(f.kind==='textarea')inp='<textarea class="aq-field__input" id="'+id+'"></textarea>';
 else if(f.kind==='checkbox-group')return '<fieldset class="aq-fieldset aq-field aq-form__full"><legend class="aq-field__label">'+tx(f.label)+'</legend><div class="aq-checks">'+(f.options||[]).map(function(o,j){return '<label><input type="checkbox" id="'+id+'_'+j+'"> '+e(o)+'</label>'}).join('')+'</div>'+help+'</fieldset>';
 else inp=f.unit?'<div class="aq-field__suffix"><input class="aq-field__input" id="'+id+'" inputmode="numeric"><span class="aq-field__unit">'+e(f.unit)+'</span></div>':'<input class="aq-field__input" id="'+id+'" type="'+(f.kind==='email'?'email':f.kind==='tel'?'tel':'text')+'">';
 return '<div class="aq-field'+(f.kind==='textarea'?' aq-form__full':'')+'">'+lab+inp+help+'</div>'}
