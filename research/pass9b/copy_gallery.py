"""Copy pass 9b concepts not yet in the gallery into aquemi-web/design-system/inspiration/gemini/ (numbered on),
add their README rows and their GEMINI_USE entries in tools/gallery.py. Idempotent: research/pass9b/gallery-map.json
records what is already copied.   python -X utf8 research/pass9b/copy_gallery.py"""
import json, os, re, shutil
HERE = os.path.dirname(os.path.abspath(__file__))
WEB = os.path.join(HERE, '..', '..', 'aquemi-web')
GEM = os.path.join(WEB, 'design-system', 'inspiration', 'gemini')
README = os.path.join(WEB, 'design-system', 'inspiration', 'README.md')
GAL = os.path.join(WEB, 'tools', 'gallery.py')
CON = os.path.join(HERE, 'concepts')
MAP = os.path.join(HERE, 'gallery-map.json')

q = json.load(open(os.path.join(HERE, 'queue.json'), encoding='utf-8'))
m = json.load(open(MAP, encoding='utf-8')) if os.path.exists(MAP) else {}
have = {re.sub(r'-take2$', '', re.sub(r'^\d+-p9b-', '', f[:-4])) for f in os.listdir(GEM) if '-p9b-' in f}
log = {}
for ln in open(os.path.join(CON, 'log.md'), encoding='utf-8'):
    p = [s.strip() for s in ln.split('|')]
    if len(p) >= 4 and '.' in p[0]: log[p[0]] = p[2]
pages = {}
for f in os.listdir(os.path.join(WEB, 'content', 'pages')):
    d = json.load(open(os.path.join(WEB, 'content', 'pages', f), encoding='utf-8')); pages[d['id']] = d
n = max(int(f.split('-')[0]) for f in os.listdir(GEM) if f[0].isdigit())
rows, use = [], {}
pascal = lambda s: ''.join(w.capitalize() for w in s.split('-'))
for it in q:
    k = it['key']; stem = k.replace('.', '-')
    if stem in have or k + '.png' in m or not os.path.exists(os.path.join(CON, k + '.png')): continue
    title = "'%s' (%s), art direction: %s" % (it['h'], it['page'], it['dir'].rstrip('. '))
    for src, suf in ((k + '.png', ''), (k + '.v2.png', '-take2')):
        if not os.path.exists(os.path.join(CON, src)): continue
        n += 1; dst = '%d-p9b-%s%s.png' % (n, stem, suf)
        shutil.copy2(os.path.join(CON, src), os.path.join(GEM, dst)); m[src] = dst
        rows.append('| `gemini/%s` | %s | %s |' % (dst, title, log.get(k, '')))
        if not suf:
            b = pages.get(it['page'], {}).get('blocks', [])
            look = b[it['i']].get('look') if it['i'] < len(b) else None
            if look: use[str(n)] = pascal(look)
if rows:
    t = open(README, encoding='utf-8').read().split('\n')
    last = max(i for i, l in enumerate(t) if l.startswith('| `gemini/'))
    t[last + 1:last + 1] = rows
    open(README, 'w', encoding='utf-8', newline='\n').write('\n'.join(t))
    g = open(GAL, encoding='utf-8').read()
    i = g.index("'127': 'TestSheet'")
    j = g.index('}', i)
    g = g[:j] + ''.join(", '%s': '%s'" % kv for kv in use.items()) + g[j:]
    open(GAL, 'w', encoding='utf-8', newline='\n').write(g)
json.dump(m, open(MAP, 'w', encoding='utf-8'), indent=1)
print(len(rows), 'images copied, last number', n, '| looks mapped:', len(use))
