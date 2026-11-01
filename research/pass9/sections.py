"""Pass 9: one Gemini concept prompt per section, from the page files. Writes sections.json (ordered queue)."""
import json, glob, os, re
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'aquemi-web', 'content', 'pages')
ORDER = ['home','systems','sys-pw','services','industries','compliance','ind-pharma','projects','about','contact-proposal',
         'sys-storage','sys-pretreatment','sys-monitoring','svc-design','svc-fabrication','svc-fat-sat','svc-cq','svc-service',
         'svc-upgrades','ind-meddevice','ind-cdmo','cmp-documentation','cmp-quality','careers','news','contact-service','contact-locations']
SHARED = {'faq','related','form','contact-routes'}
def clean(s):
    s = re.sub(r'\[([^\]]+)\]', r'[\1]', str(s)); return re.sub(r'\s+', ' ', s).strip()
def cell(c): return clean(c.get('t','') if isinstance(c, dict) else c)
def summary(b):
    out = []
    for k in ('intro','lead','caption'):
        if b.get(k): out.append(clean(b[k]))
    if b.get('cols'): out.append('Columns: ' + ' | '.join(cell(c) for c in b['cols']))
    for r in (b.get('rows') or [])[:9]:
        if isinstance(r, dict): out.append(' - ' + ' / '.join(clean(r[k]) for k in ('p','v','m') if r.get(k)))
        else: out.append(' - ' + ' / '.join(cell(c) for c in r))
    for key in ('items','stages','points','steps'):
        for it in (b.get(key) or [])[:9]:
            if isinstance(it, dict): out.append(' - ' + ' : '.join(clean(it[k]) for k in ('t','q','d','a') if it.get(k)))
            else: out.append(' - ' + clean(it))
    t = '; '.join(out)
    return t[:900]
STYLE = ("Visual language: deep navy (#0F2A47), warm limestone off-white (#EFE7DD), paper white, a single steel-blue accent (#2F6FA3) used only for lines and one highlight; "
         "ultra-fine 1.5 px technical line drawings like engineering blueprints, P&ID schematics and isometric equipment; light-weight Geist sans headlines, monospace for figures and standard codes; "
         "square corners, hairline rules, drawing-sheet details (title blocks, dimension lines, grid ticks, zone letters, revision marks) quietly filling the negative space.")
def prompt(pg, b):
    kind = b.get('look') or (b['type'] + ('/' + b['as'] if b.get('as') else ''))
    return ("Generate an image. Design ONE section of a website as a single flat desktop UI mockup image: a 1440 px wide web page section, straight-on, no device frame, no browser chrome, no people, no photographs. "
            "Company: Aquemi, a small Canadian engineering firm that designs and fabricates modular polypropylene Purified Water systems (pretreatment, reverse osmosis, EDI, storage and distribution loop) for pharmaceutical and medical-device plants. Readers are process engineers, validation leads and quality heads who read specifications closely. "
            + STYLE + " "
            f"The section is on the page '{pg.get('nav_label') or pg['id']}' and is titled '{clean(b.get('h',''))}'. It must communicate: {summary(b)}. "
            "Make it a moonshot: the most striking, inventive, award-level layout for exactly this content that you can imagine, bold and stylish yet calm and precise, visual first: let drawings, flowing water paths, annotated equipment, instruments, gauges, stamps or diagrams carry the meaning, and keep text to short labels. "
            "Avoid plain rows, generic card grids and ordinary tables; if a table is truly right, make it an extraordinary one. Surprise me.")
q = []
pages = {}
for f in sorted(glob.glob(os.path.join(ROOT, '*.json'))):
    p = json.load(open(f, encoding='utf-8')); pages[p['id']] = p
for pid in ORDER:
    p = pages[pid]
    for i, b in enumerate(p.get('blocks', [])):
        if b['type'] in SHARED: continue
        q.append({'key': f'{pid}.{i}', 'page': pid, 'i': i, 'type': b['type'], 'as': b.get('as'), 'h': b.get('h'), 'prompt': prompt(p, b)})
# site-wide shared sections: one concept each, from a representative instance
for pid, typ in [('sys-pw','faq'),('systems','related'),('contact-proposal','form'),('contact-proposal','contact-routes')]:
    p = pages[pid]; i, b = next((i, b) for i, b in enumerate(p['blocks']) if b['type'] == typ)
    q.append({'key': f'shared.{typ}', 'page': pid, 'i': i, 'type': typ, 'h': b.get('h'), 'prompt': prompt(p, b)})
json.dump(q, open('sections.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(len(q), max(len(x['prompt']) for x in q))
