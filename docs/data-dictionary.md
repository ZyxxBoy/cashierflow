# Kamus Data Basis Data (Database Data Dictionary)

## 1. Informasi Dokumen

| Atribut | Nilai |
|---|---|
| Proyek | CashierFlow |
| Basis Data | PostgreSQL |
| ORM | Prisma |
| Versi Dokumen | 1.0 |
| Penulis | ZyxxBoy |
| Status | Design Baseline |

## 2. Konvensi Penamaan (Naming Conventions)

- Nama tabel basis data menggunakan format jamak *snake_case* (contoh: `products`, `transactions`).
- Nama kolom basis data menggunakan format *snake_case* (contoh: `selling_price`, `is_active`).
- Nama model Prisma menggunakan format tunggal *PascalCase* (contoh: `Product`, `Transaction`).
- Nama field Prisma menggunakan format *camelCase* (contoh: `sellingPrice`, `isActive`).
- Primary key menggunakan nama `id`.
- Foreign key menggunakan nama entitas yang direferensikan diikuti akhiran `_id` (contoh: `category_id`).
- Kolom bertipe boolean menggunakan awalan `is_` jika relevan (contoh: `is_active`).
- Kolom timestamp menggunakan `created_at` dan `updated_at`.

Atribut pemetaan Prisma (`@map` dan `@@map`) akan digunakan untuk menjaga keselarasan antara penamaan di basis data dan konvensi penamaan di kode aplikasi.

## 3. Tipe Data Umum

| Tipe PostgreSQL | Tipe Prisma | Deskripsi |
|---|---|---|
| UUID | String @db.Uuid | Identifier unik rekaman data |
| VARCHAR(n) | String @db.VarChar(n) | Teks string dengan batas panjang tertentu |
| TEXT | String | Kolom teks panjang tanpa batasan kaku |
| INTEGER | Int | Nilai stok dan kuantitas belanja |
| BIGINT | BigInt | Nilai moneter finansial bilangan bulat Rupiah |
| BOOLEAN | Boolean | Status aktif atau penanda boolean |
| TIMESTAMPTZ | DateTime @db.Timestamptz(3) | Waktu sadar zona waktu dengan presisi milidetik |
| JSONB | Json | Data metadata terstruktur |
| ENUM | Enum | Kumpulan nilai pilihan terbatas yang telah ditentukan |

## 4. Legenda Konstrain

| Simbol | Deskripsi |
|---|---|
| PK | Primary Key |
| FK | Foreign Key |
| UQ | Unique (Konstrain Unik) |
| NN | NOT NULL (Wajib Diisi) |
| CK | CHECK constraint (Validasi Kondisi) |
| NULL | Nullable (Boleh Kosong) |
| IDX | Indexed (Memiliki Indeks Pencarian) |

Primary key bertipe UUID wajib memiliki nilai default `gen_random_uuid()`.

Timestamp pembuatan (`created_at`) memiliki nilai default `CURRENT_TIMESTAMP`. Rekaman data yang dapat diperbarui juga memuat timestamp `updated_at`.

Pembaruan data pada aplikasi wajib memelihara nilai `updated_at` secara konsisten.

## 5. Batasan Numerik Skema

| Nilai | Batas Minimum | Batas Maksimum |
|---|---:|---:|
| Harga Jual (selling_price) | 1 | 1.000.000.000 |
| Harga Beli/Modal (purchase_cost) | 0 | 1.000.000.000 |
| Stok Produk (stock) | 0 | 1.000.000 |
| Stok Minimum (minimum_stock) | 0 | 1.000.000 |
| Kuantitas Penjualan (quantity) | 1 | 1.000.000 |
| Total Finansial yang Disimpan | 0 | 1.000.000.000.000 |
| Jumlah Ragam Produk per Checkout | 1 | 100 |

Nilai-nilai ini merupakan batasan rekayasa teknis MVP, bukan batasan absolut dari toko ritel fisik nyata.

