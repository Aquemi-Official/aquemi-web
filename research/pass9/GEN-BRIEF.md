# Pass 9 · Gemini concept generator (one agent drives Chrome)

You generate one Gemini UI concept image per website section, through Claude in Chrome, in the one Gemini tab that is
already set up. You are the only agent driving Chrome. Work the queue to the end of your range, then report.

## Setup (already done; don't redo)
- Tab: Claude in Chrome tab `1135722234`, chat `https://gemini.google.com/app/6eba266f32e13a9b` (model Pro). Keep it the
  ONLY tab; never open or close tabs; never start a new chat.
- `localStorage.p9` in that page holds the helpers: `go(mid)` edits the chat's FIRST prompt to PRE+mid+SUF and presses
  Update (a fresh, context-free generation each time); `cap()` overlays the newest generated image at natural size at
  the top-left; `ovx()` removes the overlay. After any page load, load them with
  `eval(trustedTypes.createPolicy('p'+Date.now(),{createScript:s=>s}).createScript(localStorage.p9))` (plain eval is
  blocked by Trusted Types).
- Queue: `research/pass9/sections.json`, items in order; each has `key` and `mid` (the section-specific middle of the
  prompt). Concepts go to `research/pass9/concepts/<key>.png` via `python research/pass9/save.py <key> <tool-results file name>`.

## One image = one browser_batch + one Bash call
Load the tool schemas once with ToolSearch: `select:mcp__claude-in-chrome__browser_batch,mcp__claude-in-chrome__javascript_tool,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__tabs_context_mcp`.

```
browser_batch [
 js: if(typeof go!=='function')eval(trustedTypes.createPolicy('p'+Date.now(),{createScript:s=>s}).createScript(localStorage.p9));await go(<JSON string of mid>)
 computer wait 10 ×4, wait 8          (generation takes ~40–50 s; never long JS waits, they freeze the tab)
 navigate https://gemini.google.com/app/6eba266f32e13a9b    (a reload: screenshots of this tab freeze after a generation otherwise)
 js: for(var i=0;i<30&&!document.querySelector('model-response img');i++)await new Promise(r=>setTimeout(r,500));eval(trustedTypes.createPolicy('p'+Date.now(),{createScript:s=>s}).createScript(localStorage.p9));[document.querySelector('user-query').innerText.slice(1400,1440), await cap()]
 computer zoom region [0,0,627,350] save_to_disk:true scale:1   (cap() returns [w,h,w*0.6125,h*0.6125]; use those last two if the image is not 1024x572)
 js: ovx()
]
```
Then `python research/pass9/save.py <key> <the saved mcp-claude-in-chrome-blob-….png name>`.

Check the returned prompt slice matches the section you sent (if it still shows the previous prompt, the edit did not
take: run the batch again). If `go` returns `update disabled` or `no edit`, reload once and retry.

## Judge each image (you see it in the zoom)
Keep it when it has ONE clear visual idea that explains the content (a pipe route linking the items, an exploded view
with callouts, an instrument, a map, a stamp sheet, a cutaway…). Regenerate ONCE (same mid, the earlier take is kept as
`.vN`) when it is weak: text pasted over blueprint wallpaper, stacked boxes, a plain table, or a broken half-image.
Never more than two takes per section. Ignore invented text and figures in the image; only the layout idea matters.

Append one line per key to `research/pass9/concepts/log.md`:
`<key> | take kept (1 or 2) | <the idea in ≤ 15 words> | <what to keep from it>`.

## Stop conditions
- Quota: if the reply shows the Images gallery, "You're running low on images", a text-only answer, or no new image
  twice in a row, stop, log `QUOTA at <key>`, and report.
- Chrome errors twice in a row on the same step (after one reload): stop and report.
- Your range is given in the prompt that launched you (from index A to B in the queue).

## Rules
- Never delete chat history, never start a new chat, never type into anything but the prompt editor via `go()`.
- No git. Write only `research/pass9/concepts/` and `log.md`.
- Report (≤ 10 lines): keys done, keys regenerated, where you stopped and why.
