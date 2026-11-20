# User Stories dan Kriteria Penerimaan (User Stories and Acceptance Criteria)

## 1. Informasi Dokumen

| Atribut | Deskripsi |
|---|---|
| Proyek | CashierFlow |
| Versi Dokumen | 1.0 |
| Versi Produk | 1.0.0 MVP |
| Penulis | ZyxxBoy |
| Status | Initial Baseline |

## 2. Format User Story

Sebagai [peran pengguna],  
Saya ingin [melakukan suatu aksi],  
Agar [tujuan/manfaat bisnis tercapai].

Kriteria penerimaan ditulis menggunakan format standar Given-When-Then:
- **Given** (Diberikan/kondisi awal)
- **When** (Ketika/aksi yang dilakukan)
- **Then** (Maka/hasil yang diharapkan)

## 3. Backlog User Story

| ID | Peran | User Story | Prioritas |
|---|---|---|---|
| US-001 | Pengguna | Login dengan aman untuk mengakses aplikasi | Must |
| US-002 | Pengguna | Logout untuk mengakhiri sesi aktif saat ini | Must |
| US-003 | Owner | Melihat ringkasan performa bisnis pada dasbor | Must |
| US-004 | Admin | Menambah dan mengelola master data produk | Must |
| US-005 | Admin | Mengelola data kategori produk | Must |
| US-006 | Admin | Mengelola data satuan produk | Must |
| US-007 | Admin | Mengelola data pemasok barang | Must |
| US-008 | Admin | Mengelola data informasi pelanggan | Should |
| US-009 | Admin | Mencatat persediaan barang masuk (Stock In) | Must |
| US-010 | Admin | Mencatat pengeluaran barang manual (Stock Out) | Must |
| US-011 | Admin | Menyesuaikan selisih stok fisik (Stock Opname) | Must |
| US-012 | Admin | Meninjau riwayat mutasi/pergerakan stok barang | Must |
| US-013 | Kasir | Mencari atau memindai barcode produk dengan cepat | Must |
| US-014 | Kasir | Mengelola keranjang belanja pesanan pelanggan | Must |
| US-015 | Kasir | Menerapkan diskon transaksi | Should |
| US-016 | Kasir | Menyelesaikan transaksi dengan pembayaran tunai | Must |
| US-017 | Kasir | Mencetak dan menampilkan struk transaksi | Must |
| US-018 | Kasir | Melihat riwayat transaksi yang dibuat oleh dirinya sendiri | Must |
| US-019 | Owner | Meninjau seluruh transaksi penjualan toko | Must |
| US-020 | Owner | Melihat laporan estimasi laba kotor bisnis | Must |
| US-021 | Admin | Melihat laporan ketersediaan stok inventaris | Must |
| US-022 | Owner | Mengekspor laporan yang diizinkan ke format file Excel | Should |
| US-023 | Owner | Mengelola akun pengguna aplikasi | Must |
| US-024 | Owner | Menetapkan peran dan hak akses pengguna | Must |
| US-025 | Owner | Meninjau rekaman log aktivitas penting | Should |
| US-026 | Owner | Mengonfigurasi informasi profil dan struk toko | Should |
| US-027 | Developer | Menjalankan pemeriksaan otomatis pada alur CI | Must |
| US-028 | Developer | Men-deploy aplikasi ke cloud dengan aman | Must |

## 4. Autentikasi

### US-001: Login Aman

Sebagai pengguna terdaftar,  
Saya ingin melakukan login secara aman,  
Agar saya dapat mengakses fitur aplikasi sesuai dengan hak izin peran saya.

Kebutuhan terkait: FR-AUTH-001 hingga FR-AUTH-007.

### Kriteria Penerimaan

#### Skenario: Login Berhasil

    Given akun pengguna berstatus aktif telah terdaftar
    And pengguna memasukkan kredensial (email dan kata sandi) yang valid
    When pengguna menekan tombol kirim pada formulir login
    Then sistem membuat sesi terautentikasi yang aman
    And mengarahkan pengguna ke halaman yang sesuai dengan perannya

