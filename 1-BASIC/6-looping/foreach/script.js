// Data
let mahasiswa = ["yudi", "robert", "wandi"];
let mahasiswaDua = [
  {
    id: 1,
    nama: "yudi",
    jk: "Laki-laki",
  },
  {
    id: 2,
    nama: "robert",
    jk: "Laki-laki",
  },
  {
    id: 3,
    nama: "wandi",
    jk: "Laki-laki",
  },
  {
    id: 4,
    nama: "amel",
    jk: "Perempuan",
  },
];
// End Data

// Looping foreach
let data = [1, 2, 3, 4, 5];
data.forEach((item, index) => {
  console.log(`Testing:`, index + 1);
});

mahasiswa.forEach((item, index) => {
  console.log(`Mahasiswa ${index + 1}:`, item);
});

mahasiswaDua.forEach((item, index) => {
  console.log(`ID Mahasiswa ${index + 1}:`, item.id);
  console.log(`Nama Mahasiswa ${index + 1}:`, item.nama);
  console.log(`JK Mahasiswa ${index + 1}:`, item.jk);
});
// End Looping foreach
