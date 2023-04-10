document.title = "Belajar DOM";

const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");

console.log(btn1);
console.log(btn2);

function peringatan() {
  alert("Peringatan DISINI");
}

function ubahTextBtn2() {
  btn2.style.background = "aqua";
  btn2.textContent = "hover";
}

function defautlTextBtn2() {
  btn2.textContent = "Klik saya 2";
}
