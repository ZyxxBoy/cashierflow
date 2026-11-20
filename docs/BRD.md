# Dokumen Persyaratan Bisnis (Business Requirements Document - BRD)

## 1. Informasi Dokumen

| Atribut | Deskripsi |
|---|---|
| Nama Proyek | CashierFlow |
| Tipe Dokumen | Business Requirements Document (BRD) |
| Versi Dokumen | 1.0 |
| Versi Produk | 1.0.0 MVP |
| Penulis | ZyxxBoy |
| Tanggal Dibuat | 20 November 2026 |
| Status | Initial Baseline |

## 2. Ringkasan Eksekutif

CashierFlow adalah Sistem Point of Sale (POS) dan Manajemen Inventaris berbasis web yang dirancang untuk usaha kecil dan menengah (UKM), toko ritel, dan minimarket.

Sistem ini bertujuan untuk mendigitalkan transaksi penjualan, manajemen inventaris/stok, administrasi produk, dan pelaporan bisnis melalui aplikasi yang terpusat dan aman.

CashierFlow dikembangkan sebagai proyek portofolio rekayasa perangkat lunak full-stack yang mendemonstrasikan analisis kebutuhan bisnis praktis, perancangan basis data, pengembangan aplikasi, pengujian otomatis, serta Integrasi Berkelanjutan dan Penerapan Berkelanjutan (CI/CD).

## 3. Latar Belakang Bisnis

Bisnis ritel skala kecil sering kali masih mengandalkan pencatatan transaksi manual, spreadsheet, atau aplikasi terpisah yang tidak terhubung untuk mengelola operasional harian.

Proses-proses manual ini dapat memicu pencatatan inventaris yang tidak akurat, kesalahan transaksi, minimnya visibilitas terhadap performa penjualan, serta kesulitan dalam menyusun laporan bisnis.

CashierFlow menyediakan solusi terintegrasi yang menghubungkan transaksi penjualan, mutasi stok, manajemen produk, dan pelaporan dalam satu aplikasi web tunggal.

Masalah bisnis ini merupakan asumsi yang digunakan untuk proyek portofolio dan belum divalidasi melalui riset lapangan langsung.

## 4. Masalah Bisnis

| ID | Masalah Bisnis | Dampak Bisnis |
|---|---|---|
| BP-001 | Pencatatan transaksi secara manual | Peningkatan risiko kesalahan manusia (human error) |
| BP-002 | Pembaruan inventaris secara manual | Informasi stok menjadi tidak akurat |
| BP-003 | Catatan bisnis yang terpisah-pisah | Data operasional tidak konsisten |
| BP-004 | Pelaporan penjualan secara manual | Keterlambatan dalam pengambilan keputusan bisnis |
| BP-005 | Kontrol akses pengguna yang terbatas | Risiko akses data tanpa izin |
| BP-006 | Tidak adanya riwayat transaksi yang terstruktur | Sulit melakukan audit transaksi |
| BP-007 | Tidak adanya riwayat mutasi/pergerakan stok | Kesulitan dalam melacak perubahan inventaris |
| BP-008 | Visibilitas laba yang sangat terbatas | Kesulitan dalam mengevaluasi performa bisnis |

## 5. Tujuan Bisnis

| ID | Tujuan |
|---|---|
| BO-001 | Mendigitalkan transaksi penjualan ritel |
| BO-002 | Mengotomatiskan pembaruan inventaris |
| BO-003 | Memusatkan data produk dan catatan operasional bisnis |
| BO-004 | Menyediakan laporan penjualan yang mudah diakses |
| BO-005 | Meningkatkan akurasi transaksi |
| BO-006 | Menerapkan kontrol akses berbasis peran (RBAC) |
| BO-007 | Meningkatkan kemampuan pelacakan (traceability) inventaris |
| BO-008 | Memberikan visibilitas estimasi laba kotor |
| BO-009 | Membangun platform digital yang mudah dirawat dan dikembangkan (maintainable) |

## 6. Pemangku Kepentingan (Stakeholders)

| Pemangku Kepentingan | Tanggung Jawab |
|---|---|
| Business Owner (Pemilik Usaha) | Memantau bisnis, laporan keuangan, dan manajemen pengguna |
| Administrator | Manajemen produk, pemasok, pelanggan, dan inventaris |
| Kasir (Cashier) | Menangani transaksi penjualan dan mencetak struk/bukti transaksi |
| Pelanggan (Customer) | Membeli produk dan menerima bukti pembayaran/struk |
| Pengembang (Developer) | Mengembangkan sistem, melakukan pengujian, dan pemeliharaan |
| Administrator Sistem | Penyiapan server/deployment dan konfigurasi sistem |

