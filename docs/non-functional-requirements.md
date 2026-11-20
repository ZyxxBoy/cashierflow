# Spesifikasi Persyaratan Non-Fungsional (Non-Functional Requirements Specification - NFRS)

## 1. Informasi Dokumen

| Atribut | Deskripsi |
|---|---|
| Proyek | CashierFlow |
| Versi Dokumen | 1.0 |
| Versi Produk | 1.0.0 MVP |
| Penulis | ZyxxBoy |
| Status | Initial Baseline |

## 2. Tujuan

Dokumen ini mendefinisikan atribut kualitas, batasan teknis, persyaratan keamanan, target kinerja/performa, dan standar operasional dari CashierFlow.

## 3. Kinerja dan Performa (Performance)

| ID | Persyaratan | Prioritas |
|---|---|---|
| NFR-PERF-001 | Target waktu respons p95 di bawah 500 ms untuk permintaan baca data standar dalam kondisi warm | Should |
| NFR-PERF-002 | Target waktu respons checkout di bawah 2 detik dalam kondisi normal warm | Should |
| NFR-PERF-003 | Menggunakan paginasi di sisi server (server-side pagination) untuk tabel data bervolume besar | Must |
| NFR-PERF-004 | Menerapkan indeks basis data pada kolom yang sering dijadikan kriteria query pencarian dan relasi | Must |
| NFR-PERF-005 | Menghindari query basis data berlebih dan pola query N+1 | Must |
| NFR-PERF-006 | Menerapkan batas ukuran connection pooling pada basis data | Must |
| NFR-PERF-007 | Membatasi ukuran maksimal payload paginasi dan payload transaksi checkout | Must |

### Baseline Pengujian Performa

Kondisi awal pengujian performa:

- 1.000 rekaman data produk.
- 5.000 rekaman transaksi sintetis yang telah selesai.
- 10 pengguna aktif yang bertransaksi secara bersamaan.
- Koneksi aplikasi dan basis data dalam status aktif/hangat (warm).
- Lingkungan pengujian lokal representatif atau server staging.

Angka-angka ini menetapkan target rekayasa awal, bukan jaminan kapasitas hosting gratis atau jaminan pengukuran pasti.

Kondisi cold start serverless dan latensi jaringan publik harus dianalisis secara terpisah.

## 4. Keamanan (Security)

| ID | Persyaratan | Prioritas |
|---|---|---|
| NFR-SEC-001 | Menyimpan kata sandi menggunakan algoritma hashing standar industri yang aman | Must |
| NFR-SEC-002 | Memvalidasi seluruh data input yang tidak tepercaya di sisi server | Must |
| NFR-SEC-003 | Mewajibkan autentikasi aktif untuk seluruh rute dan operasi privat | Must |
| NFR-SEC-004 | Menegakkan otorisasi berbasis peran (RBAC) di sisi server | Must |
| NFR-SEC-005 | Menyimpan kredensial rahasia dan kunci API di dalam environment variables | Must |
| NFR-SEC-006 | Menggunakan protokol HTTPS pada lingkungan yang telah dideploy | Must |
| NFR-SEC-007 | Menggunakan parameterized query untuk mencegah serangan SQL Injection | Must |
| NFR-SEC-008 | Melindungi cookie sesi dengan atribut keamanan yang tepat (HttpOnly, Secure, SameSite) | Must |
| NFR-SEC-009 | Menerapkan pembatasan laju permintaan (rate limiting) pada proses login dan aksi sensitif | Must |
| NFR-SEC-010 | Melindungi operasi perubahan data dari potensi serangan CSRF | Must |
| NFR-SEC-011 | Mencegah akses tanpa hak ke riwayat transaksi milik pengguna/kasir lain | Must |
| NFR-SEC-012 | Dilarang membocorkan hash kata sandi atau nilai rahasia apa pun ke antarmuka klien | Must |
| NFR-SEC-013 | Menghindari pencatatan kata sandi, token, atau informasi sensitif ke dalam berkas log | Must |
| NFR-SEC-014 | Melakukan peninjauan kerentanan keamanan pada pustaka dependensi pihak ketiga | Must |
| NFR-SEC-015 | Wajib menggunakan data fiktif pada lingkungan demonstrasi portofolio publik | Must |
| NFR-SEC-016 | Membatalkan atau menolak sesi login milik akun pengguna yang telah dinonaktifkan | Must |

