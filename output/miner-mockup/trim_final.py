from pathlib import Path
p=Path('output/miner-mockup/build_revised.py'); s=p.read_text(encoding='utf-8-sig'); lines=s.splitlines()
for i,line in enumerate(lines):
 if line.startswith("p('Industry context:"):
  lines[i]="p('Industry context: 2025 global mining revenue was estimated at $2.06 trillion [1]; mining robotics at $1.51 billion [2]. Both markets are broader than MINER’s addressable segment.')"
 if line.startswith("p('Assume managed sampling"):
  lines[i]="p('At $25,000 per managed campaign, two pilot orders book $50,000, earned on delivery. Ten delivered campaigns yield $250,000 annual revenue; MINER owns the robot.')"
p.write_text('\n'.join(lines),encoding='utf-8')
