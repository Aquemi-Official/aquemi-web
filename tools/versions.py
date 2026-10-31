"""Page history: freeze the site as it looked at each big checkpoint.

    python tools/versions.py          # (re)write versions/<id>/ and versions/versions.json

Each checkpoint is a commit; its whole runnable site (index.html, assets, content, design system) is
extracted from git into versions/<id>/ so it loads exactly as it did then. versions.html flips any page
between them. To add a checkpoint, add a row to CHECKPOINTS (oldest first) and run this again.
Python 3 standard library only; needs git.
"""
import io
import json
import os
import shutil
import subprocess
import tarfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'versions')

# id, commit, title, what changed. The live site is appended last as 'now'.
CHECKPOINTS = [
    ('v1-first-draft', 'e26059f', 'First draft',
     'The first site: 31 pages in the first Aquemi design system, one stylesheet and one renderer.'),
    ('v2-gemini', 'e299ecf', 'Second pass and Gemini rebuild',
     'Second-pass copy on every page; sections, table, heroes and footer rebuilt from Gemini concepts; equipment drawings.'),
    ('v3-skeleton', '05157a0', 'Third pass: system skeleton',
     'Every page compressed to the shared page skeleton, content budgets, site-wide phone pass.'),
    ('v4-navy', 'ea55d15', 'Fourth pass: navy ground',
     'Navy ground with light sheets, the fold, six table shapes, closing exchange, PlanTiers.'),
    ('v5-fidelity', '871f1e0', 'Visual and fidelity passes',
     'Concepts 50 to 63 as components (limit gauges, callouts, binder, hold points), each matched to its concept. Tag pre-pass6.'),
    ('v6-pass6', '55bd940', 'Pass 6: bold display, design first',
     'Barlow Condensed capitals, first GSAP motion, about half the words, drawn hero figures and spot drawings. Tag pre-pass7.'),
    ('v7-pass7', 'cd1bbf4', 'Pass 7: section refinement and motion',
     'Section-by-section refinement and per-component GSAP choreography.'),
]
NOW = ('now', 'Brand book (live)',
       'Back on the brand book: Geist Light sentence case, light surface, Lucide-style icons, How we work. Pass 7 motion kept.')

# Not needed to view a page, and large.
SKIP = ('design-system/inspiration/', '.github/', 'tools/', '.claude/')


def git(*args):
    return subprocess.run(['git', '-C', ROOT, *args], check=True, capture_output=True).stdout


def extract(commit, dest):
    tar = tarfile.open(fileobj=io.BytesIO(git('archive', '--format=tar', commit)))
    for m in tar.getmembers():
        if not m.isfile() or m.name.startswith(SKIP):
            continue
        path = os.path.join(dest, *m.name.split('/'))
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, 'wb') as f:
            f.write(tar.extractfile(m).read())


def main():
    if os.path.isdir(OUT):
        for name in os.listdir(OUT):
            p = os.path.join(OUT, name)
            if os.path.isdir(p):
                shutil.rmtree(p)
    os.makedirs(OUT, exist_ok=True)
    items = []
    for vid, commit, title, note in CHECKPOINTS:
        full = git('rev-parse', commit).decode().strip()
        date = git('show', '-s', '--format=%cI', full).decode().strip()
        subject = git('show', '-s', '--format=%s', full).decode().strip()
        extract(full, os.path.join(OUT, vid))
        items.append({'id': vid, 'title': title, 'note': note, 'commit': full[:7], 'date': date,
                      'subject': subject, 'path': 'versions/' + vid + '/index.html'})
        print('  ' + vid + '  ' + full[:7] + '  ' + date[:16])
    date = git('show', '-s', '--format=%cI', 'HEAD').decode().strip()
    items.append({'id': NOW[0], 'title': NOW[1], 'note': NOW[2], 'commit': 'live', 'date': date,
                  'subject': 'The site as it is now', 'path': 'index.html'})
    with open(os.path.join(OUT, 'versions.json'), 'w', encoding='utf-8') as f:
        json.dump({'versions': items}, f, indent=1)
    print('wrote versions/versions.json (' + str(len(items)) + ' checkpoints)')


if __name__ == '__main__':
    main()
