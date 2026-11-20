# Cakupan Minimum Viable Product (MVP Scope)

## 1. Informasi Dokumen

| Atribut | Deskripsi |
|---|---|
| Proyek | CashierFlow |
| Versi Dokumen | 1.0 |
| Target Rilis | v1.0.0 |
| Penulis | ZyxxBoy |
| Tanggal Mulai | 20 November 2026 |
| Target Tanggal Rilis | 3 Desember 2026 |
| Durasi Pengembangan | 14 Hari |
| Status | Initial Baseline |

## 2. Tujuan MVP

Tujuan dari CashierFlow MVP adalah menghadirkan Sistem Point of Sale (POS) dan Manajemen Inventaris untuk satu toko tunggal yang fungsional dan mampu mendukung operasional ritel penting sehari-hari.

MVP ini memprioritaskan ketepatan transaksi, konsistensi data stok barang, keamanan sistem, keterawatan kode (maintainability), pengujian otomatis, dan keberhasilan penerapan ke lingkungan cloud.

## 3. Tech Stack MVP

| Kategori | Teknologi |
|---|---|
| Framework Full-stack | Next.js |
| Bahasa Pemrograman | TypeScript |
| Styling / Desain | Tailwind CSS |
| Pustaka UI | shadcn/ui |
| Basis Data | PostgreSQL |
| ORM | Prisma |
| Autentikasi | Auth.js |
| Validasi Skema | Zod |
| Formulir | React Hook Form |
| State Management Klien | Zustand |
| Visualisasi Data | Recharts |
| Unit Testing | Vitest |
| E2E Testing | Playwright |
| Continuous Integration (CI) | GitHub Actions |
| Continuous Deployment (CD) | Vercel |
| Hosting Basis Data | Neon |
| Kontainerisasi | Docker |

Penggunaan Recharts dan konfigurasi Docker untuk lingkungan lokal merupakan prioritas sekunder jika pengembangan fitur inti memerlukan waktu tambahan.

## 4. Metode Prioritas

Proyek ini menggunakan metode prioritas MoSCoW:

- Must Have: Fitur wajib yang mutlak diperlukan untuk rilis.
- Should Have: Fitur penting namun tidak menghambat rilis jika ditunda.
- Could Have: Fitur peningkatan opsional yang dikerjakan jika ada sisa waktu.
- Won't Have: Fitur yang secara tegas ditiadakan pada rilis versi ini.

## 5. Fitur Must Have (Wajib Ada)

| ID | Fitur | Ringkasan Penerimaan |
|---|---|---|
| MVP-001 | Autentikasi Pengguna | Pengguna dapat login dan logout dengan aman |
| MVP-002 | RBAC | Server menerapkan pembatasan hak akses peran bawaan |
| MVP-003 | Administrasi Pengguna | Pemilik usaha dapat mengelola akun dan hak akses |
| MVP-004 | Manajemen Produk | Produk dapat dibuat, diperbarui, dan dinonaktifkan |
| MVP-005 | Manajemen Kategori | Kategori produk dapat dikelola dengan baik |
| MVP-006 | Manajemen Satuan | Satuan unit barang dapat dikelola dengan baik |
| MVP-007 | Manajemen Pemasok | Data pemasok barang dapat dicatat dan dikelola |
| MVP-008 | Stok Masuk (Stock In) | Penerimaan persediaan barang baru tercatat |
| MVP-009 | Stok Keluar (Stock Out) | Pengurangan barang secara manual tercatat |
| MVP-010 | Penyesuaian Stok (Adjustment) | Koreksi stok fisik barang (opname) dapat dilakukan |
| MVP-011 | Riwayat Mutasi Stok | Setiap perubahan stok dapat dilacak secara kronologis |
| MVP-012 | Pencarian Produk POS | Produk dapat dicari berdasarkan nama, SKU, dan barcode |
| MVP-013 | Keranjang Belanja | Produk dan kuantitas belanja dapat dikelola |
| MVP-014 | Pembayaran Tunai | Transaksi checkout tunai yang valid didukung penuh |
| MVP-015 | Checkout Atomik | Transaksi dan pemotongan stok bersifat konsisten (all-or-nothing) |
| MVP-016 | Idempotensi Checkout | Mencegah terjadinya transaksi ganda akibat request berulang |
| MVP-017 | Riwayat Transaksi | Data transaksi yang telah selesai dapat dilihat kembali |
| MVP-018 | Pembuatan Struk | Struk transaksi dapat ditampilkan dan dicetak |
| MVP-019 | Dasbor Dasar | Metrik utama bisnis dan stok ditampilkan secara ringkas |
| MVP-020 | Laporan Penjualan | Total penjualan dapat ditinjau berdasarkan periode waktu |
| MVP-021 | Laporan Laba Kotor | Estimasi margin keuntungan historis ditampilkan |
| MVP-022 | Laporan Stok | Ketersediaan jumlah stok barang saat ini dapat dipantau |
| MVP-023 | Pengujian Otomatis | Operasi bisnis kritis diuji melalui tes otomatis |
| MVP-024 | CI/CD | Alur pemeriksaan dan deployment otomatis terkonfigurasi |
| MVP-025 | Dokumentasi | Dokumentasi proyek lengkap dan terstruktur rapi |

