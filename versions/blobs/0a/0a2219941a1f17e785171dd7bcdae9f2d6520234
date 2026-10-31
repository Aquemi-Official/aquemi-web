/* EnquiryForm pre-set: tick the options named by the linking button's intent (WINTENT) and show the conditional fields they open,
   with the same cascade rule as the change handler below (a tick inside a hidden field does not count). Sets f._show and f._on. */
function wPreset(fs){var pre=WINTENT?WINTENT.split('|'):[];
 function ticks(f){return f._show&&(f.kind==='radio'||f.kind==='checkbox-group')?(f.options||[]).filter(function(o){return pre.indexOf(o)>=0}).slice(0,f.kind==='radio'?1:99):[]}
 fs.forEach(function(f){f._show=!f.when});
 for(var k=0;k<3&&pre.length;k++){var on=[];fs.forEach(function(f){on=on.concat(ticks(f))});fs.forEach(function(f){if(f.when)f._show=f.when.split('|').some(function(v){return on.indexOf(v)>=0})})}
 fs.forEach(function(f){f._on=ticks(f)})}
/* EnquiryForm fields. ref is the data-sheet item number ("1.3"), shown before the label and hidden from screen readers. */
function wSlug(s){return String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
function wField(f,i,ref){var id='wf'+(f._n==null?i:f._n),nm=wSlug(f.label),req=f.required?' required':'',hid=id+'_help',
 when=f.when?' data-when="'+e(f.when)+'"'+(f._show?'':' hidden'):'',
 num=ref?'<span class="aq-form__ref" aria-hidden="true">'+e(ref)+'</span>':'',opt=f.required?'':' <span class="aq-field__optional">(optional)</span>',
 lab='<label class="aq-field__label" for="'+id+'">'+num+tx(f.label)+opt+'</label>',
 help=f.help?'<p class="aq-field__help" id="'+hid+'">'+tx(f.help)+'</p>':'',desc=f.help?' aria-describedby="'+hid+'"':'',inp;
 if(f.kind==='select')inp='<select class="aq-field__input" id="'+id+'" name="'+nm+'"'+req+desc+'>'+'<option value="">Choose…</option>'+(f.options||[]).map(function(o){return '<option>'+e(o)+'</option>'}).join('')+'</select>';
 else if(f.kind==='textarea')inp='<textarea class="aq-field__input" id="'+id+'" name="'+nm+'"'+req+desc+'></textarea>';
 else if(f.kind==='checkbox-group'||f.kind==='radio')return '<fieldset class="aq-fieldset aq-field aq-form__full"'+when+desc+'><legend class="aq-field__label">'+num+tx(f.label)+opt+'</legend><div class="aq-checks">'+(f.options||[]).map(function(o,j){return '<label><input type="'+(f.kind==='radio'?'radio':'checkbox')+'" id="'+id+'_'+j+'" name="'+nm+'" value="'+e(o)+'"'+(f._on&&f._on.indexOf(o)>=0?' checked':'')+'> '+e(o)+'</label>'}).join('')+'</div>'+help+'</fieldset>';
 else if(f.kind==='file')inp='<input class="aq-field__file" id="'+id+'" name="'+nm+'" type="file" multiple accept="'+e(f.accept||'.pdf,.docx,.xlsx,.csv,.png,.jpg')+'"'+desc+'>';
 else inp=f.unit?'<div class="aq-field__suffix"><input class="aq-field__input" id="'+id+'" name="'+nm+'" inputmode="numeric"'+req+desc+'><span class="aq-field__unit">'+e(f.unit)+'</span></div>':'<input class="aq-field__input" id="'+id+'" name="'+nm+'" type="'+(f.kind==='email'?'email':f.kind==='tel'?'tel':'text')+'"'+(f.kind==='email'?' autocomplete="email"':f.kind==='tel'?' autocomplete="tel"':'')+req+desc+'>';
 return '<div class="aq-field'+(f.kind==='textarea'||f.kind==='file'?' aq-form__full':'')+'"'+when+'>'+lab+inp+help+'</div>'}
/* EnquiryForm in steps: each step is one numbered sheet section (Step 1 = 1.0), with a progress list, Back and Continue */
function wFormSteps(b){var n=0,req=0,S=b.steps,k=S.length;S.forEach(function(s){(s.fields||[]).forEach(function(fd){fd._n=n++;if(fd.required)req++})});
 return '<form class="aq-form aq-form--steps wform" novalidate>'
  +'<p class="aq-form__title"><span>Data sheet</span><span>'+k+' steps · '+req+' required</span></p>'
  +'<ol class="aq-form__progress">'+S.map(function(s,i){return '<li'+(i?'':' aria-current="step"')+'>'+tx(s.title)+'</li>'}).join('')+'</ol>'
  +S.map(function(s,i){return '<fieldset class="aq-form__section aq-form__step" data-step="'+i+'"'+(i?' hidden':'')+'><legend class="aq-form__legend"><span class="aq-form__num">'+(i+1)+'.0</span> Step '+(i+1)+' of '+k+': '+tx(s.title)+'</legend>'
   +'<div class="aq-form__grid">'+(s.intro?'<p class="aq-small aq-form__full">'+tx(s.intro)+'</p>':'')+(s.fields||[]).map(function(fd,j){return wField(fd,fd._n,(i+1)+'.'+(j+1))}).join('')+'</div>'
   +'<div class="aq-form__actions">'+(i?'<button class="aq-btn aq-btn--secondary" type="button" data-step-go="'+(i-1)+'">Back</button>':'')+(i<k-1?'<button class="aq-btn aq-btn--primary" type="button" data-step-go="'+(i+1)+'">'+tx(s.next||'Continue')+' <span class="aq-btn__arrow">→</span></button>':'<button class="aq-btn aq-btn--primary aq-form__submit" type="submit">'+tx(b.submit||'Send')+'</button>')+'</div>'
   +(i===k-1&&b.note?'<p class="aq-small aq-form__note">'+tx(b.note)+'</p>':'')+(i===k-1?'<span class="aq-small wform-msg" role="status"></span>':'')+'</fieldset>'}).join('')
  +'<div class="aq-form__strip" aria-hidden="true"><span>Rev. draft</span><span>'+n+' fields</span><span>Sheet 1 of 1</span></div></form>'}
/* Conditional fields: data-when="A|B" shows the field while any listed option is ticked. Ticks inside a hidden field do not count,
   so a follow-up question disappears with its parent (three passes cover two levels of nesting). */
document.addEventListener('change',function(ev){var fm=ev.target.closest('form');if(!fm)return;var ws=fm.querySelectorAll('[data-when]');
 for(var k=0;k<3;k++){var on=[].filter.call(fm.querySelectorAll('input:checked'),function(x){var w=x.closest('[data-when]');return !w||!w.hidden}).map(function(x){return x.value});
  ws.forEach(function(w){w.hidden=!w.dataset.when.split('|').some(function(v){return on.indexOf(v)>=0})})}});
