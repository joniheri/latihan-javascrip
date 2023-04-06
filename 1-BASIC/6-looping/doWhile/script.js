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

// Looping DoWhile
let i = 1;
do {
  console.log(`Testing:`, i);
  i++;
} while (i <= 5);

let index = 0;
do {
  console.log(`Mahasiswa ${index + 1}:`, mahasiswa[index]);
  index++;
} while (index < mahasiswa.length);

let indexDua = 0;
do {
  console.log(`ID Mahasiswa ${indexDua + 1}:`, mahasiswaDua[indexDua].id);
  console.log(`Nama Mahasiswa ${indexDua + 1}:`, mahasiswaDua[indexDua].nama);
  console.log(`JK Mahasiswa ${indexDua + 1}:`, mahasiswaDua[indexDua].jk);
  indexDua++;
} while (indexDua < mahasiswaDua.length);
// End Looping DoWhile
