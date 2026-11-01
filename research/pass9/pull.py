"""Move Gemini downloads (p9-*.png) into concepts/ and make small previews in view/ (for a cheap look)."""
import glob, os, shutil, sys
from PIL import Image
H = os.path.dirname(os.path.abspath(__file__))
os.makedirs(os.path.join(H, 'concepts'), exist_ok=True); os.makedirs(os.path.join(H, 'view'), exist_ok=True)
for f in glob.glob(os.path.expanduser('~/Downloads/p9-*.png')):
    n = os.path.basename(f)[3:]
    d = os.path.join(H, 'concepts', n)
    if os.path.exists(d):  # keep earlier takes
        k = 2
        while os.path.exists(d.replace('.png', f'.v{k}.png')): k += 1
        d = d.replace('.png', f'.v{k}.png')
    shutil.move(f, d)
    im = Image.open(d).convert('RGB'); w = int(sys.argv[1]) if len(sys.argv) > 1 else 560
    im.resize((w, round(im.height * w / im.width))).save(os.path.join(H, 'view', os.path.basename(d).replace('.png', '.jpg')), quality=80)
    print(d)
