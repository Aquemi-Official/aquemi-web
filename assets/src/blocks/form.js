/* Block "form" -> EnquiryForm (data sheet) in SplitSection. With "steps", wFormSteps renders one numbered section per step.
   wPreset ticks the options named by the linking button's intent before rendering.
   Fields split into numbered sections: 1.0 the requirement, 2.0 the trailing run of contact fields (name, company, role,
   email, phone, site, contract). A field with "section": "<legend>" starts a new section; "sections": [..] renames them. */
BLOCKS['form']=function(b,H){
 wPreset(b.steps?[].concat.apply([],b.steps.map(function(s){return s.fields||[]})):(b.fields||[]));
 if(b.steps)return split(H,wFormSteps(b));
 var F=b.fields||[],cut=F.length,C=/\b(name|company|role|e-?mail|phone|site|contract)\b/i,G=[],req=0;
 while(cut>0&&F[cut-1].kind!=='textarea'&&F[cut-1].kind!=='checkbox-group'&&C.test(F[cut-1].label||''))cut--;
 if(cut===0)cut=F.length;
 var L1=F.some(function(f){return f.unit})?'System data':'Details',
  L2=F.slice(cut).some(function(f){return /\bsite\b/i.test(f.label||'')})?'Site and contact':'Contact';
 F.forEach(function(f,i){if(f.required)req++;var l=f.section||(i===0?L1:i===cut?L2:'');if(l||!G.length)G.push({l:l||L1,f:[]});G[G.length-1].f.push(i)});
 var body=G.map(function(g,gi){var n=gi+1;return '<fieldset class="aq-form__section"><legend class="aq-form__legend"><span class="aq-form__num">'+n+'.0</span> '+tx((b.sections&&b.sections[gi])||g.l)+'</legend><div class="aq-form__grid">'+g.f.map(function(i,k){return wField(F[i],i,n+'.'+(k+1))}).join('')+'</div></fieldset>'}).join('');
 return split(H,
  '<form class="aq-form wform" novalidate>'
  +'<p class="aq-form__title"><span>Data sheet</span><span>'+G.length+' section'+(G.length>1?'s':'')+' · '+req+' required</span></p>'
  +body
  +'<div class="aq-form__actions"><button class="aq-btn aq-btn--primary aq-form__submit" type="submit">'+tx(b.submit||'Send')+'</button><span class="aq-small wform-msg" role="status"></span></div>'
  +'<div class="aq-form__strip" aria-hidden="true"><span>Rev. draft</span><span>'+F.length+' fields</span><span>Sheet 1 of 1</span></div>'
  +'</form>');};