Administrator Sistem adalah peran tanggung jawab teknis, bukan peran akun tambahan di dalam aplikasi MVP.

## 7. Target Pengguna

### 7.1 Business Owner (Pemilik Usaha)

Bertanggung jawab memantau penjualan, estimasi laba kotor, performa inventaris, akses pengguna, dan operasional bisnis secara keseluruhan.

### 7.2 Administrator

Bertanggung jawab mengelola data master, mengatur inventaris/stok, dan memantau transaksi operasional harian.

### 7.3 Kasir (Cashier)

Bertanggung jawab memproses transaksi pembelian pelanggan, menerima pembayaran tunai, dan mencetak struk transaksi.

## 8. Proses Bisnis Saat Ini (AS-IS)

1. Pelanggan memilih produk.
2. Kasir menghitung total harga produk secara manual.
3. Pelanggan melakukan pembayaran.
4. Kasir mencatat transaksi secara manual di buku nota/buku catatan.
5. Catatan stok inventaris diperbarui secara manual.
6. Laporan penjualan disusun secara terpisah di akhir hari atau periode.

### Keterbatasan Proses Saat Ini

- Terjadinya duplikasi input data.
- Potensi kesalahan hitung yang tinggi.
- Pembaruan stok sering tertunda (tidak real-time).
- Keterlacakan transaksi sangat rendah.
- Penyusunan laporan memakan banyak waktu dan tenaga.

## 9. Proses Bisnis yang Diusulkan (TO-BE)

1. Kasir melakukan login/autentikasi ke dalam CashierFlow.
2. Kasir mencari produk atau memindai barcode produk.
3. Produk yang dipilih dimasukkan ke dalam keranjang belanja.
4. Sistem menghitung total transaksi secara otomatis.
5. Kasir menerima pembayaran tunai dari pelanggan.
6. Sistem memvalidasi harga, ketersediaan stok, dan jumlah pembayaran.
7. Sistem mencatat transaksi secara atomik ke dalam basis data.
8. Jumlah inventaris/stok dipotong secara otomatis.
9. Mutasi stok (stock movement) dicatat secara otomatis.
10. Struk bukti transaksi dicetak atau ditampilkan.
11. Data penjualan langsung tersedia dan terangkum dalam laporan bisnis real-time.

## 10. Cakupan Bisnis (Business Scope)

### 10.1 Dalam Cakupan (In Scope)

- Autentikasi dan otorisasi pengguna.
- Manajemen produk dan kategori.
- Manajemen satuan (unit) dan pemasok (supplier).
- Manajemen inventaris (stok masuk, keluar, penyesuaian).
- Riwayat pergerakan/mutasi stok.
- Transaksi Point of Sale (POS).
- Pemrosesan pembayaran tunai.
- Riwayat transaksi penjualan.
- Pembuatan dan pencetakan struk dasar.
- Laporan penjualan dan estimasi laba kotor.
- Administrasi pengguna dan hak akses peran.
- Pengujian otomatis (unit, integrasi, E2E).
- CI/CD dan deployment ke platform cloud.

Manajemen pelanggan, pelaporan tingkat lanjut, dan pengaturan toko yang fleksibel merupakan prioritas sekunder dalam MVP.

### 10.2 Di Luar Cakupan (Out of Scope)

- Manajemen multi-toko dan multi-cabang.
- Arsitektur multi-tenant.
- Integrasi payment gateway online.
- Pemrosesan pembayaran QRIS digital.
- Program loyalitas pelanggan (poin, membership).
- Manajemen pengembalian dana (refund) dan retur barang.
- Manajemen shift kerja kasir.
- Sinkronisasi transaksi saat luring (offline POS).
- Integrasi dengan sistem akuntansi eksternal.
- Sistem penggajian karyawan (payroll).
- Integrasi toko daring (e-commerce).

## 11. Manfaat Bisnis yang Diharapkan

- Pemrosesan transaksi menjadi lebih cepat dan efisien.
- Akurasi data stok barang meningkat.
- Pengurangan kesalahan perhitungan manual.
- Akses informasi performa penjualan menjadi lebih mudah dan cepat.
- Keterlacakan riwayat transaksi dan stok yang jauh lebih baik.
- Administrasi inventaris menjadi lebih sederhana.
- Keamanan data operasional dan finansial bisnis meningkat.

Manfaat-manfaat ini merupakan ekspektasi hasil desain, bukan hasil pengukuran langsung dari lapangan.

