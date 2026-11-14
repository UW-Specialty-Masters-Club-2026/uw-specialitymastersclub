from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from pathlib import Path
out=Path('output/miner-mockup')
d=Document()
s=d.sections[0]; s.top_margin=s.bottom_margin=s.left_margin=s.right_margin=Inches(1)
s.page_width=Inches(8.5); s.page_height=Inches(11)
for name in ['Normal','Title','Subtitle','Heading 1','Heading 2']:
 st=d.styles[name]; st.font.name='Calibri'; st.font.size=Pt(11); st.font.color.rgb=RGBColor(0,0,0)
 st.paragraph_format.line_spacing=1.5; st.paragraph_format.space_after=Pt(5)
d.styles['Title'].font.size=Pt(24)
d.styles['Heading 1'].font.bold=True
d.styles['Heading 1'].paragraph_format.space_before=Pt(9)
def p(t): return d.add_paragraph(t)
def h(t): d.add_heading(t,1)
def table(head,rows,widths):
 t=d.add_table(rows=1, cols=len(head)); t.autofit=False
 for c,w in zip(t.columns,widths): c.width=Inches(w)
 for c,txt in zip(t.rows[0].cells,head): c.text=txt
 for row in rows:
  for c,txt in zip(t.add_row().cells,row): c.text=txt
 for i,row in enumerate(t.rows):
  pr=row._tr.get_or_add_trPr(); pr.append(OxmlElement('w:cantSplit'))
  if i==0: pr.append(OxmlElement('w:tblHeader'))
  for c,w in zip(row.cells,widths):
   c.width=Inches(w); cp=c._tc.get_or_add_tcPr()
   borders=OxmlElement('w:tcBorders')
   for edge in ['top','left','bottom','right']:
    e=OxmlElement('w:'+edge); e.set(qn('w:val'),'single'); e.set(qn('w:sz'),'4'); e.set(qn('w:color'),'D9D9D9'); borders.append(e)
   cp.append(borders)
   if i==0:
    sh=OxmlElement('w:shd'); sh.set(qn('w:fill'),'E8EDF2'); cp.append(sh)
   for par in c.paragraphs:
    par.paragraph_format.space_after=Pt(0); par.paragraph_format.space_before=Pt(0)
    for run in par.runs: run.bold=(i==0)
 return t