## 6. Fitur Should Have (Sebaiknya Ada)

| ID | Fitur |
|---|---|
| SH-001 | Manajemen data pelanggan |
| SH-002 | Diskon transaksi dalam nominal tetap (flat discount) |
| SH-003 | Indikator visual peringatan stok menipis |
| SH-004 | Grafik visualisasi tren penjualan harian |
| SH-005 | Analisis produk terlaris (best-selling products) |
| SH-006 | Ekspor laporan data ke format file Excel |
| SH-007 | Pencatatan riwayat aktivitas pengguna (general activity logs) |
| SH-008 | Antarmuka formulir pengaturan profil toko |
| SH-009 | Antarmuka konfigurasi header dan footer struk |
| SH-010 | Fitur ganti kata sandi mandiri bagi pengguna |
| SH-011 | Filter data tabel tingkat lanjut |
| SH-012 | Lingkungan pengembangan lokal berbasis Docker Compose |

## 7. Fitur Could Have (Bisa Ditambahkan)

| ID | Fitur |
|---|---|
| CH-001 | Unggah foto/gambar produk |
| CH-002 | Dukungan mode gelap (dark mode) |
| CH-003 | Pintasan keyboard tingkat lanjut untuk kasir |
| CH-004 | Kustomisasi template cetak struk |
| CH-005 | Analitik performa produk yang mendalam |
| CH-006 | Widget visualisasi tambahan pada dasbor |

## 8. Fitur Won't Have (Tidak Termasuk dalam Rilis v1.0.0)

Fitur-fitur berikut ini secara tegas dikeluarkan dari cakupan rilis v1.0.0:

- Manajemen multi-toko dan multi-cabang.
- Arsitektur sistem multi-tenant.
- Integrasi payment gateway daring.
- Pemrosesan pembayaran kode QRIS.
- Penjualan kredit, piutang, dan pencatatan utang pelanggan.
- Manajemen pengembalian dana (refund) dan retur produk.
- Manajemen shift kasir dan rekonsiliasi kas fisik harian.
- Program loyalitas, poin hadiah, atau keanggotaan pelanggan.
- Mode kasir offline (luring) beserta sinkronisasinya.
- Integrasi dengan sistem akuntansi eksternal.
- Metode penilaian persediaan FIFO atau Weighted Average.
- Mesin kalkulasi pajak otomatis yang rumit.
- Pembuatan Purchase Order (PO) otomatis ke pemasok.
- Aplikasi mobile native (Android / iOS).
- Arsitektur berbasis Microservices.
- Caching terdistribusi menggunakan Redis.
- Orkestrasi kontainer dengan Kubernetes.

## 9. Peta Jalan Pengembangan MVP (14 Hari)

| Hari | Tanggal | Fokus Utama | Target Deliverable |
|---|---|---|---|
| 01 | 20 Nov | Kebutuhan Proyek | BRD, PRD, FRS, NFRS, aturan bisnis, arsitektur |
| 02 | 21 Nov | Desain Basis Data | ERD, kamus data, matriks CRUD, matriks RBAC |
| 03 | 22 Nov | Inisialisasi Proyek | Next.js, TypeScript, pondasi komponen UI |
| 04 | 23 Nov | Infrastruktur & CI/CD | Prisma, Neon, GitHub Actions, Vercel |
| 05 | 24 Nov | Sistem Autentikasi | Login, manajemen sesi, penerapan RBAC |
| 06 | 25 Nov | Tata Letak Aplikasi | Sidebar, navbar, komponen bersama (shared UI) |
| 07 | 26 Nov | Data Master Produk | Produk, kategori, satuan barang |
| 08 | 27 Nov | Data Master Bisnis | Pemasok dan pelanggan (opsional) |
| 09 | 28 Nov | Modul Inventaris | Operasi stok dan riwayat mutasi barang |
| 10 | 29 Nov | Antarmuka Kasir (POS) | Pencarian produk dan keranjang belanja |
| 11 | 30 Nov | Mesin Checkout | Pembayaran tunai, pemotongan stok atomik, idempotensi |
| 12 | 01 Des | Modul Transaksi | Riwayat penjualan, detail faktur, pencetakan struk |
| 13 | 02 Des | Modul Pelaporan | Dasbor, laporan bisnis, ekspor Excel (opsional) |
| 14 | 03 Des | Persiapan Rilis | Pengujian regresi menyeluruh, perbaikan bug, rilis demo |

