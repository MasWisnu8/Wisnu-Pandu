# DESIGN SYSTEM — Wisnu Pandu Hidayat Portfolio (Admin Dashboard)

Pola desain (design system) untuk dashboard admin + halaman utama `index.html` di repo `Wisnu-Pandu`. Sistem ini ada biar UI tetap **elegant, rapi, dan ramah recruiter** — tetap simple banget buat admin (anak SD bisa paham) sambil nunjukin siapa dirinya lewat UI yang professional.

> *"Simple enough for elementary-school users to use without being complicated."*

---

## 1. COLOR PALETTE — Brand

| Variasi | Hex | Dipakai untuk |
|---|---|---|
| Primary | `#845EC2` | Tombol utama, badge, link aktif, focus ring |
| Primary-dark | `#6E45A8` | Hover state tombol |
| Dark | `#2C3D2E` | Hero overlay, footer, judul teks utama |
| Dark-2 | `#1F2E24` | Hero gradient lelaki |
| Dark-3 | `#16201A` | Overlay gelap maksimal |
| Blue | `#0081CF` | Aksen, statistik kecil |
| Teal | `#0089BA`, `#008E9B` | Aksen secondary |
| Green | `#008F7A` | Status sukses, checkbox |
| Surface | `#f6f4f0` | Background body, grid yang terpisah |
| Panel | `#ffffff` | Kartu form, card isi |
| Text | `#24302a` | Teks utama |
| Text-mid | `#5c6b60` | Etiket, deskripsi singkat |
| Text-light | `#8a938d` | Konten kurang penting |
| Border | `#e4e1d9` | Divider, form field |

> Hak akses kontras: teks gelap #24302a di atas #f6f4f0 = 12.6:1; tombol primary #845EC2 di hitam #2C3D2E = 5.1:1.

---

## 2. TYPOGRAPHY

- **Font stack:** `'Segoe UI', 'Inter', 'Roboto', 'Helvetica Neue', sans-serif`
- **Scale (rem)** — berbasis `16px` root:
  - `display/title`: `2.4rem` (H1 utama)
  - `h2`: `1.6rem`
  - `h3`: `1.25rem`
  - `body`: `1rem` (paragraf, labels)
  - `label`: `0.82rem` (form label)
  - `caption`: `0.72rem` (hint, footer)

### Weights
- Judul / brand: `800`
- Subjudul: `700`
- Body / deskripsi: `400`
- Labels / captions: `600`
- Ketik: larik (letter-spacing) `1px` untuk teks "UPPERCASE" badge.

---

## 3. SPACING & LAYOUT

- **Base unit:** `8px`
- **Max width container:** `1100px`, ditengah (center), `margin: 0 auto`
- **Section padding (desktop):** `56–72px` atas-bawah, `24px` kiri-kanan
- **Grid gap (kartu/item):** `16px` vertikal, `12px` horizontal
- **Form group:** fokus border + pelipat (border-radius) `12px`
- **Card radius:** `16px`, `shadow: 0 1px 3px rgba(44,61,46,.07)`

### Layout papan
```
┌──────────────────────────────────────────────┐
│ Header (brand + page title + aksi)           │
├──────────┬───────────────────────────────────┤
│ Sidebar  │ Konten / Form                     │
│ (nav)    │ + Preview (live)                  │
│          │                                   │
│ • Profil │  [Form panes with data-path]      │
│ • Tentang│  │  │                         │
│ • Keter  │  └─── live output (guest HTML)  │
│ • Proyek │                                   │
│ • Pengl  │                                   │
│ • Kontak │                                   │
│ • Penga  │                                   │
└──────────┴───────────────────────────────────┘
```

---

## 4. COMPONENTS

### Buttons
- **Primary** (`.btn-primary`): `#845EC2` bg, white text, `padding: 10px 20px`, `border-radius: 999px`, `font-weight: 700`.
- **Outline** (`.btn-outline`): border `2px` transparent/brand, white text, no bg.
- **Ghost** (`.btn-ghost`): transparent, text color.
- **States:** hover → primary-dark; active → darken; disabled → dim + cursor-not-allowed.