#### Skenario: Kredensial Tidak Valid

    Given pengguna memasukkan kata sandi yang salah
    When pengguna menekan tombol kirim pada formulir login
    Then proses autentikasi ditolak
    And tidak ada sesi login yang dibuat
    And sistem menampilkan pesan error autentikasi yang bersifat umum

#### Skenario: Akun Nonaktif

    Given akun pengguna berada dalam status nonaktif
    When pengguna memasukkan kredensial yang valid
    Then proses autentikasi ditolak oleh server
    And sistem menampilkan pesan bahwa akun tidak aktif

#### Skenario: Akses Tanpa Izin

    Given pengguna dengan peran Kasir telah terautentikasi
    When Kasir mencoba membuka halaman administrasi pengguna
    Then server menolak akses tersebut (403 Forbidden)
    And tidak ada data pengguna rahasia yang dikembalikan

### US-002: Logout

    Given pengguna sedang berada dalam sesi terautentikasi aktif
    When pengguna memilih menu logout
    Then sesi pengguna saat ini diakhiri
    And halaman-halaman yang dilindungi mewajibkan login kembali

## 5. Dasbor (Dashboard)

### US-003: Dasbor Bisnis

Sebagai Owner,  
Saya ingin melihat ringkasan performa penjualan dan inventaris,  
Agar saya dapat memantau kesehatan bisnis dengan cepat.

### Kriteria Penerimaan

    Given data transaksi yang telah selesai tersedia
    When Owner membuka halaman dasbor
    Then sistem menampilkan total nominal penjualan bersih
    And menampilkan total volume transaksi berhasil
    And menampilkan estimasi laba kotor bisnis

    Given tidak ada transaksi pada rentang periode yang dipilih
    When Owner membuka halaman dasbor
    Then metrik ditampilkan bernilai nol (0)
    And halaman tidak memunculkan pesan error sistem

    Given Admin membuka halaman dasbor
    Then metrik laba kotor dan harga modal tidak ditampilkan maupun dikirimkan

## 6. Data Master

### US-004: Manajemen Produk

Sebagai Admin,  
Saya ingin menambah dan memperbarui informasi produk,  
Agar produk dapat diperjualbelikan dengan data harga dan identitas yang tepat.

Kebutuhan terkait: FR-PRD-001 hingga FR-PRD-014.

#### Skenario: Menambah Produk Baru

    Given Admin yang berwenang telah terautentikasi
    And kategori dan satuan yang valid telah tersedia
    When Admin mengisi dan mengirim formulir data produk yang valid
    Then data produk baru berhasil disimpan
    And jumlah stok awal produk diset secara default ke angka nol (0)

#### Skenario: Duplikasi SKU

    Given produk dengan kode SKU PRD-001 sudah ada di sistem
    When Admin mencoba membuat produk baru dengan SKU yang sama
    Then pembuatan produk ditolak oleh sistem
    And sistem menampilkan pesan validasi bahwa SKU telah digunakan

#### Skenario: Harga Jual Tidak Valid

    Given Admin memasukkan harga jual bernilai 0 atau negatif
    When formulir produk dikirimkan
    Then validasi gagal
    And data produk tidak disimpan ke basis data

#### Skenario: Menonaktifkan Produk

    Given suatu produk telah memiliki riwayat transaksi penjualan
    When Admin menonaktifkan status produk tersebut
    Then produk tidak lagi muncul pada pilihan penjualan kasir (POS)
    And rekaman riwayat transaksi historis produk tersebut tetap utuh dan dapat dilihat

### US-005 dan US-006: Kategori dan Satuan

    Given Admin yang berwenang telah terautentikasi
    When Admin mengirimkan nama kategori atau satuan yang valid dan unik
    Then rekaman data berhasil dibuat

    Given suatu kategori atau satuan telah digunakan oleh data produk
    When permintaan penghapusan permanen diajukan
    Then penghapusan ditolak demi menjaga integritas data relasional
    And opsi penonaktifan tersedia jika didukung

