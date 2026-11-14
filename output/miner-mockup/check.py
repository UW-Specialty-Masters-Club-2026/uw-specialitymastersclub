import pypdfium2 as pdf
from pathlib import Path
p=Path('output/miner-mockup/qa'); d=pdf.PdfDocument(str(p/'MINER_Report_Mockup.pdf'))
print('Pages',len(d))
for i,page in enumerate(d):
 print(i+1,page.get_textpage().get_text_range()[:80])
 page.render(scale=1.3).to_pil().save(p/f'page-{i+1}.png')
