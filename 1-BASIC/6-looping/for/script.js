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

// Looping For
for (let i = 1; i <= 5; i++) {
  console.log(`Testing:`, i);
}

for (let i = 0; i < mahasiswa.length; i++) {
  console.log(`Mahasiswa ${i + 1}:`, mahasiswa[i]);
}

for (let i = 0; i < mahasiswaDua.length; i++) {
  console.log(`ID Mahasiswa ${i + 1}:`, mahasiswaDua[i].id);
  console.log(`Nama Mahasiswa ${i + 1}:`, mahasiswaDua[i].nama);
  console.log(`JK Mahasiswa ${i + 1}:`, mahasiswaDua[i].jk);
}
// End Looping For