Server wajib menghitung seluruh nilai nominal menggunakan tipe `BigInt` dan menolak hasil transaksi yang berada di luar rentang angka yang didukung.

## 6. Tabel: users

Tujuan: Menyimpan akun pengguna aplikasi beserta peran bawaan yang ditetapkan.

| Kolom | Tipe Data | Konstrain | Nilai Default | Deskripsi |
|---|---|---|---|---|
| id | UUID | PK, NN | Generated UUID | Identifier unik pengguna |
| name | VARCHAR(100) | NN | - | Nama lengkap pengguna |
| email | VARCHAR(254) | NN, UQ | - | Alamat email login yang dinormalisasi |
| password_hash | VARCHAR(255) | NN | - | Hash kata sandi yang aman |
| role | UserRole | NN | - | Peran aplikasi pengguna |
| is_active | BOOLEAN | NN | true | Status keaktifan akun |
| created_at | TIMESTAMPTZ | NN | now() | Timestamp waktu pembuatan |
| updated_at | TIMESTAMPTZ | NN | now() | Timestamp pembaruan terakhir |

Nilai Enum UserRole:

- OWNER
- ADMIN
- CASHIER

Aturan Bisnis:

- Alamat email wajib di-trim dan dinormalisasi ke huruf kecil.
- Kata sandi dilarang disimpan dalam bentuk teks biasa (plaintext).
- Akun pengguna yang memiliki riwayat bisnis dilarang dihapus permanen dari basis data.
- Akun Owner aktif terakhir tidak boleh dinonaktifkan atau diturunkan perannya.
- Hash kata sandi dilarang keras bocor pada respons API publik.

## 7. Tabel: categories

Tujuan: Menyimpan klasifikasi kategori produk.

| Kolom | Tipe Data | Konstrain | Nilai Default | Deskripsi |
|---|---|---|---|---|
| id | UUID | PK, NN | Generated UUID | Identifier unik kategori |
| name | VARCHAR(100) | NN, UQ | - | Nama kategori produk |
| description | TEXT | NULL | NULL | Keterangan/deskripsi kategori |
| is_active | BOOLEAN | NN | true | Status keaktifan kategori |
| created_at | TIMESTAMPTZ | NN | now() | Timestamp waktu pembuatan |
| updated_at | TIMESTAMPTZ | NN | now() | Timestamp pembaruan terakhir |

Aturan Bisnis:

- Nama kategori wajib unik setelah dinormalisasi.
- Kategori yang telah direferensikan oleh data produk dilarang dihapus permanen.
- Kategori yang nonaktif tidak dapat dipilih saat menambahkan produk baru.

## 8. Tabel: units

Tujuan: Menyimpan satuan ukuran dan penjualan produk.

| Kolom | Tipe Data | Konstrain | Nilai Default | Deskripsi |
|---|---|---|---|---|
| id | UUID | PK, NN | Generated UUID | Identifier unik satuan |
| name | VARCHAR(50) | NN, UQ | - | Nama satuan |
| code | VARCHAR(20) | NN, UQ | - | Kode singkatan satuan |
| is_active | BOOLEAN | NN | true | Status keaktifan satuan |
| created_at | TIMESTAMPTZ | NN | now() | Timestamp waktu pembuatan |
| updated_at | TIMESTAMPTZ | NN | now() | Timestamp pembaruan terakhir |

Contoh Data Satuan:

| Nama Satuan | Kode |
|---|---|
| Piece / Pcs | PCS |
| Botol | BTL |
| Kotak / Box | BOX |
| Bungkus / Pack | PACK |

Konversi antar satuan dan kuantitas pecahan desimal berada di luar cakupan MVP.

## 9. Tabel: suppliers

Tujuan: Menyimpan informasi profil pemasok atau vendor barang.

