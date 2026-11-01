"""python save.py <key> <tool-results png>  -> concepts/<key>.png (earlier takes kept as .vN)"""
import sys, os, shutil
H = os.path.dirname(os.path.abspath(__file__)); TR = r'C:\Users\Daniil\.claude\projects\C--Users-Daniil-Desktop-Aquemi-Website\aa8c96a6-d6eb-4573-a5be-8b37dbb7b989\tool-results'
key, src = sys.argv[1], sys.argv[2]
if not os.path.isabs(src): src = os.path.join(TR, src)
d = os.path.join(H, 'concepts', key + '.png')
if os.path.exists(d):
    k = 2
    while os.path.exists(d.replace('.png', f'.v{k}.png')): k += 1
    d = d.replace('.png', f'.v{k}.png')
shutil.copy(src, d); print(d)