### US-007: Manajemen Pemasok

    Given Admin yang berwenang telah terautentikasi
    When Admin mengirimkan data informasi pemasok yang valid
    Then data pemasok tersimpan dan dapat dipilih pada transaksi barang masuk

### US-008: Manajemen Pelanggan

    Given modul pelanggan telah aktif
    When pengguna yang berwenang membuat data pelanggan baru
    Then pelanggan tersebut dapat dihubungkan ke transaksi penjualan

    Given pembeli umum tidak ingin didata identitasnya
    When transaksi kasir dilakukan
    Then pendaftaran data pelanggan tidak diwajibkan (dapat diproses sebagai anonim)

## 7. Manajemen Inventaris

### US-009: Stok Masuk (Stock In)

Sebagai Admin,  
Saya ingin mencatat penerimaan stok barang masuk,  
Agar jumlah stok pada sistem mencerminkan barang fisik yang diterima dari pemasok.

#### Skenario: Stok Masuk Berhasil

    Given produk saat ini memiliki stok sebanyak 20 unit
    When Admin mencatat penerimaan barang masuk sebanyak 10 unit
    And menyertakan keterangan alasan yang valid
    Then stok produk pada sistem bertambah menjadi 30 unit
    And rekaman mutasi stok bertipe STOCK_IN otomatis dibuat
    And identitas pengguna yang mencatat tersimpan pada rekaman

#### Skenario: Kuantitas Masuk Tidak Valid

    Given produk saat ini memiliki stok sebanyak 20 unit
    When Admin memasukkan kuantitas barang masuk bernilai nol atau negatif
    Then permintaan ditolak oleh validasi sistem
    And stok produk tetap bertahan di angka 20 unit

### US-010: Stok Keluar (Stock Out)

    Given produk saat ini memiliki stok sebanyak 20 unit
    When Admin mencatat pengeluaran stok manual sebanyak 5 unit disertai alasan
    Then stok produk pada sistem berkurang menjadi 15 unit
    And rekaman mutasi stok bertipe STOCK_OUT otomatis dibuat

    Given produk saat ini memiliki stok sebanyak 5 unit
    When Admin mencoba mengeluarkan stok sebanyak 10 unit
    Then permintaan ditolak karena kuantitas melebihi sisa stok
    And stok produk tetap bertahan di angka 5 unit

### US-011: Penyesuaian Stok (Stock Adjustment / Opname)

    Given stok produk yang tercatat di sistem adalah 20 unit
    And hasil hitung fisik barang di toko menunjukkan 18 unit
    When Admin mencatat penyesuaian stok dengan alasan selisih opname
    Then stok produk yang tercatat di sistem berubah menjadi 18 unit
    And rekaman mutasi stok bertipe ADJUSTMENT sebesar -2 otomatis dibuat

### US-012: Riwayat Mutasi Stok

    Given mutasi inventaris telah terjadi
    When Admin membuka halaman riwayat mutasi stok
    Then jenis mutasi, jumlah selisih, tanggal kejadian, dan nama pengguna ditampilkan
    
    Given rekaman mutasi stok historis telah tersimpan
    When pengguna mencoba memodifikasi atau menghapus rekaman tersebut
    Then operasi ditolak karena riwayat inventaris bersifat abadi (immutable)

## 8. Point of Sale (POS)

### US-013: Pencarian Produk

Sebagai Kasir,  
Saya ingin menemukan produk dengan cepat melalui nama, SKU, atau pemindai barcode,  
Agar saya dapat mempercepat durasi pelayanan kepada pembeli.

    Given produk berstatus aktif terdaftar di sistem
    When Kasir mengetik nama, SKU, atau memindai barcode produk
    Then produk yang cocok langsung ditampilkan pada hasil pencarian

    Given suatu produk berada dalam status nonaktif
    When barcode produk tersebut dipindai di layar POS
    Then sistem menolak menambahkan produk dan menginformasikan produk tidak aktif

