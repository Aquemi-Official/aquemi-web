"""python paths.py look-name ... -> 'assets/src/blocks/look-<n>.js design-system/components/<Comp>' for each (aquemi-web relative)."""
import os, sys
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'aquemi-web')
comps = {c.lower(): c for c in os.listdir(os.path.join(R, 'design-system', 'components'))}
out = []
for n in sys.argv[1:]:
    c = comps.get(n.replace('-', '').lower())
    if not c or not os.path.exists(os.path.join(R, 'assets', 'src', 'blocks', f'look-{n}.js')): sys.stderr.write(f'MISSING {n}\n'); continue
    out += [f'assets/src/blocks/look-{n}.js', f'design-system/components/{c}']
print(' '.join(out))
