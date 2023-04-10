// MENGHITUNG TOTAL GAJI YANG DIDAPAT DALAM 1 BULAN DENGAN INPUT MINIMAL:
/**
 * - Nama Karyawan
 * - Gaji Perhari
 * - Jumlah hari masuk kerja dalam sebulan
 */

// Format Rupiah
const rupiah = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};
// console.log(rupiah(20000)); // "Rp 20.000,00" -->example

// Jawaban
const gajiKarwayawanSebulan = (
  nama,
  jabatan,
  gajiPerhari,
  jumlahMasukKerjaSebulan
) => {
  console.log(`Nama Karyawan: ${nama}`);
  console.log(`Jabatan: ${jabatan}`);
  console.log(`Gaji perhari: ${rupiah(gajiPerhari)}`);
  console.log(`Total masuk kerja dalam sebulan: ${jumlahMasukKerjaSebulan}`);
  console.log(`Gaji sebulan: ${rupiah(gajiPerhari * jumlahMasukKerjaSebulan)}`);
};
gajiKarwayawanSebulan("Jon Heri", "Software Engineer", 520000, 22);
