// ============================================================
//  DATA SUPADA - Website Pribadi Wisnu Pandu Hidayat
//  Dipelihara lewat admin.html (hanya file ini yang bisa diedit)
//  Format sederhana JS; janganubah struktur kunci (keys).
// ============================================================

window.SITE = {

  // ---- PUPUK / UMUM -------------------------------------------------
  site: {
    title:       "Wisnu Pandu Hidayat",
    subtitle:    "Production Manager & Operational Excellence",
    tagline:     "8+ tahun di industri pabrik manufaktur · Produksi, PPIC, Gudang & Supply Chain",
    description: "Production professional with 8+ years of experience in food manufacturing, specializing in " +
      "Production Management, PPIC, Warehouse Operations, and Supply Chain Coordination. Skilled in leading " +
      "cross-functional teams to improve efficiency, reduce costs, and maintain product quality (GMP, HACCP, " +
      "Food Safety, ISO 22000).",
    avatar:      "WP",
    photo:       "",
    isDark:      true,
  },

  // ---- TENTANG -----------------------------------------------------
  about: {
    name:        "Wisnu Pandu Hidayat",
    title:       "Production Manager",
    subtitle:    "Operational Excellence & Manufacturing Leadership",
    bio:         "Production professional with 8+ years of experience in food manufacturing, specializing in " +
      "Production Management, PPIC, Warehouse Operations, and Supply Chain Coordination. Strong analytical and " +
      "leadership capabilities, experienced in managing production planning, raw material control, production " +
      "scheduling, factory expansion, utility monitoring, and continuous improvement.",
    stats: [
      { label: "Tahun Pengalaman", value: "8+ th" },
      { label: "OEE Terbaik",      value: "65% → 85%" },
      { label: "Produktivitas",    value: "+15%" }
    ],
    focus: [
      "Production Management", "Production Planning", "CAPA",
      "OEE Improvement", "Lean Manufacturing", "Kaizen",
      "Inventory Management", "SOP Development", "Training & Coaching"
    ]
  },

  // ---- KETERAMPILAN -------------------------------------------------
  skills: [
    { name: "SAP S/4 HANA",            level: 80 },
    { name: "Lean Manufacturing",      level: 85 },
    { name: "Production Planning",     level: 85 },
    { name: "CAPA",                    level: 78 },
    { name: "Production Control",      level: 82 },
    { name: "Capacity Planning",       level: 78 },
    { name: "OEE Improvement",         level: 85 },
    { name: "Inventory Management",    level: 80 },
    { name: "SOP Development",         level: 82 },
    { name: "Training & Coaching",     level: 75 },
    { name: "Microsoft Excel (Advanced)", level: 80 },
    { name: "Production Reporting",    level: 78 },
    { name: "Manufacturing Excellence",level: 80 }
  ],

  // ---- PROJEK ------------------------------------------------------
  projects: [
    {
      title:       "Peningkatan OEE & Produktivitas",
      description: "Meningkatkan OEE dari 65% menjadi 85%, produktivitas +15%, mengurangi reject rate dan " +
        "overtime. Dilakukan lewat lean manufacturing, kaizen, dan perbaikan proses produksi.",
      tech:      ["Lean Manufacturing", "Kaizen", "OEE", "Production KPI"],
      link:      "https://www.linkedin.com/in/wisnu-pandu-hidayat-6a7468257",
      repo:      "",
      cover:     "",
      date:      "2025-03-15",   // tanggal kegiatan (format YYYY-MM-DD)
      photo:     ""              // foto proyek (diisi lewat admin; base64 data URL atau URL)
    },
    {
      title:       "Pembangunan Pabrik Baru & Instalasi Alat",
      description: "Mendukung pembangunan pabrik baru, instalasi peralatan, integrasi PPIC, serta peningkatan " +
        "kapasitas produksi dan perencanaan kebutuhan bahan baku.",
      tech:      ["Production Planning", "Capacity Planning", "Inventory Analysis", "SAP S/4 HANA"],
      link:      "https://www.linkedin.com/in/wisnu-pandu-hidayat-6a7468257",
      repo:      "",
      cover:     "",
      date:      "2024-11-05",   // tanggal kegiatan
      photo:     ""              // foto proyek
    }
  ],

  // ---- PENGALAMAN -------------------------------------------------
  experience: [
    {
      role:      "Senior Production Supervisor",
      company:   "PT. Chocomory Cokelat Persada",
      period:    "July 2023 – Present",
      description:
        "In Line Production:\n" +
        "• Lead daily production operations to achieve safety, quality, delivery, productivity, and cost targets.\n" +
        "• Coordinate manpower allocation, machine utilization, and production capacity to maximize efficiency.\n" +
        "• Monitor production performance via KPI dashboards and implement corrective actions to minimize downtime and losses.\n" +
        "• Drive continuous improvement to reduce rejects, improve yield, and stabilize product quality.\n" +
        "• Develop and maintain SOPs to ensure standardized production processes.\n" +
        "• Support new production line development and factory expansion projects.\n" +
        "• Create weekly, monthly, and annual reports and evaluate production results.\n" +
        "• Fulfill FPP sales requests with 100% production output.\n\n" +
        "In Line PPIC & Supply Planning:\n" +
        "• Prepare annual production plans aligned with Sales & Marketing forecasts.\n" +
        "• Develop weekly, monthly, and annual production plans based on sales forecasts and customer demand.\n" +
        "• Calculate monthly and daily raw material requirements using production planning.\n" +
        "• Monitor inventory levels to avoid stock shortages and excess inventory.\n" +
        "• Coordinate purchasing schedules with Procurement to ensure raw material availability.\n" +
        "• Review production capacity and recommend scheduling adjustments.\n\n" +
        "In Line Warehouse & Inventory:\n" +
        "• Monitor daily inventory accuracy through stock opname activities.\n" +
        "• Ensure FIFO and FEFO implementation.\n" +
        "• Control shelf life and material movement.\n" +
        "• Optimize warehouse layout for improved material flow.\n" +
        "• Coordinate finished goods availability to meet customer demand.\n" +
        "• Maintain delivery service levels above company targets.\n\n" +
        "Continuous Improvement Achievements:\n" +
        "• Reduced production rejects through process optimization.\n" +
        "• Improved production stability by optimizing mold sizing parameters.\n" +
        "• Enhanced inventory planning accuracy through demand forecasting.\n" +
        "• Supported factory construction and equipment installation projects.\n" +
        "• Improved cross-functional communication between Production, Purchasing, Marketing, and Warehouse."
    },
    {
      role:      "Formulation Centre",
      company:   "PT. Kobe Boga Utama",
      period:    "October 2017 – February 2023",
      description:
        "• Managed raw material planning and formulation preparation to support uninterrupted production.\n" +
        "• Prepared weekly and monthly material consumption reports.\n" +
        "• Controlled inventory availability and procurement planning.\n" +
        "• Developed formulation schedules integrated with PPIC planning.\n" +
        "• Supported production continuity through preventive material planning.\n" +
        "• Coordinated closely with QA, Production, Purchasing, and Warehouse.\n" +
        "• Applied FEFO principles and monitored material quality.\n\n" +
        "Quantitative Achievement:\n" +
        "• Reduce the reject rate by 0.5% from 1%\n" +
        "• Increasing production output by 15%\n" +
        "• Reduce the overtime by 1.5%\n" +
        "• Increasing OEE from 65% to 85%\n" +
        "• Saving 3% on Production costs."
    }
  ],

  // ---- KONTAK -----------------------------------------------------
  contact: {
    email:     "wisnupanduhidayat@gmail.com",
    github:    "",
    linkedin:  "https://www.linkedin.com/in/wisnu-pandu-hidayat-6a7468257",
    twitter:   "",
    phone:     ""
  },

  // ---- FOOTER -----------------------------------------------------
  footer: {
    copyright: "© 2026 Wisnu Pandu Hidayat. All rights reserved."
  }
};
