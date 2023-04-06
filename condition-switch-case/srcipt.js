let nama = "jon heri";
let usia = 35;
let tinggiBadan = 170.2;
let beratBadan;
let pasangan = "";

beratBadan = 57;

switch (pasangan) {
  case null:
  case "":
    pasangan = "Belum Ada";
    break;
  default:
    pasangan = pasangan;
    break;
}

alert(
  `Nama saya adalah ${nama}, usia saya ${usia}thn, tingi badan saya ${tinggiBadan}cm, berat badang ${beratBadan}kg, dan pasangan ${pasangan}`
);
