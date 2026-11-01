window.PRE="Generate an image. A 1440 px wide desktop website section, flat straight-on UI mockup, no device frame, no people. Aquemi, maker of modular polypropylene Purified Water systems for pharmaceutical plants. Palette: deep navy (#0F2A47) and warm limestone off-white grounds, pure white, one steel-blue accent used as a line or a single figure. Large light-weight sans-serif headline in sentence case, monospace only for figures, units and standard codes. Square corners, hairline 1\u20131.5 px rules and line drawings, numbered items, generous negative space. Calm, precise, engineered. Show one idea clearly with at most five labelled items. ";window.SUF=" This should look like award-winning web design (Awwwards Site of the Day): genuinely original, one memorable central idea that explains the content, strong typographic hierarchy, bold use of scale and space. Keep text to short labels. Show the whole section. Avoid: no bold or heavy headline, no condensed display type, no italic display, no all-caps headline, no monospace body text, no rounded corners, no pills, no glow, no bloom, no neon, no lens flare, no gradients except a faint ground, no drop shadows, no glossy reflections, no photographs, no stock props, no clipboards, no toolboxes, no laptops, no people, no lab coats, no water splashes, no droplets, no molecules, no globes, no stainless steel, no tri-clamps, no orbital welding, no distillation columns, no steam generators, no red, no green, no orange, no beige, no kraft paper, no device frame, no micro text, no duplicated labels, no slogans, no decorative connector lines.";
// Gemini image loop helpers (Claude in Chrome, one gemini.google.com chat tab). Paste this whole file into ONE
// javascript_exec on the chat page, after setting window.PRE and window.SUF (the fixed head and tail of every prompt).
// It defines the helpers and stores them in localStorage.p9 so they survive reloads.
// After a reload, re-load them with (plain eval is blocked by Gemini's Trusted Types policy):
//   eval(trustedTypes.createPolicy('p'+Date.now(),{createScript:s=>s}).createScript(localStorage.p9))
//
//   await go(mid)   edit the chat's FIRST prompt to PRE+mid+SUF and press Update: a fresh generation with no earlier
//                   image or prompt in context. Returns 'sent N', or 'update disabled' if the text did not change
//                   (add a word such as " Take 2." to regenerate the same section).
//   st()            {w, h, isnew, q}: the newest image's size, whether it differs from the one before go(), a prompt slice
//   await cap()     overlay the newest image at natural size at the top-left; returns [w, h, w*0.6125, h*0.6125].
//                   Then capture with the computer tool: zoom region [0,0,w*0.6125,h*0.6125], save_to_disk:true,
//                   scale:1 (0.6125 = screenshot px per CSS px on a 2560 px wide window; check innerWidth).
//   ovx()           remove the overlay.
(function () {
  window.PRE = window.PRE || '';
  window.SUF = window.SUF || '';
  window.go = async function (mid) {
    var t = document.querySelector('user-query [contenteditable=true]');
    if (!t) {
      var q = document.querySelector('user-query');
      q.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
      var eb = [...q.querySelectorAll('button')].find(b => b.getAttribute('aria-label') === 'Edit');
      if (!eb) return 'no edit';
      eb.click(); await new Promise(r => setTimeout(r, 700));
      t = document.querySelector('user-query [contenteditable=true]');
    }
    if (!t) return 'no box';
    t.focus();
    var s = getSelection(), rg = document.createRange(); rg.selectNodeContents(t); s.removeAllRanges(); s.addRange(rg);
    document.execCommand('insertText', false, PRE + mid + SUF);   // registers as real input, unlike setting the value
    await new Promise(r => setTimeout(r, 500));
    var u = [...document.querySelectorAll('user-query button')].find(b => (b.innerText || '').trim() === 'Update');
    if (!u) return 'no update';
    if (u.disabled) return 'update disabled';
    window.__last = (document.querySelector('model-response img') || {}).src;
    u.click(); return 'sent ' + t.innerText.length;
  };
  window.st = function () {
    var im = [...document.querySelectorAll('model-response img')].pop();
    return { w: im && im.naturalWidth, h: im && im.naturalHeight, isnew: !!im && im.src !== window.__last, q: (document.querySelector('user-query') || {}).innerText?.slice(200, 260) };
  };
  window.ov = function () {
    var im = [...document.querySelectorAll('model-response img')].pop();
    var d = document.getElementById('ovx'); if (d) d.remove();
    d = document.createElement('div'); d.id = 'ovx'; d.style.cssText = 'position:fixed;left:0;top:0;z-index:2147483647;background:#fff';
    var c = new Image(); c.src = im.src; c.style.cssText = 'display:block;width:' + im.naturalWidth + 'px;height:' + im.naturalHeight + 'px';
    d.appendChild(c); document.body.appendChild(d);
    return [im.naturalWidth, im.naturalHeight, Math.round(im.naturalWidth * 0.6125), Math.round(im.naturalHeight * 0.6125)];
  };
  window.ovx = function () { var d = document.getElementById('ovx'); if (d) d.remove(); return 1 };
  window.cap = async function () {
    for (var i = 0; i < 30; i++) {
      var im = [...document.querySelectorAll('model-response img')].pop();
      if (im && im.naturalWidth > 500) return ov();
      if (im && im.complete && !im.naturalWidth && i % 6 == 5) { var s = im.src; im.src = ''; im.src = s }
      await new Promise(r => setTimeout(r, 500));
    }
    return 'none';
  };
  localStorage.p9 = 'window.PRE=' + JSON.stringify(PRE) + ';window.SUF=' + JSON.stringify(SUF) + ';window.go=' + go.toString() +
    ';window.st=' + st.toString() + ';window.ov=' + ov.toString() + ';window.ovx=' + ovx.toString() + ';window.cap=' + cap.toString() + ';1';
  return 'helpers ready (' + localStorage.p9.length + ' chars stored)';
})();