### Badges
- `.badge`: pill radius `999px`, `font-size: .75rem`, white text, brand bg. Used for section titles, categories.
- Variants: `.badge-primary` (#845EC2), `.badge-blue` (#0081CF), `.badge-green` (#008F7A).

### Cards
- `.card`: white bg, `border-bottom: 1px solid #e4e1d9`, radius `16px`, shadow.
- **Project card:** white card, title + tech tags + description + action buttons.
- **Experience card:** white card, role/company/period, `border-bottom: 1px solid`.

### Forms
- `.form-group`: label (font-size 0.82rem, font-weight 600, color text-mid) + input.
- Input fields: `padding: 10px 14px`, border `1px solid var(--border)`, `border-radius: 12px`, `font-family: inherit`.
- Focus state: `border: 2px solid var(--primary)` + subtle box-shadow.
- Checkbox (.isDark / delete confirm): native-styled, green (#008F7A) checked.
- File picker: custom hidden input + label-like text area + photo preview.
- `.form-hint`: `font-size: .72rem`, color text-light, margin-top 6px.

### Skill bars
- `.skill`: card, border-left `4px solid #0089BA`, label + `%`.
- `.level`: bar fill width = value (%), height 8px.

### Avatar
- `.avatar`: `border-radius: 50%`, `border: 4px solid rgba(255,255,255,.28)`, `overlay: hidden`.
- Default initials circle: purple gradient bg + white letters.
- Photo: `border-radius: 50%`, `object-fit: cover`, width = height (e.g. 110×110).

### Photo upload
- `.photo-pick`: relative container, `border: 2px dashed #e4e1d9`, `border-radius: 12px`.
- Hover: border becomes solid brand color.
- File input: `position: absolute`, full cover, `opacity: 0`, cursor pointer.
- Text inside: "Klik untuk pilih..." / "**Foto ada**".

### Modal overlay
- `.modal-overlay`: `position: fixed`, inset 0, bg rgba(22,32,26,.5), hidden (display:none) by default.
- `.modal`: `@apply` style card with title + message + buttons.
- Close on `Escape` key and on backdrop click.

### Toast
- `.toast`: fixed bottom, fade-in, brand color background, white text, `border-radius: 999px`.
- Types: success (green), error (red), info (blue).

### Empty state
- `.empty-state`: center icon + message + optional action button.

---

## 5. DESIGN PRINCIPLES

1. **Elegant but not busy** — generous whitespace, single accent color (brand purple), restrained dark hero.
2. **Recruiter-first** — hero shows name/title/tagline/CTA immediately; hero-background + blur ensures readability.
3. **Simple to use** — one primary action per screen ("Masuk", "Simpan", "Upload"), no jargon in UI labels.
4. **Single source of truth** — `data.js` is the only source; the admin panel is read/write via `data-path`.
5. **Dark/light mode** — site defaults to dark; user toggles the `isDark` field.
6. **Live preview** — every keystroke updates the guest preview, no "save and reload" friction.

---

## 6. STATE VARIANTS

| State | Visual |
|---|---|
| Default input | border #e4e1d9, no highlight |
| Focus | border 2px solid #845EC2, faint shadow |
| Error | border #d9534f, bg #fdf3f2 |
| Success | border #008F7A, text green |
| Loading | spinner / disable + busy cursor |
| Disabled | opacity .6, cursor not-allowed |

---

## 7. ACCESSIBILITY & ACCESSIBILITY

- Focus ring: `outline: 3px solid #0081CF` (offset 2px) — visible on dark & light.
- Color not the only signal: icons + text (e.g., "✕" for delete, "✓" untuk success).
- Touch target: min 44×44px for all interactive elements (mobile friendly).
- Label association: `for` + `id` on every input.
- Skip links + logical DOM order.
- Caption/contrast: body text ≥ 15px, labels ≥ 14px, icons ≥ 24px.

---

## 8. COMPONENT TAXONOMY (CSS CLASSES)

| Component | Classes |
|---|---|
| Page wrapper | `.admin`, `.layout`, `.sidebar`, `.main` |
| Header | `.admin-header`, `.top-right`, `.nav-wrap` |
| Nav item | `.nav-btn`, `.nav-btn.active` |
| Form | `.form-grid`, `.form-group`, `.form-hint`, `.photo-pick`, `.stat-row`, `.focus-row` |
| Input variations | `input`, `textarea`, `select` (via `.form-group`) |
| Cards | `.card`, `.project-card`, `.exp-card`, `.skill` |
| Meta | `.badge`, `.label`, `.value`, `.date` |
| Avatar | `.avatar`, `.avatar-initials`, `.avatar-photo` |
| Overlay | `.modal-overlay`, `.modal`, `.tooltip` |
| Feedback | `.toast`, `.empty-state`, `.photo-pick` |
| Buttons | `.btn`, `.btn-primary`, `.btn-outline`, `.btn-ghost`, `.btn-sm`, `.btn-ok`, `.btn-cancel` |

---

## 9. RULES OF USAGE

- Gunakan only these hex tokens — no inline colors to site.scss.
- `.btn` variations = `.btn.btn-primary` etc.
- Form layout = `.form-grid` (2 col) + `.form-group` per field.
- Don't duplicate `data-path` values in HTML; let JS bind them automatically.
- Use `escapeAttr()` for all dynamic strings.
- Never hardcode HTML in JS strings across the data boundary — use `escapeAttr` + JSON.stringify.

---

## 10. CODE-LEVEL APIS (JS)

`window.STATE` (current section), `window.SECTIONS` (config), `window.SITE` (data). Key functions:

- `showSection(key)` — render form + preview for a section.
- `renderForm()` — build form HTML from `window.SITE` via `data-path` attributes.
- `bindInputs()` — attach `input` events → `setValue(path, val)` → `persist()` + `refreshPreview()`.
- `persist()` — save to `localStorage` (`wiznu_admin_draft`) + set `admin_logged_in`.
- `doLogin(password)` — verify → `localStorage.setItem('admin_logged_in', true)` → show section.
- `refreshPreview()` — regenerate `guestHTML()` from `window.SITE`.
- `pushToGitHub(token, cb)` — PUT `data.js` to GitHub API.
- `escapeAttr(str)` / `escapeHtml(str)` — sanitization.

---

## 11. MOCKUP STRUCTURE (DASHBOARD PAGE)

```
[Login overlay (brand gradient, WP logo, password field, Masuk / Batal)]
  └─→ after login
[Admin workspace]
  ├── Header: brand "Wisnu Pandu" | page title "Profil & Umum" | actions (Simpan, Upload, Dark)
  ├── Sidebar (7 nav items): Profil & Umum, Tentang, Keterampilan, Proyek, Pengalaman, Kontak, Pengaturan & Simpan
  ├── Main
  │   ├── Form pane (data-path inputs + preview)
  │   └── Preview pane (guest HTML render)
  └── Overlays/modals/toasts (errors, confirmations)
```

### UX flow
1. Admin opens `admin.html` → login screen.
2. Enter password → to dashboard.
3. Sidebar → edit that section.
4. Type → preview live updates.
5. "Simpan" → persist to `localStorage`.
6. "Upload" → push `data.js` to GitHub repo.
7. Guest page (`index.html`) reflects changes automatically.
