from pathlib import Path
p=Path('output/miner-mockup/build_revised.py'); s=p.read_text(encoding='utf-8-sig')
a='Geologists adopt digital missions; provide templates and practice, then verify independent approval and record reconciliation. Crews adopt container loading, checks and lab handoff; provide checklists, safety drills and support. Track checklist use, interventions and handoff errors. Require three accepted missions with no identity errors; safety staff retain stop authority.'
b='Mining companies will trial MINER, then replace manual soil-survey and sampling tasks after acceptance. Provide the robot, operator training, maintenance and integration support. Measure paid pilots converting to regular use, survey labor-hours replaced, total cost per usable sample and human exposure. Include remaining supervision and support costs when assessing salary savings. Retrain affected staff for oversight and maintenance. Later releases may replace tasks in drilling, cutting and heavy machinery operation, subject to separate safety validation; release one covers shallow soil sampling.'
assert a in s
p.write_text(s.replace(a,b),encoding='utf-8')
