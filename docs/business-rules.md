# Spesifikasi Aturan Bisnis (Business Rules Specification)

## 1. Informasi Dokumen

| Atribut | Deskripsi |
|---|---|
| Proyek | CashierFlow |
| Versi Dokumen | 1.0 |
| Versi Produk | 1.0.0 MVP |
| Penulis | ZyxxBoy |
| Status | Initial Baseline |

## 2. Tujuan

Aturan bisnis mendefinisikan kondisi, pembatasan, metode perhitungan, dan kebijakan operasional yang mengatur jalannya sistem CashierFlow.

Seluruh aturan bisnis yang bersifat kritis wajib ditegakkan di sisi server (server-side). Validasi di sisi klien (client-side) bertujuan untuk meningkatkan kenyamanan antarmuka pengguna (UX), bukan sebagai pengganti validasi di sisi server.

## 3. Aturan Autentikasi dan Otorisasi

| ID | Aturan |
|---|---|
| BR-AUTH-001 | Setiap pengguna wajib memiliki alamat email yang unik |
| BR-AUTH-002 | Kata sandi tidak boleh disimpan dalam bentuk teks biasa (plaintext) |
| BR-AUTH-003 | Hanya pengguna dengan status aktif yang dapat mengakses fitur terautentikasi |
| BR-AUTH-004 | Setiap pengguna wajib memiliki satu peran bawaan yang telah ditentukan |
| BR-AUTH-005 | Hanya peran Owner yang berwenang untuk mengelola akun pengguna aplikasi |
| BR-AUTH-006 | Kasir dilarang mengakses informasi harga beli/modal barang dan laporan laba kotor |
| BR-AUTH-007 | Pemeriksaan hak akses izin wajib dijalankan di sisi server |
| BR-AUTH-008 | Akun Owner aktif terakhir tidak boleh dinonaktifkan atau diturunkan perannya |
| BR-AUTH-009 | Status keaktifan pengguna dan izin efektifnya wajib divalidasi ulang pada setiap operasi terproteksi |

### Peran yang Didukung

- OWNER (Pemilik Usaha)
- ADMIN (Administrator)
- CASHIER (Kasir)

## 4. Aturan Produk

| ID | Aturan |
|---|---|
| BR-PRD-001 | Setiap produk wajib memiliki SKU (Stock Keeping Unit) yang unik |
| BR-PRD-002 | Barcode produk wajib unik jika dicantumkan |
| BR-PRD-003 | Nama produk tidak boleh kosong |
| BR-PRD-004 | Harga jual produk harus lebih besar dari nol (> 0) |
| BR-PRD-005 | Harga beli/modal tidak boleh bernilai negatif (>= 0) |
| BR-PRD-006 | Setiap produk wajib terhubung dengan kategori dan satuan yang valid |
| BR-PRD-007 | Produk nonaktif tidak boleh diperjualbelikan di kasir |
| BR-PRD-008 | Jumlah kuantitas stok barang wajib berupa bilangan bulat positif atau nol (integer) |
| BR-PRD-009 | Nilai stok awal produk baru secara default adalah nol (0) |
| BR-PRD-010 | Jumlah stok produk tidak dapat diubah secara langsung melalui form pengeditan data produk biasa |
| BR-PRD-011 | Produk yang telah memiliki riwayat transaksi atau mutasi stok dilarang dihapus secara permanen dari basis data |
| BR-PRD-012 | Batas ambang stok minimum tidak boleh bernilai negatif (>= 0) |

Nilai barcode opsional yang kosong wajib dinormalisasi menjadi nilai NULL pada basis data.

Menjual produk di bawah harga modal tetap diperbolehkan dalam sistem, karena adanya kemungkinan kegiatan promosi, diskon khusus, atau cuci gudang (clearance sale) yang menghasilkan margin negatif.

## 5. Aturan Data Master

| ID | Aturan |
|---|---|
| BR-MD-001 | Nama kategori produk wajib unik |
| BR-MD-002 | Nama atau kode satuan unit barang wajib unik |
| BR-MD-003 | Data master yang sudah direferensikan oleh data lain dilarang dihapus secara permanen |
| BR-MD-004 | Kategori dan satuan yang nonaktif tidak dapat dipilih untuk penambahan produk baru |
| BR-MD-005 | Pemasok yang nonaktif tidak dapat dipilih untuk pencatatan barang masuk baru |
| BR-MD-006 | Data pelanggan bersifat opsional pada transaksi ritel |
| BR-MD-007 | Referensi data historis tetap harus dapat diakses meskipun entitas master telah dinonaktifkan |

