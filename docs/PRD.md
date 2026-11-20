# Dokumen Persyaratan Produk (Product Requirements Document - PRD)

## 1. Informasi Dokumen

| Atribut | Deskripsi |
|---|---|
| Nama Produk | CashierFlow |
| Versi Dokumen | 1.0 |
| Versi Produk | 1.0.0 MVP |
| Penulis | ZyxxBoy |
| Tanggal Dibuat | 20 November 2026 |
| Status | Initial Baseline |

## 2. Gambaran Umum Produk (Product Overview)

CashierFlow adalah Sistem Point of Sale (POS) dan Manajemen Inventaris modern berbasis web yang dirancang untuk mempermudah operasional harian toko ritel.

Aplikasi ini mengintegrasikan pengelolaan master data produk, pengawasan stok barang, transaksi pembayaran tunai, riwayat transaksi lengkap, dan pelaporan performa bisnis dalam satu platform terpadu.

## 3. Visi Produk

Menyediakan platform manajemen ritel digital yang andal, aman, dan mudah digunakan, yang memungkinkan pemilik usaha mikro, kecil, dan menengah mengelola penjualan serta persediaan barang secara efisien dan akurat.

## 4. Sasaran Produk (Product Goals)

- Mempermudah dan mempercepat proses transaksi penjualan harian.
- Menjaga konsistensi dan akurasi data pencatatan inventaris/stok.
- Menyediakan pusat data bisnis dan operasional yang terintegrasi.
- Menerapkan kontrol akses berbasis peran (RBAC) yang aman.
- Meningkatkan visibilitas pemilik usaha terhadap penjualan dan estimasi laba kotor.
- Memberikan pengalaman pengguna yang responsif, intuitif, dan nyaman digunakan.
- Mendemonstrasikan praktik terbaik rekayasa perangkat lunak standar industri siap produksi.

## 5. Spesifikasi Produk

| Atribut | Deskripsi |
|---|---|
| Jenis Aplikasi | Aplikasi Web (Web Application) |
| Arsitektur | Modular Monolith |
| Frontend | Next.js dan React |
| Backend | Next.js Server Actions dan Route Handlers |
| Bahasa Pemrograman | TypeScript |
| Basis Data | PostgreSQL |
| ORM | Prisma |
| Autentikasi | Auth.js |
| Platform Deployment | Vercel |
| Hosting Basis Data | Neon |
| Mata Uang | Rupiah Indonesia (IDR) |
| Zona Waktu Toko | Zona waktu IANA yang dapat dikonfigurasi |
| Zona Waktu Default | Asia/Jakarta (WIB) |
| Toko yang Didukung | Satu toko fisik tunggal (single store) |
| Perangkat yang Didukung | Desktop dan Tablet |
| Durasi Pengembangan | 14 hari |

## 6. Persona Pengguna

### 6.1 Owner (Pemilik Usaha)

Tujuan:

- Memantau performa bisnis dan penjualan secara menyeluruh.
- Memeriksa laporan penjualan dan estimasi laba kotor.
- Mengelola akun pengguna aplikasi beserta hak aksesnya.
- Membatasi akses informasi sensitif bisnis dari staf operasional.
- Mengawasi ketersediaan dan mutasi stok barang.

### 6.2 Administrator

Tujuan:

- Menjaga keakuratan dan kelengkapan data produk.
- Mengelola kategori, satuan (unit), dan pemasok (supplier).
- Mencatat barang masuk, keluar, dan penyesuaian stok fisik (stock opname).
- Memantau ketersediaan barang dan peringatan stok menipis.
- Memeriksa riwayat operasional transaksi barang dan penjualan.

### 6.3 Kasir (Cashier)

Tujuan:

- Mencari atau memindai produk secara cepat saat melayani pelanggan.
- Memproses pembelian barang ke dalam keranjang belanja.
- Menghitung total belanja, pembayaran tunai, dan kembalian secara tepat.
- Mencetak atau menampilkan struk bukti pembayaran bagi pelanggan.
- Melihat riwayat transaksi penjualan yang dilakukan oleh diri sendiri.

## 7. Modul Aplikasi

