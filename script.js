/* ============================================================
   RENDER GUEST - Wisnu Pandu Hidayat
   Membaca window.SITE dari data.js, semua bagian jadi HTML.
   Mode ini cuma melihat (view-only), jadi tidak ada form.
   ============================================================ */

(function () {
  "use strict";

  var SITE = window.SITE;
  if (!SITE || !SITE.site) return;

  var isDark = SITE.site.isDark !== false;

  // ---- terapkan tema ----
  if (isDark) {
    document.body.classList.add("dark");
  }

  // ---- ambil elemen ----
  var $ = function (id) { return document.getElementById(id); };
  var render = function () {
    document.querySelector("main").innerHTML = buildPages();
    attachEvents();
  };

  // ---------- HELPER ----------
  function imgFallback() {
    var photo = SITE.site.photo;
    if (photo) return photo;
    return "data:image/svg+xml," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="#' +
      "845EC2" + '" width="100" height="100" rx="50"/><text x="50" y="58" font-size="54" font-family="Segoe UI,sans-serif" font-weight="800" fill="#fff" text-anchor="middle">' +
      escapeHtml(SITE.site.avatar || "U") + "</text></svg>"
    );
  }

  function escapeHtml(s) {
    return String(s || "").replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function skillBar(percent) {
    var p = Math.max(0, Math.min(100, Number(percent) || 0));
    return '<div class="bar"><i style="width:' + p + '%"></i></div>';
  }

  // ---------- HALAMAN ----------
  function buildPages() {
    var html = "";
    html += hero();
    html += about();
    html += skills();
    html += projects();
    html += experience();
    html += contact();
    html += footer();
    return html;
  }

  function hero() {
    return (
      '<section class="hero"><div class="hero-bg"></div><div class="wrap">' +
        '<span class="hero-badge">Halo, Saya</span>' +
        '<div class="hero-avatar"><img src="' + imgFallback() + '" alt=""></div>' +
        '<h1>' + escapeHtml(SITE.site.title || "Wisnu Pandu Hidayat") + '</h1>' +
        '<p class="sig">' + escapeHtml(SITE.site.subtitle || "Production Manager") + '</p>' +
        '<p class="tagline">' + escapeHtml(SITE.site.tagline || "Membangun pengalaman digital yang cepat, rapi, dan digunakan orang.") + '</p>' +
        '<div class="hero-actions">' +
          '<a class="btn btn-primary" href="#tentang">Pelajari Lebih Lanjut</a>' +
          '<a class="btn btn-outline" href="#proyek">Lihat Proyek</a>' +
        '</div>' +
      '</div></section>'
    );
  }

  function about() {
    var stats = (SITE.about && SITE.about.stats) || [];
    var htmlStats = stats.map(function (s, i) {
      return '<div class="stat"><div class="stat-number">' + escapeHtml(s.value || "") + '</div><div class="stat-label">' + escapeHtml(s.label || "") + '</div></div>';
    }).join("");

    var focus = (SITE.about && SITE.about.focus) || [];
    var htmlFocus = focus.map(function (f) {
      return '<li style="margin-bottom:6px; color:var(--text-mid);">✓ ' + escapeHtml(f) + '</li>';
    }).join("");

    return (
      '<section class="section" id="tentang"><div class="wrap">' +
        '<div class="section-head"><span class="badge">Tentang</span><h2>Tentang Saya</h2></div>' +
        '<div class="section-grid">' +
          '<div class="about-card">' +
            '<h3>' + escapeHtml(SITE.about ? SITE.about.name : SITE.site.title) + '</h3>' +
            '<p>' + escapeHtml(SITE.about ? SITE.about.bio : SITE.site.description) + '</p>' +
            '<ul style="margin-top:12px; list-style:none;">' + htmlFocus + '</ul>' +
          '</div>' +
          '<div class="stats-row">' + htmlStats + '</div>' +
        '</div>' +
      '</div></section>'
    );
  }

  function skills() {
    var skills = SITE.skills || [];
    var htmlSkills = skills.map(function (s) {
      return (
        '<div class="skill"><div class="name">' + escapeHtml(s.name || "") + '</div>' +
        '<div class="level">' + (s.level || 0) + '%' + skillBar(s.level || 0) + '</div></div>'
      );
    }).join("");

    return (
      '<section class="section" id="keterampilan"><div class="wrap">' +
        '<div class="section-head"><span class="badge">Keterampilan</span><h2>Keterampilan</h2></div>' +
        '<div class="skills-grid">' + htmlSkills + '</div>' +
      '</div></section>'
    );
  }

  function projects() {
    var projects = SITE.projects || [];
    if (!projects.length) {
      return '<section class="section" id="proyek"><div class="wrap"><div class="section-head"><span class="badge">Proyek</span><h2>Proyek</h2><p style="color:#8a8a8a;">Belum ada proyek yang ditambahkan.</p></div></section>';
    }
    // filter by date if ?date=YYYY-MM-DD is in the URL
    var urlParams = new URLSearchParams(window.location.search);
    var filterDate = urlParams.get("date");
    var filtered = filterDate ? projects.filter(function (p) { return (p.date || "").toLowerCase() === filterDate.toLowerCase(); }) : projects;

    var cards = filtered.map(function (p, i) {
      var photoHtml = "";
      if (p.photo) {
        photoHtml = '<div class="project-photo"><img src="' + escapeHtml(p.photo) + '" alt=""></div>';
      }
      return (
        '<div class="project-card">' +
          photoHtml +
          '<div class="project-body">' +
            '<div class="title">' + escapeHtml(p.title || "Proyek " + (i + 1)) + '</div>' +
            '<div class="tech">' + techTags(p) + '</div>' +
            '<p class="date">Tanggal: ' + escapeHtml(p.date || "") + '</p>' +
            '<p>' + escapeHtml(p.description || "") + '</p>' +
            '<div class="hero-actions" style="margin-top:14px;">' +
              '<a class="btn btn-outline" href="' + safeUrl(p.link) + '" target="_blank" rel="noopener">Lihat Situs</a>' +
              '<a class="btn btn-outline" href="' + safeUrl(p.repo) + '" target="_blank" rel="noopener">Kode Sumber</a>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join("");

    return (
      '<section class="section" id="proyek"><div class="wrap">' +
        '<div class="section-head"><span class="badge">Proyek</span><h2>Proyek</h2></div>' +
        '<div class="projects-filter">' +
          '<label>Cari proyek berdasarkan tanggal: <input type="date" id="projectDateFilter" style="margin-left:8px;"></label>' +
        '</div>' +
        '<div class="section-grid" id="projectList">' + cards + '</div>' +
      '</div></section>'
    );
  }

  function techTags(p) {
    var t = p.tech || [];
    return t.map(function (x) { return '<span>' + escapeHtml(x) + '</span>'; }).join("");
  }

  function safeUrl(u) {
    if (!u) return "#";
    u = String(u).trim();
    if (!u.startsWith("http://") && !u.startsWith("https://")) u = "https://" + u;
    return u;
  }

  function techTags(p) {
    var t = p.tech || [];
    return t.map(function (x) { return '<span>' + escapeHtml(x) + '</span>'; }).join("");
  }

  function safeUrl(u) {
    if (!u) return "#";
    u = String(u).trim();
    if (!u.startsWith("http://") && !u.startsWith("https://")) u = "https://" + u;
    return u;
  }

  function experience() {
    var exps = SITE.experience || [];
    if (!exps.length) {
      return '<section class="section" id="pengalaman"><div class="wrap"><div class="section-head"><span class="badge">Pengalaman</span><h2>Pengalaman</h2><p style="color:#8a8a8a;">Belum ada pengalaman.</p></div></section>';
    }
    var cards = exps.map(function (e, i) {
      return (
        '<div class="exp-card">' +
          '<div class="role">' + escapeHtml(e.role || "") + '</div>' +
          '<div class="company">' + escapeHtml(e.company || "") + '</div>' +
          '<div class="period">' + escapeHtml(e.period || "") + '</div>' +
          '<p>' + escapeHtml(e.description || "") + '</p>' +
        '</div>'
      );
    }).join("");

    return (
      '<section class="section" id="pengalaman"><div class="wrap">' +
        '<div class="section-head"><span class="badge">Pengalaman</span><h2>Pengalaman</h2></div>' +
        '<div class="section-grid">' + cards + '</div>' +
      '</div></section>'
    );
  }

  function contact() {
    var c = SITE.contact || {};
    var email = c.email || "mail@example.com";
    var phone = c.phone || "";
    var github = c.github || "";
    var linkedin = c.linkedin || "";
    var twitter = c.twitter || "";

    function siteItem(ic, label, val, url) {
      if (!url) return "";
      return '<a class="contact-item" href="' + safeUrl(url) + '" target="_blank" rel="noopener"><div class="ic">' + ic + '</div><div class="label">' + label + '</div><div class="val">' + val + '</div></a>';
    }

    return (
      '<section class="section section-alt" id="kontak"><div class="wrap">' +
        '<div class="section-head"><span class="badge">Kontak</span><h2>Kontak</h2></div>' +
        '<div class="section-grid">' +
          '<div class="section-grid" style="grid-template-columns:1fr 1fr;">' +
            '<div class="contact-item"><div class="ic">✉</div><div class="label">Email</div><div class="val"><a href="mailto:' + escapeHtml(email) + '">' + escapeHtml(email) + '</a></div></div>' +
            (phone ? '<div class="contact-item"><div class="ic">📱</div><div class="label">Telepon</div><div class="val">' + escapeHtml(phone) + '</div></div>' : '') +
          '</div>' +
          '<div class="contact-grid">' +
            siteItem('🐙', 'GitHub', 'github.com', github) +
            siteItem('💼', 'LinkedIn', 'linkedin.com', linkedin) +
          '</div>' +
        '</div>' +
      '</div></section>'
    );
  }

  function footer() {
    var copy = (SITE.footer && SITE.footer.copyright) || "© 2026 Wisnu Pandu Hidayat.";
    return (
      '<footer><div class="footer-inner">' +
        '<span class="copyright">' + escapeHtml(copy) + '</span>' +
        '<span class="admin-link">Website ini hanya zakat? <a href="admin.html" style="color:#fff;">Admin</a></span>' +
      '</div></footer>'
    );
  }

  // ---------- EVENT ----------
  function attachEvents() {
    var navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.forEach(function (x) { x.classList.remove("active"); });
        a.classList.add("active");
      });
    });

    // ---- date filter on projects ----
    var dateFilter = $("#projectDateFilter");
    if (dateFilter) {
      dateFilter.addEventListener("change", function () {
        var val = dateFilter.value;
        window.location.search = val ? "?date=" + val : "";
      });
    }
  }

  // render saat siap
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