### US-014: Keranjang Belanja

    Given suatu produk aktif memiliki harga Rp15.000
    When Kasir menambahkan 2 unit produk tersebut ke keranjang
    Then subtotal baris item menampilkan Rp30.000

    Given keranjang telah berisi 2 unit produk
    When produk yang sama dipilih atau dipindai kembali
    Then jumlah kuantitas produk otomatis bertambah menjadi 3 unit

    Given seluruh produk di keranjang dihapus
    Then keranjang menjadi kosong
    And tombol checkout dinonaktifkan secara otomatis

### US-015: Diskon Transaksi

    Given fitur diskon diaktifkan
    And subtotal belanja adalah Rp50.000
    When Kasir menerapkan diskon flat sebesar Rp5.000
    Then total akhir yang harus dibayar menjadi Rp45.000

    Given subtotal belanja adalah Rp50.000
    When Kasir memasukkan nilai diskon sebesar Rp60.000
    Then server menolak nilai diskon karena melebihi subtotal belanja

## 9. Checkout

### US-016: Pembayaran Tunai dan Checkout

Sebagai Kasir,  
Saya ingin memproses pembayaran tunai dan menyelesaikan transaksi,  
Agar penjualan dan pemotongan stok barang tercatat dengan tepat dan konsisten.

Kebutuhan terkait: FR-POS-009 hingga FR-POS-020.

#### Skenario: Checkout Berhasil

    Given produk memiliki harga jual Rp15.000 dan harga modal Rp10.000
    And persediaan stok produk di toko adalah 20 unit
    When Kasir memproses pembelian sebanyak 3 unit
    And memasukkan uang tunai yang diterima sebesar Rp50.000
    Then total tagihan transaksi adalah Rp45.000
    And uang kembalian dihitung sebesar Rp5.000
    And sisa stok barang di sistem berkurang menjadi 17 unit
    And satu rekaman transaksi penjualan berstatus selesai berhasil dibuat
    And rincian item transaksi tersimpan dengan snapshot harga modal dan jual
    And rekaman mutasi stok otomatis bertipe SALE dibuat
    And nomor faktur (invoice) unik diterbitkan

#### Skenario: Stok Tidak Mencukupi

    Given stok produk yang tersedia di sistem hanya tersisa 2 unit
    When Kasir mencoba melakukan checkout sebanyak 3 unit
    Then transaksi checkout ditolak oleh server
    And sisa stok barang tetap bertahan di angka 2 unit
    And tidak ada transaksi penjualan yang dibuat

#### Skenario: Pembayaran Uang Tunai Kurang

    Given total tagihan belanja adalah Rp45.000
    When Kasir memasukkan uang tunai sebesar Rp30.000
    Then proses checkout ditolak oleh sistem
    And stok barang tidak terpotong

#### Skenario: Harga Berubah Saat Checkout Berlangsung

    Given keranjang belanja kasir menampilkan harga lama Rp15.000
    And harga produk pada basis data telah diperbarui menjadi Rp17.000
    When tombol checkout ditekan
    Then server menolak harga lama yang usang
    And meminta kasir mengonfirmasi pembaruan harga terbaru
    And tidak ada transaksi yang terbuat sebelum disetujui

#### Skenario: Checkout Terduplikasi (Idempotensi)

    Given suatu permintaan checkout telah berhasil diproses
    When pengguna yang sama mengirim ulang permintaan dengan kunci idempotensi yang sama
    And isi payload data belanja identik persis
    Then sistem mengembalikan hasil transaksi asli yang telah sukses
    And tidak terjadi pemotongan stok kedua kali

#### Skenario: Konflik Kunci Idempotensi

    Given kunci idempotensi yang sukses telah terdaftar di sistem
    When kunci yang sama dikirimkan kembali namun dengan kuantitas barang yang berbeda
    Then server menolak permintaan tersebut sebagai konflik (IDEMPOTENCY_CONFLICT)
    And data transaksi asli tidak berubah

#### Skenario: Checkout Bersamaan (Konkurensi)

    Given suatu produk hanya tersisa 1 unit terakhir di stok
    When dua kasir berbeda menekan checkout untuk 1 unit tersebut pada detik yang sama
    Then tepat satu transaksi yang berhasil diselesaikan
    And transaksi kedua ditolak karena stok telah habis
    And sisa stok akhir adalah nol (0), tidak pernah minus