| Kolom | Tipe Data | Konstrain | Nilai Default | Deskripsi |
|---|---|---|---|---|
| id | UUID | PK, NN | Generated UUID | Identifier unik pemasok |
| name | VARCHAR(150) | NN | - | Nama perusahaan/pemasok |
| phone | VARCHAR(30) | NULL | NULL | Nomor kontak telepon |
| email | VARCHAR(254) | NULL | NULL | Alamat email pemasok |
| address | TEXT | NULL | NULL | Alamat fisik pemasok |
| is_active | BOOLEAN | NN | true | Status keaktifan pemasok |
| created_at | TIMESTAMPTZ | NN | now() | Timestamp waktu pembuatan |
| updated_at | TIMESTAMPTZ | NN | now() | Timestamp pembaruan terakhir |

Nomor telepon disimpan dalam bentuk string untuk mempertahankan angka nol di awal dan kode area internasional.

Pemasok dapat dihubungkan ke rekaman stok barang masuk (Stock In).

## 10. Tabel: products

Tujuan: Menyimpan data produk, harga jual/modal, dan stok saat ini.

| Kolom | Tipe Data | Konstrain | Nilai Default | Deskripsi |
|---|---|---|---|---|
| id | UUID | PK, NN | Generated UUID | Identifier unik produk |
| category_id | UUID | FK, NN, IDX | - | Referensi ke categories.id |
| unit_id | UUID | FK, NN, IDX | - | Referensi ke units.id |
| name | VARCHAR(150) | NN | - | Nama produk barang |
| sku | VARCHAR(50) | NN, UQ | - | Stock Keeping Unit (kode unik barang) |
| barcode | VARCHAR(64) | UQ, NULL | NULL | Kode barcode produk |
| description | TEXT | NULL | NULL | Keterangan/deskripsi produk |
| purchase_cost | BIGINT | NN, CK | 0 | Harga beli/modal per unit saat ini |
| selling_price | BIGINT | NN, CK | - | Harga jual resmi per unit |
| stock | INTEGER | NN, CK | 0 | Jumlah stok barang saat ini |
| minimum_stock | INTEGER | NN, CK | 0 | Ambang batas peringatan stok menipis |
| is_active | BOOLEAN | NN | true | Status keaktifan produk |
| created_at | TIMESTAMPTZ | NN | now() | Timestamp waktu pembuatan |
| updated_at | TIMESTAMPTZ | NN | now() | Timestamp pembaruan terakhir |

Aturan Bisnis:

- Nilai SKU wajib di-trim dan dinormalisasi.
- Barcode opsional yang kosong wajib disimpan sebagai nilai NULL.
- Barcode disimpan dalam bentuk tipe teks/string, bukan integer.
- Harga jual wajib lebih besar dari nol (`selling_price > 0`).
- Harga beli/modal tidak boleh negatif (`purchase_cost >= 0`).
- Stok dan stok minimum tidak boleh bernilai negatif (`stock >= 0`).
- Stok awal produk bernilai default nol (0).
- Nilai stok hanya dapat diubah melalui layanan mutasi inventaris.
- Produk yang nonaktif tidak dapat dijual di kasir.
- Produk yang telah memiliki riwayat transaksi dilarang dihapus permanen.

Kondisi stok menipis (Low Stock):

    stock <= minimum_stock

## 11. Tabel: customers

Prioritas: Should Have (Sebaiknya Ada).

Tujuan: Menyimpan data informasi pelanggan opsional.

| Kolom | Tipe Data | Konstrain | Nilai Default | Deskripsi |
|---|---|---|---|---|
| id | UUID | PK, NN | Generated UUID | Identifier unik pelanggan |
| name | VARCHAR(150) | NN | - | Nama lengkap pelanggan |
| phone | VARCHAR(30) | NULL | NULL | Nomor kontak telepon |
| email | VARCHAR(254) | NULL | NULL | Alamat email pelanggan |
| address | TEXT | NULL | NULL | Alamat tempat tinggal |
| is_active | BOOLEAN | NN | true | Status keaktifan pelanggan |
| created_at | TIMESTAMPTZ | NN | now() | Timestamp waktu pembuatan |
| updated_at | TIMESTAMPTZ | NN | now() | Timestamp pembaruan terakhir |