## 5. Keandalan dan Integritas Data (Reliability & Integrity)

| ID | Persyaratan | Prioritas |
|---|---|---|
| NFR-REL-001 | Menjalankan transaksi checkout sebagai satu kesatuan transaksi basis data yang atomik | Must |
| NFR-REL-002 | Mencegah timbulnya nilai kuantitas inventaris yang bernilai negatif | Must |
| NFR-REL-003 | Mendukung idempotensi pada pemrosesan transaksi checkout | Must |
| NFR-REL-004 | Mempertahankan keutuhan rekaman data historis transaksi penjualan | Must |
| NFR-REL-005 | Melakukan rollback penuh jika terjadi kegagalan di tengah proses transaksi checkout | Must |
| NFR-REL-006 | Menegakkan primary key, foreign key, dan unique constraint di tingkat basis data | Must |
| NFR-REL-007 | Menangani pembaruan inventaris konkuren dengan aman tanpa menimbulkan overselling | Must |
| NFR-REL-008 | Menggunakan skrip migrasi basis data terkelola untuk setiap perubahan skema | Must |
| NFR-REL-009 | Mendokumentasikan prosedur dan batasan pemulihan data (recovery) | Must |
| NFR-REL-010 | Menangani kegagalan koneksi basis data transien tanpa menghasilkan transaksi ganda | Must |

## 6. Ketersediaan (Availability)

| ID | Persyaratan | Prioritas |
|---|---|---|
| NFR-AVL-001 | Menyediakan tautan demo aplikasi publik yang dapat diakses dengan stabil | Must |
| NFR-AVL-002 | Menyediakan endpoint health check ringan untuk memverifikasi keaktifan aplikasi | Must |
| NFR-AVL-003 | Menampilkan pesan penanganan error yang informatif saat layanan terganggu | Must |
| NFR-AVL-004 | Mendokumentasikan batasan operasional dari infrastruktur gratis yang dipakai | Must |

Sistem MVP menggunakan infrastruktur gratis (free-tier) yang sesuai.

Jaminan SLA ketersediaan 99,99%, kluster server dengan redundansi multi-zona, dan sistem Disaster Recovery skala besar berada di luar cakupan rilis MVP.

## 7. Kegunaan dan Aksesibilitas (Usability & Accessibility)

| ID | Persyaratan | Prioritas |
|---|---|---|
| NFR-USA-001 | Mendukung tata letak layar Desktop dan Tablet dengan baik | Must |
| NFR-USA-002 | Menyediakan alur navigasi dan tombol kontrol yang konsisten di setiap modul | Must |
| NFR-USA-003 | Menampilkan pesan error validasi di dekat elemen input formulir yang bersangkutan | Must |
| NFR-USA-004 | Menyediakan tampilan loading state dan empty state yang jelas | Must |
| NFR-USA-005 | Menyediakan dialog konfirmasi sebelum mengeksekusi tindakan yang bersifat destruktif | Must |
| NFR-USA-006 | Mendukung navigasi keyboard untuk alur kerja utama kasir | Must |
| NFR-USA-007 | Menggunakan label formulir yang mudah diakses dan indikator fokus yang terlihat jelas | Must |
| NFR-USA-008 | Memastikan kontras warna teks dan elemen antarmuka memenuhi standar keterbacaan | Must |
| NFR-USA-009 | Mendukung tata letak responsif pada perangkat seluler untuk halaman non-POS | Should |

Layar Point of Sale (POS) dioptimalkan terutama untuk penggunaan di perangkat Desktop dan Tablet.

## 8. Kemudahan Pemeliharaan (Maintainability)

