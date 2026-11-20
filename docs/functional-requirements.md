# Spesifikasi Persyaratan Fungsional (Functional Requirements Specification - FRS)

## 1. Informasi Dokumen

| Atribut | Deskripsi |
|---|---|
| Proyek | CashierFlow |
| Versi Dokumen | 1.0 |
| Versi Produk | 1.0.0 MVP |
| Penulis | ZyxxBoy |
| Status | Initial Baseline |

## 2. Definisi Prioritas

| Prioritas | Deskripsi |
|---|---|
| Must | Wajib ada dan mutlak diselesaikan untuk rilis MVP |
| Should | Penting namun dapat ditunda jika alokasi waktu terbatas |
| Could | Fitur peningkatan yang bersifat opsional |
| Won't | Dikeluarkan dari cakupan rilis versi ini |

## 3. Persyaratan Autentikasi

| ID | Persyaratan | Prioritas |
|---|---|---|
| FR-AUTH-001 | Sistem harus memungkinkan pengguna untuk login menggunakan email dan kata sandi | Must |
| FR-AUTH-002 | Sistem harus memungkinkan pengguna yang terautentikasi untuk logout | Must |
| FR-AUTH-003 | Sistem harus memvalidasi keabsahan kredensial pengguna | Must |
| FR-AUTH-004 | Sistem harus memelihara sesi autentikasi pengguna secara aman | Must |
| FR-AUTH-005 | Sistem harus memvalidasi peran dan izin akses pengguna | Must |
| FR-AUTH-006 | Sistem harus memungkinkan pengguna untuk mengubah kata sandi mereka | Should |
| FR-AUTH-007 | Sistem harus menolak upaya akses dari akun pengguna yang nonaktif | Must |

## 4. Persyaratan Dasbor (Dashboard)

| ID | Persyaratan | Prioritas |
|---|---|---|
| FR-DSH-001 | Menampilkan total penjualan bersih untuk periode yang dipilih | Must |
| FR-DSH-002 | Menampilkan total jumlah transaksi yang berhasil | Must |
| FR-DSH-003 | Menampilkan jumlah total produk yang berstatus aktif | Must |
| FR-DSH-004 | Menampilkan ringkasan produk dengan stok yang menipis di bawah ambang batas | Should |
| FR-DSH-005 | Menampilkan estimasi laba kotor hanya kepada peran Owner yang berwenang | Must |
| FR-DSH-006 | Menampilkan grafik tren penjualan berkala | Should |
| FR-DSH-007 | Menampilkan daftar transaksi terbaru | Should |
| FR-DSH-008 | Menampilkan daftar produk dengan volume penjualan tertinggi (terlaris) | Should |
| FR-DSH-009 | Memfilter metrik dasbor berdasarkan rentang tanggal | Must |

## 5. Persyaratan Manajemen Produk

| ID | Persyaratan | Prioritas |
|---|---|---|
| FR-PRD-001 | Membuat data produk baru | Must |
| FR-PRD-002 | Menampilkan daftar data produk | Must |
| FR-PRD-003 | Memperbarui data informasi produk | Must |
| FR-PRD-004 | Menonaktifkan status produk yang ada | Must |
| FR-PRD-005 | Mencari produk berdasarkan nama, SKU, atau barcode | Must |
| FR-PRD-006 | Memfilter data produk berdasarkan kategori dan status keaktifan | Should |
| FR-PRD-007 | Menampilkan data produk dengan penomoran halaman (paginasi) | Must |
| FR-PRD-008 | Memvalidasi keunikan SKU produk | Must |
| FR-PRD-009 | Memvalidasi keunikan barcode produk yang tidak kosong | Must |
| FR-PRD-010 | Memvalidasi keabsahan harga jual dan harga modal | Must |
| FR-PRD-011 | Menetapkan kategori dan satuan unit pada setiap produk | Must |
| FR-PRD-012 | Mengonfigurasi ambang batas stok minimum produk | Must |
| FR-PRD-013 | Mengunggah gambar/foto produk | Could |
| FR-PRD-014 | Menampilkan jumlah stok fisik produk saat ini | Must |

## 6. Persyaratan Manajemen Kategori

| ID | Persyaratan | Prioritas |
|---|---|---|
| FR-CAT-001 | Membuat data kategori produk baru | Must |
| FR-CAT-002 | Menampilkan daftar kategori produk | Must |
| FR-CAT-003 | Memperbarui informasi kategori produk | Must |
| FR-CAT-004 | Menghapus kategori yang belum terpakai atau menonaktifkan kategori yang telah terpakai | Must |
| FR-CAT-005 | Memvalidasi keunikan nama kategori produk | Must |
| FR-CAT-006 | Menyediakan fitur pencarian dan paginasi kategori | Should |

