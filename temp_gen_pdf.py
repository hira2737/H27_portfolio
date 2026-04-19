from pathlib import Path

objects = []
objects.append("1 0 obj<< /Type/Catalog/Pages 2 0 R>>endobj\n")
objects.append("2 0 obj<< /Type/Pages/Count 1/Kids[3 0 R]>>endobj\n")
objects.append("3 0 obj<< /Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]/Contents 4 0 R/Resources<< /Font<< /F1 5 0 R >> >> >>endobj\n")
stream = "BT /F1 24 Tf 72 720 Td (Resume placeholder) Tj ET"
objects.append(f"4 0 obj<< /Length {len(stream)} >>stream\n{stream}\nendstream\nendobj\n")
objects.append("5 0 obj<< /Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj\n")
pdf = "%PDF-1.1\n"
positions = []
for obj in objects:
    positions.append(len(pdf.encode("utf-8")))
    pdf += obj
xref_offset = len(pdf.encode("utf-8"))
lines = ["xref","0 6","0000000000 65535 f "]
for pos in positions:
    lines.append(f"{pos:010} 00000 n ")
lines.append("trailer")
lines.append("<< /Root 1 0 R /Size 6 >>")
lines.append("startxref")
lines.append(str(xref_offset))
lines.append("%%EOF")
pdf += "\n".join(lines)
Path("src/assets/Resume_Hira.pdf").write_bytes(pdf.encode("utf-8"))
