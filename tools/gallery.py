"""Build the media gallery (inspiration.html) manifest: every image made or looked at for the site, used or not.

  python tools/gallery.py                     Rescan the repo, make missing thumbnails, write design-system/inspiration/gallery.json
  python tools/gallery.py --import <research> Also copy build records from a research folder (page snapshots per pass,
                                              concept-vs-build comparisons) into design-system/inspiration/record/ as JPEG

Needs Pillow (thumbnails). Sources it scans:
  design-system/inspiration/gemini/*.png        Gemini originals, oldest first
  design-system/inspiration/concept-*.*         captures each component was rebuilt from
  design-system/inspiration/art/*.png           black-on-white sources of the equipment drawings
  design-system/inspiration/archive/*           superseded versions (kept, never shown on the site)
  design-system/inspiration/record/<set>/*.jpg  build records: what the site looked like at each pass
  assets/illustrations, assets/spots, assets/icons, brand/   what the site uses
Status of each item is worked out from the inspiration README tables and from whether the live pages use it.
"""
import glob, json, os, re, shutil, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INS = os.path.join(ROOT, 'design-system', 'inspiration')
THUMBS = os.path.join(INS, 'thumbs')
TW = 480  # thumbnail width

# Gemini originals that have no row of their own in the README: what each became
GEMINI_USE = {
    '01': 'WaterPath', '02': 'Hero', '03': 'ProcessDiagram', '04': 'OptionList', '05': 'DocList', '15': 'FAQ',
    '16': 'ProcessSteps', '17': 'RelatedLinks', '18': 'Closing', '19': 'CaseStudy', '21': 'EnquiryForm',
    '23': 'StandardsGrid', '26': 'Readout', '27': 'Prose', '32': 'Band', '33': 'LinkGrid', '34': 'CompareTable',
    '35': 'Hero', '36': 'Footer', '37': 'Hero', '38': 'NavBar', '39': 'KeyFacts', '40': 'Page', '41': 'Page',
    '42': 'Router', '43': 'FaultList', '44': 'Versus', '45': 'EvidenceMap', '46': 'GradeLanes', '47': 'PlanTiers',
    '48': 'RoleMatrix', '49': 'Closing', '50': 'LimitGauges', '51': 'DocList', '52': 'OptionModules',
    '53': 'ProcessSteps', '54': 'Explainer', '55': 'ParameterCallouts', '56': 'VisitRoute', '57': 'Icon',
    '59': 'StandardsMap', '60': 'CaseStudy', '61': 'VisitRoute', '62': 'ContactRoutes', '63': 'NotesRegister',
    '64': 'Spot'}
GEMINI_REFERENCE = {'58'}  # looked at as a target, not rebuilt as one thing

RECORD_SETS = [  # (folder in record/, label, order)
    ('pass7', 'Pass 7: the site today'),
    ('pass6-audit', 'Pass 6: after the audit'),
    ('pass6', 'Pass 6: mid-pass'),
    ('pass5', 'Before pass 6'),
    ('fidelity', 'Concept beside build (pass 6)'),
]


def rel(p):
    return os.path.relpath(p, ROOT).replace('\\', '/')


def title_of(name):
    s = re.sub(r'^\d+-', '', name)
    s = re.sub(r'^(concept|art)-', '', s)
    return s.replace('-', ' ').strip().capitalize()


def readme_rows():
    rows = {}
    t = open(os.path.join(INS, 'README.md'), encoding='utf8').read()
    for m in re.finditer(r'^\|\s*`([^`]+)`\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*$', t, re.M):
        rows[os.path.basename(m.group(1))] = (m.group(2), re.sub(r'`', '', m.group(3)))
    return rows