## 7. Persyaratan Manajemen Satuan (Units)

| ID | Persyaratan | Prioritas |
|---|---|---|
| FR-UNT-001 | Membuat data satuan produk baru | Must |
| FR-UNT-002 | Menampilkan daftar satuan produk yang tersedia | Must |
| FR-UNT-003 | Memperbarui informasi satuan produk | Must |
| FR-UNT-004 | Menghapus satuan yang belum terpakai atau menonaktifkan satuan yang telah terpakai | Must |
| FR-UNT-005 | Memvalidasi keunikan nama atau kode satuan produk | Must |

## 8. Persyaratan Manajemen Pemasok (Suppliers)

| ID | Persyaratan | Prioritas |
|---|---|---|
| FR-SUP-001 | Membuat data pemasok baru | Must |
| FR-SUP-002 | Menampilkan daftar pemasok | Must |
| FR-SUP-003 | Memperbarui data informasi pemasok | Must |
| FR-SUP-004 | Menghapus pemasok yang belum memiliki riwayat atau menonaktifkan pemasok yang terdaftar | Must |
| FR-SUP-005 | Menyimpan nomor kontak dan alamat pemasok | Must |
| FR-SUP-006 | Menghubungkan pemasok dengan pencatatan barang masuk (Stock In) | Must |
| FR-SUP-007 | Menyediakan fitur pencarian dan paginasi data pemasok | Should |

## 9. Persyaratan Manajemen Pelanggan (Customers)

| ID | Persyaratan | Prioritas |
|---|---|---|
| FR-CUS-001 | Membuat data pelanggan baru | Should |
| FR-CUS-002 | Menampilkan daftar data pelanggan | Should |
| FR-CUS-003 | Memperbarui data informasi pelanggan | Should |
| FR-CUS-004 | Menonaktifkan status pelanggan | Should |
| FR-CUS-005 | Menghubungkan pelanggan dengan transaksi penjualan saat dicantumkan | Should |
| FR-CUS-006 | Mendukung transaksi ritel tanpa identitas pelanggan (anonim / pelanggan umum) | Must |

## 10. Persyaratan Inventaris

| ID | Persyaratan | Prioritas |
|---|---|---|
| FR-INV-001 | Menampilkan jumlah stok barang yang tersedia saat ini | Must |
| FR-INV-002 | Mencatat transaksi penerimaan stok barang masuk (Stock In) | Must |
| FR-INV-003 | Mencatat pengurangan stok barang keluar manual (Stock Out) | Must |
| FR-INV-004 | Melakukan penyesuaian koreksi stok fisik (Stock Adjustment / Opname) | Must |
| FR-INV-005 | Mencatat riwayat mutasi/pergerakan stok secara kronologis | Must |
| FR-INV-006 | Mencatat jumlah kuantitas stok sebelum dan sesudah mutasi | Must |
| FR-INV-007 | Mencegah jumlah stok barang menjadi bernilai negatif | Must |
| FR-INV-008 | Memotong stok barang secara otomatis saat checkout penjualan berhasil | Must |
| FR-INV-009 | Mencatat keterangan alasan untuk setiap perubahan stok manual | Must |
| FR-INV-010 | Mencatat identitas pengguna yang bertanggung jawab atas setiap mutasi stok | Must |
| FR-INV-011 | Menampilkan indikator visual saat stok berada di bawah ambang batas minimum | Should |
| FR-INV-012 | Memfilter riwayat mutasi stok berdasarkan produk, jenis mutasi, dan tanggal | Should |
| FR-INV-013 | Mempertahankan riwayat stok meskipun produk telah dinonaktifkan | Must |

## 11. Persyaratan Point of Sale (POS)