| Modul | Deskripsi | Prioritas |
|---|---|---|
| Autentikasi | Login, logout, dan manajemen sesi pengguna | Must |
| Dasbor (Dashboard) | Ringkasan metrik penjualan dan status inventaris | Must |
| Point of Sale (POS) | Pencarian produk, keranjang belanja, dan checkout | Must |
| Master Data | Manajemen produk, kategori, satuan, dan pemasok | Must |
| Pelanggan (Customers) | Pencatatan data pelanggan | Should |
| Inventaris | Manajemen stok barang dan riwayat mutasi stok | Must |
| Transaksi | Riwayat penjualan dan detail transaksi | Must |
| Laporan | Laporan penjualan, estimasi laba kotor, dan stok | Must |
| Administrasi | Manajemen pengguna dan penugasan peran bawaan | Must |
| Log Aktivitas | Pencatatan riwayat aktivitas penting pengguna | Should |
| Pengaturan | Konfigurasi informasi toko dan format struk | Should |

## 8. Struktur Navigasi

CashierFlow
- Dasbor (Dashboard)
- Point of Sale (POS)
- Data Master (Master Data)
  - Produk (Products)
  - Kategori (Categories)
  - Satuan (Units)
  - Pemasok (Suppliers)
  - Pelanggan (Customers)
- Inventaris (Inventory)
  - Ringkasan Stok (Stock Overview)
  - Stok Masuk (Stock In)
  - Stok Keluar (Stock Out)
  - Penyesuaian Stok (Stock Adjustment)
  - Riwayat Mutasi Stok (Stock Movements)
- Transaksi (Transactions)
  - Riwayat Penjualan (Sales History)
  - Detail Transaksi (Transaction Detail)
- Laporan (Reports)
  - Laporan Penjualan (Sales Report)
  - Laporan Laba Kotor (Gross Profit Report)
  - Laporan Stok (Stock Report)
- Administrasi (Administration)
  - Manajemen Pengguna (Users)
  - Hak Akses Peran (Roles)
  - Log Aktivitas (Activity Log)
- Pengaturan (Settings)
  - Profil Toko (Store Profile)
  - Pengaturan Struk (Receipt Settings)

Halaman-halaman opsional dapat dihilangkan dari rilis awal jika fiturnya diputuskan untuk ditunda demi menjaga tenggat waktu.

## 9. Kontrol Akses Berbasis Peran (Role-Based Access Control - RBAC)

MVP mendukung tiga peran pengguna bawaan yang telah ditentukan (predefined roles):

| Izin Akses | Owner | Admin | Kasir |
|---|---|---|---|
| Melihat Dasbor Bisnis | Ya | Ya | Tidak |
| Melihat Laba Kotor & Harga Modal | Ya | Tidak | Tidak |
| Mengelola Data Produk | Ya | Ya | Tidak |
| Mengelola Data Kategori | Ya | Ya | Tidak |
| Mengelola Data Satuan | Ya | Ya | Tidak |
| Mengelola Data Pemasok | Ya | Ya | Tidak |
| Mengelola Data Pelanggan | Ya | Ya | Tidak |
| Mengelola Inventaris & Stok | Ya | Ya | Tidak |
| Mengakses Layar Kasir (POS) | Ya | Tidak | Ya |
| Membuat Transaksi Penjualan | Ya | Tidak | Ya |
| Melihat Semua Riwayat Transaksi | Ya | Ya | Tidak |
| Melihat Riwayat Transaksi Sendiri | Ya | Ya | Ya |
| Melihat Laporan Penjualan | Ya | Ya | Tidak |
| Melihat Laporan Stok | Ya | Ya | Tidak |
| Mengekspor Laporan yang Diizinkan | Ya | Ya | Tidak |
| Mengelola Akun Pengguna | Ya | Tidak | Tidak |
| Menetapkan Peran Pengguna | Ya | Tidak | Tidak |
| Melihat Log Aktivitas | Ya | Tidak | Tidak |
| Mengelola Pengaturan Toko | Ya | Tidak | Tidak |

Halaman Roles hanya menampilkan daftar peran bawaan dan daftar izinnya. Pembuatan peran khusus (custom roles) tidak didukung dalam lingkup MVP.

Informasi produk yang dikirimkan ke tampilan Kasir wajib menyembunyikan harga modal (purchase cost) dan estimasi laba kotor demi kerahasiaan bisnis.

## 10. Persyaratan Modul

### 10.1 Autentikasi

- Login menggunakan email dan kata sandi.
- Hashing kata sandi yang aman dan berstandar industri.
- Manajemen sesi pengguna yang aman.
- Fitur logout untuk mengakhiri sesi.
- Status akun aktif dan nonaktif.
- Otorisasi ketat di sisi server (server-side authorization).
- Rute aplikasi terlindungi (protected routes).

