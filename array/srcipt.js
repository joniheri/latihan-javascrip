let mahasiswa = ["yudi", "robert", "wandi"];
let mahasiswaDua = [
  {
    id: 1,
    nama: "yudi",
  },
  {
    id: 2,
    nama: "robert",
  },
  {
    id: 3,
    nama: "wandi",
  },
];

mahasiswa.push("amel", "rahmat");
mahasiswaDua.push(
  {
    id: 4,
    nama: "amel",
  },
  {
    id: 5,
    nama: "rahmat",
  }
);

alert(mahasiswa);
alert(mahasiswa[0]);
console.log("data Array: ", mahasiswaDua);
console.log("data Array Index 0: ", mahasiswaDua[0]);
console.log("data Array By ID: ", mahasiswaDua[0].id);