Pengujian otomatis dan penulisan dokumentasi wajib dilakukan secara berkelanjutan sepanjang proses pengembangan, bukan hanya ditumpuk pada hari terakhir.

## 10. Alur Kerja Pengembangan Harian

1. Tinjau dokumen kebutuhan dan kriteria penerimaan yang relevan.
2. Definisikan tugas implementasi secara jelas.
3. Buat branch git baru untuk fitur yang akan dikerjakan.
4. Implementasikan fungsionalitas fitur.
5. Tulis atau perbarui pengujian otomatis yang relevan.
6. Jalankan pemeriksaan kualitas kode di lingkungan lokal (lint, build, test).
7. Lakukan commit dan push perubahan kode ke repository remote.
8. Buat Pull Request (PR).
9. Periksa hasil pemeriksaan otomatis pada alur CI di GitHub Actions.
10. Validasi tampilan dan fungsionalitas pada lingkungan Vercel Preview.
11. Lakukan merge ke branch utama setelah disetujui.

## 11. Milestone Rilis

| Milestone | Target Hari | Deliverable Utama |
|---|---|---|
| M1 | Hari 02 | Dokumen kebutuhan lengkap dan perancangan basis data |
| M2 | Hari 04 | Fondasi aplikasi, repository terhubung, dan alur CI/CD aktif |
| M3 | Hari 06 | Sistem autentikasi aman dan tata letak utama aplikasi |
| M4 | Hari 09 | Manajemen master data dan modul inventaris stok selesai |
| M5 | Hari 12 | Modul kasir (POS) dan transaksi penjualan selesai dan teruji |
| M6 | Hari 14 | Rilis MVP yang telah teruji penuh dan terdeploy di cloud |

## 12. Kriteria Keluar MVP (Exit Criteria)

### Kesiapan Fungsional

- [ ] Autentikasi berfungsi dengan aman dan stabil.
- [ ] Hak akses RBAC diterapkan secara konsisten di sisi server.
- [ ] Modul data master berfungsi penuh.
- [ ] Operasi inventaris mampu menjaga konsistensi data stok.
- [ ] Layar POS mendukung transaksi pembayaran tunai dengan benar.
- [ ] Terjadinya transaksi ganda berhasil dicegah melalui sistem idempotensi.
- [ ] Transaksi tidak dapat menghasilkan stok barang bernilai negatif.
- [ ] Struk bukti pembayaran dapat ditampilkan dan dicetak.
- [ ] Laporan bisnis utama dapat diakses dengan data yang akurat.

### Kesiapan Kualitas

- [ ] Seluruh pemeriksaan ESLint lulus tanpa peringatan kritis.
- [ ] Pemeriksaan tipe data TypeScript lulus (zero errors).
- [ ] Seluruh unit test yang diwajibkan lulus.
- [ ] Seluruh integration test yang diwajibkan lulus.
- [ ] Seluruh E2E test skenario kritis checkout lulus.
- [ ] Pengujian konkurensi transaksi checkout bersamaan lulus tanpa kendala.
- [ ] Tidak ada celah keamanan kritis yang belum diperbaiki.

### Kesiapan Penerapan (Deployment)

- [ ] Alur CI pada GitHub Actions berjalan sukses.
- [ ] Lingkungan pratinjau (Preview deployment) berfungsi.
- [ ] Basis data produksi di Neon telah terkonfigurasi dengan aman.
- [ ] Migrasi basis data terverifikasi dan berjalan mulus.
- [ ] Konfigurasi produksi tidak mengekspos kredensial rahasia apa pun.
- [ ] Deployment produksi di platform Vercel berhasil.
- [ ] Smoke test pada URL produksi demo publik lulus.
- [ ] Dokumentasi panduan rilis dan deployment tersedia lengkap.

## 13. Deliverable yang Diperlukan