| ID | Persyaratan | Prioritas |
|---|---|---|
| NFR-MNT-001 | Mengaktifkan TypeScript Strict Mode secara penuh | Must |
| NFR-MNT-002 | Menggunakan struktur direktori proyek yang modular dan rapi | Must |
| NFR-MNT-003 | Memisahkan antarmuka UI, logika bisnis, dan akses basis data secara jelas | Must |
| NFR-MNT-004 | Menggunakan skema validasi Zod bersama yang konsisten | Must |
| NFR-MNT-005 | Menerapkan ESLint untuk analisis kualitas kode statis | Must |
| NFR-MNT-006 | Menerapkan Prettier untuk format kode yang konsisten | Must |
| NFR-MNT-007 | Menggunakan pesan commit Git yang informatif dan bermakna (Conventional Commits) | Must |
| NFR-MNT-008 | Mendokumentasikan keputusan arsitektur penting (ADR) | Must |
| NFR-MNT-009 | Menyediakan file contoh environment variable (`.env.example`) tanpa menyertakan kredensial asli | Must |
| NFR-MNT-010 | Menghindari kerumitan arsitektur yang tidak diperlukan (hindari premature optimization) | Must |

## 9. Skalabilitas (Scalability)

| ID | Persyaratan | Prioritas |
|---|---|---|
| NFR-SCL-001 | Menggunakan paginasi pada setiap query pembacaan data berjumlah banyak | Must |
| NFR-SCL-002 | Mempertahankan status logika bisnis sisi server tetap stateless sebisa mungkin | Must |
| NFR-SCL-003 | Mendukung peningkatan volume data produk dan transaksi melalui pengindeksan yang tepat | Must |
| NFR-SCL-004 | Menjaga modul sistem cukup terisolasi agar mudah dipisahkan di masa depan jika diperlukan | Should |

Arsitektur microservices, cache terdistribusi, dan orkestrasi Kubernetes belum dibutuhkan untuk tahap awal sistem ini.

## 10. Kemampuan Pengujian (Testability)

| ID | Persyaratan | Prioritas |
|---|---|---|
| NFR-TST-001 | Menggunakan Vitest sebagai kerangka kerja pengujian unit (unit testing) | Must |
| NFR-TST-002 | Menguji perhitungan matematis total transaksi, subtotal, diskon, dan kembalian | Must |
| NFR-TST-003 | Menguji validasi input dan penegakan aturan bisnis | Must |
| NFR-TST-004 | Menguji operasi transaksi basis data pada proses checkout | Must |
| NFR-TST-005 | Menguji ketahanan checkout terhadap kondisi perlombaan bersamaan (concurrency race condition) | Must |
| NFR-TST-006 | Menguji penanganan pengiriman checkout terduplikasi (idempotensi) | Must |
| NFR-TST-007 | Menggunakan Playwright untuk pengujian alur kritis end-to-end (E2E) | Must |
| NFR-TST-008 | Menguji penolakan akses tidak berhak dan pembatasan peran pengguna | Must |
| NFR-TST-009 | Menjalankan seluruh pengujian otomatis pada alur CI GitHub Actions | Must |
| NFR-TST-010 | Menargetkan minimal 80% line coverage untuk modul layanan bisnis inti | Should |

Aturan bisnis yang berstatus kritis wajib memiliki skenario pengujian otomatis eksplisit terlepas dari persentase cakupan keseluruhan.

## 11. Deployment dan CI/CD