Data master yang belum pernah digunakan atau direferensikan oleh rekaman lain dapat dihapus oleh pengguna yang berwenang.

## 6. Aturan Inventaris

| ID | Aturan |
|---|---|
| BR-INV-001 | Jumlah stok produk tidak boleh bernilai negatif (< 0) |
| BR-INV-002 | Kuantitas barang masuk (Stock In) wajib berupa bilangan bulat positif (> 0) |
| BR-INV-003 | Kuantitas barang keluar manual (Stock Out) wajib berupa bilangan bulat positif (> 0) |
| BR-INV-004 | Kuantitas barang keluar tidak boleh melebihi stok yang tersedia saat itu |
| BR-INV-005 | Setiap perubahan stok barang wajib menghasilkan satu rekaman mutasi stok (stock movement) |
| BR-INV-006 | Rekaman mutasi stok wajib mencatat jumlah stok sebelum dan sesudah perubahan terjadi |
| BR-INV-007 | Perubahan stok manual wajib menyertakan alasan keterangan perubahan |
| BR-INV-008 | Setiap rekaman mutasi stok wajib mencatat identitas pengguna yang bertanggung jawab |
| BR-INV-009 | Pembaruan jumlah stok dan pembuatan rekaman mutasi stok wajib di-commit secara atomik |
| BR-INV-010 | Riwayat mutasi inventaris tidak dapat diubah atau dihapus melalui aplikasi |
| BR-INV-011 | Target stok pada penyesuaian fisik (opname) wajib berupa bilangan bulat positif atau nol (>= 0) |
| BR-INV-012 | Penyesuaian fisik dengan selisih nol (tidak ada perubahan) tidak boleh membuat rekaman mutasi stok |
| BR-INV-013 | Operasi perubahan stok yang terjadi bersamaan (konkuren) wajib menjaga konsistensi data secara mutlak |

### Tipe Mutasi Stok

| Tipe | Deskripsi |
|---|---|
| STOCK_IN | Penerimaan persediaan barang masuk |
| STOCK_OUT | Pengurangan barang secara manual (misal: barang rusak atau kedaluwarsa) |
| ADJUSTMENT | Penyesuaian/koreksi selisih stok fisik (stock opname) |
| SALE | Pemotongan stok otomatis dari transaksi penjualan berhasil |

### Rumus Stok Masuk (Stock In)

    stok_baru = stok_saat_ini + kuantitas_masuk

Contoh:

    Stok saat ini = 20
    Kuantitas masuk = 10
    Stok baru = 30

### Rumus Stok Keluar (Stock Out)

    stok_baru = stok_saat_ini - kuantitas_keluar

Contoh:

    Stok saat ini = 20
    Kuantitas keluar = 5
    Stok baru = 15

### Rumus Penyesuaian Stok (Stock Adjustment)

    selisih_penyesuaian = stok_fisik - stok_saat_ini
    stok_baru = stok_fisik

Contoh:

    Stok sistem = 20
    Stok fisik hasil hitung = 18
    Selisih mutasi = -2
    Stok baru = 18

## 7. Aturan Keranjang Belanja

| ID | Aturan |
|---|---|
| BR-CART-001 | Hanya produk yang berstatus aktif yang dapat dimasukkan ke keranjang belanja |
| BR-CART-002 | Kuantitas barang dalam keranjang wajib berupa bilangan bulat positif (> 0) |
| BR-CART-003 | Menambahkan produk yang sudah ada di keranjang akan meningkatkan jumlah kuantitas produk tersebut |
| BR-CART-004 | Produk di keranjang belanja dapat dihapus sebelum checkout dilakukan |
| BR-CART-005 | Keranjang belanja yang kosong tidak dapat diproses untuk checkout |
| BR-CART-006 | Nilai harga pada sisi klien hanya berupa estimasi sementara hingga divalidasi oleh server |
| BR-CART-007 | Item produk yang duplikat wajib dikonsolidasi menjadi satu baris sebelum validasi server |

Menambahkan produk ke dalam keranjang belanja tidak mengunci atau mengurangi kuantitas stok di gudang/toko.

Ketersediaan stok sebenarnya akan divalidasi secara ketat pada saat konfirmasi checkout dilakukan.

## 8. Aturan Perhitungan Transaksi