#### Skenario: Kegagalan Transaksi Basis Data

    Given transaksi basis data untuk checkout telah dimulai
    When terjadi gangguan koneksi atau kegagalan saat membuat rekaman mutasi stok
    Then seluruh operasi dalam transaksi dibatalkan sepenuhnya (rollback)
    And tidak ada rekaman penjualan parsial atau pemotongan stok yang tertinggal

#### Skenario: Percobaan Manipulasi Harga Sisi Klien

    Given produk di basis data memiliki harga resmi Rp15.000
    When permintaan dikirim dengan nilai total yang dimanipulasi menjadi Rp1
    Then server menolak nilai buatan tersebut
    And menghitung ulang secara mandiri menggunakan harga resmi yang berlaku

## 10. Riwayat Transaksi dan Struk

### US-017: Struk Transaksi

    Given transaksi penjualan telah berhasil diselesaikan
    When Kasir membuka struk transaksi tersebut
    Then struk menampilkan nomor faktur unik
    And tanggal dan waktu transaksi
    And rincian item barang yang dibeli beserta kuantitas dan harga satuan
    And total belanja, nominal uang tunai diterima, dan nominal uang kembalian

    Given harga jual produk diubah di masa depan
    When struk lama ditampilkan atau dicetak ulang
    Then harga yang tertulis pada struk tetap mencerminkan harga saat transaksi terjadi

### US-018: Riwayat Transaksi Pribadi Kasir

    Given seorang Kasir telah login ke aplikasi
    When Kasir membuka menu riwayat transaksi
    Then hanya transaksi yang dibuat oleh akun Kasir tersebut yang ditampilkan

    Given transaksi penjualan dibuat oleh Kasir A
    When Kasir B mencoba mengakses detail transaksi tersebut melalui ID URL
    Then sistem menolak akses dan mengembalikan pesan larangan (403 Forbidden)

### US-019: Semua Transaksi untuk Owner dan Admin

    Given Owner atau Admin telah login ke aplikasi
    When membuka menu riwayat transaksi
    Then seluruh transaksi toko dapat dilihat
    And data transaksi dapat difilter berdasarkan rentang tanggal

    Given suatu transaksi penjualan telah berstatus selesai
    When ada permintaan untuk mengedit isi faktur atau menghapusnya
    Then sistem secara tegas menolak aksi tersebut

## 11. Laporan

### US-020: Laporan Laba Kotor

    Given total penjualan bersih yang selesai adalah Rp45.000
    And total snapshot harga modal barang terkait adalah Rp32.000
    When Owner membuka laporan laba kotor
    Then estimasi laba kotor yang ditampilkan adalah Rp13.000

    Given harga beli modal produk diubah pada master data di masa kini
    When laporan periode penjualan lampau dibuka kembali
    Then nilai laba kotor historis tidak mengalami perubahan

### US-021: Laporan Inventaris

    Given data produk dan stok telah tersedia
    When Admin membuka laporan inventaris
    Then jumlah stok saat ini dan daftar barang yang menipis ditampilkan secara akurat

### US-022: Ekspor Laporan

    Given fitur ekspor laporan telah aktif
    And pengguna berwenang memilih rentang tanggal yang valid
    When pengguna menekan tombol ekspor
    Then sistem menghasilkan file format Excel (.xlsx) dengan data yang diizinkan

    Given pengguna yang meminta ekspor adalah Admin
    Then kolom laba kotor dan harga modal otomatis dihilangkan dari file unduhan

## 12. Administrasi Pengguna

### US-023 dan US-024: Manajemen Akun dan Peran

    Given Owner telah terautentikasi
    When Owner mengisi data pengguna baru dan memilih peran bawaan (Owner, Admin, Kasir)
    Then akun pengguna baru berhasil dibuat
    And kata sandi disimpan menggunakan algoritma hashing yang aman

    Given akun Kasir dinonaktifkan oleh Owner
    When Kasir tersebut mencoba mengakses rute atau fitur terproteksi
    Then sistem langsung menolak akses

    Given hanya tersisa satu akun Owner aktif di dalam sistem
    When ada upaya untuk menonaktifkan atau menurunkan peran akun tersebut
    Then sistem menolak operasi untuk mencegah terkuncinya akses sistem secara permanen

