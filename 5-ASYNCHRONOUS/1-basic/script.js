function satu() {
  console.log("satu");
}

function dua() {
  console.log(`Function 2 disini`);
  setTimeout(() => {
    console.log("dua");
  }, 3000);
}

function tiga() {
  console.log("tiga");
}

satu();
dua();
tiga();
