#!/usr/bin/env python3
import re

path = '/opt/data/cache/scratch/wisnu/data.js'
with open(path, 'r') as f:
    content = f.read()

# Add date & photo fields to each project
# Project 1
old1 = '''      description: "Mengingkatan OEE dari 65% menjadi 85%, produktivitas +15%, mengurangi reject rate dan " +
        "overtime. Dilakukan lewat lean manufacturing, kaizen, dan perbaikan proses produksi.",
      tech:      ["Lean Manufacturing", "Kaizen", "OEE", "Production KPI"],
      link:      "https://www.linkedin.com/in/wisnu-pandu-hidayat-6a7468257",
      repo:      "",
      cover:     ""'''

new1 = '''      description: "Mengingkatan OEE dari 65% menjadi 85%, produktivitas +15%, mengurangi reject rate dan " +
        "overtime. Dilakukan lewat lean manufacturing, kaizen, dan perbaikan proses produksi.",
      tech:      ["Lean Manufacturing", "Kaizen", "OEE", "Production KPI"],
      link:      "https://www.linkedin.com/in/wisnu-pandu-hidayat-6a7468257",
      repo:      "",
      cover:     "",
      date:      "2025-03-15",   // tanggal kegiatan (format YYYY-MM-DD)
      photo:     ""              // foto proyek (diisi lewat admin; base64 data URL atau URL)'''

if old1 in content:
    content = content.replace(old1, new1)
    print("Replaced project 1")
else:
    print("Project 1 pattern NOT found")

# Project 2
old2 = '''      description: "Mendukung pembangunan pabrik baru, instalasi peralatan, integrasi PPIC, serta peningkatan " +
        "kapasitas produksi dan perencanaan kebutuhan bahan baku.",
      tech:      ["Production Planning", "Capacity Planning", "Inventory Analysis", "SAP S/4 HANA"],
      link:      "https://www.linkedin.com/in/wisnu-pandu-hidayat-6a7468257",
      repo:      "",
      cover:     ""'''

new2 = '''      description: "Mendukung pembangunan pabrik baru, instalasi peralatan, integrasi PPIC, serta peningkatan " +
        "kapasitas produksi dan perencanaan kebutuhan bahan baku.",
      tech:      ["Production Planning", "Capacity Planning", "Inventory Analysis", "SAP S/4 HANA"],
      link:      "https://www.linkedin.com/in/wisnu-pandu-hidayat-6a7468257",
      repo:      "",
      cover:     "",
      date:      "2024-11-05",   // tanggal kegiatan
      photo:     ""              // foto proyek'''

if old2 in content:
    content = content.replace(old2, new2)
    print("Replaced project 2")
else:
    print("Project 2 pattern NOT found")

with open(path, 'w') as f:
    f.write(content)

print("Done")