### US-025: Log Aktivitas

    Given pencatatan log aktivitas diaktifkan
    When terjadi aksi perubahan penting (misal: penonaktifan akun pengguna)
    Then rekaman aktivitas tercatat secara otomatis
    And Owner yang berwenang dapat melihat rekaman aktivitas tersebut

### US-026: Konfigurasi Toko

    Given fitur pengaturan toko telah tersedia
    When Owner memperbarui informasi nama atau alamat toko
    Then informasi pada struk belanja dan tampilan toko berikutnya menggunakan data terbaru

## 13. DevOps

### US-027: Integrasi Berkelanjutan (CI)

Sebagai Developer,  
Saya ingin seluruh pengujian dan pemeriksaan kode berjalan otomatis,  
Agar potensi kecacatan kode terdeteksi sebelum dirilis ke lingkungan produksi.

    Given sebuah Pull Request dibuat pada repository GitHub
    When GitHub Actions mengeksekusi alur CI
    Then dependensi terinstal dengan aman
    And pemeriksaan ESLint dieksekusi
    And pemeriksaan kompilasi TypeScript dieksekusi
    And rangkaian pengujian otomatis (unit dan integrasi) dieksekusi
    And proses build aplikasi diverifikasi
    
    Given salah satu tahap pemeriksaan CI mengalami kegagalan
    Then perubahan kode diblokir dan tidak boleh digabungkan ke branch utama

### US-028: Penerapan Berkelanjutan (CD)

    Given branch fitur di-push ke remote repository
    When Vercel memproses branch tersebut
    Then tautan pratinjau (Preview deployment) otomatis tersedia

    Given seluruh pemeriksaan rilis telah lulus
    And branch fitur di-merge ke branch main
    When alur deployment produksi dieksekusi
    Then aplikasi di-build dan dideploy ke URL produksi publik
    And verifikasi smoke test dapat dilakukan secara langsung

## 14. Definition of Ready (DoR)

Sebuah user story dinyatakan siap (ready) untuk dikembangkan apabila:

- Tujuan dan nilai bisnisnya telah dipahami dengan jelas.
- Kriteria penerimaan telah didefinisikan secara eksplisit.
- Hak izin peran yang dibutuhkan telah diidentifikasi.
- Ketergantungan teknis dan dependensi antarmodul telah dipahami.
- Aturan bisnis yang relevan telah tercantum dalam spesifikasi.
- Cakupan implementasi telah terukur dan dapat dikerjakan dalam alokasi waktu.

## 15. Definition of Done (DoD)

Sebuah user story dinyatakan selesai (done) apabila:

- Seluruh kriteria penerimaan berhasil dipenuhi.
- Aturan bisnis terkait telah diimplementasikan dengan benar.
- Pemeriksaan otorisasi di sisi server telah aktif.
- Validasi data input telah terpasang di sisi server.
- Pengujian otomatis (unit, integrasi, atau E2E) yang relevan telah dibuat dan lulus.
- Pemeriksaan linting dan tipe TypeScript lulus tanpa error.
- Tidak ada kredensial atau rahasia yang ter-commit ke repositori.
- Dokumentasi teknis telah diperbarui jika ada perubahan.
- Kode telah di-commit dengan pesan Conventional Commits yang baku.
- Pull Request berhasil melewati seluruh pemeriksaan alur CI.
- Fitur telah diverifikasi langsung pada lingkungan pratinjau (Preview).

## 16. Dokumen Terkait

- [Persyaratan Fungsional (FRS)](functional-requirements.md)
- [Spesifikasi Aturan Bisnis](business-rules.md)
- [Persyaratan Non-Fungsional (NFRS)](non-functional-requirements.md)
- [Cakupan MVP](mvp-scope.md)