| ID | Persyaratan | Prioritas |
|---|---|---|
| FR-POS-001 | Menampilkan produk yang aktif dan siap dijual | Must |
| FR-POS-002 | Mencari produk berdasarkan nama atau SKU | Must |
| FR-POS-003 | Mencari produk menggunakan input pemindai barcode | Must |
| FR-POS-004 | Menambahkan produk ke dalam keranjang belanja | Must |
| FR-POS-005 | Memperbarui kuantitas produk dalam keranjang belanja | Must |
| FR-POS-006 | Menghapus item produk dari keranjang belanja | Must |
| FR-POS-007 | Menghitung total harga baris dan subtotal belanja secara otomatis | Must |
| FR-POS-008 | Menerapkan diskon transaksi flat dalam nominal tetap (opsional) | Should |
| FR-POS-009 | Menghitung total akhir transaksi yang harus dibayar | Must |
| FR-POS-010 | Menerima pembayaran dalam bentuk uang tunai | Must |
| FR-POS-011 | Menghitung jumlah uang kembalian secara otomatis | Must |
| FR-POS-012 | Memvalidasi ketersediaan stok produk saat proses checkout berlangsung | Must |
| FR-POS-013 | Menghasilkan nomor faktur (invoice) unik untuk setiap transaksi | Must |
| FR-POS-014 | Menyimpan rekaman transaksi induk dan item-item rincian belanja | Must |
| FR-POS-015 | Memotong stok inventaris secara atomik pada saat checkout berhasil | Must |
| FR-POS-016 | Mencegah terjadinya transaksi checkout ganda untuk transaksi yang sama | Must |
| FR-POS-017 | Membatalkan seluruh perubahan basis data jika checkout gagal (rollback) | Must |
| FR-POS-018 | Menghasilkan dan menampilkan struk bukti pembayaran transaksi | Must |
| FR-POS-019 | Mengosongkan keranjang belanja secara otomatis setelah checkout berhasil | Must |
| FR-POS-020 | Mempertahankan isi keranjang belanja jika transaksi checkout membutuhkan koreksi | Must |

## 12. Persyaratan Manajemen Transaksi

| ID | Persyaratan | Prioritas |
|---|---|---|
| FR-TRX-001 | Menampilkan daftar riwayat transaksi penjualan | Must |
| FR-TRX-002 | Menampilkan rincian detail faktur transaksi | Must |
| FR-TRX-003 | Memfilter riwayat transaksi berdasarkan rentang tanggal | Must |
| FR-TRX-004 | Memfilter riwayat transaksi berdasarkan kasir yang bertugas | Should |
| FR-TRX-005 | Mencari transaksi berdasarkan nomor faktur/invoice | Must |
| FR-TRX-006 | Melihat dan mencetak ulang struk bukti transaksi | Should |
| FR-TRX-007 | Menyimpan snapshot nama dan harga jual produk saat transaksi terjadi | Must |
| FR-TRX-008 | Menyimpan snapshot harga modal (HPP) produk saat transaksi terjadi | Must |
| FR-TRX-009 | Membatasi kasir agar hanya dapat melihat riwayat transaksinya sendiri | Must |
| FR-TRX-010 | Mencegah perubahan atau penghapusan pada transaksi yang telah berstatus selesai | Must |

## 13. Persyaratan Pelaporan

| ID | Persyaratan | Prioritas |
|---|---|---|
| FR-RPT-001 | Menghasilkan laporan nilai dan volume penjualan | Must |
| FR-RPT-002 | Menghasilkan laporan estimasi laba kotor | Must |
| FR-RPT-003 | Menghasilkan laporan ketersediaan stok barang | Must |
| FR-RPT-004 | Menampilkan ringkasan rekapitulasi transaksi harian | Must |
| FR-RPT-005 | Menampilkan ringkasan rekapitulasi transaksi bulanan | Must |
| FR-RPT-006 | Memfilter laporan berdasarkan rentang tanggal yang dipilih | Must |
| FR-RPT-007 | Mengekspor laporan yang diizinkan ke dalam format file Excel | Should |
| FR-RPT-008 | Menampilkan peringkat produk dengan penjualan terlaris | Should |
| FR-RPT-009 | Membatasi akses laporan finansial dan laba kotor sesuai hak izin peran | Must |

## 14. Persyaratan Administrasi Pengguna

| ID | Persyaratan | Prioritas |
|---|---|---|
| FR-USR-001 | Memungkinkan peran Owner membuat akun pengguna baru | Must |
| FR-USR-002 | Menampilkan daftar data seluruh akun pengguna | Must |
| FR-USR-003 | Memperbarui data profil akun pengguna | Must |
| FR-USR-004 | Mengaktifkan atau menonaktifkan status akun pengguna | Must |
| FR-USR-005 | Menetapkan peran bawaan sistem pada akun pengguna | Must |
| FR-USR-006 | Memvalidasi keunikan alamat email pengguna | Must |
| FR-USR-007 | Mencegah penghapusan atau penonaktifan akun Owner aktif terakhir | Must |
| FR-USR-008 | Menampilkan matriks hak izin akses untuk setiap peran bawaan | Should |

## 15. Persyaratan Log Aktivitas (Activity Log)