| Deliverable | Format |
|---|---|
| Kode Sumber (Source Code) | GitHub Repository |
| Persyaratan Bisnis | Dokumen Markdown (`BRD.md`) |
| Persyaratan Produk | Dokumen Markdown (`PRD.md`) |
| Persyaratan Fungsional | Dokumen Markdown (`functional-requirements.md`) |
| Persyaratan Non-Fungsional | Dokumen Markdown (`non-functional-requirements.md`) |
| Spesifikasi Aturan Bisnis | Dokumen Markdown (`business-rules.md`) |
| User Stories & Kriteria Penerimaan | Dokumen Markdown (`user-stories.md`) |
| Arsitektur Sistem | Dokumen Markdown dan Diagram Mermaid (`architecture.md`) |
| Diagram Relasi Entitas (ERD) | Diagram Mermaid atau setara |
| Kamus Data (Data Dictionary) | Dokumen Markdown |
| Matriks CRUD | Dokumen Markdown |
| Matriks RBAC | Dokumen Markdown |
| Skema Basis Data | File Skema Prisma |
| Migrasi Basis Data | File Skrip SQL Migrations |
| Alur Kerja CI | File Konfigurasi YAML |
| Pengujian Otomatis | File Kode Pengujian TypeScript |
| Panduan Deployment | Dokumen Markdown |
| Demo Aplikasi Langsung | URL Publik Vercel |

## 14. Aturan Demonstrasi Publik

- Wajib menggunakan data fiktif untuk toko, produk, pelanggan, dan transaksi.
- Dilarang keras menampilkan informasi pribadi pelanggan asli.
- Dilarang keras mempublikasikan kredensial basis data produksi ke publik.
- Dilarang memberikan akses peran Owner publik tanpa pengawasan ke basis data bersama yang persisten.
- Gunakan akun demo terkontrol atau lingkungan demo terisolasi.
- Cantumkan catatan batas kapasitas infrastruktur gratis yang digunakan.

## 15. Kebijakan Perubahan Cakupan

Setiap permintaan fitur baru di tengah pengembangan wajib dievaluasi berdasarkan:

- Nilai manfaat bisnis yang dihasilkan.
- Tingkat kerumitan teknis implementasi.
- Implikasi terhadap aspek keamanan sistem.
- Waktu yang dibutuhkan untuk pembuatan pengujian otomatis.
- Sisa waktu hari pengembangan yang tersedia.
- Pengaruhnya terhadap penyelesaian fitur wajib (Must Have).

Jika waktu pengembangan tertinggal dari jadwal, fitur opsional wajib ditunda terlebih dahulu sebelum mengurangi standar keamanan, ketepatan data, atau pengujian otomatis.

Target tanggal rilis adalah sasaran perencanaan. Aplikasi yang belum lengkap atau belum terjamin keamanannya tidak boleh dilabeli sebagai MVP yang selesai.

## 16. Strategi Versi (Versioning)

| Versi | Tujuan |
|---|---|
| v0.1.0 | Fondasi awal proyek dan konfigurasi dasar |
| v0.2.0 | Implementasi autentikasi dan data master |
| v0.3.0 | Implementasi manajemen inventaris dan stok |
| v0.4.0 | Implementasi Point of Sale dan mesin checkout |
| v1.0.0 | Rilis lengkap MVP yang telah teruji |
| v1.x.x | Peningkatan fitur minor dan perbaikan bug |
| v2.0.0 | Rilis pembaruan besar dengan fitur lanjutan |

## 17. Peta Jalan Masa Depan

### Fase 2

- Integrasi pembayaran digital QRIS dan payment gateway.
- Manajemen pengembalian dana (refund) dan retur barang.
- Manajemen pergantian shift kasir.
- Analitik bisnis dan tren performa tingkat lanjut.
- Penilaian persediaan yang lebih akurat.
- Konfigurasi deployment penuh berbasis Docker.

### Fase 3

- Manajemen operasional multi-cabang.
- Arsitektur multi-tenant terisolasi.
- Dukungan operasional offline secara penuh.
- Caching terdistribusi menggunakan Redis pada endpoint berbeban tinggi.
- Integrasi otomatis dengan sistem akuntansi eksternal.
- Sistem monitoring dan alerting infrastruktur tingkat lanjut.

## 18. Dokumen Terkait

- [Dokumen Persyaratan Bisnis (BRD)](BRD.md)
- [Dokumen Persyaratan Produk (PRD)](PRD.md)
- [Persyaratan Fungsional (FRS)](functional-requirements.md)
- [Persyaratan Non-Fungsional (NFRS)](non-functional-requirements.md)
- [Arsitektur Sistem](architecture.md)
