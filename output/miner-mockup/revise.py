from pathlib import Path
old=Path('output/miner-mockup/build.py').read_text(encoding='utf-8-sig')
prefix=old.split("p('MSIS 524');")[0]
body=r'''
p('MSIS 524'); d.add_paragraph('MINER Release One Funding Proposal','Title')
p('Mobile Inspection, Navigation, and Exploration Robot')
p('Team 2'); p('Azis\nEmerson\nMariam\nLeila\nGiana')
p('November 1, 2026')
p('Release one proposal')
d.add_page_break()
h('Executive summary')
p('We seek $240,000 to assemble and test MINER, an autonomous shallow-soil sampling robot for mineral exploration. Release one aims to secure funding and two paid pilot orders while demonstrating the navigation, sampling and mapping functions defined in Step 2. The order target is proposed for team approval. Funding supports a measurable pilot before commercial expansion.')
p('A geologist approves points, depths and boundaries. MINER navigates with cameras and sensors, drills, separates samples and records their locations; it stops and requests help when blocked. Humans deliver samples to a laboratory and interpret results. Release one serves cleared, gently sloping sites with soft soil, to 0.5 metres. Hard rock, underground and explosive environments remain outside scope.')
p('Our Porter five forces assessment is a planning hypothesis. Rivalry from established equipment providers makes a broad robotics offering difficult. Buyer power is high because exploration firms can demand proof of cost and sample quality. Supplier power creates exposure to specialist component prices and lead times. New entrants can buy standard components, but reliable sampling integration and field validation are barriers. Substitutes include manual crews and remotely operated equipment. We therefore propose a niche in autonomous shallow sampling with separate containers and laboratory-linked records; customer and competitor validation must confirm this gap.')
p('Buy the platform, drill, sensors and controllers; adapt navigation software; build sample handling and mission records. Release $60,000 for validation and procurement trials first, then $180,000 after a geologist and laboratory approve the protocol and component tests support the soil and depth limits. This limits investment if the mechanism or customer need fails validation.')
h('Purpose benefits and success')
p('Commercial success means committed funding of $240,000 and two signed paid pilot orders by June 25, 2027. Technical success means three consecutive ten-point missions without manual driving or physical assistance; at least nine usable samples per mission, within 5 cm of approved depths ending at 0.2 or 0.5 metres; and ten correctly matched laboratory records, with coordinates within 0.5 metres of surveyed references. Test obstacles, boundaries and stopping on connection loss.')
p('Compare equal coverage and sample quality with current practice. Proposed benefits are 20% lower total cost per usable sample and 30% fewer person-hours in the sampling area. Include preparation, supervision, maintenance and failures. Exposure reduction does not establish an injury reduction.')
d.add_page_break()
h('Sponsor and stakeholders')
table(['Stakeholder','Role and decision'],[
('Company sponsor','Proposed funder; exploration manager approves budget and pilot orders.'),
('Geologist and crew','Adopt mission planning and sample handoff; accept quality and coverage.'),
('Safety lead and lab','Can block unsafe trials or reject sample quality.'),
('Purchasing software and strategy leads','Own sourcing, software readiness and competitive positioning.')],[2,4.5])
h('Milestones and assumptions')
p('All dates are proposed for 2027, assuming funding approval on January 4 and protocol approval by January 29.')
table(['Date and milestone','Assumption and response if false'],[
('March 26\nAssembly complete','Parts arrive within eight weeks and interfaces fit. If false, change supplier or revise design and date.'),
('May 21\nPrototype navigation testing','Assembled hardware and navigation software are ready; a controlled site is available. If false, defer field entry.'),
('June 25\nMining environment testing','A cleared soft-soil exploration site, trained crew and lab turnaround are available. If false, extend the pilot; do not expand terrain scope.')],[2,4.5])
h('Three risks with owners and responses')
table(['Risk and owner','Response'],[
('Assembly delay and supply cost uncertainty\nPurchasing department head','Obtain time-limited quotes, qualify backup suppliers and order long-lead parts early. Use contingency only after review; revise scope if costs exceed budget.'),
('Software deployment delay\nSoftware department head','Reserve integration staff, train crew leads and test deployment weekly on the actual robot. Resolve staffing or handoff gaps; delay field trials if safety checks fail.'),
('Competitor market share advantage\nStrategy team and tech team','Validate an underserved technological niche: shallow autonomous sampling with separate samples and lab-linked records. Interview buyers and compare rival capabilities before committing to differentiation.')],[2.4,4.1])
d.add_page_break()
h('Adoption plan')
p('Geologists replace manual instructions with approved digital missions. Provide templates and practice; verify independent mission approval and record reconciliation. Crews load containers, run checks and hand samples to the lab. Provide checklists, emergency-stop drills and support. Track checklist use, interventions and handoff errors; require three accepted missions with no identity errors. Safety staff retain stop authority.')
h('Market size and basic financials')
p('Industry context: The Business Research Company estimates the global mining market at $2.06 trillion in 2025, covering minerals, metals, coal, stone and support activities [1]. Fortune Business Insights estimates mining robotics at $1.51 billion in 2025, including haulage, drilling and other robot applications [2]. These published estimates have broader scopes than MINER and are not its addressable market.')
p('MINER estimates below are assumptions. Top down: 2,000 global exploration firms × 20% with suitable soil campaigns × two annual campaigns × $25,000 = $20 million annual addressable service revenue. Bottom up: 40 reachable firms × two campaigns × $25,000 = $2 million annual serviceable revenue. Validate firm counts, terrain and buying intent; unsuitable terrain would narrow the segment.')
p('Offer managed sampling at an assumed $25,000 per campaign; MINER owns the robot. Two paid pilot orders represent $50,000 in bookings, not earned revenue until delivered. Five customers buying two campaigns would yield $250,000 in first-year revenue if all are delivered.')
p('Investment allowances total $240,000: hardware $70,000; engineering $100,000; pilot and lab $25,000; training and support $15,000; contingency $30,000. Obtain supplier quotes and staffing estimates before approval.')
p('At an assumed $15,000 direct cost per campaign, contribution is $10,000 or 40%. Include equipment allocation, transport, supervision, maintenance and consumables. With $100,000 annual fixed cost, ten campaigns reach operating break-even; twenty generate $100,000 before tax. Recovering the initial $240,000 then takes 2.4 years, excluding ramp-up and financing; validate cost and capacity in the pilot.')
h('Sources')
p('[1] The Business Research Company, Mining Market Report 2026. thebusinessresearchcompany.com/report/mining-global-market-report')
p('[2] Fortune Business Insights, Mining Robotics Market, updated October 5, 2026. fortunebusinessinsights.com/mining-robotics-market-116024')
h('AI Assistance Statement')
p('OpenAI Codex helped draft and revise this proposal and locate market estimates. The team must verify assumptions and align this statement with the syllabus AI policy before submission.')
for el in list(d.styles.element.iter(qn('w:pBdr'))):
 el.getparent().remove(el)
for el in list(d.element.iter(qn('w:pBdr'))):
 el.getparent().remove(el)
d.save(out/'MINER_Report_Revised.docx')
print(out/'MINER_Report_Revised.docx')
'''
Path('output/miner-mockup/build_revised.py').write_text(prefix+body,encoding='utf-8')