| ID | Persyaratan | Prioritas |
|---|---|---|
| FR-LOG-001 | Mencatat peristiwa autentikasi penting (misal: login gagal berulang) | Should |
| FR-LOG-002 | Mencatat perubahan pada data master | Should |
| FR-LOG-003 | Mencatat aktivitas pada modul administrasi pengguna | Should |
| FR-LOG-004 | Mencatat aktivitas yang berkaitan dengan transaksi penjualan | Should |
| FR-LOG-005 | Menampilkan riwayat log aktivitas khusus kepada peran Owner | Should |
| FR-LOG-006 | Memfilter log berdasarkan nama pengguna, jenis tindakan, dan tanggal | Could |

Keterlacakan mutasi stok dan riwayat transaksi penjualan tetap wajib diimplementasikan meskipun modul log aktivitas umum ditunda.

## 16. Persyaratan Pengaturan (Settings)

| ID | Persyaratan | Prioritas |
|---|---|---|
| FR-SET-001 | Mengonfigurasi nama, alamat, dan nomor kontak toko | Should |
| FR-SET-002 | Mengonfigurasi teks header dan footer pada struk belanja | Should |
| FR-SET-003 | Mengonfigurasi zona waktu operasional toko | Should |
| FR-SET-004 | Mendukung konfigurasi bawaan (default fallback) jika menu pengaturan belum tersedia | Must |
| FR-SET-005 | Membatasi perubahan pengaturan sistem hanya untuk peran Owner | Must |

## 17. Persyaratan Penanganan Error

| ID | Persyaratan | Prioritas |
|---|---|---|
| FR-ERR-001 | Menampilkan pesan error validasi input yang jelas dan mudah dipahami | Must |
| FR-ERR-002 | Menampilkan pesan kegagalan autentikasi yang aman tanpa membocorkan detail sensitif | Must |
| FR-ERR-003 | Menolak dan menghentikan operasi yang tidak memiliki izin hak akses | Must |
| FR-ERR-004 | Menangani kegagalan koneksi basis data dengan aman | Must |
| FR-ERR-005 | Menangani konflik operasi checkout bersamaan secara aman dan teratur | Must |
| FR-ERR-006 | Mencegah terpaparnya detail internal kode/database pada pesan error ke klien | Must |
| FR-ERR-007 | Menyediakan indikator loading state dan tampilan kosong (empty state) yang rapi | Must |

## 18. Konvensi Status HTTP

Untuk Route Handlers bergaya REST:

| Kode HTTP | Penggunaan |
|---|---|
| 200 | Pembacaan atau pembaruan data berhasil |
| 201 | Pembuatan data sumber daya (resource) baru berhasil |
| 400 | Format permintaan tidak valid atau cacat (malformed request) |
| 401 | Diperlukan proses autentikasi (belum login) |
| 403 | Pengguna tidak memiliki izin hak akses (forbidden) |
| 404 | Data sumber daya tidak ditemukan |
| 409 | Terjadi konflik duplikasi data atau konflik status bisnis |
| 422 | Data permintaan secara semantik tidak valid melanggar aturan bisnis |
| 429 | Batas kuota request terlampaui (rate limit exceeded) |
| 500 | Terjadi kegagalan sistem internal yang tidak terduga |
| 503 | Layanan sementara tidak tersedia |

Server Actions dapat menggunakan objek status terstruktur `{ success, data, error }` sebagai pengganti kode status HTTP langsung.

## 19. Ketertelusuran Persyaratan (Requirements Traceability)

| Sasaran Bisnis | Modul yang Terkait |
|---|---|
| BO-001 | Layar Kasir (POS), Transaksi |
| BO-002 | Inventaris, Layar Kasir (POS) |
| BO-003 | Data Master |
| BO-004 | Pelaporan |
| BO-005 | Layar Kasir (POS), Aturan Bisnis |
| BO-006 | Autentikasi, Administrasi Pengguna |
| BO-007 | Mutasi Stok, Transaksi |
| BO-008 | Dasbor, Pelaporan |
| BO-009 | Seluruh Modul Sistem |

## 20. Dokumen Terkait

- [Dokumen Persyaratan Bisnis (BRD)](BRD.md)
- [Dokumen Persyaratan Produk (PRD)](PRD.md)
- [Spesifikasi Aturan Bisnis](business-rules.md)
- [User Stories dan Kriteria Penerimaan](user-stories.md)
- [Persyaratan Non-Fungsional (NFRS)](non-functional-requirements.md)
- [Cakupan MVP](mvp-scope.md)
