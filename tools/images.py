"""Make the WebP copies the site loads from the PNG masks. Needs Pillow (pip install Pillow); the rest of the tooling
stays standard library only, so this is a separate step, run after adding or changing a PNG:

  python tools/images.py           write assets/illustrations/<id>.webp for every <id>.png that is newer than its WebP

The PNGs stay the source (the gallery, the guide and the Claude design system use them). The WebP copies are lossless,
so the masks are pixel for pixel the same, about 28 % smaller in total.
"""
import os
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit('Pillow is needed: pip install Pillow')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIRS = [os.path.join(ROOT, 'assets', 'illustrations')]


def main():
    n = saved = 0
    for d in DIRS:
        for f in sorted(os.listdir(d)):
            if not f.endswith('.png'):
                continue
            src, dst = os.path.join(d, f), os.path.join(d, f[:-4] + '.webp')
            if os.path.exists(dst) and os.path.getmtime(dst) >= os.path.getmtime(src):
                continue
            Image.open(src).save(dst, 'WEBP', lossless=True, method=6)
            saved += os.path.getsize(src) - os.path.getsize(dst)
            n += 1
            print('wrote', os.path.relpath(dst, ROOT))
    print('%d WebP files written, %d KB smaller than their PNGs' % (n, saved // 1024))


if __name__ == '__main__':
    main()