Pendaftaran mandiri oleh publik (self-registration) tidak didukung demi keamanan sistem internal.

### 10.2 Dasbor (Dashboard)

- Total pendapatan penjualan.
- Total jumlah transaksi berhasil.
- Total jumlah produk aktif.
- Ringkasan produk dengan stok menipis.
- Estimasi laba kotor (khusus untuk peran Owner).
- Grafik tren penjualan harian (jika alokasi waktu memungkinkan).
- Daftar transaksi terkini.
- Filter data berdasarkan rentang tanggal.

### 10.3 Manajemen Produk

Informasi produk yang wajib ada:

- Nama produk.
- SKU unik.
- Barcode unik (opsional).
- Kategori produk.
- Satuan produk.
- Harga beli/modal (purchase cost).
- Harga jual (selling price).
- Jumlah stok saat ini.
- Batas ambang stok minimum (minimum stock threshold).
- Status keaktifan (aktif/nonaktif).

Jumlah stok produk hanya dapat diubah melalui modul inventaris atau proses checkout POS, tidak dapat diubah secara langsung melalui form edit data produk biasa.

### 10.4 Manajemen Inventaris

- Menampilkan daftar stok produk saat ini.
- Mencatat barang masuk (Stock In).
- Mencatat barang keluar manual (Stock Out).
- Melakukan penyesuaian fisik stok (Stock Adjustment / Opname).
- Mencatat alasan penyesuaian stok.
- Menyimpan riwayat mutasi stok secara kronologis dan permanen.
- Mencegah timbulnya nilai stok negatif.
- Menampilkan indikator stok menipis.

### 10.5 Point of Sale (POS)

Antarmuka POS wajib mendukung:

- Pencarian produk berdasarkan nama, SKU, atau barcode.
- Input barcode melalui pemindai fisik berbasis keyboard.
- Pemilihan produk dengan klik/sentuh cepat.
- Pengelolaan keranjang belanja.
- Penyesuaian jumlah beli (quantity).
- Penghitungan subtotal secara real-time di layar.
- Dukungan diskon transaksi flat (opsional).
- Input nominal uang tunai yang diterima.
- Penghitungan uang kembalian secara otomatis.
- Konfirmasi penyelesaian transaksi (checkout).
- Tampilan dan pencetakan struk transaksi.

Seluruh perhitungan akhir wajib divalidasi dan dihitung ulang secara independen oleh server sebelum disimpan ke basis data.

### 10.6 Manajemen Transaksi

- Menampilkan riwayat transaksi penjualan.
- Pencarian transaksi berdasarkan nomor faktur/invoice.
- Melihat rincian lengkap transaksi.
- Filter transaksi berdasarkan rentang tanggal.
- Pembatasan hak akses riwayat transaksi sesuai peran pengguna.
- Menyimpan snapshot harga jual dan harga modal historis saat transaksi terjadi.
- Penyediaan fitur cetak ulang dan pratinjau struk.

Transaksi yang telah berstatus selesai (completed) tidak dapat diubah atau dihapus melalui aplikasi.

### 10.7 Pelaporan

Laporan Penjualan:

- Total nilai penjualan bersih.
- Total volume transaksi.
- Total potongan diskon.
- Rincian penjualan berdasarkan periode yang dipilih.

Laporan Laba Kotor:

- Penjualan bersih.
- Total harga pokok penjualan historis (HPP / snapshot cost).
- Estimasi laba kotor.

Laporan Stok:

- Jumlah stok barang saat ini.
- Daftar produk dengan stok menipis di bawah ambang batas.
- Ringkasan riwayat mutasi stok.

Laporan disusun berdasarkan transaksi yang telah selesai dengan mengacu pada zona waktu toko. Ekspor data ke Excel merupakan prioritas sekunder.

### 10.8 Administrasi Pengguna

- Membuat akun pengguna baru.
- Memperbarui data pengguna.
- Menetapkan peran bawaan (Owner, Admin, Kasir).
- Mengaktifkan atau menonaktifkan akun pengguna.
- Mencegah penonaktifan atau penurunan peran pada akun Owner aktif terakhir.

### 10.9 Pengaturan (Settings)

- Nama toko.
- Alamat toko.
- Nomor telepon toko.
- Zona waktu toko.
- Teks header dan footer pada struk belanja.

Konfigurasi bawaan (default fallback) dapat digunakan jika antarmuka Pengaturan ditunda pembuatannya.

