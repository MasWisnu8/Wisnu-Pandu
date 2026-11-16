// ============================================================
//  DATA SUPADA - Website Pribadi Wisnu Pandu Hidayat
//  Hanya file ini yang bisa diedit lewat admin.html
//  Formatnya JavaScript sederhana (JSON-ish), janganubah
//  struktur kunci (keys) atau nama variabel "SITE".
// ============================================================

window.SITE = {

  // ---- PUPUK / UMUM -------------------------------------------------
  site: {
    title:       "Wisnu Pandu Hidayat",
    subtitle:    "Front-End Developer & UI/UX Enthusiast",
    tagline:     "Membangun pengalaman digital yang cepat, rapi, dan digunakan orang.",
    description: "Saya Wisnu Pandu Hidayat, Front-End Developer yang fokus pada pembangunan website dan aplikasi web yang fungsional, cepat, dan estetis.",
    avatar:      "WP",                       // fallback huruf kalau foto profil belum di-set
    photo:       "",                         // URL foto profil (kosong = pakai fallback huruf)
    isDark:      true,                       // true = tema gelap, false = terang
  },

  // ---- TENTANG -----------------------------------------------------
  about: {
    name:        "Wisnu Pandu Hidayat",
    title:       "Front-End Developer",
    subtitle:    "Menciptakan antarmuka yang rapi dan berfungsi",
    bio:         "Saya mengkhususkan diri dalam membangun halaman web yang cepat, responsif, dan mudah digunakan. Saya senang menghadapi tantangan dari desain hingga interaksi pengguna, serta selalu mengikuti perkembangan teknologi frontend.",
    stats: [
      { label: "Tahun Pengalaman", value: "3+ th" },
      { label: "Proyek Selesai",   value: "25+" },
      { label: "Klien",            value: "18+" }
    ],
    // 3 hal yang kamu suka / tujuan
    focus: [
      "Membangun halaman yang ringan dan cepat", "Menggunakan standar aksesibilitas", "Kolaborasi dengan tim desain & produk"
    ]
  },

  // ---- KETERAMPILAN -------------------------------------------------
  skills: [
    { name: "HTML / HTML5",      level: 90 },
    { name: "CSS / SCSS",        level: 85 },
    { name: "JavaScript (ES6+)", level: 80 },
    { name: "TypeScript",        level: 70 },
    { name: "React / Next.js",   level: 80 },
    { name: "Tailwind CSS",      level: 85 },
    { name: "Git & GitHub",      level: 85 },
    { name: "Figma",             level: 75 },
    { name: "API & REST",        level: 70 },
    { name: "Testing (Vitest)",  level: 60 }
  ],

  // ---- PROJEK ------------------------------------------------------
  projects: [
    {
      title:       "Dashboard Admin",
      description: "Dashboard management dengan dashboard ringan, grafik, dan route proteksi.",
      tech:      ["React", "TypeScript", "Tailwind", "Recharts"],
      link:      "https://github.com",
      repo:      "https://github.com",
      cover:     ""
    },
    {
      title:       "E-commerce Landing Page",
      description: "Halaman utama toko online dengan carousel, filter, dan checkout ringan.",
      tech:      ["HTML", "CSS", "JavaScript", "Swiper"],
      link:      "https://github.com",
      repo:      "https://github.com",
      cover:     ""
    },
    {
      title:       "Portofolio Pribadi",
      description: "Situs ini (site pribadi) dengan tema gelap, editor admin, dan responsif penuh.",
      tech:      ["HTML", "CSS", "JavaScript"],
      link:      "https://github.com",
      repo:      "https://github.com",
      cover:     ""
    }
  ],

  // ---- PENGALAMAN -------------------------------------------------
  experience: [
    {
      role:      "Front-End Developer",
      company:   "Startup Digital",
      period:    "2024 - sekarang",
      description: "Membangun fitur web dan meningkatkan performa aplikasi harian."
    },
    {
      role:      "Mahasiswa / Freelance",
      company:   "Freelance & Kampus",
      period:    "2022 - 2024",
      description: "Menyelesaikan proyek web untuk berbagai klien mulai dari landing page sampai sistem sederhana."
    }
  ],

  // ---- KONTAK -----------------------------------------------------
  contact: {
    email:     "wisnu.example@gmail.com",   // ganti dengan email asli kamu
    github:    "https://github.com/MasWisnu8",
    linkedin:  "https://linkedin.com/in/wisnu",
    twitter:   "https://twitter.com",
    phone:     ""
  },

  // ---- FOOTER -----------------------------------------------------
  footer: {
    copyright: "© 2026 Wisnu Pandu Hidayat. All rights reserved."
  }
};