## 12. Kriteria Keberhasilan

| ID | Kriteria Keberhasilan |
|---|---|
| SC-001 | Pengguna yang berwenang dapat mengakses aplikasi secara aman |
| SC-002 | Administrator dapat mengelola produk dan stok inventaris dengan lancar |
| SC-003 | Kasir dapat menyelesaikan transaksi tunai yang valid dengan lancar |
| SC-004 | Transaksi yang berhasil secara otomatis memotong stok barang |
| SC-005 | Transaksi yang gagal tidak mengubah jumlah stok inventaris |
| SC-006 | Transaksi tidak boleh menyebabkan stok bernilai negatif |
| SC-007 | Pemilik usaha dapat melihat laporan penjualan dan estimasi laba kotor |
| SC-008 | Permintaan checkout yang terduplikasi tidak membuat transaksi penjualan ganda (idempoten) |
| SC-009 | Seluruh pengujian otomatis yang diwajibkan berhasil lulus (pass) |
| SC-010 | MVP dapat diakses melalui URL demo publik yang stabil |

## 13. Asumsi

- Sistem hanya melayani satu toko ritel fisik tunggal (single store).
- Pengguna memiliki koneksi internet yang stabil saat menggunakan aplikasi.
- Seluruh nilai nominal transaksi menggunakan mata uang Rupiah (IDR).
- Produk dijual dalam satuan bilangan bulat (integer), tidak mendukung pecahan/desimal.
- Metode pembayaran tunai sudah memadai untuk kebutuhan MVP.
- Aplikasi awalnya ditujukan untuk keperluan demonstrasi non-komersial dan portofolio teknis.
- Seluruh data yang ditampilkan pada demonstrasi publik adalah data fiktif.

## 14. Batasan (Constraints)

- Waktu pengembangan MVP dibatasi selama 14 hari kerja.
- Aplikasi dikembangkan secara mandiri oleh satu pengembang (single developer).
- Deployment awal memaksimalkan penggunaan layanan infrastruktur gratis (free-tier).
- Sistem harus beroperasi secara efisien di dalam batasan sumber daya hosting gratis.
- Fitur-fitur tambahan/opsional akan ditunda jika waktu tidak mencukupi demi mengutamakan fitur inti.
- Keamanan dan konsistensi transaksi menjadi prioritas utama di atas fungsionalitas opsional.

## 15. Risiko Bisnis

| ID | Risiko | Mitigasi |
|---|---|---|
| R-001 | Cakupan pengembangan meluas di luar batas waktu | Prioritaskan secara ketat fitur wajib (Must Have) MVP |
| R-002 | Perhitungan inventaris tidak akurat | Gunakan transaksi basis data atomik dan constraint ketat |
| R-003 | Terjadinya transaksi ganda akibat jaringan/klik berulang | Terapkan idempotensi pada proses checkout |
| R-004 | Akses data oleh pihak yang tidak berhak | Terapkan RBAC ketat di sisi server (server-side) |
| R-005 | Keterbatasan kuota dan komputasi hosting gratis | Optimalkan query basis data dan efisiensi memori aplikasi |
| R-006 | Kehabisan koneksi basis data (connection exhaustion) | Terapkan connection pooling dengan batas terukur |
| R-007 | Kebocoran data sensitif atau kredensial | Kelola via environment variables dan batasi hak akses |
| R-008 | Konflik checkout bersamaan pada stok barang yang sama | Gunakan conditional stock update dan transaksi atomik |

## 16. Dependensi Proyek

- Next.js
- TypeScript
- PostgreSQL
- Prisma ORM
- Auth.js
- GitHub
- GitHub Actions
- Vercel
- Neon

## 17. Kriteria Penerimaan Proyek (Project Acceptance)

CashierFlow MVP dinyatakan siap rilis apabila seluruh kebutuhan bisnis wajib telah diimplementasikan, seluruh aturan bisnis kritis tervalidasi dengan benar, seluruh pengujian otomatis lulus, dan aplikasi berhasil dideploy ke lingkungan cloud dengan baik.

## 18. Dokumen Terkait

- [Dokumen Persyaratan Produk (PRD)](PRD.md)
- [Persyaratan Fungsional (FRS)](functional-requirements.md)
- [Persyaratan Non-Fungsional (NFRS)](non-functional-requirements.md)
- [Spesifikasi Aturan Bisnis](business-rules.md)
- [User Stories dan Kriteria Penerimaan](user-stories.md)
- [Cakupan MVP](mvp-scope.md)
- [Arsitektur Sistem](architecture.md)
