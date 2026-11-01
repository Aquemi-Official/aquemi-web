#!/usr/bin/env bash
# Ship finished pass-9 work while other builders keep editing the main checkout.
#   bash research/pass9/ship.sh "<commit message>" <path> [<path> ...]
# Paths are relative to aquemi-web (files or folders: component folders, look-*.js, page JSON, parts...).
# Copies them into a clean worktree at origin/main, builds, checks (0 problems), runs motioncheck on every page file
# named, commits, pushes to main, then points the main checkout at the new commit without touching its files
# (reset --soft + mixed reset of the index).
set -euo pipefail
cd "$(dirname "$0")/../../aquemi-web"
MSG="$1"; shift
W=../aqw-ship
OLD=$(git rev-parse HEAD)
git fetch -q
git worktree remove --force "$W" 2>/dev/null || true
git worktree add -q --detach "$W" origin/main
for p in "$@"; do
  if [ ! -e "$p" ]; then rm -rf "$W/$p"; echo "removed $p"; elif [ -d "$p" ]; then mkdir -p "$W/$p"; cp -r "$p/." "$W/$p/"; else mkdir -p "$W/$(dirname "$p")"; cp "$p" "$W/$p"; fi
done
( cd "$W" && python tools/design_system.py build >/dev/null && python tools/design_system.py check 2>&1 | tail -1 | grep -q '^0 problem' ) || { echo "CHECK FAILED in $W"; (cd "$W" && python tools/design_system.py check 2>&1 | grep PROBLEM | head); exit 1; }
( cd "$W" && python -m http.server 8771 --bind 127.0.0.1 >/dev/null 2>&1 & echo $! > ../aqw-ship.pid )
sleep 2
for p in "$@"; do case "$p" in content/pages/*.json)
  id=$(python -c "import json,sys;print(json.load(open(sys.argv[1],encoding='utf-8'))['id'])" "$p")
  for w in 1280 375; do AQ_BASE=http://localhost:8771/ node ../research/tools/motioncheck.js "$id" $w 2>&1 | grep -v "^ *at " | tail -1 || true; done;; esac; done
powershell -NoProfile -Command "Get-NetTCPConnection -LocalPort 8771 -State Listen -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id \$_.OwningProcess -Force }" || true; rm -f ../aqw-ship.pid
( cd "$W" && git add -A && git commit -q -m "$MSG

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>" && git push -q origin HEAD:main 2>&1 | grep -iv moved || true; git log --oneline -1 )
git fetch -q
MINE=$(cd "$W" && git rev-parse HEAD)
# files teammates changed since our last sync (not in our commit): take theirs into the main checkout
THEIRS=$(git diff --name-only "$OLD" "$MINE~1" 2>/dev/null || true)
git reset -q --soft origin/main && git reset -q
if [ -n "$THEIRS" ]; then echo "taking teammates' files:"; echo "$THEIRS"; echo "$THEIRS" | xargs -r git checkout origin/main --; fi
sleep 1; git worktree remove --force "$W" || echo "worktree $W left (server holding it?)"
git log --oneline -1