| ID | Aturan |
|---|---|
| BR-CAL-001 | Nilai nominal uang wajib menggunakan format bilangan bulat integer Rupiah (IDR) tanpa desimal |
| BR-CAL-002 | Total harga baris (line total) sama dengan harga satuan dikalikan dengan kuantitas |
| BR-CAL-003 | Subtotal sama dengan jumlah keseluruhan dari line total setiap item transaksi |
| BR-CAL-004 | Nilai potongan diskon transaksi tidak boleh bernilai negatif (>= 0) |
| BR-CAL-005 | Nilai diskon tidak boleh melebihi nilai subtotal transaksi |
| BR-CAL-006 | Total akhir yang harus dibayar wajib lebih besar dari nol (> 0) |
| BR-CAL-007 | Uang tunai yang diterima dari pembeli tidak boleh kurang dari total akhir transaksi |
| BR-CAL-008 | Uang kembalian sama dengan uang tunai diterima dikurangi total akhir transaksi |
| BR-CAL-009 | Server wajib menghitung ulang secara mandiri seluruh nilai transaksi |
| BR-CAL-010 | Seluruh nilai nominal dan perhitungan wajib berada dalam batas numerik yang aman (safe integer bounds) |

### Rumus Perhitungan

    line_total = harga_jual * kuantitas

    subtotal = sum(line_total)

    total_akhir = subtotal - diskon

    kembalian = uang_diterima - total_akhir

    total_harga_pokok = sum(snapshot_harga_modal * kuantitas)

    laba_kotor = total_akhir - total_harga_pokok

### Contoh Perhitungan Transaksi

| Produk | Kuantitas | Harga Jual | Harga Modal | Total Baris |
|---|---|---|---|---|
| Produk A | 2 | 15.000 | 10.000 | 30.000 |
| Produk B | 1 | 20.000 | 12.000 | 20.000 |

    Subtotal        = IDR 50.000
    Diskon          = IDR  5.000
    Total Akhir     = IDR 45.000
    Uang Diterima   = IDR 50.000
    Uang Kembalian  = IDR  5.000
    Harga Pokok     = IDR 32.000
    Laba Kotor      = IDR 13.000

Laba kotor dihitung menggunakan snapshot harga modal barang yang tersimpan permanen saat transaksi penjualan berhasil diselesaikan.

Metode penilaian persediaan FIFO, rata-rata tertimbang, pajak, dan laporan akuntansi formal berada di luar cakupan MVP.

## 9. Aturan Checkout

| ID | Aturan |
|---|---|
| BR-CHK-001 | Hanya pengguna dengan peran Owner dan Kasir yang dapat membuat transaksi penjualan |
| BR-CHK-002 | Permintaan checkout wajib memiliki minimal satu jenis produk |
| BR-CHK-003 | Setiap produk yang dicheckout wajib aktif dan tersedia |
| BR-CHK-004 | Kuantitas yang dibeli tidak boleh melebihi sisa stok yang tersedia saat itu |
| BR-CHK-005 | Setiap transaksi wajib menghasilkan nomor faktur (invoice) yang unik |
| BR-CHK-006 | Setiap percobaan checkout wajib menyertakan kunci idempotensi (idempotency key) |
| BR-CHK-007 | Rekaman transaksi, item penjualan, data pembayaran, dan mutasi stok wajib di-commit secara atomik |
| BR-CHK-008 | Kegagalan pada langkah checkout tidak boleh menyisakan perubahan sebagian pada basis data (harus rollback penuh) |
| BR-CHK-009 | Permintaan checkout yang terjadi secara bersamaan tidak boleh menyebabkan overselling (stok minus) |
| BR-CHK-010 | Checkout yang berhasil wajib menyimpan snapshot harga jual dan harga modal historis barang |
| BR-CHK-011 | Pembayaran tunai adalah satu-satunya metode pembayaran yang didukung pada MVP |
| BR-CHK-012 | Jika harga jual produk berubah saat transaksi berlangsung di kasir, kasir wajib mengonfirmasi harga baru sebelum checkout selesai |
| BR-CHK-013 | Transaksi yang telah selesai bersifat abadi (immutable) dan tidak dapat dimodifikasi |
| BR-CHK-014 | Total harga yang dikirim oleh klien tidak boleh dipercaya mentah-mentah sebagai nilai otoritatif |

### Format Nomor Faktur (Invoice)

    CF-YYYYMMDD-<akhiran-unik>

Contoh:

    CF-20261120-8F42A1

Tanggal pada nomor faktur menggunakan zona waktu toko yang dikonfigurasi.

