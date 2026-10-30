/* EnquiryForm pre-set: tick the options named by the linking button's intent (WINTENT) and show the conditional fields they open,
   with the same cascade rule as the change handler below (a tick inside a hidden field does not count). Sets f._show and f._on. */
function wPreset(fs){var pre=WINTENT?WINTENT.split('|'):[];
 function ticks(f){return f._show&&(f.kind==='radio'||f.kind==='checkbox-group')?(f.options||[]).filter(function(o){return pre.indexOf(o)>=0}).slice(0,f.kind==='radio'?1:99):[]}
 fs.forEach(function(f){f._show=!f.when});
 for(var k=0;k<3&&pre.length;k++){var on=[];fs.forEach(function(f){on=on.concat(ticks(f))});fs.forEach(function(f){if(f.when)f._show=f.when.split('|').some(function(v){return on.indexOf(v)>=0})})}
 fs.forEach(function(f){f._on=ticks(f)})}
/* EnquiryForm fields */
function wField(f,i){var id='wf'+(f._n==null?i:f._n),when=f.when?' data-when="'+e(f.when)+'"'+(f._show?'':' hidden'):'',lab='<label class="aq-field__label" for="'+id+'">'+tx(f.label)+(f.required?'':' <span class="aq-field__optional">(optional)</span>')+'</label>',help=f.help?'<p class="aq-field__help">'+tx(f.help)+'</p>':'',inp;
 if(f.kind==='select')inp='<select class="aq-field__input" id="'+id+'">'+['Choose…'].concat(f.options||[]).map(function(o){return '<option>'+e(o)+'</option>'}).join('')+'</select>';
 else if(f.kind==='textarea')inp='<textarea class="aq-field__input" id="'+id+'"></textarea>';
 else if(f.kind==='checkbox-group'||f.kind==='radio')return '<fieldset class="aq-fieldset aq-field aq-form__full"'+when+'><legend class="aq-field__label">'+tx(f.label)+(f.required?'':' <span class="aq-field__optional">(optional)</span>')+'</legend><div class="aq-checks">'+(f.options||[]).map(function(o,j){return '<label><input type="'+(f.kind==='radio'?'radio" name="'+id:'checkbox')+'" id="'+id+'_'+j+'" value="'+e(o)+'"'+(f._on&&f._on.indexOf(o)>=0?' checked':'')+'> '+e(o)+'</label>'}).join('')+'</div>'+help+'</fieldset>';
 else if(f.kind==='file')inp='<input class="aq-field__file" id="'+id+'" type="file" multiple accept="'+e(f.accept||'.pdf,.docx,.xlsx,.csv,.png,.jpg')+'">';
 else inp=f.unit?'<div class="aq-field__suffix"><input class="aq-field__input" id="'+id+'" inputmode="numeric"><span class="aq-field__unit">'+e(f.unit)+'</span></div>':'<input class="aq-field__input" id="'+id+'" type="'+(f.kind==='email'?'email':f.kind==='tel'?'tel':'text')+'">';
 return '<div class="aq-field'+(f.kind==='textarea'||f.kind==='file'?' aq-form__full':'')+'"'+when+'>'+lab+inp+help+'</div>'}
/* EnquiryForm in steps: one fieldset per step, a progress list, Back and Continue buttons */
function wFormSteps(b){var n=0,S=b.steps,k=S.length;S.forEach(function(s){(s.fields||[]).forEach(function(fd){fd._n=n++})});
 return '<form class="aq-form aq-form--steps wform" novalidate><ol class="aq-form__progress">'+S.map(function(s,i){return '<li'+(i?'':' aria-current="step"')+'>'+tx(s.title)+'</li>'}).join('')+'</ol>'+
  S.map(function(s,i){return '<fieldset class="aq-form__step" data-step="'+i+'"'+(i?' hidden':'')+'><legend class="aq-h3">Step '+(i+1)+' of '+k+': '+tx(s.title)+'</legend>'+(s.intro?'<p class="aq-small aq-form__full">'+tx(s.intro)+'</p>':'')+(s.fields||[]).map(wField).join('')+
   '<div class="aq-form__actions">'+(i?'<button class="aq-btn aq-btn--secondary" type="button" data-step-go="'+(i-1)+'">Back</button>':'')+(i<k-1?'<button class="aq-btn aq-btn--primary" type="button" data-step-go="'+(i+1)+'">'+tx(s.next||'Continue')+' <span class="aq-btn__arrow">→</span></button>':'<button class="aq-btn aq-btn--primary" type="submit">'+tx(b.submit||'Send')+'</button>')+'</div>'+
   (i===k-1&&b.note?'<p class="aq-small aq-form__full">'+tx(b.note)+'</p>':'')+(i===k-1?'<span class="aq-small wform-msg aq-form__full" role="status"></span>':'')+'</fieldset>'}).join('')+'</form>'}
/* Conditional fields: data-when="A|B" shows the field while any listed option is ticked. Ticks inside a hidden field do not count,
   so a follow-up question disappears with its parent (three passes cover two levels of nesting). */
document.addEventListener('change',function(ev){var fm=ev.target.closest('form');if(!fm)return;var ws=fm.querySelectorAll('[data-when]');
 for(var k=0;k<3;k++){var on=[].filter.call(fm.querySelectorAll('input:checked'),function(x){var w=x.closest('[data-when]');return !w||!w.hidden}).map(function(x){return x.value});
  ws.forEach(function(w){w.hidden=!w.dataset.when.split('|').some(function(v){return on.indexOf(v)>=0})})}});