## 11. Alur Pengguna Utama (Primary User Flow)

1. Pengguna membuka aplikasi dan melakukan login.
2. Sistem memvalidasi kredensial dan status keaktifan akun.
3. Sistem menentukan peran dan izin pengguna.
4. Pengguna diarahkan ke modul sesuai hak aksesnya.
5. Kasir atau Owner membuka halaman Point of Sale (POS).
6. Produk dipilih atau dipindai, lalu masuk ke keranjang belanja.
7. Kasir menerima uang pembayaran tunai dari pembeli.
8. Kasir menekan tombol konfirmasi checkout.
9. Server memvalidasi seluruh data checkout (ketersediaan stok, harga, nominal uang).
10. Basis data menyimpan transaksi dan memotong stok barang secara atomik.
11. Sistem menampilkan struk bukti pembayaran berhasil dan mengosongkan keranjang.

## 12. Persyaratan Pengalaman Pengguna (User Experience)

- Navigasi antarmuka yang konsisten dan jelas.
- Pesan validasi formulir yang mudah dipahami.
- Tampilan tabel dan layout yang responsif di berbagai ukuran layar.
- Indikator pemuatan (loading state) untuk setiap proses asinkron.
- Tampilan kosong (empty state) yang informatif saat belum ada data.
- Dialog konfirmasi untuk tindakan yang bersifat destruktif.
- Notifikasi status sukses atau gagal yang jelas.
- Operasional POS yang ramah navigasi keyboard untuk mempercepat kerja kasir.
- Aksesibilitas yang baik dengan label jelas dan fokus indikator yang terlihat.

## 13. Metrik Keberhasilan Produk

| Metrik | Target |
|---|---|
| Kelengkapan fitur wajib (Must Have) | 100% |
| Pengujian skenario kritis checkout | Seluruhnya lulus (100% passing) |
| Insiden stok bernilai negatif dalam pengujian | Nol |
| Insiden transaksi ganda dalam pengujian | Nol |
| Kegagalan pengujian pembatasan akses hak pengguna | Nol |
| Pemeriksaan otomatis alur CI | Seluruhnya lulus |
| Ketersediaan sistem | URL demo publik dapat diakses dengan stabil |
| Dokumentasi proyek | Lengkap, akurat, dan terus diperbarui |

Seluruh metrik ini merupakan target rilis yang wajib diverifikasi melalui rangkaian pengujian menyeluruh.

## 14. Kriteria Rilis (Release Criteria)

MVP dinyatakan siap dirilis jika:

- Seluruh fitur berstatus Must Have telah selesai diimplementasikan.
- Sistem autentikasi dan otorisasi berfungsi dengan benar.
- Operasi inventaris mampu menjaga konsistensi data secara mutlak.
- Transaksi checkout yang valid berhasil diproses dengan lancar.
- Transaksi checkout yang tidak valid ditolak dengan aman tanpa meninggalkan data parsial.
- Seluruh pengujian otomatis (unit, integrasi, E2E) berhasil lulus.
- Alur CI/CD berjalan lancar tanpa kendala.
- Dokumentasi panduan instalasi dan deployment tersedia lengkap.
- Tidak ditemukan celah keamanan kritis yang belum terselesaikan.

## 15. Pengembangan di Masa Depan (Future Enhancements)

- Manajemen multi-toko dan multi-cabang.
- Arsitektur multi-tenant.
- Integrasi pembayaran digital QRIS dan payment gateway.
- Manajemen pengembalian dana (refund) dan retur barang.
- Manajemen shift kerja kasir dan rekonsiliasi kas laci.
- Sistem penghitungan HPP tingkat lanjut (FIFO / Weighted Average).
- Program keanggotaan dan loyalitas pelanggan.
- Aplikasi POS luring (offline-first POS).
- Dasbor analitik performa bisnis tingkat lanjut.
- Integrasi dengan software akuntansi pihak ketiga.

## 16. Dokumen Terkait

- [Dokumen Persyaratan Bisnis (BRD)](BRD.md)
- [Persyaratan Fungsional (FRS)](functional-requirements.md)
- [Persyaratan Non-Fungsional (NFRS)](non-functional-requirements.md)
- [Spesifikasi Aturan Bisnis](business-rules.md)
- [User Stories dan Kriteria Penerimaan](user-stories.md)
- [Cakupan MVP](mvp-scope.md)
- [Arsitektur Sistem](architecture.md)
