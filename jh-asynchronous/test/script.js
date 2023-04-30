function pelanggan1() {
  console.log("Pelanggan 1");
}
function pelanggan2() {
  console.log("Pelanggan 2");
}
function pelanggan3() {
  return new Promise((succes, fail) => {
    setTimeout(() => {
      succes(console.log("Pelanggan 3"));
    }, 2000);
  });
}
function pelanggan4() {
  console.log("Pelanggan 4");
}

async function processPemesanan() {
  pelanggan1();
  pelanggan2();
  await pelanggan3();
  pelanggan4();
}
processPemesanan();