p('MSIS 524'); d.add_paragraph('MINER Release One Funding Proposal','Title')
p('Mobile Inspection, Navigation, and Exploration Robot')
p('Report mockup based on Step 2 Product Definition')
p('Team 2'); p('Azis\nEmerson\nMariam\nLeila\nGiana')
p('November 1, 2026')
p('Planning figures and dates are proposed assumptions for team review.')
d.add_page_break()
h('Executive summary')
p('We propose a stage-gated investment of $240,000 to test MINER, an autonomous robot for shallow soil sampling in mineral exploration. Release one will establish whether it can collect reliable samples with lower total cost and less human exposure in the sampling area. Funding buys evidence for a commercial decision; savings and customer demand remain unproven.')
p('A geologist approves the sampling points, depths and boundaries. MINER uses cameras, positioning and sensor data to navigate, drill, separate samples and record their locations. It stops and requests help when it cannot proceed. Staff deliver samples to a qualified laboratory, and a geologist interprets the results. The map supports further exploration; it does not establish an economic deposit.')
p('Release one covers cleared, gently sloping sites with soft soil and a maximum depth of 0.5 metres. Hard rock, underground work, explosive environments, onboard chemical analysis and fleet operation remain outside scope. We will buy the mobile platform, drilling components, sensors and control hardware; adapt navigation software; and build sample handling, mission controls and traceable records.')
p('The pilot will compare equivalent coverage and laboratory-agreed sample quality against current sampling practice. It must count preparation, supervision, maintenance, failed missions and equipment costs. Proposed commercial gates are at least 20% lower cost per usable sample and 30% fewer person-hours in the sampling area. Reduced exposure is a proxy, not proof of fewer injuries.')
p('Approve $60,000 for customer validation, supplier trials and design first. Release the remaining $180,000 only after a geologist and laboratory accept the sampling protocol and a supplier test supports the depth and soil limits. If these assumptions fail, narrow the terrain or depth, redesign the mechanism, or stop the project.')
h('Purpose and success measures')
p('Technical acceptance retains Step 2 targets: ten approved points without manual driving or physical assistance; at least nine usable samples from intervals ending at 0.2 or 0.5 metres, within 5 cm of target depth; and ten laboratory results matched without record errors. Coordinates must be within 0.5 metres of surveyed references. Test boundary control, obstacle avoidance and stopping on connection loss. A proposed final gate is three consecutive ten-point missions meeting these criteria.')
d.add_page_break()
h('Sponsor and stakeholders')
table(['Stakeholder','Role and decision'],[
('Company sponsor','Funds pilot; manager approves budget and acceptance.'),
('Geologist and crew','Adopt mission planning and handoff; accept coverage and quality.'),
('Safety lead and lab','Can block unsafe trials or reject sample quality.'),
('Product lead and suppliers','Deliver integration, parts and support.')],[2,4.5])
h('Milestones and conditions')
p('Proposed dates assume approval on January 4, 2027. Shift the schedule if funding, access or procurement slips.')
table(['Date and milestone','Assumption and consequence if false'],[
('Jan 29\nValidation gate','Geologist, site and lab accept protocol; otherwise defer hardware.'),
('Mar 26\nBench prototype','Parts arrive within eight weeks; otherwise revise supplier or date.'),
('May 21\nMission tests','Drilling and separation work in soft soil; otherwise reduce depth or redesign.'),
('Jun 25\nRelease decision','Access and lab results fit five weeks; otherwise extend pilot.')],[2,4.5])
h('Three principal risks')
table(['Risk and owner','Response'],[
('Contamination\nSampling engineer','Lab agrees cleaning and blank checks; reject contaminated batches and redesign.'),
('Unsafe motion\nSafety lead','Test boundaries, emergency stop and connection loss; suspend after safety failure.'),
('Crew resistance\nPilot geologist','Co-design handoff, train leads and track interventions and errors.')],[2,4.5])
d.add_page_break()
h('Adoption plan')
p('Geologists replace manual instructions with approved digital missions. Provide a mission template and practice session. Verify that the pilot geologist approves a mission and reconciles records without developer help.')
p('Crews load containers, run checks, handle exceptions and hand samples to the lab. Provide a checklist, practice, emergency-stop training and support contact. Track checklist use, interventions and handoff errors. Require three accepted missions with no identity errors; safety staff retain stop authority.')
h('Market size and basic financials')
p('All USD figures below are illustrative assumptions requiring validation. Offer managed sampling at $25,000 per site campaign; MINER owns and maintains the robot.')
p('Bottom up: 40 reachable firms × two suitable annual campaigns × $25,000 = $2 million annual serviceable revenue. Five customers buying two campaigns yield $250,000 in year one. Validate the prospect list, terrain and buying intent.')
p('Top down: 2,000 global exploration firms × 20% with suitable soil campaigns × two annual campaigns × $25,000 = $20 million annual addressable revenue. The 40 reachable firms are 10% of the 400 suitable firms. Replace these assumed counts with sourced estimates; a small suitable segment changes the target market.')
p('Investment: $70,000 hardware, $100,000 engineering and integration, $25,000 pilot and laboratory work, $15,000 training and support, and $30,000 contingency total $240,000. These are budget allowances pending quotes and staffing estimates.')
p('Assume $15,000 direct cost per campaign, covering equipment allocation, transport, supervision, maintenance and consumables. Contribution is $10,000, or 40%. With $100,000 annual fixed costs, ten campaigns break even; twenty produce $100,000 before tax. Recovering $240,000 then takes 2.4 years, excluding ramp-up and financing. Validate cost and capacity in the pilot.')
h('AI Assistance Statement')
p('OpenAI Codex helped structure and draft this mockup and its planning scenarios using the team’s Step 2 document. Team verification and alignment with the syllabus AI policy are required before submission.')
for el in list(d.styles.element.iter(qn('w:pBdr'))):
 el.getparent().remove(el)
for el in list(d.element.iter(qn('w:pBdr'))):
 el.getparent().remove(el)
d.save(out/'MINER_Report_Mockup.docx')
print(out/'MINER_Report_Mockup.docx')


