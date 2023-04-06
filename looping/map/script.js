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

// Looping map
let data = [1, 2, 3, 4, 5];
data.map((item, index) => {
  console.log(`Testing:`, index + 1);
});

mahasiswa.map((mhs, index) => {
  console.log(`Mahasiswa ${index + 1}:`, mhs);
});

mahasiswaDua.map((mhs, index) => {
  console.log(`ID Mahasiswa ${index + 1}:`, mhs.id);
  console.log(`Nama Mahasiswa ${index + 1}:`, mhs.nama);
  console.log(`JK Mahasiswa ${index + 1}:`, mhs.jk);
});
// End Looping map
