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

// Looping While
let i = 1;
while (i <= 5) {
  console.log(`Testing:`, i);
  i++;
}

let index = 0;
while (index < mahasiswa.length) {
  console.log(`Mahasiswa ${index + 1}:`, mahasiswa[index]);
  index++;
}

let indexDua = 0;
while (indexDua < mahasiswaDua.length) {
  console.log(`ID Mahasiswa ${indexDua + 1}:`, mahasiswaDua[indexDua].id);
  console.log(`Nama Mahasiswa ${indexDua + 1}:`, mahasiswaDua[indexDua].nama);
  console.log(`JK Mahasiswa ${indexDua + 1}:`, mahasiswaDua[indexDua].jk);
  indexDua++;
}
// End Looping While
