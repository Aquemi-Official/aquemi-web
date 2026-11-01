"""Text -> image: one Gemini prompt per site section, built from the page files and a prompt kit.

  python section_prompts.py <kit.json> <out queue.json> [page ids ...]

kit.json: {"pre": "<fixed head: what to draw + brand core>", "suf": "<fixed tail: the quality bar + negative keywords>",
           "directions": ["<art direction module>", ...], "skip_types": ["faq", "related", ...], "seed": 9}
Each queue item: {key: "<page>.<block index>", page, i, type, as, h, dir, mid}. The prompt sent is pre + mid + suf, so
the per-image call carries only `mid` (see gemini-helpers.js go(mid)). Directions rotate in shuffled rounds so
neighbouring sections differ. Without page ids, every page in content/pages/ in file order.
"""
import glob, json, os, random, re, sys
HERE = os.path.dirname(os.path.abspath(__file__))
PAGES = os.path.normpath(os.path.join(HERE, '..', '..', '..', '..', 'content', 'pages'))

def clean(s): return re.sub(r'\s+', ' ', str(s)).strip()
def cell(c): return clean(c.get('t', '') if isinstance(c, dict) else c)

def summary(b, limit=900):
    out = []
    for k in ('intro', 'lead', 'caption'):
        if b.get(k): out.append(clean(b[k]))
    if b.get('cols'): out.append('Columns: ' + ' | '.join(cell(c) for c in b['cols']))
    for r in (b.get('rows') or [])[:9]:
        out.append(' - ' + (' / '.join(clean(r[k]) for k in ('p', 'v', 'm') if r.get(k)) if isinstance(r, dict) else ' / '.join(cell(c) for c in r)))
    for key in ('items', 'stages', 'points', 'steps'):
        for it in (b.get(key) or [])[:9]:
            out.append(' - ' + (' : '.join(clean(it[k]) for k in ('t', 'q', 'd', 'a') if it.get(k)) if isinstance(it, dict) else clean(it)))
    return '; '.join(out)[:limit]

def main():
    kit = json.load(open(sys.argv[1], encoding='utf-8')); out = sys.argv[2]; want = sys.argv[3:]
    pages = [json.load(open(f, encoding='utf-8')) for f in sorted(glob.glob(os.path.join(PAGES, '*.json')))]
    if want: pages = [p for w in want for p in pages if p['id'] == w]
    skip = set(kit.get('skip_types', ['faq', 'related', 'form', 'contact-routes']))
    rnd = random.Random(kit.get('seed', 9)); dirs = list(kit['directions']); seq = []
    q = []
    for p in pages:
        for i, b in enumerate(p.get('blocks', [])):
            if b['type'] in skip: continue
            if not seq: rnd.shuffle(dirs); seq = dirs[:]
            d = seq.pop(0)
            mid = (f"The section is on the page '{p.get('nav_label') or p['id']}' and is titled '{clean(b.get('h', ''))}'. "
                   f"It must communicate: {summary(b)}. Art direction for this one: {d}.")
            q.append({'key': f"{p['id']}.{i}", 'page': p['id'], 'i': i, 'type': b['type'], 'as': b.get('as'), 'h': b.get('h'), 'dir': d, 'mid': mid})
    json.dump(q, open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print(len(q), 'prompts ->', out)

if __name__ == '__main__': main()
