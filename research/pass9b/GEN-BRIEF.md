# Pass 9b · Gemini concepts for the remaining sections (one agent drives Chrome)

Pass 9 generated concepts for the first 27 sections, then the Gemini image quota ran out. It has reset. You generate
one Gemini UI concept image per remaining section, through Claude in Chrome, and stop when the quota runs out again or
the queue ends. You are the only agent driving Chrome.

Read the skill first: `aquemi-web/.claude/skills/image-prompt-loop/SKILL.md` (stage 3). This brief adds the specifics.

## Queue and output
- Queue: `research/pass9b/queue.json` (81 items, in order). Each has `key`, `dir` (art direction) and `mid`.
- Concepts: `python aquemi-web/.claude/skills/image-prompt-loop/tools/save_capture.py <key> <saved png path> <capture height in screenshot px> research/pass9b/concepts`
  (height = the 4th number `cap()` returns, rounded down).
- Log: append one line per key to `research/pass9b/concepts/log.md`:
  `<key> | take kept (1 or 2) | <the idea in ≤ 15 words> | <what a builder should take from it>`.

## Setup (once)
1. Load tools in ONE ToolSearch: `select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__browser_batch,mcp__claude-in-chrome__javascript_tool,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__find`.
2. `tabs_context_mcp {createIfEmpty:true}`; use the tab it gives you (one tab only; do not open more). Navigate it to
   `https://gemini.google.com/app/6eba266f32e13a9b` (the pass-9 chat; its first prompt is the one `go()` edits).
   Take one small screenshot (scale 0.4) to confirm the chat loaded and the model picker says Pro (if it shows another
   model, open the picker and choose the Pro / "Thinking with 3 Pro" style top model, once).
3. Read `research/pass9b/setup.js` and pass its whole text as ONE `javascript_exec` (it sets PRE/SUF from the atlas kit
   and stores the helpers in `localStorage.p9`). It should return `helpers ready (...)`.
4. Check `innerWidth` with JS: the zoom factor 0.6125 in `cap()` assumes the screenshot frame is 0.6125 × CSS px. If the
   first capture comes out cropped or offset, compute the factor from a screenshot's reported size ÷ `innerWidth` and use
   `[0,0,w*f,h*f]` instead.

## One image = one browser_batch + one Bash call
```
browser_batch [
 js: if(typeof go!=='function')eval(trustedTypes.createPolicy('p'+Date.now(),{createScript:s=>s}).createScript(localStorage.p9));await go(<JSON string of mid>)
 computer wait 10 ×4, then wait 8
 navigate https://gemini.google.com/app/6eba266f32e13a9b        (reload; tab screenshots freeze after a generation otherwise)
 js: for(var i=0;i<30&&!document.querySelector('model-response img');i++)await new Promise(r=>setTimeout(r,500));eval(trustedTypes.createPolicy('p'+Date.now(),{createScript:s=>s}).createScript(localStorage.p9));[document.querySelector('user-query').innerText.slice(700,760), document.querySelector('model-response').innerText.slice(0,160), await cap()]
 computer zoom region [0,0,<cap[2]>,<cap[3]>] save_to_disk:true scale:1   (first time use [0,0,627,440]; afterwards the previous size is a fine guess, the crop script trims)
 js: ovx()
]
```
- Check the prompt slice belongs to the section you sent. If it still shows the previous prompt, the edit did not take:
  run the batch again. If `go` returns `update disabled` or `no edit`, reload once and retry.
- The zoom image is the one view you get of each concept: judge it there, never take extra screenshots of it.

## Judge each image
Keep it when it has ONE clear visual idea that explains the content (a pipe route linking items, an exploded view with
callouts, an instrument readout, a map, a stamp sheet, a cutaway, a big editorial numeral…). Regenerate ONCE (append
" Take 2." to the mid; the first take is kept as `.v2` by the save script) when it is weak: text pasted over wallpaper,
stacked boxes, a plain table, a broken half-image, or stainless steel / WFI / stills (off-offer: Aquemi is polypropylene
Purified Water only). Never more than two takes. Ignore invented text and figures; only the layout idea matters.

## Stop conditions
- Quota: the reply says "I can create more images as soon as your limit resets" (or similar), is text only, or no new
  image twice in a row → log `QUOTA at <key> (reset: <time if the model menu shows it>)` and stop.
- Chrome errors twice in a row on the same step (after one reload): stop and report.
- Never download images, never fetch blobs, never long JS waits, never start a new chat, never delete history.

## Rules
No git. Write only `research/pass9b/concepts/`. Report (≤ 10 lines): keys done, regenerated, where you stopped and why.

## Update (Gemini's new interface, 2026-11-01): one fresh chat per image, no reload
Saved chats now often reload blank after a generation, so the loop no longer edits the first prompt or reloads.
`localStorage.p9` now also defines `nw(mid)`: it types PRE+mid+SUF into a NEW chat's input and presses Send. Per image:
```
browser_batch [
 navigate https://gemini.google.com/app                                  (a fresh chat; context-free by construction)
 js: eval(trustedTypes.createPolicy('p'+Date.now(),{createScript:s=>s}).createScript(localStorage.p9)); await nw(<JSON string of mid>)
 computer wait 10 ×4, then wait 8
 js: [location.href, document.querySelectorAll('model-response img').length, await cap()]     (no reload)
 computer zoom region [0,0,cap[2],cap[3]] save_to_disk:true scale:1
 js: ovx()
]
```
then `python .../save_capture.py <key> <saved png> <cap[1]> research/pass9b/concepts`. If `cap()` returns 'none',
wait 10 s and call it again once (generation can take ~60 s). Capturing without a reload works (tested on
svc-fat-sat.0). Each image leaves one chat in the history; that is fine.
