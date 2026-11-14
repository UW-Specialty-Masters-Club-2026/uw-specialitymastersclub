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
p('Team 2'); p('Azis\nEmerson\nMariam\nLeila\nGiana')
p('November 1, 2026')
p('Release one proposal')
d.add_page_break()
h('Executive summary')
p('We seek $240,000 to assemble and test MINER, an autonomous shallow-soil sampling robot for mineral exploration. Release one aims to secure funding and two paid pilot orders while demonstrating the navigation, sampling and mapping functions defined in Step 2. Funding supports a measurable pilot before commercial expansion.')
p('A geologist approves points, depths and boundaries. MINER navigates with cameras and sensors, drills, separates samples and records their locations; it stops and requests help when blocked. Humans deliver samples to a laboratory and interpret results. Release one serves cleared, gently sloping sites with soft soil, to 0.5 metres. Hard rock, underground and explosive environments remain outside scope.')
p('Established equipment providers create competition. We expect buyer bargaining power to be high because mining corporations are often large conglomerates and must account for miners and unions. Supplier bargaining power is expected to be relatively low: we plan to source most sensors and mechanical materials from multiple suppliers in China, subject to qualification. Standard components enable entry, while integration and field testing remain barriers. Manual crews and remotely operated equipment are substitutes. The pilot must demonstrate reliable exploration, mapping and sampling at lower total cost.')
p('Buy the platform, drill, sensors and controllers; adapt navigation software; build sample handling and mission records. Release $60,000 for validation and procurement trials first, then $180,000 after a geologist and laboratory approve the protocol and component tests support the soil and depth limits. This limits investment if the mechanism or customer need fails validation.')
h('Purpose benefits and success')
p('Commercial success means committed funding of $240,000 and two signed paid pilot orders by June 25, 2027. Technical success means three consecutive ten-point missions without manual driving or physical assistance; at least nine usable samples per mission, within 5 cm of approved depths ending at 0.2 or 0.5 metres; and ten correctly matched laboratory records, with coordinates within 0.5 metres of surveyed references. Test obstacles, boundaries and stopping on connection loss.')
p('Compare equal coverage and sample quality with current practice. Proposed benefits are 20% lower total cost per usable sample and 30% fewer person-hours in the sampling area. Include preparation, supervision, maintenance and failures. Exposure reduction does not establish an injury reduction.')
d.add_page_break()
h('Sponsor and stakeholders')
table(['Stakeholder','Role and decision'],[
('Mining companies','Prospective funders, buyers and pilot hosts; approve funding and orders.'),
('Robotics research labs','Prospective research sponsors and validation partners; provide expertise and test facilities.'),
('Geologist and crew','Adopt missions and handoff; accept quality.'),
('Safety lead and lab','Can block unsafe trials or reject sample quality.'),
('Purchasing software and strategy leads','Own sourcing, deployment and positioning.')],[2,4.5])
h('Milestones and assumptions')
p('All dates are proposed for 2027, assuming funding approval on January 4 and protocol approval by January 29.')
table(['Date and milestone','Assumption and response if false'],[
('March 26\nAssembly complete','Parts arrive in eight weeks and interfaces fit; otherwise revise supplier or design.'),
('May 21\nPrototype navigation testing','Hardware, software and controlled site are ready; otherwise defer field entry.'),
('June 25\nMining environment testing','Soft-soil site, trained crew and lab access are ready; otherwise extend pilot.')],[2,4.5])
h('Three risks with owners and responses')
table(['Risk and owner','Response'],[
('Assembly delay and supply costs\nPurchasing department head','Get firm quotes and backup suppliers; order early. Review contingency use; reduce scope if over budget.'),
('Software deployment delay\nSoftware department head','Reserve staff, train crew leads and test deployment weekly. Fix staffing gaps; defer unsafe trials.'),
('Competitor share gains\nStrategy team and tech team','Strategy and tech teams monitor competitors, prioritize reliable exploration and mapping, and improve performance using pilot customer feedback.')],[2.4,4.1])
d.add_page_break()
h('Adoption plan')
p('Mining companies will test MINER to replace manual exploration, surveying and mine-mapping tasks, aiming to reduce human exposure and salary costs. Provide robots, training, maintenance and integration support; retrain affected staff for oversight. Measure regular use, labor-hours replaced, human exposure and total sampling cost, including remaining supervision. Later releases may automate drilling, cutting and heavy machinery after separate safety validation; release one covers surface navigation, shallow sampling and mapping.')
h('Market size and basic financials')
p('Industry context: 2025 global mining revenue was estimated at $2.06 trillion [1]; mining robotics at $1.51 billion [2]. Both markets are broader than MINER’s addressable segment.')
p('MINER assumptions: top down, 2,000 exploration firms × 20% suitable × two annual campaigns × $25,000 = $20 million annual addressable revenue. Bottom up, 40 reachable firms × two campaigns × $25,000 = $2 million serviceable revenue. Validate counts, terrain and buying intent; unsuitable terrain narrows the segment.')
p('At $25,000 per managed campaign, two pilot orders book $50,000, earned on delivery. Ten delivered campaigns yield $250,000 annual revenue; MINER owns the robot.')
p('The $240,000 budget allows $70,000 hardware, $100,000 engineering, $25,000 pilot and lab, $15,000 training and support, and $30,000 contingency. Validate with quotes and staffing estimates.')
p('Assume $15,000 direct cost per campaign, including equipment, transport, supervision, maintenance and consumables: contribution is $10,000 or 40%. At $100,000 annual fixed cost, ten campaigns break even; twenty generate $100,000 before tax. Pilot results must validate costs and capacity.')
h('Sources')
p('[1] The Business Research Company, Mining Market Report 2026.')
p('[2] Fortune Business Insights, Mining Robotics Market, October 5, 2026.')
h('AI Assistance Statement')
p('OpenAI Codex helped draft this proposal and locate market estimates. The team must verify assumptions and align this statement with the syllabus AI policy.')
from docx.opc.constants import RELATIONSHIP_TYPE as RT
for par in d.paragraphs:
 if par.text.startswith('[1]') or par.text.startswith('[2]'):
  url='https://www.thebusinessresearchcompany.com/report/mining-global-market-report' if par.text.startswith('[1]') else 'https://www.fortunebusinessinsights.com/mining-robotics-market-116024'
  rid=d.part.relate_to(url,RT.HYPERLINK,is_external=True)
  link=OxmlElement('w:hyperlink'); link.set(qn('r:id'),rid)
  for run in list(par._p):
   if run.tag==qn('w:r'): par._p.remove(run); link.append(run)
  par._p.append(link)
for el in list(d.styles.element.iter(qn('w:pBdr'))):
 el.getparent().remove(el)
for el in list(d.element.iter(qn('w:pBdr'))):
 el.getparent().remove(el)
d.save(out/'MINER_Report_Revised.docx')
print(out/'MINER_Report_Revised.docx')
