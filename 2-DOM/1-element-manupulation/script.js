let tanggalSekarangFull = new Date();
let tanggalSekarang = tanggalSekarangFull.getDate();
let indexTanggalSekarang = tanggalSekarangFull.getDay();
let indexBulanSekarang = tanggalSekarangFull.getMonth();
let tahunSekarang = tanggalSekarangFull.getFullYear();
let namaHari = [
  "minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jum'at",
  "Sabtu",
];
let namaBulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

console.log(`Tanggal sekarang: ${tanggalSekarang}`);
console.log(`Nama hari sekarang: ${namaHari[indexTanggalSekarang]}`);
console.log(`Bulan sekarang: ${indexBulanSekarang + 1}`);
console.log(`Nama bulan sekarang: ${namaBulan[indexBulanSekarang]}`);
console.log(`Tahun sekarang: ${tahunSekarang}`);
console.log(
  `Tgl: ${namaHari[indexTanggalSekarang]}, ${tanggalSekarang}-${namaBulan[indexBulanSekarang]}-${tahunSekarang}`
);
