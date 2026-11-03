from pathlib import Path
p=Path('output/miner-mockup/build_revised.py'); s=p.read_text(encoding='utf-8-sig'); lines=s.splitlines()
for i,line in enumerate(lines):
 if line.startswith("p('Our Porter five forces"):
  lines[i]="p('Competition from established equipment providers will require demonstrated performance. We expect buyer bargaining power to be high because mining customers are often large conglomerates whose adoption decisions must account for miners and unions. We expect supplier bargaining power to be relatively low: we plan to source most sensors and mechanical materials from China and compare multiple suppliers, subject to quality and compatibility checks. New entrants can buy standard components, but reliable integration and field validation remain barriers. Manual crews and remotely operated equipment are substitutes. The pilot must demonstrate reliable exploration and mapping, acceptable sample quality and lower total operating costs.')"
 if "Strategy and tech teams validate a niche" in line:
  lines[i]=line.replace('Strategy and tech teams validate a niche rivals do not cover: shallow sampling with separate samples and lab-linked records.','Strategy and tech teams monitor competitors, prioritize reliable exploration and mapping, and improve performance using pilot customer feedback.')
p.write_text('\n'.join(lines),encoding='utf-8')