Implementasi akhir wajib menegakkan keunikan nomor faktur pada tingkat basis data dan menangani potensi tabrakan identifikasi secara aman. Format akhiran unik dapat disesuaikan pada saat perancangan fisik basis data.

### Tahapan Pemrosesan Checkout

1. Autentikasi identitas pengguna pemohon.
2. Verifikasi hak akses izin checkout (Owner atau Kasir).
3. Validasi dan normalisasi payload permintaan checkout.
4. Periksa kunci idempotensi (idempotency key).
5. Mulai transaksi basis data (Prisma interactive transaction).
6. Baca dan validasi data produk terbaru dari basis data.
7. Hitung ulang seluruh nominal transaksi di sisi server.
8. Validasi kecukupan pembayaran uang tunai.
9. Buat rekaman transaksi induk dan rincian item transaksi.
10. Potong stok setiap produk menggunakan conditional update yang memverifikasi ketersediaan stok.
11. Buat rekaman mutasi stok (tipe SALE) untuk masing-masing item.
12. Commit transaksi basis data secara penuh.
13. Kembalikan data transaksi yang telah berhasil dibuat.
14. Kosongkan keranjang belanja pada antarmuka kasir.

Jika salah satu tahapan mengalami kegagalan, seluruh perubahan dibatalkan (rollback).

## 10. Aturan Idempotensi (Idempotency Rules)

| ID | Aturan |
|---|---|
| BR-IDP-001 | Kunci unik wajib digenerate di sisi klien untuk setiap niat transaksi checkout baru |
| BR-IDP-002 | Kunci idempotensi diberi cakupan (scoped) berdasarkan ID pengguna pemohon |
| BR-IDP-003 | Keunikan kombinasi pengguna dan kunci ditegakkan menggunakan unique constraint di basis data |
| BR-IDP-004 | Mengirim ulang kunci yang sama dengan payload yang identik akan mengembalikan hasil transaksi asli yang sukses tanpa transaksi baru |
| BR-IDP-005 | Mengirim ulang kunci yang sama dengan data payload yang berbeda wajib ditolak sebagai konflik |
| BR-IDP-006 | Permintaan bersamaan (konkuren) dengan kunci yang sama dilarang membuat transaksi lebih dari satu |
| BR-IDP-007 | Permintaan checkout yang telah diperbaiki setelah gagal wajib menggunakan kunci idempotensi baru |

Sistem menyimpan hash sidik jari (fingerprint) permintaan yang telah dinormalisasi bersama dengan kunci idempotensi.

Jika koneksi jaringan terputus setelah checkout sukses di server, klien kasir dapat mencoba mengirim ulang dengan kunci yang sama untuk mendapatkan kembali hasil transaksi aslinya.

## 11. Aturan Riwayat Transaksi

| ID | Aturan |
|---|---|
| BR-TRX-001 | Transaksi yang telah berstatus selesai tidak dapat diedit atau dihapus |
| BR-TRX-002 | Item transaksi wajib menyimpan salinan nama produk historis saat transaksi terjadi |
| BR-TRX-003 | Item transaksi wajib menyimpan salinan SKU produk historis |
| BR-TRX-004 | Item transaksi wajib menyimpan salinan harga jual satuan historis |
| BR-TRX-005 | Item transaksi wajib menyimpan salinan harga modal satuan historis |
| BR-TRX-006 | Pembaruan data produk di masa depan tidak boleh mengubah nilai transaksi masa lalu |
| BR-TRX-007 | Kasir hanya diizinkan untuk melihat riwayat transaksi yang dibuat oleh dirinya sendiri |
| BR-TRX-008 | Pembuatan dan cetak ulang struk belanja wajib menggunakan data snapshot transaksi yang tersimpan |

## 12. Aturan Pelaporan

| ID | Aturan |
|---|---|
| BR-RPT-001 | Laporan penjualan wajib disusun berdasarkan transaksi yang telah berstatus selesai |
| BR-RPT-002 | Perhitungan laba kotor wajib menggunakan snapshot harga modal historis barang |
| BR-RPT-003 | Penjualan bersih sama dengan subtotal penjualan dikurangi potongan diskon |
| BR-RPT-004 | Total uang tunai yang diterima tidak boleh dihitung sebagai nilai pendapatan penjualan |
| BR-RPT-005 | Uang kembalian yang diserahkan ke pelanggan tidak boleh dicatat sebagai pos pengeluaran/beban |
| BR-RPT-006 | Batas rentang tanggal laporan wajib mengacu pada zona waktu toko yang dikonfigurasi |
| BR-RPT-007 | Laporan laba kotor dibatasi secara ketat hanya untuk peran Owner |
| BR-RPT-008 | Laporan stok barang wajib mencerminkan jumlah persediaan fisik terkini |
| BR-RPT-009 | Peringkat produk terlaris dihitung berdasarkan jumlah kuantitas item terjual dari transaksi yang sukses |

