# Matriks CRUD (CRUD Matrix)

## 1. Informasi Dokumen

| Atribut | Nilai |
|---|---|
| Proyek | CashierFlow |
| Versi Dokumen | 1.0 |
| Penulis | ZyxxBoy |
| Status | Design Baseline |

## 2. Tujuan

Matriks CRUD mendefinisikan bagaimana setiap modul aplikasi berinteraksi dengan entitas-entitas di dalam basis data.

Dokumen ini berfungsi sebagai acuan dalam implementasi service layer, desain repositori data, kontrol akses, dan pengujian integrasi otomatis.

Matriks ini menggambarkan operasi data sistem, bukan izin hak akses pengguna. Hak akses pengguna didefinisikan secara terpisah pada Matriks RBAC.

## 3. Legenda CRUD

| Simbol | Arti |
|---|---|
| C | Create (Membuat data baru) |
| R | Read (Membaca/melihat data) |
| U | Update (Memperbarui data) |
| D | Delete (Menghapus data permanen) |
| SD | Soft Deactivation (Penonaktifan lunak via flag `is_active`) |
| - | No Access (Tidak ada akses) |

Penonaktifan lunak (soft deactivation) diimplementasikan dengan mengubah nilai kolom `is_active` menjadi `false`.

## 4. Singkatan Entitas

| Singkatan | Nama Entitas Basis Data |
|---|---|
| USR | users |
| CAT | categories |
| UNT | units |
| SUP | suppliers |
| PRD | products |
| CUS | customers |
| STM | stock_movements |
| TRX | transactions |
| TRI | transaction_items |
| LOG | activity_logs |
| SET | store_settings |

## 5. Matriks CRUD Utama

| Modul Aplikasi | USR | CAT | UNT | SUP | PRD | CUS | STM | TRX | TRI | LOG | SET |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Autentikasi | R/U | - | - | - | - | - | - | - | - | C | - |
| Dasbor | - | - | - | - | R | - | - | R | R | - | R |
| Manajemen Produk | - | R | R | - | C/R/U/SD | - | - | - | - | C | - |
| Manajemen Kategori | - | C/R/U/D/SD | - | - | R | - | - | - | - | C | - |
| Manajemen Satuan | - | - | C/R/U/D/SD | - | R | - | - | - | - | C | - |
| Manajemen Pemasok | - | - | - | C/R/U/D/SD | - | - | R | - | - | C | - |
| Manajemen Pelanggan | - | - | - | - | - | C/R/U/SD | - | R | - | C | - |
| Ringkasan Stok | - | R | R | - | R | - | - | - | - | - | - |
| Stok Masuk (Stock In) | R | - | - | R | R/U | - | C | - | - | C | - |
| Stok Keluar (Stock Out) | R | - | - | - | R/U | - | C | - | - | C | - |
| Penyesuaian Stok (Adjustment) | R | - | - | - | R/U | - | C | - | - | C | - |
| Riwayat Mutasi Stok | R | - | - | R | R | - | R | R | - | - | - |
| Pencarian Produk POS | - | R | R | - | R | - | - | - | - | - | - |
| Keranjang Belanja | - | - | - | - | R | - | - | - | - | - | - |
| Checkout | R | - | R | - | R/U | R | C | C/R | C/R | C | R |
| Riwayat Transaksi | R | - | - | - | - | R | - | R | R | - | - |
| Pembuatan Struk | R | - | - | - | - | - | - | R | R | - | R |
| Laporan Penjualan | R | - | - | - | - | - | - | R | R | - | R |
| Laporan Laba Kotor | - | - | - | - | - | - | - | R | R | - | R |
| Laporan Stok | - | R | R | - | R | - | R | - | - | - | - |
| Manajemen Pengguna | C/R/U/SD | - | - | - | - | - | - | - | - | C | - |
| Log Aktivitas | R | - | - | - | - | - | - | - | - | R | - |
| Pengaturan Toko | - | - | - | - | - | - | - | - | - | C | C/R/U |

Entitas opsional hanya digunakan apabila modul terkait telah diimplementasikan.

Pembaruan data pada modul autentikasi dibatasi untuk penggantian kata sandi yang sah dan operasi profil akun yang diizinkan.

Aplikasi dapat membaca rekaman pendukung untuk keperluan validasi internal tanpa harus mengekspos rekaman tersebut ke pengguna pemohon.

## 6. Kebijakan CRUD Tingkat Entitas

| Entitas | Create | Read | Update | Kebijakan Penghapusan (Delete Policy) |
|---|---|---|---|---|
| users | Ya | Ya | Ya | Hanya penonaktifan lunak (deactivation) |
| categories | Ya | Ya | Ya | Hapus permanen hanya jika belum direferensikan |
| units | Ya | Ya | Ya | Hapus permanen hanya jika belum direferensikan |
| suppliers | Ya | Ya | Ya | Hapus permanen hanya jika belum direferensikan |
| products | Ya | Ya | Ya | Hanya penonaktifan lunak (deactivation) |
| customers | Ya | Ya | Ya | Hanya penonaktifan lunak (deactivation) |
| stock_movements | Khusus Service | Ya | Tidak | Dilarang keras dihapus |
| transactions | Khusus Checkout | Ya | Tidak | Dilarang keras dihapus |
| transaction_items | Khusus Checkout | Ya | Tidak | Dilarang keras dihapus |
| activity_logs | Khusus Service | Ya | Tidak | Dilarang dihapus melalui aplikasi |
| store_settings | Inisialisasi Singleton | Ya | Ya | Dilarang keras dihapus |