Aturan Bisnis:

- Pendaftaran pelanggan bersifat opsional pada alur checkout kasir.
- Pelanggan nonaktif tidak dapat dihubungkan ke transaksi penjualan baru.
- Akses informasi pelanggan dibatasi hanya untuk staf berwenang.
- Wajib menggunakan data pelanggan fiktif pada demo portofolio publik.

## 12. Tabel: stock_movements

Tujuan: Memelihara buku besar riwayat perubahan stok inventaris yang abadi (immutable).

| Kolom | Tipe Data | Konstrain | Nilai Default | Deskripsi |
|---|---|---|---|---|
| id | UUID | PK, NN | Generated UUID | Identifier unik mutasi stok |
| product_id | UUID | FK, NN, IDX | - | Referensi ke products.id |
| supplier_id | UUID | FK, NULL | NULL | Referensi ke suppliers.id |
| transaction_id | UUID | FK, NULL, IDX | NULL | Referensi ke transactions.id |
| created_by | UUID | FK, NN | - | Referensi ke users.id |
| movement_type | MovementType | NN | - | Klasifikasi jenis mutasi stok |
| quantity_change | INTEGER | NN, CK | - | Selisih kuantitas stok bertanda (+/-) |
| stock_before | INTEGER | NN, CK | - | Jumlah stok sebelum mutasi |
| stock_after | INTEGER | NN, CK | - | Jumlah stok sesudah mutasi |
| reason | TEXT | NN | - | Keterangan/alasan mutasi stok |
| created_at | TIMESTAMPTZ | NN | now() | Timestamp terjadinya mutasi |

Nilai Enum MovementType:

- STOCK_IN
- STOCK_OUT
- ADJUSTMENT
- SALE

Konvensi Tanda Kuantitas:

| Tipe Mutasi | Perubahan Kuantitas | Keterkaitan Transaksi |
|---|---|---|
| STOCK_IN | Positif (+) | NULL |
| STOCK_OUT | Negatif (-) | NULL |
| ADJUSTMENT | Positif (+) atau Negatif (-) | NULL |
| SALE | Negatif (-) | Wajib Terisi (transaction_id) |

Referensi pemasok hanya diperbolehkan untuk mutasi bertipe STOCK_IN.

Pemasok bersifat opsional karena stok awal atau barang retur internal tidak selalu berasal dari transaksi pembelian ke pemasok.

Kondisi Invarian Wajib:

    stock_after = stock_before + quantity_change

Selisih kuantitas tidak boleh bernilai nol (`quantity_change != 0`).

Rekaman mutasi stok dilarang keras diubah atau dihapus melalui aplikasi.

## 13. Tabel: transactions

Tujuan: Menyimpan transaksi penjualan yang telah selesai beserta rincian pembayarannya.

| Kolom | Tipe Data | Konstrain | Nilai Default | Deskripsi |
|---|---|---|---|---|
| id | UUID | PK, NN | Generated UUID | Identifier unik transaksi |
| cashier_id | UUID | FK, NN, IDX | - | Referensi ke users.id (kasir yang bertugas) |
| customer_id | UUID | FK, NULL | NULL | Referensi ke customers.id |
| invoice_number | VARCHAR(64) | NN, UQ | - | Nomor faktur penjualan unik |
| idempotency_key | UUID | NN | - | Kunci idempotensi unik dari klien |
| request_hash | VARCHAR(64) | NN | - | Hash sidik jari SHA-256 permintaan |
| subtotal | BIGINT | NN, CK | - | Total belanja sebelum potongan diskon |
| discount | BIGINT | NN, CK | 0 | Potongan diskon transaksi |
| total | BIGINT | NN, CK | - | Total akhir yang harus dibayarkan |
| cash_received | BIGINT | NN, CK | - | Nominal uang tunai yang diterima |
| change_amount | BIGINT | NN, CK | - | Nominal uang kembalian pembeli |
| total_cost | BIGINT | NN, CK | - | Total akumulasi harga pokok (HPP) historis |
| payment_method | PaymentMethod | NN | CASH | Metode pembayaran |
| created_at | TIMESTAMPTZ | NN | now() | Timestamp waktu transaksi selesai |