def thumb(src, mask=False):
    """JPEG thumbnail; masks (transparent line art) are painted navy on limestone so they read."""
    from PIL import Image
    os.makedirs(THUMBS, exist_ok=True)
    out = os.path.join(THUMBS, rel(src).replace('/', '__').rsplit('.', 1)[0] + '.jpg')
    if os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(src):
        return rel(out), None
    im = Image.open(src)
    size = im.size
    if mask or im.mode in ('RGBA', 'LA', 'P'):
        im = im.convert('RGBA')
        ground = Image.new('RGB', im.size, (235, 223, 214) if mask else (250, 248, 246))
        if mask:
            ink = Image.new('RGB', im.size, (15, 42, 71))
            ground.paste(ink, (0, 0), im.split()[3])
        else:
            ground.paste(im, (0, 0), im.split()[3])
        im = ground
    im = im.convert('RGB')
    w = min(TW, im.width)
    h = max(1, round(im.height * w / im.width))
    if h > w * 3:  # very tall page shots: keep the top
        im = im.crop((0, 0, im.width, im.width * 3))
        h = w * 3
    im.resize((w, h), Image.LANCZOS).save(out, 'JPEG', quality=78, optimize=True, progressive=True)
    return rel(out), size


def dims(src):
    from PIL import Image
    try:
        return list(Image.open(src).size)
    except Exception:
        return None


def import_records(research):
    """Copy page snapshots and concept-vs-build comparisons from research/ into record/ (JPEG, capped size)."""
    from PIL import Image
    rec = os.path.join(INS, 'record')

    def put(src, dest, maxw=1000, maxh=14000):
        if os.path.exists(dest):
            return
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        im = Image.open(src).convert('RGB')
        if im.width > maxw:
            im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
        if im.height > maxh:
            im = im.crop((0, 0, im.width, maxh))
        im.save(dest, 'JPEG', quality=74, optimize=True, progressive=True)

    def sheets(folder, setname):
        seen = set()
        for f in sorted(glob.glob(os.path.join(research, folder, '**', '*-sheet.png'), recursive=True)):
            if re.search(r'[\\/](before|_fold)', f) or 'before' in os.path.basename(f):
                continue
            m = re.match(r'(.+)-(1280|375)-sheet\.png$', os.path.basename(f))
            if not m or m.groups() in seen:
                continue
            seen.add(m.groups())
            put(f, os.path.join(rec, setname, '%s-%s.jpg' % m.groups()))

    sheets('shots', 'pass5')
    sheets('shots6', 'pass6')
    sheets('shots8', 'pass6-audit')
    for f in sorted(glob.glob(os.path.join(research, 'shots-pass7', '*.png'))):
        m = re.match(r'(.+)-(1280|375)\.png$', os.path.basename(f))
        if m:
            put(f, os.path.join(rec, 'pass7', os.path.basename(f)[:-4] + '.jpg'), maxw=1000 if m.group(2) == '1280' else 375)
    for f in sorted(glob.glob(os.path.join(research, 'fidelity', '*.png'))):
        if not re.search(r'-(1280|375)\.png$', f):
            put(f, os.path.join(rec, 'fidelity', os.path.basename(f)[:-4] + '.jpg'), maxw=1800)