## 7. Matriks Operasi Inventaris

| Operasi | products | stock_movements |
|---|---|---|
| Tambah Produk Baru | C | - |
| Edit Informasi Produk | U | - |
| Stok Masuk (Stock In) | R/U | C |
| Stok Keluar (Stock Out) | R/U | C |
| Penyesuaian Stok (Adjustment) | R/U | C |
| Checkout Penjualan | R/U | C |
| Nonaktifkan Produk | U | - |

Modul manajemen produk dilarang mengubah kuantitas stok secara langsung.

Layanan inventaris (Inventory Service) adalah pemilik tunggal atas setiap mutasi stok produk.

Setiap mutasi stok dan pembuatan rekaman mutasinya wajib dieksekusi di dalam satu transaksi basis data yang sama (atomik).

## 8. Matriks Operasi Checkout

| Urutan | Entitas | Operasi |
|---|---|---|
| 1 | users | Membaca dan memvalidasi kasir aktif |
| 2 | transactions | Memeriksa keberadaan kunci idempotensi |
| 3 | customers | Memvalidasi pelanggan opsional jika dicantumkan |
| 4 | products | Mengunci (lock) dan memvalidasi ketersediaan produk |
| 5 | units | Membaca snapshot nama satuan historis |
| 6 | transactions | Membuat rekaman transaksi induk (header) |
| 7 | transaction_items | Membuat rekaman rincian item transaksi |
| 8 | products | Memotong kuantitas stok barang |
| 9 | stock_movements | Membuat rekaman mutasi stok bertipe SALE |
| 10 | activity_logs | Mencatat aktivitas checkout jika modul aktif |

Langkah 3 hingga 9 wajib dieksekusi di dalam transaksi basis data yang sama, termasuk penegakan keunikan kunci idempotensi.

Jika terjadi kegagalan pada operasi kritis, seluruh perubahan checkout wajib di-rollback secara penuh.

Pencatatan event audit checkout dapat dilakukan dalam transaksi yang sama setelah rekaman bisnis selesai disiapkan.

## 9. Matriks Operasi Pelaporan

| Laporan | Sumber Data Utama | Operasi |
|---|---|---|
| Ringkasan Penjualan | transactions | Read |
| Detail Penjualan | transactions, transaction_items | Read |
| Laba Kotor | transactions, transaction_items | Read |
| Produk Terlaris | transaction_items | Read |
| Stok Saat Ini | products | Read |
| Laporan Mutasi Stok | stock_movements | Read |
| Dasbor Bisnis | transactions, transaction_items, products | Read |

Modul pelaporan dilarang melakukan modifikasi data bisnis transaksi apa pun (hanya read-only).

Kalkulasi laba kotor wajib menggunakan snapshot harga modal historis yang tersimpan pada item transaksi.

## 10. Kepemilikan Data (Data Ownership)

| Layanan (Service) | Entitas atau Operasi yang Dimiliki |
|---|---|
| Auth Service | Autentikasi dan validasi akun login |
| User Service | users |
| Category Service | categories |
| Unit Service | units |
| Supplier Service | suppliers |
| Customer Service | customers |
| Product Service | Metadata data produk |
| Inventory Service | Kuantitas stok produk dan stock_movements |
| Checkout Service | transactions dan transaction_items |
| Report Service | Query pelaporan berbasis read-only |
| Audit Service | activity_logs |
| Settings Service | store_settings |

Checkout Service wajib berkoordinasi dengan Inventory Service di dalam satu batasan transaksi atomik bersama.

Seluruh repositori yang terlibat dalam proses checkout wajib menggunakan instance klien basis data yang sama dalam cakupan transaksi tersebut.

## 11. Aturan Penghapusan Data

- Data master yang sudah pernah direferensikan dilarang dihapus secara permanen (hard delete).
- Produk yang dinonaktifkan dikeluarkan dari pilihan penjualan baru.
- Transaksi penjualan yang telah selesai bersifat abadi (immutable).
- Rincian item transaksi bersifat abadi (immutable).
- Riwayat mutasi stok inventaris bersifat abadi (immutable).
- Log aktivitas umum hanya bersifat append-only melalui aplikasi.
- Rekaman singleton pengaturan toko dilarang dihapus.

## 12. Dokumen Terkait

- [Kamus Data Basis Data](data-dictionary.md)
- [Diagram Relasi Entitas (ERD)](erd.md)
- [Matriks RBAC](rbac-matrix.md)
- [Spesifikasi Aturan Bisnis](business-rules.md)