## 13. Aturan Audit

| ID | Aturan |
|---|---|
| BR-AUD-001 | Rekaman data penting wajib mencatat identitas pengguna pembuat/penanggung jawab |
| BR-AUD-002 | Rekaman data wajib memiliki timestamp waktu pembuatan (created_at) |
| BR-AUD-003 | Rekaman data yang dapat diubah wajib memiliki timestamp waktu pembaruan (updated_at) |
| BR-AUD-004 | Seluruh transaksi penjualan dan mutasi stok wajib memiliki keterlacakan kronologis yang jelas |
| BR-AUD-005 | Log audit dilarang keras mencatat kata sandi, token, atau informasi kredensial rahasia |

Modul log aktivitas umum (general activity log) merupakan prioritas sekunder MVP. Keterlacakan transaksi dan mutasi stok merupakan kewajiban mutlak.

## 14. Aturan Validasi Data

| Kolom | Aturan Validasi |
|---|---|
| Email | Format email valid, dinormalisasi ke huruf kecil (lowercase), dan unik |
| Kata Sandi | Minimal 8 karakter, penanganan hashing yang aman |
| Nama Produk | Wajib diisi, maksimal 150 karakter |
| SKU | Wajib diisi, maksimal 50 karakter, unik |
| Barcode | Opsional, maksimal 64 karakter, unik jika diisi |
| Harga Jual | Bilangan bulat positif IDR (> 0) |
| Harga Modal | Bilangan bulat non-negatif IDR (>= 0) |
| Kuantitas | Bilangan bulat positif (> 0), dibatasi oleh sisa stok |
| Stok Barang | Bilangan bulat non-negatif (>= 0) |
| Stok Minimum | Bilangan bulat non-negatif (>= 0) |
| Diskon | Bilangan bulat non-negatif (>= 0), tidak melebihi subtotal |
| Uang Diterima | Bilangan bulat, bernilai lebih besar atau sama dengan total akhir |

Batasan presisi basis data dan batas numerik yang pasti akan difinalisasi pada perancangan fisik basis data Hari ke-02.

## 15. Kondisi Error

| Kode Error | Deskripsi |
|---|---|
| INVALID_CREDENTIALS | Autentikasi gagal karena email atau kata sandi tidak cocok |
| INACTIVE_USER | Akun pengguna dalam status nonaktif |
| FORBIDDEN | Pengguna tidak memiliki izin hak akses untuk operasi ini |
| INVALID_INPUT | Validasi format data permintaan tidak berhasil |
| PRODUCT_NOT_FOUND | Produk yang dimaksud tidak ditemukan dalam sistem |
| PRODUCT_INACTIVE | Produk berstatus nonaktif dan tidak dapat dijual |
| PRICE_CHANGED | Harga jual produk telah berubah dan memerlukan konfirmasi kasir |
| INSUFFICIENT_STOCK | Jumlah stok barang tidak mencukupi untuk memenuhi pesanan |
| INVALID_DISCOUNT | Nominal potongan diskon tidak memenuhi ketentuan aturan bisnis |
| INSUFFICIENT_PAYMENT | Nominal uang tunai yang diserahkan kurang dari total tagihan |
| DUPLICATE_SKU | Nilai SKU produk sudah terdaftar dalam sistem |
| DUPLICATE_BARCODE | Nilai barcode produk sudah terdaftar dalam sistem |
| IDEMPOTENCY_CONFLICT | Kunci checkout digunakan kembali dengan isi data yang berbeda |
| TRANSACTION_CONFLICT | Terjadi konflik operasi konkuren, pengguna diminta mencoba kembali |
| INTERNAL_ERROR | Terjadi kegagalan internal sistem aplikasi yang tidak terduga |

## 16. Dokumen Terkait

- [Persyaratan Fungsional (FRS)](functional-requirements.md)
- [Persyaratan Non-Fungsional (NFRS)](non-functional-requirements.md)
- [User Stories dan Kriteria Penerimaan](user-stories.md)
- [Arsitektur Sistem](architecture.md)