def build():
    rows = readme_rows()
    pages = json.load(open(os.path.join(ROOT, 'content', 'pages.json'), encoding='utf8'))['pages']
    page_ids = {p['id'] for p in pages}
    used_text = open(os.path.join(ROOT, 'content', 'pages.json'), encoding='utf8').read() + \
        open(os.path.join(ROOT, 'assets', 'aquemi-site.js'), encoding='utf8').read()
    items = []

    def add(src, cat, status, title, note='', comp=None, mask=False, group=None, order=0):
        t, size = thumb(src, mask) if not src.endswith('.svg') else (rel(src), None)
        items.append({'src': rel(src), 'thumb': t, 'cat': cat, 'status': status, 'title': title, 'note': note,
                      'component': comp, 'group': group, 'order': order, 'size': size or (None if src.endswith('.svg') else dims(src)),
                      'kb': round(os.path.getsize(src) / 1024)})

    for f in sorted(glob.glob(os.path.join(INS, 'gemini', '*.png'))):
        name = os.path.basename(f)[:-4]
        num = name[:2]
        prompt, became = rows.get(name + '.png', ('', ''))
        if '-art-' in name:
            pid = name.split('-art-')[1]
            add(f, 'gemini', 'source', title_of(name), 'Equipment drawing for the %s page; cleaned into assets/illustrations/%s.png' % (pid, pid), 'Illustration', order=int(num))
        elif num in GEMINI_REFERENCE:
            add(f, 'gemini', 'reference', title_of(name), prompt or 'Looked at as a target for the page rhythm', order=int(num))
        else:
            comp = GEMINI_USE.get(num)
            add(f, 'gemini', 'built', title_of(name), (prompt + (' → ' + became if became else '')).strip(' →'), comp, order=int(num))

    for f in sorted(glob.glob(os.path.join(INS, 'concept-*.*'))):
        b = os.path.basename(f)
        prompt, became = rows.get(b, ('', ''))
        comp = re.match(r'(\w+)', became).group(1) if became else None
        add(f, 'capture', 'built' if became else 'reference', title_of(b.rsplit('.', 1)[0]), (prompt + ' → ' + became) if became else prompt, comp)

    for f in sorted(glob.glob(os.path.join(INS, 'art', '*.png'))):
        pid = os.path.basename(f)[:-4]
        add(f, 'source', 'source', pid, 'Source drawing for assets/illustrations/%s.png' % pid, 'Illustration')

    for f in sorted(glob.glob(os.path.join(INS, 'archive', '*.*'))):
        add(f, 'archive', 'superseded', title_of(os.path.basename(f).rsplit('.', 1)[0]), 'Replaced by a later version; kept for the record')

    for kind, folder, comp in (('drawing', 'illustrations', 'Illustration'), ('spot', 'spots', 'Spot'), ('icon', 'icons', 'Icon')):
        for f in sorted(glob.glob(os.path.join(ROOT, 'assets', folder, '*.png'))):
            n = os.path.basename(f)[:-4]
            live = (n in page_ids and 'illustrations/' in used_text) if kind == 'drawing' else (('"%s"' % n) in used_text or ("'%s'" % n) in used_text)
            add(f, kind, 'live' if live else 'kit', n.replace('-', ' '), 'assets/%s/%s.png' % (folder, n), comp, mask=True)

    for f in sorted(glob.glob(os.path.join(ROOT, 'brand', '*.svg'))):
        n = os.path.basename(f)[:-4]
        add(f, 'brand', 'live', n.replace('-', ' '), 'brand/%s.svg' % n)

    for i, (setname, label) in enumerate(RECORD_SETS):
        for f in sorted(glob.glob(os.path.join(INS, 'record', setname, '*.jpg'))):
            n = os.path.basename(f)[:-4]
            m = re.match(r'(.+)-(1280|375)$', n)
            t = ('%s · %s' % (m.group(1), 'desktop' if m.group(2) == '1280' else 'phone')) if m else n.replace('-', ' ')
            add(f, 'fidelity' if setname == 'fidelity' else 'snapshot', 'record', t, label, group=label, order=i)

    out = os.path.join(INS, 'gallery.json')
    json.dump({'generated_by': 'tools/gallery.py', 'items': items}, open(out, 'w', encoding='utf8', newline='\n'), ensure_ascii=False, indent=0)
    # Drop thumbnails whose source is gone
    keep = {i['thumb'] for i in items}
    for t in glob.glob(os.path.join(THUMBS, '*.jpg')):
        if rel(t) not in keep:
            os.remove(t)
    from collections import Counter
    print('wrote', rel(out), len(items), 'items', dict(Counter(i['cat'] for i in items)), dict(Counter(i['status'] for i in items)))


if __name__ == '__main__':
    if '--import' in sys.argv:
        import_records(sys.argv[sys.argv.index('--import') + 1])
    build()