| ID | Persyaratan | Prioritas |
|---|---|---|
| NFR-DEP-001 | Menggunakan GitHub sebagai platform manajemen versi kode sumber | Must |
| NFR-DEP-002 | Menggunakan GitHub Actions untuk Continuous Integration (CI) | Must |
| NFR-DEP-003 | Menjalankan pemeriksaan lint, tipe TypeScript, unit test, dan build aplikasi otomatis | Must |
| NFR-DEP-004 | Mendukung deployment lingkungan pratinjau (Preview) di Vercel pada setiap pull request | Must |
| NFR-DEP-005 | Mendukung deployment otomatis ke lingkungan produksi Vercel | Must |
| NFR-DEP-006 | Memisahkan kredensial basis data antara lingkungan preview dan lingkungan produksi | Must |
| NFR-DEP-007 | Mengunci rilis produksi hanya jika seluruh pengujian pada alur CI berhasil lulus | Must |
| NFR-DEP-008 | Mendokumentasikan prosedur pembatalan/pemulihan rilis (rollback) | Must |
| NFR-DEP-009 | Menjalankan migrasi basis data sebagai proses terkelola yang terverifikasi | Must |
| NFR-DEP-010 | Menyediakan dukungan lingkungan pengembangan lokal berbasis Docker Compose | Should |

## 12. Observabilitas (Observability)

| ID | Persyaratan | Prioritas |
|---|---|---|
| NFR-OBS-001 | Mencatat error sistem yang tidak terduga pada log server | Must |
| NFR-OBS-002 | Menyediakan pesan error sisi server yang informatif dan terstruktur | Must |
| NFR-OBS-003 | Mencegah tercatatnya data sensitif (seperti password dan token) di log | Must |
| NFR-OBS-004 | Menyertakan identifier unik permintaan (Request ID) pada log error penting | Should |
| NFR-OBS-005 | Memanfaatkan log runtime dan log deployment bawaan Vercel | Must |

## 13. Kompatibilitas Peramban (Browser Compatibility)

| Peramban | Target Dukungan |
|---|---|
| Google Chrome | Versi stabil terkini |
| Microsoft Edge | Versi stabil terkini |
| Mozilla Firefox | Versi stabil terkini |
| Safari | Versi stabil terkini (upaya terbaik / best effort) |
| Internet Explorer | Tidak didukung |

## 14. Data dan Lokalisasi

| ID | Persyaratan | Prioritas |
|---|---|---|
| NFR-DAT-001 | Menyimpan nominal nilai uang dalam satuan bilangan bulat Rupiah (integer IDR) | Must |
| NFR-DAT-002 | Menyimpan data waktu menggunakan tipe data basis data yang sadar zona waktu (timestamptz) | Must |
| NFR-DAT-003 | Menormalisasi seluruh data timestamp yang tersimpan ke format UTC | Must |
| NFR-DAT-004 | Menampilkan waktu kepada pengguna menggunakan zona waktu toko yang dikonfigurasi | Must |
| NFR-DAT-005 | Memformat tampilan nominal uang sesuai dengan kaidah penulisan Rupiah Indonesia | Must |
| NFR-DAT-006 | Meminimalkan pengumpulan data pribadi pelanggan | Must |
| NFR-DAT-007 | Menggunakan akun demo yang terisolasi atau terkontrol pada lingkungan publik | Must |

## 15. Metode Verifikasi

| Kategori Persyaratan | Metode Verifikasi |
|---|---|
| Kinerja (Performance) | Pengujian waktu respons dan uji beban |
| Keamanan (Security) | Pengujian otorisasi peran dan skenario pengujian celah keamanan |
| Keandalan (Reliability) | Pengujian integrasi dan pengujian beban konkurensi |
| Kegunaan (Usability) | Tinjauan manual antarmuka dan pengujian alur E2E |
| Pemeliharaan (Maintainability) | Tinjauan kode (code review) dan analisis statis |
| Pengujian (Testability) | Laporan hasil eksekusi pengujian otomatis |
| Deployment | Eksekusi alur CI/CD dan verifikasi status aplikasi yang dideploy |
| Kompatibilitas | Pengujian antarmuka pada berbagai peramban utama |
| Integritas Data | Pengujian konstrain basis data dan rollback transaksi |

## 16. Dokumen Terkait

- [Dokumen Persyaratan Produk (PRD)](PRD.md)
- [Persyaratan Fungsional (FRS)](functional-requirements.md)
- [Spesifikasi Aturan Bisnis](business-rules.md)
- [Arsitektur Sistem](architecture.md)
