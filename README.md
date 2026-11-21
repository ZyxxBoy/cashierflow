# CashierFlow

![Status](https://img.shields.io/badge/Status-Dalam%20Pengembangan-orange)
![Version](https://img.shields.io/badge/Version-0.1.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwindcss&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-5-FCC72B?logo=vitest&logoColor=black)
![Playwright](https://img.shields.io/badge/Playwright-E2E-2EAD33?logo=playwright&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployment-black?logo=vercel)

Sistem **Point of Sale (POS)** dan **Manajemen Inventaris** modern berbasis web yang dibangun dengan Next.js (App Router), TypeScript, PostgreSQL, dan Prisma ORM.

CashierFlow dirancang untuk mendigitalkan operasional toko ritel, minimarket, dan usaha mikro kecil menengah (UMKM) melalui pencatatan transaksi terpusat, pengawasan stok barang akurat, serta laporan laba rugi bisnis real-time.

---

## Informasi Proyek

CashierFlow dikembangkan sebagai bagian dari **30 Days Fullstack & DevOps Challenge**.

| Atribut             | Keterangan                                         |
| ------------------- | -------------------------------------------------- |
| Nama Proyek         | CashierFlow                                        |
| Fase Saat Ini       | Setup Basis Data & Pipeline CI/CD (Day 04 Selesai) |
| Versi Saat Ini      | 0.1.0                                              |
| Target Versi Rilis  | 1.0.0 (MVP)                                        |
| Tanggal Mulai       | 20 November 2026                                   |
| Target Rilis        | 3 Desember 2026                                    |
| Durasi Pengembangan | 14 Hari Kerja                                      |
| Pola Arsitektur     | Modular Monolith                                   |
| Platform Deployment | Vercel (Frontend & Serverless) + Neon (PostgreSQL) |

---

## Sasaran Proyek

- Membangun aplikasi full-stack berkualitas produksi (_production-ready_).
- Menerapkan kontrol akses berbasis peran (RBAC) yang aman di sisi server.
- Merancang basis data relasional ternormalisasi dengan integritas ACID.
- Menjamin transaksi checkout kasir bersifat atomik dan idempoten (anti transaksi ganda).
- Memastikan pergerakan persediaan barang tercatat secara kronologis (_immutable audit trail_).
- Menerapkan otomatisasi pengujian (_unit_, _integration_, dan _end-to-end_).
- Mengonfigurasi pipeline otomatisasi CI/CD dengan GitHub Actions dan Vercel.
- Menghadirkan dokumentasi rekayasa perangkat lunak standar industri berbahasa Indonesia.

---

## Fitur Utama

### Autentikasi dan Otorisasi (RBAC)

- Login aman menggunakan email dan kata sandi dengan hashing berstandar industri.
- Manajemen sesi berbasis cookie aman.
- Tiga peran pengguna bawaan: **Owner**, **Admin**, dan **Kasir**.
- Otorisasi ketat di sisi server untuk setiap rute dan mutasi data.

### Point of Sale (Layar Kasir)

- Pencarian produk cepat berdasarkan nama, SKU, atau pemindai barcode fisik.
- Keranjang belanja interaktif berbasis client state (Zustand).
- Perhitungan total transaksi, diskon flat, uang tunai, dan kembalian otomatis.
- Transaksi checkout atomik: pemotongan stok kondisional dan pembuatan nota dalam satu transaksi basis data.
- Sistem idempotensi untuk mencegah transaksi ganda akibat gangguan jaringan.
- Tampilan dan pencetakan struk pembayaran.

### Manajemen Inventaris & Mutasi Stok

- Ringkasan ketersediaan stok produk terkini.
- Pencatatan barang masuk (_Stock In_), barang keluar (_Stock Out_), dan koreksi stok fisik (_Stock Adjustment / Opname_).
- Buku besar mutasi stok (_movement ledger_) yang abadi dan tidak dapat diubah.
- Indikator visual peringatan stok menipis (_low-stock threshold_).

### Master Data

- Pengelolaan data produk, kategori, satuan unit, dan pemasok.
- Validasi keunikan SKU dan barcode.
- Dukungan penonaktifan lunak (_soft deactivation_) agar riwayat transaksi masa lalu tetap utuh.

### Pelaporan & Dasbor Bisnis

- Ringkasan pendapatan bersih, total transaksi, dan produk aktif pada dasbor.
- Laporan estimasi laba kotor menggunakan snapshot harga modal historis (khusus peran Owner).
- Laporan mutasi dan ketersediaan stok barang.
- Filter laporan berdasarkan rentang tanggal mengacu pada zona waktu toko (WIB).

---

## Stack Teknologi

### Frontend

- **Framework**: Next.js 16 (App Router dengan React 19)
- **Bahasa**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4
- **Komponen UI**: shadcn/ui & Radix UI / Base UI
- **Manajemen Formulir**: React Hook Form
- **Validasi Skema**: Zod
- **State Klien Kasir**: Zustand
- **Ikon**: Lucide React

### Backend & Basis Data

- **Server Runtime**: Next.js Server Actions & Route Handlers
- **Autentikasi**: Auth.js
- **Basis Data**: PostgreSQL (Serverless via Neon)
- **ORM**: Prisma ORM
- **Integritas Transaksi**: Prisma Interactive Transactions (`$transaction`)

### Pengujian & Kualitas Kode

- **Unit & Integration Testing**: Vitest 5 & `@vitest/coverage-v8`
- **End-to-End Testing**: Playwright
- **Linting**: ESLint 9 (`eslint-config-next`, `eslint-config-prettier`)
- **Formatting**: Prettier & `prettier-plugin-tailwindcss`

### Infrastruktur & DevOps

- **Repositori**: GitHub
- **Continuous Integration (CI)**: GitHub Actions
- **Continuous Deployment (CD)**: Vercel
- **Database Hosting**: Neon Database

---

## Struktur Direktori Proyek

```text
cashierflow-1/
├── .github/
│   └── workflows/          # Pipeline otomatisasi CI/CD
│       ├── ci.yml          # Continuous Integration (Lint, Test, Typecheck, Build)
│       ├── cd.yml          # Continuous Deployment ke Vercel (Preview & Production)
│       └── migrate-production.yml # Migrasi basis data terisolasi untuk produksi
├── docs/                   # Dokumentasi lengkap rekayasa perangkat lunak
│   ├── BRD.md
│   ├── PRD.md
│   ├── functional-requirements.md
│   ├── non-functional-requirements.md
│   ├── business-rules.md
│   ├── user-stories.md
│   ├── mvp-scope.md
│   ├── architecture.md
│   ├── erd.md
│   ├── data-dictionary.md
│   ├── crud-matrix.md
│   ├── rbac-matrix.md
│   └── database-design.md
├── prisma/
│   ├── migrations/         # Riwayat migrasi skema SQL
│   ├── schema.prisma       # Skema 11 entitas basis data Prisma
│   └── seed.ts             # Data inisialisasi awal (seeder)
├── public/                 # Aset statis publik
├── src/
│   ├── app/                # Next.js App Router (Halaman & Rute API)
│   │   ├── api/
│   │   │   ├── health/     # Endpoint pemantauan keaktifan (/api/health)
│   │   │   └── db-health/  # Endpoint status koneksi database (/api/db-health)
│   │   ├── globals.css     # Konfigurasi Tailwind CSS v4
│   │   ├── layout.tsx      # Root Layout
│   │   └── page.tsx        # Halaman Beranda / Showcase Komponen
│   ├── components/         # Komponen UI bersama (shadcn/ui)
│   │   └── ui/             # Button, Badge, Card, Input, Label, Separator
│   ├── config/             # Konfigurasi aplikasi & validasi environment
│   ├── lib/                # Utilitas pembantu (cn, prisma singleton, formatters)
│   └── server/             # Lapisan logika server
│       └── services/       # Layanan bisnis (HealthService, dsb.)
├── tests/
│   ├── e2e/                # Skenario pengujian Playwright E2E
│   └── unit/               # Pengujian unit Vitest
├── .env.example            # Contoh template environment variables
├── .gitignore
├── AGENTS.md               # Catatan aturan agen Next.js
├── components.json         # Konfigurasi shadcn/ui
├── eslint.config.mjs       # Konfigurasi ESLint
├── next.config.ts          # Konfigurasi Next.js
├── package.json
├── playwright.config.ts    # Konfigurasi Playwright E2E
├── prisma.config.ts        # Konfigurasi Prisma 7 Modern
├── tsconfig.json           # Konfigurasi TypeScript
├── vercel.json             # Konfigurasi deployment Vercel
└── vitest.config.mts       # Konfigurasi pengujian Vitest
```

---

## Dokumentasi Lengkap Proyek

Seluruh dokumentasi teknis tersedia dalam Bahasa Indonesia di dalam direktori [`docs/`](docs/):

| Dokumen                                                                  | Deskripsi                                                                                      |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| [BRD (Business Requirements Document)](docs/BRD.md)                      | Latar belakang bisnis, analisis AS-IS & TO-BE, sasaran, risiko, dan batasan proyek             |
| [PRD (Product Requirements Document)](docs/PRD.md)                       | Visi produk, spesifikasi teknis, persona pengguna, arsitektur modul, dan kriteria rilis        |
| [Persyaratan Fungsional (FRS)](docs/functional-requirements.md)          | Daftar lengkap kebutuhan fungsional sistem dan matriks ketertelusuran                          |
| [Persyaratan Non-Fungsional (NFRS)](docs/non-functional-requirements.md) | Standar performa, keamanan, keandalan, aksesibilitas, dan observabilitas                       |
| [Spesifikasi Aturan Bisnis](docs/business-rules.md)                      | Aturan operasional, rumus perhitungan transaksi, laba kotor, dan idempotensi                   |
| [User Stories & Kriteria Penerimaan](docs/user-stories.md)               | Backlog US-001 s/d US-028 dengan kriteria penerimaan format _Given-When-Then_                  |
| [Cakupan MVP](docs/mvp-scope.md)                                         | Prioritas fitur metode MoSCoW, kriteria keluar (_exit criteria_), dan peta rilis               |
| [Arsitektur Sistem](docs/architecture.md)                                | Arsitektur Modular Monolith, sequence diagram checkout, dan catatan keputusan arsitektur (ADR) |
| [Diagram Relasi Entitas (ERD)](docs/erd.md)                              | Diagram relasi entitas basis data visual (Mermaid) dan konstrain relasional                    |
| [Kamus Data Basis Data](docs/data-dictionary.md)                         | Struktur 11 tabel, tipe data PostgreSQL & Prisma, batasan numerik, dan aturan kolom            |
| [Matriks CRUD](docs/crud-matrix.md)                                      | Matriks interaksi antarmodul terhadap entitas basis data dan kebijakan kepemilikan data        |
| [Matriks RBAC](docs/rbac-matrix.md)                                      | Matriks izin hak akses pengguna bawaan (Owner, Admin, Kasir) dan skenario uji                  |
| [Perancangan Basis Data](docs/database-design.md)                        | Strategi fisik basis data, UUID, ACID, Row-Level Locking, dan rekonsiliasi stok                |

---

## Peta Jalan Pengembangan (14 Hari)

| Hari | Fokus Pengembangan                                                   | Status                  |
| ---- | -------------------------------------------------------------------- | ----------------------- |
| 01   | Perencanaan Proyek, Analisis Kebutuhan Bisnis & Arsitektur           | **Selesai (Completed)** |
| 02   | Desain Basis Data Fisik, ERD, Kamus Data, dan Matriks RBAC/CRUD      | **Selesai (Completed)** |
| 03   | Inisialisasi Proyek Next.js 16, TypeScript, Tailwind v4 & Fondasi UI | **Selesai (Completed)** |
| 04   | Konfigurasi Basis Data PostgreSQL (Prisma + Neon) & CI/CD Pipeline   | **Selesai (Completed)** |
| 05   | Autentikasi Pengguna & Penegakan Otorisasi RBAC di Sisi Server       | **Selanjutnya (Next)**  |
| 06   | Tata Letak Aplikasi (Sidebar, Navbar, Responsive Shell)              | Menunggu (Pending)      |
| 07   | Manajemen Master Data Produk, Kategori, dan Satuan Unit              | Menunggu (Pending)      |
| 08   | Manajemen Pemasok & Pelanggan Opsional                               | Menunggu (Pending)      |
| 09   | Modul Inventaris (Stok Masuk, Keluar, Opname & Riwayat Mutasi)       | Menunggu (Pending)      |
| 10   | Antarmuka Kasir (POS), Pencarian Produk & Keranjang Belanja          | Menunggu (Pending)      |
| 11   | Mesin Checkout Atomik, Pembayaran Tunai & Idempotensi                | Menunggu (Pending)      |
| 12   | Riwayat Penjualan, Detail Faktur & Pencetakan Struk Transaksi        | Menunggu (Pending)      |
| 13   | Dasbor Bisnis, Laporan Penjualan & Laba Kotor                        | Menunggu (Pending)      |
| 14   | Pengujian Regresi Menyeluruh, Optimasi & Rilis Produksi Cloud        | Menunggu (Pending)      |

---

## Panduan Menjalankan Proyek (Getting Started)

### Prasyarat Sistem

- **Node.js**: Versi 20.x, 22.x, atau 24.x (Direkomendasikan versi LTS)
- **npm**: Versi 10.x atau yang lebih baru
- **Git**: Terinstal pada komputer

### 1. Kloning Repositori

```bash
git clone https://github.com/ZyxxBoy/cashierflow.git
cd cashierflow
```

### 2. Instalasi Dependensi

```bash
npm install
```

### 3. Konfigurasi Variabel Lingkungan (_Environment Variables_)

Salin berkas contoh `.env.example` menjadi `.env.local`:

```bash
cp .env.example .env.local
```

Sesuaikan nilai konfigurasi di dalam `.env.local` jika diperlukan.

### 4. Menjalankan Server Pengembangan

```bash
npm run dev
```

Buka peramban Anda di [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi.

---

## Daftar Perintah Script Tersedia

| Perintah                  | Deskripsi                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------- |
| `npm run dev`             | Menjalankan server pengembangan lokal Next.js dengan Turbopack                                      |
| `npm run build`           | Mengompilasi aplikasi untuk build siap produksi                                                     |
| `npm run start`           | Menjalankan aplikasi dalam mode produksi lokal setelah di-build                                     |
| `npm run lint`            | Menjalankan pemeriksaan kualitas kode dengan ESLint                                                 |
| `npm run lint:fix`        | Memperbaiki masalah linting secara otomatis                                                         |
| `npm run typecheck`       | Menjalankan pembuatan tipe Next.js dan verifikasi kompilasi TypeScript                              |
| `npm run format`          | Memformat seluruh kode secara otomatis menggunakan Prettier                                         |
| `npm run format:check`    | Memeriksa apakah seluruh berkas telah memenuhi standar format Prettier                              |
| `npm test`                | Menjalankan pengujian interaktif menggunakan Vitest                                                 |
| `npm run test:ci`         | Menjalankan pengujian unit dan integrasi sekali jalan (_single-run_) untuk CI                       |
| `npm run test:coverage`   | Menjalankan pengujian dan menghasilkan laporan cakupan kode (_coverage report_)                     |
| `npm run test:e2e`        | Menjalankan pengujian antarmuka end-to-end dengan Playwright                                        |
| `npm run test:e2e:report` | Menampilkan laporan visual interaktif hasil pengujian Playwright                                    |
| `npm run db:generate`     | Men-generate Prisma Client terbaru                                                                  |
| `npm run db:validate`     | Memvalidasi kebenaran skema Prisma                                                                  |
| `npm run db:migrate`      | Menjalankan migrasi database di lingkungan pengembangan lokal                                       |
| `npm run db:deploy`       | Menerapkan migrasi database siap produksi (`prisma migrate deploy`)                                 |
| `npm run db:seed`         | Menjalankan seeding data awal ke database                                                           |
| `npm run db:studio`       | Membuka antarmuka grafis Prisma Studio untuk manajemen data                                         |
| `npm run check`           | Menjalankan pipeline verifikasi penuh (`lint` + `typecheck` + `format:check` + `test:ci` + `build`) |
| `npm run ci:local`        | Menjalankan seluruh pemeriksaan kualitas kode termasuk pengujian E2E Playwright                     |

---

## Alur Kerja Git & Standar Commit

Proyek ini menerapkan standar **Conventional Commits**:

```text
feat: implementasi pemotongan stok otomatis saat checkout
fix: perbaiki penanganan duplikasi sku pada produk
docs: perbarui spesifikasi perancangan basis data
test: tambahkan unit test untuk kalkulasi laba kotor
refactor: pisahkan logika checkout ke dalam service layer
ci: tambahkan workflow otomatisasi pengujian github actions
chore: perbarui dependensi paket proyek
```

---

## Penulis

**ZyxxBoy**

- GitHub: [@ZyxxBoy](https://github.com/ZyxxBoy)

---

## Lisensi

Proyek ini dikembangkan untuk keperluan edukasi dan portofolio teknis dalam **30 Days Fullstack & DevOps Challenge**.