Nilai Enum PaymentMethod:

- CASH

Konstrain Unik Komposit:

    UNIQUE (cashier_id, idempotency_key)

Kondisi Invarian Wajib:

    subtotal > 0
    discount >= 0
    discount < subtotal
    total = subtotal - discount
    cash_received >= total
    change_amount = cash_received - total
    total_cost >= 0

Kalkulasi laba kotor:

    gross_profit = total - total_cost

Laba kotor dapat bernilai negatif pada kondisi tertentu (seperti obral cuci gudang).

Hanya transaksi yang telah sukses diselesaikan yang tersimpan pada tabel ini. Percobaan yang gagal dibatalkan melalui rollback transaksi basis data.

## 14. Tabel: transaction_items

Tujuan: Menyimpan rincian item produk yang dibeli beserta snapshot nilai historisnya.

| Kolom | Tipe Data | Konstrain | Nilai Default | Deskripsi |
|---|---|---|---|---|
| id | UUID | PK, NN | Generated UUID | Identifier unik item transaksi |
| transaction_id | UUID | FK, NN | - | Referensi ke transactions.id |
| product_id | UUID | FK, NN, IDX | - | Referensi ke products.id |
| product_name | VARCHAR(150) | NN | - | Snapshot nama produk saat transaksi |
| product_sku | VARCHAR(50) | NN | - | Snapshot SKU produk saat transaksi |
| unit_name | VARCHAR(50) | NN | - | Snapshot nama satuan saat transaksi |
| quantity | INTEGER | NN, CK | - | Jumlah unit barang yang dibeli |
| unit_price | BIGINT | NN, CK | - | Snapshot harga jual per unit |
| unit_cost | BIGINT | NN, CK | - | Snapshot harga modal per unit |
| subtotal | BIGINT | NN, CK | - | Total harga baris (quantity * unit_price) |

Konstrain Unik Komposit:

    UNIQUE (transaction_id, product_id)

Kondisi Invarian Wajib:

    quantity > 0
    unit_price > 0
    unit_cost >= 0
    subtotal = quantity * unit_price

Kalkulasi total harga pokok item:

    item_cost = quantity * unit_cost

Item transaksi bersifat abadi (immutable) setelah checkout berhasil.

## 15. Tabel: activity_logs

Prioritas: Should Have (Sebaiknya Ada).

Tujuan: Mencatat riwayat peristiwa penting yang dilakukan oleh pengguna terautentikasi.

| Kolom | Tipe Data | Konstrain | Nilai Default | Deskripsi |
|---|---|---|---|---|
| id | UUID | PK, NN | Generated UUID | Identifier unik log aktivitas |
| user_id | UUID | FK, NN, IDX | - | Referensi ke users.id |
| action | VARCHAR(50) | NN | - | Nama tindakan yang dilakukan |
| entity_type | VARCHAR(50) | NN | - | Jenis entitas yang terpengaruh |
| entity_id | UUID | NULL | NULL | ID entitas yang terpengaruh (polimorfik) |
| metadata | JSONB | NULL | NULL | Data tambahan peristiwa yang telah disanitasi |
| created_at | TIMESTAMPTZ | NN | now() | Timestamp terjadinya aktivitas |

Contoh Jenis Aksi:

- LOGIN
- LOGOUT
- CREATE_PRODUCT
- UPDATE_PRODUCT
- DEACTIVATE_PRODUCT
- STOCK_IN
- STOCK_OUT
- STOCK_ADJUSTMENT
- CHECKOUT
- CREATE_USER
- UPDATE_USER_ROLE
- DEACTIVATE_USER

Kolom `entity_id` merupakan referensi polimorfik, bukan foreign key langsung di basis data.

Dilarang keras menyimpan kata sandi, token sesi, kunci rahasia, atau data sensitif pelanggan di dalam kolom `metadata`.

## 16. Tabel: store_settings

Prioritas: Should Have (Sebaiknya Ada).

Tujuan: Memelihara konfigurasi informasi satu toko tunggal (singleton).

| Kolom | Tipe Data | Konstrain | Nilai Default | Deskripsi |
|---|---|---|---|---|
| id | INTEGER | PK, NN, CK | 1 | Identifier singleton bernilai 1 |
| store_name | VARCHAR(150) | NN | CashierFlow Demo | Nama resmi toko |
| address | TEXT | NULL | NULL | Alamat fisik toko |
| phone | VARCHAR(30) | NULL | NULL | Nomor telepon kontak toko |
| timezone | VARCHAR(100) | NN | Asia/Jakarta | Zona waktu IANA toko |
| receipt_header | TEXT | NULL | NULL | Teks catatan pada bagian atas struk |
| receipt_footer | TEXT | NULL | NULL | Teks ucapan pada bagian bawah struk |
| updated_at | TIMESTAMPTZ | NN | now() | Timestamp pembaruan terakhir |

Konstrain Singleton:

    CHECK (id = 1)

Hanya satu rekaman pengaturan yang diperbolehkan di dalam tabel ini.

Nilai zona waktu wajib divalidasi mengacu pada standar zona waktu IANA yang valid.

## 17. Referensi Tipe Enum

| Nama Enum | Nilai-Nilai yang Diizinkan |
|---|---|
| UserRole | OWNER, ADMIN, CASHIER |
| MovementType | STOCK_IN, STOCK_OUT, ADJUSTMENT, SALE |
| PaymentMethod | CASH |

## 18. Aturan Representasi Data

- Seluruh timestamp mencerminkan titik waktu absolut.
- Timestamp pada aplikasi diserialisasi dalam format UTC.
- Laporan bisnis disajikan menggunakan zona waktu toko yang dikonfigurasi.
- Nilai moneter dikonversi ke format angka JSON yang aman hanya setelah divalidasi batas rentangnya.
- Tipe native JavaScript BigInt tidak boleh diserialisasi langsung ke JSON tanpa konversi yang terkontrol.
- Format tampilan mata uang kepada pengguna menggunakan kaidah Rupiah Indonesia (contoh: `Rp15.000`).
- String wajib tidak boleh kosong setelah proses trimming whitespace.
- String opsional yang kosong dinormalisasi menjadi nilai NULL pada basis data.

## 19. Kebijakan Data Historis

Transaksi penjualan yang telah selesai mempertahankan:

- Nama produk saat dibeli.
- SKU produk saat dibeli.
- Satuan unit saat dibeli.
- Harga jual saat transaksi terjadi.
- Harga beli/modal saat transaksi terjadi.
- Kuantitas barang yang dibeli.
- Total nilai pembayaran dan kembalian.

Pembaruan pada master data produk di masa depan tidak boleh mengubah nilai transaksi historis masa lalu.

Format teks header dan footer struk dapat menggunakan pengaturan toko terkini pada rilis MVP.

## 20. Dokumen Terkait

- [Diagram Relasi Entitas (ERD)](erd.md)
- [Spesifikasi Perancangan Basis Data](database-design.md)
- [Spesifikasi Aturan Bisnis](business-rules.md)
- [Matriks CRUD](crud-matrix.md)
- [Matriks RBAC](rbac-matrix.md)
